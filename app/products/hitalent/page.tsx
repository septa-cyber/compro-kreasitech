"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HiTalentHero from "@/components/products/hitalent/HiTalentHero";
import HiTalentAbout from "@/components/products/hitalent/HiTalentAbout";
import HiTalentFeatures from "@/components/products/hitalent/HiTalentFeatures";
import HiTalentBenefits from "@/components/products/hitalent/HiTalentBenefits";
import HiTalentCTA from "@/components/products/hitalent/HiTalentCTA";
import HiTalentTestimonials from "@/components/products/hitalent/HiTalentTestimonials";
import HiTalentTools from "@/components/products/hitalent/HiTalentTools";
import Breadcrumb from "@/components/ui/Breadcrumb";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function HiTalentPage() {
    return (
        <div className="bg-[#F4F4F7] text-gray-800 font-sans antialiased transition-colors duration-200">
            <Navbar />
            <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "#" },
                { label: "HiTalent", href: "/products/hitalent" }
            ]} />
            <HiTalentHero />
            <HiTalentAbout />
            <HiTalentFeatures />
            <HiTalentBenefits />
            <HiTalentCTA />
            <HiTalentTestimonials />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
