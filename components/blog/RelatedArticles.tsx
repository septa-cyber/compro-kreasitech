"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/data/blogData";

interface RelatedArticlesProps {
    posts: BlogPost[];
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
    if (posts.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-h2 mb-8 md:mb-12">
                    Artikel Terkait
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}

