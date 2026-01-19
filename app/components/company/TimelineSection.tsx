import React from "react";

interface TimelineItemProps {
    year: string;
    text: string;
    lineColorClass: string;
    bgClass: string;
}

const timelineData: TimelineItemProps[] = [
    {
        year: "2021",
        text: "Kreasitech dimulai hanya dengan tiga anggota tim, didorong oleh visi untuk menghubungkan talent IT dengan perusahaan di Indonesia melalui project dan kolaborasi.",
        lineColorClass: "bg-gray-200",
        bgClass: "bg-background-light",
    },
    {
        year: "2022",
        text: "Fokus mengembangkan skill tim dalam bidang software development yang menggunakan bahasa pemrograman Highcode dan Lowcode dengan output berupa website & aplikasi mobile.",
        lineColorClass: "bg-gray-300",
        bgClass: "bg-[#F4F4F7]",
    },
    {
        year: "2023",
        text: "Merambah ke area penyedia outsourcing untuk berbagai role talent IT ke beberapa client.",
        lineColorClass: "bg-purple-400",
        bgClass: "bg-violet-800 text-white",
    },
    {
        year: "2024",
        text: "Setahun penuh kesempatan dan tantangan, kami memperluas jangkauan, memperkuat proses internal, dan meletakkan fondasi untuk lompatan besar berikutnya.",
        lineColorClass: "bg-gray-200",
        bgClass: "bg-white",
    },
    {
        year: "2025",
        text: "Memperkuat model bisnis yang tidak hanya software development, namun memperkaya lini bisnis pada divisi Digital Marketing & Kreasitech Academy.",
        lineColorClass: "bg-gray-300",
        bgClass: "bg-[#F4F4F7]",
    },
    {
        year: "2026",
        text: "Visi besar Kreasitech dapat menghubungkan talent, edukasi, industri dengan teknologi dalam satu ekosistem digital yang disebut 'Tech-driven Talent & Digital Ecosystem Company' yang mampu melayani lintas industri.",
        lineColorClass: "bg-purple-400",
        bgClass: "bg-violet-800 text-white",
    },
];

export default function TimelineSection() {
    return (
        <>
            {timelineData.map((item, index) => (
                <section key={index} className={`py-20 ${item.bgClass}`}>
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className={`font-display text-3xl font-semibold mb-4 ${item.bgClass.includes('text-white') ? '' : 'text-gray-900'}`}>
                            {item.year}
                        </h3>
                        <div className={`w-16 h-1 mx-auto mb-8 ${item.lineColorClass}`}></div>
                        <p className={`text-lg ${item.bgClass.includes('text-white') ? 'text-purple-100' : 'text-gray-600'} font-body`}>
                            {item.text}
                        </p>
                    </div>
                </section>
            ))}
        </>
    );
}
