"use client";

import { useState, useRef } from 'react';

import { Testimonial } from '@/lib/types';
import testimonialsData from '@/lib/data/testimonials.json';
import TruncatableText from '@/components/ui/TruncatableText';

interface TaaSTestimonialsProps {
    initialData?: Testimonial[];
}

export default function TaaSTestimonials({ initialData = [] }: TaaSTestimonialsProps) {
    const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(null);

    // Use initialData if provided, otherwise fallback to static JSON (optional, or empty)
    // Actually better to prioritize initialData. If empty, maybe static?
    // User wants DB data. So if initialData is passed, use it.
    const testimonialItems = (initialData.length > 0 ? initialData : testimonialsData) as Testimonial[];

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

    return (
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <h2 className="font-h2">
                    Lihat mengapa pelanggan <br /> senang menggunakan KreasiTech
                </h2>
            </div>

            <div className="relative group/testimonials-taas">
                {/* Navigation Arrows - Using refined BlogHero style */}
                <button 
                    onClick={() => handleManualScroll('left')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/testimonials-taas:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Left"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>
                <button 
                    onClick={() => handleManualScroll('right')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover/testimonials-taas:opacity-100 transition-all duration-300 hover:bg-violet-600 border border-white/10 shadow-xl"
                    aria-label="Scroll Right"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                    </svg>
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide scroll-smooth"
                    onMouseEnter={() => setIsTestimonialHovered(true)}
                    onMouseLeave={() => setIsTestimonialHovered(false)}
                >
                    {/* Container 1 */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
                    >
                        {[...testimonialItems, ...testimonialItems].map((item, index) => (
                            <div
                                key={`testimonial-1-${item.id}-${index}`}
                                className="group mx-2 md:mx-4 flex-shrink-0 w-72 md:w-96 flex flex-col justify-start items-start p-6 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                <div className="self-stretch inline-flex justify-start items-center gap-4 mb-6">
                                    <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-100">
                                        <img 
                                            className="w-full h-full object-cover" 
                                            src={item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&color=fff`} 
                                            alt={item.name}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&color=fff`;
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1 inline-flex flex-col justify-start items-start">
                                        <div className="self-stretch font-h4 text-gray-900 group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch font-body-xs text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <TruncatableText 
                                    text={item.quote || item.content || ""} 
                                    onReadMore={(e?: React.MouseEvent) => {
                                        if (e) e.stopPropagation();
                                        setSelectedTestimonial(item);
                                    }} 
                                />
                                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-white/20 w-full">
                                    <div className="self-stretch justify-start font-body-xs opacity-60 group-hover:opacity-100 group-hover:text-white transition-colors duration-300">
                                        {item.company}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Testimonial Detail Modal */}
            {selectedTestimonial && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setSelectedTestimonial(null)}
                >
                    <div 
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-4 mb-8">
                            <img className="w-16 h-16 rounded-full object-cover" src={selectedTestimonial.avatar} alt={selectedTestimonial.name} />
                            <div>
                                <h3 className="font-h3 text-gray-900">{selectedTestimonial.name}</h3>
                                <p className="font-body-sm text-gray-500">{selectedTestimonial.role} - {selectedTestimonial.company}</p>
                            </div>
                        </div>

                        <div className="font-body-lg text-gray-800 leading-relaxed italic border-l-4 border-violet-600 pl-6 py-2">
                            "{selectedTestimonial.quote || selectedTestimonial.content}"
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

