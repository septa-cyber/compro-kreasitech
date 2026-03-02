"use client";
import React from 'react';

// Renamed to fix Turbopack HMR cache issue
export default function HiTalentProcess() {
    return (
        <section id="features" className="py-24 bg-violet-800 text-white overflow-hidden " data-theme="dark">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-h2 mb-6 !text-white">
                        HiTalent Features
                    </h2>
                    <p className="font-body-lg !text-white/90 leading-relaxed">
                        HiTalent menawarkan fitur-fitur yang dapat membantu Anda dalam mengembangkan dan meningkatkan produk Anda.
                    </p>
                </div>

                <div className="w-full flex flex-wrap justify-center items-center content-center border border-white/20 divide-y divide-white/20 md:divide-y-0">
                    {/* Row 1 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center font-body font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            1
                        </div>
                        <h3 className="font-h4 text-center h-14 flex items-center justify-center group-hover:!text-gray-900 transition-colors duration-300">
                            Smart Attendance
                        </h3>
                        <p className="font-body-sm text-center !text-white/80 group-hover:!text-gray-600 transition-colors duration-300">
                            Smart Attendance adalah fitur yang dapat membantu Anda dalam mengelola absensi karyawan Anda dengan lebih mudah.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center font-body font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            2
                        </div>
                        <h3 className="font-h4 text-center h-14 flex items-center justify-center group-hover:!text-gray-900 transition-colors duration-300">
                            Manage Employees
                        </h3>
                        <p className="font-body-sm text-center !text-white/80 group-hover:!text-gray-600 transition-colors duration-300">
                            Manage Employees adalah fitur yang dapat membantu Anda dalam mengelola karyawan Anda dengan lebih mudah.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center font-body font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            3
                        </div>
                        <h3 className="font-h4 text-center h-14 flex items-center justify-center group-hover:!text-gray-900 transition-colors duration-300">
                            Manage Projects
                        </h3>
                        <p className="font-body-sm text-center !text-white/80 group-hover:!text-gray-600 transition-colors duration-300">
                            Manage Projects adalah fitur yang dapat membantu Anda dalam mengelola proyek Anda dengan lebih mudah.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center font-body font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            4
                        </div>
                        <h3 className="font-h4 text-center h-14 flex items-center justify-center group-hover:!text-gray-900 transition-colors duration-300">
                            Manage Payroll
                        </h3>
                        <p className="font-body-sm text-center !text-white/80 group-hover:!text-gray-600 transition-colors duration-300">
                            Manage Payroll adalah fitur yang dapat membantu Anda dalam mengelola gaji Anda dengan lebih mudah.
                        </p>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center font-body font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            5
                        </div>
                        <h3 className="font-h4 text-center h-14 flex items-center justify-center group-hover:!text-gray-900 transition-colors duration-300">
                            Task Monitoring
                        </h3>
                        <p className="font-body-sm text-center !text-white/80 group-hover:!text-gray-600 transition-colors duration-300">
                            Task Monitoring adalah fitur yang dapat membantu Anda dalam mengelola tugas Anda dengan lebih mudah.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
                        <div className="w-10 h-10 border border-white rounded flex items-center justify-center font-body font-medium mb-0 group-hover:border-violet-600 group-hover:text-violet-600 transition-all duration-300">
                            6
                        </div>
                        <h3 className="font-h4 text-center h-14 flex items-center justify-center group-hover:!text-gray-900 transition-colors duration-300">
                            Manage Permit
                        </h3>
                        <p className="font-body-sm text-center !text-white/80 group-hover:!text-gray-600 transition-colors duration-300">
                            Manage Permit adalah fitur yang dapat membantu Anda dalam mengelola izin Anda dengan lebih mudah.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

