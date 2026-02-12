"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaSave, FaPlus, FaTrash, FaImage, FaHandshake } from 'react-icons/fa';
import { Partner } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';

export default function PartnersSettingsPage() {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [newPartnerData, setNewPartnerData] = useState<Partial<Partner>>({
        name: "",
        logo: "",
        status: "active"
    });

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

    const handlePartnerChange = (id: number, field: keyof Partner, value: string) => {
        setPartners(partners.map(partner =>
            partner.id === id ? { ...partner, [field]: value } : partner
        ));
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

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            // Update all partners
            const updatePromises = partners.map(partner =>
                fetch(`/api/partners/${partner.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(partner)
                })
            );

            await Promise.all(updatePromises);
            alert('Pengaturan Partners berhasil disimpan!');
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
                    Pengaturan Partners
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

                {/* Partners List Management */}
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
                            onClick={() => setIsAddModalOpen(true)}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Partner</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {partners.map((partner) => (
                            <div key={partner.id} className="relative bg-[#F4F4F7] border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all">
                                {/* Logo Preview Area */}
                                <div className="aspect-video relative overflow-hidden bg-white flex items-center justify-center p-4">
                                    <img
                                        src={partner.logo || 'https://placehold.co/200x100'}
                                        alt={partner.name}
                                        className="max-w-full max-h-full object-contain"
                                    />

                                    <div className="absolute top-1 right-1 z-10">
                                        <button
                                            type="button"
                                            onClick={() => setItemToDelete(partner.id)}
                                            className="bg-white/80 p-1 rounded text-gray-500 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                            title="Hapus Partner"
                                        >
                                            <FaTrash size={10} />
                                        </button>
                                    </div>

                                    {/* Upload Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                                        <label className="bg-white/95 px-2 py-1 rounded text-[10px] font-medium text-gray-600 flex items-center gap-1 cursor-pointer hover:bg-white hover:text-violet-600 shadow-sm">
                                            <FaImage size={10} /> Ganti Logo
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const imageUrl = URL.createObjectURL(file);
                                                        handlePartnerChange(partner.id, 'logo', imageUrl);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="p-2 bg-white">
                                    <input
                                        type="text"
                                        value={partner.name}
                                        onChange={(e) => handlePartnerChange(partner.id, 'name', e.target.value)}
                                        placeholder="Nama Partner"
                                        className="w-full px-2 py-1 bg-[#F4F4F7] border border-gray-200 rounded text-[10px] text-center font-medium text-text-light focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all"
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

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Partner Baru"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Partner</label>
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
