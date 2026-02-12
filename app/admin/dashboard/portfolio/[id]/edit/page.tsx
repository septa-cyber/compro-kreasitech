
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PortfolioForm from '../../PortfolioForm';
import { PortfolioItem } from '@/lib/types';

export default function EditPortfolioPage() {
    const params = useParams();
    const id = params.id as string;
    const [item, setItem] = useState<PortfolioItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await fetch(`/api/portfolio/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setItem(data);
                }
            } catch (error) {
                console.error('Error fetching portfolio item:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!item) return <div>Portfolio item not found</div>;

    return <PortfolioForm initialData={item} isEdit />;
}
