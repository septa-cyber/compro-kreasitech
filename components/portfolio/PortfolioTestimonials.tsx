"use client";

import { useState } from 'react';

import { Testimonial } from '@/lib/types';
import testimonials from '@/lib/data/testimonials.json';

export default function PortfolioTestimonials() {
    const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

    const testimonialItems = testimonials as Testimonial[];

    return (
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">
                    Lihat mengapa pelanggan <br /> senang menggunakan KreasiTech
                </h2>
            </div>

            <div className="relative">
                {/* Single marquee container with all testimonials (original + duplicate) */}
                <div
                    className="flex gap-4 md:gap-8 overflow-hidden"
                    onMouseEnter={() => setIsTestimonialHovered(true)}
                    onMouseLeave={() => setIsTestimonialHovered(false)}
                >
                    <div
                        className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee"
                        style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
                    >
                        {/* Auto-clone: Original + Duplicate items for seamless loop */}
                        {[...testimonialItems, ...testimonialItems].map((item, index) => {
                            const isOriginal = index < testimonialItems.length;

                            return (
                                <div
                                    key={`testimonial-${item.id}-${index}`}
                                    className="group flex-shrink-0 w-72 md:w-96 h-auto md:h-[600px] p-4 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 flex flex-col justify-start items-start gap-3 md:gap-6 transition-all duration-300"
                                    aria-hidden={!isOriginal}
                                >
                                    <div className="self-stretch inline-flex justify-start items-center gap-3 md:gap-6">
                                        <img className="w-12 h-12" src={item.avatar} alt={item.name} />
                                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                            <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-medium font-montserrat transition-colors duration-300">
                                                {item.name}
                                            </div>
                                            <div className="self-stretch justify-start text-text-light group-hover:text-white text-xs font-normal font-montserrat transition-colors duration-300">
                                                {item.role}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-light font-montserrat transition-colors duration-300">
                                        "{item.quote || item.content}"
                                    </div>
                                    <div className="self-stretch justify-start text-gray-400 group-hover:text-white text-xs font-normal font-montserrat mt-auto transition-colors duration-300">
                                        {item.company}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Progress Indicator */}
            <div className="flex items-center gap-4 mt-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-24 h-[5px] bg-text-light rounded-full"></div>
            </div>
        </section>
    );
}

