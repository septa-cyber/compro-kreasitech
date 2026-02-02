"use client";

import { useState } from 'react';

export default function FeaturedShowcase() {
    const [isReverseHovered, setIsReverseHovered] = useState(false);
    const [isNormalHovered, setIsNormalHovered] = useState(false);

    const portfolioItems = [
        { id: 1, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 2, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
        { id: 3, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 4, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 5, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
        { id: 6, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 7, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 8, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
        { id: 9, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 10, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden" >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-gray-900">
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
                                ? "w-80 md:w-[600px]"
                                : "w-64 md:w-96";

                            return (
                                <div
                                    key={`portfolio-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                    aria-hidden={!isOriginal}
                                >
                                    <img
                                        className={`${sizeClasses} h-64 md:h-96 object-cover`}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base md:text-xl font-medium font-montserrat text-gray-900">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-normal font-montserrat text-gray-600">
                                            {item.subtitle}
                                        </span>
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
                                ? "w-80 md:w-[600px]"
                                : "w-64 md:w-96";

                            return (
                                <div
                                    key={`portfolio-${item.id}-${index}`}
                                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                    aria-hidden={!isOriginal}
                                >
                                    <img
                                        className={`${sizeClasses} h-64 md:h-96 object-cover`}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base md:text-xl font-medium font-montserrat text-gray-900">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-normal font-montserrat text-gray-600">
                                            {item.subtitle}
                                        </span>
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
