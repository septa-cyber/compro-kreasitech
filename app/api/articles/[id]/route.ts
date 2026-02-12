
import { NextResponse } from 'next/server';
import { getArticleById, updateArticle, deleteArticle } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    const { id: idStr } = await context.params;
    const id = parseInt(idStr);
    const article = await getArticleById(id);

    if (!article) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(article);
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: idStr } = await context.params;
    const id = parseInt(idStr);

    try {
        const body = await request.json();
        const updatedArticle = await updateArticle(id, body);

        if (!updatedArticle) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(updatedArticle);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: idStr } = await context.params;
    const id = parseInt(idStr);
    const success = await deleteArticle(id);

    if (!success) {
        return NextResponse.json({ error: 'Article not found or failed to delete' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
}
