import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdArrowDownward } from "react-icons/md";
import Breadcrumb from "@/app/components/ui/Breadcrumb";

export default function PortfolioHero() {
    const column1Images = [
        "https://placehold.co/228x448",
        "https://placehold.co/228x448",
        "https://placehold.co/228x448",
        "https://placehold.co/228x448",
    ];

    const column2Images = [
        "https://placehold.co/228x448",
        "https://placehold.co/228x448",
        "https://placehold.co/228x448",
        "https://placehold.co/228x448",
    ];

    return (
        <section className="relative overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8 z-10">
                        <Breadcrumb items={[
                            { label: "Home", href: "/" },
                            { label: "Company", href: "/company" },
                            { label: "Portfolio", href: "/portfolio" }
                        ]} />

                        {/* Title & Desc */}
                        <div className="flex flex-col gap-8">
                            <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl text-text-light">
                                Experience <br />
                                Our <span className="font-semibold text-violet-600">Best Works</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                                Our team is a quirky, talented bunch who thrive in a relaxed and friendly environment. If you're looking for a place where your ideas can shine, come join us and let's create something awesome!
                            </p>
                        </div>

                        {/* CTA */}
                        <a href="#featured" className="group inline-flex items-center gap-4 text-gray-900 font-medium font-montserrat hover:text-violet-600 transition-colors">
                            <span>Learn More</span>
                            <div className="w-6 h-6 flex items-center justify-center relative">
                                <MdArrowDownward className="text-violet-600 text-xl group-hover:translate-y-1 transition-transform" />
                            </div>
                        </a>
                    </div>

                    {/* Right Content - Image Columns */}
                    {/* Right Content - Image Columns */}
                    {/* Right Content - Image Columns */}
                    <div className="w-full lg:w-1/2 h-[600px] lg:h-[800px] flex gap-4 md:gap-8 justify-center lg:justify-end overflow-hidden mask-linear-fade relative z-20 cursor-pointer">
                        {/* Gradient Masks for smooth fade out top/bottom */}
                        <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-background-light via-transparent to-background-light h-full w-full" />

                        {/* Column 1 - Scroll Up */}
                        <div className="flex flex-col animate-scroll-up pointer-events-auto relative z-20">
                            {[...column1Images, ...column1Images].map((src, i) => (
                                <div key={`col1-${i}`} className="w-40 sm:w-56 h-64 sm:h-96 flex-shrink-0 relative overflow-hidden mb-4 md:mb-8">
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
                        <div className="flex flex-col animate-scroll-down mt-[-100px] pointer-events-auto relative z-20">
                            {[...column2Images, ...column2Images].map((src, i) => (
                                <div key={`col2-${i}`} className="w-40 sm:w-56 h-64 sm:h-96 flex-shrink-0 relative overflow-hidden mb-4 md:mb-8">
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
