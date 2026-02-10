import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FeaturedShowcase from "@/components/portfolio/FeaturedShowcase";
import NewestProjects from "@/components/portfolio/NewestProjects";
import IdeaCTA from "@/components/portfolio/IdeaCTA";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";
import WorkCTA from "@/components/portfolio/WorkCTA";

export default function PortfolioPage() {
    return (
        <div className="bg-[#F4F4F7] text-gray-900 font-sans transition-colors duration-300 antialiased overflow-x-hidden">
            <Navbar />

            <PortfolioHero />
            <FeaturedShowcase />
            <WorkCTA />

            <Footer />
        </div>
    );
}

