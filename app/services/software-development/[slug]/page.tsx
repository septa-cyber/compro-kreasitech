import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { softwareDevelopmentServices } from '@/data/software-development-services';
import { FaArrowDown } from 'react-icons/fa6';
import { MdNorthEast, MdFastForward, MdLocationOn } from 'react-icons/md';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return softwareDevelopmentServices.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = softwareDevelopmentServices.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.roleName} Hiring - Kreasitech`,
        description: service.heroDescription,
    };
}

export default async function SoftwareServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = softwareDevelopmentServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Define consistent design colors
    const BRAND_PURPLE = "#4F11BD";

    return (
        <div className="bg-[#F9FAFB] text-gray-800 font-montserrat min-h-screen selection:bg-violet-100">
            <Navbar />

            <main>
                {/* Header / Hero Section */}
                <header className="bg-[#F9FAFB] py-12 lg:py-24 relative overflow-hidden">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="mb-12 lg:mb-0">
                                <div className="mb-8">
                                    <Breadcrumb
                                        className="font-montserrat"
                                        items={[
                                            { label: 'Software Development', href: '/services/software-development' },
                                            { label: service.roleName, href: `/services/software-development/${service.slug}` }
                                        ]}
                                    />
                                </div>
                                <h1
                                    className="text-5xl lg:text-7xl font-medium font-montserrat tracking-tight mb-6 text-gray-900 leading-[1.1]"
                                    dangerouslySetInnerHTML={{ __html: service.heroTitle }}
                                />
                                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                                    {service.heroDescription}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                    <Link
                                        href="https://wa.me/628888088877"
                                        className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-medium font-montserrat hover:bg-violet-700 transition-all duration-300 inline-block text-center w-full sm:w-auto"
                                    >
                                        Hire {service.roleName} Now
                                    </Link>
                                    <span className="text-xs text-gray-400 font-normal font-montserrat tracking-wide px-2 select-none">Free to interview, low-cost hiring</span>
                                </div>
                                <div className="mt-10 flex items-center text-gray-900 text-sm font-medium font-montserrat cursor-pointer group w-fit select-none">
                                    Learn More
                                    <FaArrowDown className="ml-2 text-xs text-[#7C3AED] transform group-hover:translate-y-1 transition-transform" />
                                </div>
                            </div>

                            {/* Avatar Grid - Stairstep Layout */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="grid grid-cols-3 gap-4 w-fit">
                                    {/* Row 1: 1 Image (Rightmost) */}
                                    <div className="col-start-3 row-start-1 aspect-square w-24 sm:w-32 rounded-none overflow-hidden bg-[#FFD4B2]">
                                        <Image
                                            alt="Expert 1"
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                                            src={service.heroImages[0] || 'https://placehold.co/400x400/png'}
                                            width={128}
                                            height={128}
                                        />
                                    </div>

                                    {/* Row 2: 2 Images (Middle & Right) */}
                                    <div className="col-start-2 row-start-2 aspect-square w-24 sm:w-32 rounded-none overflow-hidden bg-[#B4E4FF]">
                                        <Image
                                            alt="Expert 2"
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                                            src={service.heroImages[1] || 'https://placehold.co/400x400/png'}
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <div className="col-start-3 row-start-2 aspect-square w-24 sm:w-32 rounded-none overflow-hidden bg-[#FFB7B7]">
                                        <Image
                                            alt="Expert 3"
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                                            src={service.heroImages[2] || 'https://placehold.co/400x400/png'}
                                            width={128}
                                            height={128}
                                        />
                                    </div>

                                    {/* Row 3: 3 Images (Full Row) */}
                                    <div className="col-start-1 row-start-3 aspect-square w-24 sm:w-32 rounded-none overflow-hidden bg-[#BAE5E5]">
                                        <Image
                                            alt="Expert 4"
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                                            src={service.heroImages[3] || 'https://placehold.co/400x400/png'}
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <div className="col-start-2 row-start-3 aspect-square w-24 sm:w-32 rounded-none overflow-hidden bg-[#E2F0CB]">
                                        <Image
                                            alt="Expert 5"
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                                            src={service.heroImages[4] || 'https://placehold.co/400x400/png'}
                                            width={128}
                                            height={128}
                                        />
                                    </div>
                                    <div className="col-start-3 row-start-3 aspect-square w-24 sm:w-32 rounded-none overflow-hidden bg-[#ffff00]">
                                        <Image
                                            alt="Expert 6"
                                            className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                                            src={service.heroImages[5] || 'https://placehold.co/400x400/png'}
                                            width={128}
                                            height={128}
                                        />
                                    </div>

                                    {/* Row 4: 1 Image (Leftmost) - As per some stairstep designs, or stop at 3 rows? 
                                        User image shows 3 rows pyramid:
                                          [ ]
                                        [ ][ ]
                                      [ ][ ][ ]
                                      Let's stick to the 1-2-3 structure clearly visible in the reference.
                                     */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Skills Section */}
                <section className="bg-[#4F11BD] py-24 text-white">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                        {/* Introduction sentence - DO NOT DELETE */}
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-4xl font-medium font-montserrat max-w-4xl mx-auto leading-tight italic">
                                Berikut daftar hardskill dan softskill yang harus dimiliki oleh seorang {service.roleName}:
                            </h2>
                        </div>

                        {/* Updated Skills Layout based on user request */}
                        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-24">
                            {/* Hard Skill Column */}
                            <div className="flex-1 w-full flex flex-col justify-start items-center">
                                <div className="self-stretch p-8 border-b-[0.50px] border-white/20 flex flex-col justify-center items-start gap-6">
                                    <div className="self-stretch justify-start text-white text-4xl font-medium font-montserrat">Hard Skill</div>
                                </div>
                                <div className="w-full space-y-2">
                                    {service.hardSkills.map((skill, idx) => (
                                        <div key={idx} className="w-full p-8 flex flex-col justify-start items-center gap-4 overflow-hidden">
                                            <div className="self-stretch inline-flex justify-start items-center gap-6">
                                                <div className="justify-start text-white text-xl font-medium font-montserrat">{skill.title}</div>
                                            </div>
                                            <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                                                <div className="flex-1 justify-start text-white/80 text-sm font-normal font-montserrat leading-relaxed">{skill.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Soft Skill Column */}
                            <div className="flex-1 w-full flex flex-col justify-start items-center">
                                <div className="self-stretch p-8 border-b-[0.50px] border-white/20 flex flex-col justify-center items-start gap-6">
                                    <div className="self-stretch justify-start text-white text-4xl font-medium font-montserrat">Soft Skill</div>
                                </div>
                                <div className="w-full space-y-2">
                                    {service.softSkills.map((skill, idx) => (
                                        <div key={idx} className="w-full p-8 flex flex-col justify-start items-center gap-4 overflow-hidden">
                                            <div className="self-stretch inline-flex justify-start items-center gap-6">
                                                <div className="justify-start text-white text-xl font-medium font-montserrat">{skill.title}</div>
                                            </div>
                                            <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                                                <div className="flex-1 justify-start text-white/80 text-sm font-normal font-montserrat leading-relaxed">{skill.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Levels Section */}
                <section className="bg-white py-28 text-gray-900 overflow-hidden font-montserrat">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 tracking-tight font-montserrat">Find the Position Level You Need</h2>
                        <div className="grid lg:grid-cols-3 gap-6 items-stretch pt-4">
                            {service.levels.map((level, idx) => {
                                const isFirst = idx === 0;
                                return (
                                    <div
                                        key={idx}
                                        className={`${isFirst ? 'bg-[#4F11BD] text-white' : 'bg-[#F9FAFB] text-gray-900 border border-gray-100'} flex flex-col h-full rounded-[32px] p-8 md:p-10 transition-all duration-300 hover:shadow-2xl`}
                                    >
                                        <h3 className={`text-xl md:text-3xl font-bold mb-10 font-montserrat ${isFirst ? 'text-white' : 'text-gray-900'}`}>{level.title}</h3>
                                        <ul className="space-y-6 mb-16 flex-1 text-[15px] tracking-wide font-montserrat">
                                            {level.bulletPoints.map((bp, bidx) => (
                                                <li key={bidx} className="flex items-start">
                                                    <MdLocationOn className={`${isFirst ? 'text-white/50' : 'text-[#4F11BD]'} text-xl mr-3 mt-1 shrink-0`} />
                                                    <span className={`${isFirst ? 'text-white/90' : 'text-gray-600'} leading-relaxed font-medium`}>{bp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex justify-between items-end border-t border-white/10 pt-8 mt-auto">
                                            <div>
                                                <p className={`text-[11px] uppercase tracking-[0.2em] mb-3 font-bold font-montserrat ${isFirst ? 'text-white/50' : 'text-gray-400'}`}>Monthly Salary</p>
                                                <p className="font-extrabold text-lg md:text-xl font-montserrat">IDR {level.salaryRange}</p>
                                            </div>
                                            <div className={`${isFirst ? 'bg-white/20' : 'bg-white text-[#4F11BD] shadow-sm'} w-12 h-12 rounded-xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer`}>
                                                <MdNorthEast className="text-xl" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-20 text-center">
                            <Link
                                href="https://wa.me/628888088877"
                                className="bg-[#4F11BD] text-white px-12 py-5 rounded-xl font-bold font-montserrat hover:bg-violet-800 transition-all duration-300 shadow-2xl shadow-violet-500/10 inline-block"
                            >
                                Hire Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="bg-white py-28 border-t border-gray-50 font-montserrat">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-28 text-gray-900 leading-tight tracking-tight font-montserrat">
                            Discover the Power of<br />Kreasitech Hiring Process
                        </h2>
                        <div className="grid md:grid-cols-3 gap-16">
                            {service.hiringProcessSteps.map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                    <div className="w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center mb-10 transition-transform group-hover:scale-105">
                                        <span className="text-xl font-bold text-[#4F11BD] font-montserrat">
                                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-tight font-montserrat">{step.title}</h3>
                                    <p className="text-sm text-gray-400 max-w-[280px] leading-loose font-medium px-4 font-montserrat">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* After Hire Section */}
                <section className="bg-[#F9FAFB] py-32 font-montserrat">
                    <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-24 text-gray-900 tracking-tight font-montserrat">After You Hire</h2>
                        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-20">
                            <div className="text-center md:text-right">
                                <h3 className="text-xl font-bold mb-4 text-gray-900 font-montserrat">{service.afterHireSteps[0]?.title}</h3>
                                <p className="text-base text-gray-400 leading-relaxed font-medium italic font-montserrat">{service.afterHireSteps[0]?.description}</p>
                            </div>
                            <div className="flex justify-center text-[#4F11BD]/20">
                                <MdFastForward className="text-7xl opacity-50" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold mb-4 text-gray-900 font-montserrat">{service.afterHireSteps[1]?.title}</h3>
                                <p className="text-base text-gray-400 leading-relaxed font-medium italic font-montserrat">{service.afterHireSteps[1]?.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Jobs Section */}
                <section className="bg-violet-800 text-white py-24 font-montserrat" data-theme="dark">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col gap-12">
                        <h2 className="text-white text-4xl font-medium font-montserrat">
                            Lowongan Terkait
                        </h2>
                        <div className="w-full grid md:grid-cols-2 gap-x-12 gap-y-10 content-start">
                            {[...service.relatedJobs,
                            { title: "Front-End Developer", slug: "#" },
                            { title: "Back-End Developer", slug: "#" },
                            { title: "Full Stack Developer", slug: "#" },
                            { title: "Wordpress Developer", slug: "#" },
                            { title: "Shopify Developer", slug: "#" }
                            ].slice(0, 6).map((job, idx) => (
                                <Link
                                    key={idx}
                                    href={job.slug.startsWith('#') ? '#' : `/services/software-development/${job.slug}`}
                                    className="group flex flex-1 items-center justify-between py-2 border-b border-white/10 hover:border-white/30 transition-all"
                                >
                                    <span className="text-white text-xl font-medium font-montserrat group-hover:underline underline-offset-4 decoration-2">
                                        {job.title}
                                    </span>
                                    <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
                                        <MdNorthEast className="text-white text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 bg-[#F3F4F6] flex flex-col justify-start items-center gap-24 overflow-hidden font-montserrat">
                    <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
                        <div className="w-full flex flex-col justify-start items-center gap-8">
                            <div className="w-full flex flex-col justify-start items-center gap-8 text-center">
                                <h2 className="text-4xl md:text-5xl font-medium font-montserrat text-gray-900 leading-tight tracking-tight">
                                    Build Your Dream<br />Team Effortlessly
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-normal font-montserrat max-w-2xl mx-auto leading-relaxed">
                                    {service.ctaDescription}
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex justify-start items-start gap-8">
                            <Link
                                href="https://wa.me/628888088877"
                                className="px-10 py-4 bg-[#4F11BD] rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-800 transition-all duration-300 shadow-xl shadow-violet-500/10"
                            >
                                <span className="text-white text-base font-medium font-montserrat">
                                    Hire a {service.roleName}
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
