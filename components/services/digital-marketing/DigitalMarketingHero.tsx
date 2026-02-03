import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DigitalMarketingHero() {
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
                                    Buat Bisnis Anda Mudah{" "}
                                    <span className="text-violet-600 font-semibold">Ditemukan & Dipercaya</span>
                                </h1>
                            </div>

                            {/* Desktop Layout: Side by Side */}
                            <div className="hidden lg:flex w-full justify-start items-end gap-8">
                                {/* Left: Title */}
                                <div className="flex-1 flex justify-center items-end">
                                    <h1 className="text-6xl lg:text-7xl font-medium font-montserrat leading-tight text-text-light">
                                        Buat Bisnis Anda Mudah{" "}
                                        <span className="text-violet-600 font-semibold">Ditemukan & Dipercaya</span>
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
                                Tingkatkan eksistensi bisnis Anda di dunia digital dengan strategi pemasaran yang terukur. Mulai dari optimasi SEO, manajemen Iklan (Ads), penguatan Backlink, hingga publikasi Press Release untuk membangun kredibilitas brand Anda.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-8 w-full">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300"
                            >
                                <span className="text-gray-100 text-base font-medium font-montserrat">Hubungi Kami</span>
                            </Link>
                            <Link
                                href="#services"
                                className="flex justify-start items-center gap-4 group"
                            >
                                <span className="text-text-light text-base font-medium font-montserrat group-hover:text-violet-600 transition">Pelajari Layanan</span>
                                <Image
                                    src="/assets/images/arrow_downward.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 animate-bounce"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="w-full h-px bg-gray-200" />
            </div>
        </section>
    );
}
