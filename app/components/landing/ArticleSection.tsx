"use client";

import React, { useState } from 'react';

const articles = [
    {
        id: 1,
        category: "TEKNOLOGI",
        date: "21 Jan 2026",
        title: "Transformasi Digital: Membangun Masa Depan yang Lebih Cerdas",
        description: "Temukan bagaimana teknologi inovatif mengubah cara kita bekerja, belajar, dan berinteraksi dalam ekosistem digital yang terus berkembang pesat.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "INOVASI",
        date: "18 Jan 2026",
        title: "Kecerdasan Buatan: Peluang Baru dalam Industri Kreatif",
        description: "Bagaimana AI membantu para kreator untuk mengeksplorasi batas-batas baru dalam seni, desain, dan musik tanpa menghilangkan sentuhan manusia.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "EDUKASI",
        date: "15 Jan 2026",
        title: "Masa Depan Pendidikan: Belajar Tanpa Batas Ruang dan Waktu",
        description: "Evolusi metode pembelajaran daring yang memungkinkan akses pendidikan berkualitas bagi siapa saja, di mana saja, dan kapan saja.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop"
    }
];

export default function ArticleSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    React.useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const currentArticle = articles[currentIndex];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light text-center">
                        Artikel Terbaru
                    </h2>
                </div>

                {/* Article Card - Carousel */}
                <div
                    key={currentArticle.id}
                    className="bg-white hover:bg-violet-800 flex flex-col md:flex-row rounded-none overflow-hidden group border border-gray-300 hover:border-violet-800 transition-colors duration-300 animate-fade-in-up h-auto md:h-[450px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 md:h-full aspect-video md:aspect-auto relative overflow-hidden">
                        <img
                            src={currentArticle.image}
                            alt={currentArticle.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-start gap-4 md:gap-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-violet-100 text-violet-700 group-hover:bg-white group-hover:text-violet-800 px-3 py-1 text-xs font-semibold font-montserrat tracking-wide transition-colors duration-300">
                                {currentArticle.category}
                            </span>
                            <span className="text-gray-400 group-hover:text-white/80 text-xs font-montserrat transition-colors duration-300">
                                {currentArticle.date}
                            </span>
                        </div>

                        <h3 className="text-xl md:text-3xl font-medium font-montserrat text-text-light group-hover:text-white leading-snug transition-colors duration-300">
                            {currentArticle.title}
                        </h3>

                        <p className="text-gray-500 group-hover:text-white/90 font-montserrat leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-none transition-colors duration-300">
                            {currentArticle.description}
                        </p>

                        <button className="mt-2 text-violet-600 group-hover:text-white font-medium font-montserrat transition-colors duration-300 flex items-center gap-2 group/btn">
                            Baca Selengkapnya
                            <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                        </button>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {articles.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 transition-all duration-300 rounded-none ${index === currentIndex
                                    ? "w-8 bg-violet-800"
                                    : "w-3 bg-gray-300 hover:bg-violet-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
