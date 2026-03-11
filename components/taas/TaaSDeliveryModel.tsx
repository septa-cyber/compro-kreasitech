import React from "react";
import Image from 'next/image';

const deliveryModels = [
    {
        icon: "/assets/images/Icons/friendship 1.svg",
        title: "Dedicated Team",
        description: "Menyediakan tim developer yang bekerja dedicated untuk project klien dalam jangka waktu tertentu."
    },
    {
        icon: "/assets/images/Icons/project 1.svg",
        title: "Project Based",
        description: "Tenaga kerja atau tim disediakan untuk menyelesaikan proyek tertentu dengan scope, timeline, dan output yang sudah jelas."
    },
    {
        icon: "/assets/images/Icons/demand 1.svg",
        title: "On-Demand",
        description: "Menyediakan talent developer yang cocok untuk kebutuhan bug-fixing atau pengembangan fitur baru dalam jangka pendek dengan target tertentu."
    }
];

export default function TaaSDeliveryModel() {
    return (
        <section id="delivery" className="py-24 bg-gray-100">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-16">
                    <div className="w-full max-w-[784px] flex flex-col items-center gap-8 text-center">
                        <h2 className="font-h2">
                            Talent Delivery Model
                        </h2>
                        <p className="max-w-[672px] font-body-lg text-text-light-muted">
                            Skema penyediaan talenta yang fleksibel melalui tiga pendekatan yaitu Dedicated Team, Project-Based, dan On-Demand yang dirancang untuk menyesuaikan kebutuhan bisnis Anda secara efisien, skalabel, dan tepat sasaran.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        {deliveryModels.map((model, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-full p-8 flex flex-col justify-start items-center gap-6 group hover:bg-violet-800 transition-colors duration-300 ${index === 1 ? 'md:border-l-[0.5px] md:border-r-[0.5px] border-gray-200' : ''
                                        }`}
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
                                    <h3 className="self-stretch text-center font-h4 group-hover:text-white transition-colors duration-300">
                                        {model.title}
                                    </h3>
                                    <p className="self-stretch text-center font-body-sm text-text-light-muted group-hover:text-white/90 transition-colors duration-300">
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

