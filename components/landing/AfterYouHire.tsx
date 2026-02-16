import React from 'react';

export default function AfterYouHire() {
    return (
        <section className="py-24 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="font-h2 text-text-light">
                        Setelah Anda Merekrut
                    </h2>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
                    {/* Left Box */}
                    <div className="w-full max-w-sm px-8 pt-8 pb-12 flex flex-col items-center gap-6">
                        <h3 className="font-h4 text-center text-text-light">
                            Onboarding, Pembayaran, Retensi
                        </h3>
                        <p className="font-body-sm text-center text-text-light-muted leading-relaxed">
                            Kami mendukung onboarding, penggajian, dan kepatuhan, sehingga karyawan baru Anda dapat berintegrasi dengan cepat dan bertahan dalam jangka panjang.
                        </p>
                    </div>

                    {/* Arrows */}
                    {/* Desktop Arrows (Right) */}
                    <div className="hidden lg:flex items-center gap-[-8px]">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="relative w-16 h-32 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-violet-300">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Arrow (Down) */}
                    <div className="flex lg:hidden items-center justify-center py-4">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-violet-300">
                                <path d="M5 8h14l-7 11z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="w-full max-w-sm px-8 pt-8 pb-12 flex flex-col items-center gap-6">
                        <h3 className="text-xl font-medium font-montserrat text-center text-text-light">
                            Dukungan Berkelanjutan & Ekspansi Tim
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-text-light-muted leading-relaxed">
                            Terus merekrut dengan kecepatan dan kualitas yang sama kapan pun Anda butuhkan. Rekruter Anda tetap siap mendukung perekrutan di masa depan, penggantian posisi, atau perluasan tim Anda.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

