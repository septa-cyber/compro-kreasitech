import React from 'react';
import Image from 'next/image';

const focusPrograms = [
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Mechanical%20arm/3D/mechanical_arm_3d.png",
        title: "Pengembangan Skill Digital untuk Talent Difabel",
        description: "Program pelatihan digital yang dirancang khusus untuk mengembangkan kompetensi teknologi bagi individu berkebutuhan khusus dengan metode pembelajaran inklusif."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Briefcase/3D/briefcase_3d.png",
        title: "Pelatihan Kesiapan Kerja & Soft Skill",
        description: "Persiapan komprehensif untuk memasuki dunia kerja dengan penguatan soft skills seperti komunikasi, teamwork, dan problem solving yang dibutuhkan industri."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Chart%20increasing/3D/chart_increasing_3d.png",
        title: "Program Magang dan Penempatan Kerja",
        description: "Kesempatan magang yang terstruktur dengan bimbingan mentor profesional, dilanjutkan dengan dukungan penempatan kerja di perusahaan mitra."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Handshake/3D/handshake_3d.png",
        title: "Kolaborasi CSR & ESG",
        description: "Kemitraan strategis dengan perusahaan melalui program Corporate Social Responsibility dan Environmental, Social, Governance untuk menciptakan dampak sosial berkelanjutan."
    }
];

export default function ImpactAcademyWhy() {
    return (
        <section id="focus" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-24">
                    <div className="w-full max-w-[784px] flex flex-col items-center gap-8 text-center">
                        <h2 className="text-4xl font-medium font-montserrat text-text-light">
                            Fokus Program Impact Academy
                        </h2>
                        <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted">
                            Kami berkomitmen untuk menciptakan ekosistem pembelajaran inklusif yang memberdayakan talenta digital dan menjembatani kesenjangan ketenagakerjaan.
                        </p>
                    </div>

                    <div className="w-full outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">
                        {focusPrograms.map((program, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group"
                                    style={{ height: '300px' }}
                                >
                                    <div className="w-14 h-14 flex-shrink-0 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                        <Image
                                            src={program.icon}
                                            alt={program.title}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <h3 className="self-stretch text-text-light group-hover:text-white text-xl font-medium font-montserrat leading-tight transition-colors duration-300">
                                        {program.title}
                                    </h3>
                                    <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                                        {program.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

