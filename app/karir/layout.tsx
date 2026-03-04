import { Metadata } from "next";
import { getSiteSettings } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();
    const siteTitle = settings.site_title || "Kreasitech";

    return {
        title: `Lowongan Kerja - ${siteTitle}`,
        description: `Temukan peluang karir terbaik di ${siteTitle}. Bergabunglah dengan tim kami dan kembangkan potensi Anda.`,
    };
}

export default function KarirLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
