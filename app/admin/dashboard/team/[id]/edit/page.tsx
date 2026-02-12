
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import TeamForm from '../../TeamForm';
import { TeamMember } from '@/lib/types';

export default function EditTeamPage() {
    const params = useParams();
    const id = params.id as string;
    const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const res = await fetch(`/api/team/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setTeamMember(data);
                }
            } catch (error) {
                console.error('Error fetching team member:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMember();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!teamMember) return <div>Team member not found</div>;

    return <TeamForm initialData={teamMember} isEdit />;
}
