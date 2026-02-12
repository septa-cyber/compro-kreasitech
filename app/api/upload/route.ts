import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { supabase } from '@/lib/supabase';
import { getSession } from '@/lib/auth';

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;

        // Try Supabase Storage first if enabled
        const isSupabaseEnabled = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (isSupabaseEnabled) {
            try {
                // Ensure bucket exists in Supabase Dashboard (job-logos)
                const { data, error } = await supabase.storage
                    .from('job-logos')
                    .upload(filename, buffer, {
                        contentType: file.type,
                        upsert: true
                    });

                if (error) {
                    console.error('Supabase upload error:', error);
                    // Fallback to local if bucket not found or other error
                } else {
                    const { data: { publicUrl } } = supabase.storage
                        .from('job-logos')
                        .getPublicUrl(filename);

                    return NextResponse.json({ url: publicUrl });
                }
            } catch (err) {
                console.error('Supabase storage error:', err);
            }
        }

        // Fallback to local storage (public/uploads)
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (err) {
            // Directory might already exist
        }

        const path = join(uploadDir, filename);
        await writeFile(path, buffer);

        return NextResponse.json({ url: `/uploads/${filename}` });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
