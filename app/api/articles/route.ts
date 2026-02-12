
import { NextResponse } from 'next/server';
import { getArticles, createArticle } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { BlogPost } from '@/lib/types';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;
    const limit = searchParams.get('limit');

    let articles = await getArticles(status);

    // Sort by date desc if not already sorted by DB (DB sorts by created_at desc)
    // articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (limit) {
        articles = articles.slice(0, parseInt(limit));
    }

    return NextResponse.json(articles);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const newArticle = await createArticle({
            ...body,
            date: body.date || new Date().toISOString().split('T')[0],
        });

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}
