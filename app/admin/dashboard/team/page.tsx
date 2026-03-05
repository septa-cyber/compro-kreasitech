"use client";

import { FaSave, FaPlus, FaTrash, FaUser, FaUserTag, FaImage, FaGripVertical, FaEdit } from 'react-icons/fa';
import { TeamMember } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';
import React, { useState, useEffect, useCallback } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragStartEvent,
    DragOverlay,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// ---------- Sortable Team Card Component ----------
function SortableTeamCard({
    member,
    index,
    onDelete,
    onEdit,
}: {
    member: TeamMember;
    index: number;
    onDelete: (id: number) => void;
    onEdit: (member: TeamMember) => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: member.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 50 : 'auto',
    };

    return (
        <div
            ref={setNodeRef}
            style={style as React.CSSProperties}
            className={`relative bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all shadow-sm ${isDragging ? 'shadow-2xl ring-2 ring-violet-400' : ''}`}
        >
            {/* Drag Handle + Order Badge */}
            <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    type="button"
                    {...attributes}
                    {...listeners}
                    className="bg-white/90 backdrop-blur-sm p-1.5 rounded-md text-gray-400 hover:text-violet-600 hover:bg-white transition-colors shadow-sm cursor-grab active:cursor-grabbing"
                    title="Drag untuk mengatur urutan"
                >
                    <FaGripVertical size={14} />
                </button>
            </div>

            <div className="absolute top-2 left-2 z-2 group-hover:hidden transition-all">
                <span className="bg-violet-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm min-w-[20px] text-center">
                    {index + 1}
                </span>
            </div>

            {/* Image Preview Area */}
            <div className="aspect-square relative overflow-hidden bg-gray-200">
                <img src={member.avatar || 'https://placehold.co/400x400'} alt={member.name} className="w-full h-full object-cover" />

                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button
                        type="button"
                        onClick={() => onEdit(member)}
                        className="bg-white/90 p-1.5 rounded-md text-gray-400 hover:text-violet-500 hover:bg-white transition-colors shadow-sm"
                        title="Edit Anggota"
                    >
                        <FaEdit size={12} />
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(member.id)}
                        className="bg-white/90 p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                        title="Hapus Anggota"
                    >
                        <FaTrash size={12} />
                    </button>
                </div>

                {/* Name Overlay Preview */}
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="font-bold text-sm leading-tight">{member.name}</p>
                    <p className="text-[10px] opacity-90">{member.role}</p>
                </div>
            </div>

            <div className="p-4 space-y-3 bg-white">
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-0.5">
                        Nama Lengkap
                    </label>
                    <p className="text-sm font-medium text-text-light truncate">{member.name}</p>
                </div>
                <div>
                    <label className="block text-[10px] font-medium text-gray-500 uppercase font-montserrat mb-0.5">
                        Posisi / Jabatan
                    </label>
                    <p className="text-sm font-medium text-text-light truncate">{member.role}</p>
                </div>
            </div>
        </div>
    );
}

// ---------- Drag Overlay Card (visual feedback during drag) ----------
function DragOverlayCard({ member, index }: { member: TeamMember; index: number }) {
    return (
        <div className="relative bg-[#F4F4F7] border-2 border-violet-400 rounded-xl overflow-hidden shadow-2xl w-[280px] rotate-2">
            <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5">
                <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-md text-violet-600 shadow-sm">
                    <FaGripVertical size={14} />
                </div>
                <span className="bg-violet-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm min-w-[20px] text-center">
                    {index + 1}
                </span>
            </div>
            <div className="aspect-square relative overflow-hidden bg-gray-200">
                <img src={member.avatar || 'https://placehold.co/400x400'} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="font-bold text-sm leading-tight">{member.name}</p>
                    <p className="text-[10px] opacity-90">{member.role}</p>
                </div>
            </div>
        </div>
    );
}


// ---------- Main Page Component ----------
export default function TeamSettingsPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [activeId, setActiveId] = useState<number | null>(null);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [memberToEdit, setMemberToEdit] = useState<TeamMember | null>(null);

    const [newMemberData, setNewMemberData] = useState<Partial<TeamMember>>({
        name: "",
        role: "",
        avatar: "",
        status: "active"
    });

    // DnD sensors
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

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

    const handleEditClick = (member: TeamMember) => {
        setMemberToEdit({ ...member });
        setIsEditModalOpen(true);
    };

    // Drag handlers
    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as number);
    };

    const handleDragEnd = useCallback(async (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over || active.id === over.id) return;

        const oldIndex = teamMembers.findIndex(m => m.id === active.id);
        const newIndex = teamMembers.findIndex(m => m.id === over.id);

        if (oldIndex === -1 || newIndex === -1) return;

        const reordered = arrayMove(teamMembers, oldIndex, newIndex);
        // Update order field locally
        const withOrder = reordered.map((m: TeamMember, i: number) => ({ ...m, order: i }));
        setTeamMembers(withOrder);

        // Save reorder to backend
        try {
            const orderedIds = withOrder.map((m: TeamMember) => m.id);
            const res = await fetch('/api/team/reorder', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderedIds }),
            });
            if (res.ok) {
                toast.success('Urutan tim berhasil diperbarui');
            } else {
                toast.error('Gagal menyimpan urutan');
                fetchTeamMembers(); // Revert on error
            }
        } catch (error) {
            console.error('Error saving reorder:', error);
            toast.error('Gagal menyimpan urutan');
            fetchTeamMembers(); // Revert on error
        }
    }, [teamMembers]);

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
            toast.error('Terjadi kesalahan saat menambah anggota');
        }
    };

    const handleNewAvatarUpload = async (file: File | undefined) => {
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

            setNewMemberData(prev => ({ ...prev, avatar: data.url }));
            toast.success('Foto berhasil diunggah', { id: toastId });
        } catch (error) {
            console.error('Upload Error:', error);
            toast.error('Gagal mengunggah foto', { id: toastId });
        }
    };

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!memberToEdit) return;
        setIsSaving(true);

        try {
            const res = await fetch(`/api/team/${memberToEdit.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(memberToEdit)
            });

            if (res.ok) {
                setTeamMembers(teamMembers.map(member =>
                    member.id === memberToEdit.id ? memberToEdit : member
                ));
                setIsEditModalOpen(false);
                toast.success('Data anggota berhasil diperbarui');
            } else {
                toast.error('Gagal memperbarui data anggota');
            }
        } catch (error) {
            console.error('Error updating member:', error);
            toast.error('Terjadi kesalahan saat memperbarui data anggota');
        } finally {
            setIsSaving(false);
        }
    };

    const handleEditAvatarUpload = async (file: File | undefined) => {
        if (!file || !memberToEdit) return;
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

            setMemberToEdit(prev => prev ? ({ ...prev, avatar: data.url }) : null);
            toast.success('Foto berhasil diunggah', { id: toastId });
        } catch (error) {
            console.error('Upload Error:', error);
            toast.error('Gagal mengunggah foto', { id: toastId });
        }
    };

    // Get the active member for overlay
    const activeMember = activeId ? teamMembers.find(m => m.id === activeId) : null;
    const activeIndex = activeId ? teamMembers.findIndex(m => m.id === activeId) : -1;

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Tim (Team)
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-6">

                {/* Team List Management */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                                <FaUser size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Anggota Tim</h2>
                                <p className="text-xs text-gray-400 mt-0.5">Drag dan drop card untuk mengatur urutan tampilan</p>
                            </div>
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

                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={teamMembers.map(m => m.id)}
                            strategy={rectSortingStrategy}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {teamMembers.map((member, index) => (
                                    <SortableTeamCard
                                        key={member.id}
                                        member={member}
                                        index={index}
                                        onDelete={(id) => setItemToDelete(id)}
                                        onEdit={handleEditClick}
                                    />
                                ))}
                            </div>
                        </SortableContext>

                        <DragOverlay>
                            {activeMember ? (
                                <DragOverlayCard member={activeMember} index={activeIndex} />
                            ) : null}
                        </DragOverlay>
                    </DndContext>

                    {teamMembers.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-sm font-montserrat">Belum ada anggota tim yang ditambahkan.</p>
                        </div>
                    )}
                </div>

            </div>

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Anggota Tim"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Jabatan <span className="text-red-500">*</span></label>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status <span className="text-red-500">*</span></label>
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
                                        handleNewAvatarUpload(file);
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

            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Anggota Tim"
            >
                {memberToEdit && (
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={memberToEdit.name}
                                onChange={(e) => setMemberToEdit({ ...memberToEdit, name: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Nama Lengkap"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Jabatan <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={memberToEdit.role}
                                onChange={(e) => setMemberToEdit({ ...memberToEdit, role: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: CEO, Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status <span className="text-red-500">*</span></label>
                            <select
                                value={memberToEdit.status}
                                onChange={(e) => setMemberToEdit({ ...memberToEdit, status: e.target.value as 'active' | 'inactive' })}
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
                                    value={memberToEdit.avatar}
                                    onChange={(e) => setMemberToEdit({ ...memberToEdit, avatar: e.target.value })}
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
                                            handleEditAvatarUpload(file);
                                        }}
                                    />
                                </label>
                            </div>
                        </div>

                        {memberToEdit.avatar && (
                            <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                                <img src={memberToEdit.avatar} alt="Preview" className="h-32 w-32 object-cover rounded-full" />
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
                title="Hapus Anggota"
                message="Apakah Anda yakin ingin menghapus anggota ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />
        </div>
    );
}
