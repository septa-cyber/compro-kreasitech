import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only protect /admin/dashboard routes
    if (pathname.startsWith('/admin/dashboard')) {
        const sessionCookie = request.cookies.get('admin_session');

        if (!sessionCookie?.value) {
            // Redirect to login if no session
            const loginUrl = new URL('/admin/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        // Verify session token
        try {
            const decoded = Buffer.from(sessionCookie.value, 'base64').toString('utf-8');
            const sessionData = JSON.parse(decoded);

            if (sessionData.expiresAt < Date.now()) {
                // Session expired, redirect to login
                const loginUrl = new URL('/admin/login', request.url);
                loginUrl.searchParams.set('redirect', pathname);
                loginUrl.searchParams.set('expired', 'true');
                return NextResponse.redirect(loginUrl);
            }
        } catch {
            // Invalid session, redirect to login
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // If already logged in and trying to access login page, redirect to dashboard
    if (pathname === '/admin/login') {
        const sessionCookie = request.cookies.get('admin_session');

        if (sessionCookie?.value) {
            try {
                const decoded = Buffer.from(sessionCookie.value, 'base64').toString('utf-8');
                const sessionData = JSON.parse(decoded);

                if (sessionData.expiresAt > Date.now()) {
                    // Valid session, redirect to dashboard
                    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
                }
            } catch {
                // Invalid token, continue to login
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/dashboard/:path*', '/admin/login'],
};
