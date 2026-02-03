import React from "react";

export default function TeamSection() {
    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">Magang KreasiTech</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden max-w-6xl mx-auto">
                    {/* Item 1 */}
                    {[
                        { name: "Wahyu Septa Pramudya", role: "UI/UX Designer", batch: "Angkatan 1 - 2026", image: "Septa.png" },
                        { name: "Pradipta Triatmaja Purwa Nugraha", role: "Frontend Web Developer", batch: "Angkatan 1 - 2026", image: "Dipta.png" },
                    ].map((member, index) => {
                        return (
                            <div key={index} className="aspect-[3/4] relative group overflow-hidden bg-gray-100">
                                <img
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    src={`/assets/images/Intern/${member.image}`}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center p-6 text-center">
                                    <div className="flex-grow flex flex-col justify-center items-center">
                                        <h3 className="text-white font-semibold text-lg leading-tight font-montserrat mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-200 text-xs font-medium font-montserrat">
                                            {member.role}
                                        </p>
                                    </div>
                                    <p className="text-white text-sm font-medium font-montserrat mt-auto px-3 py-1">
                                        {member.batch}
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
