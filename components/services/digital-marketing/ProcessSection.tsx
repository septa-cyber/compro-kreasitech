"use client";
import React from "react";

const processSteps = [
    {
        number: "1",
        title: "Audit Website & Analisis Market",
        description: "Evaluasi mendalam terhadap website dan analisis pasar untuk memahami posisi kompetitif Anda."
    },
    {
        number: "2",
        title: "Strategi Konten & Keyword",
        description: "Pengembangan strategi konten dan riset keyword yang tepat sasaran untuk target audiens Anda."
    },
    {
        number: "3",
        title: "Implementasi Optimasi",
        description: "Eksekusi strategi dengan optimasi on-page, off-page, dan teknis untuk hasil maksimal."
    },
    {
        number: "4",
        title: "Monitoring & Reporting",
        description: "Pemantauan performa berkelanjutan dengan laporan berkala yang transparan dan actionable."
    }
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-violet-800 text-white overflow-hidden" data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-medium font-montserrat mb-6">
                        Alur Layanan Digital Marketing
                    </h2>
                    <p className="text-sm md:text-base font-normal font-montserrat text-white/90 leading-relaxed">
                        Setiap langkah dirancang untuk mengoptimalkan kehadiran digital Anda dengan strategi yang terukur dan efektif.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto border border-white/20">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`p-10 flex flex-col justify-start items-center gap-6 transition-all duration-300 hover:bg-white group cursor-default ${index === 0 ? 'border-b border-white/20 md:border-b md:border-r border-white/20' : ''
                                } ${index === 1 ? 'border-b border-white/20 md:border-b border-white/20' : ''
                                } ${index === 2 ? 'md:border-r border-white/20' : ''
                                }`}
                        >
                            <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-medium font-montserrat text-center group-hover:text-gray-900 transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
