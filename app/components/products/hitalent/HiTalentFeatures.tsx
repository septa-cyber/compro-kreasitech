"use client";
import React from 'react';

export default function HiTalentFeatures() {
    return (
        <section className="py-24 bg-violet-800 text-white overflow-hidden " data-theme="dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-medium font-montserrat mb-6">
                        Match your energy with our workflow
                    </h2>
                    <p className="text-sm md:text-base font-normal font-montserrat text-white/90 leading-relaxed">
                        We ensure every project is executed efficiently and tailored to your unique business needs, providing innovative solutions that drive success.
                    </p>
                </div>

                <div className="w-full flex flex-wrap justify-center items-center content-center border border-white/20 divide-y divide-white/20 md:divide-y-0">
                    {/* Row 1 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center relative">
                            <i className="fas fa-shapes text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Discovery & Requirements
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Are essential documents outlining a project's boundaries and goals.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center relative">
                            <i className="fas fa-pen-nib text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Wireframe & UI/UX Design
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Details the step-by-step method of developing or improving a current product.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center relative">
                            <i className="fas fa-shapes text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Discovery & Requirements
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Are essential documents outlining a project's boundaries and goals.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center relative">
                            <i className="fas fa-shapes text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Discovery & Requirements
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Are essential documents outlining a project's boundaries and goals.
                        </p>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center relative">
                            <i className="fas fa-users text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            UAT
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            Embodies a success story built on perseverance, expertise, and valor.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-12 h-12 flex items-center justify-center relative">
                            <i className="fas fa-rocket text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
                        </div>
                        <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                            Deployment
                        </h3>
                        <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                            It allows for ongoing improvements through constant reviews and iterative changes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
