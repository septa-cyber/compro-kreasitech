import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import WhatsAppButton from '@/app/components/landing/WhatsAppButton';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import { softwareDevelopmentServices } from '@/app/data/software-development-services';
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
                                <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed font-montserrat">
                                    {service.heroDescription}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                    <Link
                                        href="https://wa.me/628888088877"
                                        className="bg-[#4F11BD] text-white px-10 py-4 rounded-lg font-bold font-montserrat hover:bg-violet-700 transition-all duration-300 shadow-xl shadow-violet-500/20 inline-block text-center w-full sm:w-auto"
                                    >
                                        Hire {service.roleName} Now
                                    </Link>
                                    <span className="text-xs text-gray-400 font-semibold font-montserrat tracking-wide uppercase px-2">Free to interview, low-cost hiring</span>
                                </div>
                                <div className="mt-10 flex items-center text-gray-400 text-sm font-semibold font-montserrat hover:text-[#4F11BD] transition-colors cursor-pointer group w-fit">
                                    Learn More
                                    <FaArrowDown className="ml-2 text-xs transform group-hover:translate-y-1 transition-transform" />
                                </div>
                            </div>

                            {/* Avatar Grid */}
                            <div className="relative">
                                <div className="grid grid-cols-4 gap-3 max-w-sm sm:max-w-md mx-auto lg:ml-auto">
                                    {service.heroImages.map((img, idx) => {
                                        const positions = [
                                            "col-start-3", "col-start-4", "col-start-2",
                                            "col-start-3", "col-start-4", "col-start-1",
                                            "col-start-2", "col-start-3", "col-start-4"
                                        ];
                                        const colors = [
                                            "bg-[#FFD4B2]", "bg-[#FFB7B7]", "bg-[#B4E4FF]",
                                            "bg-[#D2D2FF]", "bg-[#C4FFC4]", "bg-[#BAE5E5]",
                                            "bg-[#FFCCCC]", "bg-[#FFE0B2]", "bg-[#E2F0CB]"
                                        ];
                                        return (
                                            <div
                                                key={idx}
                                                className={`${positions[idx % positions.length]} col-span-1 aspect-square rounded-2xl overflow-hidden ${colors[idx % colors.length]} shadow-sm`}
                                            >
                                                <Image
                                                    alt={`Expert ${idx + 1}`}
                                                    className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                                                    src={img}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Skills Section */}
                <section className="bg-[#4F11BD] py-24 text-white">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-4xl font-medium font-montserrat max-w-4xl mx-auto leading-tight italic">
                                Berikut daftar hardskill dan softskill yang harus dimiliki oleh seorang {service.roleName}:
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
                            {/* Hard Skills */}
                            <div>
                                <h3 className="text-4xl mb-12 border-b border-white/10 pb-8 font-semibold text-white font-montserrat">Hard Skill</h3>
                                <div className="space-y-12">
                                    {service.hardSkills.map((skill, idx) => (
                                        <div key={idx} className="group">
                                            <h4 className="text-2xl font-bold mb-4 tracking-tight font-montserrat">{skill.title}</h4>
                                            <p className="text-white/70 text-base leading-relaxed font-light font-montserrat">{skill.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Soft Skills */}
                            <div>
                                <h3 className="text-4xl mb-12 border-b border-white/10 pb-8 font-semibold text-white font-montserrat">Soft Skill</h3>
                                <div className="space-y-12">
                                    {service.softSkills.map((skill, idx) => (
                                        <div key={idx} className="group">
                                            <h4 className="text-2xl font-bold mb-4 tracking-tight font-montserrat">{skill.title}</h4>
                                            <p className="text-white/70 text-base leading-relaxed font-light font-montserrat">{skill.description}</p>
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
                                        <h3 className={`text-2xl md:text-3xl font-bold mb-10 font-montserrat ${isFirst ? 'text-white' : 'text-gray-900'}`}>{level.title}</h3>
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
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-montserrat">{service.afterHireSteps[0]?.title}</h3>
                                <p className="text-base text-gray-400 leading-relaxed font-medium italic font-montserrat">{service.afterHireSteps[0]?.description}</p>
                            </div>
                            <div className="flex justify-center text-[#4F11BD]/20">
                                <MdFastForward className="text-7xl opacity-50" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-montserrat">{service.afterHireSteps[1]?.title}</h3>
                                <p className="text-base text-gray-400 leading-relaxed font-medium italic font-montserrat">{service.afterHireSteps[1]?.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Jobs Section */}
                <section className="bg-[#4F11BD] text-white py-28 font-montserrat">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                        <h2 className="text-4xl font-bold mb-20 tracking-tight font-montserrat">Related Jobs</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
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
                                    className="flex justify-between items-center group"
                                >
                                    <span className="text-xl md:text-2xl font-bold group-hover:text-white/70 transition-colors font-montserrat">{job.title}</span>
                                    <MdNorthEast className="text-xl opacity-50 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-white py-36 text-center relative font-montserrat">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight leading-tight font-montserrat">
                            Build Your Dream<br />Team Effortlessly
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic font-montserrat">
                            {service.ctaDescription}
                        </p>
                        <Link
                            href="https://wa.me/628888088877"
                            className="bg-[#4F11BD] text-white px-12 py-5 rounded-2xl font-bold font-montserrat hover:bg-violet-800 transition-all duration-300 shadow-2xl shadow-violet-500/20 inline-block text-lg"
                        >
                            Hire a {service.roleName}
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
