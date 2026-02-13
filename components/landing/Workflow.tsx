import React from 'react';
import Image from 'next/image';

export default function Workflow() {
    const workflowSteps = [
        {
            number: 1,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png",
            title: "Discovery & Requirements",
            description: "Menggali kebutuhan bisnis secara mendalam dan merumuskan spesifikasi teknis yang menjadi fondasi proyek."
        },
        {
            number: 2,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png",
            title: "Wireframe & Desain UI/UX",
            description: "Merancang kerangka visual dan pengalaman pengguna yang intuitif sebelum tahap penulisan kode dimulai."
        },
        {
            number: 3,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png",
            title: "Pengembangan",
            description: "Proses coding sistem backend dan frontend untuk mengubah desain menjadi aplikasi fungsional yang robust."
        },
        {
            number: 4,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png",
            title: "SIT",
            description: "System Integration Testing untuk memastikan seluruh modul dan interaksi sistem berjalan mulus tanpa konflik."
        },
        {
            number: 5,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist%20Medium-Light%20Skin%20Tone.png",
            title: "UAT",
            description: "User Acceptance Testing, validasi akhir oleh Anda untuk memastikan aplikasi sesuai kebutuhan bisnis yang disepakati."
        },
        {
            number: 6,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png",
            title: "Deployment",
            description: "Peluncuran aplikasi ke lingkungan produksi (live) agar dapat digunakan secara penuh oleh user."
        },
        {
            number: 7,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png",
            title: "Pemeliharaan & Dukungan",
            description: "Layanan monitoring, perbaikan bug, dan optimasi berkelanjutan untuk menjamin stabilitas sistem jangka panjang."
        }
    ];

    return (
        <section className="py-24 bg-violet-800 text-gray-800 overflow-hidden" data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Sesuaikan energi Anda dengan alur kerja kami
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Kami memastikan setiap proyek dieksekusi secara efisien dan disesuaikan dengan kebutuhan bisnis unik Anda, menyediakan solusi inovatif yang mendorong kesuksesan.
                    </p>
                </div>

                {/* Workflow */}
                <div className="space-y-16">
                    {/* Top Row - Steps 1-4 */}
                    <div className="hidden lg:block relative">
                        {/* Connection Line */}
                        <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-teal-500">
                            {/* Connector Dots */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-4 gap-8 relative z-10">
                            {workflowSteps.slice(0, 4).map((step) => (
                                <div key={step.number} className="flex flex-col items-center text-center">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mb-4 relative">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Number Circle */}
                                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-lg font-semibold mb-6">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row - Steps 5-7 */}
                    <div className="hidden lg:block relative">
                        {/* Connection Line */}
                        <div className="absolute top-[52px] left-[16.666%] right-[16.666%] h-[2px] bg-teal-500">
                            {/* Connector Dots */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 relative z-10">
                            {workflowSteps.slice(4, 7).map((step) => (
                                <div key={step.number} className="flex flex-col items-center text-center">
                                    {/* Icon */}
                                    <div className="w-16 h-16 mb-4 relative">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Number Circle */}
                                    <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-lg font-semibold mb-6">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet View - Vertical List */}
                    <div className="lg:hidden space-y-8">
                        {workflowSteps.map((step, index) => (
                            <div key={step.number} className="relative">
                                {/* Vertical Connection Line */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="absolute left-8 top-24 bottom-0 w-[2px] bg-teal-500 -mb-8"></div>
                                )}

                                <div className="flex items-start gap-6">
                                    {/* Left Side - Icon and Number */}
                                    <div className="flex flex-col items-center flex-shrink-0">
                                        {/* Icon */}
                                        <div className="w-12 h-12 mb-3 relative">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Number Circle */}
                                        <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-base font-semibold relative z-10">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Right Side - Content */}
                                    <div className="flex-1 pt-2">
                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

