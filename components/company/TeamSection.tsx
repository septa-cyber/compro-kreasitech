import React from "react";

export default function TeamSection() {
    const teamMembers = [
        { name: "Nurjanah", role: "Finance, Accounting, and Tax Officer (FAT Officer)", image: "employee/Janah.png" },
        { name: "Vincintia Dwi Tamara", role: "HR Lead (Operations, Legal & Employee Relations)", image: "employee/Tia.png" },
        { name: "Nina Pungki Kusuma", role: "Talent Acquisition", image: "employee/Nina.png" },
        { name: "Rio Kisna Eka Putra", role: "IT Project Manager & Business Analyst", image: "employee/Rio.png" },
        { name: "Rahmat Khoirun Ni'am", role: "IT Project Manager & Business Analyst", image: "employee/Rahmat.png" },
        { name: "Wafikulinnuha", role: "Outsystems & Backend Developer", image: "employee/Wafik.png" },
        { name: "Fendi Rahman Saputro", role: "Frontend Web & Mobile Developer", image: "employee/Fendi.png" },
        { name: "Prafitra Dimas Akbar", role: "Backend Developer", image: "employee/Dimas.png" },
        { name: "Imdadu Rohman", role: "Frontend Web & Mobile Developer", image: "employee/Imdad.png" },
        { name: "Galang Pratama Sukma Putra", role: "IT Support", image: "employee/Galang.png" },
        { name: "Luthfi Robani", role: "IT Support", image: "employee/Luthfi.png" },
        { name: "Canu Ali Subhan", role: "Quality Assurance Engineer", image: "employee/Canu.png" },
        { name: "Rian Rama Nugraha", role: "Genexus Developer & DevOps Engineer", image: "employee/Rian.png" },
        { name: "Trifena Katrina", role: "UIUX Designer & Quality Assurance Engineer", image: "employee/Fena.png" },
        // Interns
        { name: "Wahyu Septa Pramudya", role: "UI/UX Designer (Intern)", image: "Intern/Septa.png" },
        { name: "Pradipta Triatmaja Purwa Nugraha", role: "Frontend Web Developer (Intern)", image: "Intern/Dipta.png" },
    ];

    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">Tim KreasiTech</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => {
                        return (
                            <div key={index} className="aspect-[3/4] relative group overflow-hidden bg-gray-100">
                                <img
                                    alt={member.name}
                                    className="w-full h-full object-cover transition duration-500"
                                    src={`/assets/images/${member.image}`}
                                />
                                {/* Overlay with name/role - visible by default, hidden on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-end text-center p-4">
                                    <h3 className="text-white font-semibold text-sm md:text-lg leading-tight font-montserrat mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-200 text-[10px] md:text-xs font-medium font-montserrat">
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
