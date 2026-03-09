import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactAcademyHero from "@/components/products/impact-academy/ImpactAcademyHero";
import ImpactAcademyWhy from "@/components/products/impact-academy/ImpactAcademyWhy";
import ImpactAcademyProgram from "@/components/products/impact-academy/ImpactAcademyProgram";
import ImpactAcademyFlow from "@/components/products/impact-academy/ImpactAcademyFlow";
import ImpactAcademyCourses from "@/components/products/impact-academy/ImpactAcademyCourses";
import Testimonials from "@/components/landing/Testimonials";
import ImpactAcademyCTA from "@/components/products/impact-academy/ImpactAcademyCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getSiteSettings } from "@/lib/db";

export async function generateMetadata() {
    const settings = await getSiteSettings();
    const siteTitle = settings.site_title || "Kreasitech";

    return {
        title: `Impact Academy - ${siteTitle}`,
        description: "Program pengembangan kompetensi teknologi dan non-teknologi untuk mahasiswa dan profesional.",
    };
}

export default function AcademyPage() {
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
                "name": "Academy",
                "item": "https://kreasitech.com/academy"
            }
        ]
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Apa itu Kreasi Space (Impact Academy)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Impact Academy adalah inisiatif sosial dari Kreasitech yang fokus pada pemberdayaan talenta disabilitas melalui pelatihan keterampilan digital."
                }
            },
            {
                "@type": "Question",
                "name": "Apa saja fokus program di Impact Academy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Program kami meliputi pengembangan skill digital, pelatihan kesiapan kerja, serta program magang dan penempatan kerja untuk talenta difabel."
                }
            }
        ]
    };

    return (
        <div className="bg-[#F4F4F7] min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Navbar />

            <main>
                <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                    { label: "Home", href: "/" },
                    { label: "Academy", href: "#" },
                    { label: "Kreasi Space", href: "/academy" }
                ]} />
                <ImpactAcademyHero />
                <ImpactAcademyWhy />
                <ImpactAcademyProgram />
                <ImpactAcademyFlow />
                <ImpactAcademyCourses />
                <ImpactAcademyCTA />
                <Testimonials category="Kreasi Space" />
            </main>

            <Footer />
        </div>
    );
}

