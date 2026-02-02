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
            label: "Klien Puas",
            bg: "bg-primary/10"
        },
        {
            icon: "/assets/images/task_alt.svg",
            count: "100+",
            label: "Proyek Selesai",
            bg: "bg-primary/10"
        },
        {
            icon: "/assets/images/star_border_purple500.svg",
            count: "4+",
            label: "Tahun Pengalaman",
            bg: "bg-primary/10"
        }
    ];

    const partnerLogos = [
        "/assets/images/LOGO CLIENT/LOGO CLIENT/4life.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/AWS.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Ayro_Trading_Jaya_1.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Bekawan.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/BIG.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/BP.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/btrade.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/callisto erp.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Ceicilia.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/CKS_PEARL_LOGO_MASTER.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Danamon.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/danarhadi.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/eduline.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/FIF Group.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/gracia bag.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/IKN.jpeg",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/kalbu.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/kusuma medika.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo bayarind 1.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo bisa basi.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo callisto.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo eds.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo GSK.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo khs.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo medlink.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo octa meyer.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo spfio.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Logo-Aizonee-v3.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo-bsi.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Logo-QuBisa.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/LOGO-SINODE-1.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo-zep.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/logo_central_small.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/mkw.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Nyalacinta.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/obviously sustainable.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/ohana.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Outsystems.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/PPU.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/PT Ako Media Asia.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/queeri.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Sangfor.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/save-the-children-logo-horizontal-color-positive_2.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Sehat_meyer.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Sequis Tower.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/spfio.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/susi.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/This is april.jpg",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/Titik_nol.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/tokocrypto.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/UT - Forum Study Ilmu Hukum.png",
        "/assets/images/LOGO CLIENT/LOGO CLIENT/xendit.png",
    ];

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

                {/* Card 1: Klien Puas */}
                <div className="hidden xl:block absolute -top-5 left-0 animate-float-slow z-20">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                            <Image src="/assets/images/tag_faces.svg" alt="Klien Puas" width={24} height={24} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-base text-text-light">50+</div>
                            <div className="text-[10px] text-gray-500 uppercase font-medium">Klien Puas</div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Talenta Profesional */}
                <div className="hidden xl:block absolute top-35 -right-12 animate-float-medium z-20">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                            <Image src="/assets/images/star_border_purple500.svg" alt="Talenta Profesional" width={24} height={24} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-base text-text-light">100+</div>
                            <div className="text-[10px] text-gray-500 uppercase font-medium">Talenta Profesional</div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Proyek Selesai */}
                <div className="hidden xl:block absolute bottom-26 left-10 animate-float-fast z-20">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                            <Image src="/assets/images/task_alt.svg" alt="Proyek Selesai" width={24} height={24} className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-base text-text-light">50+</div>
                            <div className="text-[10px] text-gray-500 uppercase font-medium">Proyek Selesai</div>
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
            <div className="w-full md:hidden mt-8 overflow-hidden relative marquee-container">
                <div
                    className="flex overflow-hidden relative"
                    onMouseEnter={() => setIsBadgesHovered(true)}
                    onMouseLeave={() => setIsBadgesHovered(false)}
                >
                    {/* Container 1 */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isBadgesHovered ? 'paused' : 'running' }}
                    >
                        {[...badgesData, ...badgesData].map((badge, index) => (
                            <div key={`badge-1-${index}`} className="mx-2 p-2 bg-white/95 backdrop-blur-md rounded-lg flex justify-start items-center gap-4 border border-gray-100 w-[200px]">
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
                    {/* Container 2 (Duplicate) */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isBadgesHovered ? 'paused' : 'running' }}
                    >
                        {[...badgesData, ...badgesData].map((badge, index) => (
                            <div key={`badge-2-${index}`} className="mx-2 p-2 bg-white/95 backdrop-blur-md rounded-lg flex justify-start items-center gap-4 border border-gray-100 w-[200px]">
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
            <div className="relative marquee-container">
                <div
                    className="w-full overflow-hidden flex items-center pb-12 z-10"
                    onMouseEnter={() => setIsTrustedByHovered(true)}
                    onMouseLeave={() => setIsTrustedByHovered(false)}
                >
                    {/* Container 1 */}
                    <div
                        className="flex shrink-0 animate-scroll-left-slow items-center"
                        style={{ animationPlayState: isTrustedByHovered ? 'paused' : 'running' }}
                    >
                        {[...partnerLogos].map((logo, index) => (
                            <div key={`logo-1-${index}`} className="flex items-center justify-center mx-8">
                                <Image
                                    src={logo}
                                    alt="Partner Logo"
                                    width={200}
                                    height={50}
                                    className="h-[50px] w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Container 2 (Duplicate) */}
                    <div
                        className="flex shrink-0 animate-scroll-left-slow items-center"
                        style={{ animationPlayState: isTrustedByHovered ? 'paused' : 'running' }}
                    >
                        {[...partnerLogos].map((logo, index) => (
                            <div key={`logo-2-${index}`} className="flex items-center justify-center mx-8">
                                <Image
                                    src={logo}
                                    alt="Partner Logo"
                                    width={200}
                                    height={50}
                                    className="h-[50px] w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
