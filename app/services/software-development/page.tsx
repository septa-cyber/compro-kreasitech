import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SoftwareDevHero from "@/app/components/services/software-development/SoftwareDevHero";
import SolutionGrid from "@/app/components/services/software-development/SolutionGrid";
import WorkflowSection from "@/app/components/services/software-development/WorkflowSection";
import MethodologySection from "@/app/components/services/software-development/MethodologySection";
import RelatedJobsSection from "@/app/components/services/software-development/RelatedJobsSection";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import TalentCTA from "@/app/components/services/software-development/TalentCTA";
import Workflow from "@/app/components/landing/Workflow";
import TechStack from "@/app/components/services/software-development/TechStack";

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
                <RelatedJobsSection />
                <TalentCTA />
            </main>
            <Footer />
        </div>
    );
}
