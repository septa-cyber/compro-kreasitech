"use client";

import { FaHeading, FaSave, FaPlus, FaTrash, FaUser, FaUserTag, FaImage, FaUsers } from 'react-icons/fa';
import { TeamMember } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react';


export default function TeamSettingsPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [newMemberData, setNewMemberData] = useState<Partial<TeamMember>>({
        name: "",
        role: "",
        avatar: "",
        status: "active"
    });

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const fetchTeamMembers = async () => {
        try {
            const res = await fetch('/api/team');
            const data = await res.json();
            setTeamMembers(data);
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleMemberChange = (id: number, field: keyof TeamMember, value: string) => {
        setTeamMembers(teamMembers.map(member =>
            member.id === id ? { ...member, [field]: value } : member
        ));
    };

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/team/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setTeamMembers(teamMembers.filter(member => member.id !== itemToDelete));
                setItemToDelete(null);
                toast.success('Anggota tim berhasil dihapus');
            } else {
                toast.error('Gagal menghapus anggota tim');
            }
        } catch (error) {
            console.error('Error deleting member:', error);
            toast.error('Terjadi kesalahan saat menghapus anggota tim');
        }
    };

    // Add Logic
    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const memberToAdd = {
                ...newMemberData,
                avatar: newMemberData.avatar || "https://placehold.co/400x400"
            };

            const res = await fetch('/api/team', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(memberToAdd)
            });

            if (res.ok) {
                const created = await res.json();
                setTeamMembers([...teamMembers, created]);
                setIsAddModalOpen(false);
                toast.success('Anggota tim berhasil ditambahkan');
                setNewMemberData({
                    name: "",
                    role: "",
                    avatar: "",
                    status: "active"
                });
            } else {
                toast.error('Gagal menambah anggota tim');
            }
        } catch (error) {
            console.error('Error adding member:', error);
            toast.error('Terjadi kesalahan saat menambah anggota tim');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            // Update all team members
            const updatePromises = teamMembers.map(member =>
                fetch(`/api/team/${member.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(member)
                })
            );

            await Promise.all(updatePromises);
            toast.success('Pengaturan Tim berhasil disimpan!');
        } catch (error) {
            console.error('Error saving:', error);
            toast.error('Gagal menyimpan perubahan');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Tim (Team)
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
                            onClick={() => setIsAddModalOpen(true)}
                            className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                        >
                            <FaPlus />
                            <span>Tambah Anggota</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="relative bg-[#F4F4F7] border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all">
                                {/* Image Preview Area */}
                                <div className="aspect-square relative overflow-hidden bg-gray-200">
                                    <img src={member.avatar || 'https://placehold.co/400x400'} alt={member.name} className="w-full h-full object-cover" />

                                    <div className="absolute top-2 right-2 z-10">
                                        <button
                                            type="button"
                                            onClick={() => setItemToDelete(member.id)}
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
                                                        handleMemberChange(member.id, 'avatar', imageUrl);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>

                                    {/* Name Overlay Preview */}
                                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                                        <p className="font-bold text-sm leading-tight">{member.name}</p>
                                        <p className="text-[10px] opacity-90">{member.role}</p>
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
                                                value={member.name}
                                                onChange={(e) => handleMemberChange(member.id, 'name', e.target.value)}
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
                                                value={member.role}
                                                onChange={(e) => handleMemberChange(member.id, 'role', e.target.value)}
                                                className="w-full pl-6 pr-2 py-1.5 bg-[#F4F4F7] border border-gray-200 rounded text-xs text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
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

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Anggota Tim"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Lengkap</label>
                        <input
                            type="text"
                            required
                            value={newMemberData.name}
                            onChange={(e) => setNewMemberData({ ...newMemberData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Nama Lengkap"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Jabatan</label>
                        <input
                            type="text"
                            required
                            value={newMemberData.role}
                            onChange={(e) => setNewMemberData({ ...newMemberData, role: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Contoh: CEO, Developer"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status</label>
                        <select
                            value={newMemberData.status || 'active'}
                            onChange={(e) => setNewMemberData({ ...newMemberData, status: e.target.value as 'active' | 'inactive' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Avatar URL (Optional)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newMemberData.avatar}
                                onChange={(e) => setNewMemberData({ ...newMemberData, avatar: e.target.value })}
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
                                            setNewMemberData({ ...newMemberData, avatar: imageUrl });
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>

                    {newMemberData.avatar && (
                        <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                            <img src={newMemberData.avatar} alt="Preview" className="h-32 w-32 object-cover rounded-full" />
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
                            Simpan Anggota
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <ConfirmationModal
                isOpen={!!itemToDelete}
                onClose={() => setItemToDelete(null)}
                onConfirm={confirmDelete}
                title="Hapus Anggota"
                message="Apakah Anda yakin ingin menghapus anggota ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />
        </div>
    );
}
