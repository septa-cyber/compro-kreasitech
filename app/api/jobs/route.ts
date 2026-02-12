
import { NextResponse } from 'next/server';
import { getJobs, createJob } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;

    const jobs = await getJobs(status);

    return NextResponse.json(jobs);
}

export async function POST(request: Request) {
    const session = await getSession();
    if (!session.valid) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const newJob = await createJob({
            ...body,
            postedDate: body.postedDate || new Date().toISOString().split('T')[0],
        });

        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}
