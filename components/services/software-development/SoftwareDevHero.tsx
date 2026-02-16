import React from "react";
import Link from "next/link";

export default function SoftwareDevHero() {
    return (
        <section className="relative pt-10 pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="font-h1 max-w-6xl mx-auto mb-8">
                    Mewujudkan Ide Menjadi <span className="font-semibold text-violet-600">Solusi Digital</span> Bernilai Bisnis
                </h1>
                <p className="max-w-3xl mx-auto font-body-lg text-gray-500 mb-8">
                    Kreasitech menawarkan berbagai layanan terbaik yang diformulasikan untuk menjawab kebutuhan Anda akan teknologi dan digitalisasi produk. Maka, jangan ragu untuk menghubungi kami dan konsultasikan produk Anda.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="font-btn text-gray-100">Diskusi ke Kami</div>
                        </Link>
                        <Link href="#solutions" className="w-max flex items-center justify-center gap-2 px-6 py-4 font-btn group">
                            Pelajari Layanan
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6 animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

