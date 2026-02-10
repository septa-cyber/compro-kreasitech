import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kreasitech.com"), // Placeholder URL, should be updated with actual domain
  title: {
    default: "Kreasitech | Where Talent Meets Technology",
    template: "%s | Kreasitech"
  },
  description: "Kreasitech menghubungkan pendidikan, karier, dan industri melalui inovasi digital. Layanan: Software Development, Digital Marketing, dan Talent Management.",
  keywords: ["Software Development", "Digital Marketing", "IT Outsourcing", "Talent Management", "Kreasitech", "Web Development", "Mobile App"],
  authors: [{ name: "Kreasitech Team" }],
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
    title: "Kreasitech | Connecting Education, Career, and Business",
    description: "Solusi teknologi komprehensif untuk bisnis Anda. Dari pengembangan aplikasi hingga manajemen talenta digital.",
    url: "https://kreasitech.com",
    siteName: "Kreasitech",
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
    title: "Kreasitech | Where Talent Meets Technology",
    description: "Solusi teknologi komprehensif untuk bisnis Anda. Dari pengembangan aplikasi hingga manajemen talenta digital.",
    images: ["/assets/images/og-image.jpg"],
    creator: "@kreasitech", // Placeholder
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kreasitech",
    "url": "https://kreasitech.com",
    "logo": "https://kreasitech.com/assets/images/Logo.svg",
    "sameAs": [
      "https://www.facebook.com/kreasitech",
      "https://www.instagram.com/kreasitech",
      "https://www.linkedin.com/company/kreasitech"
    ],
    "description": "Perusahaan teknologi yang menghubungkan dunia pendidikan, karier, dan industri melalui inovasi digital.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-888-8088-877",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{
          '--font-sans': "'Plus Jakarta Sans', sans-serif",
          '--font-montserrat': "'Montserrat', sans-serif",
          '--font-outfit': "'Outfit', sans-serif",
          '--font-inter': "'Inter', sans-serif",
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}


