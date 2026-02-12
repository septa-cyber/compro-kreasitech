import { NextResponse } from 'next/server';
import { findUserByEmail, verifyPassword, setSessionCookie } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email dan password harus diisi' },
                { status: 400 }
            );
        }

        // Find user
        const user = await findUserByEmail(email);

        if (!user) {
            console.log('Login failed: User not found for email:', email);
            return NextResponse.json(
                { error: 'Email atau password salah' },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password);
        console.log('Password verification result:', isValidPassword);

        if (!isValidPassword) {
            console.log('Login failed: Invalid password for user:', email);
            return NextResponse.json(
                { error: 'Email atau password salah' },
                { status: 401 }
            );
        }

        // Set session cookie
        await setSessionCookie(user.id);

        // Return success (exclude password from response)
        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Terjadi kesalahan server' },
            { status: 500 }
        );
    }
}

