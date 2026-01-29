"use client";
import React from 'react';

export default function HiTalentCTA() {
    return (
        <section className="py-24 bg-violet-800 flex flex-col justify-start items-center gap-24 overflow-hidden" data-theme="dark">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
                <div className="w-full flex flex-col justify-start items-center gap-8">
                    <div className="w-full flex flex-col justify-start items-center gap-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-white leading-tight">
                            Kelola Tim Jadi Lebih Mudah dengan HiTalent
                        </h2>
                        <p className="text-sm sm:text-base font-normal font-montserrat text-white/80">
                            Coba lihat sendiri bagaimana platform kami bisa bantu HR dan team leader kerja lebih efisien.
                        </p>
                    </div>
                </div>
                <button className="px-8 py-4 bg-violet-300 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-200 transition-colors">
                    <span className="text-violet-800 text-base font-medium font-montserrat">Coba HiTalent Sekarang</span>
                </button>
            </div>
        </section>
    );
}
