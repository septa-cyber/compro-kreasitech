
import { NextResponse } from 'next/server';
import { getPortfolio, createPortfolioItem } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;

    const portfolio = await getPortfolio(status);

    return NextResponse.json(portfolio);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        console.log('Creating portfolio item:', body);
        const newItem = await createPortfolioItem(body);
        console.log('Created portfolio item:', newItem);

        return NextResponse.json(newItem, { status: 201 });
    } catch (error: any) {
        console.error('Error creating portfolio item:', error);
        return NextResponse.json({
            error: 'Failed to create portfolio item',
            details: error.message
        }, { status: 400 });
    }
}
