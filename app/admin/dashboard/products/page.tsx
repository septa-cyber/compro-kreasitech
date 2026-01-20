"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaImage, FaCalendarAlt, FaLink, FaBoxOpen, FaLayerGroup } from 'react-icons/fa';

export default function ProductsSettingsPage() {
    // Section Header (Global for all product sections if applicable, or per section)
    const [sectionTitle, setSectionTitle] = useState('Produk Kami');

    // Product Items
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "HiTalent",
            date: "13 Nov 2025",
            description: "Solusi cerdas untuk mengelola sumber daya manusia secara efisien — mulai dari absensi hingga penggajian.",
            image: "https://placehold.co/600x400",
            buttonText: "Lihat Detail",
            buttonLink: "#"
        },
        {
            id: 2,
            title: "Kreasitech Academy",
            date: "20 Jan 2026",
            description: "Platform pembelajaran intensif untuk mencetak talenta digital berkualitas yang siap bersaing di industri.",
            image: "https://placehold.co/600x400",
            buttonText: "Gabung Sekarang",
            buttonLink: "#"
        }
    ]);

    const handleProductChange = (id: number, field: string, value: string) => {
        setProducts(products.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const handleDeleteProduct = (id: number) => {
        setProducts(products.filter(item => item.id !== id));
    };

    const handleAddProduct = () => {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        setProducts([...products, {
            id: newId,
            title: "Nama Produk Baru",
            date: "DD Mon YYYY",
            description: "Deskripsi singkat mengenai keunggulan produk...",
            image: "https://placehold.co/600x400",
            buttonText: "Lihat Detail",
            buttonLink: "#"
        }]);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Produk berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Produk
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
                            Judul Seksi Utama
                        </label>
                        <input
                            type="text"
                            value={sectionTitle}
                            onChange={(e) => setSectionTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                        />
                    </div>
                </div>

                {/* Products List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaBoxOpen size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Produk</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddProduct}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Produk</span>
                        </button>
                    </div>

                    <div className="space-y-8">
                        {products.map((item, index) => (
                            <div key={item.id} className="relative p-6 bg-[#F4F4F7] border border-gray-200 rounded-xl group hover:border-violet-300 transition-all">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteProduct(item.id)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-2 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                                    title="Hapus Produk"
                                >
                                    <FaTrash size={16} />
                                </button>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    {/* Image Section */}
                                    <div className="lg:col-span-4 space-y-3">
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Gambar Produk (Preview & Upload)
                                        </label>
                                        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <label className="cursor-pointer bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm hover:text-violet-600 flex items-center gap-2">
                                                    <FaImage /> Ganti Gambar
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                const imageUrl = URL.createObjectURL(file);
                                                                handleProductChange(item.id, 'image', imageUrl);
                                                            }
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-gray-400 italic text-center">
                                            Disarankan ukuran 1200x800px (Rasio 3:2)
                                        </p>
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:col-span-8 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Nama Produk
                                                </label>
                                                <div className="relative">
                                                    <FaHeading className="absolute left-2 top-2 text-gray-400 text-xs" />
                                                    <input
                                                        type="text"
                                                        value={item.title}
                                                        onChange={(e) => handleProductChange(item.id, 'title', e.target.value)}
                                                        className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Tanggal / Tagline Kecil
                                                </label>
                                                <div className="relative">
                                                    <FaCalendarAlt className="absolute left-2 top-2 text-gray-400 text-xs" />
                                                    <input
                                                        type="text"
                                                        value={item.date}
                                                        onChange={(e) => handleProductChange(item.id, 'date', e.target.value)}
                                                        className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                Deskripsi Lengkap
                                            </label>
                                            <textarea
                                                value={item.description}
                                                onChange={(e) => handleProductChange(item.id, 'description', e.target.value)}
                                                rows={4}
                                                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-light leading-relaxed focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Teks Tombol CTA
                                                </label>
                                                <input
                                                    type="text"
                                                    value={item.buttonText}
                                                    onChange={(e) => handleProductChange(item.id, 'buttonText', e.target.value)}
                                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Link Tujuan
                                                </label>
                                                <div className="relative">
                                                    <FaLink className="absolute left-2 top-2 text-gray-400 text-xs" />
                                                    <input
                                                        type="text"
                                                        value={item.buttonLink}
                                                        onChange={(e) => handleProductChange(item.id, 'buttonLink', e.target.value)}
                                                        className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {products.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada produk yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
}
