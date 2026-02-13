import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdArrowDownward } from "react-icons/md";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function PortfolioHero() {
    const column1Images = [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400",
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=400",
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400",
    ];

    const column2Images = [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400",
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=400",
    ];

    return (
        <section className="relative overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between gap-4 md:gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-2/3 md:w-1/2 flex flex-col justify-start items-start gap-4 md:gap-8 z-10">
                        <Breadcrumb items={[
                            { label: "Beranda", href: "/" },
                            { label: "Perusahaan", href: "/company" },
                            { label: "Portofolio", href: "/portfolio" }
                        ]} />

                        {/* Title & Desc */}
                        <div className="flex flex-col gap-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl text-text-light">
                                Jelajahi <br />
                                <span className="font-semibold text-violet-600">Karya Terbaik</span> Kami
                            </h1>
                            <p className="text-sm sm:text-lg text-gray-500 font-montserrat">
                                Tim kami adalah kumpulan orang-orang berbakat yang berkembang dalam lingkungan yang santai dan ramah. Jika Anda mencari tempat di mana ide-ide Anda bisa bersinar, bergabunglah dengan kami dan mari ciptakan sesuatu yang luar biasa!
                            </p>
                        </div>

                        {/* CTA */}
                        <Link href="/portfolio" className="px-6 md:px-8 py-3 md:py-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300">
                            <span className="text-white text-sm md:text-base font-medium font-montserrat">Lihat Semua</span>
                        </Link>
                        <Link href="#featured" className="group inline-flex items-center gap-4 text-gray-900 font-medium font-montserrat hover:text-violet-600 transition-colors">
                            <span>Pelajari Layanan</span>
                            <div className="w-6 h-6 flex items-center justify-center relative">
                                <MdArrowDownward className="text-violet-600 text-xl animate-bounce" />
                            </div>
                        </Link>
                    </div>

                    {/* Right Content - Image Columns */}
                    <div className="w-1/3 md:w-1/2 h-[700px] sm:h-[700px] lg:h-[800px] flex gap-2 md:gap-4 lg:gap-8 justify-center overflow-hidden mask-linear-fade relative z-20 cursor-pointer">
                        {/* Gradient Masks for smooth fade out top/bottom */}
                        <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-background-light via-transparent to-background-light h-full w-full" />

                        {/* Column 1 - Scroll Up */}
                        <div className="hidden md:flex flex-col animate-scroll-up pointer-events-auto relative z-20">
                            {[...column1Images, ...column1Images].map((src, i) => (
                                <div key={`col1-${i}`} className="w-24 h-36 sm:w-40 sm:h-64 lg:w-56 lg:h-96 flex-shrink-0 relative overflow-hidden mb-2 md:mb-8">
                                    <Image
                                        src={src}
                                        alt={`Portfolio item ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Column 2 - Scroll Down (Offset) */}
                        <div className="flex flex-col animate-scroll-down mt-[-50px] md:mt-[-100px] pointer-events-auto relative z-20">
                            {[...column2Images, ...column2Images].map((src, i) => (
                                <div key={`col2-${i}`} className="w-24 h-36 sm:w-40 sm:h-64 lg:w-56 lg:h-96 flex-shrink-0 relative overflow-hidden mb-2 md:mb-8">
                                    <Image
                                        src={src}
                                        alt={`Portfolio item ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

