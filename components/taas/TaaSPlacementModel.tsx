import React from 'react';
import Image from 'next/image';

const placementModels = [
    {
        icon: "/assets/images/3d-icons/office_building_3d.png",
        title: "Onsite",
        description: "Model penempatan talent di mana tenaga kerja ditempatkan langsung di lokasi perusahaan klien untuk mendukung aktivitas operasional secara penuh. Model ini memungkinkan kolaborasi intensif, komunikasi cepat, serta integrasi langsung dengan tim internal perusahaan."
    },
    {
        icon: "/assets/images/3d-icons/desktop_computer_3d.png",
        title: "Remote",
        description: "Model penempatan talent yang memungkinkan tenaga kerja bekerja secara jarak jauh dengan dukungan sistem dan komunikasi digital. Cocok untuk perusahaan yang membutuhkan fleksibilitas tinggi, efisiensi biaya, serta akses ke talenta tanpa batasan geografis."
    },
    {
        icon: "/assets/images/3d-icons/counterclockwise_arrows_button_3d.png",
        title: "Hybrid",
        description: "Model penempatan talent yang mengkombinasikan kerja onsite dan remote sesuai kebutuhan proyek dan kebijakan perusahaan. Pendekatan ini memberikan keseimbangan antara kolaborasi langsung dan fleksibilitas kerja, sehingga tetap optimal dalam produktivitas dan efisiensi."
    }
];

export default function TaaSPlacementModel() {
    return (
        <section className="py-24 bg-violet-800" data-theme="dark">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-medium font-montserrat text-white">
                        Talent Placement Model
                    </h2>
                    <p className="max-w-[700px] text-base font-normal font-montserrat text-white/80">
                        Model penempatan talent yang dirancang untuk menyesuaikan kebutuhan perusahaan dengan kompetensi talenta, baik melalui penempatan onsite, remote, maupun hybrid, guna memastikan kinerja yang optimal dan efisien.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-white/20 flex justify-between items-stretch flex-wrap content-center">
                    {placementModels.map((model, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 h-auto py-16 px-8 bg-violet-800 outline outline-[0.5px] outline-offset-[-0.25px] outline-white/20 inline-flex flex-col justify-center items-center text-center gap-6 hover:bg-white transition-colors duration-300 group cursor-pointer"
                            >
                                <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-white/10 group-hover:bg-violet-50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                    <Image
                                        src={model.icon}
                                        alt={model.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain transition-all duration-300"
                                    />
                                </div>
                                <h3 className="self-stretch text-white group-hover:text-gray-900 text-xl font-medium font-montserrat leading-tight transition-colors duration-300">
                                    {model.title}
                                </h3>
                                <p className="self-stretch text-white group-hover:text-gray-900 text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                                    {model.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

