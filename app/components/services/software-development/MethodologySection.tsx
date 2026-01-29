import React from "react";
import { MdCheckCircle, MdLightbulb } from "react-icons/md";

export default function MethodologySection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-24">

                {/* Header */}
                <div className="max-w-[784px] flex flex-col items-center gap-8 text-center">
                    <h2 className="text-4xl font-medium font-montserrat text-gray-900">
                        Metode Pengembangan
                    </h2>
                    <p className="text-base text-gray-500 font-montserrat">
                        Kami menyesuaikan metode pengembangan dengan kebutuhan bisnis Anda
                    </p>
                </div>

                {/* Cards Container */}
                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">

                    {/* Agile Development Card */}
                    <div className="group flex-1 p-8 bg-white hover:bg-violet-800 outline outline-[0.50px] outline-offset-[-0.25px] outline-gray-200 hover:outline-violet-700 flex flex-col justify-start items-center gap-6 rounded-none min-h-[480px] transition-all duration-300">
                        <h3 className="self-stretch text-gray-900 group-hover:text-white text-2xl font-medium font-montserrat transition-colors duration-300">
                            Agile Development
                        </h3>
                        <p className="self-stretch text-gray-500 group-hover:text-white/90 text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Kami menggunakan Agile, khususnya Scrum, untuk project IT yang butuh eksekusi cepat dan adaptasi tinggi. Pendekatan ini menjamin proses berkelanjutan dan penyampaian target yang efisien.
                        </p>

                        <div className="self-stretch flex-1 flex flex-col justify-between">
                            <div className="flex flex-col gap-4 mt-2">
                                {["Proses pengembangan berkelanjutan", "Adaptasi cepat terhadap perubahan", "Penyampaian value sejak tahap awal"].map((item, i) => (
                                    <div key={i} className="inline-flex items-center gap-4">
                                        <div className="relative w-6 h-6 flex items-center justify-center">
                                            <MdCheckCircle className="text-violet-600 group-hover:text-violet-300 text-xl transition-colors duration-300" />
                                        </div>
                                        <span className="flex-1 text-gray-900 group-hover:text-white text-sm font-normal font-montserrat transition-colors duration-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-violet-50 group-hover:bg-violet-700 rounded-lg flex flex-col gap-4 transition-colors duration-300">
                                <div className="inline-flex items-center gap-4">
                                    <MdLightbulb className="text-violet-600 group-hover:text-violet-300 text-xl transition-colors duration-300" />
                                    <span className="text-gray-900 group-hover:text-white text-lg font-medium font-montserrat transition-colors duration-300">Cocok Untuk:</span>
                                </div>
                                <p className="text-gray-600 group-hover:text-white/90 text-sm font-normal font-montserrat transition-colors duration-300">
                                    Pengembangan aplikasi tahap awal yang dinamis serta dapat menjawab terhadap kebutuhan pasar dengan cepat melalui fitur-fitur MVP.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Waterfall Development Card */}
                    <div className="group flex-1 p-8 bg-white hover:bg-violet-800 outline outline-[0.50px] outline-offset-[-0.25px] outline-gray-200 hover:outline-violet-700 flex flex-col justify-start items-center gap-6 rounded-none min-h-[480px] transition-all duration-300">
                        <h3 className="self-stretch text-gray-900 group-hover:text-white text-2xl font-medium font-montserrat transition-colors duration-300">
                            Waterfall Development
                        </h3>
                        <p className="self-stretch text-gray-500 group-hover:text-white/90 text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Aplikasi dengan kebutuhan yang telah terdefinisi dengan jelas, timeline yang terencana, detail fitur dan sudah memiliki user yang akan menggunakan aplikasi tersebut dalam jangka panjang.
                        </p>

                        <div className="self-stretch flex-1 flex flex-col justify-between">
                            <div className="flex flex-col gap-4 mt-2">
                                {["Milestone yang jelas dan terukur", "Estimasi biaya yang akurat", "Development yang terencana dengan baik"].map((item, i) => (
                                    <div key={i} className="inline-flex items-center gap-4">
                                        <div className="relative w-6 h-6 flex items-center justify-center">
                                            <MdCheckCircle className="text-violet-600 group-hover:text-violet-300 text-xl transition-colors duration-300" />
                                        </div>
                                        <span className="flex-1 text-gray-900 group-hover:text-white text-sm font-normal font-montserrat transition-colors duration-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-violet-50 group-hover:bg-violet-700 rounded-lg flex flex-col gap-4 transition-colors duration-300">
                                <div className="inline-flex items-center gap-4">
                                    <MdLightbulb className="text-violet-600 group-hover:text-violet-300 text-xl transition-colors duration-300" />
                                    <span className="text-gray-900 group-hover:text-white text-lg font-medium font-montserrat transition-colors duration-300">Cocok Untuk:</span>
                                </div>
                                <p className="text-gray-600 group-hover:text-white/90 text-sm font-normal font-montserrat transition-colors duration-300">
                                    Pengembangan aplikasi untuk penyempurnaan fiturnya yang menyesuaikan kebutuhan user dengan milestone yang jelas dan development yang terencana.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
