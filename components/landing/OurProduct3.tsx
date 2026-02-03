import React from 'react';

export default function OurProduct() {
    return (
        <section className="py-24 bg-violet-800 text-white overflow-hidden">
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
                        <div className="text-xs font-normal font-montserrat text-white opacity-90">
                            13 Nov 2025
                        </div>
                        <h3 className="text-3xl font-medium font-montserrat text-white">
                            HiTalent
                        </h3>
                        <p className="text-base font-normal font-montserrat leading-relaxed text-white opacity-90">
                            Solusi cerdas untuk mengelola sumber daya manusia secara efisien — mulai dari absensi hingga penggajian. Didukung oleh teknologi berbasis cloud yang menyederhanakan pengelolaan sekaligus meningkatkan produktivitas dan efisiensi perusahaan Anda.
                        </p>
                        <button className="px-8 py-4 bg-white rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors">
                            <span className="text-violet-800 text-base font-medium font-montserrat">Lihat Detail</span>
                        </button>
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
