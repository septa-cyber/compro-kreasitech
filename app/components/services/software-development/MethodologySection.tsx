import React from "react";
import { MdCheckCircleOutline, MdLightbulb } from "react-icons/md";

export default function MethodologySection() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-montserrat">Development Method</h2>
                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 font-inter">
                        Kami menyesuaikan metode pengembangan dengan kebutuhan bisnis Anda
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Agile Card */}
                    <div className="bg-[#4834d4] text-white p-8 rounded-lg shadow-xl relative overflow-hidden flex flex-col h-full ring-1 ring-white/10">
                        <div className="relative z-10 flex-grow">
                            <h3 className="text-xl font-bold mb-4 font-montserrat">Agile Development</h3>
                            <p className="text-[11px] text-indigo-100 mb-6 leading-relaxed font-inter">
                                Kami menggunakan Agile, khususnya Scrum, untuk project IT yang butuh eksekusi cepat dan adaptasi tinggi. Pendekatan ini menjamin proses berkelanjutan dan penyampaian target yang efisien.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Proses pengembangan berkelanjutan", "Adaptasi cepat terhadap perubahan", "Penyampaian value sejak tahap awal"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[11px] font-inter">
                                        <MdCheckCircleOutline className="text-sm shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/20 relative z-10">
                            <div className="flex items-center gap-2 mb-2 font-semibold text-xs font-montserrat">
                                <MdLightbulb className="text-sm" />
                                Cocok Untuk:
                            </div>
                            <p className="text-[10px] text-indigo-100 font-inter">
                                Pengembangan aplikasi tahap awal yang dinamis serta dapat menjawab terhadap kebutuhan pasar dengan cepat melalui fitur-fitur MVP.
                            </p>
                        </div>
                    </div>

                    {/* Waterfall Card */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-lg shadow-sm relative flex flex-col h-full">
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">Waterfall Development</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed font-inter">
                                Aplikasi dengan kebutuhan yang telah terdefinisi dengan jelas, timeline yang terencana, detail fitur dan sudah memiliki user yang akan menggunakan aplikasi tersebut dalam jangka panjang.
                            </p>
                            <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                                {["Milestone yang jelas dan terukur", "Estimasi biaya yang akurat", "Development yang terencana dengan baik"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-xs font-inter">
                                        <MdCheckCircleOutline className="text-sm text-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto bg-primary/10 dark:bg-primary/20 -mx-8 -mb-8 p-8 border-t border-primary/10">
                            <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-primary dark:text-indigo-300 font-montserrat">
                                <MdLightbulb className="text-base" />
                                Cocok Untuk:
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-300 font-inter">
                                Pengembangan aplikasi untuk penyempurnaan fiturnya yang menyesuaikan kebutuhan user dengan milestone yang jelas dan development yang terencana.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
