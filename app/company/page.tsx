import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/company/CompanyHero";
import ContentSection from "@/components/company/ContentSection";
import MissionSection from "@/components/company/MissionSection";
import TimelineSection from "@/components/company/TimelineSection";
import TeamSection from "@/components/company/TeamSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/company/CTASection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tentang Kami",
    description: "Pelajari lebih lanjut tentang misi Kreasitech dalam menghubungkan pendidikan, karier, dan industri melalui teknologi.",
    openGraph: {
        title: "Tentang Kami - Kreasitech",
        description: "Kenali lebih dekat Kreasitech sebagai partner teknologi Anda. Visi kami menghubungkan talenta terbaik dengan inovasi teknologi.",
    }
};

export default function CompanyPage() {
    return (
        <div className="bg-[#F4F4F7] text-gray-800 transition-colors duration-300">
            <Navbar />
            <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                { label: "Home", href: "/" },
                { label: "Perusahaan", href: "#" },
                { label: "Tentang Kami", href: "/company" }
            ]} />
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
            <CTASection />
            <Footer />
        </div>
    );
}

