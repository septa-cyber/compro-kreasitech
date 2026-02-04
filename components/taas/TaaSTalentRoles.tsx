"use client";
import React from "react";

export default function TaaSTalentRoles() {
    const categories = [
        {
            title: "Mobile App",
            roles: ["Android Developer", "Flutter Developer", "Swift Developer"]
        },
        {
            title: "Infrastructure",
            roles: ["Cloud Developer", "DevOps Developer", "Network Engineering", "Systems/Databases Administration"]
        },
        {
            title: "Functional",
            roles: ["Project Manager", "Program Manager", "Scrum Master", "Business Analyst", "Technical Writer"]
        },
        {
            title: "Product & UX",
            roles: ["UI/UX Design", "Visual Design", "Interaction Design", "User Research", "Creative/Art Director", "Product Owner"]
        },
        {
            title: "Software",
            roles: ["Front-End Developer", "Back-End Developer", "Full Stack Developer", "QA Engineer", "QA Automation"]
        },
        {
            title: "Data",
            roles: ["Data Science", "Data Engineering", "Machine Learning", "AI Engineer", "Computer Vision", "Database", "Data Analysis"]
        }
    ];

    return (
        <section className="py-24 bg-violet-800 text-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-medium font-montserrat text-white">
                        Peran Teknologi & Digital yang Kami Sediakan
                    </h2>
                    <p className="text-base font-normal font-montserrat text-white/80 max-w-2xl mx-auto">
                        Akses talenta digital terbaik di berbagai bidang teknologi untuk mendukung kebutuhan proyek dan tim Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {categories.map((category, index) => (
                        <div key={index} className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-medium mb-6 font-montserrat text-white">{category.title}</h3>
                                <ul className="space-y-3 text-sm text-white/90">
                                    {category.roles.map((role, roleIndex) => (
                                        <li
                                            key={roleIndex}
                                            className="flex justify-between items-center pb-2 hover:pl-2 transition-all cursor-pointer font-montserrat"
                                        >
                                            {role}
                                            <i className="fas fa-arrow-up-right text-xs"></i>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
