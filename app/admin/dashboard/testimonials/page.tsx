"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaPlus, FaTrash, FaQuoteLeft, FaStar, FaImage, FaUser, FaEdit } from 'react-icons/fa';
import { Testimonial } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';

export default function TestimonialsSettingsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
    const [newItemData, setNewItemData] = useState<Partial<Testimonial>>({
        name: "",
        role: "",
        content: "",
        avatar: ""
    });
    const [editItemData, setEditItemData] = useState<Partial<Testimonial>>({});

    useEffect(() => {
        fetchTestimonials();
    }, []);

    // Edit Logic
    const handleEditClick = (testimonial: Testimonial) => {
        setEditingItem(testimonial);
        setEditItemData({
            name: testimonial.name,
            role: testimonial.role,
            content: testimonial.content,
            avatar: testimonial.avatar,
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
                    content: "",
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

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Testimonials
                </h1>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaQuoteLeft size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Testimonial</h2>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                    >
                        <FaPlus />
                        <span>Tambah Testimonial</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative bg-[#F4F4F7] p-6 rounded-xl border border-gray-200 hover:border-violet-300 transition-all group">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                <button
                                    onClick={() => handleEditClick(testimonial)}
                                    className="p-2 text-gray-400 hover:text-violet-500 hover:bg-white rounded-lg transition-colors shadow-sm"
                                    title="Edit"
                                >
                                    <FaEdit size={14} />
                                </button>
                                <button
                                    onClick={() => setItemToDelete(testimonial.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors shadow-sm"
                                    title="Hapus"
                                >
                                    <FaTrash size={14} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.avatar || 'https://placehold.co/100x100'}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900 font-montserrat">{testimonial.name}</h3>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-600 italic line-clamp-4">"{testimonial.content}"</p>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Klien</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Perusahaan / Role</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Isi Testimonial</label>
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
                                            setNewItemData({ ...newItemData, avatar: imageUrl });
                                        }
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Klien</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Perusahaan / Role</label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Isi Testimonial</label>
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
                                            setEditItemData({ ...editItemData, avatar: imageUrl });
                                        }
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status</label>
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
        </div>
    );
}
