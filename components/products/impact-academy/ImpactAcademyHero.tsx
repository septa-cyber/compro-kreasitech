import React from "react";
import Link from "next/link";

export default function ImpactAcademyHero() {
    return (
        <section className="relative pt-10 pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-block px-4 py-2 bg-violet-500 rounded mb-6 shadow-sm">
                    <span className="font-body-sm text-white">*Diperbarui: 30 Juni 2025</span>
                </div>

                <h1 className="font-h1 mx-auto mb-8 text-center">
                    Kreasi <span className="font-semibold text-violet-600">Space</span>
                </h1>

                <p className="font-body-lg mx-auto mb-4">
                    Impact Academy adalah inisiatif sosial dari Kreasitech yang fokus pada pengembangan dan pemberdayaan talenta disabilitas. Tujuannya adalah memberikan keterampilan digital & teknologi yang relevan agar mereka memiliki kesempatan karir yang setara.
                </p>

                <p className="font-body-lg mx-auto mb-8">
                    Program ini dirancang inklusif dengan metode pembelajaran adaptif, berorientasi pada kesiapan kerja talenta disabilitas.
                </p>

                <div className="flex justify-center items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="font-btn text-gray-100">Coba Gratis</div>
                        </Link>
                        <Link href="#focus" className="w-max flex items-center justify-center gap-2 px-6 py-4 font-btn text-text-light hover:text-violet-600 transition-colors group">
                            Pelajari Lebih Lanjut
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6 animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

