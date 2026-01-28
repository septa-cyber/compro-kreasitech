"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/app/data/blogData";

interface ArticleMetaProps {
    post: BlogPost;
    previousPost?: BlogPost;
    nextPost?: BlogPost;
}

export default function ArticleMeta({ post, previousPost, nextPost }: ArticleMetaProps) {
    return (
        <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Tags */}
                    <div className="mb-8">
                        <h4 className="text-sm font-medium font-montserrat text-gray-500 mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-montserrat text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-gray-200">
                        {previousPost ? (
                            <Link
                                href={`/blog/${previousPost.slug}`}
                                className="flex-1 p-4 bg-white border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all group"
                            >
                                <p className="text-xs font-montserrat text-gray-400 mb-1">← Artikel Sebelumnya</p>
                                <p className="text-sm font-medium font-montserrat text-text-light group-hover:text-violet-600 line-clamp-1">
                                    {previousPost.title}
                                </p>
                            </Link>
                        ) : (
                            <div className="flex-1" />
                        )}

                        {nextPost ? (
                            <Link
                                href={`/blog/${nextPost.slug}`}
                                className="flex-1 p-4 bg-white border border-gray-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all group text-right"
                            >
                                <p className="text-xs font-montserrat text-gray-400 mb-1">Artikel Berikutnya →</p>
                                <p className="text-sm font-medium font-montserrat text-text-light group-hover:text-violet-600 line-clamp-1">
                                    {nextPost.title}
                                </p>
                            </Link>
                        ) : (
                            <div className="flex-1" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
