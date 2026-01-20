"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaImage, FaBriefcase, FaArrowsAltH, FaTag } from 'react-icons/fa';

export default function PortfolioSettingsPage() {
    // Section Header
    const [sectionTitle, setSectionTitle] = useState('Portofolio Kami');
    const [sectionDescription, setSectionDescription] = useState('Proyek-proyek kami menunjukkan keahlian di berbagai industri. Kami berkomitmen untuk memberikan yang terbaik dalam setiap solusi.');

    // Portfolio Items
    const [portfolioItems, setPortfolioItems] = useState([
        { id: 1, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 2, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
        { id: 3, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
        { id: 4, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    ]);

    const handleItemChange = (id: number, field: string, value: string) => {
        setPortfolioItems(portfolioItems.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const handleDeleteItem = (id: number) => {
        setPortfolioItems(portfolioItems.filter(item => item.id !== id));
    };

    const handleAddItem = () => {
        const newId = portfolioItems.length > 0 ? Math.max(...portfolioItems.map(p => p.id)) + 1 : 1;
        setPortfolioItems([...portfolioItems, { id: newId, title: "Project Baru", subtitle: "Kategori", image: "https://placehold.co/600x400", size: "medium" }]);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Portfolio berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Portfolio
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

                    <div className="space-y-4">
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
                                Deskripsi
                            </label>
                            <textarea
                                value={sectionDescription}
                                onChange={(e) => setSectionDescription(e.target.value)}
                                rows={2}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Portfolio List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaBriefcase size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Proyek Portfolio</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddItem}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Proyek</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioItems.map((item, index) => (
                            <div key={item.id} className="relative bg-[#F4F4F7] border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all">
                                {/* Image Preview */}
                                <div className="h-40 bg-gray-200 relative">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80" />
                                    <div className="absolute top-2 right-2 z-10">
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteItem(item.id)}
                                            className="bg-white/80 p-1.5 rounded-md text-gray-500 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                            title="Hapus Proyek"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                                        <div className="bg-white/90 px-3 py-1 rounded text-xs font-medium text-gray-600 flex items-center gap-1 cursor-pointer hover:bg-white hover:text-violet-600">
                                            <FaImage /> Ganti Gambar
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 space-y-3">
                                    <div>
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Judul Proyek
                                        </label>
                                        <input
                                            type="text"
                                            value={item.title}
                                            onChange={(e) => handleItemChange(item.id, 'title', e.target.value)}
                                            className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded text-sm font-semibold text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Kategori / Sub-judul
                                        </label>
                                        <div className="relative">
                                            <FaTag className="absolute left-2 top-1.5 text-gray-400 text-xs" />
                                            <input
                                                type="text"
                                                value={item.subtitle}
                                                onChange={(e) => handleItemChange(item.id, 'subtitle', e.target.value)}
                                                className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Ukuran Card (Grid)
                                        </label>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleItemChange(item.id, 'size', 'medium')}
                                                className={`flex-1 py-1 text-xs rounded border transition-colors ${item.size === 'medium' ? 'bg-violet-100 border-violet-200 text-violet-700' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                                            >
                                                Medium
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleItemChange(item.id, 'size', 'large')}
                                                className={`flex-1 py-1 text-xs rounded border transition-colors ${item.size === 'large' ? 'bg-violet-100 border-violet-200 text-violet-700' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                                            >
                                                Large
                                            </button>
                                        </div>
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
