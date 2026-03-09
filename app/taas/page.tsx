import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TaaSHero from "@/components/taas/TaaSHero";
import TaaSEngagementModel from "@/components/taas/TaaSEngagementModel";
import TaaSDeliveryModel from "@/components/taas/TaaSDeliveryModel";
import TaaSPlacementModel from "@/components/taas/TaaSPlacementModel";
import TaaSDifferentiators from "@/components/taas/TaaSDifferentiators";
import TaaSBenefits from "@/components/taas/TaaSBenefits";
import TaaSTalentRoles from "@/components/taas/TaaSTalentRoles";
import TaaSCTA from "@/components/taas/TaaSCTA";
import { getTestimonials } from "@/lib/db";
import { Metadata } from 'next';
import Testimonials from "@/components/landing/Testimonials";

export const metadata: Metadata = {
    title: "Talent as a Service (TaaS)",
    description: "Dapatkan akses ke talenta teknologi dan digital terbaik untuk proyek Anda. Model kerjasama fleksibel: Staffing, Headhunting, dan Internship.",
};

export default async function TaaSPage() {
    const testimonials = await getTestimonials('visible');
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kreasitech.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Talent as a Service",
                "item": "https://kreasitech.com/taas"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Apa itu Talent as a Service (TaaS) di Kreasitech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TaaS adalah layanan penyediaan talenta IT & digital yang telah melalui kurasi teknis untuk membantu bisnis mengakses profesional berkualitas sesuai kebutuhan proyek."
                }
            },
            {
                "@type": "Question",
                "name": "Apa saja model kerja yang ditawarkan Kreasitech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kami menawarkan pilihan penempatan onsite, remote, atau hybrid sesuai kebutuhan klien, dengan skema biaya transparan."
                }
            },
            {
                "@type": "Question",
                "name": "Mengapa memilih talenta teknologi dari Kreasitech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Karena talenta kami dibekali training berkelanjutan melalui Academy, manajemen terpusat (payroll, BPJS), dan evaluasi rutin untuk menjaga kualitas."
                }
            }
        ]
    };

    return (
        <div className="antialiased transition-colors duration-200 bg-[#F4F4F7]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Navbar />
            <Breadcrumb
                className="px-4 sm:px-6 lg:px-8"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "#" },
                    { label: "Talent as a Service", href: "/taas" }
                ]}
            />

            <TaaSHero />
            <TaaSEngagementModel />
            <TaaSDeliveryModel />
            <TaaSPlacementModel />
            <TaaSDifferentiators />
            <TaaSBenefits />
            <TaaSTalentRoles />
            <Testimonials category="Talent As a Service" />
            <TaaSCTA />

            <Footer />
        </div>
    );
}

