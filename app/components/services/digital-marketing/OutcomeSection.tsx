"use client";
import React from "react";

const outcomes = [
    {
        number: "1",
        title: "Traffic Meningkat",
        description: "Implementasi strategi yang efektif untuk meningkatkan kunjungan organik ke website Anda secara signifikan."
    },
    {
        number: "2",
        title: "Brand Awareness Naik",
        description: "Tingkatkan kesadaran merek melalui visibilitas yang lebih baik di mesin pencari dan media digital."
    },
    {
        number: "3",
        title: "ROI Marketing yang Jelas",
        description: "Dapatkan laporan yang transparan dengan metrik yang terukur untuk memastikan investasi marketing Anda memberikan hasil."
    }
];

export default function OutcomeSection() {
    return (
        <section className="py-24 bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-medium font-montserrat text-center mb-16 text-text-light">
                    Outcome
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                    {outcomes.map((outcome, index) => (
                        <div 
                            key={index} 
                            className={`px-4 py-8 ${
                                index === 1 ? 'border-l-0 md:border-l border-r-0 md:border-r border-gray-200' : ''
                            }`}
                        >
                            <h3 className="text-xl font-bold font-montserrat mb-4 text-text-light">
                                {outcome.number}. {outcome.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
