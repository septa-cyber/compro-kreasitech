"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/app/data/blogData";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <article className="flex flex-col group cursor-pointer h-full">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                    {/* Category */}
                    <span className="text-violet-600 font-semibold text-sm font-montserrat mb-3">
                        {post.category}
                    </span>

                    {/* Title with arrow */}
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium font-montserrat text-text-light group-hover:text-violet-600 transition-colors line-clamp-2 pr-4">
                            {post.title}
                        </h3>
                        <svg
                            className="w-5 h-5 flex-shrink-0 text-text-light transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-500 font-montserrat text-sm mb-6 line-clamp-2">
                        {post.excerpt}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center gap-3 mt-auto">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-medium font-montserrat text-text-light">
                                {post.author.name}
                            </p>
                            <p className="text-sm text-gray-500 font-montserrat">
                                {post.date}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
