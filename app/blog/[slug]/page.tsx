"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleMeta from "@/components/blog/ArticleMeta";
import RelatedArticles from "@/components/blog/RelatedArticles";
import Link from "next/link";
import BlogCTA from "@/components/blog/BlogCTA";
import { BlogPost } from "@/lib/types";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<BlogPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [previousPost, setPreviousPost] = useState<BlogPost | undefined>(undefined);
    const [nextPost, setNextPost] = useState<BlogPost | undefined>(undefined);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('/api/articles?status=publish');
                if (res.ok) {
                    const articles: BlogPost[] = await res.json();

                    const currentPost = articles.find(p => p.slug === slug);
                    setPost(currentPost || null);

                    if (currentPost) {
                        // Find index
                        const currentIndex = articles.findIndex(p => p.slug === slug);
                        setPreviousPost(currentIndex > 0 ? articles[currentIndex - 1] : undefined);
                        setNextPost(currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined);

                        // Related Posts (same category, exclude current)
                        const related = articles
                            .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
                            .slice(0, 3);
                        setRelatedPosts(related);
                    }
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchArticles();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Navbar />
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mt-20"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="bg-background-light text-gray-900 font-sans transition-colors duration-300 antialiased min-h-screen">
                <Navbar />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="font-h1 max-w-6xl mx-auto mb-8">
                        Artikel Tidak Ditemukan
                    </h1>
                    <p className="font-body text-gray-500 mb-8">
                        Maaf, artikel yang Anda cari tidak tersedia.
                    </p>
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-btn transition-colors"
                    >
                        Kembali ke Blog
                    </Link>
                </div>
                <BlogCTA />
                <Footer />
            </div>
        );
    }

    return (
        <div className="transition-colors duration-300 antialiased overflow-x-hidden">
            <Navbar />
            <ArticleHeader post={post} />
            <ArticleContent post={post} />
            <ArticleMeta
                post={post}
                previousPost={previousPost}
                nextPost={nextPost}
            />
            <RelatedArticles posts={relatedPosts} />
            <BlogCTA />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
