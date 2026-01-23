import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SoftwareDevHero from "@/app/components/services/software-development/SoftwareDevHero";
import SolutionGrid from "@/app/components/services/software-development/SolutionGrid";
import WorkflowSection from "@/app/components/services/software-development/WorkflowSection";
import MethodologySection from "@/app/components/services/software-development/MethodologySection";
import RelatedJobsSection from "@/app/components/services/software-development/RelatedJobsSection";
import Breadcrumb from "@/app/components/services/software-development/Breadcrumb";
import TalentCTA from "@/app/components/services/software-development/TalentCTA";

export default function SoftwareDevelopmentPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Navbar />
            <main>
                <Breadcrumb />
                <SoftwareDevHero />
                <SolutionGrid />
                <WorkflowSection />
                <MethodologySection />
                <RelatedJobsSection />
                <TalentCTA />
            </main>
            <Footer />
        </div>
    );
}
