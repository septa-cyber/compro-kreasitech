"use client";

export default function HiTalentTools() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC] text-center">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Alat Inovatif untuk Era Digital
                </h2>
                <p className="text-gray-600 mb-8">
                    Temukan produk berkinerja tinggi yang dirancang untuk menyederhanakan operasi bisnis Anda.
                </p>
                <a
                    className="inline-block px-8 py-3 bg-violet-600 text-white font-semibold rounded shadow-lg shadow-violet-500/30 hover:bg-violet-700 transition-all"
                    href="/products"
                >
                    Lihat Produk Kami
                </a>
            </div>
        </section>
    );
}

