import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CompanyHero from "@/app/components/company/CompanyHero";
import ContentSection from "@/app/components/company/ContentSection";
import MissionSection from "@/app/components/company/MissionSection";
import TimelineSection from "@/app/components/company/TimelineSection";
import TeamSection from "@/app/components/company/TeamSection";
import CTASection from "@/app/components/company/CTASection";
import Breadcrumb from "@/app/components/company/Breadcrumb";

export default function CompanyPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <Navbar />
            <Breadcrumb />
            <CompanyHero />
            <ContentSection title="About Us">
                <p>
                    Kreasitech adalah perusahaan teknologi yang membangun jembatan antara dunia pendidikan, karier, dan bisnis melalui inovasi digital. Berangkat dari semangat <span className="text-primary font-medium">"Where Talent Meets Technology"</span>, Kreasitech hadir sebagai mitra strategis bagi sekolah, kampus, pelatihan, dan perusahaan untuk mencetak, mengembangkan, dan menyalurkan talenta yang siap bersaing di era digital.
                </p>
                <p>
                    Melalui ekosistem kami yang terintegrasi, mulai dari pengembangan skill (training & bootcamp), penyaluran tenaga kerja (hiring partner), hingga layanan pengembangan teknologi dan digital marketing, Kreasitech membantu setiap individu dan organisasi untuk bertumbuh bersama, menuju masa depan yang lebih cerdas dan terkoneksi.
                </p>
            </ContentSection>
            <ContentSection title="Our Vision" className="bg-background-gray dark:bg-background-dark-card">
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

