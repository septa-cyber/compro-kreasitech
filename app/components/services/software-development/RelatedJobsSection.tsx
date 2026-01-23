import React from "react";
import { MdNorthEast } from "react-icons/md";

export default function RelatedJobsSection() {
    return (
        <section className="py-20 bg-[#4834d4] text-white relative overflow-hidden">
            {/* Subtle gradient matching the design style */}
            <div className="absolute inset-0 bg-[#4834d4]"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl font-bold mb-10 font-montserrat">Related Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {["Front-End Developer", "Back-End Developer", "Full Stack Developer", "QA Engineer"].map((job, i) => (
                        <a key={i} className="group flex justify-between items-center py-4 border-b border-white/20 hover:border-white transition font-montserrat" href="#">
                            <span className="text-lg font-medium">{job}</span>
                            <MdNorthEast className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition text-sm" />
                        </a>
                    ))}
                    <a className="group flex justify-between items-center py-4 border-b border-white/20 hover:border-white transition md:col-span-2 w-full md:w-1/2 font-montserrat" href="#">
                        <span className="text-lg font-medium">QA Automation</span>
                        <MdNorthEast className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition text-sm" />
                    </a>
                </div>
            </div>
        </section>
    );
}
