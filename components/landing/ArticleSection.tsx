"use client";

import React, { useState } from 'react';



const articles = [
    {
        id: 1,
        category: "TEKNOLOGI",
        date: "21 Jan 2026",
        title: "Transformasi Digital: Membangun Masa Depan yang Lebih Cerdas",
        description: "Temukan bagaimana teknologi inovatif mengubah cara kita bekerja, belajar, dan berinteraksi dalam ekosistem digital yang terus berkembang pesat.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        tagColor: "bg-blue-100 text-blue-700"
    },
    {
        id: 2,
        category: "INOVASI",
        date: "18 Jan 2026",
        title: "Kecerdasan Buatan: Peluang Baru dalam Industri Kreatif",
        description: "Bagaimana AI membantu para kreator untuk mengeksplorasi batas-batas baru dalam seni, desain, dan musik tanpa menghilangkan sentuhan manusia.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        tagColor: "bg-pink-100 text-pink-700"
    },
    {
        id: 3,
        category: "EDUKASI",
        date: "15 Jan 2026",
        title: "Masa Depan Pendidikan: Belajar Tanpa Batas Ruang dan Waktu",
        description: "Evolusi metode pembelajaran daring yang memungkinkan akses pendidikan berkualitas bagi siapa saja, di mana saja, dan kapan saja.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        tagColor: "bg-green-100 text-green-700"
    }
];

export default function ArticleSection() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light">
                            Artikel Terbaru
                        </h2>
                        <p className="text-sm md:text-base font-normal font-montserrat text-text-light">
                            Artikel terbaru yang dapat membantu Anda dalam memahami berbagai topik dan tren terkini.
                        </p>
                    </div>
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300">
                        <span className="text-white text-sm md:text-base font-medium font-montserrat">Lihat Semua</span>
                    </button>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white flex flex-col rounded-none overflow-hidden group border border-gray-300 transition-shadow duration-300 hover:shadow-lg h-full"
                        >
                            {/* Image Side - Fixed Aspect Ratio */}
                            <div className="w-full aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 p-6 flex flex-col items-start gap-4">
                                <div className="flex items-center gap-4">
                                    <span className={`${article.tagColor} px-3 py-1 text-xs font-semibold font-montserrat tracking-wide rounded-[4px]`}>
                                        {article.category}
                                    </span>
                                    <span className="text-gray-400 text-xs font-montserrat">
                                        {article.date}
                                    </span>
                                </div>

                                <h3 className="text-lg font-medium font-montserrat text-text-light leading-snug line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-gray-500 font-montserrat leading-relaxed text-sm line-clamp-3">
                                    {article.description}
                                </p>

                                <div className="mt-auto pt-2">
                                    <button className="text-text-light hover:text-violet-600 font-medium font-montserrat transition-colors duration-300 flex items-center gap-2 group/btn text-sm">
                                        Baca Selengkapnya
                                        <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
