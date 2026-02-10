import React from 'react';

export default function HiringProcess() {
    return (
        <section className="py-24 bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 lg:gap-24">
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="text-3xl lg:text-4xl font-medium font-montserrat text-text-light leading-tight">
                        Temukan Kehebatan <br className="hidden md:block" /> Proses Perekrutan KreasiTech
                    </h2>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8 lg:gap-0">
                    {/* 1. Penyaringan Kandidat */}
                    <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
                        <h3 className="text-xl font-medium font-montserrat text-text-light text-center">
                            1. Penyaringan Kandidat
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                            Menerapkan strategi untuk mengevaluasi resume secara efektif dan menyaring kandidat berdasarkan kualifikasi mereka.
                        </p>
                    </div>

                    {/* 2. Peningkatan Proses Wawancara */}
                    <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6 lg:border-l lg:border-r border-gray-300">
                        <h3 className="text-xl font-medium font-montserrat text-text-light text-center">
                            2. Peningkatan Proses Wawancara
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                            Menyempurnakan struktur wawancara untuk menilai keterampilan kandidat dan kesesuaian budaya dengan lebih baik.
                        </p>
                    </div>

                    {/* 3. Pengalaman Onboarding */}
                    <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
                        <h3 className="text-xl font-medium font-montserrat text-text-light text-center">
                            3. Pengalaman Onboarding
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                            Mengembangkan program onboarding yang komprehensif untuk membantu karyawan baru berintegrasi dengan lancar ke dalam tim.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

