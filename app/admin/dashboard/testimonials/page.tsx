"use client";

import React, { useState } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaUserCircle, FaQuoteLeft, FaBuilding, FaUserTie } from 'react-icons/fa';

export default function TestimonialsSettingsPage() {
    // Section Header
    const [sectionTitle1, setSectionTitle1] = useState('Lihat mengapa pelanggan senang');
    const [sectionTitle2, setSectionTitle2] = useState('menggunakan KreasiTech');

    // Testimonial Items
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            name: "Tina Rahayu",
            role: "Marketing Specialist",
            company: "PT Marketing Pro",
            avatar: "https://placehold.co/48x48/ec4899/1f2937",
            quote: "Tina's marketing strategies are exceptionally creative, highly innovative, and meticulously data-driven, consistently capturing audience attention."
        },
        {
            id: 2,
            name: "Joko Lestari",
            role: "QA Engineer",
            company: "PT Quality Assurance",
            avatar: "https://placehold.co/48x48/fbbf24/1f2937",
            quote: "Joko's rigorous testing protocols guarantee the superior quality and reliability of our products, proactively preventing potential problems."
        },
        {
            id: 3,
            name: "Siti Aminah",
            role: "Product Manager",
            company: "PT Digital Solutions",
            avatar: "https://placehold.co/48x48/3b82f6/1f2937",
            quote: "Siti's leadership is truly transformative, as she champions collaboration, sparks innovation, and drives substantial growth."
        }
    ]);

    const handleTestimonialChange = (id: number, field: string, value: string) => {
        setTestimonials(testimonials.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const handleDeleteTestimonial = (id: number) => {
        setTestimonials(testimonials.filter(item => item.id !== id));
    };

    const handleAddTestimonial = () => {
        const newId = testimonials.length > 0 ? Math.max(...testimonials.map(t => t.id)) + 1 : 1;
        setTestimonials([...testimonials, {
            id: newId,
            name: "Nama Pelanggan",
            role: "Jabatan",
            company: "Perusahaan",
            avatar: "https://placehold.co/48x48/gray/white",
            quote: "Tulis testimoni pelanggan di sini..."
        }]);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Pengaturan Testimoni berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Testimoni
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
                                Judul Baris 1
                            </label>
                            <input
                                type="text"
                                value={sectionTitle1}
                                onChange={(e) => setSectionTitle1(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Judul Baris 2
                            </label>
                            <input
                                type="text"
                                value={sectionTitle2}
                                onChange={(e) => setSectionTitle2(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Testimonials List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaQuoteLeft size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Testimoni</h2>
                        </div>
                        <button
                            type="button"
                            onClick={handleAddTestimonial}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Testimoni</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {testimonials.map((item, index) => (
                            <div key={item.id} className="relative p-6 bg-[#F4F4F7] border border-gray-200 rounded-xl group hover:border-violet-300 transition-all">
                                <button
                                    type="button"
                                    onClick={() => handleDeleteTestimonial(item.id)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                                    title="Hapus Testimoni"
                                >
                                    <FaTrash size={14} />
                                </button>

                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Avatar & Info */}
                                    <div className="w-full md:w-1/3 space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                                                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Foto Profil
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <label className="cursor-pointer bg-white px-3 py-1.5 border border-gray-200 rounded text-xs font-medium text-gray-600 hover:border-violet-400 hover:text-violet-600 transition-colors flex items-center gap-2">
                                                        <FaUserCircle />
                                                        <span>Upload Foto</span>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            className="hidden"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) {
                                                                    const imageUrl = URL.createObjectURL(file);
                                                                    handleTestimonialChange(item.id, 'avatar', imageUrl);
                                                                }
                                                            }}
                                                        />
                                                    </label>
                                                    <span className="text-[10px] text-gray-400 italic">
                                                        {item.avatar.startsWith('blob:') ? 'File terpilih' : 'URL eksternal'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                Nama Lengkap
                                            </label>
                                            <div className="relative">
                                                <FaUserCircle className="absolute left-2 top-2 text-gray-400 text-xs" />
                                                <input
                                                    type="text"
                                                    value={item.name}
                                                    onChange={(e) => handleTestimonialChange(item.id, 'name', e.target.value)}
                                                    className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded text-sm font-semibold text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Jabatan
                                                </label>
                                                <div className="relative">
                                                    <FaUserTie className="absolute left-2 top-2 text-gray-400 text-xs" />
                                                    <input
                                                        type="text"
                                                        value={item.role}
                                                        onChange={(e) => handleTestimonialChange(item.id, 'role', e.target.value)}
                                                        className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded text-xs text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                    Perusahaan
                                                </label>
                                                <div className="relative">
                                                    <FaBuilding className="absolute left-2 top-2 text-gray-400 text-xs" />
                                                    <input
                                                        type="text"
                                                        value={item.company}
                                                        onChange={(e) => handleTestimonialChange(item.id, 'company', e.target.value)}
                                                        className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded text-xs text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="flex-1">
                                        <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                            Isi Testimoni (Quote)
                                        </label>
                                        <textarea
                                            value={item.quote}
                                            onChange={(e) => handleTestimonialChange(item.id, 'quote', e.target.value)}
                                            rows={5}
                                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-text-light leading-relaxed focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {testimonials.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada testimoni yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </form>
        </div>
    );
}

