
"use client";

import { useEffect, useState } from 'react';
import JobForm from '../../JobForm';
import { Job } from '@/lib/types';
import { useParams } from 'next/navigation';

export default function EditJobPage() {
    const params = useParams();
    const id = params.id;
    const [job, setJob] = useState<Job | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchJob(id as string);
        }
    }, [id]);

    const fetchJob = async (jobId: string) => {
        try {
            const res = await fetch(`/api/jobs/${jobId}`);
            if (res.ok) {
                const data = await res.json();
                setJob(data);
            } else {
                alert('Job not found');
            }
        } catch (error) {
            console.error('Error fetching job:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (!job) return <div>Job not found</div>;

    return (
        <JobForm initialData={job} isEdit={true} />
    );
}
