"use client";

import React, { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { BlogPost } from "@/lib/types";

interface BlogHeroProps {
    featuredPosts: BlogPost[];
}

export default function BlogHero({ featuredPosts }: BlogHeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Limit to 5 posts
    const slides = featuredPosts.slice(0, 5);

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    }, [slides.length, isAnimating]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    }, [slides.length, isAnimating]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    if (!slides.length) return null;

    const currentPost = slides[currentIndex];

    // Format date properly
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <section className="bg-white">
            {/* Header */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
                <Breadcrumb className="mb-8" items={[
                    { label: "Home", href: "/" },
                    { label: "Article", href: "/blog" }
                ]} />
                <div className="flex flex-col gap-6">
                    <h1 className="font-h1 max-w-6xl">
                        Baca Berita <br />
                        <span className="font-semibold text-violet-600">Terbaru & Terkini</span>
                    </h1>
                    <p className="font-body-lg text-gray-600">
                        Berita industri terbaru, wawancara, teknologi, dan sumber daya terkini.
                    </p>
                </div>
            </div>

            {/* Featured Article Carousel */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative group">
                <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                    {/* Slides */}
                    {slides.map((post, index) => (
                        <div
                            key={post.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${index === currentIndex ? "scale-110" : "scale-100"
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-14 w-full">
                                <Link href={`/blog/${post.slug}`} className="block group/link">
                                    <div className="flex flex-col gap-5 w-full">
                                        <div className="max-w-3xl transform transition-all duration-700 delay-100 translate-y-0 opacity-100">
                                            {/* Category Badge */}
                                            <div className="mb-4">
                                                <span className={`${post.categoryColor} px-3 py-1 font-body-xs font-semibold tracking-wide rounded-[4px]`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                            <h2 className="font-h2 !text-white mb-4 group-hover/link:text-violet-200 transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="font-body-lg !text-gray-300 mb-8 line-clamp-2 max-w-2xl">
                                                {post.excerpt || (post.content ? post.content.substring(0, 150) + "..." : "")}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-end justify-between gap-6 text-sm text-gray-300 border-t border-white/10 pt-6">
                                            <div className="flex items-center gap-8">
                                                <div>
                                                    <span className="block font-body-xs uppercase tracking-wider text-gray-500 mb-1">Dipublikasikan</span>
                                                    <span className="font-body font-medium text-white">{formatDate(post.date)}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags?.slice(0, 3).map((tag, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full border border-white/20 font-body-xs font-medium !text-white backdrop-blur-sm"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="hidden sm:block">
                                                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover/link:bg-white group-hover/link:text-black transition-all duration-300">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                        </svg>
                    </button>

                    {/* Progress Dots */}
                    <div className="absolute top-8 right-10 z-20 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (isAnimating) return;
                                    setCurrentIndex(index);
                                }}
                                className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? "w-8 bg-violet-500" : "w-2 bg-white/40 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

