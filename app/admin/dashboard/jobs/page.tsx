"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaPlus, FaTrash, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { JobPosting } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';

export default function JobsSettingsPage() {
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [newItemData, setNewItemData] = useState<Partial<JobPosting>>({
        title: "",
        department: "",
        location: "",
        type: "Full-time",
        description: "",
        requirements: [],
        status: "open"
    });
    const [requirementsText, setRequirementsText] = useState("");

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

    // Delete Logic
    const confirmDelete = async () => {
        if (!itemToDelete) return;

        try {
            const res = await fetch(`/api/jobs/${itemToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                setJobs(jobs.filter(j => j.id !== itemToDelete));
                setItemToDelete(null);
            } else {
                alert('Failed to delete job');
            }
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Error deleting job');
        }
    };

    // Add Logic
    const handleAddSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const itemToAdd = {
                ...newItemData,
                requirements: requirementsText.split('\n').filter(Boolean)
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
                setNewItemData({
                    title: "",
                    department: "",
                    location: "",
                    type: "Full-time",
                    description: "",
                    requirements: [],
                    status: "open"
                });
                setRequirementsText("");
            } else {
                alert('Failed to add job');
            }
        } catch (error) {
            console.error('Error adding job:', error);
            alert('Error adding job');
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
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setItemToDelete(job.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors shadow-sm"
                                    title="Hapus Lowongan"
                                >
                                    <FaTrash />
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Persyaratan (Satu per baris)</label>
                        <textarea
                            rows={4}
                            value={requirementsText}
                            onChange={(e) => setRequirementsText(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="- Menguasai React.js&#10;- Berpengalaman minimal 2 tahun&#10;- Bisa bekerja dalam tim"
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
        </div>
    );
}
