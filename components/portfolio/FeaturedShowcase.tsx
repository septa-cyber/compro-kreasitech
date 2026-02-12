"use client";

import { useState, useEffect } from 'react';
import { PortfolioItem } from '@/lib/types';

export default function FeaturedShowcase() {
    const [isReverseHovered, setIsReverseHovered] = useState(false);
    const [isNormalHovered, setIsNormalHovered] = useState(false);
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch('/api/portfolio?status=published');
                if (res.ok) {
                    const data = await res.json();
                    setPortfolioItems(data);
                }
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

    return (
        <section id="featured" className="py-16 md:py-24 bg-white overflow-hidden" >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="text-xl md:text-4xl font-medium font-montserrat text-gray-900">
                            Portofolio Kami
                        </h2>
                        <p className="text-sm md:text-base font-normal font-montserrat text-gray-600">
                            Proyek-proyek kami menunjukkan keahlian di berbagai industri. Kami berkomitmen untuk memberikan yang terbaik dalam setiap solusi.
                        </p>
                    </div>
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300">
                        <span className="text-white text-sm md:text-base font-medium font-montserrat">Lihat Semua</span>
                    </button>
                </div>
            </div>

            {/* Horizontal Scrolling Portfolio Cards with Marquee Reverse */}
            <div className="relative pb-8">
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsReverseHovered(true)}
                    onMouseLeave={() => setIsReverseHovered(false)}
                >
                    {/* Single marquee container with all cards (original + duplicate) */}
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee-reverse"
                        style={{ animationPlayState: isReverseHovered ? 'paused' : 'running' }}
                    >
                        {/* Auto-clone: Original + Duplicate items for seamless loop */}
                        {[...portfolioItems, ...portfolioItems].map((item, index) => {
                            const isOriginal = index < portfolioItems.length;
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px] h-52 md:h-[400px]"
                                : "w-64 md:w-[400px] h-64 md:h-[400px]";

                            return (
                                <div
                                    key={`portfolio-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                    aria-hidden={!isOriginal}
                                >
                                    <img
                                        className={`${sizeClasses} object-cover`}
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-normal font-montserrat text-gray-600">
                                            {item.category || 'Project'}
                                        </span>
                                        <h3 className="text-base md:text-xl font-medium font-montserrat text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Horizontal Scrolling Portfolio Cards with Marquee */}
            <div className="relative">
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsNormalHovered(true)}
                    onMouseLeave={() => setIsNormalHovered(false)}
                >
                    {/* Single marquee container with all cards (original + duplicate) */}
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee"
                        style={{ animationPlayState: isNormalHovered ? 'paused' : 'running' }}
                    >
                        {/* Auto-clone: Original + Duplicate items for seamless loop */}
                        {[...portfolioItems, ...portfolioItems].map((item, index) => {
                            const isOriginal = index < portfolioItems.length;
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px] h-52 md:h-[400px]"
                                : "w-64 md:w-[400px] h-64 md:h-[400px]";

                            return (
                                <div
                                    key={`portfolio-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                    aria-hidden={!isOriginal}
                                >
                                    <img
                                        className={`${sizeClasses} object-cover`}
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                    />
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-normal font-montserrat text-gray-600">
                                            {item.category || 'Project'}
                                        </span>
                                        <h3 className="text-base md:text-xl font-medium font-montserrat text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

