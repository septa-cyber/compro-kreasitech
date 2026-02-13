import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/company/CompanyHero";
import VisionMissionSection from "@/components/company/VisionMissionSection";
import CompanyAbout from "@/components/company/CompanyAbout";
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
            <CompanyAbout />
            <VisionMissionSection />
            <TimelineSection />
            <TeamSection />
            <CTASection />
            <Footer />
        </div>
    );
}


