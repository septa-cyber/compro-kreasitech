export interface SkillItem {
    title: string;
    description: string;
}

export interface LevelItem {
    title: string;
    bulletPoints: string[];
    salaryRange: string;
}

export interface StepItem {
    title: string;
    description: string;
}

export interface RelatedJob {
    title: string;
    slug: string;
}

export interface SoftwareDevelopmentService {
    slug: string;
    title: string;
    roleName: string; // e.g. "UI/UX Designer"
    heroTitle: string;
    heroDescription: string;
    heroImages: string[]; // List of 9 avatar URLs

    hardSkills: SkillItem[];
    softSkills: SkillItem[];
    levels: LevelItem[];
    hiringProcessSteps: StepItem[];
    afterHireSteps: StepItem[];
    relatedJobs: RelatedJob[];

    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
}

const DEFAULT_AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFfSyEx67niVmmU14zHyUO2eqY0dpHu0vQbrPkXgQVh2I6LSLY8vg7Mzn6xwZkaaZpFXNPxffaohwFbgu6oIiFunSKgWBzt5k9trBZyemffi5F-U1nAMbc3xBAoqsIyQpkSUYFD-9s2wMImC3uWh3n2SoSzDOcGSst_gPXyIpZtH80VxWDbSsZmZpMyEusUPUcSOi9CQcVcxNwK3gevux-5D3TZx3bhf-HUc7qIW5cHc0ta9DGZOB1ep0gv0elePfhAZYACQgwJVg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDfdvGXbroG5qjFCAR_e2sx6hwyUFnxzUPYbF0ViJNe87tk-HYqH8zGXPUYM8DsbDzXJHUfvGK3tFKntiS1aIhSFrf8RvfENXV6EbQj62K2mLJaSPL0vIUvEVBKFwv69RSPfxLRIyQTjbp0LW7SETw1_wI9SzSOUMiScWeLz0i4EuTO3a94MTddJPHMFfjvDrZVLTp3199MtRjpHVpuf4ZV0ZIleMbTcK6LwKiFHrySx-x5yHYcXiZ_VqRi4BMS2xcVq3YQVeRdMPk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2NrBGx2S5udLeorzk-dAqDOp4pwuXGAe5Ax4wJmBDQUwuDcUjIAj2Dw2Z2WcijKMDpwwxuVuqvzIRroTKNslt4BBcH_Vpl7ccEg4CcPmqmXsapb_jCOQNwkl3ITODZzeHYSLIrUrISZaHm_t9rqt69ElZynEK8p0vglIR13nute3uHmoKZeXODYp0p3VAoSGEGh68gtXrlEKhsAU6rnyEUrdjtZEsrREYm_lmNWitC89xXO1T4pz7Qeal3x-Sp2OyS0sdvD8wjyY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD-a1ccMPr9MiSzNCBVGru07En8lAzu3R4-wrE6bi9pUjN-3nbhp_iv2Mh3RqJQurfvJHyhUlvLF-GMzpn6OCAUFRBDzfeDDFYOUhAsCdqnoDZs9pLpAm0sxHHMNr0SZ8Kx6qx73CIjYTirWVo29VzBwj-mGIxb0zXwa6r2rFvOYnWO-LTiJDKcx_FQWst_TTlu1mfvSSmNxSi5PrMi1mTsvYQcP-jT37HFd2K4IVw9Y2H4rPtH7iu6Jny4y6eKc6MrStEO4OwgJNg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCIJRRfawv1No3xMnRpjNuawzZ66Jl7EZ0rvgY3-ZHT2owioVOKmdnLMSsRQvIlmAKO1UWxBsmUX04uA0roD8njvmb7QAG7ndYfxJN4O7E2d11mHY4wN2TdE3EKYK6mLmjigpAhR-AWu5bFGUcA4BA4gOeRGf_Zqtf0zUrHW9x9W1zy8hfFvWlSBAu7Auae26nqWoC5YnMEYeO1uGOmKqd2aszbS4jgeP9ufd_B_VGB4cmy_55z_DGn-4yUPTE3xla61vBoTnm8UQU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6xQH3pxE41IQjtbz3_9w6xN92ZU7tskirVmqYDFAX9uHL3KQcUZp20YOTtbInbLisuRrBobbukHHhnjc3-UQ6ojNbf8CR8lQK5wLcyw58bhBCkUsJdIRSZCC9HJTQya9j1zz7JxXEnYMwHGQWD9kX0fnw9eL10kpGx1HMy3keFC73SJH0u3_tI7hhlgc80eKqlrCkq8Ko6a9Ykng13pQnUoKLySpeXwiy6vlHAHGW86a56LHhyRIeKNXzUK1UiVENBV_oB1KXkQI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByi4sWQDOxNqrPonq9JIo-hych6lGRFnE_sDx68lVGUVVVC7Sh4PDONXbRQdKS_RJcb2f4UImmhCX222brqv6ErrFugUHKNW_z9lqiataSVIASSB7jI-CEwCqZDgwblX5y6uMKhoHepFZanXKn7moXWQLSrSaSXRr_VGEab1qgMpHosa0M-0BwESWbpMUBBDb5MY8OtCslr5nKt-fEYXZSSP4I4-rC-PYQffa0OMggpaTXH_t0stVVUt_PK3M3JkBIaBMLXcHvI0I",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDocblY8xdwkSHLEQr98BTm3E9wF241C9-z09Eca-7EKTN7lgbqLdmOVEsWt0hQV_WEyDjFzqEcpxZ1fLocQhJR9rTt2v0bEbNiY0QmW2IckIhlBacmnILru6ealYiOTuTinZyalvj4iQGiGVF6zAlGfjQulIOqZMysWkQYYwqFwd6XQHV1ao6X45qe391rUoKCjnXdUN1q3fHvNwV5KLIgx97CH1T9E8MHatQThB-bD42gxY1Cvpeo9l_2cAu5a1_EC0Yeo3BhWSg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuActpuGdFAROGPhcSkGIJgjr1m2rya-L8qpegFpSAXF145HPla1WfKkcI6Di3WAxKaDfrGI5e11weuAzphVsECscMLKK7tD5dna9TUZ5E2ZXF9sAhCNhC2fwRTGF27Z-wMWYx9iPUMNhCkwGGgKM9QnpmoWF3Upulc6lz07gie_I3lRZH6CrXuJsUH-93B46IPCCG1sV0Gz4i21ypIqqIXd0Q2RxV5a0hMgFDPL2-SL-NFsv31EF3VBO3FdF9_2Femp5RDTM76wbn0"
];

const COMMON_HIRING_PROCESS = [
    { title: "Candidate Screening", description: "Implementasi strategi untuk mengevaluasi resume dan menyaring kandidat berdasarkan kualifikasi mereka secara efektif." },
    { title: "Interview Process Improvement", description: "Menyempurnakan struktur wawancara untuk menilai keterampilan kandidat dan kecocokan budaya kerja dengan lebih baik." },
    { title: "Onboarding Experience", description: "Mengembangkan program orientasi komprehensif untuk membantu karyawan baru berintegrasi dengan lancar ke dalam tim." }
];

const COMMON_AFTER_HIRE = [
    { title: "Onboard, pay, retain", description: "Kami membantu proses onboarding, penggajian, dan kepatuhan, sehingga tenaga ahli baru Anda berintegrasi cepat dan bertahan lama." },
    { title: "Ongoing support & team expansion", description: "Teruslah merekrut dengan kecepatan dan kualitas yang sama kapan pun dibutuhkan. Rekruter Anda tetap siap mendukung kebutuhan di masa depan." }
];

export const softwareDevelopmentServices: SoftwareDevelopmentService[] = [
    {
        slug: "specifications-and-wireframe",
        title: "Specifications & Wireframe",
        roleName: "Technical Analyst",
        heroTitle: "<span class='text-primary block mb-2'>Technical</span> Analyst",
        heroDescription: "Rekrut Technical Analyst ahli sesuai kebutuhan. Perusahaan top dan startup memilih analis dari KreasiTech untuk dokumentasi SRS, arsitektur sistem, dan perencanaan blueprint teknis yang presisi.",
        heroImages: DEFAULT_AVATARS,
        hardSkills: [
            { title: "SRS Documentation", description: "Mampu menyusun Software Requirements Specifications yang mendetail untuk panduan developer." },
            { title: "System Architecture", description: "Keahlian dalam merancang struktur sistem yang scalable dan efisien." },
            { title: "Wireframing", description: "Mahir membuat blueprint visual alur aplikasi untuk validasi logika bisnis." },
            { title: "API Documentation", description: "Kemampuan mendokumentasikan endpoint dan alur data antar sistem secara teknis." },
            { title: "Database Schema Design", description: "Merancang skema database yang optimal untuk performa aplikasi tinggi." }
        ],
        softSkills: [
            { title: "Critical Thinking", description: "Mampu menganalisis masalah kompleks dan memberikan solusi teknis yang logis." },
            { title: "Communication", description: "Menjabarkan kebutuhan bisnis menjadi bahasa teknis yang dipahami developer." },
            { title: "Attention to Detail", description: "Ketelitian tinggi dalam mencatat setiap detil kebutuhan fungsional sistem." },
            { title: "Problem Solving", description: "Cepat mengidentifikasi potensi bottleneck teknis sebelum pengembangan dimulai." },
            { title: "Collaboration", description: "Bekerja efektif dengan stakeholder bisnis dan tim engineering." }
        ],
        levels: [
            {
                title: "Jr. Technical Analyst",
                bulletPoints: [
                    "S1 Sistem Informasi atau sejenisnya",
                    "Memahami dasar-dasar SDLC",
                    "Mampu membuat flowchart dan user story",
                    "Pengalaman 1+ tahun di bidang IT"
                ],
                salaryRange: "IDR 3.000K - 5.000K"
            },
            {
                title: "Technical Analyst",
                bulletPoints: [
                    "Pengalaman 3+ tahun menyusun SRS",
                    "Mahir dalam Enterprise Architect atau UML",
                    "Mampu merancang integrasi API kompleks",
                    "Pernah menangani proyek skala menengah"
                ],
                salaryRange: "IDR 5.000K - 8.000K"
            },
            {
                title: "Sr. Technical Analyst",
                bulletPoints: [
                    "Pengalaman 5+ tahun dalam arsitektur sistem",
                    "Ahli dalam merancang sistem high-concurrency",
                    "Leadership dalam membimbing tim analis junior",
                    "Memahami aspek keamanan data dan enkripsi"
                ],
                salaryRange: "IDR 8.000K - 12.000K"
            }
        ],
        hiringProcessSteps: COMMON_HIRING_PROCESS,
        afterHireSteps: COMMON_AFTER_HIRE,
        relatedJobs: [
            { title: "UI/UX Designer", slug: "ui-ux-design" },
            { title: "Web Developer", slug: "website-development" }
        ],
        ctaTitle: "Bangun Blueprint <br/>Produk Anda Sekarang",
        ctaDescription: "Dapatkan perencanaan teknis yang solid untuk meminimalisir risiko kegagalan proyek.",
        ctaButtonText: "Rekrut Technical Analyst"
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        roleName: "UI/UX Designer",
        heroTitle: "<span class='text-primary block mb-2'>UI/UX</span> Designer",
        heroDescription: "Rekrut desainer UI/UX, pakar, spesialis, dan seniman sesuai permintaan. Perusahaan top dan startup memilih desainer UI/UX dari KreasiTech untuk riset pengguna, wireframing, desain interaksi, pengujian kegunaan, dan lainnya.",
        heroImages: DEFAULT_AVATARS,
        hardSkills: [
            { title: "User Research", description: "Profisien dalam melakukan riset pengguna untuk memahami kebutuhan, perilaku, dan motivasi guna mendasari keputusan desain." },
            { title: "Wireframing and Prototyping", description: "Keahlian dalam membuat wireframe dan prototipe interaktif untuk memvisualisasikan dan memvalidasi konsep desain." },
            { title: "UI Design", description: "Sense desain visual yang kuat untuk menciptakan antarmuka pengguna yang menarik, estetis, dan ramah pengguna." },
            { title: "Interaction Design", description: "Terampil dalam merancang interaksi pengguna yang intuitif, termasuk navigasi, animasi, dan mikro-interaksi." },
            { title: "Responsive Design", description: "Pengalaman merancang antarmuka yang beradaptasi mulus di berbagai perangkat dan ukuran layar." }
        ],
        softSkills: [
            { title: "Creativity", description: "Menunjukkan kreativitas dan kemampuan berpikir out-of-the-box untuk menciptakan solusi desain yang inovatif." },
            { title: "Collaboration", description: "Mampu bekerja secara efektif dengan tim lintas fungsi, termasuk developer dan product manager." },
            { title: "Attention to Detail", description: "Ketelitian tinggi dalam eksekusi desain untuk menghadirkan produk akhir yang sempurna." },
            { title: "Time Management", description: "Mampu mengelola beberapa proyek desain dan memberikan hasil berkualitas dalam tenggat waktu yang ketat." },
            { title: "Communication", description: "Komunikator efektif yang mampu mengartikulasikan keputusan dan konsep desain kepada stakeholder." }
        ],
        levels: [
            {
                title: "Jr. UI/UX Designer",
                bulletPoints: [
                    "S1 Desain, HCI, atau bidang terkait",
                    "1-2 tahun pengalaman dalam desain produk",
                    "Pemahaman dasar wireframing dan prototyping",
                    "Mahir menggunakan Figma, Adobe XD, atau Sketch"
                ],
                salaryRange: "IDR 2.500K - 4.000K"
            },
            {
                title: "UI/UX Designer",
                bulletPoints: [
                    "Gelar dalam Desain UX/Visual atau bidang terkait",
                    "3+ tahun pengalaman menciptakan UI dan UX",
                    "Mahir dalam user flow dan iterasi desain",
                    "Mampu menerjemahkan kebutuhan bisnis ke UI intuitif"
                ],
                salaryRange: "IDR 4.000K - 6.000K"
            },
            {
                title: "Sr. UI/UX Designer",
                bulletPoints: [
                    "S1 Desain dengan 5+ tahun pengalaman",
                    "Track record desain produk yang scalable",
                    "Ahli dalam design systems dan library komponen",
                    "Pengalaman memimpin riset UX dan A/B testing"
                ],
                salaryRange: "IDR 6.000K - 10.000K"
            }
        ],
        hiringProcessSteps: COMMON_HIRING_PROCESS,
        afterHireSteps: COMMON_AFTER_HIRE,
        relatedJobs: [
            { title: "Technical Analyst", slug: "specifications-and-wireframe" },
            { title: "Web Developer", slug: "website-development" }
        ],
        ctaTitle: "Bangun Tim Desain <br/>Impian Anda Sekarang",
        ctaDescription: "Hubungi profesional yang telah dikurasi dan siap mengakselerasi kesuksesan proyek Anda.",
        ctaButtonText: "Rekrut UI/UX Designer"
    },
    {
        slug: "website-development",
        title: "Website Development",
        roleName: "Web Developer",
        heroTitle: "<span class='text-primary block mb-2'>Web</span> Developer",
        heroDescription: "Rekrut Web Developer handal untuk membangun website performa tinggi. Keahlian dalam Next.js, React, Node.js, dan optimasi SEO untuk meningkatkan visibilitas bisnis Anda.",
        heroImages: DEFAULT_AVATARS,
        hardSkills: [
            { title: "Frontend Mastery", description: "Mahir dalam React.js, Next.js, dan Tailwind CSS untuk tampilan modern dan responsif." },
            { title: "Backend Systems", description: "Pengembangan server-side yang kuat menggunakan Node.js, Python, atau PHP (Laravel)." },
            { title: "API Integration", description: "Integrasi sistem pihak ketiga, payment gateway, dan sinkronisasi data real-time." },
            { title: "SEO Optimization", description: "Struktur kode yang dioptimalkan untuk peringkat mesin pencari yang lebih baik." },
            { title: "Performance Tuning", description: "Memastikan waktu muat website cepat dan skor PageSpeed yang tinggi." }
        ],
        softSkills: [
            { title: "Clean Code", description: "Menulis kode yang rapi, terdokumentasi, dan mudah dipelihara oleh tim lain." },
            { title: "Agile Mindset", description: "Bekerja dengan metodologi Scrum untuk delivery produk yang cepat dan terukur." },
            { title: "Adaptive Learning", description: "Selalu mengikuti perkembangan teknologi web terbaru untuk solusi terbaik." },
            { title: "Logical Reasoning", description: "Kemampuan memecahkan bug kompleks dan tantangan algoritma." },
            { title: "Communication", description: "Mampu menjelaskan status teknis kepada stakeholder non-teknis dengan jelas." }
        ],
        levels: [
            {
                title: "Jr. Web Developer",
                bulletPoints: [
                    "Lulusan IT dengan pemahaman HTML/CSS/JS kuat",
                    "Familiar dengan satu framework modern",
                    "Mampu melakukan slicing desain ke kode",
                    "Tumbuh kembang di bawah supervisi senior"
                ],
                salaryRange: "IDR 3.500K - 5.500K"
            },
            {
                title: "Web Developer",
                bulletPoints: [
                    "3+ tahun pengalaman development web fullstack",
                    "Mahir dalam optimasi database dan caching",
                    "Berhasil mendeploy minimal 5 website produksi",
                    "Memahami DevOps dasar dan CI/CD"
                ],
                salaryRange: "IDR 6.000K - 9.000K"
            },
            {
                title: "Sr. Web Developer",
                bulletPoints: [
                    "5+ tahun pengalaman di industri software",
                    "Ahli dalam microservices arsitektur",
                    "Mampu merancang skalabilitas sistem jutaan user",
                    "Experience memimpin tim developer (Lead Dev)"
                ],
                salaryRange: "IDR 10.000K - 18.000K"
            }
        ],
        hiringProcessSteps: COMMON_HIRING_PROCESS,
        afterHireSteps: COMMON_AFTER_HIRE,
        relatedJobs: [
            { title: "Front-End Developer", slug: "website-development" },
            { title: "Back-End Developer", slug: "website-development" }
        ],
        ctaTitle: "Wujudkan Website <br/>Profesional Sekarang",
        ctaDescription: "Dapatkan tenaga ahli web yang siap membangun identitas digital bisnis Anda.",
        ctaButtonText: "Rekrut Web Developer"
    },
    {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        roleName: "Mobile Developer",
        heroTitle: "<span class='text-primary block mb-2'>Mobile</span> App Developer",
        heroDescription: "Rekrut pengembang aplikasi mobile Android & iOS. Spesialis Flutter, React Native, dan Swift yang fokus pada user experience responsif dan performa native.",
        heroImages: DEFAULT_AVATARS,
        hardSkills: [
            { title: "Cross-Platform Dev", description: "Mahir menggunakan Flutter atau React Native untuk pengembangan efisien satu kode." },
            { title: "Native Features", description: "Integrasi GPS, Kamera, Bluetooth, dan sensor perangkat mobile lainnya." },
            { title: "App Lifecycle", description: "Memahami manajemen state dan efisiensi memori pada perangkat smartphone." },
            { title: "Store Submission", description: "Pengalaman merilis dan mengelola update di Google Play Store & Apple App Store." },
            { title: "Offline Support", description: "Implementasi caching lokal dan sinkronisasi data saat koneksi internet terputus." }
        ],
        softSkills: [
            { title: "User Centric", description: "Fokus pada kenyamanan penggunaan aplikasi di satu tangan (one-handed usage)." },
            { title: "Performance Minded", description: "Menjamin animasi 60 FPS dan transisi layar yang mulus tanpa lag." },
            { title: "Problem Solving", description: "Handal dalam menangani perbedaan perilaku aplikasi antar versi OS yang berbeda." },
            { title: "Detailed QA", description: "Menguji aplikasi di berbagai tipe dan ukuran layar smartphone secara teliti." },
            { title: "Collaborative", description: "Sinkronisasi intens dengan tim Backend untuk konsumsi API yang efisien." }
        ],
        levels: [
            {
                title: "Jr. Mobile Developer",
                bulletPoints: [
                    "Memahami dasar Flutter / React Native",
                    "Pernah membuat minimal 1 aplikasi portofolio",
                    "Memahami dasar-dasar UI Material/Cupertino",
                    "Familiar dengan Git version control"
                ],
                salaryRange: "IDR 4.000K - 6.000K"
            },
            {
                title: "Mobile Developer",
                bulletPoints: [
                    "3+ tahun pengalaman profesional mobile dev",
                    "Memahami State Management kompleks (Bloc/Redux)",
                    "Pernah menangani integrasi Third-party SDK",
                    "Mampu melakukan optimasi APK/IPA size"
                ],
                salaryRange: "IDR 7.000K - 11.000K"
            },
            {
                title: "Sr. Mobile Developer",
                bulletPoints: [
                    "5+ tahun pengalaman memimpin proyek mobile",
                    "Ahli dalam arsitektur Clean Code pada mobile",
                    "Experience menangani aplikasi dengan ribuan active users",
                    "Mampu merancang infrastruktur Push Notification masif"
                ],
                salaryRange: "IDR 12.000K - 20.000K"
            }
        ],
        hiringProcessSteps: COMMON_HIRING_PROCESS,
        afterHireSteps: COMMON_AFTER_HIRE,
        relatedJobs: [
            { title: "UI/UX Designer", slug: "ui-ux-design" },
            { title: "Back-End Developer", slug: "website-development" }
        ],
        ctaTitle: "Genggam Pelanggan <br/>Melalui Aplikasi Mobile",
        ctaDescription: "Rekrut developer berbakat untuk membangun aplikasi yang disukai pengguna smartphone.",
        ctaButtonText: "Rekrut Mobile Developer"
    },
    {
        slug: "mvp-development",
        title: "MVP Development",
        roleName: "MVP Strategist",
        heroTitle: "<span class='text-primary block mb-2'>MVP</span> Builder & Strategist",
        heroDescription: "Rekrut spesialis pembangunan MVP (Minimum Viable Product). Fokus pada validasi ide tercepat dengan fitur inti yang fungsional dan siap skala.",
        heroImages: DEFAULT_AVATARS,
        hardSkills: [
            { title: "Rapid Prototyping", description: "Membangun fungsi inti produk dalam hitungan minggu (Bukan bulan)." },
            { title: "Lean Architecture", description: "Memilih tech stack yang tepat untuk kecepatan awal namun tetap bisa dikembangkan." },
            { title: "Product Validation", description: "Implementasi analytics untuk mengukur kesuksesan fitur di tahap awal." },
            { title: "Agile Execution", description: "Siklus pengerjaan iteratif untuk mengakomodasi feedback pasar yang dinamis." },
            { title: "Cloud Integration", description: "Deployment cepat menggunakan layanan managed cloud (AWS Amplify, Firebase, etc)." }
        ],
        softSkills: [
            { title: "Startup Mindset", description: "Berpikir praktis untuk mengutamakan fungsi di atas estetika berlebihan di tahap awal." },
            { title: "Prioritization", description: "Andal dalam mengidentifikasi fitur Must-Have vs Nice-to-Have." },
            { title: "Speed Focused", description: "Memiliki dorongan tinggi untuk merilis produk ke pasar secepat mungkin." },
            { title: "Pragmatism", description: "Memberikan solusi teknis yang paling cost-effective untuk pengujian pasar." },
            { title: "Adaptability", description: "Siap melakukan pivot teknis jika feedback user mengharuskan perubahan arah." }
        ],
        levels: [
            {
                title: "MVP Developer",
                bulletPoints: [
                    "Generalist dengan kemampuan frontend & backend",
                    "Memahami prinsip Lean Startup",
                    "Mampu membangun fitur utama secara mandiri",
                    "Fokus pada fungsionalitas produk"
                ],
                salaryRange: "IDR 5.000K - 8.000K"
            },
            {
                title: "MVP Lead / Architect",
                bulletPoints: [
                    "4+ tahun pengalaman membangun produk dari nol",
                    "Ahli dalam pemilihan infrastruktur startup",
                    "Pernah membawa produk dari MVP ke tahap Scaling",
                    "Mampu mengelola tim kecil secara efisien"
                ],
                salaryRange: "IDR 9.000K - 15.000K"
            },
            {
                title: "Product Strategist (MVP)",
                bulletPoints: [
                    "Gabungan kemampuan teknis dan analisa bisnis",
                    "Mampu membantu owner mendefinisikan scope MVP",
                    "Fokus pada ROI dan Market Fit",
                    "Experience mendampingi proses penggalangan dana"
                ],
                salaryRange: "IDR 12.000K - 20.000K"
            }
        ],
        hiringProcessSteps: COMMON_HIRING_PROCESS,
        afterHireSteps: COMMON_AFTER_HIRE,
        relatedJobs: [
            { title: "Full Stack Developer", slug: "website-development" },
            { title: "UI/UX Designer", slug: "ui-ux-design" }
        ],
        ctaTitle: "Validasi Ide Anda <br/>Sekarang Juga",
        ctaDescription: "Berhenti berencana, mulai membangun. Rekrut ahli pembangunan MVP kami hari ini.",
        ctaButtonText: "Rekrut MVP Strategist"
    },
    {
        slug: "custom-software-development",
        title: "Custom Software Development",
        roleName: "Software Engineer",
        heroTitle: "<span class='text-primary block mb-2'>Custom</span> Software Engineer",
        heroDescription: "Rekrut insinyur perangkat lunak untuk solusi khusus. ERP, CRM, dan sistem manajemen internal perusahaan yang kompleks dan terintegrasi.",
        heroImages: DEFAULT_AVATARS,
        hardSkills: [
            { title: "Enterprise Logic", description: "Pemetaan alur bisnis perusahaan ke dalam logika kode yang presisi." },
            { title: "Complexity Handling", description: "Membangun sistem yang menangani jutaan baris data secara stabil." },
            { title: "System Integration", description: "Menghubungkan software baru dengan sistem legacy atau hardware khusus." },
            { title: "Security Specialist", description: "Audit keamanan level enterprise dan perlindungan data sensitif." },
            { title: "Managed Services", description: "Membangun sistem dengan pemeliharaan otomatis dan reporting canggih." }
        ],
        softSkills: [
            { title: "Business Acumen", description: "Memahami model bisnis klien untuk memberikan saran software yang tepat." },
            { title: "Longevity Mindset", description: "Membangun software yang dirancang untuk digunakan dalam dekade mendatang." },
            { title: "Integrity", description: "Kerahasiaan data perusahaan adalah prioritas tertinggi dalam pengerjaan." },
            { title: "Structural Logic", description: "Berpikir secara sistemik untuk menghindari konflik antar modul aplikasi." },
            { title: "Stakeholder Handling", description: "Mampu berdiskusi dengan level eksekutif mengenai visi digital perusahaan." }
        ],
        levels: [
            {
                title: "Software Engineer",
                bulletPoints: [
                    "S1 Informatika dengan standar akademis tinggi",
                    "2+ tahun pengalaman di software house / enterprise",
                    "Mahir dalam OOP dan Design Patterns",
                    "Mampu bekerja dengan dokumentasi teknis ketat"
                ],
                salaryRange: "IDR 6.000K - 10.000K"
            },
            {
                title: "Senior Software Engineer",
                bulletPoints: [
                    "5+ tahun pengalaman membangun sistem inti",
                    "Ahli dalam SQL & NoSQL optimization",
                    "Pernah memimpin migrasi sistem besar",
                    "Memahami standar kualitas ISO/IEC untuk software"
                ],
                salaryRange: "IDR 11.000K - 18.000K"
            },
            {
                title: "Solution Architect",
                bulletPoints: [
                    "8+ tahun di industri perangkat lunak",
                    "Perancang blueprint sistem berskala nasional/global",
                    "Advisor untuk pemilihan teknologi jangka panjang",
                    "Menguasai aspek risk management teknologi"
                ],
                salaryRange: "IDR 20.000K++"
            }
        ],
        hiringProcessSteps: COMMON_HIRING_PROCESS,
        afterHireSteps: COMMON_AFTER_HIRE,
        relatedJobs: [
            { title: "Project Manager", slug: "specifications-and-wireframe" },
            { title: "Back-End Developer", slug: "website-development" }
        ],
        ctaTitle: "Otomatisasi Bisnis <br/>Tanpa Batas",
        ctaDescription: "Dapatkan solusi software unik yang mengikuti cara kerja bisnis Anda, bukan sebaliknya.",
        ctaButtonText: "Rekrut Software Engineer"
    }
];

