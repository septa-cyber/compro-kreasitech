
import { NextResponse } from 'next/server';
import { getTeam, createTeamMember } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;

    const team = await getTeam(status);

    return NextResponse.json(team);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        console.log('Creating team member:', body);
        const newMember = await createTeamMember(body);
        console.log('Created team member:', newMember);

        return NextResponse.json(newMember, { status: 201 });
    } catch (error: any) {
        console.error('Error creating team member:', error);
        return NextResponse.json({
            error: 'Failed to create team member',
            details: error.message
        }, { status: 400 });
    }
}
