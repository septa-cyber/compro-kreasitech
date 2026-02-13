"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaPlus, FaTrash, FaBriefcase, FaMapMarkerAlt, FaClock, FaImage, FaEdit } from 'react-icons/fa';
import { JobPosting } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';

export default function JobsSettingsPage() {
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [editingItem, setEditingItem] = useState<JobPosting | null>(null);
    const [newItemData, setNewItemData] = useState<Partial<JobPosting>>({
        title: "",
        department: "",
        location: "",
        category: "Creative",
        type: "Full-time",
        experience: "",
        education: "",
        salary: "",
        whatsapp_url: "",
        logo_url: "",
        description: "",
        requirements: [],
        responsibilities: [],
        benefits: [],
        location_type: "WFO",
        status: "open"
    });
    const [requirementsText, setRequirementsText] = useState("");
    const [responsibilitiesText, setResponsibilitiesText] = useState("");
    const [benefitsText, setBenefitsText] = useState("");

    const [editItemData, setEditItemData] = useState<Partial<JobPosting>>({});
    const [editRequirementsText, setEditRequirementsText] = useState("");
    const [editResponsibilitiesText, setEditResponsibilitiesText] = useState("");
    const [editBenefitsText, setEditBenefitsText] = useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch('/api/jobs');
            const data = await res.json();
            setJobs(data);
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Edit Logic
    const handleEditClick = (job: JobPosting) => {
        setEditingItem(job);
        setEditItemData(job);
        setEditRequirementsText(job.requirements?.join('\n') || "");
        setEditResponsibilitiesText(job.responsibilities?.join('\n') || "");
        setEditBenefitsText(job.benefits?.join('\n') || "");
        setIsEditModalOpen(true);
    };

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingItem) return;

        try {
            const itemToUpdate = {
                ...editItemData,
                requirements: editRequirementsText.split('\n').filter(Boolean),
                responsibilities: editResponsibilitiesText.split('\n').filter(Boolean),
                benefits: editBenefitsText.split('\n').filter(Boolean),
            };

            const res = await fetch(`/api/jobs/${editingItem.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemToUpdate)
            });

            if (res.ok) {
                const updated = await res.json();
                setJobs(jobs.map(j => j.id === updated.id ? updated : j));
                setIsEditModalOpen(false);
                toast.success('Lowongan berhasil diperbarui');
            } else {
                const err = await res.json();
                toast.error(`Gagal memperbarui lowongan: ${err.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error updating job:', error);
            toast.error('Terjadi kesalahan saat memperbarui lowongan');
        }
    };

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/jobs/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setJobs(jobs.filter(j => j.id !== itemToDelete));
                setItemToDelete(null);
                toast.success('Lowongan berhasil dihapus');
            } else {
                toast.error('Gagal menghapus lowongan');
            }
        } catch (error) {
            console.error('Error deleting job:', error);
            toast.error('Terjadi kesalahan saat menghapus lowongan');
        }
    };

    // Add Logic
    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const itemToAdd = {
                ...newItemData,
                requirements: requirementsText.split('\n').filter(Boolean),
                responsibilities: responsibilitiesText.split('\n').filter(Boolean),
                benefits: benefitsText.split('\n').filter(Boolean),
                postedDate: new Date().toISOString().split('T')[0]
            };

            const res = await fetch('/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemToAdd)
            });

            if (res.ok) {
                const created = await res.json();
                setJobs([...jobs, created]);
                setIsAddModalOpen(false);
                toast.success('Lowongan berhasil ditambahkan');
                setNewItemData({
                    title: "",
                    department: "",
                    location: "",
                    category: "Creative",
                    type: "Full-time",
                    experience: "",
                    education: "",
                    salary: "",
                    whatsapp_url: "",
                    logo_url: "",
                    description: "",
                    requirements: [],
                    responsibilities: [],
                    benefits: [],
                    location_type: "WFO",
                    status: "open"
                });
                setRequirementsText("");
                setResponsibilitiesText("");
                setBenefitsText("");
            } else {
                toast.error('Gagal menambahkan lowongan');
            }
        } catch (error) {
            console.error('Error adding job:', error);
            toast.error('Terjadi kesalahan saat menambahkan lowongan');
        }
    };

    const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                if (isEdit) {
                    setEditItemData({ ...editItemData, logo_url: data.url });
                } else {
                    setNewItemData({ ...newItemData, logo_url: data.url });
                }
                toast.success('Logo berhasil diunggah');
            } else {
                toast.error('Gagal mengunggah logo');
            }
        } catch (error) {
            console.error('Error uploading logo:', error);
            toast.error('Terjadi kesalahan saat mengunggah logo');
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Menejemen Lowongan Pekerjaan
                </h1>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaBriefcase size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Daftar Lowongan</h2>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-4 py-2 bg-violet-50 text-violet-600 hover:bg-violet-100 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                    >
                        <FaPlus />
                        <span>Tambah Lowongan</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="p-4 border border-gray-200 rounded-xl hover:border-violet-300 transition-all bg-[#F4F4F7] group relative">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                <button
                                    onClick={() => handleEditClick(job)}
                                    className="p-2 text-gray-400 hover:text-violet-500 hover:bg-white rounded-lg transition-colors shadow-sm"
                                    title="Edit Lowongan"
                                >
                                    <FaEdit size={14} />
                                </button>
                                <button
                                    onClick={() => setItemToDelete(job.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors shadow-sm"
                                    title="Hapus Lowongan"
                                >
                                    <FaTrash size={14} />
                                </button>
                            </div>

                            <h3 className="font-semibold text-gray-900 font-montserrat mb-1 pr-8">{job.title}</h3>
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                                <span className="flex items-center gap-1"><FaBriefcase /> {job.department}</span>
                                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                                <span className="flex items-center gap-1"><FaClock /> {job.type}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className={`px-2 py-0.5 text-[10px] rounded-full capitalize ${job.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {job.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {jobs.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm font-montserrat">Belum ada lowongan pekerjaan yang ditambahkan.</p>
                    </div>
                )}
            </div>

            {/* Add Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Tambah Lowongan Pekerjaan"
                maxWidth="max-w-2xl"
            >
                <form onSubmit={handleAddSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Judul</label>
                            <input
                                type="text"
                                required
                                value={newItemData.title}
                                onChange={(e) => setNewItemData({ ...newItemData, title: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Frontend Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Departemen</label>
                            <input
                                type="text"
                                required
                                value={newItemData.department}
                                onChange={(e) => setNewItemData({ ...newItemData, department: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Engineering"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Lokasi</label>
                            <input
                                type="text"
                                required
                                value={newItemData.location}
                                onChange={(e) => setNewItemData({ ...newItemData, location: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Jakarta / Remote"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Tipe Pekerjaan</label>
                            <select
                                value={newItemData.type}
                                onChange={(e) => setNewItemData({ ...newItemData, type: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Tipe Penempatan</label>
                            <select
                                value={newItemData.location_type}
                                onChange={(e) => setNewItemData({ ...newItemData, location_type: e.target.value as any })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="Remote">Remote</option>
                                <option value="WFO">WFO (Office)</option>
                                <option value="WFH">WFH (Home)</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kategori</label>
                            <select
                                value={newItemData.category}
                                onChange={(e) => setNewItemData({ ...newItemData, category: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="Creative">Creative</option>
                                <option value="Technology">Technology</option>
                                <option value="Management">Management</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Operation">Operation</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Pengalaman</label>
                            <input
                                type="text"
                                value={newItemData.experience}
                                onChange={(e) => setNewItemData({ ...newItemData, experience: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: 1-3 tahun"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Edukasi</label>
                            <input
                                type="text"
                                value={newItemData.education}
                                onChange={(e) => setNewItemData({ ...newItemData, education: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: S1 Desain Grafis"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Salary Range</label>
                            <input
                                type="text"
                                value={newItemData.salary}
                                onChange={(e) => setNewItemData({ ...newItemData, salary: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: 3,000K-6,500K"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">WhatsApp URL</label>
                            <input
                                type="text"
                                value={newItemData.whatsapp_url}
                                onChange={(e) => setNewItemData({ ...newItemData, whatsapp_url: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="https://wa.me/..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Logo Perusahaan</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newItemData.logo_url}
                                    onChange={(e) => setNewItemData({ ...newItemData, logo_url: e.target.value })}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder="https://..."
                                />
                                <label className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
                                    <FaImage className="text-gray-600" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleLogoUpload(e, false)}
                                    />
                                </label>
                            </div>
                            {newItemData.logo_url && (
                                <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                                    <img src={newItemData.logo_url} alt="Preview" className="h-12 object-contain" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Deskripsi Pekerjaan</label>
                        <textarea
                            required
                            rows={3}
                            value={newItemData.description}
                            onChange={(e) => setNewItemData({ ...newItemData, description: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Deskripsi singkat tentang pekerjaan ini..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kualifikasi (Satu per baris)</label>
                        <textarea
                            rows={3}
                            value={requirementsText}
                            onChange={(e) => setRequirementsText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Menguasai React.js&#10;- Berpengalaman minimal 2 tahun"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Tanggung Jawab (Satu per baris)</label>
                        <textarea
                            rows={3}
                            value={responsibilitiesText}
                            onChange={(e) => setResponsibilitiesText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Melakukan user research&#10;- Membuat wireframes"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Benefit & Fasilitas (Satu per baris)</label>
                        <textarea
                            rows={3}
                            value={benefitsText}
                            onChange={(e) => setBenefitsText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Gaji kompetitif&#10;- BPJS Kesehatan"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status Lowongan</label>
                        <select
                            value={newItemData.status}
                            onChange={(e) => setNewItemData({ ...newItemData, status: e.target.value as 'open' | 'closed' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="open">Open (Dibuka)</option>
                            <option value="closed">Closed (Ditutup)</option>
                        </select>
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
                            Simpan Lowongan
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <ConfirmationModal
                isOpen={!!itemToDelete}
                onClose={() => setItemToDelete(null)}
                onConfirm={confirmDelete}
                title="Hapus Lowongan"
                message="Apakah Anda yakin ingin menghapus lowongan ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />
            {/* Edit Modal */}
            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="Edit Lowongan Pekerjaan"
                maxWidth="max-w-2xl"
            >
                <form onSubmit={handleEditSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Judul</label>
                            <input
                                type="text"
                                required
                                value={editItemData.title || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, title: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Frontend Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Departemen</label>
                            <input
                                type="text"
                                required
                                value={editItemData.department || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, department: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Engineering"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Lokasi</label>
                            <input
                                type="text"
                                required
                                value={editItemData.location || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, location: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Jakarta / Remote"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Tipe Pekerjaan</label>
                            <select
                                value={editItemData.type || 'Full-time'}
                                onChange={(e) => setEditItemData({ ...editItemData, type: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Tipe Penempatan</label>
                            <select
                                value={editItemData.location_type || 'WFO'}
                                onChange={(e) => setEditItemData({ ...editItemData, location_type: e.target.value as any })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="Remote">Remote</option>
                                <option value="WFO">WFO (Office)</option>
                                <option value="WFH">WFH (Home)</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kategori</label>
                            <select
                                value={editItemData.category || 'Creative'}
                                onChange={(e) => setEditItemData({ ...editItemData, category: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="Creative">Creative</option>
                                <option value="Technology">Technology</option>
                                <option value="Management">Management</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Operation">Operation</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Pengalaman</label>
                            <input
                                type="text"
                                value={editItemData.experience || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, experience: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: 1-3 tahun"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Edukasi</label>
                            <input
                                type="text"
                                value={editItemData.education || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, education: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: S1 Desain Grafis"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Salary Range</label>
                            <input
                                type="text"
                                value={editItemData.salary || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, salary: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: 3,000K-6,500K"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">WhatsApp URL</label>
                            <input
                                type="text"
                                value={editItemData.whatsapp_url || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, whatsapp_url: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="https://wa.me/..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Logo Perusahaan</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={editItemData.logo_url || ''}
                                    onChange={(e) => setEditItemData({ ...editItemData, logo_url: e.target.value })}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder="https://..."
                                />
                                <label className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center">
                                    <FaImage className="text-gray-600" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleLogoUpload(e, true)}
                                    />
                                </label>
                            </div>
                            {editItemData.logo_url && (
                                <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 flex justify-center">
                                    <img src={editItemData.logo_url} alt="Preview" className="h-12 object-contain" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Deskripsi Pekerjaan</label>
                        <textarea
                            required
                            rows={3}
                            value={editItemData.description || ''}
                            onChange={(e) => setEditItemData({ ...editItemData, description: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="Deskripsi singkat tentang pekerjaan ini..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Kualifikasi (Satu per baris)</label>
                        <textarea
                            rows={3}
                            value={editRequirementsText}
                            onChange={(e) => setEditRequirementsText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Menguasai React.js&#10;- Berpengalaman minimal 2 tahun"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Tanggung Jawab (Satu per baris)</label>
                        <textarea
                            rows={3}
                            value={editResponsibilitiesText}
                            onChange={(e) => setEditResponsibilitiesText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Melakukan user research&#10;- Membuat wireframes"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Benefit & Fasilitas (Satu per baris)</label>
                        <textarea
                            rows={3}
                            value={editBenefitsText}
                            onChange={(e) => setEditBenefitsText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Gaji kompetitif&#10;- BPJS Kesehatan"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Status Lowongan</label>
                        <select
                            value={editItemData.status || 'open'}
                            onChange={(e) => setEditItemData({ ...editItemData, status: e.target.value as 'open' | 'closed' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                            <option value="open">Open (Dibuka)</option>
                            <option value="closed">Closed (Ditutup)</option>
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
                            Perbarui Lowongan
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
