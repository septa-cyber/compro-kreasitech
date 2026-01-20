import React from 'react';

export default function OurProduct() {
    return (
        <section className="py-24 bg-white text-[#171717] overflow-hidden">
            <div className="flex flex-col items-center gap-24 px-4 w-full">
                {/* Header */}
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="text-4xl font-medium font-montserrat">
                        Our Product
                    </h2>
                </div>

                {/* Content */}
                <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">
                    {/* Left Column: Text */}
                    <div className="w-full lg:w-[480px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <div className="text-xs font-normal font-montserrat text-[#171717] opacity-90">
                            13 Nov 2025
                        </div>
                        <h3 className="text-3xl font-medium font-montserrat text-[#171717]">
                            HiTalent
                        </h3>
                        <p className="text-base font-normal font-montserrat leading-relaxed text-[#171717] opacity-90">
                            Smart solutions to manage human resources efficiently — from attendance to payroll. Powered by cloud-based technology that simplifies management while boosting your company's productivity and efficiency.
                        </p>
                        <button className="px-8 py-4 bg-violet-300 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-200 transition-colors">
                            <span className="text-violet-800 text-base font-medium font-montserrat">See Detail</span>
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 flex justify-center lg:justify-end w-full">
                        <img
                            className="w-full max-w-[696px] h-auto rounded-2xl shadow-2xl"
                            src="/assets/images/Product.png"
                            alt="HiTalent Dashboard"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
