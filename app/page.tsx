import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import OurProduct from "@/app/components/OurProduct";
import WhyUs from "@/app/components/WhyUs3";
import Testimonials from "@/app/components/Testimonials";
import Portfolio from "@/app/components/Portfolio3";
import Workflow from "@/app/components/Workflow";
import CallToAction from "@/app/components/CallToAction";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ContentSection from "@/app/components/company/ContentSection";

export default function Home() {
  return (
    <div className="bg-background-light text-text-light font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <ContentSection title="Tentang Kami" className="bg-white">
        <p>
          Kreasitech adalah perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital. Berangkat dari semangat <span className="text-violet-600 font-medium">"Where Talent Meets Technology"</span> kami mencetak, mengembangkan, dan menyalurkan talenta siap kerja melalui layanan pelatihan, outsourcing, dan pengembangan produk digital.
        </p>
      </ContentSection>
      <WhyUs />
      <Services />
      <OurProduct />
      <Portfolio />
      <Workflow />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
