import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { supabase } from '@/lib/supabase';
import { getSession } from '@/lib/auth';

export async function POST(request: Request) {
    const session = await getSession();

    if (!session.valid) {
        console.error('Upload API Unauthorized. Session status:', session);
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            return NextResponse.json({ error: 'File must be an image' }, { status: 400 });
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: 'File size must be less than 5MB' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename
        const ext = file.name.split('.').pop() || 'png';
        const safeName = file.name
            .replace(/\.[^/.]+$/, '') // remove extension
            .replace(/[^a-zA-Z0-9-_]/g, '-') // sanitize
            .substring(0, 50); // limit length
        const filename = `${Date.now()}-${safeName}.${ext}`;

        // Try Supabase Storage first
        const isSupabaseEnabled = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        const isProduction = process.env.NODE_ENV === 'production';

        if (isSupabaseEnabled) {
            try {
                const { supabaseAdmin } = await import('@/lib/supabase-admin');
                
                // Primary bucket 'uploads', fallback to 'job-logos'
                const buckets = ['uploads', 'job-logos'];
                let lastError = null;

                for (const bucket of buckets) {
                    const { data, error } = await supabaseAdmin.storage
                        .from(bucket)
                        .upload(filename, buffer, {
                            contentType: file.type,
                            upsert: true
                        });

                    if (!error) {
                        const { data: { publicUrl } } = supabaseAdmin.storage
                            .from(bucket)
                            .getPublicUrl(filename);

                        console.log(`Successfully uploaded to Supabase bucket: ${bucket}`);
                        return NextResponse.json({ url: publicUrl });
                    }

                    lastError = error;
                    console.warn(`Supabase bucket '${bucket}' upload failed:`, error.message);
                }

                // If we reach here, Supabase failed. In production, we don't want to fall back to local
                // because it will fail with a "Read-only file system" error.
                if (isProduction) {
                    console.error('All Supabase buckets failed in production. Local fallback disabled.');
                    return NextResponse.json({ 
                        error: 'Upload to cloud storage failed', 
                        details: lastError?.message || 'Check Supabase bucket permissions and existence' 
                    }, { status: 500 });
                }
            } catch (err: any) {
                console.error('Supabase storage initialization error:', err?.message);
                if (isProduction) {
                    return NextResponse.json({ error: 'Cloud storage unavailable' }, { status: 500 });
                }
            }
        } else if (isProduction) {
            console.error('Supabase keys missing in production environment');
            return NextResponse.json({ error: 'Storage configuration missing' }, { status: 500 });
        }

        // Fallback to local storage only in development
        console.warn('Falling back to local storage (Development only)');
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch {
            // Directory might already exist
        }

        const filePath = join(uploadDir, filename);
        await writeFile(filePath, buffer);

        return NextResponse.json({ url: `/uploads/${filename}` });

    } catch (error: any) {
        console.error('Comprehensive upload error:', error?.message || error);
        return NextResponse.json({ 
            error: 'Upload failed',
            message: error?.message || 'An unexpected error occurred'
        }, { status: 500 });
    }
}
