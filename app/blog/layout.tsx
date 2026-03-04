import { Metadata } from "next";
import { getSiteSettings } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();
    const siteTitle = settings.site_title || "Kreasitech";

    return {
        title: `Artikel & Insight - ${siteTitle}`,
        description: `Baca artikel terbaru seputar teknologi, bisnis digital, dan inovasi terbaru dari ${siteTitle}.`,
    };
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
