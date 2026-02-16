import React from 'react';

export default function OurProduct() {
    return (
        <section className="py-24 bg-white text-[#171717] overflow-hidden">
            <div className="flex flex-col items-center gap-24 px-4 w-full">
                {/* Header */}
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="font-h2 mb-10">
                        Produk Kami
                    </h2>
                </div>

                {/* Content */}
                <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">
                    {/* Left Column: Text */}
                    <div className="w-full lg:w-[480px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h3 className="font-h1 text-[#171717]">
                            HiTalent
                        </h3>
                        <p className="font-body opacity-90">
                            Solusi cerdas untuk mengelola sumber daya manusia secara efisien &mdash; mulai dari absensi hingga penggajian. Didukung oleh teknologi berbasis cloud yang menyederhanakan pengelolaan sekaligus meningkatkan produktivitas dan efisiensi perusahaan Anda.
                        </p>
                        <button className="px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors">
                            <span className="font-btn text-white">Lihat Detail</span>
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

