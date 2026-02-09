import React from 'react';
import Image from 'next/image';

const engagementModels = [
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Magnifying%20glass%20tilted%20left/3D/magnifying_glass_tilted_left_3d.png",
        title: "Head Hunting",
        description: "Model kerjasama ini ditujukan untuk membantu perusahaan mendapatkan talenta berpengalaman pada level menengah hingga senior yang siap memberikan dampak strategis. Melalui proses rekrutmen yang terukur program ini memastikan kandidat memiliki komunikasi, skill teknis, dan pengalaman yang relevan untuk mendukung pertumbuhan perusahaan. Talent akan langsung dikontrak oleh perusahaan dan tidak under Kreasitech."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Busts%20in%20silhouette/3D/busts_in_silhouette_3d.png",
        title: "Staffing",
        description: "Penyediaan tenaga kerja berpengalaman untuk ditempatkan pada product atau project klien dalam jangka waktu tertentu. Talent akan bekerja secara dedicated di perusahaan klien selama masa kontrak kerja berjalan. Talent masih under Kreasitech sehingga secara administrasi dan management masih menjadi tanggung jawab dari Kreasitech."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Graduation%20cap/3D/graduation_cap_3d.png",
        title: "Internship Program",
        description: "Program magang untuk mahasiswa semester atau fresh graduate yang berfokus pada pengembangan talenta muda melalui keterlibatan langsung dalam proyek perusahaan. Selain menghubungkan dengan perusahaan-perusahaan, program ini juga meningkatkan skill talent dalam berkarir."
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Sparkling%20heart/3D/sparkling_heart_3d.png",
        title: "Inclusive Talent",
        description: "Program inklusi bertujuan membuka akses kerja yang setara bagi talenta difabel atau penyandang kebutuhan khusus yang memiliki kompetensi dan kesiapan kerja. Melalui proses seleksi, pendampingan, dan penyesuaian lingkungan kerja yang inklusif, program ini membantu perusahaan membangun tim yang beragam, produktif, dan ramah terhadap difabel."
    }
];

export default function TaaSEngagementModel() {
    return (
        <section id="engagement" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-24">
                    <div className="w-full max-w-[784px] flex flex-col items-center gap-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-medium font-montserrat text-text-light">
                            Talent Engagement Model
                        </h2>
                    </div>

                    <div className="w-full outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-stretch flex-wrap content-center">
                        {engagementModels.map((model, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group"
                                >
                                    <div className="w-14 h-14 flex-shrink-0 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                        <Image
                                            src={model.icon}
                                            alt={model.title}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                                        {model.title}
                                    </h3>
                                    <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                                        {model.description}
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
