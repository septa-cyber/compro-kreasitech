"use client";

import React from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { BlogPost } from "@/data/blogData";

interface BlogHeroProps {
    featuredPost: BlogPost;
}

export default function BlogHero({ featuredPost }: BlogHeroProps) {
    return (
        <section className="bg-white">
            {/* Header */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
                <Breadcrumb className="mb-8" items={[
                    { label: "Beranda", href: "/" },
                    { label: "Blog", href: "/blog" }
                ]} />
                <div className="flex flex-col gap-8">
                    <h1 className="font-h1 max-w-6xl">
                        Baca Berita <br />
                        <span className="font-semibold text-violet-600">Terbaru & Terkini</span>
                    </h1>
                    <p className="font-body-lg">
                        Berita industri terbaru, wawancara, teknologi, dan sumber daya terkini.
                    </p>
                </div>
            </div>

            {/* Featured Article */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <Link href={`/blog/${featuredPost.slug}`}>
                    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                        <img
                            src={featuredPost.coverImage}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-12 w-full">
                            <div className="flex flex-col gap-4 max-w-3xl">
                                <div className="flex justify-between items-start w-full">
                                    <div>
                                        <h2 className="font-h2 !text-white mb-3">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="font-body-lg !text-gray-200 mb-6 line-clamp-2">
                                            {featuredPost.excerpt}
                                        </p>
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-gray-300">
                                    <div className="flex items-center gap-6 sm:gap-8">
                                        <div>
                                            <span className="block font-body-xs uppercase tracking-wider text-gray-400 mb-1">Ditulis oleh</span>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={featuredPost.author.avatar}
                                                    alt={featuredPost.author.name}
                                                    className="w-6 h-6 rounded-full border border-white/20"
                                                />
                                                <span className="font-body font-medium text-white">{featuredPost.author.name}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block font-body-xs uppercase tracking-wider text-gray-400 mb-1">Dipublikasikan</span>
                                            <span className="font-body font-medium text-white">{featuredPost.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {featuredPost.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full border border-white/30 font-body-xs font-medium !text-white backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}

