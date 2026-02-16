"use client";

import { useState, useEffect } from 'react';

export default function Testimonials() {
    const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

    const [testimonialItems, setTestimonialItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/testimonials?status=visible');
                if (res.ok) {
                    const data = await res.json();
                    setTestimonialItems(data);
                }
            } catch (error) {
                console.error('Failed to fetch testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <h2 className="font-h2 mb-10">
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
                                        <div className="self-stretch justify-start font-h4 group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch justify-start font-body-xs group-hover:text-white transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start font-body-lg group-hover:text-white transition-colors duration-300">
                                    "{item.content || item.quote}"
                                </div>
                                <div className="self-stretch justify-start font-body-xs opacity-60 group-hover:opacity-100 group-hover:text-white mt-auto transition-colors duration-300">
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
                                        <div className="self-stretch justify-start font-h4 group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch justify-start font-body-xs group-hover:text-white transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start font-body-lg group-hover:text-white transition-colors duration-300">
                                    "{item.content || item.quote}"
                                </div>
                                <div className="self-stretch justify-start font-body-xs opacity-60 group-hover:opacity-100 group-hover:text-white mt-auto transition-colors duration-300">
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

