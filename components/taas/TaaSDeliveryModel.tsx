import React from "react";
import { LuUsers, LuTarget, LuZap } from "react-icons/lu";

const deliveryModels = [
    {
        icon: LuUsers,
        title: "Dedicated Team",
        description: "Menyediakan tim developer yang bekerja dedicated untuk project klien dalam jangka waktu tertentu."
    },
    {
        icon: LuTarget,
        title: "Project Based",
        description: "Tenaga kerja atau tim disediakan untuk menyelesaikan proyek tertentu dengan scope, timeline, dan output yang sudah jelas."
    },
    {
        icon: LuZap,
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
                        <h2 className="text-3xl md:text-4xl font-medium font-montserrat text-text-light">
                            Talent Delivery Model
                        </h2>
                        <p className="max-w-[672px] text-base font-normal font-montserrat text-text-light-muted">
                            Skema penyediaan talenta yang fleksibel melalui tiga pendekatan yaitu Dedicated Team, Project-Based, dan On-Demand yang dirancang untuk menyesuaikan kebutuhan bisnis Anda secara efisien, skalabel, dan tepat sasaran.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        {deliveryModels.map((model, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-full p-8 flex flex-col justify-start items-center gap-6 ${index === 1 ? 'md:border-l-[0.5px] md:border-r-[0.5px] border-gray-200' : ''
                                        }`}
                                >
                                    <h3 className="self-stretch text-center text-text-light text-2xl font-medium font-montserrat">
                                        {model.title}
                                    </h3>
                                    <p className="self-stretch text-center text-text-light-muted text-sm font-normal font-montserrat leading-relaxed">
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
