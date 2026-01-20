"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaHandshake, FaImage } from 'react-icons/fa';

export default function PartnersSettingsPage() {
    // Section Header
    const [sectionTitle, setSectionTitle] = useState('Dipercaya oleh bisnis terkemuka seperti:');

    // Partner Logos
    const [partners, setPartners] = useState([
        { id: 1, name: "Partner 1", logo: "/assets/images/Logo.svg" },
        { id: 2, name: "Partner 2", logo: "/assets/images/Logo.svg" },
        { id: 3, name: "Partner 3", logo: "/assets/images/Logo.svg" },
        { id: 4, name: "Partner 4", logo: "/assets/images/Logo.svg" },
    ]);

    const handlePartnerChange = (id: number, field: string, value: string) => {
        setPartners(partners.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const handleDeletePartner = (id: number) => {
        setPartners(partners.filter(item => item.id !== id));
    };

    const handleAddPartner = () => {
        const newId = partners.length > 0 ? Math.max(...partners.map(p => p.id)) + 1 : 1;
        setPartners([...partners, {
            id: newId,
            name: "New Partner",
            logo: "/assets/images/Logo.svg"
        }]);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Partner berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Partner
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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                            Judul Seksi Kecil
                        </label>
                        <input
                            type="text"
                            value={sectionTitle}
                            onChange={(e) => setSectionTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                        />
                    </div>
                </div>

                {/* Partner Logos Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaHandshake size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Logo Partner</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddPartner}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Partner</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {partners.map((item, index) => (
                            <div key={item.id} className="relative group bg-[#F4F4F7] border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-violet-300 transition-all">

                                <button
                                    type="button"
                                    onClick={() => handleDeletePartner(item.id)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1.5 rounded-full hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                                    title="Hapus Partner"
                                >
                                    <FaTrash size={12} />
                                </button>

                                <div className="h-16 w-full flex items-center justify-center relative">
                                    <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all" />

                                    {/* Overlay Upload */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 rounded">
                                        <label className="cursor-pointer bg-white/90 px-2 py-1 rounded text-[10px] font-medium text-gray-600 shadow-sm hover:text-violet-600 flex items-center gap-1">
                                            <FaImage /> Ubah
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const imageUrl = URL.createObjectURL(file);
                                                        handlePartnerChange(item.id, 'logo', imageUrl);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <input
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => handlePartnerChange(item.id, 'name', e.target.value)}
                                        className="w-full text-center bg-transparent text-[10px] text-gray-500 font-medium focus:outline-none focus:text-violet-600 border-b border-transparent focus:border-violet-300 transition-all"
                                        placeholder="Nama Partner"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {partners.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada partner yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
}
