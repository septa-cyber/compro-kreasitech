import { NextResponse } from 'next/server';
import { getUsers, createUser } from '@/lib/db';
import { getSession, getCurrentUser, hashPassword } from '@/lib/auth';

export async function GET() {
    const user = await getCurrentUser();
    if (!user || user.role !== 'super_admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const users = await getUsers();
    // Don't send passwords
    const safeUsers = users.map(({ password, ...u }) => u);
    return NextResponse.json(safeUsers);
}

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== 'super_admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { email, password, name, role } = body;

        if (!email || !password || !name || !role) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await createUser({
            email,
            password: hashedPassword,
            name,
            role
        });

        const { password: _, ...safeUser } = newUser;
        return NextResponse.json(safeUser, { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}
