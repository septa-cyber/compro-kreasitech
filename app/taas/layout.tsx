import { Metadata } from "next";
import { getSiteSettings } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();
    const siteTitle = settings.site_title || "Kreasitech";

    return {
        title: `Talent As a Service - ${siteTitle}`,
        description: `Solusi rekrutmen talenta digital profesional dan berpengalaman untuk kebutuhan bisnis Anda di ${siteTitle}.`,
    };
}

export default function TaasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
