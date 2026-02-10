import React from 'react';
import Link from 'next/link';

interface LandingAboutProps {
    className?: string;
}

export default function LandingAbout({ className = "bg-white" }: LandingAboutProps) {
    return (
        <section id="about" className={`py-20 lg:py-28 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Image */}
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                        <img
                            src="/assets/images/about-us.jpg"
                            alt="Team Kreasitech working together"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col gap-6 text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium font-montserrat text-text-light mb-8">
                            Tentang Kami
                        </h2>

                        <div className="text-sm sm:text-base font-normal font-montserrat text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Kreasitech adalah perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital. Berangkat dari semangat <span className="text-violet-600 font-medium">"Where Talent Meets Technology"</span> kami mencetak, mengembangkan, dan menyalurkan talenta siap kerja melalui layanan pelatihan, outsourcing, dan pengembangan produk digital.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link href="/company" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                                <div className="text-gray-100 text-base font-medium font-montserrat">Selengkapnya</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

