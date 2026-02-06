import React from 'react';
import Image from 'next/image';

export default function TalentCTA() {
    return (
        <section className="py-24 bg-gray-100 flex flex-col justify-start items-center gap-24 overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center gap-16">
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start gap-8">
                    <div className="w-full flex flex-col justify-start items-center lg:items-start gap-8 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light leading-tight">
                            Ada Ide Digital Product? Yuk Diskusi!
                        </h2>
                        <p className="text-sm sm:text-base font-normal font-montserrat text-text-light-muted">
                            Dari konsep hingga launching, tim developer kami siap menjadi partner terpercaya untuk mewujudkan produk impian Anda.
                        </p>
                    </div>
                    <div className="inline-flex justify-start items-start gap-8">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors"
                        >
                            <span className="text-gray-100 text-base font-medium font-montserrat">
                                Mulai Proyek
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/assets/images/CTA/designer-color-palette-violet.svg"
                        alt="Digital product illustration"
                        width={400}
                        height={400}
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
}
