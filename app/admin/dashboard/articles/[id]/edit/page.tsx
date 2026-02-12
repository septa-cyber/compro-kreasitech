
"use client";

import { useEffect, useState } from 'react';
import ArticleForm from '../../ArticleForm';
import { BlogPost } from '@/lib/types';
import { useParams } from 'next/navigation';

export default function EditArticlePage() {
    const params = useParams();
    const id = params.id;
    const [article, setArticle] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchArticle(id as string);
        }
    }, [id]);

    const fetchArticle = async (articleId: string) => {
        try {
            const res = await fetch(`/api/articles/${articleId}`);
            if (res.ok) {
                const data = await res.json();
                setArticle(data);
            } else {
                alert('Article not found');
            }
        } catch (error) {
            console.error('Error fetching article:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (!article) return <div>Article not found</div>;

    return (
        <ArticleForm initialData={article} isEdit={true} />
    );
}
