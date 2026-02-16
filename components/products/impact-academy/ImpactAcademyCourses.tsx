"use client";

import React from 'react';
import Link from 'next/link';

const courses = [
    {
        id: 1,
        title: "Data Analytics",
        description: "A Data Analyst collects, cleans, and interprets data to provide actionable insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        bgColor: "bg-blue-50",
        points: [
            "Understand & solve business problems using data",
            "Explore AI tools through hands-on projects",
            "Virtual internship with real cases from partners"
        ]
    },
    {
        id: 2,
        title: "Digital Marketing",
        description: "Creates and optimizes digital campaigns to grow brands and reach audiences.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop",
        bgColor: "bg-pink-50",
        points: [
            "Hands-on projects to master digital marketing tools",
            "Run real SME ad campaigns with actual budgets",
            "Virtual internship with real cases from partners"
        ]
    },
    {
        id: 3,
        title: "Software Engineering",
        description: "Builds and maintains software to solve technical problems.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        bgColor: "bg-amber-50",
        points: [
            "Master top programming languages & frameworks",
            "Hands-on full stack software development projects",
            "Be mentored by industry experts"
        ]
    }
];

export default function ImpactAcademyCourses() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
                <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                    <h2 className="font-h2">
                        Start Learning Today
                    </h2>
                    <p className="font-body max-w-2xl">
                        Unlock your potential with Impact Academy&apos;s expert-led training programs.
                    </p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white flex flex-col rounded-none overflow-hidden group border border-gray-300 transition-shadow duration-300 hover:shadow-lg h-full"
                        >
                            {/* Image - Fixed Aspect Ratio */}
                            <div className="w-full aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 flex flex-col items-start gap-4">
                                <h3 className="font-h4 leading-snug">
                                    {course.title}
                                </h3>

                                <p className="font-body-sm">
                                    {course.description}
                                </p>

                                {/* Bullet Points */}
                                <ul className="space-y-3 mt-2">
                                    {course.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-body-sm">
                                                {point}
                                            </span>
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

