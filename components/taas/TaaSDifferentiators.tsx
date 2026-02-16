import React from 'react';

export default function TaaSDifferentiators() {
    return (
        <section className="py-24 bg-[#F4F4F7] text-gray-900 border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
                {/* Unified Structure: Flexbox for Sticky Positioning */}
                <div className="flex flex-col lg:flex-row items-start relative w-full gap-24">

                    {/* Left Column: Heading & Sticky Text (Visible and Sticky on lg+) */}
                    <div className="w-full lg:w-[35%] lg:sticky lg:top-32 h-fit self-start z-30 pr-8">
                        <div className="max-w-3xl lg:max-w-none text-center lg:text-left space-y-4 md:space-y-6">
                            <h2 className="font-h2">
                                Kunci Pembeda <br className="hidden lg:block" />
                                <span className="text-violet-600 font-semibold">Kreasitech</span>
                            </h2>
                            <p className="font-body-lg">
                                Mengapa memilih Kreasitech sebagai partner penyedia talent teknologi Anda?
                            </p>
                            <p className="font-body-lg">
                                Kami menawarkan lebih dari sekadar penempatan tenaga kerja—kami menghadirkan ekosistem pengembangan talenta digital yang berkelanjutan untuk mendukung pertumbuhan bisnis Anda.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Cards Matrix */}
                    <div className="w-full lg:w-[65%] flex flex-wrap border border-gray-200">
                        {/* Card 1 */}
                        <div className="w-full md:w-1/2 h-80 p-8 flex flex-col justify-center items-center gap-6 border-b md:border-r border-gray-200 transition-all duration-300 bg-violet-800 hover:bg-[#f4f4f7] group cursor-default relative">
                            <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 text-white group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                                1
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-white group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                                Fokus pada Talenta Teknologi
                            </h3>
                            <p className="font-body-sm text-center text-white/90 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                                Spesifik pada talent IT dan digital yang telah melalui proses kurasi teknis (developer, QA, UI/UX, data, dll.).
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full md:w-1/2 h-80 p-8 flex flex-col justify-center items-center gap-6 border-b border-gray-200 transition-all duration-300 hover:bg-violet-800 group cursor-default relative">
                            <div className="w-10 h-10 border border-violet-600 rounded flex items-center justify-center text-xl font-medium mb-0 text-violet-600 group-hover:border-white group-hover:text-white transition-all duration-300">
                                2
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-gray-900 group-hover:text-white transition-colors duration-300 relative z-10">
                                Peningkatan Skill melalui Academy
                            </h3>
                            <p className="font-body-sm text-center text-gray-600 group-hover:text-white/90 transition-colors duration-300 relative z-10">
                                Program training, bootcamp, dan webinar (After Office & Impact Academy) untuk talent yang lebih siap dan terstandarisasi.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full md:w-1/2 h-80 p-8 flex flex-col justify-center items-center gap-6 border-b md:border-r border-gray-200 transition-all duration-300 hover:bg-violet-800 group cursor-default relative">
                            <div className="w-10 h-10 border border-violet-600 rounded flex items-center justify-center text-xl font-medium mb-0 text-violet-600 group-hover:border-white group-hover:text-white transition-all duration-300">
                                3
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-gray-900 group-hover:text-white transition-colors duration-300 relative z-10">
                                Model Fleksibel
                            </h3>
                            <p className="font-body-sm text-center text-gray-600 group-hover:text-white/90 transition-colors duration-300 relative z-10">
                                Berbagai skema penempatan (onsite, remote, hybrid) sesuai kebutuhan klien tanpa mengurangi kualitas kinerja.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="w-full md:w-1/2 h-80 p-8 flex flex-col justify-center items-center gap-6 border-b border-gray-200 transition-all duration-300 bg-violet-800 hover:bg-[#f4f4f7] group cursor-default relative">
                            <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 text-white group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                                4
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-white group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                                Manajemen Terpusat
                            </h3>
                            <p className="font-body-sm text-center text-white/90 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                                Administrasi, performa, payroll, BPJS, dan evaluasi dikelola Kreasitech sehingga klien fokus pada bisnis inti.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="w-full md:w-1/2 h-80 p-8 flex flex-col justify-center items-center gap-6 border-b md:border-b-0 md:border-r border-gray-200 transition-all duration-300 bg-violet-800 hover:bg-[#f4f4f7] group cursor-default relative">
                            <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 text-white group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                                5
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-white group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                                Talent Development Berkelanjutan
                            </h3>
                            <p className="font-body-sm text-center text-white/90 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                                Pembinaan, evaluasi performa, dan peningkatan skill secara berkala untuk kualitas kerja yang stabil dan meningkat.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="w-full md:w-1/2 h-80 p-8 flex flex-col justify-center items-center gap-6 border-b md:border-b-0 border-gray-200 transition-all duration-300 hover:bg-violet-800 group cursor-default relative">
                            <div className="w-10 h-10 border border-violet-600 rounded flex items-center justify-center text-xl font-medium mb-0 text-violet-600 group-hover:border-white group-hover:text-white transition-all duration-300">
                                6
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-gray-900 group-hover:text-white transition-colors duration-300 relative z-10">
                                Biaya Efisien &amp; Terprediksi
                            </h3>
                            <p className="font-body-sm text-center text-gray-600 group-hover:text-white/90 transition-colors duration-300 relative z-10">
                                Skema biaya transparan dan terukur tanpa beban HR tambahan, rekrutmen ulang, atau biaya turnover.
                            </p>
                        </div>

                        {/* Card 7 */}
                        <div className="w-full h-80 p-8 flex flex-col justify-center items-center gap-6 transition-all duration-300 hover:bg-violet-800 group cursor-default relative">
                            <div className="w-10 h-10 border border-violet-600 rounded flex items-center justify-center text-xl font-medium mb-0 text-violet-600 group-hover:border-white group-hover:text-white transition-all duration-300">
                                7
                            </div>
                            <h3 className="font-h4 text-center flex items-center justify-center text-gray-900 group-hover:text-white transition-colors duration-300 relative z-10">
                                Berbasis Teknologi &amp; Data
                            </h3>
                            <p className="font-body-sm text-center text-gray-600 group-hover:text-white/90 transition-colors duration-300 relative z-10">
                                Proses seleksi, monitoring, dan evaluasi berbasis sistem untuk kualitas yang lebih konsisten.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
