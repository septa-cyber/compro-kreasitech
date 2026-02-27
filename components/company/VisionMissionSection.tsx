import React from "react";
import Image from "next/image";

export default function VisionMissionSection() {
    return (
        <>
            {/* Desktop/Laptop: Combined Section */}
            <section className="relative hidden lg:block py-24 bg-[#F4F4F7] overflow-hidden">
                {/* Background Ornaments (Hidden on Mobile & Tablet) */}
                <div className="absolute right-47 bottom-12 h-full hidden lg:flex items-center justify-end pointer-events-none">
                    <Image
                        src="/assets/images/VisiMisi/Vector-1.svg"
                        alt="Visi Background Ornament"
                        width={198}
                        height={400}
                        className="object-contain w-auto h-[20%] lg:h-[25%] xl:h-[35%]"
                    />
                </div>
                <div className="absolute right-4 top-0 h-full hidden lg:flex items-center justify-end pointer-events-none">
                    <Image
                        src="/assets/images/VisiMisi/Vector.svg"
                        alt="Misi Background Ornament"
                        width={230}
                        height={453}
                        className="object-contain w-auto h-[70%] lg:h-[85%] xl:h-[95%]"
                    />
                </div>
                <div className="absolute left-4 top-0 h-full hidden lg:flex items-center justify-end pointer-events-none">
                    <Image
                        src="/assets/images/VisiMisi/smart-people.svg"
                        alt="Misi Background Ornament"
                        width={230}
                        height={453}
                        className="object-contain w-auto h-[70%] lg:h-[85%] xl:h-[95%]"
                    />
                </div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
                    <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                        {/* Visi */}
                        <div className="flex flex-col items-center text-center">
                            <h2 className="font-h2 text-gray-900 mb-6">
                                Visi
                            </h2>
                            <hr className="w-full max-w-[320px] border-t-[0.5px] border-gray-200 mb-6" />
                            <p className="font-body-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
                                Menjadi ekosistem digital terdepan yang menghubungkan edukasi, talenta, dan industri melalui teknologi.
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="flex flex-col items-center text-center">
                            <h2 className="font-h2 text-gray-900 mb-6">
                                Misi
                            </h2>
                            <hr className="w-full max-w-[400px] border-t-[0.5px] border-gray-200 mb-6" />
                            <p className="font-body-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
                                Mengembangkan kompetensi, membuka akses karir, dan menghadirkan solusi teknologi yang membuka kesempatan setara bagi semua, termasuk talenta difabel untuk berkarya dan berkontribusi di industri digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile/Tablet: Separate Sections (Without Background SVGs) */}
            <div className="lg:hidden">
                {/* Visi Section */}
                <section className="py-24 bg-[#F4F4F7]">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="font-h2 text-gray-900 mb-6">
                            Visi
                        </h2>
                        <hr className="w-full max-w-[320px] border-t-[0.5px] border-gray-200 mb-6 mx-auto" />
                        <p className="font-body-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
                            Menjadi ekosistem digital terdepan yang menghubungkan edukasi, talenta, dan industri melalui teknologi.
                        </p>
                    </div>
                </section>

                {/* Misi Section */}
                <section className="py-24 bg-violet-800 text-white" data-theme="dark">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="font-h2 text-white mb-6">
                            Misi
                        </h2>
                        <hr className="w-full max-w-[400px] border-t-[0.5px] border-white/20 mb-6 mx-auto" />
                        <p className="font-body-lg text-purple-100 max-w-sm mx-auto leading-relaxed">
                            Mengembangkan kompetensi, membuka akses karir, dan menghadirkan solusi teknologi yang membuka kesempatan setara bagi semua, termasuk talenta difabel untuk berkarya dan berkontribusi di industri digital.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
