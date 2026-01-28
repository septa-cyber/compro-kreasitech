"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";
import BlogHero from "@/app/components/blog/BlogHero";
import BlogFilter from "@/app/components/blog/BlogFilter";
import BlogList from "@/app/components/blog/BlogList";
import BlogPagination from "@/app/components/blog/BlogPagination";
import { blogPosts, categories } from "@/app/data/blogData";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    // Featured post is the first post
    const featuredPost = blogPosts[0];

    // Filter posts (excluding featured post for the grid)
    const filteredPosts = useMemo(() => {
        const postsWithoutFeatured = blogPosts.filter(post => post.id !== featuredPost.id);

        if (activeCategory === "all") {
            return postsWithoutFeatured;
        }
        return postsWithoutFeatured.filter(post => post.category === activeCategory);
    }, [activeCategory, featuredPost.id]);

    // Paginate
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    // Reset page when category changes
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to filter section
        window.scrollTo({ top: 600, behavior: 'smooth' });
    };

    return (
        <div className="bg-background-light text-gray-900 font-sans transition-colors duration-300 antialiased overflow-x-hidden">
            <Navbar />

            <BlogHero featuredPost={featuredPost} />

            <section className="bg-white pt-8">
                <BlogFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />
            </section>

            <BlogList posts={paginatedPosts} />

            {totalPages > 1 && (
                <section className="bg-white">
                    <BlogPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-[#F4F4F7]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-medium font-montserrat text-text-light mb-2">
                                Mulai Transformasi Digital Anda
                            </h2>
                            <p className="text-base text-gray-500 font-montserrat">
                                Bergabung dengan 100+ perusahaan yang sudah menggunakan layanan kami.
                            </p>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium font-montserrat hover:bg-gray-50 transition-colors">
                                Pelajari Lebih
                            </button>
                            <button className="flex-1 md:flex-none px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium font-montserrat transition-colors">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
