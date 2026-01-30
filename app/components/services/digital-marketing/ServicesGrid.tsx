"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { digitalMarketingServices } from "@/app/data/digital-marketing-services";

export default function ServicesGrid() {
    return (
        <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 sm:gap-20 lg:gap-24">
                {/* Header */}
                <div className="w-full max-w-[784px] flex flex-col items-center gap-6 sm:gap-8 text-center px-4">
                    <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light">
                        Solusi yang Kami Tawarkan
                    </h2>
                    <p className="w-full max-w-[627px] text-gray-600 text-sm sm:text-base font-normal font-montserrat">
                        Solusi digital marketing kami dirancang untuk mengangkat brand Anda dan mendorong pertumbuhan. Kami menawarkan rangkaian layanan komprehensif untuk membantu Anda sukses di lanskap online yang kompetitif saat ini.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {digitalMarketingServices.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/digital-marketing/${service.slug}`}
                            className="group p-6 sm:p-8 bg-white outline outline-[0.5px] outline-gray-200 flex flex-col gap-6 hover:bg-violet-800 transition-colors duration-300 cursor-pointer min-h-[600px] sm:min-h-[700px]"
                        >
                            {/* Image */}
                            <div className="self-stretch bg-orange-100 flex items-center justify-center overflow-hidden py-2.5 h-48">
                                <Image
                                    src={service.image}
                                    alt={`${service.title} Illustration`}
                                    width={256}
                                    height={176}
                                    className="w-64 h-44 object-contain"
                                />
                            </div>

                            {/* Title & Description */}
                            <div className="self-stretch flex flex-col gap-2">
                                <h3 className="text-2xl font-medium font-montserrat text-text-light group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm font-normal font-montserrat text-text-light group-hover:text-white transition-colors">
                                    {service.shortDescription}
                                </p>
                            </div>

                            {/* Features & Button */}
                            <div className="self-stretch flex-1 flex flex-col justify-between gap-6">
                                {/* Features */}
                                <div className="self-stretch flex flex-col gap-4">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-4">
                                            {/* Checkmark Icon */}
                                            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="3" width="18" height="18" rx="2" className="fill-violet-400 opacity-30 group-hover:fill-white group-hover:opacity-30 transition-all" />
                                                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600 group-hover:text-white transition-colors" />
                                            </svg>
                                            <div className="flex-1 text-text-light group-hover:text-white text-sm font-normal font-montserrat transition-colors">
                                                {feature}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider & Button */}
                                <div className="self-stretch flex flex-col gap-6 sm:gap-8">
                                    <div className="self-stretch h-px bg-gray-200 group-hover:bg-white/20 transition-colors"></div>
                                    <div
                                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-violet-600 group-hover:bg-white rounded-lg flex justify-center items-center gap-2.5 transition-colors"
                                    >
                                        <span className="text-gray-100 group-hover:text-violet-600 text-base font-medium font-montserrat transition-colors">
                                            Lihat Detail
                                        </span>
                                        {/* Arrow Icon */}
                                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" className="fill-gray-100 group-hover:fill-violet-600 transition-colors" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
