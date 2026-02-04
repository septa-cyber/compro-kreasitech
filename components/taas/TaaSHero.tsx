"use client";
import React from "react";
import Link from "next/link";

export default function TaaSHero() {
    return (
        <section className="relative pt-10 pb-24 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-light font-montserrat">
                            Talent as a <br />
                            Service <span className="text-violet-600">(TaaS)</span>
                        </h1>
                        <p className="text-base lg:text-lg text-gray-500 max-w-lg leading-relaxed font-montserrat">
                            We offer Talent as a Service (TaaS) to help your business access top tech and digital talents. With a flexible and efficient approach, we provide skilled professionals to support short- or long-term projects tailored to your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition shadow-lg shadow-violet-600/20 font-montserrat"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="#engagement"
                                className="px-6 py-3 flex items-center gap-2 text-gray-700 font-medium hover:text-violet-600 transition font-montserrat"
                            >
                                Learn More
                                <i className="fas fa-arrow-right text-sm"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Talent Cards Visualization */}
                    <div className="relative h-[400px] hidden lg:block">
                        {/* Concentric circles */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-gray-300 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-gray-200 rounded-full"></div>

                        {/* Talent Card 1 - Fendi */}
                        <div className="absolute top-[20%] left-[20%] bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-float-slow">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">F</div>
                            <div>
                                <p className="text-xs font-bold text-text-light font-montserrat">Fendi</p>
                                <p className="text-[10px] text-gray-500 font-montserrat">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Talent Card 2 - Imdadu */}
                        <div className="absolute bottom-[25%] left-[30%] bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-float-medium">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">I</div>
                            <div>
                                <p className="text-xs font-bold text-text-light font-montserrat">Imdadu</p>
                                <p className="text-[10px] text-gray-500 font-montserrat">Front-End Developer</p>
                            </div>
                        </div>

                        {/* Talent Card 3 - Wahyu */}
                        <div className="absolute top-[40%] right-[10%] bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-float-fast">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white font-bold">W</div>
                            <div>
                                <p className="text-xs font-bold text-text-light font-montserrat">Wahyu Septa P.</p>
                                <p className="text-[10px] text-gray-500 font-montserrat">UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
