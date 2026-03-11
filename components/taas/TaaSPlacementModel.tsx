import React from 'react';
import Image from 'next/image';

const placementModels = [
    {
        image: "/assets/images/meeting.jpg",
        title: "Onsite",
        description: "Model penempatan talent di mana tenaga kerja ditempatkan langsung di lokasi perusahaan klien untuk mendukung aktivitas operasional secara penuh. Model ini memungkinkan kolaborasi intensif, komunikasi cepat, serta integrasi langsung dengan tim internal perusahaan."
    },
    {
        image: "/assets/images/about-us.jpg",
        title: "Hybrid",
        description: "Model penempatan talent yang mengkombinasikan kerja onsite dan remote sesuai kebutuhan proyek dan kebijakan perusahaan. Pendekatan ini memberikan keseimbangan antara kolaborasi langsung dan fleksibilitas kerja, sehingga tetap optimal dalam produktivitas dan efisiensi."
    },
    {
        image: "/assets/images/meeting.jpg", // Kept meeting.jpg as placeholder for remote since no specific image is available
        title: "Remote",
        description: "Model penempatan talent yang memungkinkan tenaga kerja bekerja secara jarak jauh dengan dukungan sistem dan komunikasi digital. Cocok untuk perusahaan yang membutuhkan fleksibilitas tinggi, efisiensi biaya, serta akses ke talenta tanpa batasan geografis."
    }
];

export default function TaaSPlacementModel() {
    return (
        <section className="py-24 bg-[#6E44FF]" data-theme="dark">
            <div className="flex flex-col items-center gap-16 lg:gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="font-h2 !text-white">
                        Talent Placement Model
                    </h2>
                    <p className="max-w-[700px] font-body-lg !text-white/80">
                        Model penempatan talent yang dirancang untuk menyesuaikan kebutuhan perusahaan dengan kompetensi talenta, baik melalui penempatan onsite, remote, maupun hybrid, guna memastikan kinerja yang optimal dan efisien.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col divide-y divide-white/20">
                        {placementModels.map((model, index) => {
                            const isReverse = index % 2 === 1;
                            return (
                                <div
                                    key={index}
                                    className={`w-full py-12 lg:py-16 flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}
                                >
                                    {/* Image Container */}
                                    <div className="w-full md:w-1/2 relative h-[250px] sm:h-[300px] lg:h-[350px]">
                                        <Image
                                            src={model.image}
                                            alt={model.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Text Container */}
                                    <div className={`w-full md:w-1/2 flex flex-col justify-center ${isReverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center items-center`}>
                                        <h3 className="font-h3 !text-white mb-4 lg:mb-6">
                                            {model.title}
                                        </h3>
                                        <p className="font-body md:text-base text-white/80 max-w-md leading-relaxed">
                                            {model.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

