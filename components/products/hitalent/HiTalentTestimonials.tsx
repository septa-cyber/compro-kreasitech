"use client";

import { useState } from 'react';

export default function HiTalentTestimonials() {
    const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

    const testimonialItems = [
        {
            id: 1,
            name: "Tina Rahayu",
            role: "Marketing Specialist",
            company: "PT Marketing Pro",
            avatar: "https://placehold.co/48x48/ec4899/1f2937",
            quote: "Tina's marketing strategies are exceptionally creative, highly innovative, and meticulously data-driven, consistently capturing audience attention and driving impressive campaign results that not only exceed targets but also maximize ROI, setting new standards for marketing effectiveness."
        },
        {
            id: 2,
            name: "Joko Lestari",
            role: "QA Engineer",
            company: "PT Quality Assurance",
            avatar: "https://placehold.co/48x48/fbbf24/1f2937",
            quote: "Joko's rigorous testing protocols guarantee the superior quality and reliability of our products, proactively preventing potential problems and ensuring a seamless user experience right from initial release, significantly enhancing customer loyalty and fostering long-term relationships."
        },
        {
            id: 3,
            name: "Siti Aminah",
            role: "Product Manager",
            company: "PT Digital Solutions",
            avatar: "https://placehold.co/48x48/3b82f6/1f2937",
            quote: "Siti's leadership is truly transformative, as she champions collaboration, sparks innovation, and drives substantial growth. Her team consistently surpasses ambitious goals, achieving remarkable success and establishing new benchmarks for excellence throughout the entire organization, inspiring others to reach higher."
        },
        {
            id: 4,
            name: "Budi Santoso",
            role: "UX Designer",
            company: "PT Creative Minds",
            avatar: "https://placehold.co/48x48/f97316/1f2937",
            quote: "Budi's UX designs are widely celebrated for their intuitive interfaces and exceptionally delightful user journeys, significantly boosting user satisfaction and engagement metrics. His thoughtful designs greatly enhance the overall user experience, making every interaction seamless and enjoyable for all users."
        },
        {
            id: 5,
            name: "Rina Dewi",
            role: "Data Analyst",
            company: "PT Analytics Hub",
            avatar: "https://placehold.co/48x48/ec4899/1f2937",
            quote: "Rina's profound data insights are instrumental in shaping our strategic direction and future initiatives. Her detailed analyses provide unparalleled clarity and foresight, enabling well-informed decisions that drive significant growth and improve efficiency across all departments, optimizing resource allocation."
        },
        {
            id: 6,
            name: "Eko Setiawan",
            role: "DevOps Engineer",
            company: "PT Tech Infrastructure",
            avatar: "https://placehold.co/48x48/10b981/1f2937",
            quote: "Eko's DevOps expertise ensures our systems run smoothly and efficiently. His automation solutions have dramatically reduced deployment times while improving reliability, enabling our team to focus on innovation rather than maintenance."
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <h2 className="text-xl md:text-4xl font-medium font-montserrat text-text-light">
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
                                        "{item.quote}"
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

