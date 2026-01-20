"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaLink, FaMousePointer, FaSave, FaChartBar, FaTag, FaPlus, FaTrash } from 'react-icons/fa';

export default function HeroSettingsPage() {
    // Hero Text
    const [headlinePart1, setHeadlinePart1] = useState('Membangun Ekosistem');
    const [headlineHighlight, setHeadlineHighlight] = useState('Talenta & Teknologi');
    const [headlinePart2, setHeadlinePart2] = useState('yang Bersinergi serta Terintegrasi.');
    const [subheadline, setSubheadline] = useState('Software Development | Talent as a Service | Academy | Digital Marketing');

    // Buttons
    const [button1Text, setButton1Text] = useState('Konsultasi');
    const [button1Link, setButton1Link] = useState('#');
    const [button2Text, setButton2Text] = useState('Pelajari Layanan');
    const [button2Link, setButton2Link] = useState('#');

    // Stats
    const [stats, setStats] = useState([
        { count: '50+', label: 'Happy Clients' },
        { count: '100+', label: 'Professional Talents' },
        { count: '50+', label: 'Projects Completed' }
    ]);

    const handleStatChange = (index: number, field: string, value: string) => {
        const newStats = [...stats];
        // @ts-ignore
        newStats[index][field] = value;
        setStats(newStats);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Hero Section berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Hero Section
                </h1>
                <button
                    onClick={handleSave}
                    className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg text-sm transition-colors shadow-glow flex items-center gap-2"
                >
                    <FaSave />
                    <span>Simpan Perubahan</span>
                </button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Text Content */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaHeading size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Konten Teks</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                    Headline (Awal)
                                </label>
                                <input
                                    type="text"
                                    value={headlinePart1}
                                    onChange={(e) => setHeadlinePart1(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-violet-700 font-montserrat mb-2">
                                    Headline (Highlight Ungu)
                                </label>
                                <input
                                    type="text"
                                    value={headlineHighlight}
                                    onChange={(e) => setHeadlineHighlight(e.target.value)}
                                    className="w-full px-4 py-2 bg-violet-50 border border-violet-100 rounded-lg text-sm text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all font-semibold"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                    Headline (Akhir)
                                </label>
                                <input
                                    type="text"
                                    value={headlinePart2}
                                    onChange={(e) => setHeadlinePart2(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 italic">
                            Preview: {headlinePart1} <span className="text-violet-600 font-semibold">{headlineHighlight}</span> {headlinePart2}
                        </p>

                        <div className="pt-2">
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Sub-headline
                            </label>
                            <textarea
                                value={subheadline}
                                onChange={(e) => setSubheadline(e.target.value)}
                                rows={2}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaMousePointer size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Tombol Aksi Utama (Primer)</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Teks Tombol
                            </label>
                            <input
                                type="text"
                                value={button1Text}
                                onChange={(e) => setButton1Text(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Link Tujuan
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLink className="text-gray-400" size={14} />
                                </div>
                                <input
                                    type="text"
                                    value={button1Link}
                                    onChange={(e) => setButton1Link(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Button */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                            <FaMousePointer size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Tombol Aksi Sekunder</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Teks Tombol
                            </label>
                            <input
                                type="text"
                                value={button2Text}
                                onChange={(e) => setButton2Text(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Link Tujuan
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLink className="text-gray-400" size={14} />
                                </div>
                                <input
                                    type="text"
                                    value={button2Link}
                                    onChange={(e) => setButton2Link(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaChartBar size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Statistik (Floating Cards)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-[#F4F4F7] p-4 rounded-lg border border-gray-200 relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    {index + 1}
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Angka (Heading)
                                        </label>
                                        <input
                                            type="text"
                                            value={stat.count}
                                            onChange={(e) => handleStatChange(index, 'count', e.target.value)}
                                            className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded text-sm font-bold text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Label (Keterangan)
                                        </label>
                                        <input
                                            type="text"
                                            value={stat.label}
                                            onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                                            className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </form>
        </div>
    );
}
