import React from 'react';

export default function HiringProcess() {
    return (
        <section className="py-24 bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 lg:gap-24">
                <div className="w-full max-w-[784px] text-center">
                    <h2 className="text-3xl lg:text-4xl font-medium font-montserrat text-text-light leading-tight">
                        Discover the Power of <br className="hidden md:block" /> KreasiTech Hiring Process
                    </h2>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8 lg:gap-0">
                    {/* 1. Candidate Screening */}
                    <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
                        <h3 className="text-2xl font-medium font-montserrat text-text-light text-center">
                            1. Candidate Screening
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                            Implement strategies to effectively evaluate resumes and shortlist candidates based on their qualifications.
                        </p>
                    </div>

                    {/* 2. Interview Process Improvement */}
                    <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6 lg:border-l lg:border-r border-gray-300">
                        <h3 className="text-2xl font-medium font-montserrat text-text-light text-center">
                            2. Interview Process Improvement
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                            Refine the interview structure to better assess candidate skills and cultural fit.
                        </p>
                    </div>

                    {/* 3. Onboarding Experience */}
                    <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
                        <h3 className="text-2xl font-medium font-montserrat text-text-light text-center">
                            3. Onboarding Experience
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                            Develop a comprehensive onboarding program to help new hires integrate smoothly into the team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
