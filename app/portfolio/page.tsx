import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PortfolioHero from "@/app/components/portfolio/PortfolioHero";
import FeaturedShowcase from "@/app/components/portfolio/FeaturedShowcase";
import NewestProjects from "@/app/components/portfolio/NewestProjects";
import IdeaCTA from "@/app/components/portfolio/IdeaCTA";
import PortfolioTestimonials from "@/app/components/portfolio/PortfolioTestimonials";
import WorkCTA from "@/app/components/portfolio/WorkCTA";

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
