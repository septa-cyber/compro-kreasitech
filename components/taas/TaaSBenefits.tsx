import React from 'react';
import { LuClock, LuUserCheck, LuFileText, LuDollarSign, LuRefreshCw, LuShield, LuTarget, LuTrendingUp } from 'react-icons/lu';

const benefits = [
    {
        icon: LuClock,
        title: "Lebih Hemat Waktu & Biaya Rekrutmen",
        description: "Tidak perlu proses iklan lowongan, seleksi, wawancara berulang, hingga onboarding."
    },
    {
        icon: LuUserCheck,
        title: "Talent Siap Pakai",
        description: "Talent sudah diseleksi, divalidasi skill-nya, dan siap langsung bekerja."
    },
    {
        icon: LuFileText,
        title: "Tanpa Beban Administrasi HR",
        description: "Payroll, pajak, BPJS, kontrak, dan administrasi ditangani oleh Kreasitech."
    },
    {
        icon: LuDollarSign,
        title: "Biaya Lebih Terkontrol & Transparan",
        description: "Tidak ada biaya tersembunyi, cukup satu tagihan bulanan sesuai kesepakatan."
    },
    {
        icon: LuRefreshCw,
        title: "Fleksibel Sesuai Kebutuhan Proyek",
        description: "Bisa menambah, mengurangi, atau mengganti talent tanpa proses rekrut ulang."
    },
    {
        icon: LuShield,
        title: "Risiko Turnover Lebih Rendah",
        description: "Jika talent tidak sesuai, Kreasitech membantu proses penggantian."
    },
    {
        icon: LuTarget,
        title: "Fokus ke Bisnis Inti",
        description: "Klien dapat fokus pada pengembangan produk dan bisnis, bukan urusan SDM."
    },
    {
        icon: LuTrendingUp,
        title: "Didukung Monitoring & Evaluasi Kinerja",
        description: "Performa talent dipantau secara berkala untuk menjaga kualitas kerja."
    }
];

export default function TaaSBenefits() {
    return (
        <section id="benefits" className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-montserrat text-text-light">
                        Benefit Menggunakan Kreasitech vs Rekrut Mandiri
                    </h2>
                    <p className="max-w-[700px] text-base font-normal font-montserrat text-text-light-muted">
                        Lebih efisien, terkontrol, dan fokus pada pertumbuhan bisnis Anda dengan mempercayakan pengelolaan talent kepada kami.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-stretch flex-wrap content-center">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/4 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group"
                            >
                                <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                    <IconComponent className="text-3xl text-violet-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
