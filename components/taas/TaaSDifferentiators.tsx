import React from 'react';

const differentiators = [
    {
        title: "Fokus Talenta Teknologi (IT-Oriented)",
        desc: "Spesialis penyaluran talenta IT & digital yang telah melalui kurasi teknis."
    },
    {
        title: "Peningkatan Skill melalui Academy",
        desc: "Talent dibekali training, bootcamp, dan webinar agar siap kerja dan terus berkembang."
    },
    {
        title: "Model Kerja Fleksibel",
        desc: "Pilihan penempatan onsite, remote, atau hybrid sesuai kebutuhan klien."
    },
    {
        title: "Manajemen Talent Terpusat",
        desc: "Administrasi, payroll, BPJS, dan evaluasi staffing dikelola penuh oleh Kreasitech."
    },
    {
        title: "Talent Development Berkelanjutan",
        desc: "Pembinaan dan evaluasi rutin untuk menjaga kualitas dan performa talent."
    },
    {
        title: "Biaya Efisien & Terprediksi",
        desc: "Skema biaya transparan tanpa beban HR dan risiko turnover."
    },
    {
        title: "Berbasis Teknologi & Data",
        desc: "Seleksi dan monitoring talent dilakukan secara sistematis dan terukur."
    }
];

export default function TaaSDifferentiators() {
    return (
        <section className="py-24 bg-[#F4F4F7] text-gray-900 border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start relative w-full gap-16 lg:gap-24">

                    {/* Left Column: Heading & Sticky Text (Visible and Sticky on lg+) */}
                    <div className="w-full lg:w-[35%] lg:sticky lg:top-32 h-fit self-start relative lg:pl-16 lg:pb-14 z-30">
                        <div className="max-w-3xl lg:max-w-none text-left space-y-6">
                            <h2 className="font-h2 leading-tight">
                                Kunci Pembeda <br className="hidden lg:block" />
                                <span className="text-violet-600 font-semibold">Kreasitech</span>
                            </h2>
                            <p className="font-body-sm text-gray-700 max-w-sm font-medium">
                                Mengapa memilih Kreasitech sebagai partner penyedia talent teknologi Anda?
                            </p>
                            <p className="font-body-sm text-gray-700 max-w-sm font-medium">
                                Kami menawarkan lebih dari sekadar penempatan tenaga kerja—kami menghadirkan ekosistem pengembangan talenta digital yang berkelanjutan untuk mendukung pertumbuhan bisnis Anda.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Timeline List */}
                    <div className="w-full lg:w-[65%]">
                        <div className="flex flex-col">
                            {differentiators.map((item, index) => (
                                <div key={index} className={`relative pl-12 lg:pl-16 pb-12 lg:pb-14 ${index === differentiators.length - 1 ? '' : 'before:absolute before:top-2 before:bottom-0 before:left-[19px] before:w-[2px] before:bg-violet-600'}`}>
                                    {/* Number Box perfectly aligned with the line */}
                                    <div className="absolute left-0 top-0 w-10 h-10 border-2 border-violet-600 rounded-[4px] bg-[#F4F4F7] flex items-center justify-center font-montserrat text-sm font-bold text-violet-600 z-10 transition-all duration-300">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[13px] md:text-sm font-medium font-montserrat text-gray-500 leading-relaxed max-w-lg mb-10">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
