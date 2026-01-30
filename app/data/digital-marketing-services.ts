export interface ServiceFeature {
    title: string;
    description: string;
}

export interface DigitalMarketingService {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    icon?: string; // Optional specific icon if needed
    features: string[]; // For the grid card
    detailedFeatures: ServiceFeature[]; // For the detail page
    benefits: string[];
    priceStart?: string;
}

export const digitalMarketingServices: DigitalMarketingService[] = [
    {
        slug: "seo",
        title: "SEO",
        shortDescription: "Tingkatkan visibilitas website dan traffic organik Anda agar mudah ditemukan di Google tanpa biaya iklan yang besar.",
        description: "Search Engine Optimization (SEO) adalah strategi jangka panjang untuk memastikan website Anda muncul di halaman pertama pencarian Google untuk kata kunci yang relevan. Kami menggunakan teknik White-Hat SEO yang aman dan efektif.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbPeV9vrCsVLTRIfjhyhMWxhixceXHIrKrD_9YuOTYpwDF3i52IZTo5aW26eNDmJsZoj6b0IXbgydbauAIBU2RLla4i4y9d4H4-060Ir0CmfWKV9hiITDzuhNW3hTEZLPJqurvFQHLHOJTMi7D647XuOlZX5Wgud8AxNA6EUCny6paakq1OA_p8P7jQIgVUY044-5jO6tgdDgQrX3Ew27Tw-S8vGuRFSrg94RCotKa77kQLI_MTasHJnPbJmvcx7T6gxfjTZ6Z5Cc",
        features: [
            "Riset Keyword",
            "Pembuatan artikel SEO",
            "Setup & maintenance web",
            "Optimasi Berbasis Data & Laporan Bulanan"
        ],
        detailedFeatures: [
            { title: "Technical SEO", description: "Audit menyeluruh struktur website, kecepatan, dan mobile-friendliness." },
            { title: "On-Page SEO", description: "Optimasi konten, meta tags, heading, dan internal linking." },
            { title: "Off-Page SEO", description: "Strategi link building berkualitas untuk meningkatkan otoritas domain." },
            { title: "Local SEO", description: "Optimasi Google My Business agar mudah ditemukan pelanggan lokal." }
        ],
        benefits: [
            "Traffic organik yang stabil dan berkualitas",
            "Biaya pemasaran jangka panjang lebih efisien",
            "Meningkatkan kredibilitas dan kepercayaan brand",
            "ROI (Return on Investment) yang tinggi"
        ]
    },
    {
        slug: "ads",
        title: "Ads",
        shortDescription: "Jangkau lebih banyak calon pelanggan dengan strategi periklanan digital yang tertarget.",
        description: "Layanan periklanan digital kami mencakup Google Ads (SEM), Facebook Ads, Instagram Ads, dan platform lainnya. Kami menargetkan audiens yang tepat di saat yang tepat untuk menghasilkan konversi maksimal.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX-QV7IJP0pTQulGKKIPNZ1cB1ImC50bzuDNe75SHG8TPuXPpwx1K33qnAXcpZW1r4SpEbXluTIFsSObNxqxHs6yWxE4vKTmWWcvxEcKtZs4cREgVRaYvqJx7H6T6a53EMTgpspPsAwU-mHuL-rxEKm9WJywPTNf3_Qfdk4CCSXRfE6io3JEYyYGalT5tSXaiNJGrQ3vI8v7NKpCftPcBpmsZ_RM-P1Ck-Y6PxZGMVxTqXFgvT1VqoNNAIrOgjXQN5Ces8RGbhNYw",
        features: [
            "Riset",
            "Penulisan Konten",
            "Desain Visual",
            "Report Bulanan"
        ],
        detailedFeatures: [
            { title: "Campaign Setup", description: "Struktur kampanye yang efisien untuk memaksimalkan budget." },
            { title: "Audience Targeting", description: "Menargetkan demografi, minat, dan perilaku yang spesifik." },
            { title: "A/B Testing", description: "Menguji berbagai variasi iklan untuk menemukan performa terbaik." },
            { title: "Conversion Tracking", description: "Pelacakan akurat untuk setiap lead atau penjualan yang masuk." }
        ],
        benefits: [
            "Hasil instan dan terukur",
            "Kontrol penuh atas budget harian",
            "Targeting yang sangat spesifik",
            "Remarketing untuk menjangkau pengunjung lama"
        ]
    },
    {
        slug: "press-release",
        title: "Press Release",
        shortDescription: "Tingkatkan kredibilitas dan eksposur brand Anda melalui publikasi di media terpercaya.",
        description: "Kami membantu mendistribusikan berita bisnis Anda ke berbagai media nasional dan lokal terkemuka. Layanan ini sangat efektif untuk membangun reputasi, launching produk, atau klarifikasi isu.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDst4rSoagCdQW-qxqxv5BlRcKvtmOny1mNZRqfQ81gSezOS9Ttquo_xMXm7J1qEE4ibkBeFh88BOVIxVXLmW6y0Xbh2ziZaeQLNgQtEyy7qht4BSGmeCGLsFV5SzcJXCEEfjmYq-_b6PJAq9mWkz6gZnqC1Dv5Blfvi0XsgEdWqQfbgFblot5k7wUAOBM0YvCsAhA_eLakoPEpdVcvjYUsSzd5XxKkJ8fqmj0khnSxvessNEg3gfNlXJEfEtjZKmM1LpF6WgRGww",
        features: [
            "Riset",
            "Penulisan Konten",
            "Desain Visual",
            "Report Bulanan"
        ],
        detailedFeatures: [
            { title: "Copywriting Jurnalistik", description: "Penulisan rilis dengan gaya bahasa media yang profesional." },
            { title: "Media Relations", description: "Akses ke jaringan editor media nasional terpercaya." },
            { title: "Guaranteed Publish", description: "Jaminan terbit di media yang dipilih sesuai paket." },
            { title: "Media Monitoring", description: "Laporan lengkap beserta link berita yang telah tayang." }
        ],
        benefits: [
            "Membangun kredibilitas dan trust",
            "Mendapatkan backlink berkualitas dari media besar",
            "Meningkatkan brand awareness secara luas",
            "Dokumentasi digital yang positif untuk brand"
        ]
    },
    {
        slug: "backlink",
        title: "Backlink",
        shortDescription: "Tingkatkan otoritas website Anda dengan backlink berkualitas dari situs terpercaya.",
        description: "Layanan backlink kami fokus pada kualitas, bukan sekadar kuantitas. Kami menyediakan backlink content placement dari website dengan Domain Authority (DA) tinggi yang relevan dengan niche bisnis Anda.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7l4tAiuO-rDVTWvGEXt454BPvQ4Q5nYKrG-Kul12xHkOMcF15A0ETlyJ33yXScDaIcynswA_61maEFZBgnp8rV7470R6suWDTVD6UPGk4pJl9N9qdBFRbHx8zbMwlrPvLUm4EcOzi9KvuJh0k2AunwRorLkp3x-XCGYfNPR6ixFZKSKIXMzqC-8Rie91AcdUPwNlg8S-Y0iK3tiUDixOKyOt0sBhDm2QSDkhRTHbVgwSsUSV8CNNIXapS19rD55-soFmJFgs5nQo",
        features: [
            "Riset",
            "Penulisan Konten",
            "Desain Visual",
            "Report Bulanan"
        ],
        detailedFeatures: [
            { title: "High DA/PA Sites", description: "Backlink dari website dengan otoritas tinggi." },
            { title: "Contextual Links", description: "Link ditanam secara natural di dalam artikel yang relevan." },
            { title: "Dofollow Links", description: "Mayoritas link bersifat dofollow untuk passing juice SEO maksimal." },
            { title: "Safety First", description: "Aman dari algoritma Google Penguin (anti-spam)." }
        ],
        benefits: [
            "Mendongkrak ranking keyword di Google",
            "Meningkatkan Domain Authority (DA) website",
            "Mendatangkan traffic referral",
            "Investasi aset digital jangka panjang"
        ]
    }
];
