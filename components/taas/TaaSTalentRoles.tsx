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
                    {/* Data */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Data</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Data Science</li>
                            <li className="text-sm text-white/90">Data Engineering</li>
                            <li className="text-sm text-white/90">Machine Learning</li>
                            <li className="text-sm text-white/90">AI Engineer</li>
                            <li className="text-sm text-white/90">Computer Vision</li>
                            <li className="text-sm text-white/90">Database</li>
                            <li className="text-sm text-white/90">Data Analysis</li>
                        </ul>
                    </div>

                    {/* Product & UX */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Product & UX</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">UI/UX Design</li>
                            <li className="text-sm text-white/90">Visual Design</li>
                            <li className="text-sm text-white/90">Interaction Design</li>
                            <li className="text-sm text-white/90">User Research</li>
                            <li className="text-sm text-white/90">Creative/Art Director</li>
                            <li className="text-sm text-white/90">Product Owner</li>
                        </ul>
                    </div>

                    {/* Functional */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Functional</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Project Manager</li>
                            <li className="text-sm text-white/90">Program Manager</li>
                            <li className="text-sm text-white/90">Scrum Master</li>
                            <li className="text-sm text-white/90">Business Analyst</li>
                            <li className="text-sm text-white/90">Technical Writer</li>
                        </ul>
                    </div>

                    {/* Mobile Application */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Mobile Application</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Android Developer</li>
                            <li className="text-sm text-white/90">Flutter Developer</li>
                            <li className="text-sm text-white/90">Swift Developer</li>
                        </ul>
                    </div>

                    {/* Software */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Software</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Front End</li>
                            <li className="text-sm text-white/90">Back End</li>
                            <li className="text-sm text-white/90">Full Stack</li>
                            <li className="text-sm text-white/90">QA Engineer</li>
                            <li className="text-sm text-white/90">QA Automation</li>
                        </ul>
                    </div>

                    {/* Infrastructure */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-6">Infrastructure</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/90">Cloud</li>
                            <li className="text-sm text-white/90">DevOps</li>
                            <li className="text-sm text-white/90">Network Engineering</li>
                            <li className="text-sm text-white/90">Systems/Databases Administration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
