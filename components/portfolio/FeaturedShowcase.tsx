"use client";

import { useState, useEffect, useRef } from 'react';
import { PortfolioItem } from '@/lib/types';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function FeaturedShowcase() {
    const [isReverseHovered, setIsReverseHovered] = useState(false);
    const [isNormalHovered, setIsNormalHovered] = useState(false);
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // Refs for manual scrolling
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);

    const handleManualScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
        const container = ref.current;
        if (!container) return;

        const scrollAmount = 400; 
        const currentScroll = container.scrollLeft;
        const itemSetWidth = container.scrollWidth / 2;
        
        let targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

        // Infinite loop logic for manual scroll
        // If we scroll too far left, jump to the identical position in the second half
        if (targetScroll < 20) {
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = currentScroll + itemSetWidth;
            container.style.scrollBehavior = 'smooth';
            targetScroll = container.scrollLeft - scrollAmount;
        } 
        // If we scroll too far right, jump back to the identical position in the first half
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
            <section id="featured" className="py-16 md:py-24 bg-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                            <h2 className="text-xl md:text-4xl font-medium font-montserrat text-gray-900">
                                Portofolio Kami
                            </h2>
                            <p className="text-sm md:text-base font-normal font-montserrat text-gray-600">
                                Loading...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Split items into top and bottom rows
    const hasRowAssignment = portfolioItems.some(item => item.marquee_row);
    let topRowItems: PortfolioItem[];
    let bottomRowItems: PortfolioItem[];

    if (hasRowAssignment) {
        topRowItems = portfolioItems.filter(item => item.marquee_row === 'top');
        bottomRowItems = portfolioItems.filter(item => item.marquee_row === 'bottom');
    } else {
        // Auto-split evenly if no marquee_row assigned
        const mid = Math.ceil(portfolioItems.length / 2);
        topRowItems = portfolioItems.slice(0, mid);
        bottomRowItems = portfolioItems.slice(mid);
    }

    return (
        <section id="featured" className="py-16 md:py-24 bg-white overflow-hidden" >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="font-h2">
                            Portofolio Kami
                        </h2>
                        <p className="font-body">
                            Proyek-proyek kami menunjukkan keahlian di berbagai industri. Kami berkomitmen untuk memberikan yang terbaik dalam setiap solusi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Horizontal Scrolling Portfolio Cards with Marquee Reverse */}
            <div className="relative pb-8 group/marquee-reverse">
                {/* Navigation Arrows - Top Row */}
                <button 
                    onClick={() => handleManualScroll(topRowRef, 'left')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/marquee-reverse:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>
                <button 
                    onClick={() => handleManualScroll(topRowRef, 'right')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/marquee-reverse:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>

                <div
                    ref={topRowRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth"
                    onMouseEnter={() => setIsReverseHovered(true)}
                    onMouseLeave={() => setIsReverseHovered(false)}
                >
                    {/* Single marquee container with all cards (original + duplicate) */}
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee-reverse"
                        style={{ animationPlayState: isReverseHovered ? 'paused' : 'running' }}
                    >
                        {/* Auto-clone: Original + Duplicate items for seamless loop */}
                        {[...topRowItems, ...topRowItems].map((item, index) => {
                            const isOriginal = index < topRowItems.length;
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px] h-64 md:h-[400px]" // Fixed height to match medium (was h-52/h-[400px], but medium height is also h-64/h-[400px] below)
                                : "w-64 md:w-[400px] h-64 md:h-[400px]";

                            return (
                                <Link
                                    href={`/portfolio/${item.id}`}
                                    key={`portfolio-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8 cursor-pointer"
                                    aria-hidden={!isOriginal}
                                >
                                    <img
                                        className={`${sizeClasses} object-cover transition-transform duration-500 group-hover:scale-105`}
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-body-xs opacity-70 font-montserrat">
                                            {item.category || 'Project'}
                                        </span>
                                        <h3 className="font-h4 group-hover:text-violet-600 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Horizontal Scrolling Portfolio Cards with Marquee */}
            <div className="relative group/marquee">
                {/* Navigation Arrows - Bottom Row */}
                <button 
                    onClick={() => handleManualScroll(bottomRowRef, 'left')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/marquee:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>
                <button 
                    onClick={() => handleManualScroll(bottomRowRef, 'right')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/marquee:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>

                <div
                    ref={bottomRowRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth"
                    onMouseEnter={() => setIsNormalHovered(true)}
                    onMouseLeave={() => setIsNormalHovered(false)}
                >
                    {/* Single marquee container with all cards (original + duplicate) */}
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee"
                        style={{ animationPlayState: isNormalHovered ? 'paused' : 'running' }}
                    >
                        {/* Auto-clone: Original + Duplicate items for seamless loop */}
                        {[...bottomRowItems, ...bottomRowItems].map((item, index) => {
                            const isOriginal = index < bottomRowItems.length;
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px] h-64 md:h-[400px]" // Fixed height to match medium
                                : "w-64 md:w-[400px] h-64 md:h-[400px]";

                            return (
                                <Link
                                    href={`/portfolio/${item.id}`}
                                    key={`portfolio-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8 cursor-pointer"
                                    aria-hidden={!isOriginal}
                                >
                                    <img
                                        className={`${sizeClasses} object-cover transition-transform duration-500 group-hover:scale-105`}
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="font-body-xs opacity-70 font-montserrat">
                                            {item.category || 'Project'}
                                        </span>
                                        <h3 className="font-h4 group-hover:text-violet-600 transition-colors">
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
