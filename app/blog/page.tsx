"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilter from "@/components/blog/BlogFilter";
import BlogList from "@/components/blog/BlogList";
import BlogPagination from "@/components/blog/BlogPagination";
import { categories } from "@/data/blogData";
import BlogCTA from "@/components/blog/BlogCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/articles?status=publish');
                if (res.ok) {
                    const data = await res.json();
                    setPosts(data);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Featured post is the first post
    const featuredPost = posts.length > 0 ? posts[0] : null;

    // Filter posts (excluding featured post for the grid)
    const filteredPosts = useMemo(() => {
        if (!featuredPost) return [];

        const postsWithoutFeatured = posts.filter(post => post.id !== featuredPost.id);

        if (activeCategory === "all") {
            return postsWithoutFeatured;
        }
        return postsWithoutFeatured.filter(post => post.category === activeCategory);
    }, [activeCategory, featuredPost, posts]);

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

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
            </div>
        );
    }

    return (
        <div className="transition-colors duration-300 antialiased overflow-x-hidden">
            <Navbar />

            {featuredPost && <BlogHero featuredPost={featuredPost} />}

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

            <BlogCTA />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

