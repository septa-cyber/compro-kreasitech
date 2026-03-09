import { Metadata } from "next";
import { getSiteSettings, getArticles } from "@/lib/db";
import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import OurProduct from "@/components/landing/OurProduct2";
import WhyUs from "@/components/landing/WhyUs3";
import Testimonials from "@/components/landing/Testimonials";
import Portfolio from "@/components/landing/Portfolio3";
import ArticleSection from "@/components/landing/ArticleSection";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/Footer";
import LandingAbout from "@/components/landing/LandingAbout";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteTitle = settings.site_title || "Kreasitech";
  const siteTagline = settings.site_tagline || "Solusi Teknologi & Pengembangan Talenta Digital";

  return {
    title: `${siteTitle} - ${siteTagline}`,
    description: settings.site_description || "Kreasitech adalah partner terpercaya untuk pengembangan perangkat lunak, IT staffing (TaaS), dan pelatihan talenta digital (Academy) di Indonesia.",
  };
}

export default async function Home() {
  const articles = await getArticles('publish');

  return (
    <div className="bg-background-light text-text-light font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <LandingAbout />
        <WhyUs />
        <Services />
        <OurProduct />
        <Portfolio />
        <ArticleSection articles={articles} />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

