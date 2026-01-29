"use client";
import React from "react";
import Image from "next/image";

const services = [
    {
        title: "SEO",
        description: "Tingkatkan visibilitas website dan trafik organik agar mudah ditemukan di Google tanpa biaya iklan besar.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbPeV9vrCsVLTRIfjhyhMWxhixceXHIrKrD_9YuOTYpwDF3i52IZTo5aW26eNDmJsZoj6b0IXbgydbauAIBU2RLla4i4y9d4H4-060Ir0CmfWKV9hiITDzuhNW3hTEZLPJqurvFQHLHOJTMi7D647XuOlZX5Wgud8AxNA6EUCny6paakq1OA_p8P7jQIgVUY044-5jO6tgdDgQrX3Ew27Tw-S8vGuRFSrg94RCotKa77kQLI_MTasHJnPbJmvcx7T6gxfjTZ6Z5Cc",
        features: [
            "Research keyword",
            "Pembuatan artikel SEO",
            "Setup & maintenance web",
            "Optimasi Berbasis Data & Laporan Bulanan"
        ]
    },
    {
        title: "Ads",
        description: "Jangkau lebih banyak calon pelanggan dengan strategi periklanan digital yang tertarget.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX-QV7IJP0pTQulGKKIPNZ1cB1ImC50bzuDNe75SHG8TPuXPpwx1K33qnAXcpZW1r4SpEbXluTIFsSObNxqxHs6yWxE4vKTmWWcvxEcKtZs4cREgVRaYvqJx7H6T6a53EMTgpspPsAwU-mHuL-rxEKm9WJywPTNf3_Qfdk4CCSXRfE6io3JEYyYGalT5tSXaiNJGrQ3vI8v7NKpCftPcBpmsZ_RM-P1Ck-Y6PxZGMVxTqXFgvT1VqoNNAIrOgjXQN5Ces8RGbhNYw",
        features: [
            "Research",
            "Copy Writing",
            "Desain Visual",
            "Report Bulanan"
        ]
    },
    {
        title: "Press Release",
        description: "Tingkatkan kredibilitas brand Anda melalui publikasi di media-media terpercaya.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDst4rSoagCdQW-qxqxv5BlRcKvtmOny1mNZRqfQ81gSezOS9Ttquo_xMXm7J1qEE4ibkBeFh88BOVIxVXLmW6y0Xbh2ziZaeQLNgQtEyy7qht4BSGmeCGLsFV5SzcJXCEEfjmYq-_b6PJAq9mWkz6gZnqC1Dv5Blfvi0XsgEdWqQfbgFblot5k7wUAOBM0YvCsAhA_eLakoPEpdVcvjYUsSzd5XxKkJ8fqmj0khnSxvessNEg3gfNlXJEfEtjZKmM1LpF6WgRGww",
        features: [
            "Research",
            "Copy Writing",
            "Desain Visual",
            "Report Bulanan"
        ]
    },
    {
        title: "Backlink",
        description: "Tingkatkan otoritas domain website Anda dengan backlink berkualitas dari situs terpercaya.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7l4tAiuO-rDVTWvGEXt454BPvQ4Q5nYKrG-Kul12xHkOMcF15A0ETlyJ33yXScDaIcynswA_61maEFZBgnp8rV7470R6suWDTVD6UPGk4pJl9N9qdBFRbHx8zbMwlrPvLUm4EcOzi9KvuJh0k2AunwRorLkp3x-XCGYfNPR6ixFZKSKIXMzqC-8Rie91AcdUPwNlg8S-Y0iK3tiUDixOKyOt0sBhDm2QSDkhRTHbVgwSsUSV8CNNIXapS19rD55-soFmJFgs5nQo",
        features: [
            "Research",
            "Copy Writing",
            "Desain Visual",
            "Report Bulanan"
        ]
    }
];

export default function ServicesGrid() {
    return (
        <section id="solutions" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium font-montserrat mb-4 text-text-light">
                        Solusi yang Kami Tawarkan
                    </h2>
                    <p className="text-gray-600 font-montserrat">
                        Solusi digital marketing kami dirancang untuk mengangkat brand Anda dan mendorong pertumbuhan. Kami menawarkan rangkaian layanan komprehensif untuk membantu Anda sukses di lanskap online yang kompetitif.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group"
                        >
                            {/* Image */}
                            <div className="bg-violet-50 rounded-lg p-4 mb-6 h-40 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={`${service.title} Illustration`}
                                    width={200}
                                    height={160}
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold font-montserrat mb-3 text-text-light">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mb-6 flex-grow font-montserrat">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-700 font-montserrat">
                                        <i className="fas fa-check-square text-violet-600 text-base mt-0.5"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a 
                                href="#" 
                                className="w-full block text-center bg-violet-600 text-white py-2.5 rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 font-montserrat"
                            >
                                Pricelist 
                                <i className="fas fa-arrow-up-right-from-square text-sm"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
