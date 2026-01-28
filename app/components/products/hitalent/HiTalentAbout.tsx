"use client";
import React from 'react';

export default function HiTalentAbout() {
    return (
        <section className="py-24 bg-white text-[#171717] overflow-hidden">
            <div className="flex flex-col items-center gap-24 px-4 w-full">
                {/* Header */}
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="text-4xl font-medium font-montserrat">
                        Enhance Your HR Efficiency with HiTalent
                    </h2>
                </div>

                {/* Content */}
                <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
                    {/* Left Column: Text */}
                    <div className="flex-1 flex justify-center lg:justify-end w-full">
                        <img
                            className="w-full max-w-[696px] h-auto rounded-2xl shadow-2xl"
                            src="/assets/images/Product.png"
                            alt="HiTalent Dashboard"
                        />
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-[480px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-10">
                        <p className="text-base font-normal font-montserrat leading-relaxed text-[#171717] opacity-90">
                            <span className="font-semibold">HiTalent is a Human Resource Information System (HRIS)</span> designed to help companies manage their human resources more easily, quickly, and accurately. <br /> <br />With automated features <span className="font-semibold">for payroll, attendance, leave, and employee management,</span> HiTalent enhances HR operational efficiency while ensuring compliance with labor regulations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
