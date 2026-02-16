
import { NextResponse } from 'next/server';
import { getTestimonials, createTestimonial } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;

    const testimonials = await getTestimonials(status);

    return NextResponse.json(testimonials);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const newTestimonial = await createTestimonial({
            status: 'visible', // Default status
            ...body
        });

        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        console.error('Error creating testimonial:', error);
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}
