import React from "react";

export default function VisionMissionSection() {
    return (
        <>
            {/* Desktop/Laptop: Combined Section */}
            <section className="hidden lg:block py-24 bg-[#F4F4F7]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-12">
                        {/* Visi */}
                        <div className="text-center">
                            <h2 className="text-xl md:text-4xl font-medium font-montserrat text-text-light mb-10">
                                Visi
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg font-body">
                                Menjadi ekosistem digital terdepan yang menghubungkan edukasi, talenta, dan industri melalui teknologi.
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="text-center">
                            <h2 className="text-xl md:text-4xl font-medium font-montserrat text-text-light mb-10">
                                Misi
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg font-body">
                                Mengembangkan kompetensi, membuka akses karir, dan menghadirkan solusi teknologi yang membuka kesempatan setara bagi semua, termasuk talenta difabel untuk berkarya dan berkontribusi di industri digital.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile/Tablet: Separate Sections */}
            <div className="lg:hidden">
                {/* Visi Section */}
                <section className="py-24 bg-[#F4F4F7]">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-xl md:text-4xl font-medium font-montserrat text-text-light mb-10">
                            Visi
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg font-body">
                            Menjadi ekosistem digital terdepan yang menghubungkan edukasi, talenta, dan industri melalui teknologi.
                        </p>
                    </div>
                </section>

                {/* Misi Section */}
                <section className="py-24 bg-violet-800 text-white" data-theme="dark">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-white mb-10">Misi</h2>
                        <p className="text-purple-100 leading-relaxed text-lg max-w-2xl mx-auto font-body">
                            Mengembangkan kompetensi, membuka akses karir, dan menghadirkan solusi teknologi yang membuka kesempatan setara bagi semua, termasuk talenta difabel untuk berkarya dan berkontribusi di industri digital.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
