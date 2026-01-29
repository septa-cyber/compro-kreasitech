"use client";
import React from "react";
import Image from "next/image";

export default function DigitalMarketingHero() {
    const [isTrustedByHovered, setIsTrustedByHovered] = React.useState(false);

    const partnerLogos = Array(7).fill("/assets/images/Logo.svg");

    return (
        <section className="relative pt-12 pb-6 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content */}
                <div className="flex flex-col justify-start items-start gap-8 mb-12">
                    {/* Title and Image Row */}
                    <div className="w-full lg:min-h-[480px] flex flex-col justify-center items-start gap-8">
                        <div className="w-full flex flex-col justify-center items-start gap-8">
                            {/* Mobile & Tablet Layout: Image on Top */}
                            <div className="w-full lg:hidden flex flex-col items-center gap-8 text-center">
                                {/* Image - Full width on mobile, contained on tablet */}
                                <div className="relative w-full max-w-md">
                                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl"></div>
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGttbWNStGUphxca2FbbOgdljjOoL92ByMZLbsV54-3S73yYUex9afqGpG0R5iq1dh5cDIT-4CNySk48fU7lxSu60pUXBDpdAtvUzFc1M6fXNEeOQdctNNWqDKQkbAFABHmXq2NsDXIThEiSplvo_DSbPt-WTSq-P-GtzNC7_U7sUCo2M9Eyol9eo6Cfhcz_wYHN-Q8rFyfeyloC9KJ9_eCb37gTglpPeXy-200bNxKU7Iw6_9wJL429mPD2bSBPq8HaRW2JUVYic"
                                        alt="Digital Marketing Workspace"
                                        width={400}
                                        height={520}
                                        className="relative w-full h-auto object-cover rounded-xl shadow-2xl z-10"
                                    />
                                </div>
                                
                                {/* Title */}
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-montserrat leading-tight text-text-light">
                                    Make Your Business Easy to{" "}
                                    <span className="text-violet-600 font-semibold">Find & Trust</span>
                                </h1>
                            </div>

                            {/* Desktop Layout: Side by Side */}
                            <div className="hidden lg:flex w-full justify-start items-end gap-8">
                                {/* Left: Title */}
                                <div className="flex-1 flex justify-center items-end">
                                    <h1 className="text-7xl xl:text-8xl font-medium font-montserrat leading-tight text-text-light">
                                        Make Your Business Easy to{" "}
                                        <span className="text-violet-600 font-semibold">Find & Trust</span>
                                    </h1>
                                </div>
                                
                                {/* Right: Image */}
                                <div className="relative">
                                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl"></div>
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGttbWNStGUphxca2FbbOgdljjOoL92ByMZLbsV54-3S73yYUex9afqGpG0R5iq1dh5cDIT-4CNySk48fU7lxSu60pUXBDpdAtvUzFc1M6fXNEeOQdctNNWqDKQkbAFABHmXq2NsDXIThEiSplvo_DSbPt-WTSq-P-GtzNC7_U7sUCo2M9Eyol9eo6Cfhcz_wYHN-Q8rFyfeyloC9KJ9_eCb37gTglpPeXy-200bNxKU7Iw6_9wJL429mPD2bSBPq8HaRW2JUVYic"
                                        alt="Digital Marketing Workspace"
                                        width={250}
                                        height={324}
                                        className="relative w-64 h-auto object-cover rounded-lg shadow-xl z-10"
                                    />
                                </div>
                            </div>
                            
                            {/* Description */}
                            <p className="w-full text-gray-600 text-base font-normal font-montserrat leading-relaxed text-center lg:text-left">
                                Build a professional image for your brand with KreasiTech&apos;s creative services. From logo & visual identity creation, company profiles, professional websites, to exclusive illustrations & visual content tailored to your brand&apos;s identity.
                            </p>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-8 w-full">
                            <a 
                                href="#" 
                                className="w-full sm:w-auto px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-600/30"
                            >
                                <span className="text-gray-100 text-base font-medium font-montserrat">Contact Us</span>
                            </a>
                            <a 
                                href="#solutions" 
                                className="flex justify-start items-center gap-4 group"
                            >
                                <span className="text-text-light text-base font-medium font-montserrat group-hover:text-violet-600 transition">Learn More</span>
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
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full h-px bg-gray-200 mb-12" />
            </div>

            {/* Trusted By Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
                {/* Trusted By Header */}
                <div className="mb-6 w-full max-w-7xl mx-auto text-center z-10">
                    <div className="w-full text-center text-gray-500 text-xs font-normal font-montserrat">Dipercaya oleh bisnis terkemuka seperti:</div>
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
