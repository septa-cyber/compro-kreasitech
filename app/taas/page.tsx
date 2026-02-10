"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import TaaSHero from "@/components/taas/TaaSHero";
import TaaSEngagementModel from "@/components/taas/TaaSEngagementModel";
import TaaSDeliveryModel from "@/components/taas/TaaSDeliveryModel";
import TaaSPlacementModel from "@/components/taas/TaaSPlacementModel";
import TaaSDifferentiators from "@/components/taas/TaaSDifferentiators";
import TaaSBenefits from "@/components/taas/TaaSBenefits";
import TaaSTalentRoles from "@/components/taas/TaaSTalentRoles";
import TaaSTestimonials from "@/components/taas/TaaSTestimonials";
import TaaSCTA from "@/components/taas/TaaSCTA";

export default function TaaSPage() {
    return (
        <div className="bg-[#F4F4F7] text-gray-800 font-sans antialiased transition-colors duration-200">
            <Navbar />
            <Breadcrumb
                className="px-4 sm:px-6 lg:px-8"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Layanan", href: "#" },
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
            <TaaSTestimonials />
            <TaaSCTA />

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

