"use client";

import React from "react";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import Link from "next/link";
import { BlogPost } from "@/app/data/blogData";

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
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl text-text-light">
                        Jelajahi <br />
                        <span className="font-semibold text-violet-600">Karya Terbaik</span> Kami
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 font-montserrat">
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
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-montserrat text-white mb-3">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-200 text-base sm:text-lg font-montserrat mb-6 line-clamp-2">
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
                                            <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1 font-montserrat">Ditulis oleh</span>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={featuredPost.author.avatar}
                                                    alt={featuredPost.author.name}
                                                    className="w-6 h-6 rounded-full border border-white/20"
                                                />
                                                <span className="font-medium text-white font-montserrat">{featuredPost.author.name}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1 font-montserrat">Dipublikasikan</span>
                                            <span className="font-medium text-white font-montserrat">{featuredPost.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {featuredPost.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full border border-white/30 text-white text-xs font-medium font-montserrat backdrop-blur-sm"
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
