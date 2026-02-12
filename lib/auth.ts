import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { getUserByEmail, getUserById } from './db';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    createdAt: string;
}

// Find user by email
export async function findUserByEmail(email: string): Promise<User | null> {
    return await getUserByEmail(email);
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

// Hash password (for creating new users)
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

// Create session token (simple base64 encoding for demo)
export function createSessionToken(userId: string): string {
    const sessionData = {
        userId,
        createdAt: Date.now(),
        expiresAt: Date.now() + (SESSION_MAX_AGE * 1000)
    };
    return Buffer.from(JSON.stringify(sessionData)).toString('base64');
}

// Verify session token
export function verifySessionToken(token: string): { userId: string; valid: boolean } {
    try {
        const decoded = Buffer.from(token, 'base64').toString('utf-8');
        const sessionData = JSON.parse(decoded);

        if (sessionData.expiresAt < Date.now()) {
            return { userId: '', valid: false };
        }

        return { userId: sessionData.userId, valid: true };
    } catch {
        return { userId: '', valid: false };
    }
}

// Set session cookie
export async function setSessionCookie(userId: string): Promise<void> {
    const token = createSessionToken(userId);
    const cookieStore = await cookies();

    cookieStore.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: SESSION_MAX_AGE,
        path: '/',
    });
}

// Get session from cookie
export async function getSession(): Promise<{ userId: string; valid: boolean }> {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!token) {
        return { userId: '', valid: false };
    }

    return verifySessionToken(token);
}

// Clear session cookie
export async function clearSessionCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
}

// Get current user from session
export async function getCurrentUser(): Promise<User | null> {
    const session = await getSession();

    if (!session.valid) {
        return null;
    }

    return await getUserById(session.userId);
}
