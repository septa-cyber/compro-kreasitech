import { NextResponse } from 'next/server';
import { getCurrentUser, verifyPassword, hashPassword } from '@/lib/auth';
import { updateUser } from '@/lib/db';

export async function GET() {
    const user = await getCurrentUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { password: _, ...safeUser } = user;
    return NextResponse.json(safeUser);
}

export async function PUT(request: Request) {
    const user = await getCurrentUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { name, avatar_url, currentPassword, newPassword } = body;

        const updateData: any = {};
        if (name) updateData.name = name;
        if (avatar_url) updateData.avatar_url = avatar_url;

        // Handle password change
        if (newPassword) {
            if (!currentPassword) {
                return NextResponse.json({ error: 'Current password is required' }, { status: 400 });
            }

            const isCorrect = await verifyPassword(currentPassword, user.password);
            if (!isCorrect) {
                return NextResponse.json({ error: 'Current password incorrect' }, { status: 400 });
            }

            updateData.password = await hashPassword(newPassword);
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ error: 'No data to update' }, { status: 400 });
        }

        const updatedUser = await updateUser(user.id, updateData);
        if (!updatedUser) {
            return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
        }

        const { password: _, ...safeUser } = updatedUser;
        return NextResponse.json(safeUser);
    } catch (error) {
        console.error('Profile update error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
