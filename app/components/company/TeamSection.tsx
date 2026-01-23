import React from "react";

export default function TeamSection() {
    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">KreasiTech Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden max-w-6xl mx-auto">
                    {/* Item 1 */}
                    {[
                        { name: "Nurjanah", role: "Finance, Accounting, and Tax Officer (FAT Officer)", image: "Janah.png" },
                        { name: "Vincintia Dwi Tamara", role: "HR Lead (Operations, Legal & Employee Relations)", image: "Tia.png" },
                        { name: "Nina Pungki Kusuma", role: "Talent Acquisition", image: "Nina.png" },
                        { name: "Rio Kisna Eka Putra", role: "IT Project Manager & Business Analyst", image: "Rio.png" },
                        { name: "Rahmat Khoirun Ni'am", role: "IT Project Manager & Business Analyst", image: "Rahmat.png" },
                        { name: "Wafikulinnuha", role: "Outsystems & Backend Developer", image: "Wafik.png" },
                        { name: "Fendi Rahman Saputro", role: "Frontend Web & Mobile Developer", image: "Fendi.png" },
                        { name: "Prafitra Dimas Akbar", role: "Backend Developer", image: "Dimas.png" },
                        { name: "Imdadu Rohman", role: "Frontend Web & Mobile Developer", image: "Imdad.png" },
                        { name: "Galang Pratama Sukma Putra", role: "IT Support", image: "Galang.png" },
                        { name: "Luthfi Robani", role: "IT Support", image: "Luthfi.png" },
                        { name: "Canu Ali Subhan", role: "Quality Assurance Engineer", image: "Canu.png" },
                        { name: "Rian Rama Nugraha", role: "Genexus Developer & DevOps Engineer", image: "Rian.png" },
                        { name: "Trifena Katrina", role: "UIUX Designer & Quality Assurance Engineer", image: "Fena.png" },
                    ].map((member, index) => {
                        return (
                            <div key={index} className="aspect-[3/4] relative group overflow-hidden bg-gray-100">
                                <img
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    src={`/assets/images/employee/${member.image}`}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="text-white font-semibold text-lg leading-tight font-montserrat mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-200 text-xs font-medium font-montserrat">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
