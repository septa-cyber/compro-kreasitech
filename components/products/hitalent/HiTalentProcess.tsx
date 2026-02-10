"use client";
import React from 'react';

// Renamed to fix Turbopack HMR cache issue
export default function HiTalentProcess() {
    return (
        <section id="features" className="py-24 bg-violet-800 text-white overflow-hidden " data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl md:text-4xl font-medium font-montserrat mb-6">
                        Sesuaikan energi Anda dengan alur kerja kami
                    </h2>
                    <p className="text-sm md:text-base font-normal font-montserrat text-white/90 leading-relaxed">
                        Kami memastikan setiap proyek dieksekusi secara efisien dan disesuaikan dengan kebutuhan bisnis unik Anda, menyediakan solusi inovatif yang mendorong kesuksesan.
                    </p>
                </div>

                <div className="w-full flex flex-wrap justify-center items-center content-center border border-white/20 divide-y divide-white/20 md:divide-y-0">
                    {/* Row 1 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            1
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Discovery & Requirements
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Dokumen penting yang menguraikan batasan dan tujuan proyek.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            2
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Wireframe & Desain UI/UX
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Menjelaskan metode langkah demi langkah untuk mengembangkan atau meningkatkan produk saat ini.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            3
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Pengembangan
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Menguraikan prosedur terperinci untuk berinovasi atau meningkatkan layanan yang ada.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            4
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            SIT
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Mewakili pencapaian yang diraih melalui komitmen, keterampilan, dan keberanian.
                        </p>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            5
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            UAT
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Mewujudkan kisah sukses yang dibangun atas ketekunan, keahlian, dan keberanian.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center text-xl font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            6
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Deployment
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Memungkinkan perbaikan berkelanjutan melalui tinjauan konstan dan perubahan berulang.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

