import React from 'react';

interface LandingAboutProps {
    className?: string;
}

export default function LandingAbout({ className = "bg-white" }: LandingAboutProps) {
    return (
        <section id="about" className={`py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-montserrat text-text-light mb-8">
                        Tentang Kami
                    </h2>
                    <div className="text-base sm:text-lg text-gray-600 font-montserrat leading-relaxed space-y-4">
                        <p>
                            Kreasitech adalah perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital. Berangkat dari semangat <span className="text-violet-600 font-medium">"Where Talent Meets Technology"</span> kami mencetak, mengembangkan, dan menyalurkan talenta siap kerja melalui layanan pelatihan, outsourcing, dan pengembangan produk digital.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
