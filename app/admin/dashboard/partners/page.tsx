"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaSave, FaPlus, FaTrash, FaImage, FaHandshake, FaEdit } from 'react-icons/fa';
import { Partner } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';
import AdminViewToggle from '@/app/admin/components/AdminViewToggle';

export default function PartnersSettingsPage() {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [viewMode, setViewMode] = useState<'card' | 'table'>('table');

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [partnerToEdit, setPartnerToEdit] = useState<Partner | null>(null);

    const [newPartnerData, setNewPartnerData] = useState<Partial<Partner>>({
        name: "",
        logo: "",
        status: "active"
    });
    // ... rest of state and effects
    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = async () => {
        try {
            const res = await fetch('/api/partners');
            const data = await res.json();
            setPartners(data);
        } catch (error) {
            console.error('Failed to fetch partners:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditClick = (partner: Partner) => {
        setPartnerToEdit({ ...partner });
        setIsEditModalOpen(true);
    };

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/partners/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setPartners(partners.filter(partner => partner.id !== itemToDelete));
                setItemToDelete(null);
                toast.success('Partner berhasil dihapus');
            } else {
                toast.error('Gagal menghapus partner');
            }
        } catch (error) {
            console.error('Error deleting partner:', error);
            toast.error('Terjadi kesalahan saat menghapus partner');
        }
    };

    // Add Logic
    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const partnerToAdd = {
                ...newPartnerData,
                logo: newPartnerData.logo || "https://placehold.co/200x100" // Default if empty
            };

            const res = await fetch('/api/partners', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(partnerToAdd)
            });

            if (res.ok) {
                const created = await res.json();
                setPartners([...partners, created]);
                setIsAddModalOpen(false);
                toast.success('Partner berhasil ditambahkan');
                setNewPartnerData({ name: "", logo: "" }); // Reset form
            } else {
                toast.error('Gagal menambah partner');
            }
        } catch (error) {
            console.error('Error adding partner:', error);
            toast.error('Terjadi kesalahan saat menambah partner');
        }
    };

    // Edit Logic
    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!partnerToEdit) return;
        setIsSaving(true);

        try {
            const res = await fetch(`/api/partners/${partnerToEdit.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(partnerToEdit)
            });

            if (res.ok) {
                setPartners(partners.map(partner =>
                    partner.id === partnerToEdit.id ? partnerToEdit : partner
                ));
                setIsEditModalOpen(false);
                toast.success('Partner berhasil diperbarui');
            } else {
                toast.error('Gagal memperbarui partner');
            }
        } catch (error) {
            console.error('Error updating partner:', error);
            toast.error('Terjadi kesalahan saat memperbarui partner');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light leading-tight">
                    Pengaturan Partners
                </h1>
                <div className="flex items-center gap-3">
                    <AdminViewToggle view={viewMode} onViewChange={setViewMode} />
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-3 md:px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 rounded-lg transition-all flex items-center gap-2 shadow-md shadow-violet-200"
                    >
                        <FaPlus size={12} />
                        <span className="text-xs md:text-sm font-semibold font-montserrat">Tambah Partner</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaHandshake className="text-sm md:text-xl" />
                            </div>
                            <h2 className="text-sm md:text-lg font-semibold text-text-light font-montserrat leading-tight">Daftar Logo Partner</h2>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="max-[430px]:hidden">
                        {viewMode === 'table' ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider w-16">#</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Logo</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Nama Partner</th>
                                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {partners.map((partner, index) => (
                                            <tr key={partner.id} className="hover:bg-gray-50 transition text-sm">
                                                <td className="px-6 py-4 text-gray-400 font-medium">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="w-20 h-10 bg-white border border-gray-100 rounded p-1 flex items-center justify-center">
                                                        <img
                                                            src={partner.logo || 'https://placehold.co/200x100'}
                                                            className="max-w-full max-h-full object-contain"
                                                            alt={partner.name}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-semibold text-gray-900 font-montserrat">
                                                    {partner.name || 'Set Nama Partner'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-center gap-2">
                                                        <button
                                                            onClick={() => handleEditClick(partner)}
                                                            className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors border border-transparent hover:border-violet-100 shadow-sm bg-white"
                                                            title="Edit"
                                                        >
                                                            <FaEdit size={14} />
                                                        </button>
                                                        <button
                                                            onClick={() => setItemToDelete(partner.id)}
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
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                                {partners.map((partner) => (
                                    <div key={partner.id} className="relative bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all shadow-sm">
                                        {/* Logo Preview Area */}
                                        <div className="aspect-video relative overflow-hidden bg-white flex items-center justify-center p-4">
                                            <img
                                                src={partner.logo || 'https://placehold.co/200x100'}
                                                alt={partner.name}
                                                className="max-w-full max-h-full object-contain"
                                            />

                                            {/* Desktop Actions */}
                                            <div className="absolute top-1 right-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1.5">
                                                <button
                                                    type="button"
                                                    onClick={() => handleEditClick(partner)}
                                                    className="bg-white/90 p-1 rounded text-gray-400 hover:text-violet-500 hover:bg-white transition-colors shadow-sm"
                                                    title="Edit Partner"
                                                >
                                                    <FaEdit size={10} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setItemToDelete(partner.id)}
                                                    className="bg-white/90 p-1 rounded text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                                    title="Hapus Partner"
                                                >
                                                    <FaTrash size={10} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-2 bg-white text-center">
                                            <p className="text-[10px] font-medium text-text-light truncate px-2">{partner.name || 'Set Nama Partner'}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile View - Always Cards */}
                    <div className="max-[430px]:block hidden space-y-4">
                        {partners.map((partner, index) => (
                            <div key={partner.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm p-4 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="w-16 h-10 bg-gray-50 rounded flex items-center justify-center p-1 border border-gray-100">
                                        <img
                                            src={partner.logo || 'https://placehold.co/200x100'}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-semibold text-gray-900 font-montserrat text-xs truncate">{partner.name || 'Set Nama Partner'}</h3>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-50">
                                    <button
                                        onClick={() => handleEditClick(partner)}
                                        className="flex-1 py-1.5 px-3 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-blue-100"
                                    >
                                        <FaEdit size={12} />
                                        <span>Edit</span>
                                    </button>
                                    <button
                                        onClick={() => setItemToDelete(partner.id)}
                                        className="flex-1 py-1.5 px-3 bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-red-100"
                                    >
                                        <FaTrash size={12} />
                                        <span>Hapus</span>
                                    </button>
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

            </div>

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Partner Baru"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Partner <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            value={newPartnerData.name}
                            onChange={(e) => setNewPartnerData({ ...newPartnerData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Contoh: Google, Microsoft"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Logo URL (Optional)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newPartnerData.logo}
                                onChange={(e) => setNewPartnerData({ ...newPartnerData, logo: e.target.value })}
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
                                            setNewPartnerData({ ...newPartnerData, logo: imageUrl });
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Bisa input URL gambar atau upload dari komputer (preview only).</p>
                    </div>

                    {newPartnerData.logo && (
                        <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                            <img src={newPartnerData.logo} alt="Preview" className="h-16 object-contain" />
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
                            Simpan Partner
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Partner"
            >
                {partnerToEdit && (
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Partner <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={partnerToEdit.name}
                                onChange={(e) => setPartnerToEdit({ ...partnerToEdit, name: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Google, Microsoft"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Logo URL (Optional)</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={partnerToEdit.logo}
                                    onChange={(e) => setPartnerToEdit({ ...partnerToEdit, logo: e.target.value })}
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
                                                setPartnerToEdit({ ...partnerToEdit, logo: imageUrl });
                                            }
                                        }}
                                    />
                                </label>
                            </div>
                        </div>

                        {partnerToEdit.logo && (
                            <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                                <img src={partnerToEdit.logo} alt="Preview" className="h-16 object-contain" />
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
                title="Hapus Partner"
                message="Apakah Anda yakin ingin menghapus partner ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />
        </div>
    );
}
