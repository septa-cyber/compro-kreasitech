"use client";
import React from "react";
import Link from "next/link";

export default function HiTalentHero() {
    return (
        <section className="relative pt-10 pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Mewujudkan Ide Menjadi <span className="font-semibold text-violet-600">Solusi Digital</span> Bernilai Bisnis
                </h1>
                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                    Kreasitech menawarkan berbagai layanan terbaik yang diformulasikan untuk menjawab kebutuhan Anda akan teknologi dan digitalisasi produk. Maka, jangan ragu untuk menghubungi kami dan konsultasikan produk Anda.
                </p>
                <div className="flex justify-center items-center gap-4 mb-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="text-gray-100 text-base font-medium font-montserrat">Diskusi ke Kami</div>
                        </Link>
                        <Link href="#about" className="w-max flex items-center justify-center gap-2 px-6 py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                            Pelajari Layanan
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6 animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-0 pb-12">
                <div className="relative rounded-xl shadow-2xl border border-gray-200 bg-white">
                    {/* Dashboard Image */}
                    <img
                        alt="HiTalent Dashboard Interface showing analytics graphs, employee lists, and notifications in a clean layout"
                        className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                        src="/assets/images/products/Dashboard New Chart 1.svg"
                    />
                    {/* Floating Card - Bottom Left */}
                    <div className="absolute -bottom-4 -left-2 w-[35%] sm:w-[30%] md:w-[35%] lg:w-auto md:-bottom-6 md:-left-4 lg:-bottom-8 lg:-left-12 lg:-translate-x-1/2">
                        <img
                            alt="HiTalent Dashboard Analytics Card"
                            className="w-full h-auto"
                            src="/assets/images/products/Frame 1231 1.svg"
                        />
                    </div>
                    {/* Floating Card - Top Right */}
                    <div className="absolute -top-4 -right-2 w-[25%] sm:w-[20%] md:w-[25%] lg:w-auto md:-top-6 md:-right-4 lg:-top-8 lg:-right-8">
                        <img
                            alt="HiTalent Dashboard Modal"
                            className="w-full h-auto"
                            src="/assets/images/products/Modal 1.svg"
                        />
                    </div>
                </div>
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-violet-500/20 blur-3xl -z-10 rounded-[50%]"></div>
            </div>
        </section>
    );
}
