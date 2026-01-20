"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaStar, FaMobileAlt, FaQuestionCircle, FaPencilRuler, FaCode, FaBullhorn, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function ServicesSettingsPage() {
    // Section Header
    const [sectionTitle, setSectionTitle] = useState('Layanan Kami');
    const [sectionSubtitle, setSectionSubtitle] = useState('Buka Potensi Bisnis Anda dengan Solusi Ahli Kami');

    // Services List
    const [services, setServices] = useState([
        { id: 1, title: 'Software Development', icon: 'FaCode', description: 'Kami menawarkan layanan Web & Mobile App yang inovatif, mendukung transformasi digital bisnis Anda.' },
        { id: 2, title: 'Talent as a Service', icon: 'FaUsers', description: 'Kami menyediakan Talent as a Service (TaaS) yang fleksibel dan efisien, menghadirkan talenta terbaik di industri teknologi.' },
        { id: 3, title: 'Academy', icon: 'FaGraduationCap', description: 'Program pelatihan intensif untuk mencetak talenta digital berkualitas siap kerja.' },
        { id: 4, title: 'Digital Marketing', icon: 'FaBullhorn', description: 'Strategi pemasaran digital berbasis data untuk meningkatkan visibilitas dan konversi bisnis Anda.' }
    ]);

    const iconOptions = [
        { name: 'FaCode', component: <FaCode /> },
        { name: 'FaMobileAlt', component: <FaMobileAlt /> },
        { name: 'FaLaptopCode', component: <FaLaptopCode /> },
        { name: 'FaUsers', component: <FaHeading /> }, // Fallback/Placeholder
        { name: 'FaGraduationCap', component: <FaGraduationCap /> },
        { name: 'FaBullhorn', component: <FaBullhorn /> },
        { name: 'FaPencilRuler', component: <FaPencilRuler /> },
        { name: 'FaStar', component: <FaStar /> },
        { name: 'FaQuestionCircle', component: <FaQuestionCircle /> },
    ];

    const handleServiceChange = (id: number, field: string, value: string) => {
        setServices(services.map(service =>
            service.id === id ? { ...service, [field]: value } : service
        ));
    };

    const handleDeleteService = (id: number) => {
        setServices(services.filter(service => service.id !== id));
    };

    const handleAddService = () => {
        const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
        setServices([...services, { id: newId, title: 'Layanan Baru', icon: 'FaStar', description: 'Deskripsi layanan baru...' }]);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Layanan berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Layanan (Services)
                </h1>
                <button
                    onClick={handleSave}
                    className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg text-sm transition-colors shadow-glow flex items-center gap-2"
                >
                    <FaSave />
                    <span>Simpan Perubahan</span>
                </button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 gap-6">

                {/* Section Header Settings */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaHeading size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Header Seksi</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Judul Seksi
                            </label>
                            <input
                                type="text"
                                value={sectionTitle}
                                onChange={(e) => setSectionTitle(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Sub-judul
                            </label>
                            <input
                                type="text"
                                value={sectionSubtitle}
                                onChange={(e) => setSectionSubtitle(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Services List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaLaptopCode size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Layanan</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddService}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Layanan</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div key={service.id} className="relative p-6 bg-[#F4F4F7] border border-gray-200 rounded-xl group hover:border-violet-300 transition-all">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteService(service.id)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                                    title="Hapus Layanan"
                                >
                                    <FaTrash size={14} />
                                </button>

                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                Nama Layanan
                                            </label>
                                            <input
                                                type="text"
                                                value={service.title}
                                                onChange={(e) => handleServiceChange(service.id, 'title', e.target.value)}
                                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            />
                                        </div>
                                        <div className="w-1/3">
                                            <label className="block text-xs font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                Ikon
                                            </label>
                                            <select
                                                value={service.icon}
                                                onChange={(e) => handleServiceChange(service.id, 'icon', e.target.value)}
                                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer"
                                            >
                                                {iconOptions.map(opt => (
                                                    <option key={opt.name} value={opt.name}>{opt.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Deskripsi Singkat
                                        </label>
                                        <textarea
                                            value={service.description}
                                            onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 pt-2">
                                        <div className="w-8 h-8 bg-violet-100 rounded flex items-center justify-center text-violet-600 text-lg">
                                            {/* Preview Icon */}
                                            {iconOptions.find(opt => opt.name === service.icon)?.component || <FaStar />}
                                        </div>
                                        <span className="text-xs text-gray-400">Preview Ikon</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {services.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada layanan yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
}
