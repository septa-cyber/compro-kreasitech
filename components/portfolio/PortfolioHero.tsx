import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdArrowDownward } from "react-icons/md";
import Breadcrumb from "@/components/ui/Breadcrumb";
export default function PortfolioHero() {
    return (
        <section className="relative overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between gap-4 md:gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-2/3 md:w-1/2 flex flex-col justify-start items-start gap-4 md:gap-8 z-10 mb-10">
                        <Breadcrumb items={[
                            { label: "Home", href: "/" },
                            { label: "Company", href: "/company" },
                            { label: "Portfolio", href: "/portfolio" }
                        ]} />

                        {/* Title & Desc */}
                        <div className="flex flex-col gap-8">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat text-gray-900 leading-tight">
                                Experience <br />
                                Our <span className="font-bold text-violet-600">Best<br className="md:hidden" /> Works</span>
                            </h1>
                            <p className="font-body text-gray-700 md:text-lg max-w-xl">
                                Tim kami unik dan berbakat, berkembang dalam lingkungan yang santai dan ramah. Jika Anda mencari tempat di mana ide-ide Anda dapat bersinar, bergabunglah dengan kami dan mari ciptakan sesuatu yang luar biasa!
                            </p>
                        </div>

                        {/* CTA */}
                        <Link href="#featured" className="group inline-flex items-center gap-4 text-violet-600 transition-colors">
                            <span className="font-body font-medium hover:text-violet-700 transition-colors">Pelajari Lebih Lanjut</span>
                            <div className="flex items-center justify-center relative">
                                <MdArrowDownward className="text-xl animate-bounce" />
                            </div>
                        </Link>
                    </div>

                    {/* Right Content - Full SVG Image */}
                    <div className="w-full md:w-1/2 flex items-center justify-center relative z-20 md:py-16">
                        <Image
                            src="/assets/images/CTA/designer-color-palette-violet.svg"
                            alt="Designer Color Palette Illustration"
                            width={500}
                            height={500}
                            className="w-full max-w-[300px] md:max-w-md lg:max-w-lg object-contain mt-8 md:mt-0"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

