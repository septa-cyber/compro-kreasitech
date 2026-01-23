import React from 'react';

export default function Services() {
    return (
        <section className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="text-4xl font-medium font-montserrat text-text-light">
                        Solusi Kami
                    </h2>
                    <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted">
                        Kami menyediakan solusi komprehensif, mulai dari perencanaan awal hingga implementasi akhir, memastikan proyek Anda ditangani dengan keahlian dan perhatian penuh.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">
                    {/* 1. Talent as a Service */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="far fa-star text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Specification & Wireframe
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Dokumen kebutuhan proyek digital—resource, teknologi, biaya, dan timeline—lengkap dengan wireframe yang jelas dan terukur.
                        </p>
                    </div>

                    {/* 2. Web & Mobile Apps Development */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fas fa-mobile-alt text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            UI/UX
                            Design
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Desain antarmuka dan pengalaman pengguna yang komunikatif, intuitif, dan mampu menyampaikan nilai bisnis Anda dengan efektif.
                        </p>
                    </div>

                    {/* 3. Product Digital Design & Tech Consultation */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="far fa-question-circle text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Website
                            Development
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Pembuatan website cepat, aman, relevan dengan kebutuhan bisnis, dan mudah digunakan oleh pengguna.
                        </p>
                    </div>

                    {/* 4. UI/UX Design */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fas fa-pencil-ruler text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Mobile App
                            Development
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Pengembangan aplikasi Android & iOS untuk meningkatkan pengalaman pelanggan dan memperluas jangkauan bisnis Anda.
                        </p>
                    </div>

                    {/* 5. QA Testing */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fas fa-tasks text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            MVP
                            Development
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Mewujudkan ide bisnis menjadi MVP siap uji di pasar, ideal untuk startup yang ingin validasi cepat.
                        </p>
                    </div>

                    {/* 6. WordPress */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fab fa-wordpress text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Custom Software Development
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Solusi software khusus yang mempercepat proses bisnis dan meningkatkan efisiensi operasional perusahaan Anda.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
