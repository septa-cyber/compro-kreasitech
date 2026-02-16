"use client";

import { useState } from 'react';

import { Testimonial } from '@/lib/types';
import testimonialsData from '@/lib/data/testimonials.json';

interface TaaSTestimonialsProps {
    initialData?: Testimonial[];
}

export default function TaaSTestimonials({ initialData = [] }: TaaSTestimonialsProps) {
    const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

    // Use initialData if provided, otherwise fallback to static JSON (optional, or empty)
    // Actually better to prioritize initialData. If empty, maybe static?
    // User wants DB data. So if initialData is passed, use it.
    const testimonialItems = (initialData.length > 0 ? initialData : testimonialsData) as Testimonial[];

    return (
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <h2 className="font-h2">
                    Lihat mengapa pelanggan <br /> senang menggunakan KreasiTech
                </h2>
            </div>

            <div className="relative marquee-container">
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsTestimonialHovered(true)}
                    onMouseLeave={() => setIsTestimonialHovered(false)}
                >
                    {/* Container 1 */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
                    >
                        {[...testimonialItems].map((item, index) => (
                            <div
                                key={`testimonial-1-${item.id}-${index}`}
                                className="group mx-2 md:mx-4 flex-shrink-0 w-72 md:w-96 h-auto md:h-[600px] p-4 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 flex flex-col justify-start items-start gap-3 md:gap-6 transition-all duration-300"
                            >
                                <div className="self-stretch inline-flex justify-start items-center gap-3 md:gap-6">
                                    <img className="w-12 h-12" src={item.avatar} alt={item.name} />
                                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                        <div className="self-stretch justify-start font-h5 group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch justify-start font-body-xs group-hover:text-white transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start font-body group-hover:text-white transition-colors duration-300">
                                    "{item.quote || item.content}"
                                </div>
                                <div className="self-stretch justify-start font-body-xs group-hover:text-white mt-auto transition-colors duration-300">
                                    {item.company}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Container 2 (Duplicate) */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
                    >
                        {[...testimonialItems].map((item, index) => (
                            <div
                                key={`testimonial-2-${item.id}-${index}`}
                                className="group mx-2 md:mx-4 flex-shrink-0 w-72 md:w-96 h-auto md:h-[600px] p-4 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 flex flex-col justify-start items-start gap-3 md:gap-6 transition-all duration-300"
                            >
                                <div className="self-stretch inline-flex justify-start items-center gap-3 md:gap-6">
                                    <img className="w-12 h-12" src={item.avatar} alt={item.name} />
                                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                        <div className="self-stretch justify-start font-h5 group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch justify-start font-body-xs group-hover:text-white transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start font-body group-hover:text-white transition-colors duration-300">
                                    "{item.quote || item.content}"
                                </div>
                                <div className="self-stretch justify-start font-body-xs group-hover:text-white mt-auto transition-colors duration-300">
                                    {item.company}
                                </div>
                            </div>
                        ))}
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

