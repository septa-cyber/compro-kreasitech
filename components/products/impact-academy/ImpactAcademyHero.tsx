import React from "react";
import Link from "next/link";

export default function ImpactAcademyHero() {
    return (
        <section className="relative pt-10 pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-block px-4 py-2 bg-violet-500 rounded mb-6 shadow-sm">
                    <span className="text-white text-sm font-medium font-montserrat">*Diperbarui: 30 Juni 2025</span>
                </div>

                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Kreasi <span className="font-semibold text-violet-600">Space</span>
                </h1>

                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-4">
                    Impact Academy adalah inisiatif sosial dari Kreasitech yang fokus pada pengembangan dan pemberdayaan talenta disabilitas. Tujuannya adalah memberikan keterampilan digital & teknologi yang relevan agar mereka memiliki kesempatan karir yang setara.
                </p>

                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                    Program ini dirancang inklusif dengan metode pembelajaran adaptif, berorientasi pada kesiapan kerja talenta disabilitas.
                </p>

                <div className="flex justify-center items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="text-gray-100 text-base font-medium font-montserrat">Coba Gratis</div>
                        </Link>
                        <Link href="#focus" className="w-max flex items-center justify-center gap-2 px-6 py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                            Pelajari Lebih Lanjut
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6 animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

