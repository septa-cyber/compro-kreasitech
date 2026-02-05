"use client";
import React from "react";

export default function TaaSTalentRoles() {
    return (
        <section className="py-24 bg-violet-800 text-white" data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-medium font-montserrat text-white">
                        Peran Teknologi & Digital yang Kami Sediakan
                    </h2>
                    <p className="text-base font-normal font-montserrat text-white/80 max-w-2xl mx-auto">
                        Akses talenta digital terbaik di berbagai bidang teknologi untuk mendukung kebutuhan proyek dan tim Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Front-End Development */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white mb-6">Front-End Development</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Front-End Developer (React, Vue, Angular)</li>
                            <li className="text-sm text-white/90">UI/UX Designer</li>
                        </ul>
                    </div>

                    {/* Mobile App */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white mb-6">Mobile App</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Android Developer</li>
                            <li className="text-sm text-white/90">Flutter Developer</li>
                            <li className="text-sm text-white/90">Swift Developer</li>
                        </ul>
                    </div>

                    {/* Back-End Development */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white mb-6">Back-End Development</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Back-End Developer (Node.js, Python, PHP, Java)</li>
                            <li className="text-sm text-white/90">Full Stack Developer</li>
                        </ul>
                    </div>

                    {/* Infrastructure */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white mb-6">Infrastructure</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Cloud Developer</li>
                            <li className="text-sm text-white/90">DevOps Developer</li>
                            <li className="text-sm text-white/90">Network Engineering</li>
                            <li className="text-sm text-white/90">Systems/Databases Administration</li>
                        </ul>
                    </div>

                    {/* Quality & Testing */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white mb-6">Quality & Testing</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Quality Assurance (QA Tester, Automation QA)</li>
                        </ul>
                    </div>

                    {/* Functional */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-medium text-white mb-6">Functional</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Project Manager</li>
                            <li className="text-sm text-white/90">Program Manager</li>
                            <li className="text-sm text-white/90">Scrum Master</li>
                            <li className="text-sm text-white/90">Business Analyst</li>
                            <li className="text-sm text-white/90">Technical Writer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
