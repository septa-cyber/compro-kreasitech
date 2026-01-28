"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";
import ArticleHeader from "@/app/components/blog/ArticleHeader";
import ArticleContent from "@/app/components/blog/ArticleContent";
import ArticleMeta from "@/app/components/blog/ArticleMeta";
import RelatedArticles from "@/app/components/blog/RelatedArticles";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/app/data/blogData";
import Link from "next/link";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;

    const post = getBlogPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug, 3);

    // Get previous and next posts
    const currentIndex = blogPosts.findIndex(p => p.slug === slug);
    const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;

    if (!post) {
        return (
            <div className="bg-background-light text-gray-900 font-sans transition-colors duration-300 antialiased min-h-screen">
                <Navbar />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-3xl font-medium font-montserrat text-text-light mb-4">
                        Artikel Tidak Ditemukan
                    </h1>
                    <p className="text-gray-500 font-montserrat mb-8">
                        Maaf, artikel yang Anda cari tidak tersedia.
                    </p>
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium font-montserrat transition-colors"
                    >
                        Kembali ke Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background-light text-gray-900 font-sans transition-colors duration-300 antialiased overflow-x-hidden">
            <Navbar />
            <ArticleHeader post={post} />
            <ArticleContent post={post} />
            <ArticleMeta
                post={post}
                previousPost={previousPost}
                nextPost={nextPost}
            />
            <RelatedArticles posts={relatedPosts} />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
