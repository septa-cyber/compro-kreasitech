"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface JobDetail {
    id: number;
    title: string;
    company: string;
    icon: string;
    iconBg: string;
    postedTime: string;
    salary: string;
    description: string;
    type: string;
    location: string;
    category: string;
    employmentType: string;
    experience: string;
    education: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

const jobsDetailData: Record<string, JobDetail> = {
    "1": {
        id: 1,
        title: "Front-End Developer",
        company: "KreasiTech",
        icon: "âš›ï¸",
        iconBg: "bg-cyan-100",
        postedTime: "18 minutes ago",
        salary: "3,000K-8,000K",
        description: "Kami mencari Front-End Developer yang passionate untuk bergabung dengan tim development kami. Anda akan bertanggung jawab untuk membangun dan mengoptimalkan user interface yang responsif dan user-friendly menggunakan teknologi modern seperti React, Next.js, dan TypeScript.",
        type: "Technology",
        location: "On-site",
        category: "full-time",
        employmentType: "Full-time",
        experience: "2-4 tahun",
        education: "S1 Teknik Informatika / setara",
        responsibilities: [
            "Membangun dan maintain aplikasi web menggunakan React/Next.js",
            "Berkolaborasi dengan UI/UX designer untuk implementasi design",
            "Mengoptimalkan performa aplikasi untuk kecepatan dan skalabilitas",
            "Melakukan code review dan testing",
            "Mengintegrasikan API dengan back-end services",
            "Membuat dokumentasi teknis yang jelas"
        ],
        requirements: [
            "Minimal 2 tahun pengalaman sebagai Front-End Developer",
            "Menguasai React.js, Next.js, TypeScript, dan Tailwind CSS",
            "Pemahaman kuat tentang HTML5, CSS3, dan JavaScript ES6+",
            "Pengalaman dengan Git dan version control",
            "Familiar dengan RESTful API dan GraphQL",
            "Pemahaman tentang responsive design dan cross-browser compatibility",
            "Problem solving dan analytical thinking yang baik",
            "Kemampuan komunikasi yang baik dan team player"
        ],
        benefits: [
            "Gaji kompetitif sesuai pengalaman (3-8 juta)",
            "BPJS Kesehatan & Ketenagakerjaan",
            "Tunjangan hari raya",
            "Lingkungan kerja yang supportive dan kolaboratif",
            "Kesempatan belajar teknologi terbaru",
            "Work-life balance yang baik",
            "Snack dan minuman gratis",
            "Team building dan company trip"
        ]
    },
    "2": {
        id: 2,
        title: "Back-End Developer",
        company: "KreasiTech",
        icon: "JS",
        iconBg: "bg-yellow-400",
        postedTime: "18 minutes ago",
        salary: "3,500K-9,000K",
        description: "Bergabunglah dengan tim back-end kami untuk membangun sistem yang robust dan scalable. Anda akan bekerja dengan teknologi modern seperti Node.js, Express, dan database untuk menciptakan API yang efisien dan secure.",
        type: "Technology",
        location: "Remote",
        category: "full-time",
        employmentType: "Full-time",
        experience: "2-5 tahun",
        education: "S1 Teknik Informatika / setara",
        responsibilities: [
            "Mengembangkan dan maintain RESTful API",
            "Design dan implementasi database schema",
            "Mengoptimalkan performa server dan database",
            "Implementasi security best practices",
            "Integrasi dengan third-party services",
            "Deploy dan monitoring production systems"
        ],
        requirements: [
            "Minimal 2 tahun pengalaman sebagai Back-End Developer",
            "Menguasai Node.js, Express.js, atau NestJS",
            "Pengalaman dengan SQL (PostgreSQL/MySQL) dan NoSQL (MongoDB)",
            "Familiar dengan Docker dan CI/CD",
            "Pemahaman tentang RESTful API design",
            "Pengalaman dengan cloud platforms (AWS/GCP/Azure)",
            "Pemahaman tentang microservices architecture",
            "Strong problem-solving skills"
        ],
        benefits: [
            "Gaji kompetitif sesuai pengalaman (3.5-9 juta)",
            "Fully remote work",
            "Flexible working hours",
            "BPJS Kesehatan & Ketenagakerjaan",
            "Budget untuk home office setup",
            "Online courses dan certification",
            "Quarterly bonus",
            "Annual company retreat"
        ]
    },
    "3": {
        id: 3,
        title: "UI/UX Designer",
        company: "KreasiTech",
        icon: "ðŸŽ¨",
        iconBg: "bg-pink-100",
        postedTime: "18 minutes ago",
        salary: "3,000K-6,500K",
        description: "Kami mencari UI/UX Designer kreatif yang dapat menerjemahkan kebutuhan user menjadi design yang beautiful dan functional. Anda akan bekerja closely dengan product team dan developers untuk menciptakan experience yang memorable.",
        type: "Creative",
        location: "On-site",
        category: "full-time",
        employmentType: "Full-time",
        experience: "1-3 tahun",
        education: "S1 Desain Grafis / DKV / setara",
        responsibilities: [
            "Melakukan user research dan usability testing",
            "Membuat wireframes, mockups, dan prototypes",
            "Design user interface untuk web dan mobile apps",
            "Berkolaborasi dengan developers untuk implementasi",
            "Maintain design system dan style guide",
            "Present design ideas kepada stakeholders"
        ],
        requirements: [
            "Minimal 1 tahun pengalaman sebagai UI/UX Designer",
            "Menguasai Figma, Adobe XD, atau Sketch",
            "Portfolio yang menunjukkan UI/UX design projects",
            "Pemahaman tentang user-centered design principles",
            "Familiar dengan design systems dan atomic design",
            "Pemahaman basic HTML/CSS adalah plus",
            "Excellent communication skills",
            "Attention to detail dan creative thinking"
        ],
        benefits: [
            "Gaji kompetitif (3-6.5 juta)",
            "BPJS Kesehatan & Ketenagakerjaan",
            "Creative environment dengan tools terbaik",
            "Design software licenses (Figma, Adobe CC)",
            "Workshop dan design conferences",
            "Flexible working hours",
            "Casual dress code",
            "Regular team outings"
        ]
    },
    "4": {
        id: 4,
        title: "Legal Staff",
        company: "KreasiTech",
        icon: "âš–ï¸",
        iconBg: "bg-blue-100",
        postedTime: "18 minutes ago",
        salary: "3,000K-6,500K",
        description: "Kami membutuhkan Legal Staff yang akan menangani aspek legal perusahaan, termasuk contract management, compliance, dan legal advisory untuk berbagai business operations.",
        type: "Management",
        location: "On-site",
        category: "full-time",
        employmentType: "Full-time",
        experience: "1-3 tahun",
        education: "S1 Hukum",
        responsibilities: [
            "Draft dan review kontrak kerjasama",
            "Menangani legal compliance dan licensing",
            "Memberikan legal advice untuk business decisions",
            "Mengelola dokumentasi legal perusahaan",
            "Koordinasi dengan external legal counsel",
            "Handle dispute resolution dan negotiation"
        ],
        requirements: [
            "S1 Hukum dari universitas terkemuka",
            "Minimal 1 tahun pengalaman di bidang corporate law",
            "Memahami hukum kontrak dan hukum bisnis",
            "Familiar dengan regulasi IT dan digital business",
            "Excellent analytical dan problem-solving skills",
            "Strong attention to detail",
            "Kemampuan negosiasi yang baik",
            "Bahasa Inggris aktif (written & spoken)"
        ],
        benefits: [
            "Gaji kompetitif (3-6.5 juta)",
            "BPJS Kesehatan & Ketenagakerjaan",
            "Career development opportunities",
            "Legal certifications support",
            "Professional working environment",
            "Tunjangan transportasi",
            "Annual bonus",
            "Work-life balance"
        ]
    },
    "5": {
        id: 5,
        title: "Digital Marketing Specialist",
        company: "KreasiTech",
        icon: "ðŸ“±",
        iconBg: "bg-purple-100",
        postedTime: "1 day ago",
        salary: "2,500K-5,500K",
        description: "Join our marketing team sebagai Digital Marketing Specialist. Anda akan bertanggung jawab untuk merencanakan dan execute digital marketing campaigns across various channels untuk meningkatkan brand awareness dan customer acquisition.",
        type: "Marketing",
        location: "Hybrid",
        category: "full-time",
        employmentType: "Full-time",
        experience: "1-3 tahun",
        education: "S1 Marketing / Komunikasi / setara",
        responsibilities: [
            "Merencanakan dan execute digital marketing campaigns",
            "Manage social media accounts dan content creation",
            "Melakukan SEO/SEM optimization",
            "Mengelola Google Ads, Facebook Ads, Instagram Ads",
            "Analyze campaign performance dan reporting",
            "Email marketing dan marketing automation",
            "Collaborate dengan design dan content team"
        ],
        requirements: [
            "Minimal 1 tahun pengalaman di digital marketing",
            "Menguasai Google Analytics, Google Ads, Meta Ads",
            "Pemahaman tentang SEO dan SEM",
            "Familiar dengan social media management tools",
            "Content creation dan copywriting skills",
            "Data analysis dan reporting skills",
            "Creative thinking dan trend-aware",
            "Good communication skills"
        ],
        benefits: [
            "Gaji kompetitif (2.5-5.5 juta)",
            "Hybrid work arrangement",
            "BPJS Kesehatan & Ketenagakerjaan",
            "Performance bonus",
            "Digital marketing courses",
            "Creative working environment",
            "Marketing tools dan software",
            "Team activities"
        ]
    },
    "6": {
        id: 6,
        title: "Product Manager",
        company: "KreasiTech",
        icon: "ðŸ“Š",
        iconBg: "bg-green-100",
        postedTime: "2 days ago",
        salary: "5,000K-12,000K",
        description: "Kami mencari experienced Product Manager untuk lead product development dari ideation hingga launch. Anda akan work closely dengan engineering, design, dan business teams untuk deliver products yang impactful.",
        type: "Management",
        location: "Remote",
        category: "full-time",
        employmentType: "Full-time",
        experience: "3-5 tahun",
        education: "S1 atau S2 (any major)",
        responsibilities: [
            "Define product vision, strategy, dan roadmap",
            "Conduct market research dan competitive analysis",
            "Gather dan prioritize product requirements",
            "Work dengan engineering team untuk product development",
            "Define product metrics dan track performance",
            "Conduct user testing dan gather feedback",
            "Present product updates kepada stakeholders"
        ],
        requirements: [
            "Minimal 3 tahun pengalaman sebagai Product Manager",
            "Track record delivering successful products",
            "Strong analytical dan data-driven decision making",
            "Excellent stakeholder management skills",
            "Pemahaman tentang Agile/Scrum methodology",
            "Familiar dengan product management tools (Jira, Figma, etc)",
            "Technical background adalah plus",
            "Leadership dan strategic thinking skills"
        ],
        benefits: [
            "Gaji sangat kompetitif (5-12 juta)",
            "Fully remote work",
            "Stock options / equity",
            "BPJS Kesehatan & Ketenagakerjaan",
            "Unlimited PTO",
            "Product management courses",
            "Conference attendance",
            "High-impact role dengan growth opportunity"
        ]
    }
};

export default function JobDetailPage() {
    const params = useParams();
    const router = useRouter();
    const jobId = params.id as string;
    const job = jobsDetailData[jobId];

    if (!job) {
        return (
            <div className="bg-[#F4F4F7] text-gray-800 min-h-screen">
                <Navbar />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-3xl font-bold font-montserrat text-text-light mb-4">Job Not Found</h1>
                    <button
                        onClick={() => router.push('/karir')}
                        className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium font-montserrat hover:bg-violet-700 transition-colors"
                    >
                        Back to Jobs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#F4F4F7] text-gray-800 transition-colors duration-300 min-h-screen">
            <Navbar />
            <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                { label: "Home", href: "/" },
                { label: "Karir", href: "/karir" },
                { label: job.title, href: `/karir/${jobId}` }
            ]} />

            {/* Main Content */}
            <section className="py-12 bg-[#F4F4F7]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Job Header */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className={`w-20 h-20 ${job.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 text-4xl`}>
                                        {job.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-3xl sm:text-4xl font-bold font-montserrat text-text-light mb-3">
                                            {job.title}
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-4 text-gray-600 font-montserrat">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span>{job.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Posted {job.postedTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-xl text-sm font-medium font-montserrat">
                                        {job.type}
                                    </span>
                                    <span className={`px-4 py-2 rounded-xl text-sm font-medium font-montserrat ${job.location === 'Remote' ? 'bg-green-100 text-green-700' :
                                        job.location === 'On-site' ? 'bg-orange-100 text-orange-700' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                        {job.location}
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium font-montserrat">
                                        {job.employmentType}
                                    </span>
                                </div>

                                <p className="text-gray-600 font-montserrat leading-relaxed">
                                    {job.description}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                <h2 className="text-xl font-bold font-montserrat text-text-light mb-4">
                                    Tanggung Jawab
                                </h2>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 font-montserrat">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Requirements */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                <h2 className="text-xl font-bold font-montserrat text-text-light mb-4">
                                    Kualifikasi
                                </h2>
                                <ul className="space-y-3">
                                    {job.requirements.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 font-montserrat">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Benefits */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-xl font-bold font-montserrat text-text-light mb-4">
                                    Benefit & Fasilitas
                                </h2>
                                <ul className="space-y-3">
                                    {job.benefits.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 font-montserrat">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-96 flex-shrink-0">
                            <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-4">
                                <h3 className="text-xl font-bold font-montserrat text-text-light mb-6">
                                    Informasi Lowongan
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-montserrat text-sm">Salary Range</span>
                                        <span className="text-text-light font-semibold font-montserrat">{job.salary}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-montserrat text-sm">Job Type</span>
                                        <span className="text-text-light font-semibold font-montserrat">{job.employmentType}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-montserrat text-sm">Location</span>
                                        <span className="text-text-light font-semibold font-montserrat">{job.location}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                        <span className="text-gray-500 font-montserrat text-sm">Experience</span>
                                        <span className="text-text-light font-semibold font-montserrat">{job.experience}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 font-montserrat text-sm">Education</span>
                                        <span className="text-text-light font-semibold font-montserrat text-right">{job.education}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open(`https://wa.me/6288880888877?text=Halo%20Kreasitech%2C%20saya%20tertarik%20dengan%20posisi%20${encodeURIComponent(job.title)}`, '_blank')}
                                    className="w-full px-6 py-4 bg-violet-600 text-white rounded-xl font-semibold font-montserrat hover:bg-violet-700 transition-colors flex items-center justify-center gap-3 mb-3"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Apply via WhatsApp
                                </button>

                                <button
                                    onClick={() => router.push('/karir')}
                                    className="w-full px-6 py-3 border-2 border-violet-600 text-violet-600 rounded-xl font-semibold font-montserrat hover:bg-violet-50 transition-colors"
                                >
                                    Back to Jobs
                                </button>

                                {/* Share */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 font-montserrat mb-3">Share this job:</p>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                                            className="flex-1 p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${job.title} at KreasiTech`, '_blank')}
                                            className="flex-1 p-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${job.title}`, '_blank')}
                                            className="flex-1 p-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
