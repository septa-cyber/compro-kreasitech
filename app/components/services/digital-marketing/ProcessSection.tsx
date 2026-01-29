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
        <section className="py-24 bg-violet-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-medium font-montserrat text-center mb-16">
                    Alur Layanan Digital Marketing
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
                    {processSteps.map((step, index) => (
                        <div 
                            key={index}
                            className={`p-10 border border-white/20 hover:bg-white/5 transition ${
                                index === 3 
                                    ? 'bg-white text-violet-600 rounded-none md:rounded-br-lg hover:scale-[1.02] transform origin-center shadow-2xl' 
                                    : ''
                            } ${
                                index === 0 ? 'border-b-0 md:border-r-0 md:border-b' : ''
                            } ${
                                index === 1 ? 'border-b-0 md:border-b' : ''
                            } ${
                                index === 2 ? 'md:border-r-0' : ''
                            }`}
                        >
                            <div className={`w-10 h-10 border rounded flex items-center justify-center text-xl font-medium mb-6 ${
                                index === 3 ? 'border-violet-600' : 'border-white'
                            }`}>
                                {step.number}
                            </div>
                            <h3 className={`text-xl md:text-2xl font-semibold font-montserrat mb-3 ${
                                index === 3 ? 'text-violet-600' : 'text-white'
                            }`}>
                                {step.title}
                            </h3>
                            <p className={`font-light text-sm leading-relaxed font-montserrat ${
                                index === 3 ? 'text-gray-600' : 'text-white/70'
                            }`}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
