"use client";
import React from "react";

export default function DigitalMarketingCTA() {
    return (
        <section className="py-20 bg-gray-100 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-medium font-montserrat mb-4 text-text-light">
                    Ubah Klik Menjadi Pelanggan
                </h2>
                <p className="text-gray-600 mb-10 font-montserrat">
                    Jangkau audiens Anda dan kembangkan brand Anda<br className="hidden sm:block" />
                    dengan strategi marketing berbasis data.
                </p>
                <a 
                    href="#" 
                    className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg shadow-violet-600/30 transition transform hover:-translate-y-1 font-montserrat"
                >
                    Tingkatkan Kehadiran Online Anda
                </a>
            </div>
        </section>
    );
}
