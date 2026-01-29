import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/landing/Hero";
import Services from "@/app/components/landing/Services";
import OurProduct from "@/app/components/landing/OurProduct2";
import WhyUs from "@/app/components/landing/WhyUs3";
import Testimonials from "@/app/components/landing/Testimonials";
import Portfolio from "@/app/components/landing/Portfolio3";
import ArticleSection from "@/app/components/landing/ArticleSection";
import CallToAction from "@/app/components/landing/CallToAction";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";
import LandingAbout from "@/app/components/landing/LandingAbout";

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
