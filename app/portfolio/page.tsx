import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import FeaturedShowcase from "@/components/portfolio/FeaturedShowcase";
import WorkCTA from "@/components/portfolio/WorkCTA";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio Proyek Digital",
    description: "Lihat berbagai proyek sukses Kreasitech dalam pengembangan website, aplikasi mobile, dan sistem kustom untuk berbagai industri.",
};

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

