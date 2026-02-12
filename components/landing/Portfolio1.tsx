"use client";

import { useState, useEffect } from 'react';
import { PortfolioItem } from '@/lib/types';

export default function Portfolio() {
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
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

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden" >
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

            {/* Horizontal Scrolling Portfolio Cards with Marquee */}
            <div className="relative">
                {isLoading ? (
                    <div className="text-center py-12 text-gray-500">Loading portfolio...</div>
                ) : (
                    <div
                        className="flex overflow-hidden"
                        onMouseEnter={() => setIsPortfolioHovered(true)}
                        onMouseLeave={() => setIsPortfolioHovered(false)}
                    >
                        {/* Single marquee container with all cards (original + duplicate) */}
                        <div
                            className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee-reverse"
                            style={{ animationPlayState: isPortfolioHovered ? 'paused' : 'running' }}
                        >
                            {/* Auto-clone: Original + Duplicate items for seamless loop */}
                            {[...portfolioItems, ...portfolioItems].map((item, index) => {
                                const isOriginal = index < portfolioItems.length;

                                return (
                                    <div
                                        key={`portfolio-${item.id}-${index}`}
                                        className="group flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                        aria-hidden={!isOriginal}
                                    >
                                        <img
                                            className="w-80 md:w-[600px] h-64 md:h-96 object-cover"
                                            src={item.image || 'https://placehold.co/600x400'}
                                            alt={item.title}
                                        />
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-base md:text-xl font-medium font-montserrat text-gray-900">
                                                {item.title}
                                            </h3>
                                            {item.category && (
                                                <span className="text-xs font-normal font-montserrat text-gray-600">
                                                    {item.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
