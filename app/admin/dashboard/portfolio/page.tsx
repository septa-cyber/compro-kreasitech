"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaImage, FaBriefcase, FaTag } from 'react-icons/fa';
import { PortfolioItem } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';

export default function PortfolioSettingsPage() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [newItemData, setNewItemData] = useState<Partial<PortfolioItem>>({
        title: "",
        category: "",
        image: "",
        size: "large",
        description: "",
        status: "draft"
    });

    useEffect(() => {
        fetchPortfolio();
    }, []);

    const fetchPortfolio = async () => {
        try {
            const res = await fetch('/api/portfolio');
            const data = await res.json();
            setPortfolioItems(data);
        } catch (error) {
            console.error('Failed to fetch portfolio:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleItemChange = (id: number, field: keyof PortfolioItem, value: any) => {
        setPortfolioItems(portfolioItems.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/portfolio/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setPortfolioItems(portfolioItems.filter(item => item.id !== itemToDelete));
                setItemToDelete(null);
            } else {
                alert('Gagal menghapus proyek');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Error menghapus proyek');
        }
    };

    // Add Logic
    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const itemToAdd = {
                ...newItemData,
                image: newItemData.image || "https://placehold.co/600x400"
            };

            const res = await fetch('/api/portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemToAdd)
            });

            if (res.ok) {
                const created = await res.json();
                setPortfolioItems([...portfolioItems, created]);
                setIsAddModalOpen(false);
                setNewItemData({
                    title: "",
                    category: "",
                    image: "",
                    size: "large",
                    description: "",
                    status: "draft"
                });
            } else {
                alert('Gagal menambah proyek');
            }
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Error menambah proyek');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            // Update all portfolio items
            const updatePromises = portfolioItems.map(item =>
                fetch(`/api/portfolio/${item.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                })
            );

            await Promise.all(updatePromises);
            alert('Pengaturan Portfolio berhasil disimpan!');
        } catch (error) {
            console.error('Error saving:', error);
            alert('Gagal menyimpan perubahan');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Portfolio
                </h1>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg text-sm transition-colors shadow-glow flex items-center gap-2 disabled:opacity-50"
                >
                    <FaSave />
                    <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
                </button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 gap-6">

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
                            onClick={() => setIsAddModalOpen(true)}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Proyek</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioItems.map((item) => (
                            <div key={item.id} className="relative bg-[#F4F4F7] border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all">
                                {/* Image Preview */}
                                <div className="h-40 bg-gray-200 relative">
                                    <img src={item.image || 'https://placehold.co/600x400'} alt={item.title} className="w-full h-full object-cover opacity-80" />
                                    <div className="absolute top-2 right-2 z-10">
                                        <button
                                            type="button"
                                            onClick={() => setItemToDelete(item.id)}
                                            className="bg-white/80 p-1.5 rounded-md text-gray-500 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                            title="Hapus Proyek"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                                        <label className="bg-white/90 px-3 py-1 rounded text-xs font-medium text-gray-600 flex items-center gap-1 cursor-pointer hover:bg-white hover:text-violet-600">
                                            <FaImage /> Ganti Gambar
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const imageUrl = URL.createObjectURL(file);
                                                        handleItemChange(item.id, 'image', imageUrl);
                                                    }
                                                }}
                                            />
                                        </label>
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
                                            Kategori
                                        </label>
                                        <div className="relative">
                                            <FaTag className="absolute left-2 top-1.5 text-gray-400 text-xs" />
                                            <input
                                                type="text"
                                                value={item.category || ''}
                                                onChange={(e) => handleItemChange(item.id, 'category', e.target.value)}
                                                className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                Ukuran Card
                                            </label>
                                            <select
                                                value={item.size || 'large'}
                                                onChange={(e) => handleItemChange(item.id, 'size', e.target.value)}
                                                className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded text-[10px] focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            >
                                                <option value="large">Large</option>
                                                <option value="medium">Medium</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-1">
                                                Status
                                            </label>
                                            <select
                                                value={item.status}
                                                onChange={(e) => handleItemChange(item.id, 'status', e.target.value as 'draft' | 'published')}
                                                className="w-full px-2 py-1.5 bg-white border border-gray-200 rounded text-xs focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                            >
                                                <option value="draft">Draft</option>
                                                <option value="published">Published</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {portfolioItems.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada proyek portfolio yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </form>

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Proyek Portfolio"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Judul Proyek</label>
                        <input
                            type="text"
                            required
                            value={newItemData.title}
                            onChange={(e) => setNewItemData({ ...newItemData, title: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Nama Proyek"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kategori</label>
                        <input
                            type="text"
                            value={newItemData.category}
                            onChange={(e) => setNewItemData({ ...newItemData, category: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Contoh: Web Development, Mobile App"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Size</label>
                            <select
                                value={newItemData.size || 'large'}
                                onChange={(e) => setNewItemData({ ...newItemData, size: e.target.value as 'large' | 'medium' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status</label>
                            <select
                                value={newItemData.status || 'draft'}
                                onChange={(e) => setNewItemData({ ...newItemData, status: e.target.value as 'draft' | 'published' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Image URL (Optional)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newItemData.image}
                                onChange={(e) => setNewItemData({ ...newItemData, image: e.target.value })}
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
                                            setNewItemData({ ...newItemData, image: imageUrl });
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>

                    {newItemData.image && (
                        <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                            <img src={newItemData.image} alt="Preview" className="h-32 object-cover rounded" />
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
                            Simpan Proyek
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <ConfirmationModal
                isOpen={!!itemToDelete}
                onClose={() => setItemToDelete(null)}
                onConfirm={confirmDelete}
                title="Hapus Proyek"
                message="Apakah Anda yakin ingin menghapus proyek ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />
        </div>
    );
}
