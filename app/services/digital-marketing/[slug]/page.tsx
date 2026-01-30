import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { digitalMarketingServices } from "@/app/data/digital-marketing-services";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import DigitalMarketingCTA from "@/app/components/services/digital-marketing/DigitalMarketingCTA";

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
        description: service.shortDescription,
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = digitalMarketingServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-[#F4F4F7] min-h-screen">
            <Navbar />
            <main>
                {/* Breadcrumb */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "#" },
                                { label: "Digital Marketing", href: "/services/digital-marketing" },
                                { label: service.title, href: `/services/digital-marketing/${service.slug}` },
                            ]}
                        />
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text Content */}
                        <div className="flex-1 flex flex-col gap-6 lg:gap-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-montserrat text-text-light leading-tight">
                                {service.title} <span className="text-violet-600 font-semibold">Services</span>
                            </h1>
                            <p className="text-gray-600 text-lg sm:text-xl font-normal font-montserrat leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <a
                                    href="#contact"
                                    className="px-8 py-4 bg-violet-600 text-white rounded-lg text-base font-medium font-montserrat hover:bg-violet-700 transition-colors"
                                >
                                    Consult Now
                                </a>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="flex-1 w-full max-w-[500px] lg:max-w-none flex justify-center items-center p-8 bg-orange-50 rounded-2xl">
                            <Image
                                src={service.image}
                                alt={`${service.title} Illustration`}
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Features & Benefits */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">

                        {/* Detailed Features */}
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light">
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                {service.detailedFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-semibold text-violet-600 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 font-montserrat leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light">
                                Why Choose Our {service.title}?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex flex-col gap-4 p-6 bg-white rounded-xl border-l-4 border-violet-500 shadow-sm">
                                        <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-800 font-medium font-montserrat">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                <DigitalMarketingCTA />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
