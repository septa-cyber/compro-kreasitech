import React from 'react';

export default function WhyUs() {
    const items = [
        {
            title: "Creative Partnership",
            description: "At Kreasitech, we believe that the best innovation comes from strong collaboration. Creative Partnership is more than just a business relationship; it's our commitment to working as strategic and flexible partners in creating relevant and impactful digital solutions for your business."
        },
        {
            title: "Cost Effective & High ROI",
            description: "The technology we develop is not only effective but also provides optimal investment value, increasing operational efficiency and your business profits."
        },
        {
            title: "End to End IT Support",
            description: "From consultation to implementation and maintenance, we are here to ensure your technology solutions always run optimally."
        },
        {
            title: "Experience Professionals",
            description: "We guarantee your project is handled by our experienced team of professionals who understand modern business challenges and can deliver solutions that are precise, efficient, and sustainable."
        },
        {
            title: "Security & Compliance",
            description: "We prioritize data security and compliance with industry regulations, ensuring your system remains secure and reliable."
        },
        {
            title: "Tailor Solutions",
            description: "The best technology is that which suits your business needs. At Kreasitech, we present Tailored Solutions—solutions specifically designed to support the growth and scalability of your business."
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
                                Why Kreasitech is the right choice for you?
                            </h2>
                            <p className="text-sm sm:text-base font-normal font-montserrat text-text-light-muted leading-relaxed max-w-lg">
                                We provide secure, scalable, and innovative IT solutions tailored to your needs. With expert-driven execution, we ensure efficiency and reliability in every project.
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
