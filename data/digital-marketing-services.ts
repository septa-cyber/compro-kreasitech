import { IconType } from "react-icons";
import { FaStar, FaMobileScreenButton, FaScrewdriverWrench, FaChartColumn, FaRegCommentDots } from "react-icons/fa6";

export interface ProcessStep {
    iconName: string; // We'll map string to icon component in the page
    title: string;
}

export interface FeatureItem {
    name: string;
    iconName: string;
}

export interface PricingPackage {
    title: string;
    features: FeatureItem[];
    serviceFee: string;
    budgetAds: string;
    totalPrice: string;
    period: string; // e.g. "/ bulan"
}

export interface DigitalMarketingService {
    slug: string;
    title: string;
    heroTitle: string; // e.g., "Precision <span...>Ads</span> Solutions"
    heroDescription: string;
    heroImage1: string; // Main image
    heroImage2: string; // Secondary/Small image 1
    heroImage3: string; // Secondary/Small image 2

    processSteps: ProcessStep[];
    cardFeatures: string[]; // For the main page grid

    pricingTitle: string;
    pricingPackages: PricingPackage[];

    advantagesTitle: string; // e.g. "Boost Profits with..."
    advantagesDescription: string;
    advantagesList: string[];

    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
}


export const digitalMarketingServices: DigitalMarketingService[] = [
    {
        slug: "seo",
        // ... (title, hero props same)
        title: "SEO",
        heroTitle: "Dominasi <span class='text-secondary'>Google</span> <br/>Ranking #1",
        heroDescription: "Tingkatkan trafik organik dan kredibilitas bisnis Anda dengan teknik SEO White-Hat yang teruji. Kami membantu website Anda ditemukan oleh pelanggan yang tepat.",
        heroImage1: "/assets/images/SEO/Container.svg",
        heroImage2: "/assets/images/SEO/Container-1.svg",
        heroImage3: "/assets/images/SEO/Container-2.svg",
        processSteps: [
            { iconName: "FaMagnifyingGlass", title: "Riset<br/>Keyword" },
            { iconName: "FaFilePen", title: "Optimasi<br/>Konten" },
            { iconName: "FaCode", title: "Technical<br/>SEO" },
            { iconName: "FaLink", title: "Link<br/>Building" },
            { iconName: "FaChartLine", title: "Analisis &<br/>Monitoring" },
        ],
        cardFeatures: [
            "Riset Keyword",
            "Pembuatan Artikel SEO",
            "Setup & Perawatan Web",
            "Optimasi Berbasis Data"
        ],
        pricingTitle: "Paket SEO",
        pricingPackages: [
            {
                title: "Basic SEO",
                features: [
                    { name: "Riset Keyword (Hingga 5 Keyword)", iconName: "FaMagnifyingGlass" },
                    { name: "Optimasi On-Page", iconName: "FaFilePen" },
                    { name: "Audit Teknis Dasar", iconName: "FaCode" },
                    { name: "Setup Google My Business", iconName: "FaLocationDot" },
                    { name: "Laporan Bulanan", iconName: "FaChartLine" },
                    { name: "Dukungan Standar", iconName: "FaHeadset" },
                    { name: "Fokus Satu Halaman", iconName: "FaMobileScreenButton" }
                ],
                serviceFee: "IDR 2.000.000",
                budgetAds: "IDR 0",
                totalPrice: "IDR 2.000.000",
                period: "/ bulan"
            },
            {
                title: "Advanced SEO",
                features: [
                    { name: "Riset Keyword (Hingga 15 Keyword)", iconName: "FaMagnifyingGlass" },
                    { name: "On-Page & Off-Page Lanjutan", iconName: "FaScrewdriverWrench" },
                    { name: "Pembuatan Konten (4 Artikel/bulan)", iconName: "FaFilePen" },
                    { name: "Perbaikan Technical SEO", iconName: "FaCode" },
                    { name: "Analisis Kompetitor", iconName: "FaUsersViewfinder" },
                    { name: "Laporan Dua Mingguan", iconName: "FaChartLine" },
                    { name: "Dukungan Prioritas", iconName: "FaStar" },
                    { name: "Strategi Multi-Halaman", iconName: "FaSitemap" },
                    { name: "Backlink Berkualitas Tinggi", iconName: "FaLink" }
                ],
                serviceFee: "IDR 4.500.000",
                budgetAds: "IDR 0",
                totalPrice: "IDR 4.500.000",
                period: "/ bulan"
            }
        ],
        advantagesTitle: "Tumbuhkan Trafik Organik<br/>dengan <span class='opacity-80'>SEO Terpercaya</span>",
        advantagesDescription: "SEO Kreasitech memastikan fondasi digital Anda kuat, mendatangkan trafik yang relevan dan meningkatkan konversi jangka panjang tanpa ketergantungan penuh pada iklan berbayar.",
        advantagesList: [
            "Peringkat tinggi di kata kunci relevan",
            "Trafik organik yang stabil dan berkualitas",
            "Otoritas domain meningkat jangka panjang",
            "Efisiensi biaya pemasaran jangka panjang"
        ],
        ctaTitle: "Siap Mendominasi <br/>Hasil Pencarian?",
        ctaDescription: "Mulai perjalanan Anda ke halaman pertama Google hari ini dengan strategi SEO berbasis data kami yang memberikan pertumbuhan jangka panjang.",
        ctaButtonText: "Audit SEO Gratis"
    },
    {
        slug: "ads",
        title: "Ads",
        heroTitle: "Solusi <span class='text-secondary'>Ads</span><br/>Presisi",
        heroDescription: "Jangkau lebih banyak calon pelanggan dalam hitungan hari dengan strategi iklan tertarget di Google, Meta, atau LinkedIn. Dengan 5+ tahun pengalaman, kami telah mengelola 300+ kampanye iklan.",
        heroImage1: "/assets/images/Ads/Container.svg",
        heroImage2: "/assets/images/Ads/Container-1.svg",
        heroImage3: "/assets/images/Ads/Container-2.svg",
        processSteps: [
            { iconName: "FaUsersViewfinder", title: "Riset<br/>Audiens" },
            { iconName: "FaPalette", title: "Desain<br/>Iklan" },
            { iconName: "FaBullhorn", title: "Setup<br/>Kampanye" },
            { iconName: "FaFlask", title: "A/B<br/>Testing" },
            { iconName: "FaHandHoldingDollar", title: "Analisis<br/>ROI" },
        ],
        cardFeatures: [
            "Targeting Audiens",
            "Desain Kreatif",
            "Optimasi Kampanye",
            "Laporan Performa"
        ],
        pricingTitle: "Daftar Harga",
        pricingPackages: [
            {
                title: "Google Ads",
                features: [
                    { name: "Screenshot iklan", iconName: "FaFileImport" },
                    { name: "Konsultasi keyword planner gratis", iconName: "FaRegCommentDots" },
                    { name: "Analisis audiens gratis", iconName: "FaUsersViewfinder" },
                    { name: "Hingga 10 keyword", iconName: "FaMagnifyingGlass" },
                    { name: "1 grup iklan dengan 3 iklan", iconName: "FaLayerGroup" },
                    { name: "Manajemen dan optimasi kampanye", iconName: "FaScrewdriverWrench" },
                    { name: "Termasuk biaya iklan harian", iconName: "FaHandHoldingDollar" },
                    { name: "Kontrak minimum 6 bulan", iconName: "FaFileContract" },
                    { name: "Laporan akhir kampanye", iconName: "FaChartColumn" }
                ],
                serviceFee: "IDR 2.000.000",
                budgetAds: "IDR 1.500.000",
                totalPrice: "IDR 3.500.000",
                period: "/ bulan"
            },
            {
                title: "Meta Ads",
                features: [
                    { name: "Facebook Ads Feed", iconName: "FaFacebookF" },
                    { name: "Instagram Ads Feed", iconName: "FaInstagram" },
                    { name: "Screenshot iklan", iconName: "FaMobileScreenButton" },
                    { name: "Analisis audiens gratis", iconName: "FaUsersViewfinder" },
                    { name: "Konsultasi iklan gratis", iconName: "FaRegCommentDots" },
                    { name: "1 grup iklan terdiri dari 3 iklan", iconName: "FaLayerGroup" },
                    { name: "Manajemen dan optimasi kampanye", iconName: "FaScrewdriverWrench" },
                    { name: "Termasuk biaya iklan maksimal", iconName: "FaHandHoldingDollar" },
                    { name: "Kontrak minimum 6 bulan", iconName: "FaFileContract" },
                    { name: "Laporan di akhir kampanye", iconName: "FaChartColumn" }
                ],
                serviceFee: "IDR 2.000.000",
                budgetAds: "IDR 1.500.000",
                totalPrice: "IDR 3.500.000",
                period: "/ bulan"
            }
        ],
        advantagesTitle: "Tingkatkan Profit dengan<br/><span class='opacity-80'>Iklan Digital</span> Tertarget",
        advantagesDescription: "Kreasitech memastikan kampanye Anda mencapai audiens yang tepat dengan pesan yang tepat pada biaya yang efisien, didukung oleh data dan strategi yang relevan.",
        advantagesList: [
            "Jangkau pelanggan potensial lebih cepat & luas",
            "Hemat waktu dan biaya pemasaran jangka pendek",
            "Optimasi performa berkala untuk hasil maksimal",
            "Laporan performa yang transparan & mudah dipahami"
        ],
        ctaTitle: "Maksimalkan ROI Anda <br/>dengan Iklan Presisi",
        ctaDescription: "Berhenti membuang uang pada iklan yang tidak efektif. Pakar kami mengoptimalkan pengeluaran Anda untuk konversi maksimal dan pertumbuhan bisnis.",
        ctaButtonText: "Mulai Kampanye Iklan"
    },
    {
        slug: "press-release",
        title: "Press Release",
        heroTitle: "Bangun Kepercayaan dengan <br/>Publikasi <span class='text-secondary'>Media</span>",
        heroDescription: "Publikasikan berita bisnis Anda di media nasional terpercaya. Tingkatkan kredibilitas brand dan jangkau audiens yang lebih luas.",
        heroImage1: "/assets/images/Press-Released/Container.svg",
        heroImage2: "/assets/images/Press-Released/Container-1.svg",
        heroImage3: "/assets/images/Press-Released/Container-2.svg",
        processSteps: [
            { iconName: "FaClipboardList", title: "Perencanaan<br/>Media" },
            { iconName: "FaNewspaper", title: "Penulisan<br/>Rilis" },
            { iconName: "FaPaperPlane", title: "Distribusi<br/>Media" },
            { iconName: "FaEye", title: "Monitoring<br/>Publikasi" },
            { iconName: "FaFileContract", title: "Laporan<br/>Coverage" },
        ],
        cardFeatures: [
            "Hubungan Media",
            "Penulisan Rilis",
            "Garansi Terbit",
            "Monitoring Media"
        ],
        pricingTitle: "Paket Media",
        pricingPackages: [
            {
                title: "Starter Pack",
                features: [
                    { name: "1x Penulisan Press Release", iconName: "FaPen" },
                    { name: "Distribusi ke 5 Media Online", iconName: "FaShareNodes" },
                    { name: "Garansi Penempatan", iconName: "FaCheckDouble" },
                    { name: "Laporan Monitoring Media", iconName: "FaChartBar" },
                    { name: "Pengerjaan Standar (5 Hari)", iconName: "FaClock" }
                ],
                serviceFee: "IDR 1.500.000",
                budgetAds: "IDR 0",
                totalPrice: "IDR 1.500.000",
                period: "/ rilis"
            },
            {
                title: "Business Pack",
                features: [
                    { name: "2x Penulisan Press Release", iconName: "FaPenFancy" },
                    { name: "Distribusi ke 10 Media Online", iconName: "FaShareNodes" },
                    { name: "Termasuk 1 Media Tier Atas", iconName: "FaStar" },
                    { name: "Garansi Penempatan", iconName: "FaCheckDouble" },
                    { name: "Laporan Media Detail", iconName: "FaFileInvoice" },
                    { name: "Pengerjaan Prioritas (3 Hari)", iconName: "FaBolt" },
                    { name: "Amplifikasi Media Sosial", iconName: "FaBullhorn" }
                ],
                serviceFee: "IDR 3.000.000",
                budgetAds: "IDR 0",
                totalPrice: "IDR 3.000.000",
                period: "/ bulan"
            }
        ],
        advantagesTitle: "Perkuat Brand dengan<br/><span class='opacity-80'>Liputan Media</span> Terpercaya",
        advantagesDescription: "Publikasi media memberikan validasi pihak ketiga yang kuat untuk brand Anda, meningkatkan kepercayaan pelanggan dan investor.",
        advantagesList: [
            "Membangun kredibilitas instan",
            "Mendapatkan backlink berkualitas tinggi",
            "Meningkatkan awareness di pasar target",
            "Dokumentasi digital yang permanen"
        ],
        ctaTitle: "Tampilkan Bisnis Anda <br/>di Media Terkemuka",
        ctaDescription: "Bangun kredibilitas instan dan jangkau jutaan orang melalui jaringan media tepercaya kami. Ceritakan kisah Anda kepada audiens yang tepat.",
        ctaButtonText: "Dapatkan Liputan Sekarang"
    },
    {
        slug: "backlink",
        title: "Backlink",
        heroTitle: "Jaringan <span class='text-secondary'>Backlink</span><br/>Berkualitas Tinggi",
        heroDescription: "Tingkatkan Domain Authority (DA) dan Page Authority (PA) website Anda dengan backlink berkualitas dari jaringan website terpercaya.",
        heroImage1: "/assets/images/backlink/Container.svg",
        heroImage2: "/assets/images/backlink/Container-1.svg",
        heroImage3: "/assets/images/backlink/Container-2.svg",
        processSteps: [
            { iconName: "FaGlobe", title: "Seleksi<br/>Domain" },
            { iconName: "FaFileImport", title: "Penempatan<br/>Konten" },
            { iconName: "FaRobot", title: "Proses<br/>Indexing" },
            { iconName: "FaGaugeHigh", title: "Cek<br/>DA/PA" },
            { iconName: "FaLaptopCode", title: "Live<br/>Report" },
        ],
        cardFeatures: [
            "Situs DA/PA Tinggi",
            "Contextual Links",
            "Dofollow Links",
            "Aman & Manual"
        ],
        pricingTitle: "Paket Backlink",
        pricingPackages: [
            {
                title: "Standard Links",
                features: [
                    { name: "5 Backlink Content Placement", iconName: "FaLink" },
                    { name: "Situs DA 20-30", iconName: "FaServer" },
                    { name: "Dofollow Permanen", iconName: "FaInfinity" },
                    { name: "Termasuk Artikel Unik", iconName: "FaFileLines" },
                    { name: "Dashboard Laporan", iconName: "FaChartLine" }
                ],
                serviceFee: "IDR 1.000.000",
                budgetAds: "IDR 0",
                totalPrice: "IDR 1.000.000",
                period: "/ paket"
            },
            {
                title: "Premium Links",
                features: [
                    { name: "10 Backlink Content Placement", iconName: "FaLink" },
                    { name: "Situs DA 40+ (Otoritas Tinggi)", iconName: "FaCrown" },
                    { name: "Dofollow Permanen", iconName: "FaInfinity" },
                    { name: "Artikel Premium 500 kata", iconName: "FaFeather" },
                    { name: "Indexing Lebih Cepat", iconName: "FaBolt" },
                    { name: "Anchor Text Strategis", iconName: "FaAnchor" },
                    { name: "Analisis Link Kompetitor", iconName: "FaMagnifyingGlassChart" }
                ],
                serviceFee: "IDR 3.500.000",
                budgetAds: "IDR 0",
                totalPrice: "IDR 3.500.000",
                period: "/ paket"
            }
        ],
        advantagesTitle: "Otoritas & Ranking dengan<br/><span class='opacity-80'>Backlink</span> Berkualitas",
        advantagesDescription: "Backlink berkualitas adalah sinyal kepercayaan bagi Google. Kami membantu Anda mendapatkan backlink yang aman dan powerful.",
        advantagesList: [
            "Meningkatkan ranking di SERP dengan cepat",
            "Memperkuat struktur SEO website",
            "Aman dari penalti algoritma Google",
            "Sumber trafik referral baru"
        ],
        ctaTitle: "Tingkatkan Situs Anda <br/>dengan Backlink Premium",
        ctaDescription: "Perkuat fondasi SEO Anda dan tingkatkan peringkat Anda dengan aman menggunakan jaringan link otoritas tinggi kami. Kualitas link yang nyata.",
        ctaButtonText: "Dapatkan Link Premium"
    }
];
