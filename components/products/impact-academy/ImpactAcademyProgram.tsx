"use client";
import React from "react";
import Image from 'next/image';

const programTypes = [
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Microphone/3D/microphone_3d.png",
        title: "Impact Talks",
        description: "Sesi inspiratif berupa career talk dan tech sharing dari praktisi industri untuk wawasan karir dan teknologi terkini."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Wrench/3D/wrench_3d.png",
        title: "Impact Skill Series",
        description: "Program workshop intensif untuk mengasah skill teknis dan soft skill yang relevan dengan kebutuhan industri."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Office%20building/3D/office_building_3d.png",
        title: "Corporate Training",
        description: "Pelatihan kustom untuk perusahaan dalam meningkatkan kompetensi tim dengan kurikulum yang disesuaikan."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Rocket/3D/rocket_3d.png",
        title: "Impact Bootcamp",
        description: "Program pelatihan intensif jangka pendek untuk menguasai skill spesifik dengan pendekatan praktis dan project-based."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Graduation%20cap/3D/graduation_cap_3d.png",
        title: "Kreasitech Internship",
        description: "Program magang yang memberikan pengalaman kerja nyata di industri teknologi dengan bimbingan mentor profesional."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Briefcase/3D/briefcase_3d.png",
        title: "Impact Career Connect",
        description: "Layanan penyaluran talenta yang menghubungkan lulusan program dengan peluang karir di perusahaan mitra."
    }
];

export default function ImpactAcademyProgram() {
    return (
        <section className="py-24 bg-violet-800 text-white overflow-hidden" data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-medium font-montserrat mb-6">
                        Bentuk Kegiatan Impact Academy
                    </h2>
                    <p className="text-sm md:text-base font-normal font-montserrat text-white/90 leading-relaxed">
                        Beragam program yang dirancang untuk mengembangkan skill, memperluas wawasan, dan mempercepat pertumbuhan karir Anda di industri teknologi.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto border-t border-l border-white/20">
                    {programTypes.map((program, index) => {
                        return (
                            <div
                                key={index}
                                className="p-10 flex flex-col justify-start items-center gap-6 transition-all duration-300 hover:bg-white group cursor-default border-r border-b border-white/20"
                            >
                                <div className="w-14 h-14 flex-shrink-0 relative flex items-center justify-center rounded-2xl bg-white/10 group-hover:bg-violet-50 transition-all duration-300 group-hover:scale-110 shadow-sm">
                                    <Image
                                        src={program.icon}
                                        alt={program.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain transition-all duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-medium font-montserrat text-center group-hover:text-gray-900 transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                                    {program.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
