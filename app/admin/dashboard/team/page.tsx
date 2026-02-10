"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaUser, FaUserTag, FaPalette, FaImage } from 'react-icons/fa';

export default function TeamSettingsPage() {
    // Section Header
    const [sectionTitle, setSectionTitle] = useState('Meet Our Team');

    // Team Members
    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            name: "Fernando Alonso",
            role: "DevOps Developer",
            image: "https://placehold.co/400x400",
            bgColor: "bg-yellow-700/80 (Tailwind Class)",
            hexColor: "#b45309"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Product Designer",
            image: "https://placehold.co/400x400",
            bgColor: "bg-sky-300",
            hexColor: "#7dd3fc"
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Frontend Engineer",
            image: "https://placehold.co/400x400",
            bgColor: "bg-pink-200",
            hexColor: "#fbcfe8"
        }
    ]);

    const handleMemberChange = (id: number, field: string, value: string) => {
        setTeamMembers(teamMembers.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const handleDeleteMember = (id: number) => {
        setTeamMembers(teamMembers.filter(item => item.id !== id));
    };

    const handleAddMember = () => {
        const newId = teamMembers.length > 0 ? Math.max(...teamMembers.map(t => t.id)) + 1 : 1;
        setTeamMembers([...teamMembers, {
            id: newId,
            name: "Nama Anggota",
            role: "Posisi / Jabatan",
            image: "https://placehold.co/400x400",
            bgColor: "bg-gray-200",
            hexColor: "#e5e7eb"
        }]);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Tim berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Tim (Team)
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
                            Judul Seksi
                        </label>
                        <input
                            type="text"
                            value={sectionTitle}
                            onChange={(e) => setSectionTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                        />
                    </div>
                </div>

                {/* Team List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaUser size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Anggota Tim</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddMember}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Anggota</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamMembers.map((item, index) => (
                            <div key={item.id} className="relative bg-[#F4F4F7] border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all">
                                {/* Image Preview Area with Background Color */}
                                <div
                                    className="aspect-square relative overflow-hidden"
                                    style={{ backgroundColor: item.hexColor }}
                                >
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply opacity-80" />

                                    <div className="absolute top-2 right-2 z-10">
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteMember(item.id)}
                                            className="bg-white/80 p-1.5 rounded-md text-gray-500 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                            title="Hapus Anggota"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>

                                    {/* Upload Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                                        <label className="bg-white/90 px-3 py-1 rounded text-xs font-medium text-gray-600 flex items-center gap-1 cursor-pointer hover:bg-white hover:text-violet-600 shadow-sm">
                                            <FaImage /> Ganti Foto
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const imageUrl = URL.createObjectURL(file);
                                                        handleMemberChange(item.id, 'image', imageUrl);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>

                                    {/* Name Overlay Preview */}
                                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                                        <p className="font-bold text-sm leading-tight">{item.name}</p>
                                        <p className="text-[10px] opacity-90">{item.role}</p>
                                    </div>
                                </div>

                                <div className="p-4 space-y-3 bg-white">
                                    <div>
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Nama Lengkap
                                        </label>
                                        <div className="relative">
                                            <FaUser className="absolute left-2 top-1.5 text-gray-400 text-xs" />
                                            <input
                                                type="text"
                                                value={item.name}
                                                onChange={(e) => handleMemberChange(item.id, 'name', e.target.value)}
                                                className="w-full pl-6 pr-2 py-1.5 bg-[#F4F4F7] border border-gray-200 rounded text-sm font-semibold text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Posisi / Jabatan
                                        </label>
                                        <div className="relative">
                                            <FaUserTag className="absolute left-2 top-1.5 text-gray-400 text-xs" />
                                            <input
                                                type="text"
                                                value={item.role}
                                                onChange={(e) => handleMemberChange(item.id, 'role', e.target.value)}
                                                className="w-full pl-6 pr-2 py-1.5 bg-[#F4F4F7] border border-gray-200 rounded text-xs text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Warna Background
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-8 h-8 rounded border border-gray-200"
                                                style={{ backgroundColor: item.hexColor }}
                                            ></div>
                                            <input
                                                type="color"
                                                value={item.hexColor}
                                                onChange={(e) => handleMemberChange(item.id, 'hexColor', e.target.value)}
                                                className="flex-1 h-8 bg-transparent border-none cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {teamMembers.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada anggota tim yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
}

