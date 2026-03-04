import { Metadata } from "next";
import { getSiteSettings } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();
    const siteTitle = settings.site_title || "Kreasitech";

    return {
        title: `HiTalent - ${siteTitle}`,
        description: `Platform manajemen talenta terbaik dari ${siteTitle} untuk monitoring dan evaluasi tim IT Anda secara efisien.`,
    };
}

export default function HiTalentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
