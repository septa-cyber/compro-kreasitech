import React from 'react';

export default function WhyUs() {
    const items = [
        {
            title: "Partner end-to-end",
            description: "Dari ide, pengembangan, sampai maintenance."
        },
        {
            title: "Tim muda & adaptif",
            description: "Kreatif, cepat belajar, dan berorientasi solusi."
        },
        {
            title: "Satu ekosistem layanan",
            description: "Software, marketing, talent & academy."
        },
        {
            title: "Flexible & scalable",
            description: "Menyesuaikan kebutuhan dan kapasitas klien."
        },
        {
            title: "Impact first",
            description: "Setiap layanan fokus memberikan hasil nyata."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
                            <h2 className="font-h2 mb-10">
                                Mengapa Kreasitech pilihan yang tepat untuk Anda?
                            </h2>
                            <p className="space-y-6 font-body leading-relaxed">
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
                                <h3 className="font-h4 text-text-light">
                                    {item.title}
                                </h3>
                                <p className="font-body-sm text-text-light-muted leading-relaxed">
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

