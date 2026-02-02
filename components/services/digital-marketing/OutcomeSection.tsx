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
        <section className="py-24 bg-gray-100 flex flex-col justify-start items-center gap-24">
            <div className="max-w-[784px] flex flex-col justify-start items-center gap-8 px-4">
                <div className="max-w-[672px] text-center text-text-light text-4xl font-medium font-montserrat">
                    Hasil yang Didapat
                </div>
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-stretch flex-wrap">
                {outcomes.map((outcome, index) => (
                    <div 
                        key={index} 
                        className={`w-full md:w-96 p-8 flex flex-col justify-start items-center gap-6 ${
                            index === 1 ? 'md:border-l-[0.5px] md:border-r-[0.5px] border-gray-200' : ''
                        }`}
                    >
                        <div className="self-stretch text-center text-text-light text-2xl font-medium font-montserrat">
                            {outcome.title}
                        </div>
                        <div className="self-stretch text-center text-text-light text-sm font-normal font-montserrat">
                            {outcome.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
