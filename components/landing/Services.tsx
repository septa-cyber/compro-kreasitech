import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
    return (
        <section className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="font-h2 mb-10">
                        Layanan Kami
                    </h2>
                    <p className="font-body-lg text-gray-500 max-w-[700px]">
                        Kreasitech menyediakan solusi end-to-end bagi organisasi yang ingin membangun produk digital, memperkuat tim teknologi, meningkatkan kompetensi, hingga mengembangkan bisnis melalui digital marketing.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] px-4 md:px-0 flex justify-between items-stretch flex-wrap content-center">
                    {/* 1. Software Development */}
                    <Link href="/services/software-development" className="w-full md:w-1/2 lg:w-1/4 h-auto py-16 px-8 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-center items-center text-center gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                            <Image
                                src="/assets/images/Icons/3d-setting 1.svg"
                                alt="Laptop 3D Icon"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <h3 className="font-h4 self-stretch group-hover:text-white transition-colors duration-300">
                            Software Development
                        </h3>
                        <p className="font-body-sm self-stretch group-hover:text-white transition-colors duration-300">
                            Website, aplikasi mobile, MVP, custom system
                        </p>
                    </Link>

                    {/* 2. Talent as a Service */}
                    <Link href="/taas" className="w-full md:w-1/2 lg:w-1/4 h-auto py-16 px-8 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-center items-center text-center gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                            <Image
                                src="/assets/images/Icons/3d-star 1.svg"
                                alt="Talent as a Service Icon"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain transition-all duration-300"
                            />
                        </div>
                        <h3 className="font-h4 self-stretch group-hover:text-white transition-colors duration-300">
                            Talent as a Service
                        </h3>
                        <p className="font-body-sm self-stretch group-hover:text-white transition-colors duration-300">
                            Staffing, headhunting, internship, inclusive placement
                        </p>
                    </Link>

                    {/* 3. Academy */}
                    <Link href="/academy" className="w-full md:w-1/2 lg:w-1/4 h-auto py-16 px-8 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-center items-center text-center gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                            <Image
                                src="/assets/images/Icons/books 1.svg"
                                alt="Graduation Cap 3D Icon"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain transition-all duration-300"
                            />
                        </div>
                        <h3 className="font-h4 self-stretch group-hover:text-white transition-colors duration-300">
                            Kreasi Space
                        </h3>
                        <p className="font-body-sm self-stretch group-hover:text-white transition-colors duration-300">
                            Pelatihan digital & tech untuk masyarakat umum dan profesional
                        </p>
                    </Link>

                    {/* 4. Digital Marketing */}
                    <Link href="/services/digital-marketing" className="w-full md:w-1/2 lg:w-1/4 h-auto py-16 px-8 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-center items-center text-center gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                            <Image
                                src="/assets/images/3d-icons/megaphone_3d.png"
                                alt="Megaphone 3D Icon"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain transition-all duration-300"
                            />
                        </div>
                        <h3 className="font-h4 self-stretch group-hover:text-white transition-colors duration-300">
                            Digital Marketing
                        </h3>
                        <p className="font-body-sm self-stretch group-hover:text-white transition-colors duration-300">
                            HiTalent, HiSales, Ventri, Idas SFA
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

