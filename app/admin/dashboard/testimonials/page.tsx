"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaPlus, FaTrash, FaQuoteLeft, FaStar, FaImage, FaUser, FaEdit } from 'react-icons/fa';
import { Testimonial } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import ImageCropper from '@/components/ui/ImageCropper';
import toast from 'react-hot-toast';
import AdminViewToggle from '@/app/admin/components/AdminViewToggle';

export default function TestimonialsSettingsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'card' | 'table'>('table');

    // Modal States
    // ... (rest of the states and effects)
    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
    const [newItemData, setNewItemData] = useState<Partial<Testimonial>>({
        name: "",
        role: "",
        company: "",
        content: "",
        category: "",
        avatar: ""
    });
    const [editItemData, setEditItemData] = useState<Partial<Testimonial>>({});

    // Crop States
    const [imageToCrop, setImageToCrop] = useState<string | null>(null);
    const [cropType, setCropType] = useState<'add' | 'edit'>('add');

    useEffect(() => {
        fetchTestimonials();
    }, []);

    // Edit Logic
    const handleEditClick = (testimonial: Testimonial) => {
        setEditingItem(testimonial);
        setEditItemData({
            name: testimonial.name,
            role: testimonial.role,
            company: testimonial.company,
            content: testimonial.content,
            avatar: testimonial.avatar,
            category: testimonial.category,
            status: testimonial.status
        });
        setIsEditModalOpen(true);
    };

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingItem) return;

        try {
            const res = await fetch(`/api/testimonials/${editingItem.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editItemData)
            });

            if (res.ok) {
                const updated = await res.json();
                setTestimonials(testimonials.map(t => t.id === updated.id ? updated : t));
                setIsEditModalOpen(false);
                toast.success('Testimonial berhasil diperbarui');
            } else {
                toast.error('Gagal memperbarui testimonial');
            }
        } catch (error) {
            console.error('Error updating testimonial:', error);
            toast.error('Terjadi kesalahan saat memperbarui testimonial');
        }
    };

    const fetchTestimonials = async () => {
        try {
            const res = await fetch('/api/testimonials');
            const data = await res.json();
            setTestimonials(data);
        } catch (error) {
            console.error('Failed to fetch testimonials:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/testimonials/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setTestimonials(testimonials.filter(t => t.id !== itemToDelete));
                setItemToDelete(null);
                toast.success('Testimonial berhasil dihapus');
            } else {
                toast.error('Gagal menghapus testimonial');
            }
        } catch (error) {
            console.error('Error deleting testimonial:', error);
            toast.error('Terjadi kesalahan saat menghapus testimonial');
        }
    };

    // Add Logic
    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const itemToAdd = {
                ...newItemData,
                avatar: newItemData.avatar || "https://placehold.co/100x100"
            };

            const res = await fetch('/api/testimonials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemToAdd)
            });

            if (res.ok) {
                const created = await res.json();
                setTestimonials([...testimonials, created]);
                setIsAddModalOpen(false);
                toast.success('Testimonial berhasil ditambahkan');
                setNewItemData({
                    name: "",
                    role: "",
                    company: "",
                    content: "",
                    category: "",
                    avatar: ""
                });
            } else {
                toast.error('Gagal menambah testimonial');
            }
        } catch (error) {
            console.error('Error adding testimonial:', error);
            toast.error('Terjadi kesalahan saat menambah testimonial');
        }
    };

    const handleImageUpload = async (file: File | undefined, isEdit: boolean) => {
        if (!file) return;
        const toastId = toast.loading('Mengunggah gambar...');
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) throw new Error('Upload gagal');
            const data = await res.json();

            if (isEdit) {
                setEditItemData(prev => ({ ...prev, avatar: data.url }));
            } else {
                setNewItemData(prev => ({ ...prev, avatar: data.url }));
            }
            toast.success('Gambar berhasil diunggah', { id: toastId });
        } catch (error) {
            console.error('Upload Error:', error);
            toast.error('Gagal mengunggah gambar', { id: toastId });
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light leading-tight">
                    Pengaturan Testimonials
                </h1>
                <div className="flex items-center gap-3">
                    <AdminViewToggle view={viewMode} onViewChange={setViewMode} />
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-3 md:px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 rounded-lg transition-all flex items-center gap-2 shadow-md shadow-violet-200"
                    >
                        <FaPlus size={12} />
                        <span className="text-xs md:text-sm font-semibold font-montserrat">Tambah Testimonial</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaQuoteLeft className="text-sm md:text-xl" />
                        </div>
                        <h2 className="text-sm md:text-lg font-semibold text-text-light font-montserrat leading-tight">Daftar Testimonial</h2>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="max-[430px]:hidden">
                    {viewMode === 'table' ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Klien</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Kategori</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Isi Testimonial</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {testimonials.map((testimonial) => (
                                        <tr key={testimonial.id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={testimonial.avatar || 'https://placehold.co/100x100'}
                                                        alt={testimonial.name}
                                                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                                    />
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900 font-montserrat">{testimonial.name}</div>
                                                        <div className="text-[10px] text-gray-400 capitalize">{testimonial.role} {testimonial.company ? `@ ${testimonial.company}` : ''}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-[10px] font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full font-montserrat uppercase">
                                                    {testimonial.category || 'Legacy'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-xs text-gray-600 font-montserrat italic line-clamp-2 max-w-md">
                                                    "{testimonial.content}"
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-[10px] rounded-full font-medium uppercase tracking-wider ${testimonial.status === 'visible' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                                    {testimonial.status || 'visible'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        onClick={() => handleEditClick(testimonial)}
                                                        className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors border border-transparent hover:border-violet-100 shadow-sm bg-white"
                                                        title="Edit"
                                                    >
                                                        <FaEdit size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => setItemToDelete(testimonial.id)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100 shadow-sm bg-white"
                                                        title="Hapus"
                                                    >
                                                        <FaTrash size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-violet-300 transition-all group shadow-sm">
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                        <button
                                            onClick={() => handleEditClick(testimonial)}
                                            className="p-1.5 text-gray-400 hover:text-violet-500 hover:bg-gray-50 rounded-lg transition-colors shadow-sm bg-white border border-gray-100"
                                            title="Edit"
                                        >
                                            <FaEdit size={12} />
                                        </button>
                                        <button
                                            onClick={() => setItemToDelete(testimonial.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors shadow-sm bg-white border border-gray-100"
                                            title="Hapus"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={testimonial.avatar || 'https://placehold.co/100x100'}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 font-montserrat text-sm leading-tight">{testimonial.name}</h3>
                                            <div className="flex flex-col">
                                                <p className="text-[10px] text-gray-500 font-montserrat truncate max-w-[150px]">{testimonial.role}</p>
                                                <span className="text-[9px] font-bold text-violet-600 uppercase mt-0.5">{testimonial.category || 'Legacy'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4 h-20 overflow-hidden">
                                        <p className="text-xs text-gray-600 italic line-clamp-4 leading-relaxed font-montserrat">"{testimonial.content}"</p>
                                    </div>

                                    <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                                        <span className={`px-2 py-0.5 text-[9px] rounded-full font-bold uppercase tracking-wider ${testimonial.status === 'visible' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {testimonial.status || 'visible'}
                                        </span>
                                        <span className="text-[9px] text-gray-400 font-montserrat">ID: #{testimonial.id}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile View - Always Cards */}
                <div className="max-[430px]:block hidden divide-y divide-gray-100">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-4 space-y-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.avatar || 'https://placehold.co/100x100'}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-50"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900 font-montserrat text-xs">{testimonial.name}</h3>
                                    <p className="text-[10px] text-gray-500 font-montserrat">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="py-1">
                                <p className="text-xs text-gray-600 italic line-clamp-3 font-montserrat leading-relaxed">"{testimonial.content}"</p>
                            </div>

                            <div className="flex items-center justify-end gap-2 mt-4 pt-2 border-t border-gray-50">
                                <button
                                    onClick={() => handleEditClick(testimonial)}
                                    className="flex-1 py-1.5 px-3 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-blue-100"
                                >
                                    <FaEdit size={12} />
                                    <span>Edit</span>
                                </button>
                                <button
                                    onClick={() => setItemToDelete(testimonial.id)}
                                    className="flex-1 py-1.5 px-3 bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-red-100"
                                >
                                    <FaTrash size={12} />
                                    <span>Hapus</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {testimonials.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm font-montserrat">Belum ada testimonial yang ditambahkan.</p>
                    </div>
                )}
            </div>


            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Testimonial"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Klien <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            value={newItemData.name}
                            onChange={(e) => setNewItemData({ ...newItemData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Nama Lengkap"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Perusahaan</label>
                        <input
                            type="text"
                            value={newItemData.company || ''}
                            onChange={(e) => setNewItemData({ ...newItemData, company: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Nama Perusahaan"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kategori Layanan <span className="text-red-500">*</span></label>
                        <select
                            required
                            value={newItemData.category || ''}
                            onChange={(e) => setNewItemData({ ...newItemData, category: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="">Pilih Layanan</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Talent As a Service">Talent As a Service</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Kreasi Space">Kreasi Space</option>
                            <option value="HiTalent">HiTalent</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Role / Jabatan <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            value={newItemData.role}
                            onChange={(e) => setNewItemData({ ...newItemData, role: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Contoh: CEO at Company"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Isi Testimonial <span className="text-red-500">*</span></label>
                        <textarea
                            required
                            rows={4}
                            value={newItemData.content}
                            onChange={(e) => setNewItemData({ ...newItemData, content: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Apa kata mereka..."
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Avatar URL (Optional)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newItemData.avatar}
                                onChange={(e) => setNewItemData({ ...newItemData, avatar: e.target.value })}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="https://..."
                            />
                            <label className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
                                <FaImage className="text-gray-600" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const imageUrl = URL.createObjectURL(file);
                                            setImageToCrop(imageUrl);
                                            setCropType('add');
                                        }
                                        // Reset input
                                        e.target.value = '';
                                    }}
                                />
                            </label>
                        </div>
                    </div>

                    {newItemData.avatar && (
                        <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                            <img src={newItemData.avatar} alt="Preview" className="h-16 w-16 object-cover rounded-full" />
                        </div>
                    )}

                    <div className="flex justify-end pt-4 gap-3">
                        <button
                            type="button"
                            onClick={() => setIsAddModalOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors shadow-md"
                        >
                            Simpan Testimonial
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Testimonial"
            >
                <form onSubmit={handleEditSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Klien <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            value={editItemData.name || ''}
                            onChange={(e) => setEditItemData({ ...editItemData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Nama Lengkap"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Perusahaan</label>
                        <input
                            type="text"
                            value={editItemData.company || ''}
                            onChange={(e) => setEditItemData({ ...editItemData, company: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Nama Perusahaan"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kategori Layanan <span className="text-red-500">*</span></label>
                        <select
                            required
                            value={editItemData.category || ''}
                            onChange={(e) => setEditItemData({ ...editItemData, category: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="">Pilih Layanan</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Talent As a Service">Talent As a Service</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Kreasi Space">Kreasi Space</option>
                            <option value="HiTalent">HiTalent</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Role / Jabatan <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            value={editItemData.role || ''}
                            onChange={(e) => setEditItemData({ ...editItemData, role: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Contoh: CEO at Company"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Isi Testimonial <span className="text-red-500">*</span></label>
                        <textarea
                            required
                            rows={4}
                            value={editItemData.content || ''}
                            onChange={(e) => setEditItemData({ ...editItemData, content: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Apa kata mereka..."
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Avatar URL (Optional)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={editItemData.avatar || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, avatar: e.target.value })}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="https://..."
                            />
                            <label className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
                                <FaImage className="text-gray-600" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const imageUrl = URL.createObjectURL(file);
                                            setImageToCrop(imageUrl);
                                            setCropType('edit');
                                        }
                                        // Reset input
                                        e.target.value = '';
                                    }}
                                />
                            </label>
                        </div>
                    </div>

                    {editItemData.avatar && (
                        <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                            <img src={editItemData.avatar} alt="Preview" className="h-16 w-16 object-cover rounded-full" />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status <span className="text-red-500">*</span></label>
                        <select
                            value={editItemData.status}
                            onChange={(e) => setEditItemData({ ...editItemData, status: e.target.value as 'visible' | 'hidden' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="visible">Visible</option>
                            <option value="hidden">Hidden</option>
                        </select>
                    </div>

                    <div className="flex justify-end pt-4 gap-3">
                        <button
                            type="button"
                            onClick={() => setIsEditModalOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors shadow-md"
                        >
                            Perbarui Testimonial
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <ConfirmationModal
                isOpen={!!itemToDelete}
                onClose={() => setItemToDelete(null)}
                onConfirm={confirmDelete}
                title="Hapus Testimonial"
                message="Apakah Anda yakin ingin menghapus testimonial ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />

            {/* Cropper Modal */}
            {imageToCrop && (
                <ImageCropper
                    isOpen={!!imageToCrop}
                    imageSrc={imageToCrop}
                    onCropDone={async (croppedFile) => {
                        await handleImageUpload(croppedFile, cropType === 'edit');
                        setImageToCrop(null);
                    }}
                    onCropCancel={() => setImageToCrop(null)}
                />
            )}
        </div>
    );
}
