import React from "react";
import { MdNorthEast } from "react-icons/md";

export default function RelatedJobsSection() {
    const jobs = [
        "Front-End Developer",
        "Back-End Developer",
        "Full Stack Developer",
        "QA Engineer",
        "QA Automation"
    ];

    return (
        <section className="w-full py-24 bg-violet-800 flex justify-center" data-theme="dark">
            <div className="w-full max-w-[1200px] px-4 flex flex-col gap-8">
                {/* Title */}
                <h2 className="text-white text-4xl font-medium font-montserrat">
                    Lowongan Terkait
                </h2>

                {/* Jobs Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 content-start">
                    {jobs.map((job, i) => (
                        <a key={i} href="#" className="group flex items-center justify-between md:justify-start gap-4 w-full md:w-[584px] py-2 hover:opacity-80 transition-opacity">
                            <span className="text-white text-2xl font-medium font-montserrat group-hover:underline underline-offset-4 decoration-2">{job}</span>
                            <div className="relative w-6 h-6 overflow-hidden">
                                <MdNorthEast className="text-violet-300 text-xl absolute top-[2px] right-[2px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
