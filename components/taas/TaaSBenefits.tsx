import React from 'react';
import Image from 'next/image';

const benefits = [
    {
        icon: "/assets/images/3d-icons/alarm_clock_3d.png",
        title: "Lebih Hemat Waktu & Biaya Rekrutmen",
        description: "Tidak perlu proses iklan lowongan, seleksi, wawancara berulang, hingga onboarding."
    },
    {
        icon: "/assets/images/3d-icons/check_mark_button_3d.png",
        title: "Talent Siap Pakai",
        description: "Talent sudah diseleksi, divalidasi skill-nya, dan siap langsung bekerja."
    },
    {
        icon: "/assets/images/3d-icons/clipboard_3d.png",
        title: "Tanpa Beban Administrasi HR",
        description: "Payroll, pajak, BPJS, kontrak, dan administrasi ditangani oleh Kreasitech."
    },
    {
        icon: "/assets/images/3d-icons/money_bag_3d.png",
        title: "Biaya Lebih Terkontrol & Transparan",
        description: "Tidak ada biaya tersembunyi, cukup satu tagihan bulanan sesuai kesepakatan."
    },
    {
        icon: "/assets/images/3d-icons/counterclockwise_arrows_button_3d.png",
        title: "Fleksibel Sesuai Kebutuhan Proyek",
        description: "Bisa menambah, mengurangi, atau mengganti talent tanpa proses rekrut ulang."
    },
    {
        icon: "/assets/images/3d-icons/shield_3d.png",
        title: "Risiko Turnover Lebih Rendah",
        description: "Jika talent tidak sesuai, Kreasitech membantu proses penggantian."
    },
    {
        icon: "/assets/images/3d-icons/rocket_3d.png",
        title: "Fokus ke Bisnis Inti",
        description: "Klien dapat fokus pada pengembangan produk dan bisnis, bukan urusan SDM."
    },
    {
        icon: "/assets/images/3d-icons/chart_increasing_3d.png",
        title: "Didukung Monitoring & Evaluasi Kinerja",
        description: "Performa talent dipantau secara berkala untuk menjaga kualitas kerja."
    }
];

export default function TaaSBenefits() {
    return (
        <section id="benefits" className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="font-h2">
                        Benefit Menggunakan Kreasitech vs Rekrut Mandiri
                    </h2>
                    <p className="max-w-[700px] font-body-lg text-text-light-muted">
                        Lebih efisien, terkontrol, dan fokus pada pertumbuhan bisnis Anda dengan mempercayakan pengelolaan talent kepada kami.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-stretch flex-wrap content-center">
                    {benefits.map((benefit, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/4 aspect-square px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-center items-center gap-6 hover:bg-violet-800 transition-colors duration-300 group text-center"
                            >
                                <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                    <Image
                                        src={benefit.icon}
                                        alt={benefit.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain transition-all duration-300"
                                    />
                                </div>
                                <h3 className="font-h4 text-text-light group-hover:text-white transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="font-body-sm text-text-light group-hover:text-white transition-colors duration-300">
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

