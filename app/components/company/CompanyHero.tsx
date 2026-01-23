"use client";
import React from "react";

export default function CompanyHero() {

    const [isTrustedByHovered, setIsTrustedByHovered] = React.useState(false);

    const partnerLogos = Array(7).fill("/assets/images/Logo.svg");

    return (
        <section className="relative pt-10 pb-20 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Where <span className="font-semibold text-violet-600">Talent</span> Meets <br className="hidden md:block" /> Technology
                </h1>
                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                    At Kreasitech, we're dedicated to revolutionizing the tech industry by connecting exceptional talent with cutting-edge opportunities. Our mission is to empower individuals and organizations to thrive in the digital age.
                </p>
                <div className="flex justify-center items-center gap-4 mb-16">
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

                {/* Avatar Collage */}
                <div className="flex flex-nowrap justify-center items-center gap-1.5 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
                    <div className="w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300 flex-shrink-0">
                        <img
                            alt="Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src="/assets/images/employee/Nina.png"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-4 flex-shrink-0">
                        <div className="w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="/assets/images/employee/Janah.png"
                            />
                        </div>
                        <div className="w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="/assets/images/employee/Fena.png"
                            />
                        </div>
                    </div>
                    <div className="w-20 h-28 sm:w-40 sm:h-56 md:w-40 md:h-56 lg:w-56 lg:h-72 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300 shadow-xl flex-shrink-0">
                        <img
                            alt="Main Avatar illustration - Fendi"
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                            src="/assets/images/employee/Rahmat.png"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-4 flex-shrink-0">
                        <div className="w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="/assets/images/employee/Imdad.png"
                            />
                        </div>
                        <div className="w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="/assets/images/employee/Luthfi.png"
                            />
                        </div>
                    </div>
                    <div className="w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300 flex-shrink-0">
                        <img
                            alt="Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src="/assets/images/employee/Fendi.png"
                        />
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
                {/* Trusted By Header */}
                <div className="mt-24 mb-6 w-full max-w-7xl mx-auto text-center z-10">
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
