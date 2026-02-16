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
                <div className="max-w-[672px] text-center font-h2">
                    Hasil yang Didapat
                </div>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                {outcomes.map((outcome, index) => (
                    <div
                        key={index}
                        className={`w-full p-8 flex flex-col justify-start items-center gap-6 ${index === 1 ? 'md:border-l-[0.5px] md:border-r-[0.5px] border-gray-200' : ''
                            }`}
                    >
                        <div className="self-stretch text-center font-h4">
                            {outcome.title}
                        </div>
                        <div className="self-stretch text-center font-body-sm">
                            {outcome.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

