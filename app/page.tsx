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
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import LandingAbout from "@/components/landing/LandingAbout";

export default function Home() {
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
        <ArticleSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
