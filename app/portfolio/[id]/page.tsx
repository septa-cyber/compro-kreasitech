
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortfolioItem } from "@/lib/types";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaTag, FaLayerGroup } from "react-icons/fa";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

export default function PortfolioDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [portfolio, setPortfolio] = useState<PortfolioItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeImage, setActiveImage] = useState<string>("");

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch(`/api/portfolio/${params.id}`);
                if (!res.ok) throw new Error("Portfolio not found");
                const data = await res.json();
                setPortfolio(data);
                if (data.image) setActiveImage(data.image);
                else if (data.gallery && data.gallery.length > 0) setActiveImage(data.gallery[0]);
            } catch (error) {
                console.error("Error fetching portfolio:", error);
                // Optionally redirect to 404
            } finally {
                setIsLoading(false);
            }
        };

        if (params.id) {
            fetchPortfolio();
        }
    }, [params.id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#F4F4F7] flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!portfolio) {
        return (
            <div className="min-h-screen bg-[#F4F4F7] flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl font-montserrat font-bold text-gray-800">Proyek tidak ditemukan</h1>
                    <Link href="/portfolio" className="text-violet-600 hover:text-violet-700 font-medium">
                        Kembali ke Portfolio
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const allImages = [portfolio.image, ...(portfolio.gallery || [])].filter(Boolean) as string[];

    return (
        <div className="bg-[#F4F4F7] text-gray-900 font-sans transition-colors duration-300 antialiased overflow-x-hidden min-h-screen flex flex-col">
            <Navbar />
            <div className="bg-white">
                <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio", href: "/portfolio" },
                    { label: portfolio.title, href: "#" }
                ]} />
            </div>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="pb-12 bg-white">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="flex flex-col gap-8 items-start">
                            <div className="flex-1">
                                <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
                                    {portfolio.category || 'Project'}
                                </span>
                                <h1 className="font-h2 text-gray-900 mb-6">
                                    {portfolio.title}
                                </h1>
                                <p className="text-lg text-gray-600 font-montserrat leading-relaxed whitespace-pre-line">
                                    {portfolio.description}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* Media Section */}
                {allImages.length > 0 && (
                    <section className="py-16">
                        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col gap-6">
                                {/* Main Display */}
                                <div className="relative w-full overflow-hidden rounded-3xl border-8 border-white shadow-2xl bg-white group">
                                    <img 
                                        src={activeImage} 
                                        alt={portfolio.title} 
                                        className="w-full h-auto transition-transform duration-700" 
                                    />
                                </div>

                                {/* Thumbnails / Gallery Grid */}
                                {allImages.length > 1 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                        {allImages.map((img, index) => (
                                            <button 
                                                key={index}
                                                onClick={() => setActiveImage(img)}
                                                className={`relative aspect-square overflow-hidden rounded-xl border-4 transition-all ${activeImage === img ? 'border-violet-600 scale-95' : 'border-white hover:border-violet-200'}`}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${portfolio.title} gallery ${index}`} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Return Content */}
                <section className="py-12 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Link 
                            href="/portfolio" 
                            className="inline-flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors font-montserrat font-bold text-lg"
                        >
                            <FaArrowLeft /> Kembali ke Semua Proyek
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
