"use client";

import React from 'react';
import Image from 'next/image';

export default function Hero() {
    const [isBadgesHovered, setIsBadgesHovered] = React.useState(false);
    const [isTrustedByHovered, setIsTrustedByHovered] = React.useState(false);

    const badgesData = [
        {
            icon: "/assets/images/tag_faces.svg",
            count: "50+",
            label: "Happy Clients",
            bg: "bg-primary/10"
        },
        {
            icon: "/assets/images/task_alt.svg",
            count: "100+",
            label: "Projects Completed",
            bg: "bg-primary/10"
        },
        {
            icon: "/assets/images/star_border_purple500.svg",
            count: "4+",
            label: "Years Experience",
            bg: "bg-primary/10"
        }
    ];

    const partnerLogos = Array(7).fill("/assets/images/Logo.svg");

    return (
        <section className="relative pt-40 pb-20 lg:pt-54 lg:pb-16 overflow-hidden bg-[#F4F4F7]">
            {/* Geometric Background Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-full md:h-full max-w-[1400px] pointer-events-none flex items-center justify-center z-0">
                <img src="/assets/images/Lines.svg" alt="" className="w-full h-full object-contain opacity-80 dark:opacity-60" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">

                {/* Main Heading */}
                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Membangun Ekosistem <span className="font-semibold text-violet-600">Talenta & Teknologi</span> yang Bersinergi serta Terintegrasi.
                </h1>

                {/* Subheading */}
                <div className="max-w-2xl mx-auto mb-10">
                    <p className="text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                        Software Development | Talent as a Service | Academy | Digital Marketing
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="text-gray-100 text-base font-medium font-montserrat">Konsultasi</div>
                        </a>
                        <a href="#" className="w-max flex items-center justify-center gap-2 px-6 py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                            Pelajari Layanan
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Floating Cards - Desktop (Absolute) for XL+ screens only */}

                {/* Card 1: Happy Clients */}
                <div className="hidden xl:block absolute -top-5 left-0 animate-float-slow z-20">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                            <Image src="/assets/images/tag_faces.svg" alt="Happy Clients" width={24} height={24} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-base text-text-light">50+</div>
                            <div className="text-[10px] text-gray-500 uppercase font-medium">Happy Clients</div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Professional Talents */}
                <div className="hidden xl:block absolute top-35 -right-12 animate-float-medium z-20">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                            <Image src="/assets/images/star_border_purple500.svg" alt="Professional Talents" width={24} height={24} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-base text-text-light">100+</div>
                            <div className="text-[10px] text-gray-500 uppercase font-medium">Professional Talents</div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Projects Completed */}
                <div className="hidden xl:block absolute bottom-26 left-10 animate-float-fast z-20">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                            <Image src="/assets/images/task_alt.svg" alt="Projects Completed" width={24} height={24} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-base text-text-light">50+</div>
                            <div className="text-[10px] text-gray-500 uppercase font-medium">Projects Completed</div>
                        </div>
                    </div>
                </div>

                {/* Tablet/Laptop Static Section (MD to XL) */}
                <div className="hidden md:flex xl:hidden w-full justify-center gap-6 mt-16 flex-wrap">
                    {badgesData.map((badge, index) => (
                        <div key={index} className="p-4 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 min-w-[200px]">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                                <Image src={badge.icon} alt={badge.label} width={24} height={24} className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-base text-text-light">{badge.count}</div>
                                <div className="text-[10px] text-gray-500 uppercase font-medium">{badge.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Mobile Marquee Section (< MD) */}
            <div className="w-full md:hidden mt-8 overflow-hidden relative">
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsBadgesHovered(true)}
                    onMouseLeave={() => setIsBadgesHovered(false)}
                >
                    <div
                        className="flex gap-4 mx-2 w-max flex-shrink-0 animate-marquee"
                        style={{ animationPlayState: isBadgesHovered ? 'paused' : 'running' }}
                    >
                        {[...badgesData, ...badgesData, ...badgesData, ...badgesData].map((badge, index) => (
                            <div key={index} className="p-2 bg-white/95 backdrop-blur-md rounded-lg flex justify-start items-center gap-4 border border-gray-100">
                                <div className={`w-8 h-8 relative flex items-center justify-center rounded-full ${badge.bg}`}>
                                    <Image src={badge.icon} alt={badge.label} width={24} height={24} className="w-6 h-6" />
                                </div>
                                <div className="inline-flex flex-col justify-start items-start gap-1">
                                    <div className="text-text-light text-sm font-medium font-montserrat">{badge.count}</div>
                                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">{badge.label}</div>
                                </div>
                            </div>
                        ))}
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
                                <Image src={logo} alt="Kreasitech" width={100} height={32} className="h-8 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
