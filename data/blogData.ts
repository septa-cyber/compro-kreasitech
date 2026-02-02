// Sample blog data for demonstration
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
    category: string;
    categoryColor: string;
    coverImage: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "transformasi-digital-membangun-masa-depan",
        title: "Transformasi Digital: Membangun Masa Depan yang Lebih Cerdas",
        excerpt: "Temukan bagaimana teknologi inovatif mengubah cara kita bekerja, belajar, dan berinteraksi dalam ekosistem digital yang terus berkembang pesat.",
        content: `
## Pendahuluan

Transformasi digital bukan lagi sekadar tren, melainkan kebutuhan mendesak bagi setiap bisnis yang ingin bertahan dan berkembang di era modern. Dalam artikel ini, kita akan mengeksplorasi bagaimana teknologi inovatif mengubah lanskap bisnis secara fundamental.

## Mengapa Transformasi Digital Penting?

Perusahaan yang berhasil mengadopsi teknologi digital memiliki keunggulan kompetitif yang signifikan. Mereka dapat:

- **Meningkatkan efisiensi operasional** melalui otomatisasi proses
- **Memperluas jangkauan pasar** dengan platform digital
- **Memberikan pengalaman pelanggan yang lebih baik** dengan data-driven insights
- **Beradaptasi lebih cepat** terhadap perubahan pasar

## Langkah-Langkah Implementasi

### 1. Evaluasi Kondisi Saat Ini
Sebelum memulai transformasi, penting untuk memahami posisi perusahaan saat ini dalam spektrum digitalisasi.

### 2. Tentukan Visi dan Tujuan
Transformasi tanpa arah yang jelas akan menghabiskan sumber daya tanpa hasil yang terukur.

### 3. Pilih Teknologi yang Tepat
Tidak semua teknologi cocok untuk setiap bisnis. Pilihlah yang sesuai dengan kebutuhan spesifik perusahaan Anda.

> "Transformasi digital bukanlah tentang teknologi, melainkan tentang strategi dan cara berpikir baru." - Satya Nadella

## Kesimpulan

Transformasi digital adalah perjalanan, bukan tujuan akhir. Perusahaan yang berhasil adalah yang terus belajar dan beradaptasi dengan perkembangan teknologi.
        `,
        date: "21 Jan 2026",
        author: {
            name: "Ahmad Rizky",
            avatar: "https://placehold.co/48x48/6366f1/ffffff?text=AR"
        },
        category: "TECHNOLOGY",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Digital", "Teknologi", "Bisnis", "Inovasi"]
    },
    {
        id: 2,
        slug: "kecerdasan-buatan-peluang-baru-industri-kreatif",
        title: "Kecerdasan Buatan: Peluang Baru dalam Industri Kreatif",
        excerpt: "Bagaimana AI membantu para kreator untuk mengeksplorasi batas-batas baru dalam seni, desain, dan musik tanpa menghilangkan sentuhan manusia.",
        content: `
## AI dan Kreativitas: Mitra, Bukan Pengganti

Kecerdasan buatan telah membuka pintu bagi kemungkinan-kemungkinan baru dalam industri kreatif. Dari desain grafis hingga komposisi musik, AI menjadi alat yang powerful bagi para kreator.

## Aplikasi AI dalam Industri Kreatif

### Desain Visual
AI dapat menghasilkan variasi desain dalam hitungan detik, memungkinkan desainer untuk fokus pada konsep dan strategi kreatif.

### Musik dan Audio
Algoritma AI dapat mengkomposisi musik, menciptakan efek suara, dan bahkan membantu dalam proses mixing.

### Penulisan Konten
AI writing assistants membantu penulis mengatasi writer's block dan menghasilkan draft awal dengan cepat.

## Menjaga Sentuhan Manusia

Meski AI semakin canggih, sentuhan manusia tetap tak tergantikan dalam:

- Memahami konteks budaya dan emosional
- Membuat keputusan kreatif yang bermakna
- Menjalin koneksi dengan audiens

## Penutup

AI adalah alat yang luar biasa, namun kreativitas sejati tetap berasal dari pikiran manusia.
        `,
        date: "18 Jan 2026",
        author: {
            name: "Siti Nurhaliza",
            avatar: "https://placehold.co/48x48/ec4899/ffffff?text=SN"
        },
        category: "TIPS_TRICKS",
        categoryColor: "bg-pink-100 text-pink-700",
        coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        tags: ["AI", "Kreativitas", "Desain", "Inovasi"]
    },
    {
        id: 3,
        slug: "masa-depan-pendidikan-belajar-tanpa-batas",
        title: "Masa Depan Pendidikan: Belajar Tanpa Batas Ruang dan Waktu",
        excerpt: "Evolusi metode pembelajaran daring yang memungkinkan akses pendidikan berkualitas bagi siapa saja, di mana saja, dan kapan saja.",
        content: `
## Revolusi Pendidikan Digital

Pandemi global telah mempercepat adopsi pembelajaran online secara dramatis. Namun, perubahan ini membawa dampak positif yang akan bertahan lama.

## Keunggulan Pembelajaran Online

### Aksesibilitas
Siswa dari daerah terpencil kini dapat mengakses materi pembelajaran berkualitas tinggi.

### Fleksibilitas
Belajar bisa dilakukan kapan saja, memungkinkan siswa untuk menyesuaikan dengan ritme belajar mereka sendiri.

### Personalisasi
Platform pembelajaran modern menggunakan AI untuk menyesuaikan materi dengan kebutuhan individual siswa.

## Tantangan yang Harus Diatasi

- **Kesenjangan digital**: Tidak semua siswa memiliki akses internet yang stabil
- **Interaksi sosial**: Pembelajaran tatap muka tetap penting untuk perkembangan sosial
- **Motivasi**: Belajar mandiri membutuhkan disiplin tinggi

## Masa Depan Hybrid

Model pembelajaran masa depan kemungkinan akan menggabungkan yang terbaik dari kedua dunia: fleksibilitas online dengan interaksi tatap muka.
        `,
        date: "15 Jan 2026",
        author: {
            name: "Budi Santoso",
            avatar: "https://placehold.co/48x48/10b981/ffffff?text=BS"
        },
        category: "NEWS",
        categoryColor: "bg-green-100 text-green-700",
        coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
        tags: ["Pendidikan", "E-Learning", "Teknologi"]
    },
    {
        id: 4,
        slug: "membangun-tim-teknologi-yang-solid",
        title: "Membangun Tim Teknologi yang Solid: Tips dari Para Ahli",
        excerpt: "Panduan lengkap untuk merekrut, mengembangkan, dan mempertahankan talenta teknologi terbaik di era persaingan global.",
        content: `
## Mengapa Tim yang Solid Penting?

Di industri teknologi yang bergerak cepat, memiliki tim yang solid adalah kunci kesuksesan. Tim yang baik dapat mengatasi tantangan teknis dengan efektif dan berinovasi dengan konsisten.

## Strategi Rekrutmen

### Fokus pada Potensi
Kemampuan belajar lebih penting dari pengalaman spesifik saat ini.

### Culture Fit
Kandidat yang sejalan dengan nilai perusahaan akan berkontribusi lebih baik dalam jangka panjang.

## Pengembangan Tim

- Berikan kesempatan belajar berkelanjutan
- Ciptakan lingkungan yang mendukung eksperimentasi
- Rayakan keberhasilan dan belajar dari kegagalan

## Retensi Talenta

Talenta terbaik akan bertahan jika mereka merasa:
- Dihargai dan diakui kontribusinya
- Memiliki jalur karir yang jelas
- Bekerja pada proyek yang bermakna
        `,
        date: "12 Jan 2026",
        author: {
            name: "Dewi Lestari",
            avatar: "https://placehold.co/48x48/f59e0b/ffffff?text=DL"
        },
        category: "EVENT",
        categoryColor: "bg-orange-100 text-orange-700",
        coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Tim", "HR", "Rekrutmen", "Karir"]
    },
    {
        id: 5,
        slug: "cybersecurity-melindungi-aset-digital",
        title: "Cybersecurity: Melindungi Aset Digital di Era Ancaman Siber",
        excerpt: "Pelajari strategi dan best practices untuk menjaga keamanan data dan sistem dari ancaman siber yang semakin canggih.",
        content: `
## Ancaman Siber Semakin Nyata

Serangan siber tidak lagi hanya menargetkan perusahaan besar. UMKM dan individu juga menjadi target yang menggiurkan bagi para peretas.

## Jenis Ancaman Umum

### Phishing
Email palsu yang mencoba mencuri kredensial login.

### Ransomware
Malware yang mengenkripsi data dan meminta tebusan.

### Social Engineering
Manipulasi psikologis untuk mendapatkan akses tidak sah.

## Best Practices Keamanan

1. **Gunakan password yang kuat** dan unik untuk setiap akun
2. **Aktifkan two-factor authentication** di mana pun memungkinkan
3. **Update software secara teratur** untuk menutup celah keamanan
4. **Backup data secara berkala** ke lokasi yang aman
5. **Edukasi karyawan** tentang ancaman siber

## Investasi dalam Keamanan

Biaya pencegahan jauh lebih kecil dibanding biaya pemulihan dari serangan siber.
        `,
        date: "10 Jan 2026",
        author: {
            name: "Rizal Pratama",
            avatar: "https://placehold.co/48x48/ef4444/ffffff?text=RP"
        },
        category: "TECHNOLOGY",
        categoryColor: "bg-red-100 text-red-700",
        coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Keamanan", "Cybersecurity", "Data"]
    },
    {
        id: 6,
        slug: "cloud-computing-fondasi-bisnis-modern",
        title: "Cloud Computing: Fondasi Bisnis Modern yang Skalabel",
        excerpt: "Mengapa migrasi ke cloud menjadi langkah strategis bagi perusahaan yang ingin meningkatkan agilitas dan efisiensi operasional.",
        content: `
## Apa Itu Cloud Computing?

Cloud computing memungkinkan perusahaan untuk mengakses sumber daya komputasi melalui internet tanpa perlu membangun infrastruktur sendiri.

## Manfaat Cloud Computing

### Skalabilitas
Tambah atau kurangi kapasitas sesuai kebutuhan tanpa investasi hardware.

### Efisiensi Biaya
Bayar hanya untuk apa yang digunakan dengan model pay-as-you-go.

### Aksesibilitas
Akses data dan aplikasi dari mana saja dengan koneksi internet.

## Model Cloud

- **IaaS**: Infrastructure as a Service
- **PaaS**: Platform as a Service
- **SaaS**: Software as a Service

## Pertimbangan Migrasi

Sebelum migrasi ke cloud, pertimbangkan:
- Kebutuhan keamanan dan compliance
- Biaya jangka panjang
- Kesiapan tim untuk mengelola lingkungan cloud
        `,
        date: "8 Jan 2026",
        author: {
            name: "Andi Wijaya",
            avatar: "https://placehold.co/48x48/8b5cf6/ffffff?text=AW"
        },
        category: "TECHNOLOGY",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
        tags: ["Cloud", "Infrastruktur", "Teknologi"]
    }
];

export const categories = [
    { name: "Semua Topik", value: "all" },
    { name: "Event", value: "EVENT" },
    { name: "News", value: "NEWS" },
    { name: "Technology", value: "TECHNOLOGY" },
    { name: "Tips & Tricks", value: "TIPS_TRICKS" }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    return blogPosts.filter(post => post.slug !== currentSlug).slice(0, limit);
}
