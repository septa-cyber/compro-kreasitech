import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import OurProduct from "@/app/components/OurProduct";
import WhyUs from "@/app/components/WhyUs";
import HiringProcess from "@/app/components/HiringProcess";
import AfterYouHire from "@/app/components/AfterYouHire";
import Testimonials from "@/app/components/Testimonials";
import Portfolio from "@/app/components/Portfolio";
import Workflow from "@/app/components/Workflow";
import CallToAction from "@/app/components/CallToAction";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-background-light text-text-light font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <OurProduct />
      <HiringProcess />
      <AfterYouHire />
      <Testimonials />
      <Portfolio />
      <Workflow />
      <WhyUs />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
