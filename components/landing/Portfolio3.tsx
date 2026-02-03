"use client";

import { useState } from 'react';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolioData';

export default function Portfolio() {
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);



    return (
        <section className="py-16 md:py-24 bg-violet-800 overflow-hidden" data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-white">
                            Portofolio Kami
                        </h2>
                        <p className="text-sm md:text-base font-normal font-montserrat text-white leading-relaxed max-w-[800px]">
                            Telah mendukung berbagai jenis bisnis, startup, institusi pendidikan, UKM, dan corporate dalam membangun aplikasi, website, digital marketing, hingga penyediaan talent IT yang berkelanjutan.
                        </p>
                    </div>
                    <Link href="/portfolio" className="px-8 py-4 bg-white rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors">
                        <span className="text-violet-800 text-base font-medium font-montserrat">Lihat Semua</span>
                    </Link>
                </div>
            </div>

            {/* Horizontal Scrolling Portfolio Cards with Marquee */}
            <div className="relative marquee-container">
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsPortfolioHovered(true)}
                    onMouseLeave={() => setIsPortfolioHovered(false)}
                >
                    {/* Container 1 (Right Scroll) */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-right"
                        style={{ animationPlayState: isPortfolioHovered ? 'paused' : 'running' }}
                    >
                        {[...portfolioItems].map((item, index) => {
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px]"
                                : "w-64 md:w-96";

                            return (
                                <div
                                    key={`portfolio-1-${item.id}-${index}`}
                                    className="group mx-2 md:mx-4 flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                >
                                    <img
                                        className={`${sizeClasses} h-64 md:h-96 object-cover`}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base md:text-xl font-medium font-montserrat text-white">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-normal font-montserrat text-white">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Container 2 (Duplicate for Right Scroll) */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-right"
                        style={{ animationPlayState: isPortfolioHovered ? 'paused' : 'running' }}
                    >
                        {[...portfolioItems].map((item, index) => {
                            const sizeClasses = item.size === "large"
                                ? "w-80 md:w-[600px]"
                                : "w-64 md:w-96";

                            return (
                                <div
                                    key={`portfolio-2-${item.id}-${index}`}
                                    className="group mx-2 md:mx-4 flex-shrink-0 flex flex-col gap-4 md:gap-8"
                                >
                                    <img
                                        className={`${sizeClasses} h-64 md:h-96 object-cover`}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base md:text-xl font-medium font-montserrat text-white">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-normal font-montserrat text-white">
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
