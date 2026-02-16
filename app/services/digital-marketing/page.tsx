import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import DigitalMarketingHero from "@/components/services/digital-marketing/DigitalMarketingHero";
import ServicesSections from "@/components/services/digital-marketing/ServicesSections";
import ProcessSection from "@/components/services/digital-marketing/ProcessSection";
import OutcomeSection from "@/components/services/digital-marketing/OutcomeSection";
import DigitalMarketingCTA from "@/components/services/digital-marketing/DigitalMarketingCTA";

export const metadata = {
    title: "Digital Marketing - Kreasitech",
    description: "Bangun citra profesional untuk brand Anda dengan layanan digital marketing KreasiTech. SEO, Google Ads, Backlink, dan Press Release.",
};

export default function DigitalMarketingPage() {
    return (
        <div className="min-h-screen">
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
                <ServicesSections />
                <ProcessSection />
                <OutcomeSection />
                <DigitalMarketingCTA />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

