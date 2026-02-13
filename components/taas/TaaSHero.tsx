"use client";
import React from "react";
import Link from "next/link";

export default function TaaSHero() {
    return (
        <section className="relative pt-24 pb-24 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <h1 className="text-[40px] sm:text-5xl lg:text-6xl font-medium leading-tight text-text-light font-montserrat">
                            Talent as a Service <span className="text-violet-600">(TaaS)</span>
                        </h1>
                        <p className="text-sm sm:text-lg text-text-light-muted max-w-lg leading-relaxed font-montserrat mx-auto lg:mx-0">
                            Kami menyediakan Talent as a Service (TaaS) untuk membantu bisnis Anda mengakses talenta teknologi dan digital terbaik. Dengan pendekatan yang fleksibel dan efisien, kami menyediakan profesional berkualitas untuk mendukung proyek jangka pendek maupun panjang sesuai kebutuhan Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="w-full sm:w-max px-6 md:px-8 py-3 md:py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300"
                            >
                                <div className="text-gray-100 text-base font-medium font-montserrat">Hubungi Kami</div>
                            </Link>
                            <Link
                                href="#engagement"
                                className="w-full sm:w-max flex items-center justify-center gap-2 px-6 py-3 md:py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group"
                            >
                                Pelajari Lebih Lanjut
                                <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6 animate-bounce" />
                            </Link>
                        </div>
                    </div>

                    {/* Talent Cards Visualization */}
                    <div className="relative h-[400px] hidden lg:block">
                        {/* Concentric circles */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-gray-300 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-gray-200 rounded-full"></div>

                        {/* Talent Card 1 - Fendi */}
                        <div className="absolute top-[10%] left-[10%] bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-float-slow">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">F</div>
                            <div>
                                <p className="text-xs font-medium text-text-light font-montserrat">Fendi</p>
                                <p className="text-[10px] text-text-light-muted font-montserrat">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Talent Card 2 - Imdadu */}
                        <div className="absolute bottom-[15%] left-[20%] bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-float-medium">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">I</div>
                            <div>
                                <p className="text-xs font-medium text-text-light font-montserrat">Imdadu</p>
                                <p className="text-[10px] text-text-light-muted font-montserrat">Front-End Developer</p>
                            </div>
                        </div>

                        {/* Talent Card 3 - Wahyu */}
                        <div className="absolute top-[40%] right-[5%] bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-float-fast">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white font-bold">W</div>
                            <div>
                                <p className="text-xs font-medium text-text-light font-montserrat">Wahyu Septa P.</p>
                                <p className="text-[10px] text-text-light-muted font-montserrat">UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

