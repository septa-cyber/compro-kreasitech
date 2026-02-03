"use client";
import React from "react";
import Image from "next/image";

export default function PartnersSection() {
    const [isHovered, setIsHovered] = React.useState(false);

    const partnerLogos = [
        "/assets/images/partners/logo1.svg",
        "/assets/images/partners/logo2.svg",
        "/assets/images/partners/logo3.svg",
        "/assets/images/partners/logo4.svg",
        "/assets/images/partners/logo5.svg",
        "/assets/images/partners/logo6.svg",
    ];

    return (
        <section className="py-10 bg-gray-100 border-y border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 text-center mb-6">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider font-montserrat">
                    Dipercaya oleh bisnis terkemuka seperti:
                </span>
            </div>
            <div
                className="overflow-hidden relative w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="flex space-x-16 items-center animate-marquee whitespace-nowrap px-4 justify-center"
                    style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                >
                    {/* Duplicate content for seamless marquee */}
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
                        >
                            <Image
                                src={logo}
                                alt={`Partner ${(index % partnerLogos.length) + 1}`}
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
