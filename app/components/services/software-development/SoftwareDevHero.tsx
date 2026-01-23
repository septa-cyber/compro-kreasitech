"use client";
import React from "react";

export default function SoftwareDevHero() {

    const [isTrustedByHovered, setIsTrustedByHovered] = React.useState(false);

    const partnerLogos = Array(7).fill("/assets/images/Logo.svg");

    return (
        <section className="relative pt-10 lg:pb-20 md:pb-16 sm:pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Mewujudkan Ide Menjadi <span className="font-semibold text-violet-600">Solusi Digital</span> Bernilai Bisnis
                </h1>
                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                    Kreasitech menawarkan berbagai layanan terbaik yang diformulasikan untuk menjawab kebutuhan Anda akan teknologi dan digitalisasi produk. Maka, jangan ragu untuk menghubungi kami dan konsultasikan produk Anda.
                </p>
                <div className="flex justify-center items-center gap-4 lg:mb-16 md:mb-12 sm:mb-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="text-gray-100 text-base font-medium font-montserrat">Diskusi ke Kami</div>
                        </a>
                        <a href="#" className="w-max flex items-center justify-center gap-2 px-6 py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                            Pelajari Layanan
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
                {/* Trusted By Header */}
                <div className="lg:mt-20 md:mt-16 mt-12 mb-6 w-full max-w-7xl mx-auto text-center z-10">
                    <div className="w-full text-center text-SubText text-xs font-normal font-['Montserrat']">Dipercaya oleh bisnis terkemuka seperti:</div>
                </div>
            </div>

            {/* Trusted By Marquee */}
            <div className="relative">
                <div
                    className="w-full overflow-hidden flex items-center px-4 pb-12 z-10"
                    onMouseEnter={() => setIsTrustedByHovered(true)}
                    onMouseLeave={() => setIsTrustedByHovered(false)}
                >
                    <div
                        className="flex space-x-12 shrink-0 animate-marquee items-center"
                        style={{ animationPlayState: isTrustedByHovered ? 'paused' : 'running' }}
                    >
                        {/* Duplicate content for marquee effect */}
                        {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                            <div key={index} className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                                <img src={logo} alt="Kreasitech" className="h-8 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
