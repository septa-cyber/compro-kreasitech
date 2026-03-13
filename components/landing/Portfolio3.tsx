"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PortfolioItem } from '@/lib/types';

export default function Portfolio() {
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Ref for manual scrolling
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleManualScroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = 400; 
        const currentScroll = container.scrollLeft;
        const itemSetWidth = container.scrollWidth / 2;
        
        let targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

        // Infinite loop logic for manual scroll
        if (targetScroll < 20) {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = currentScroll + itemSetWidth;
            container.style.scrollBehavior = 'smooth';
            targetScroll = container.scrollLeft - scrollAmount;
        } 
        else if (targetScroll + container.clientWidth > container.scrollWidth - 20) {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = currentScroll - itemSetWidth;
            container.style.scrollBehavior = 'smooth';
            targetScroll = container.scrollLeft + scrollAmount;
        }

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch('/api/portfolio?status=published');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await res.text();
                    console.error("Received non-JSON response:", text.substring(0, 100)); // Log first 100 chars
                    return; // Stop processing
                }

                const data = await res.json();
                setPortfolioItems(data);
            } catch (error) {
                console.error('Failed to fetch portfolio:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPortfolio();
    }, []);

    if (isLoading) {
        return (
            <section className="py-16 md:py-24 bg-violet-800 overflow-hidden" data-theme="dark">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                            <h2 className="font-h2">
                                Portofolio Kami
                            </h2>
                            <p className="text-sm md:text-base font-normal font-montserrat text-white leading-relaxed max-w-[800px]">
                                Loading...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-24 bg-violet-800 overflow-hidden" data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="font-h2">
                            Portofolio Kami
                        </h2>
                        <p className="font-body-lg max-w-[800px]">
                            Telah mendukung berbagai jenis bisnis, startup, institusi pendidikan, UKM, dan corporate dalam membangun aplikasi, website, digital marketing, hingga penyediaan talent IT yang berkelanjutan.
                        </p>
                    </div>
                    <Link href="/portfolio" className="px-8 py-4 bg-white rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors">
                        <span className="font-btn text-violet-800">Lihat Semua</span>
                    </Link>
                </div>
            </div>

            {/* Horizontal Scrolling Portfolio Cards with Marquee */}
            <div className="relative group/marquee">
                {/* Navigation Arrows - Using refined BlogHero style */}
                <button 
                    onClick={() => handleManualScroll('left')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/marquee:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>
                <button 
                    onClick={() => handleManualScroll('right')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/marquee:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth"
                    onMouseEnter={() => setIsPortfolioHovered(true)}
                    onMouseLeave={() => setIsPortfolioHovered(false)}
                >
                    {/* Container 1 (Right Scroll) */}
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-scroll-right"
                        style={{ animationPlayState: isPortfolioHovered ? 'paused' : 'running' }}
                    >
                        {[...portfolioItems].map((item, index) => {
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px] h-64 md:h-[400px]" 
                                : "w-64 md:w-[400px] h-64 md:h-[400px]";

                            return (
                                <Link
                                    href={`/portfolio/${item.id}`}
                                    key={`portfolio-1-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8 cursor-pointer"
                                >
                                    <img
                                        className={`${sizeClasses} object-cover transition-transform duration-500 group-hover:scale-105`}
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-body-xs opacity-70 text-white font-montserrat">
                                            {item.category || 'Project'}
                                        </span>
                                        <h3 className="font-h4 text-violet-300 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Container 2 (Duplicate for Right Scroll) */}
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-scroll-right"
                        style={{ animationPlayState: isPortfolioHovered ? 'paused' : 'running' }}
                    >
                        {[...portfolioItems].map((item, index) => {
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px] h-64 md:h-[400px]" 
                                : "w-64 md:w-[400px] h-64 md:h-[400px]";

                            return (
                                <Link
                                    href={`/portfolio/${item.id}`}
                                    key={`portfolio-2-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8 cursor-pointer"
                                >
                                    <img
                                        className={`${sizeClasses} object-cover transition-transform duration-500 group-hover:scale-105`}
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-body-xs opacity-70 text-white font-montserrat">
                                            {item.category || 'Project'}
                                        </span>
                                        <h3 className="font-h4 text-violet-300 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

