"use client";

import React from "react";
import { BlogPost } from "@/app/data/blogData";

interface ArticleContentProps {
    post: BlogPost;
}

export default function ArticleContent({ post }: ArticleContentProps) {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cover Image */}
                <div className="max-w-4xl mx-auto mb-10 md:mb-16">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto prose prose-lg prose-gray font-montserrat">
                    <div
                        className="
                            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-medium [&>h2]:text-text-light [&>h2]:mt-10 [&>h2]:mb-6
                            [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-medium [&>h3]:text-text-light [&>h3]:mt-8 [&>h3]:mb-4
                            [&>p]:text-base [&>p]:md:text-lg [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-6
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:text-gray-600 [&>ul>li]:mb-2
                            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:text-gray-600 [&>ol>li]:mb-2
                            [&>blockquote]:border-l-4 [&>blockquote]:border-violet-600 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:bg-gray-50 [&>blockquote]:rounded-r-lg
                            [&>strong]:font-semibold [&>strong]:text-text-light
                            [&_strong]:font-semibold [&_strong]:text-text-light
                        "
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .replace(/^## /gm, '<h2>')
                                .replace(/^### /gm, '<h3>')
                                .replace(/<h2>(.+)/gm, '<h2>$1</h2>')
                                .replace(/<h3>(.+)/gm, '<h3>$1</h3>')
                                .replace(/^\- \*\*(.+?)\*\*: (.+)/gm, '<li><strong>$1</strong>: $2</li>')
                                .replace(/^\- \*\*(.+?)\*\* (.+)/gm, '<li><strong>$1</strong> $2</li>')
                                .replace(/^- (.+)/gm, '<li>$1</li>')
                                .replace(/^(\d+)\. \*\*(.+?)\*\* (.+)/gm, '<li><strong>$2</strong> $3</li>')
                                .replace(/^(\d+)\. (.+)/gm, '<li>$1. $2</li>')
                                .replace(/> "(.+)" - (.+)/gm, '<blockquote>"$1" — $2</blockquote>')
                                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\n\n/g, '</p><p>')
                                .replace(/(<li>.+<\/li>\n?)+/g, '<ul>$&</ul>')
                        }}
                    />
                </article>
            </div>
        </section>
    );
}
