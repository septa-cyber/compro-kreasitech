import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareDevHero from "@/components/services/software-development/SoftwareDevHero";
import SolutionGrid from "@/components/services/software-development/SolutionGrid";
import MethodologySection from "@/components/services/software-development/MethodologySection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TalentCTA from "@/components/services/software-development/TalentCTA";
import Workflow from "@/components/landing/Workflow";
import TechStack from "@/components/services/software-development/TechStack";

export default function SoftwareDevelopmentPage() {
    return (
        <div className="bg-[#F4F4F7] min-h-screen">
            <Navbar />
            <main>
                <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "#" },
                    { label: "Software Development", href: "/services/software-development" }
                ]} />
                <SoftwareDevHero />
                <SolutionGrid />
                <TechStack />
                <Workflow />
                <MethodologySection />
                <TalentCTA />
            </main>
            <Footer />
        </div>
    );
}
