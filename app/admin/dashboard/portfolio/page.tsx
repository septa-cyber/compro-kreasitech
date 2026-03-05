"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaImage, FaBriefcase, FaTag, FaEdit, FaChevronDown } from 'react-icons/fa';
import { PortfolioItem } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';

function PortfolioCard({
    item,
    onDelete,
    onEdit,
    onUpdate
}: {
    item: PortfolioItem;
    onDelete: (id: number) => void;
    onEdit: (item: PortfolioItem) => void;
    onUpdate: (id: number, updates: Partial<PortfolioItem>) => void;
}) {
    const [localItem, setLocalItem] = useState({
        size: item.size || 'large',
        status: item.status,
        marquee_row: item.marquee_row || 'top'
    });
    const [isSavingLocal, setIsSavingLocal] = useState(false);

    // Sync local state when item prop changes (e.g. after successful parent update)
    useEffect(() => {
        setLocalItem({
            size: item.size || 'large',
            status: item.status,
            marquee_row: item.marquee_row || 'top'
        });
    }, [item]);

    const hasChanges =
        localItem.size !== (item.size || 'large') ||
        localItem.status !== item.status ||
        localItem.marquee_row !== (item.marquee_row || 'top');

    const handleSave = async () => {
        setIsSavingLocal(true);
        await onUpdate(item.id, localItem);
        setIsSavingLocal(false);
    };

    return (
        <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all shadow-sm">
            {/* Image Preview */}
            <div className="h-40 bg-gray-200 relative">
                <img src={item.image || 'https://placehold.co/600x400'} alt={item.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 max-[430px]:hidden">
                    <button
                        type="button"
                        onClick={() => onEdit(item)}
                        className="bg-white/90 p-1.5 rounded-md text-gray-400 hover:text-violet-500 hover:bg-white transition-colors shadow-sm"
                        title="Edit Proyek"
                    >
                        <FaEdit size={12} />
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(item.id)}
                        className="bg-white/90 p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                        title="Hapus Proyek"
                    >
                        <FaTrash size={12} />
                    </button>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-0.5">
                        Judul Proyek
                    </label>
                    <p className="text-sm font-semibold text-text-light truncate">{item.title}</p>
                </div>
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-0.5">
                        Kategori
                    </label>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                        <FaTag size={10} className="text-gray-400" />
                        <span className="truncate">{item.category || '-'}</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-1">
                    <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-gray-400 uppercase font-montserrat tracking-tight">
                            UKURAN
                        </label>
                        <div className="relative">
                            <select
                                value={localItem.size}
                                onChange={(e) => setLocalItem({ ...localItem, size: e.target.value as 'large' | 'medium' })}
                                className="w-full text-xs bg-white py-2 px-3 pr-8 rounded-lg border border-gray-200 text-gray-700 capitalize outline-none focus:border-violet-300 cursor-pointer appearance-none transition-all shadow-sm"
                            >
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                            </select>
                            <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none" size={10} />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-gray-400 uppercase font-montserrat tracking-tight">
                            STATUS
                        </label>
                        <div className="relative">
                            <select
                                value={localItem.status}
                                onChange={(e) => setLocalItem({ ...localItem, status: e.target.value as 'draft' | 'published' })}
                                className="w-full text-xs bg-white py-2 px-3 pr-8 rounded-lg border border-gray-200 text-gray-700 capitalize outline-none focus:border-violet-300 cursor-pointer appearance-none transition-all shadow-sm"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                            <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none" size={10} />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-gray-400 uppercase font-montserrat tracking-tight">
                            BARIS
                        </label>
                        <div className="relative">
                            <select
                                value={localItem.marquee_row}
                                onChange={(e) => setLocalItem({ ...localItem, marquee_row: e.target.value as 'top' | 'bottom' })}
                                className="w-full text-xs bg-white py-2 px-3 pr-8 rounded-lg border border-gray-100 text-gray-700 capitalize outline-none focus:border-violet-300 cursor-pointer appearance-none transition-all shadow-sm"
                            >
                                <option value="top">Atas</option>
                                <option value="bottom">Bawah</option>
                            </select>
                            <FaChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none" size={10} />
                        </div>
                    </div>
                </div>

                {/* Mobile Actions */}
                <div className="hidden max-[430px]:flex items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-50">
                    <button
                        type="button"
                        onClick={() => onEdit(item)}
                        className="flex-1 py-2 px-4 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors active:bg-blue-100"
                    >
                        <FaEdit size={14} />
                        <span>Edit</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(item.id)}
                        className="flex-1 py-2 px-4 bg-red-50 text-red-600 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors active:bg-red-100"
                    >
                        <FaTrash size={14} />
                        <span>Hapus</span>
                    </button>
                </div>

                {hasChanges && (
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={isSavingLocal}
                        className="w-full mt-2 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-violet-200"
                    >
                        <FaSave className={`text-sm ${isSavingLocal ? 'animate-pulse' : ''}`} />
                        <span>{isSavingLocal ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
                    </button>
                )}
            </div>
        </div>
    );
}

export default function PortfolioSettingsPage() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [itemToEdit, setItemToEdit] = useState<PortfolioItem | null>(null);

    const [newItemData, setNewItemData] = useState<Partial<PortfolioItem>>({
        title: "",
        category: "",
        image: "",
        size: "large",
        description: "",
        status: "draft",
        marquee_row: "top"
    });

    useEffect(() => {
        fetchPortfolio();
    }, []);

    const fetchPortfolio = async () => {
        try {
            const res = await fetch('/api/portfolio');
            const data: PortfolioItem[] = await res.json();

            // Auto-assign marquee_row if missing to match the UI sections
            const mid = Math.ceil(data.length / 2);
            const enrichedData = data.map((item, index) => ({
                ...item,
                marquee_row: item.marquee_row || (index < mid ? 'top' : 'bottom')
            }));

            setPortfolioItems(enrichedData);
        } catch (error) {
            console.error('Failed to fetch portfolio:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = (item: PortfolioItem) => {
        setItemToEdit({ ...item });
        setIsEditModalOpen(true);
    };

    // Quick Update Logic
    const handleQuickUpdate = async (id: number, updates: Partial<PortfolioItem>) => {
        try {
            const itemToUpdate = portfolioItems.find(p => p.id === id);
            if (!itemToUpdate) return;

            const updatedItem = { ...itemToUpdate, ...updates };

            const res = await fetch(`/api/portfolio/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedItem)
            });

            if (res.ok) {
                setPortfolioItems(portfolioItems.map(item =>
                    item.id === id ? updatedItem : item
                ));
                toast.success('Perubahan berhasil disimpan');
            } else {
                toast.error('Gagal menyimpan perubahan');
            }
        } catch (error) {
            console.error('Error in quick update:', error);
            toast.error('Terjadi kesalahan saat menyimpan perubahan');
        }
    };

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/portfolio/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setPortfolioItems(portfolioItems.filter(p => p.id !== itemToDelete));
                setItemToDelete(null);
                toast.success('Proyek berhasil dihapus');
            } else {
                toast.error('Gagal menghapus proyek');
            }
        } catch (error) {
            console.error('Error deleting portfolio item:', error);
            toast.error('Terjadi kesalahan saat menghapus proyek');
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
                toast.success('Proyek berhasil ditambahkan');
                setNewItemData({
                    title: "",
                    category: "",
                    image: "",
                    status: 'draft',
                    size: 'large',
                    marquee_row: 'top'
                });
            } else {
                toast.error('Gagal menambah proyek');
            }
        } catch (error) {
            console.error('Error adding portfolio item:', error);
            toast.error('Terjadi kesalahan saat menambah proyek');
        }
    };

    // Edit Logic
    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!itemToEdit) return;
        setIsSaving(true);

        try {
            const res = await fetch(`/api/portfolio/${itemToEdit.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemToEdit)
            });

            if (res.ok) {
                setPortfolioItems(portfolioItems.map(item =>
                    item.id === itemToEdit.id ? itemToEdit : item
                ));
                setIsEditModalOpen(false);
                toast.success('Proyek berhasil diperbarui');
            } else {
                toast.error('Gagal memperbarui proyek');
            }
        } catch (error) {
            console.error('Error updating portfolio item:', error);
            toast.error('Terjadi kesalahan saat memperbarui proyek');
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
            </div>

            <div className="grid grid-cols-1 gap-6">

                {/* Portfolio List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaBriefcase className="text-sm md:text-xl" />
                            </div>
                            <h2 className="text-sm md:text-lg font-semibold text-text-light font-montserrat leading-tight">Daftar Proyek Portfolio</h2>
                        </div>
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="px-3 md:px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg transition-colors flex items-center gap-2 group"
                        >
                            <FaPlus className="text-xs shrink-0" />
                            <div className="flex flex-col items-start leading-tight text-left">
                                <span className="text-[10px] md:text-xs font-semibold">Tambah</span>
                                <span className="text-[10px] md:hidden font-bold">Proyek</span>
                                <span className="hidden md:block text-xs font-semibold">Proyek</span>
                            </div>
                        </button>
                    </div>

                    {/* Marquee Atas */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-violet-600 font-montserrat mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-violet-500 rounded-full"></span>
                            Baris Atas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioItems.filter(i => i.marquee_row === 'top').map((item) => (
                                <PortfolioCard
                                    key={item.id}
                                    item={item}
                                    onDelete={setItemToDelete}
                                    onEdit={handleEditClick}
                                    onUpdate={handleQuickUpdate}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Marquee Bawah */}
                    <div>
                        <h3 className="text-sm font-semibold text-emerald-600 font-montserrat mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                            Baris Bawah
                        </h3>
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-[430px]:grid-cols-1`}>
                            {portfolioItems.filter(i => i.marquee_row === 'bottom').map((item) => (
                                <PortfolioCard
                                    key={item.id}
                                    item={item}
                                    onDelete={setItemToDelete}
                                    onEdit={handleEditClick}
                                    onUpdate={handleQuickUpdate}
                                />
                            ))}
                        </div>
                    </div>

                    {portfolioItems.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada proyek portfolio yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </div>

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Proyek Portfolio"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Judul Proyek <span className="text-red-500">*</span></label>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Size <span className="text-red-500">*</span></label>
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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status <span className="text-red-500">*</span></label>
                            <select
                                value={newItemData.status || 'draft'}
                                onChange={(e) => setNewItemData({ ...newItemData, status: e.target.value as 'draft' | 'published' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Baris <span className="text-red-500">*</span></label>
                            <select
                                value={newItemData.marquee_row || 'top'}
                                onChange={(e) => setNewItemData({ ...newItemData, marquee_row: e.target.value as 'top' | 'bottom' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="top">Atas</option>
                                <option value="bottom">Bawah</option>
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

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Proyek Portfolio"
            >
                {itemToEdit && (
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Judul Proyek <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={itemToEdit.title}
                                onChange={(e) => setItemToEdit({ ...itemToEdit, title: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Nama Proyek"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kategori</label>
                            <input
                                type="text"
                                value={itemToEdit.category || ''}
                                onChange={(e) => setItemToEdit({ ...itemToEdit, category: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Web Development, Mobile App"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Size <span className="text-red-500">*</span></label>
                                <select
                                    value={itemToEdit.size || 'large'}
                                    onChange={(e) => setItemToEdit({ ...itemToEdit, size: e.target.value as 'large' | 'medium' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                >
                                    <option value="large">Large</option>
                                    <option value="medium">Medium</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status <span className="text-red-500">*</span></label>
                                <select
                                    value={itemToEdit.status}
                                    onChange={(e) => setItemToEdit({ ...itemToEdit, status: e.target.value as 'draft' | 'published' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Baris <span className="text-red-500">*</span></label>
                                <select
                                    value={itemToEdit.marquee_row || 'top'}
                                    onChange={(e) => setItemToEdit({ ...itemToEdit, marquee_row: e.target.value as 'top' | 'bottom' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                >
                                    <option value="top">Atas</option>
                                    <option value="bottom">Bawah</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Image URL (Optional)</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={itemToEdit.image}
                                    onChange={(e) => setItemToEdit({ ...itemToEdit, image: e.target.value })}
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
                                                setItemToEdit({ ...itemToEdit, image: imageUrl });
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                        </div>

                        {itemToEdit.image && (
                            <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                                <img src={itemToEdit.image} alt="Preview" className="h-32 object-cover rounded" />
                            </div>
                        )}

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
                                disabled={isSaving}
                                className="px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors shadow-md disabled:opacity-50"
                            >
                                {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
                            </button>
                        </div>
                    </form>
                )}
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
