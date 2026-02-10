"use client";

import { useState } from 'react';

export default function Testimonials() {
    const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

    const testimonialItems = [
        {
            id: 1,
            name: "Tina Rahayu",
            role: "Marketing Specialist",
            company: "PT Marketing Pro",
            avatar: "https://placehold.co/48x48/ec4899/1f2937",
            quote: "Strategi pemasaran Tina sangat kreatif, inovatif, dan berbasis data, secara konsisten menarik perhatian audiens dan menghasilkan hasil kampanye yang mengesankan yang tidak hanya melampaui target tetapi juga memaksimalkan ROI, menetapkan standar baru untuk efektivitas pemasaran."
        },
        {
            id: 2,
            name: "Joko Lestari",
            role: "QA Engineer",
            company: "PT Quality Assurance",
            avatar: "https://placehold.co/48x48/fbbf24/1f2937",
            quote: "Protokol pengujian ketat Joko menjamin kualitas dan keandalan produk kami yang unggul, secara proaktif mencegah masalah potensial dan memastikan pengalaman pengguna yang mulus sejak rilis awal, secara signifikan meningkatkan loyalitas pelanggan dan membina hubungan jangka panjang."
        },
        {
            id: 3,
            name: "Siti Aminah",
            role: "Product Manager",
            company: "PT Digital Solutions",
            avatar: "https://placehold.co/48x48/3b82f6/1f2937",
            quote: "Kepemimpinan Siti benar-benar transformatif, karena dia memperjuangkan kolaborasi, memicu inovasi, dan mendorong pertumbuhan substansial. Timnya secara konsisten melampaui tujuan ambisius, mencapai kesuksesan luar biasa dan menetapkan tolok ukur baru untuk keunggulan di seluruh organisasi."
        },
        {
            id: 4,
            name: "Budi Santoso",
            role: "UX Designer",
            company: "PT Creative Minds",
            avatar: "https://placehold.co/48x48/f97316/1f2937",
            quote: "Desain UX Budi dikenal luas karena antarmuka intuitif dan perjalanan pengguna yang sangat menyenangkan, secara signifikan meningkatkan kepuasan dan metrik keterlibatan pengguna. Desainnya yang penuh pertimbangan sangat meningkatkan pengalaman pengguna secara keseluruhan."
        },
        {
            id: 5,
            name: "Rina Dewi",
            role: "Data Analyst",
            company: "PT Analytics Hub",
            avatar: "https://placehold.co/48x48/ec4899/1f2937",
            quote: "Wawasan data mendalam Rina sangat penting dalam membentuk arah strategis dan inisiatif masa depan kami. Analisisnya yang detail memberikan kejelasan dan pandangan ke depan yang tak tertandingi, memungkinkan keputusan yang tepat yang mendorong pertumbuhan signifikan."
        },
        {
            id: 6,
            name: "Eko Setiawan",
            role: "DevOps Engineer",
            company: "PT Tech Infrastructure",
            avatar: "https://placehold.co/48x48/10b981/1f2937",
            quote: "Keahlian DevOps Eko memastikan sistem kami berjalan dengan lancar dan efisien. Solusi otomatisasinya telah secara dramatis mengurangi waktu deployment sambil meningkatkan keandalan, memungkinkan tim kami fokus pada inovasi daripada pemeliharaan."
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
                <h2 className="text-xl md:text-4xl font-medium font-montserrat text-text-light">
                    Lihat mengapa pelanggan <br /> senang menggunakan KreasiTech
                </h2>
            </div>

            <div className="relative marquee-container">
                <div
                    className="flex overflow-hidden"
                    onMouseEnter={() => setIsTestimonialHovered(true)}
                    onMouseLeave={() => setIsTestimonialHovered(false)}
                >
                    {/* Container 1 */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
                    >
                        {[...testimonialItems].map((item, index) => (
                            <div
                                key={`testimonial-1-${item.id}-${index}`}
                                className="group mx-2 md:mx-4 flex-shrink-0 w-72 md:w-96 h-auto md:h-[600px] p-4 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 flex flex-col justify-start items-start gap-3 md:gap-6 transition-all duration-300"
                            >
                                <div className="self-stretch inline-flex justify-start items-center gap-3 md:gap-6">
                                    <img className="w-12 h-12" src={item.avatar} alt={item.name} />
                                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                        <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-medium font-montserrat transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch justify-start text-text-light group-hover:text-white text-xs font-normal font-montserrat transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-light font-montserrat transition-colors duration-300">
                                    "{item.quote}"
                                </div>
                                <div className="self-stretch justify-start text-gray-400 group-hover:text-white text-xs font-normal font-montserrat mt-auto transition-colors duration-300">
                                    {item.company}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Container 2 (Duplicate) */}
                    <div
                        className="flex w-max flex-shrink-0 animate-scroll-left"
                        style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
                    >
                        {[...testimonialItems].map((item, index) => (
                            <div
                                key={`testimonial-2-${item.id}-${index}`}
                                className="group mx-2 md:mx-4 flex-shrink-0 w-72 md:w-96 h-auto md:h-[600px] p-4 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 flex flex-col justify-start items-start gap-3 md:gap-6 transition-all duration-300"
                            >
                                <div className="self-stretch inline-flex justify-start items-center gap-3 md:gap-6">
                                    <img className="w-12 h-12" src={item.avatar} alt={item.name} />
                                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                        <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-medium font-montserrat transition-colors duration-300">
                                            {item.name}
                                        </div>
                                        <div className="self-stretch justify-start text-text-light group-hover:text-white text-xs font-normal font-montserrat transition-colors duration-300">
                                            {item.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-light font-montserrat transition-colors duration-300">
                                    "{item.quote}"
                                </div>
                                <div className="self-stretch justify-start text-gray-400 group-hover:text-white text-xs font-normal font-montserrat mt-auto transition-colors duration-300">
                                    {item.company}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Progress Indicator */}
            <div className="flex items-center gap-4 mt-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-24 h-[5px] bg-text-light rounded-full"></div>
            </div>
        </section>
    );
}

