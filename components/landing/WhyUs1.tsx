import React from 'react';

export default function WhyUs() {
    const items = [
        {
            title: "Creative Partnership",
            description: "Di Kreasitech, kami percaya bahwa inovasi terbaik lahir dari kolaborasi yang kuat. Creative Partnership lebih dari sekadar hubungan bisnis; ini adalah komitmen kami untuk bekerja sebagai mitra strategis dan fleksibel dalam menciptakan solusi digital yang relevan dan berdampak bagi bisnis Anda."
        },
        {
            title: "Hemat Biaya & ROI Tinggi",
            description: "Teknologi yang kami kembangkan tidak hanya efektif tetapi juga memberikan nilai investasi yang optimal, meningkatkan efisiensi operasional dan keuntungan bisnis Anda."
        },
        {
            title: "Dukungan IT Menyeluruh",
            description: "Mulai dari konsultasi hingga implementasi dan pemeliharaan, kami hadir untuk memastikan solusi teknologi Anda selalu berjalan optimal."
        },
        {
            title: "Profesional Berpengalaman",
            description: "Kami menjamin proyek Anda ditangani oleh tim profesional berpengalaman kami yang memahami tantangan bisnis modern dan dapat memberikan solusi yang tepat, efisien, dan berkelanjutan."
        },
        {
            title: "Keamanan & Kepatuhan",
            description: "Kami memprioritaskan keamanan data dan kepatuhan terhadap peraturan industri, memastikan sistem Anda tetap aman dan andal."
        },
        {
            title: "Solusi yang Disesuaikan",
            description: "Teknologi terbaik adalah yang sesuai dengan kebutuhan bisnis Anda. Di Kreasitech, kami menghadirkan Solusi yang Disesuaikan—solusi yang dirancang khusus untuk mendukung pertumbuhan dan skalabilitas bisnis Anda."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col relative min-h-[600px] lg:min-h-0">

                        {/* Top Illustration - Flying Person */}
                        <div className="flex justify-center lg:justify-start lg:absolute lg:-top-20 lg:left-0 mb-8 lg:mb-0">
                            <img
                                src="/assets/images/outside-comfort-zone.svg"
                                alt="Creative Partnership"
                                className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                            />
                        </div>

                        {/* Middle Content */}
                        <div className="my-auto lg:mt-64 lg:mb-64 relative z-10 flex flex-col gap-6 lg:gap-8">
                            <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light leading-tight">
                                Mengapa Kreasitech pilihan yang tepat untuk Anda?
                            </h2>
                            <p className="text-sm sm:text-base font-normal font-montserrat text-text-light-muted leading-relaxed max-w-lg">
                                Kami menyediakan solusi IT yang aman, terukur, dan inovatif yang disesuaikan dengan kebutuhan Anda. Dengan eksekusi yang dipandu oleh para ahli, kami memastikan efisiensi dan keandalan dalam setiap proyek.
                            </p>
                        </div>

                        {/* Bottom Illustration - Car */}
                        <div className="hidden lg:flex justify-center lg:justify-start lg:absolute lg:-bottom-20 lg:left-0 mt-8 lg:mt-0">
                            <img
                                src="/assets/images/fast-food.svg"
                                alt="Productivity"
                                className="w-56 h-56 sm:w-80 sm:h-80 object-contain"
                            // Adding a slight transform to match the 'launching' vibe if needed, but keeping it simple first
                            />
                        </div>
                    </div>

                    {/* Right Column - Features List */}
                    <div className="w-full lg:w-[528px] flex flex-col gap-8 lg:pt-12">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4 sm:gap-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors p-4 rounded-lg">
                                <h3 className="text-xl sm:text-2xl font-medium font-montserrat text-text-light">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-normal font-montserrat text-text-light-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Bottom Illustration - Car */}
                    <div className="flex lg:hidden justify-center mt-8">
                        <img
                            src="/assets/images/fast-food.svg"
                            alt="Productivity"
                            className="w-56 h-56 object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
