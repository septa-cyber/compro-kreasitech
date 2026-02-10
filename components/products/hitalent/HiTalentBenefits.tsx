"use client";

export default function HiTalentBenefits() {
    const leftBenefits = [
        {
            title: "Akurasi Data Terjamin",
            description: "Meminimalkan kesalahan manusia dalam pemrosesan penggajian, perpajakan, dan tunjangan.",
        },
        {
            title: "Layanan Mandiri Karyawan",
            description: "Karyawan dapat dengan mudah mengakses slip gaji, mengajukan cuti, dan memperbarui informasi pribadi mereka kapan saja.",
        },
        {
            title: "Analitik HR Cerdas",
            description: "Dapatkan wawasan real-time untuk mendukung pengambilan keputusan berbasis data.",
        },
    ];

    const rightBenefits = [
        {
            title: "Hemat Waktu & Biaya",
            description: "Eliminasi tugas manual dengan sistem otomatis untuk penggajian, absensi, dan manajemen cuti.",
        },
        {
            title: "Terintegrasi & Fleksibel",
            description: "Kompatibel dengan semua jenis bisnis dan dapat diakses kapan saja, di mana saja.",
        },
        {
            title: "Kepatuhan Regulasi",
            description: "Memastikan kepatuhan penuh terhadap peraturan ketenagakerjaan dengan mudah.",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden font-montserrat">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-medium text-center mb-16 md:mb-24 text-[#171717]">
                    Keuntungan
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
                    {/* Left Benefits - Desktop */}
                    <div className="hidden lg:flex flex-1 flex-col space-y-24 items-end text-right">
                        {leftBenefits.map((benefit, index) => (
                            <div key={index} className="max-w-xs group">
                                <h3 className="text-xl font-medium text-[#171717] mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-[#171717]/60 leading-relaxed font-normal">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Phone Mockup - Center */}
                    <div className="flex-shrink-0 w-[280px] sm:w-[320px] relative z-10 mx-auto lg:mx-8">
                        <div className="rounded-[40px] border-8 border-[#171717] overflow-hidden shadow-2xl">
                            <img
                                src="/assets/images/products/Login.svg"
                                alt="HiTalent Mobile Login Mockup"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right Benefits - Desktop */}
                    <div className="hidden lg:flex flex-1 flex-col space-y-24 items-start text-left">
                        {rightBenefits.map((benefit, index) => (
                            <div key={index} className="max-w-xs group">
                                <h3 className="text-xl font-medium text-[#171717] mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-[#171717]/60 leading-relaxed font-normal">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet Benefits List (Stacked) */}
                    <div className="lg:hidden w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 px-4">
                        {[...leftBenefits, ...rightBenefits].map((benefit, index) => (
                            <div key={index} className="text-center md:text-left">
                                <h3 className="text-lg font-medium text-[#171717] mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-[#171717]/60 leading-relaxed font-normal">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

