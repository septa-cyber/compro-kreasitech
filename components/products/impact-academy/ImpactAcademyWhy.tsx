import React from 'react';
import { LuUsers, LuBriefcase, LuTrendingUp, LuHandshake } from 'react-icons/lu';

const focusPrograms = [
    {
        icon: LuUsers,
        title: "Pengembangan Skill Digital untuk Talent Difabel",
        description: "Program pelatihan digital yang dirancang khusus untuk mengembangkan kompetensi teknologi bagi individu berkebutuhan khusus dengan metode pembelajaran inklusif."
    },
    {
        icon: LuBriefcase,
        title: "Pelatihan Kesiapan Kerja & Soft Skill",
        description: "Persiapan komprehensif untuk memasuki dunia kerja dengan penguatan soft skills seperti komunikasi, teamwork, dan problem solving yang dibutuhkan industri."
    },
    {
        icon: LuTrendingUp,
        title: "Program Magang dan Penempatan Kerja",
        description: "Kesempatan magang yang terstruktur dengan bimbingan mentor profesional, dilanjutkan dengan dukungan penempatan kerja di perusahaan mitra."
    },
    {
        icon: LuHandshake,
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
                            const IconComponent = program.icon;
                            return (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group"
                                    style={{ height: '300px' }}
                                >
                                    <div className="w-14 h-14 flex-shrink-0 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                        <IconComponent className="text-3xl flex-shrink-0 text-violet-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
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
