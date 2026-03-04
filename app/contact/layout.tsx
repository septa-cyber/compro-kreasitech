import { Metadata } from "next";
import { getSiteSettings } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();
    const siteTitle = settings.site_title || "Kreasitech";

    return {
        title: `Kontak Kami - ${siteTitle}`,
        description: "Hubungi tim Kreasitech untuk konsultasi proyek, pertanyaan umum, atau peluang kerja sama. Kami siap membantu solusi teknologi Anda.",
    };
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
