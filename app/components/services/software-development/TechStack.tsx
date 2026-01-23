"use client";
import React from "react";

export default function TechStack() {

    const [isTrustedByHovered, setIsTrustedByHovered] = React.useState(false);

    const partnerLogos = Array(7).fill("/assets/images/Logo.svg");

    return (
        <section className="relative lg:pb-20 lg:pt-20 md:pb-16 md:pt-16 sm:pb-12 sm:pt-12 overflow-hidden bg-[#F4F4F7]">

            {/* Trusted By Marquee */}
            <div className="relative">
                <div
                    className="w-full overflow-hidden flex items-center px-4 pb-4 pt-4 z-10"
                    onMouseEnter={() => setIsTrustedByHovered(true)}
                    onMouseLeave={() => setIsTrustedByHovered(false)}
                >
                    <div
                        className="flex space-x-12 shrink-0 animate-marquee-reverse items-center"
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
