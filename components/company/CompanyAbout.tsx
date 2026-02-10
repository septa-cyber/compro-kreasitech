import React from 'react';
import Link from 'next/link';
import { MdArrowForward, MdVerified } from 'react-icons/md';

export default function CompanyAbout() {
    return (
        <section className="py-20 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium font-montserrat text-text-light mb-8">
                                Tentang Kami
                            </h2>
                        </div>

                        <div className="text-sm sm:text-base font-normal font-montserrat text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Kreasitech adalah perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital. Berangkat dari semangat <span className="text-violet-600 font-medium">"Where Talent Meets Technology"</span> kami mencetak, mengembangkan, dan menyalurkan talenta siap kerja melalui layanan pelatihan, outsourcing, dan pengembangan produk digital.
                            </p>
                            <p>
                                Melalui ekosistem kami yang terintegrasi, mulai dari pengembangan skill (training & bootcamp), penyaluran tenaga kerja (hiring partner), hingga layanan pengembangan teknologi dan digital marketing, Kreasitech membantu setiap individu dan organisasi untuk bertumbuh bersama, menuju masa depan yang lebih cerdas dan terkoneksi.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-100 mt-2">
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900 font-montserrat">50+</h3>
                                <p className="text-sm text-violet-600 font-medium mt-1">Klien Puas</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900 font-montserrat">100+</h3>
                                <p className="text-sm text-violet-600 font-medium mt-1">Proyek Selesai</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-semibold text-gray-900 font-montserrat">4+</h3>
                                <p className="text-sm text-violet-600 font-medium mt-1">Tahun Pengalaman</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[400px] lg:h-[600px]">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full w-full">
                            <img
                                src="/assets/images/meeting.jpg"
                                alt="Professional Team Meeting"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient for better text readability if needed, or just pure image */}
                            <div className="absolute inset-0 bg-violet-900/10 mix-blend-multiply"></div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-5 sm:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center gap-5 w-[90%] max-w-sm animate-float border border-gray-50/50 backdrop-blur-sm">
                            <div className="bg-violet-50 p-3.5 rounded-full text-violet-600 flex-shrink-0">
                                <MdVerified className="text-2xl sm:text-3xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm sm:text-base font-montserrat">Certified Professional Training</h4>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1">Industry Standard Curriculum</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
