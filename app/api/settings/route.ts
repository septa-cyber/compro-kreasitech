import { NextResponse } from 'next/server';
import { getSiteSettings, updateSiteSettings } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET() {
    try {
        const settings = await getSiteSettings();
        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error fetching settings:', error);
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const success = await updateSiteSettings(body);

        if (success) {
            return NextResponse.json({ message: 'Settings updated successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error in PUT /api/settings:', error);
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}
