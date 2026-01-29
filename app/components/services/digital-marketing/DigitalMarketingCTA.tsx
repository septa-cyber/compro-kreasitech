"use client";
import React from "react";

export default function DigitalMarketingCTA() {
    return (
        <section className="py-24 bg-gray-100 flex flex-col justify-start items-center gap-24 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
                <div className="w-full flex flex-col justify-start items-center gap-8">
                    <div className="w-full flex flex-col justify-start items-center gap-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light leading-tight">
                            Saatnya Brand Anda Lebih Dikenal
                        </h2>
                        <p className="text-sm sm:text-base font-normal font-montserrat text-text-light-muted">
                            Kami bantu susun strategi digital marketing yang efektif untuk mengubah awareness jadi engagement yang nyata.
                        </p>
                    </div>
                </div>
                <div className="inline-flex justify-start items-start gap-8">
                    <a
                        href="#"
                        className="px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors"
                    >
                        <span className="text-gray-100 text-base font-medium font-montserrat">
                            Tingkatkan Kehadiran Online Anda
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
