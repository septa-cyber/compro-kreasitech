
import { NextResponse } from 'next/server';
import { getPartners, createPartner } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;

    const partners = await getPartners(status);

    return NextResponse.json(partners);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const newPartner = await createPartner(body);

        return NextResponse.json(newPartner, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}
