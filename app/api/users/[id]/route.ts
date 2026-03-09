import { NextResponse } from 'next/server';
import { updateUser, deleteUser, getUserById } from '@/lib/db';
import { getCurrentUser, hashPassword } from '@/lib/auth';

const PROTECTED_EMAIL = 'admin@kreasi.tech';

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== 'super_admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Check if TARGET user is protected
        const targetUser = await getUserById(id);
        if (targetUser && targetUser.email === PROTECTED_EMAIL) {
            return NextResponse.json({ error: 'Primary admin cannot be edited' }, { status: 403 });
        }

        const body = await request.json();
        const { password, ...updateData } = body;

        if (password) {
            updateData.password = await hashPassword(password);
        }

        const updatedUser = await updateUser(id, updateData);
        if (!updatedUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const { password: _, ...safeUser } = updatedUser;
        return NextResponse.json(safeUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== 'super_admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Prevent deleting self
    if (id === currentUser.id) {
        return NextResponse.json({ error: 'Cannot delete yourself' }, { status: 400 });
    }

    try {
        // Check if TARGET user is protected
        const targetUser = await getUserById(id);
        if (targetUser && targetUser.email === PROTECTED_EMAIL) {
            return NextResponse.json({ error: 'Primary admin cannot be deleted' }, { status: 403 });
        }

        const success = await deleteUser(id);
        if (!success) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}
