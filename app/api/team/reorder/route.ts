import { NextResponse } from 'next/server';
import { reorderTeam } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function PUT(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { orderedIds } = await request.json();

        if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
            return NextResponse.json({ error: 'Invalid orderedIds' }, { status: 400 });
        }

        const success = await reorderTeam(orderedIds);

        if (success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ error: 'Failed to reorder team' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error reordering team:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
