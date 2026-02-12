
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PartnerForm from '../../PartnerForm';
import { Partner } from '@/lib/types';

export default function EditPartnerPage() {
    const params = useParams();
    const id = params.id as string;
    const [partner, setPartner] = useState<Partner | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartner = async () => {
            try {
                const res = await fetch(`/api/partners/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setPartner(data);
                }
            } catch (error) {
                console.error('Error fetching partner:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPartner();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!partner) return <div>Partner not found</div>;

    return <PartnerForm initialData={partner} isEdit />;
}
