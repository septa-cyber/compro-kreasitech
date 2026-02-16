"use client";
import React from 'react';

export default function HiTalentAbout() {
    return (
        <section id="about" className="py-24 bg-white text-[#171717] overflow-hidden">
            <div className="flex flex-col items-center gap-24 px-4 w-full">
                {/* Header */}
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="font-h2">
                        Tingkatkan Efisiensi HR Anda dengan HiTalent
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
                        <p className="font-body opacity-90">
                            <span className="font-semibold">HiTalent adalah Sistem Informasi Sumber Daya Manusia (HRIS)</span> yang dirancang untuk membantu perusahaan mengelola sumber daya manusia mereka dengan lebih mudah, cepat, dan akurat. <br /> <br />Dengan fitur otomatis <span className="font-semibold">untuk penggajian, absensi, cuti, dan manajemen karyawan,</span> HiTalent meningkatkan efisiensi operasional HR sambil memastikan kepatuhan terhadap peraturan ketenagakerjaan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

