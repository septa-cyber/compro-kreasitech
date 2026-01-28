"use client";

import React from "react";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import { BlogPost } from "@/app/data/blogData";

interface ArticleHeaderProps {
    post: BlogPost;
}

export default function ArticleHeader({ post }: ArticleHeaderProps) {
    return (
        <section className="relative overflow-hidden bg-[#F4F4F7] py-12 md:py-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: post.title.substring(0, 30) + "...", href: `/blog/${post.slug}` }
                    ]} />

                    {/* Category & Date */}
                    <div className="flex items-center gap-4">
                        <span className={`${post.categoryColor} px-3 py-1 text-xs font-semibold font-montserrat tracking-wide rounded-[4px]`}>
                            {post.category}
                        </span>
                        <span className="text-gray-500 text-sm font-montserrat">
                            {post.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-montserrat leading-tight text-text-light">
                        {post.title}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="text-base font-medium font-montserrat text-text-light">
                                {post.author.name}
                            </p>
                            <p className="text-sm text-gray-500 font-montserrat">
                                Penulis
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
