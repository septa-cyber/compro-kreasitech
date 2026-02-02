import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { digitalMarketingServices } from "@/data/digital-marketing-services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
    FaStar, FaMobileScreenButton, FaScrewdriverWrench, FaChartColumn, FaRegCommentDots,
    FaArrowDown, FaCheck, FaLocationDot, FaPhone, FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaBars, FaChevronDown, FaArrowUpRightFromSquare, FaArrowRight,
    // New Icons for Process Steps
    FaMagnifyingGlass, FaFilePen, FaCode, FaLink, FaChartLine,
    FaUsersViewfinder, FaPalette, FaBullhorn, FaFlask, FaHandHoldingDollar,
    FaClipboardList, FaNewspaper, FaPaperPlane, FaEye, FaFileContract,
    FaGlobe, FaFileImport, FaRobot, FaGaugeHigh, FaLaptopCode,
    // Package Feature Icons
    FaHeadset, FaSitemap, FaLayerGroup, FaPen, FaShareNodes, FaCheckDouble,
    FaChartBar, FaClock, FaPenFancy, FaFileInvoice, FaBolt, FaServer,
    FaInfinity, FaFileLines, FaCrown, FaFeather, FaAnchor, FaMagnifyingGlassChart
} from "react-icons/fa6";
import { IconType } from "react-icons";

// Map for dynamic icons
const iconMap: Record<string, IconType> = {
    FaStar,
    FaMobileScreenButton,
    FaScrewdriverWrench,
    FaChartColumn,
    FaRegCommentDots,
    // New mappings
    FaMagnifyingGlass, FaFilePen, FaCode, FaLink, FaChartLine,
    FaUsersViewfinder, FaPalette, FaBullhorn, FaFlask, FaHandHoldingDollar,
    FaClipboardList, FaNewspaper, FaPaperPlane, FaEye, FaFileContract,
    FaGlobe, FaFileImport, FaRobot, FaGaugeHigh, FaLaptopCode,
    // Package Feature Icons
    FaHeadset, FaSitemap, FaLayerGroup, FaPen, FaShareNodes, FaCheckDouble,
    FaChartBar, FaClock, FaPenFancy, FaFileInvoice, FaBolt, FaServer,
    FaInfinity, FaFileLines, FaCrown, FaFeather, FaAnchor, FaMagnifyingGlassChart
};

export async function generateStaticParams() {
    return digitalMarketingServices.map((service) => ({
        slug: service.slug,
    }));
}

export const dynamicParams = false;

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = digitalMarketingServices.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} Services - Kreasitech Digital Marketing`,
        description: service.heroDescription,
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = digitalMarketingServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-[#F9FAFB] text-gray-800 font-sans min-h-screen">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="pb-20 overflow-hidden bg-gradient-to-b from-transparent to-white">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        <Breadcrumb
                            className="mb-8"
                            items={[
                                { label: "Beranda", href: "/" },
                                { label: "Layanan", href: "#" },
                                { label: "Digital Marketing", href: "/services/digital-marketing" },
                                { label: service.title, href: `/services/digital-marketing/${service.slug}` },
                            ]}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1
                                    className="text-4xl sm:text-5xl lg:text-7xl font-medium font-montserrat tracking-tight text-gray-900 leading-tight mb-6"
                                    dangerouslySetInnerHTML={{ __html: service.heroTitle }}
                                />
                                <p className="text-base text-gray-600 mb-8 max-w-lg leading-relaxed font-montserrat">
                                    {service.heroDescription}
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-8 w-full">
                                    <a href="#pricelist" className="w-full sm:w-auto px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                                        <span className="text-gray-100 text-base font-medium font-montserrat">Pesan Sekarang</span>
                                    </a>
                                    <a href="#advantages" className="flex justify-start items-center gap-4 group">
                                        <span>Pelajari Lebih Lanjut</span>
                                        <Image
                                            src="/assets/images/arrow_downward.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 group-hover:translate-y-1 transition-transform"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* Hero Image Grid */}
                            <div className="relative w-full">
                                <div className="flex gap-4 h-[350px] md:h-[400px]">
                                    <div className="flex-1 bg-white border border-blue-100 rounded-xl overflow-hidden relative p-6 flex items-center justify-center">
                                        <Image
                                            src={service.heroImage1}
                                            alt="Hero Main"
                                            width={500} height={500}
                                            className="w-full h-full object-contain mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="w-1/3 flex flex-col gap-4">
                                        <div className="flex-1 bg-white border border-blue-100 rounded-xl overflow-hidden p-4 flex items-center justify-center">
                                            <Image
                                                src={service.heroImage2}
                                                alt="Hero Secondary 1"
                                                width={200} height={200}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        </div>
                                        <div className="flex-1 bg-white border border-red-50 rounded-xl overflow-hidden p-4 flex items-center justify-center">
                                            <Image
                                                src={service.heroImage3}
                                                alt="Hero Secondary 2"
                                                width={200} height={200}
                                                className="w-full h-full object-contain mix-blend-multiply"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process / Stats Grid */}
                <section className="bg-violet-800 py-24">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Container similar to "self-stretch outline..." */}
                        <div className="w-full outline outline-[0.5px] outline-offset-[-0.5px] outline-white/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                            {service.processSteps.map((step, index) => {
                                const Icon = iconMap[step.iconName] || FaStar;
                                return (
                                    <div key={index} className="w-full aspect-square px-8 pt-8 pb-12 outline outline-[0.5px] outline-offset-[-0.25px] outline-white/20 flex flex-col justify-center items-center gap-6 hover:bg-white/5 transition-colors group">
                                        <div className="w-12 h-12 relative flex items-center justify-center overflow-hidden">
                                            <Icon className="text-3xl text-white relative z-10" />
                                        </div>
                                        <h3
                                            className="self-stretch text-center text-white text-2xl font-medium font-montserrat leading-tight"
                                            dangerouslySetInnerHTML={{ __html: step.title }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Pricelist Section */}
                <section id="pricelist" className="py-24 bg-white">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-24">
                        <h2 className="self-stretch text-center text-4xl font-medium font-montserrat text-gray-900">{service.pricingTitle}</h2>
                        <div className="w-full grid md:grid-cols-2 gap-0 outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200">
                            {service.pricingPackages.map((pkg, index) => (
                                <div key={index} className="p-8 outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 flex flex-col justify-start items-center gap-6 group hover:bg-violet-800 transition-colors duration-300">
                                    <h3 className="self-stretch text-left text-2xl font-medium font-montserrat text-gray-900 group-hover:text-white transition-colors duration-300">{pkg.title}</h3>
                                    <div className="self-stretch h-full flex flex-col justify-between items-center gap-8">
                                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                            {pkg.features.map((feature, idx) => (
                                                <div key={idx} className="self-stretch justify-start items-center gap-3 inline-flex">
                                                    <div className="w-6 h-6 relative flex justify-center items-center flex-shrink-0 text-violet-600 group-hover:text-white transition-colors duration-300">
                                                        <FaCheck className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1 justify-start text-gray-600 text-sm font-normal font-montserrat group-hover:text-gray-100 transition-colors duration-300">{feature.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="self-stretch flex flex-col justify-start items-start gap-8">
                                            <div className="self-stretch h-px bg-gray-200 group-hover:bg-violet-700 transition-colors duration-300" />
                                            <div className="self-stretch inline-flex justify-end items-end gap-4">
                                                <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
                                                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                                        <div className="self-stretch justify-start text-gray-900 text-base font-medium font-montserrat group-hover:text-white transition-colors duration-300">Biaya Layanan</div>
                                                        <div className="self-stretch justify-start text-gray-900 text-xl font-medium font-montserrat group-hover:text-white transition-colors duration-300">{pkg.serviceFee}</div>
                                                    </div>
                                                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                                        <div className="self-stretch justify-start text-gray-900 text-base font-medium font-montserrat group-hover:text-white transition-colors duration-300">Biaya Ads</div>
                                                        <div className="self-stretch justify-start text-gray-900 text-xl font-medium font-montserrat group-hover:text-white transition-colors duration-300">{pkg.budgetAds}</div>
                                                    </div>
                                                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                                        <div className="self-stretch justify-start text-gray-900 text-base font-medium font-montserrat group-hover:text-white transition-colors duration-300">Total Harga</div>
                                                        <div className="self-stretch inline-flex justify-start items-end gap-2">
                                                            <div className="justify-start text-gray-900 text-2xl font-medium font-montserrat group-hover:text-white transition-colors duration-300">{pkg.totalPrice}</div>
                                                            <div className="justify-start text-gray-500 text-xl font-normal font-montserrat group-hover:text-gray-300 transition-colors duration-300">{pkg.period}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#contact" className="p-4 bg-gray-100 rounded-lg flex justify-center items-center gap-2.5 hover:bg-gray-200 group-hover:bg-white transition-colors duration-300">
                                                    <FaArrowRight className="w-5 h-5 text-violet-700" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Advantages Section */}
                <section id="advantages" className="bg-violet-800 py-24 text-white">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl font-semibold mb-6"
                                    dangerouslySetInnerHTML={{ __html: service.advantagesTitle }}
                                />
                                <p className="text-blue-100 leading-relaxed text-sm md:text-base mb-8 max-w-md">
                                    {service.advantagesDescription}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-8">KEUNTUNGAN menggunakan layanan {service.title} dari Kreasitech:</h3>
                                <ul className="space-y-6">
                                    {service.advantagesList.map((adv, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="mt-1 min-w-[24px] flex justify-center"><FaCheck className="text-xl opacity-90" /></div>
                                            <span className="text-sm md:text-base text-blue-50 font-light pt-0.5">{adv}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-28 bg-[#f4f4f7] text-center">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2
                            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
                            dangerouslySetInnerHTML={{ __html: service.ctaTitle }}
                        />
                        <p className="text-gray-500 mb-10 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                            {service.ctaDescription}
                        </p>
                        <a href="#contact" className="inline-flex px-8 py-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors">
                            <span className="text-gray-100 text-base font-medium font-montserrat">{service.ctaButtonText}</span>
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
