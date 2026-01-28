"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HiTalentHero from "@/app/components/products/hitalent/HiTalentHero";
import HiTalentAbout from "@/app/components/products/hitalent/HiTalentAbout";
import HiTalentFeatures from "@/app/components/products/hitalent/HiTalentFeatures";
import HiTalentBenefits from "@/app/components/products/hitalent/HiTalentBenefits";
import HiTalentCTA from "@/app/components/products/hitalent/HiTalentCTA";
import HiTalentTestimonials from "@/app/components/products/hitalent/HiTalentTestimonials";
import HiTalentTools from "@/app/components/products/hitalent/HiTalentTools";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";

export default function HiTalentPage() {
    return (
        <div className="bg-[#F8F9FC] text-gray-800 font-sans antialiased transition-colors duration-200">
            <Navbar />
            <main>
                <HiTalentHero />
                <HiTalentAbout />
                <HiTalentFeatures />
                <HiTalentBenefits />
                <HiTalentCTA />
                <HiTalentTestimonials />
                <HiTalentTools />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
