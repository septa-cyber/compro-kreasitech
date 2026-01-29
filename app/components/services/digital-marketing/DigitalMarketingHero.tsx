"use client";
import React from "react";
import Image from "next/image";

export default function DigitalMarketingHero() {
    return (
        <section className="relative pt-10 lg:pb-20 md:pb-16 sm:pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="z-10 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-montserrat leading-tight mb-6 text-text-light">
                            Buat Bisnis Anda Mudah <span className="font-semibold text-violet-600">Ditemukan & Dipercaya</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-montserrat">
                            Bangun citra profesional untuk brand Anda dengan layanan kreatif KreasiTech. Dari pembuatan logo & identitas visual, profil perusahaan, website profesional, hingga ilustrasi eksklusif & konten visual yang disesuaikan dengan identitas brand Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                            <a 
                                href="#" 
                                className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:-translate-y-0.5"
                            >
                                <span className="text-gray-100 text-base font-medium font-montserrat">Hubungi Kami</span>
                            </a>
                            <a 
                                href="#solutions" 
                                className="group flex items-center gap-2 text-text-light font-medium px-4 py-3 rounded hover:bg-gray-100 transition font-montserrat"
                            >
                                Pelajari Lebih Lanjut
                                <Image 
                                    src="/assets/images/arrow_downward.svg" 
                                    alt="" 
                                    width={24} 
                                    height={24} 
                                    className="w-6 h-6 group-hover:translate-y-1 transition-transform" 
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-[500px] w-full flex justify-center lg:justify-end">
                        {/* Decorative blur */}
                        <div className="absolute top-10 right-10 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGttbWNStGUphxca2FbbOgdljjOoL92ByMZLbsV54-3S73yYUex9afqGpG0R5iq1dh5cDIT-4CNySk48fU7lxSu60pUXBDpdAtvUzFc1M6fXNEeOQdctNNWqDKQkbAFABHmXq2NsDXIThEiSplvo_DSbPt-WTSq-P-GtzNC7_U7sUCo2M9Eyol9eo6Cfhcz_wYHN-Q8rFyfeyloC9KJ9_eCb37gTglpPeXy-200bNxKU7Iw6_9wJL429mPD2bSBPq8HaRW2JUVYic"
                            alt="Digital Marketing Workspace"
                            width={500}
                            height={500}
                            className="relative rounded-lg shadow-2xl z-10 w-full max-w-md object-cover h-auto lg:h-full transform rotate-2 hover:rotate-0 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
