import React from "react";

export default function WorkflowSection() {
    return (
        <section className="py-24 bg-violet-800 text-white relative">
            {/* No gradient overlay needed as per new reference, just solid deep purple or very subtle gradient */}
            <div className="absolute inset-0 bg-violet-800"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-h2 !text-white mb-4">Sesuaikan energi Anda dengan<br />alur kerja kami</h2>
                    <p className="font-body-xs !text-indigo-100 max-w-sm mx-auto">
                        Kami memastikan setiap proyek dieksekusi secara efisien dan disesuaikan dengan kebutuhan bisnis unik Anda, menyediakan solusi inovatif yang mendorong kesuksesan.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
                    {/* Workflow Items */}
                    <WorkflowItem number="1" title="Discovery & Requirements" desc="Dokumen penting yang menguraikan batasan dan tujuan proyek." light />
                    <WorkflowItem number="2" title="Wireframe & Desain UI/UX" desc="Menjelaskan metode langkah demi langkah untuk mengembangkan atau meningkatkan produk saat ini." />
                    <WorkflowItem number="3" title="Pengembangan" desc="Menguraikan prosedur terperinci untuk berinovasi atau meningkatkan layanan yang ada." />
                    <WorkflowItem number="4" title="SIT" desc="Mewakili pencapaian yang diraih melalui komitmen, keterampilan, dan keberanian." />
                    <WorkflowItem number="5" title="UAT" desc="Mewujudkan kisah sukses yang dibangun atas ketekunan, keahlian, dan keberanian." className="lg:col-start-1 lg:ml-auto w-full" />
                    <WorkflowItem number="6" title="Deployment" desc="Memungkinkan perbaikan berkelanjutan melalui tinjauan konstan dan perubahan berulang." />
                    <WorkflowItem number="7" title="Pemeliharaan & Dukungan" desc="Memfasilitasi pengembangan berkelanjutan melalui tinjauan konstan dan modifikasi berulang." className="lg:col-span-2 text-center w-full" />
                </div>
            </div>
        </section>
    );
}

function WorkflowItem({ number, title, desc, light, className = "" }: { number: string, title: string, desc: string, light?: boolean, className?: string }) {
    return (
        <div className={`p-8 border-r border-b border-white/20 text-center flex flex-col items-center flex-grow ${light ? 'bg-white text-gray-900' : 'bg-transparent backdrop-blur-sm'} ${className}`}>
            <div className={`w-8 h-8 rounded-[4px] flex items-center justify-center font-body font-bold mb-4 ${light ? 'border border-[#4834d4] text-[#4834d4]' : 'border border-white text-white'}`}>
                {number}
            </div>
            <h3 className={`font-h5 mb-2 ${light ? 'text-[#4834d4]' : 'text-white'}`}>{title}</h3>
            <p className={`font-body-xs ${light ? 'text-gray-500' : 'text-indigo-100'} px-4`}>{desc}</p>
        </div>
    )
}

