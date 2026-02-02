"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <article className="bg-white flex flex-col rounded-none overflow-hidden group border border-gray-300 transition-shadow duration-300 hover:shadow-lg h-full">
                {/* Image Side - Fixed Aspect Ratio */}
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content Side */}
                <div className="flex-1 p-6 flex flex-col items-start gap-4">
                    <div className="flex items-center gap-4">
                        <span className={`${post.categoryColor} px-3 py-1 text-xs font-semibold font-montserrat tracking-wide rounded-[4px]`}>
                            {post.category}
                        </span>
                        <span className="text-gray-400 text-xs font-montserrat">
                            {post.date}
                        </span>
                    </div>

                    <h3 className="text-lg font-medium font-montserrat text-text-light leading-snug line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-gray-500 font-montserrat leading-relaxed text-sm line-clamp-3">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto pt-2">
                        <button className="text-text-light hover:text-violet-600 font-medium font-montserrat transition-colors duration-300 flex items-center gap-2 group/btn text-sm">
                            Baca Selengkapnya
                            <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
}
