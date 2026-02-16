"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { digitalMarketingServices } from "@/data/digital-marketing-services";
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesSections() {
    return (
        <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-32">
                {/* Header */}
                <div className="w-full max-w-[784px] flex flex-col items-center gap-6 sm:gap-8 text-center px-4">
                    <h2 className="font-h2">
                        Solusi yang Kami Tawarkan
                    </h2>
                    <p className="w-full max-w-[627px] font-body">
                        Solusi digital marketing kami dirancang untuk mengangkat brand Anda dan mendorong pertumbuhan. Kami menawarkan rangkaian layanan komprehensif untuk membantu Anda sukses di lanskap online yang kompetitif saat ini.
                    </p>
                </div>

                {/* Services as Individual Sections */}
                {digitalMarketingServices.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={index} className="w-full max-w-[1200px] flex flex-col justify-center items-start">
                            <div className={`w-full flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                <div className={`flex w-full lg:w-auto gap-6 sm:gap-8 items-stretch ${!isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                                    {/* Large Image Column */}
                                    <div className={`relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] h-[380px] sm:h-[420px] lg:h-[460px] rounded-2xl flex items-center justify-center overflow-hidden bg-white p-6 sm:p-8`}>
                                        <Image
                                            src={service.heroImage1}
                                            alt={`${service.title} Illustration`}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Small Icon Boxes Column */}
                                    <div className="flex flex-col gap-6 sm:gap-8">
                                        <div className="w-44 sm:w-52 lg:w-60 flex-1 rounded-xl flex items-center justify-center overflow-hidden bg-white p-4 sm:p-5">
                                            <Image
                                                src={service.heroImage2}
                                                alt={`${service.title} Icon 1`}
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="w-44 sm:w-52 lg:w-60 flex-1 rounded-xl flex items-center justify-center overflow-hidden bg-white p-4 sm:p-5">
                                            <Image
                                                src={service.heroImage3}
                                                alt={`${service.title} Icon 2`}
                                                width={128}
                                                height={128}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1 flex flex-col justify-center items-start gap-6 sm:gap-8">
                                    <div className="flex flex-col gap-4">
                                        <h3 className="!text-violet-600 font-h2 lg:text-5xl">
                                            {service.title}
                                        </h3>
                                        <p className="font-body-lg max-w-xl">
                                            {service.heroDescription}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4 w-full">
                                        {service.cardFeatures.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-violet-100 flex items-center justify-center border border-violet-200 mt-0.5">
                                                    <svg className="w-4 h-4 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                                <span className="font-body font-medium">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

