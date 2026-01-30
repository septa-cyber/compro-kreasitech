import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";
import DigitalMarketingHero from "@/app/components/services/digital-marketing/DigitalMarketingHero";
import ServicesGrid from "@/app/components/services/digital-marketing/ServicesGrid";
import ProcessSection from "@/app/components/services/digital-marketing/ProcessSection";
import OutcomeSection from "@/app/components/services/digital-marketing/OutcomeSection";
import DigitalMarketingCTA from "@/app/components/services/digital-marketing/DigitalMarketingCTA";

export const metadata = {
    title: "Digital Marketing - Kreasitech",
    description: "Bangun citra profesional untuk brand Anda dengan layanan digital marketing KreasiTech. SEO, Google Ads, Backlink, dan Press Release.",
};

export default function DigitalMarketingPage() {
    return (
        <div className="bg-[#F4F4F7] min-h-screen">
            <Navbar />
            <main>
                <Breadcrumb
                    className="px-4 sm:px-6 lg:px-8"
                    items={[
                        { label: "Beranda", href: "/" },
                        { label: "Layanan", href: "#" },
                        { label: "Digital Marketing", href: "/services/digital-marketing" }
                    ]}
                />
                <DigitalMarketingHero />
                <ServicesGrid />
                <ProcessSection />
                <OutcomeSection />
                <DigitalMarketingCTA />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
