"use client";

import React, { useState } from "react";

interface TimelineItemProps {
    year: string;
    text: string;
    bgClass?: string; // Kept for compatibility but might not be used in new design
}

const timelineData: TimelineItemProps[] = [
    {
        year: "2021",
        text: "Kreasitech dimulai hanya dengan tiga anggota tim, didorong oleh visi untuk menghubungkan talent IT dengan perusahaan di Indonesia melalui project dan kolaborasi.",
        bgClass: "bg-background-light",
    },
    {
        year: "2022",
        text: "Fokus mengembangkan skill tim dalam bidang software development yang menggunakan bahasa pemrograman Highcode dan Lowcode dengan output berupa website & aplikasi mobile.",
        bgClass: "bg-[#F4F4F7]",
    },
    {
        year: "2023",
        text: "Merambah ke area penyedia outsourcing untuk berbagai role talent IT ke beberapa client.",
        bgClass: "bg-violet-800 text-white",
    },
    {
        year: "2024",
        text: "Setahun penuh kesempatan dan tantangan, kami memperluas jangkauan, memperkuat proses internal, dan meletakkan fondasi untuk lompatan besar berikutnya.",
        bgClass: "bg-white",
    },
    {
        year: "2025",
        text: "Memperkuat model bisnis yang tidak hanya software development, namun memperkaya lini bisnis pada divisi Digital Marketing & Kreasitech Academy.",
        bgClass: "bg-[#F4F4F7]",
    },
    {
        year: "2026",
        text: "Visi besar Kreasitech dapat menghubungkan talent, edukasi, industri dengan teknologi dalam satu ekosistem digital yang disebut 'Tech-driven Talent & Digital Ecosystem Company'.",
        bgClass: "bg-violet-800 text-white",
    },
];

export default function TimelineSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="w-full max-w-[784px] mx-auto flex flex-col items-center gap-8 px-4 text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-medium font-montserrat text-text-light">
                        Perjalanan Kami
                    </h2>
                    <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted">
                        Ini adalah perjalanan kami dalam membangun Kreasitech
                    </p>
                </div>

                {/* Timeline Navigation & Track */}
                <div className="relative flex items-center justify-between md:justify-center mb-16 md:mb-24 px-4 md:px-0">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-violet-600 hover:text-violet-600 transition-colors bg-white shrink-0 md:mr-8"
                        aria-label="Previous"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Timeline Interactive Track */}
                    <div className="relative flex-1 max-w-4xl mx-2 md:mx-4">
                        {/* The Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>

                        {/* The Nodes */}
                        <div className="relative flex justify-between items-center z-0">
                            {timelineData.map((item, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <div
                                        key={index}
                                        className="relative group cursor-pointer"
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <div className={`transition-all duration-300 w-4 h-4 rounded-full border-2 ${isActive ? 'bg-violet-600 border-violet-600 scale-125' : 'bg-white border-gray-300 group-hover:border-violet-400'}`}>
                                            {isActive && (
                                                <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                        {/* Year Label below node */}
                                        <div className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs font-semibold tracking-wider ${isActive ? 'text-violet-600' : 'text-gray-400'}`}>
                                            {item.year}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-violet-600 hover:text-violet-600 transition-colors bg-white shrink-0 md:ml-8"
                        aria-label="Next"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto text-center px-4 animate-fadeIn mt-8 md:mt-12">
                    <h3 className="text-xl sm:text-2xl font-medium font-montserrat text-violet-600">
                        Tahun {timelineData[activeIndex].year}
                    </h3>
                    <div className="my-6"></div>
                    <p className="text-sm font-normal font-montserrat text-text-light-muted leading-relaxed max-w-2xl mx-auto">
                        {timelineData[activeIndex].text}
                    </p>
                </div>
            </div>
        </section>
    );
}
