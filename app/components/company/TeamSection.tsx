import React from "react";

export default function TeamSection() {
    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">KreasiTech Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden max-w-6xl mx-auto">
                    {/* Item 1 */}
                    {[
                        "Canu.png", "Dimas.png", "Fena.png", "Fendi.png", "Galang.png",
                        "Imdad.png", "Janah.png", "Luthfi.png", "Nina.png", "Rahmat.png",
                        "Rian.png", "Rio.png", "Tia.png", "Wafik.png"
                    ].map((filename, index) => {
                        return (
                            <div key={index} className="aspect-[3/4] relative group overflow-hidden bg-gray-100">
                                <img
                                    alt={`Team member ${filename.replace('.png', '')}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    src={`/assets/images/employee/${filename}`}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="text-white font-semibold text-xl font-montserrat mb-1">
                                        {filename.replace('.png', '')}
                                    </h3>
                                    <p className="text-gray-200 text-xs font-medium font-montserrat">
                                        Kreasitech Team
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
