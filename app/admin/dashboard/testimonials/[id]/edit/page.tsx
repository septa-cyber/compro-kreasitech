
"use client";

import { useEffect, useState } from 'react';
import TestimonialForm from '../../TestimonialForm';
import { Testimonial } from '@/lib/types';
import { useParams } from 'next/navigation';

export default function EditTestimonialPage() {
    const params = useParams();
    const id = params.id;
    const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchTestimonial(id as string);
        }
    }, [id]);

    const fetchTestimonial = async (id: string) => {
        try {
            const res = await fetch(`/api/testimonials/${id}`);
            if (res.ok) {
                const data = await res.json();
                setTestimonial(data);
            } else {
                alert('Testimonial not found');
            }
        } catch (error) {
            console.error('Error fetching:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (!testimonial) return <div>Testimonial not found</div>;

    return <TestimonialForm initialData={testimonial} isEdit={true} />;
}
