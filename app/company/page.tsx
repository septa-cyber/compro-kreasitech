import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CompanyHero from "@/app/components/company/CompanyHero";
import ContentSection from "@/app/components/company/ContentSection";
import MissionSection from "@/app/components/company/MissionSection";
import TimelineSection from "@/app/components/company/TimelineSection";
import TeamSection from "@/app/components/company/TeamSection";
import CallToAction from "@/app/components/company/CTASection";
import Breadcrumb from "@/app/components/company/Breadcrumb";
import CTASection from "@/app/components/company/CTASection";
import InternSection from "@/app/components/company/InternSection";

export default function CompanyPage() {
    return (
        <div className="bg-background-light text-gray-800 transition-colors duration-300">
            <Navbar />
            <Breadcrumb />
            <CompanyHero />
            <ContentSection title="Tentang Kami" className="bg-white">
                <p>
                    Kreasitech adalah perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital. Berangkat dari semangat <span className="text-violet-600 font-medium">"Where Talent Meets Technology"</span> kami mencetak, mengembangkan, dan menyalurkan talenta siap kerja melalui layanan pelatihan, outsourcing, dan pengembangan produk digital.
                </p>
                <p>
                    Melalui ekosistem kami yang terintegrasi, mulai dari pengembangan skill (training & bootcamp), penyaluran tenaga kerja (hiring partner), hingga layanan pengembangan teknologi dan digital marketing, Kreasitech membantu setiap individu dan organisasi untuk bertumbuh bersama, menuju masa depan yang lebih cerdas dan terkoneksi.
                </p>
            </ContentSection>
            <ContentSection title="Visi" className="bg-[#F4F4F7]">
                <p>
                    Menjadi ekosistem digital terdepan yang menghubungkan edukasi, talenta, dan industri melalui teknologi.
                </p>
            </ContentSection>
            <MissionSection />
            <TimelineSection />
            <TeamSection />
            <InternSection />
            <CTASection />
            <Footer />
        </div>
    );
}

