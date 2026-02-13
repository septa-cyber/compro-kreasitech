import React from 'react';
import Image from 'next/image';

export default function ImpactAcademyFlow() {
    const academySteps = [
        {
            number: 1,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pencil.png",
            title: "Registrasi",
            description: "Pendaftaran peserta dengan mengisi formulir dan verifikasi data untuk memulai program pelatihan."
        },
        {
            number: 2,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Graduation%20Cap.png",
            title: "Pelatihan & Pembelajaran",
            description: "Sesi intensif dengan mentor berpengalaman yang memberikan materi teoritis dan studi kasus nyata."
        },
        {
            number: 3,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png",
            title: "Praktik & Evaluasi Kompetensi",
            description: "Mengaplikasikan ilmu melalui project-based learning dan penilaian berkala untuk mengukur progress."
        },
        {
            number: 4,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Trophy.png",
            title: "Sertifikasi Kelulusan",
            description: "Penyerahan sertifikat resmi kepada peserta yang telah menyelesaikan program dengan standar kompetensi."
        },
        {
            number: 5,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png",
            title: "Talent Pool & Penyaluran Kerja",
            description: "Alumni tergabung dalam talent pool dan direkomendasikan ke perusahaan mitra untuk peluang karir."
        },
        {
            number: 6,
            icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png",
            title: "Monitoring & Pengembangan Lanjutan",
            description: "Pendampingan berkelanjutan dan upskilling untuk memastikan alumni tetap relevan dengan kebutuhan industri."
        }
    ];

    return (
        <section className="py-24 bg-white text-gray-900 overflow-hidden" data-theme="light">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium font-montserrat mb-4 text-gray-900">
                        Alur Program Academy
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-montserrat">
                        Proses pembelajaran terstruktur yang dirancang untuk mengembangkan kompetensi Anda secara bertahap, dari pendaftaran hingga penempatan kerja dan pengembangan karir berkelanjutan.
                    </p>
                </div>

                {/* Workflow */}
                <div className="space-y-16">
                    {/* Top Row - Steps 1-3 */}
                    <div className="hidden lg:block relative">
                        {/* Connection Line */}
                        <div className="absolute top-[52px] left-[16.666%] right-[16.666%] h-[2px] bg-violet-600">
                            {/* Connector Dots */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"></div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 relative z-10">
                            {academySteps.slice(0, 3).map((step) => (
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
                                    <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center text-lg font-semibold mb-6">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold font-montserrat text-gray-900 mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm font-montserrat text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row - Steps 4-6 */}
                    <div className="hidden lg:block relative">
                        {/* Connection Line */}
                        <div className="absolute top-[52px] left-[16.666%] right-[16.666%] h-[2px] bg-violet-600">
                            {/* Connector Dots */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"></div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 relative z-10">
                            {academySteps.slice(3, 6).map((step) => (
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
                                    <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center text-lg font-semibold mb-6">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold font-montserrat text-gray-900 mb-3">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm font-montserrat text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet View - Vertical List */}
                    <div className="lg:hidden space-y-8">
                        {academySteps.map((step, index) => (
                            <div key={step.number} className="relative">
                                {/* Vertical Connection Line */}
                                {index < academySteps.length - 1 && (
                                    <div className="absolute left-8 top-24 bottom-0 w-[2px] bg-violet-600 -mb-8"></div>
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
                                        <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center text-base font-semibold relative z-10">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Right Side - Content */}
                                    <div className="flex-1 pt-2">
                                        {/* Title */}
                                        <h3 className="text-lg font-semibold font-montserrat text-gray-900 mb-2">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm font-montserrat text-gray-600 leading-relaxed">
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
