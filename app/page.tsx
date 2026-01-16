import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurProduct from "@/components/OurProduct";
import WhyUs from "@/components/WhyUs";
import HiringProcess from "@/components/HiringProcess";
import AfterYouHire from "@/components/AfterYouHire";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Workflow from "@/components/Workflow";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-background-light text-text-light font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <OurProduct />
      <WhyUs />
      <HiringProcess />
      <AfterYouHire />
      <Testimonials />
      <Portfolio />
      <Workflow />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
