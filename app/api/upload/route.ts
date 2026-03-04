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

        // Try Supabase Storage first if enabled
        const isSupabaseEnabled = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (isSupabaseEnabled) {
            try {
                // Try 'uploads' bucket first, then 'job-logos' as fallback
                const buckets = ['uploads', 'job-logos'];

                for (const bucket of buckets) {
                    const { data, error } = await supabase.storage
                        .from(bucket)
                        .upload(filename, buffer, {
                            contentType: file.type,
                            upsert: true
                        });

                    if (!error) {
                        const { data: { publicUrl } } = supabase.storage
                            .from(bucket)
                            .getPublicUrl(filename);

                        return NextResponse.json({ url: publicUrl });
                    }

                    console.warn(`Supabase bucket '${bucket}' upload failed:`, error.message);
                }

                // If all Supabase buckets fail, fall through to local storage
                console.warn('All Supabase buckets failed, falling back to local storage');
            } catch (err: any) {
                console.warn('Supabase storage error, falling back to local:', err?.message);
            }
        }

        // Fallback to local storage (public/uploads)
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
        console.error('Upload error:', error?.message || error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
