"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaParagraph, FaSave, FaPlus, FaTrash, FaImage, FaBriefcase, FaTag, FaEdit, FaChevronDown, FaTimes } from 'react-icons/fa';
import { PortfolioItem } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';
import AdminViewToggle from '@/app/admin/components/AdminViewToggle';

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
    const [viewMode, setViewMode] = useState<'card' | 'table'>('table');

    // Modal States
    // ... (rest of the states and effects)
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
        marquee_row: "top",
        gallery: []
    });

    const [newGalleryUrl, setNewGalleryUrl] = useState('');
    const [editGalleryUrl, setEditGalleryUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (file: File, isEdit: boolean) => {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const { url } = await res.json();
                if (isEdit) {
                    setItemToEdit(prev => prev ? { ...prev, image: url } : null);
                } else {
                    setNewItemData(prev => ({ ...prev, image: url }));
                }
                toast.success('Gambar berhasil diunggah');
            } else {
                toast.error('Gagal mengunggah gambar');
            }
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Terjadi kesalahan saat mengunggah');
        } finally {
            setIsUploading(false);
        }
    };

    const handleGalleryUpload = async (files: FileList | null, isEdit: boolean) => {
        if (!files || files.length === 0) return;
        setIsUploading(true);
        const uploadPromises = Array.from(files).map(async (file) => {
            const formData = new FormData();
            formData.append('file', file);
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) throw new Error(`Failed to upload ${file.name}`);
            return await res.json();
        });

        try {
            const results = await Promise.all(uploadPromises);
            const urls = results.map(r => r.url);
            
            if (isEdit) {
                setItemToEdit(prev => prev ? { ...prev, gallery: [...(prev.gallery || []), ...urls] } : null);
            } else {
                setNewItemData(prev => ({ ...prev, gallery: [...(prev.gallery || []), ...urls] }));
            }
            toast.success(`${urls.length} gambar berhasil diunggah ke gallery`);
        } catch (error) {
            console.error('Gallery upload error:', error);
            toast.error('Beberapa gambar gagal diunggah');
        } finally {
            setIsUploading(false);
        }
    };

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
                    description: "",
                    marquee_row: 'top',
                    gallery: []
                });
                setNewGalleryUrl('');
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light leading-tight">
                    Pengaturan Portfolio
                </h1>
                <div className="flex items-center gap-3">
                    <AdminViewToggle view={viewMode} onViewChange={setViewMode} />
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-3 md:px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 rounded-lg transition-all flex items-center gap-2 shadow-md shadow-violet-200"
                    >
                        <FaPlus size={12} />
                        <span className="text-xs md:text-sm font-semibold font-montserrat">Tambah Proyek</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaBriefcase className="text-sm md:text-xl" />
                            </div>
                            <h2 className="text-sm md:text-lg font-semibold text-text-light font-montserrat leading-tight">Daftar Proyek Portfolio</h2>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="max-[430px]:hidden">
                        {viewMode === 'table' ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Proyek</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Kategori</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Size</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Baris</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Status</th>
                                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {portfolioItems.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50 transition">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={item.image || 'https://placehold.co/600x400'}
                                                            className="w-12 h-8 rounded object-cover border border-gray-200"
                                                            alt={item.title}
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 font-montserrat">{item.title}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600 font-montserrat">
                                                    {item.category || '-'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full uppercase">
                                                        {item.size || 'large'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-[10px] font-medium px-2 py-1 rounded-full uppercase ${item.marquee_row === 'top' ? 'bg-violet-100 text-violet-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                                        {item.marquee_row === 'top' ? 'Atas' : 'Bawah'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 text-[10px] rounded-full font-medium uppercase tracking-wider ${item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-center gap-2">
                                                        <button
                                                            onClick={() => handleEditClick(item)}
                                                            className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors border border-transparent hover:border-violet-100 shadow-sm bg-white"
                                                            title="Edit"
                                                        >
                                                            <FaEdit size={14} />
                                                        </button>
                                                        <button
                                                            onClick={() => setItemToDelete(item.id)}
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
                            <div className="space-y-8">
                                {/* Marquee Atas */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-violet-600 font-montserrat flex items-center gap-2">
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
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-emerald-600 font-montserrat flex items-center gap-2">
                                        <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                                        Baris Bawah
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            </div>
                        )}
                    </div>

                    {/* Mobile View - Always Cards */}
                    <div className="max-[430px]:block hidden divide-y divide-gray-100">
                        {portfolioItems.map((item) => (
                            <div key={item.id} className="p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image || 'https://placehold.co/600x400'}
                                        alt={item.title}
                                        className="w-16 h-12 rounded object-cover shadow-sm bg-gray-50"
                                    />
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-gray-900 font-montserrat text-xs truncate">{item.title}</h3>
                                        <p className="text-[10px] text-gray-500 font-montserrat truncate">{item.category || '-'}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[10px]">
                                    <span className={`px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {item.status}
                                    </span>
                                    <span className={`px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${item.marquee_row === 'top' ? 'bg-violet-100 text-violet-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                        Baris {item.marquee_row === 'top' ? 'Atas' : 'Bawah'}
                                    </span>
                                </div>

                                <div className="flex items-center justify-end gap-2 mt-4 pt-2 border-t border-gray-50">
                                    <button
                                        onClick={() => handleEditClick(item)}
                                        className="flex-1 py-1.5 px-3 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-blue-100"
                                    >
                                        <FaEdit size={12} />
                                        <span>Edit</span>
                                    </button>
                                    <button
                                        onClick={() => setItemToDelete(item.id)}
                                        className="flex-1 py-1.5 px-3 bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-red-100"
                                    >
                                        <FaTrash size={12} />
                                        <span>Hapus</span>
                                    </button>
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
                            <label className={`px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                <FaImage className="text-gray-600" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    disabled={isUploading}
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) handleImageUpload(file, false);
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

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Deskripsi</label>
                        <textarea
                            value={newItemData.description || ''}
                            onChange={(e) => setNewItemData({ ...newItemData, description: e.target.value })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white resize-none"
                            placeholder="Deskripsi proyek..."
                        />
                    </div>

                    {/* Gallery */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Gallery</label>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={newGalleryUrl}
                                onChange={(e) => setNewGalleryUrl(e.target.value)}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Masukkan URL gambar gallery"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        if (newGalleryUrl.trim()) {
                                            setNewItemData({ ...newItemData, gallery: [...(newItemData.gallery || []), newGalleryUrl.trim()] });
                                            setNewGalleryUrl('');
                                        }
                                    }
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    if (newGalleryUrl.trim()) {
                                        setNewItemData({ ...newItemData, gallery: [...(newItemData.gallery || []), newGalleryUrl.trim()] });
                                        setNewGalleryUrl('');
                                    }
                                }}
                                className="px-3 py-2 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-colors text-sm font-semibold"
                            >
                                <FaPlus size={12} />
                            </button>
                            <label className={`px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                <FaImage className="text-gray-600" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    disabled={isUploading}
                                    className="hidden"
                                    onChange={(e) => handleGalleryUpload(e.target.files, false)}
                                />
                            </label>
                        </div>
                        {(newItemData.gallery || []).length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {(newItemData.gallery || []).map((url, index) => (
                                    <div key={index} className="relative group">
                                        <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-20 object-cover rounded-lg border border-gray-200" />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const updated = [...(newItemData.gallery || [])];
                                                updated.splice(index, 1);
                                                setNewItemData({ ...newItemData, gallery: updated });
                                            }}
                                            className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <FaTimes size={8} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

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
                                <label className={`px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    <FaImage className="text-gray-600" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        disabled={isUploading}
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleImageUpload(file, true);
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

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Deskripsi</label>
                            <textarea
                                value={itemToEdit.description || ''}
                                onChange={(e) => setItemToEdit({ ...itemToEdit, description: e.target.value })}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white resize-none"
                                placeholder="Deskripsi proyek..."
                            />
                        </div>

                        {/* Gallery */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Gallery</label>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={editGalleryUrl}
                                    onChange={(e) => setEditGalleryUrl(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder="Masukkan URL gambar gallery"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            if (editGalleryUrl.trim()) {
                                                setItemToEdit({ ...itemToEdit, gallery: [...(itemToEdit.gallery || []), editGalleryUrl.trim()] });
                                                setEditGalleryUrl('');
                                            }
                                        }
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (editGalleryUrl.trim()) {
                                            setItemToEdit({ ...itemToEdit, gallery: [...(itemToEdit.gallery || []), editGalleryUrl.trim()] });
                                            setEditGalleryUrl('');
                                        }
                                    }}
                                    className="px-3 py-2 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-colors text-sm font-semibold"
                                >
                                    <FaPlus size={12} />
                                </button>
                                <label className={`px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    <FaImage className="text-gray-600" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        disabled={isUploading}
                                        className="hidden"
                                        onChange={(e) => handleGalleryUpload(e.target.files, true)}
                                    />
                                </label>
                            </div>
                            {(itemToEdit.gallery || []).length > 0 && (
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    {(itemToEdit.gallery || []).map((url, index) => (
                                        <div key={index} className="relative group">
                                            <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-20 object-cover rounded-lg border border-gray-200" />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const updated = [...(itemToEdit.gallery || [])];
                                                    updated.splice(index, 1);
                                                    setItemToEdit({ ...itemToEdit, gallery: updated });
                                                }}
                                                className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <FaTimes size={8} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
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
