import React from 'react';
import Link from 'next/link';

export default function OurProduct() {
    return (
        <section className="py-24 bg-[#F4F4F7] text-[#171717] overflow-hidden">
            <div className="flex flex-col items-center gap-24 px-4 w-full">
                {/* Header */}
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="text-4xl font-medium font-montserrat">
                        Produk Kami
                    </h2>
                </div>

                {/* Content */}
                <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">
                    {/* Left Column: Text */}
                    <div className="w-full lg:w-[480px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h3 className="text-3xl font-medium font-montserrat text-[#171717]">
                            HiTalent
                        </h3>
                        <p className="text-base font-normal font-montserrat leading-relaxed text-[#171717] opacity-90">
                            Solusi cerdas untuk mengelola sumber daya manusia secara efisien â€” mulai dari absensi hingga penggajian. Didukung oleh teknologi berbasis cloud yang menyederhanakan pengelolaan sekaligus meningkatkan produktivitas dan efisiensi perusahaan Anda.
                        </p>
                        <Link href="/products/hitalent" className="px-6 md:px-8 py-3 md:py-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300 inline-block">
                            <span className="text-white text-sm md:text-base font-medium font-montserrat">Lihat Detail</span>
                        </Link>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 flex justify-center lg:justify-end w-full">
                        <img
                            className="w-full max-w-[696px] h-auto rounded-2xl shadow-2xl"
                            src="/assets/images/Product.png"
                            alt="HiTalent Dashboard"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

