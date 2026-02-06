"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ImpactAcademyCTA() {
    return (
        <section className="py-24 bg-violet-800 flex flex-col justify-start items-center gap-24 overflow-hidden" data-theme="dark">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center gap-16">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/assets/images/CTA/student-studying-white.svg"
                        alt="Learning illustration"
                        width={400}
                        height={400}
                        className="w-full max-w-md"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start gap-8">
                    <div className="w-full flex flex-col justify-start items-center lg:items-start gap-8 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-white leading-tight">
                            Siap Belajar dan Berkarir di Dunia Digital?
                        </h2>
                        <p className="text-sm sm:text-base font-normal font-montserrat text-white/80 max-w-2xl">
                            Bergabunglah dengan Impact Academy dan dapatkan pelatihan inklusif dengan mentor berpengalaman, kesempatan magang, serta akses ke perusahaan mitra kami.
                        </p>
                    </div>
                    <Link href="/contact" className="px-8 py-4 bg-white rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors">
                        <span className="text-violet-800 text-base font-medium font-montserrat">Daftar Sekarang</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
