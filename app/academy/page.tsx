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

export const metadata = {
    title: "Impact Academy - KreasiTech",
    description: "Program pengembangan kompetensi teknologi dan non-teknologi untuk mahasiswa dan profesional.",
};

export default function AcademyPage() {
    return (
        <div className="bg-[#F4F4F7] min-h-screen">
            <Navbar />

            <main>
                <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                    { label: "Home", href: "/" },
                    { label: "Academy", href: "#" },
                    { label: "Impact Academy", href: "/academy" }
                ]} />
                <ImpactAcademyHero />
                <ImpactAcademyWhy />
                <ImpactAcademyProgram />
                <ImpactAcademyFlow />
                <ImpactAcademyCourses />
                <ImpactAcademyCTA />
                <Testimonials />
            </main>

            <Footer />
        </div>
    );
}

