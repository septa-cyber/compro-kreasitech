import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import { getSiteSettings } from "@/lib/db";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import { Plus_Jakarta_Sans, Montserrat, Outfit, Inter } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings.site_title || "Kreasitech";
  const desc = settings.site_description || "Kreasitech menghubungkan pendidikan, karier, dan industri melalui inovasi digital. Layanan: Software Development, Digital Marketing, dan Talent Management.";

  return {
    metadataBase: new URL("https://kreasitech.com"),
    title: {
      default: `${title} | ${settings.site_description || 'Where Talent Meets Technology'}`,
      template: `%s | ${title}`
    },
    description: desc,
    keywords: ["Software Development", "Digital Marketing", "IT Outsourcing", "Talent Management", title, "Web Development", "Mobile App"],
    authors: [{ name: `${title} Team` }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${title} | ${settings.site_description || 'Connecting Education, Career, and Business'}`,
      description: desc,
      url: "https://kreasitech.com",
      siteName: title,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/assets/images/og-image.jpg", // Ensure this image exists or is replaced
          width: 1200,
          height: 630,
          alt: "Kreasitech - Where Talent Meets Technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${settings.site_description || 'Where Talent Meets Technology'}`,
      description: desc,
      images: ["/assets/images/og-image.jpg"],
      creator: `@kreasitech`,
    },
    alternates: {
      canonical: "/",
      languages: {
        'id-ID': '/',
      },
    },
    icons: settings.favicon ? {
      icon: settings.favicon,
      shortcut: settings.favicon,
      apple: settings.favicon,
    } : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const sameAsLinks = [];
  if (settings.facebook) sameAsLinks.push(settings.facebook);
  if (settings.instagram) sameAsLinks.push(settings.instagram);
  if (settings.linkedin) sameAsLinks.push(settings.linkedin);
  if (settings.twitter) sameAsLinks.push(settings.twitter);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": settings.site_title || "Kreasitech",
    "url": "https://kreasitech.com",
    "logo": settings.logo ? `https://kreasitech.com${settings.logo}` : "https://kreasitech.com/assets/images/Logo.svg",
    "sameAs": sameAsLinks.length > 0 ? sameAsLinks : [
      "https://www.facebook.com/kreasitech",
      "https://www.instagram.com/kreasitech",
      "https://www.linkedin.com/company/kreasitech"
    ],
    "description": settings.site_description || "Perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": settings.address || "Jakarta",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": settings.phone || "+62-888-8088-877",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${montserrat.variable} ${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased"
      >
        <SettingsProvider initialSettings={settings}>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: '14px',
                borderRadius: '12px',
                padding: '12px 16px',
              },
              success: {
                style: { background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' },
                iconTheme: { primary: '#22c55e', secondary: '#f0fdf4' },
              },
              error: {
                style: { background: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca' },
                iconTheme: { primary: '#ef4444', secondary: '#fef2f2' },
              },
            }}
          />
          {children}
          <WhatsAppButton whatsappUrl={settings.whatsapp} />
        </SettingsProvider>
      </body>
    </html>
  );
}
