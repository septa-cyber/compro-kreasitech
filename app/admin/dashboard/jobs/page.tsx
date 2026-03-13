"use client";

import React, { useState, useEffect } from 'react';
import { FaHeading, FaPlus, FaTrash, FaBriefcase, FaMapMarkerAlt, FaClock, FaImage, FaEdit } from 'react-icons/fa';
import { JobPosting, SiteSettings } from '@/lib/types';
import Modal from '@/components/ui/Modal';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';
import AdminViewToggle from '@/app/admin/components/AdminViewToggle';

export default function JobsSettingsPage() {
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'table' | 'card'>('table');
    // ... (rest of the states and effects)
    // Modal States
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [editingItem, setEditingItem] = useState<JobPosting | null>(null);
    const [newItemData, setNewItemData] = useState<Partial<JobPosting>>({
        title: "",
        position: "",
        location: "",
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

    const [applyMethod, setApplyMethod] = useState("");
    const [editApplyMethod, setEditApplyMethod] = useState("");

    const getApplyMethodFromUrl = (url?: string) => {
        if (!url) return "";
        if (url.includes("wa.me") || url.includes("whatsapp")) return "whatsapp";
        if (url.includes("linkedin.com")) return "linkedin";
        if (url.includes("jobstreet")) return "jobstreet";
        if (url.includes("glints")) return "glints";
        return "other";
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [jobsRes, settingsRes] = await Promise.all([
                fetch('/api/jobs'),
                fetch('/api/settings')
            ]);

            const jobsData = await jobsRes.json();
            const settingsData = await settingsRes.json();

            setJobs(jobsData);
            setSiteSettings(settingsData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
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
        setEditApplyMethod(getApplyMethodFromUrl(job.whatsapp_url));
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
                    position: "",
                    location: "",
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
                setApplyMethod("");
            } else {
                const err = await res.json();
                toast.error(`Gagal menambahkan lowongan: ${err.error || 'Unknown error'}`);
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light leading-tight">
                    Manajemen Lowongan Kerja
                </h1>
                <div className="flex items-center gap-3">
                    <AdminViewToggle view={viewMode} onViewChange={setViewMode} />
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-3 md:px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 rounded-lg transition-all flex items-center gap-2 shadow-md shadow-violet-200"
                    >
                        <FaPlus size={12} />
                        <span className="text-xs md:text-sm font-semibold font-montserrat">Tambah Lowongan</span>
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaBriefcase className="text-sm md:text-xl" />
                        </div>
                        <h2 className="text-sm md:text-lg font-semibold text-text-light font-montserrat">Daftar Lowongan</h2>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="max-[430px]:hidden">
                    {viewMode === 'table' ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Posisi</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Tipe</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Lokasi</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {jobs.map((job) => (
                                        <tr key={job.id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900 font-montserrat">{job.title}</div>
                                                <div className="text-[11px] text-violet-600 font-semibold font-montserrat">{job.position}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-montserrat">
                                                {job.type}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-montserrat truncate max-w-[150px]">
                                                {job.location}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-[10px] rounded-full font-medium uppercase tracking-wider ${job.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                                    {job.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        onClick={() => handleEditClick(job)}
                                                        className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors border border-transparent hover:border-violet-100 shadow-sm bg-white"
                                                        title="Edit"
                                                    >
                                                        <FaEdit size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => setItemToDelete(job.id)}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <div key={job.id} className="p-5 border border-gray-200 rounded-xl hover:border-violet-300 transition-all bg-white group relative shadow-sm">
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                        <button
                                            onClick={() => handleEditClick(job)}
                                            className="p-1.5 text-gray-400 hover:text-violet-500 hover:bg-gray-50 rounded-lg transition-colors shadow-sm bg-white border border-gray-100"
                                            title="Edit Lowongan"
                                        >
                                            <FaEdit size={12} />
                                        </button>
                                        <button
                                            onClick={() => setItemToDelete(job.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors shadow-sm bg-white border border-gray-100"
                                            title="Hapus Lowongan"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>

                                    <div className="mb-4">
                                        <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold uppercase tracking-wider mb-2 inline-block ${job.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {job.status}
                                        </span>
                                        <h3 className="font-semibold text-gray-900 font-montserrat line-clamp-1 pr-12">{job.title}</h3>
                                        <p className="text-[11px] text-violet-600 font-semibold font-montserrat">{job.position}</p>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-montserrat">
                                            <FaMapMarkerAlt className="text-violet-400 shrink-0" size={10} />
                                            <span className="truncate">{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-montserrat">
                                            <FaClock className="text-violet-400 shrink-0" size={10} />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-gray-50 flex items-center justify-end">
                                        <span className="text-[10px] text-gray-400 font-montserrat">ID: #{job.id}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile View - Always Cards */}
                <div className="max-[430px]:block hidden divide-y divide-gray-100">
                    {jobs.map((job) => (
                        <div key={job.id} className="p-4 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-gray-900 font-montserrat text-sm leading-tight">{job.title}</h3>
                                    <p className="text-[11px] text-violet-600 font-semibold font-montserrat">{job.position}</p>
                                </div>
                                <span className={`shrink-0 px-2 py-0.5 text-[9px] rounded-full uppercase font-bold tracking-wider ${job.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {job.status}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-gray-500 font-montserrat">
                                <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-violet-400" size={8} /> {job.location}</span>
                                <span className="flex items-center gap-1"><FaClock className="text-violet-400" size={8} /> {job.type}</span>
                            </div>

                            <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-50">
                                <button
                                    onClick={() => handleEditClick(job)}
                                    className="flex-1 py-1.5 px-3 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-blue-100"
                                >
                                    <FaEdit size={12} />
                                    <span>Edit</span>
                                </button>
                                <button
                                    onClick={() => setItemToDelete(job.id)}
                                    className="flex-1 py-1.5 px-3 bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors active:bg-red-100"
                                >
                                    <FaTrash size={12} />
                                    <span>Hapus</span>
                                </button>
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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Judul Lowongan <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={newItemData.title}
                                onChange={(e) => setNewItemData({ ...newItemData, title: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Lowongan Web Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Jabatan <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={newItemData.position}
                                onChange={(e) => setNewItemData({ ...newItemData, position: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Frontend Developer"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Lokasi <span className="text-red-500">*</span></label>
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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Metode Lamaran <span className="text-red-500">*</span></label>
                            <select
                                required
                                value={applyMethod}
                                onChange={(e) => {
                                    const method = e.target.value;
                                    setApplyMethod(method);

                                    const currentUrl = newItemData.whatsapp_url || "";
                                    const defaultPhone = siteSettings?.whatsapp?.replace(/\D/g, '') || '62';
                                    const defaultWaUrl = `https://wa.me/${defaultPhone}`;

                                    if (method === "whatsapp" && (!currentUrl || !currentUrl.includes("wa.me"))) {
                                        setNewItemData({ ...newItemData, whatsapp_url: defaultWaUrl });
                                    } else if (method !== "whatsapp" && currentUrl === defaultWaUrl) {
                                        setNewItemData({ ...newItemData, whatsapp_url: "" });
                                    } else if (method === "") {
                                        setNewItemData({ ...newItemData, whatsapp_url: "" });
                                    }
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="">Pilih Metode Lamaran</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="jobstreet">Jobstreet</option>
                                <option value="glints">Glints</option>
                                <option value="other">Link Lainnya</option>
                            </select>
                        </div>
                        {applyMethod && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Link Lamaran (Apply URL) <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    value={newItemData.whatsapp_url}
                                    onChange={(e) => setNewItemData({ ...newItemData, whatsapp_url: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder={
                                        applyMethod === 'whatsapp' ? 'https://wa.me/628...' :
                                            applyMethod === 'linkedin' ? 'https://linkedin.com/...' :
                                                applyMethod === 'jobstreet' ? 'https://jobstreet.co.id/...' :
                                                    applyMethod === 'glints' ? 'https://glints.com/id/...' :
                                                        'https://...'
                                    }
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Logo <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    required
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Deskripsi Pekerjaan <span className="text-red-500">*</span></label>
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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Judul Lowongan <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={editItemData.title || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, title: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Lowongan Web Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Posisi / Jabatan <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={editItemData.position || ''}
                                onChange={(e) => setEditItemData({ ...editItemData, position: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Contoh: Frontend Developer"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Lokasi <span className="text-red-500">*</span></label>
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
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Metode Lamaran <span className="text-red-500">*</span></label>
                            <select
                                required
                                value={editApplyMethod}
                                onChange={(e) => {
                                    const method = e.target.value;
                                    setEditApplyMethod(method);

                                    const currentUrl = editItemData.whatsapp_url || "";
                                    const defaultPhone = siteSettings?.whatsapp?.replace(/\D/g, '') || '62';
                                    const defaultWaUrl = `https://wa.me/${defaultPhone}`;

                                    if (method === "whatsapp" && (!currentUrl || !currentUrl.includes("wa.me"))) {
                                        setEditItemData({ ...editItemData, whatsapp_url: defaultWaUrl });
                                    } else if (method !== "whatsapp" && currentUrl === defaultWaUrl) {
                                        setEditItemData({ ...editItemData, whatsapp_url: "" });
                                    } else if (method === "") {
                                        setEditItemData({ ...editItemData, whatsapp_url: "" });
                                    }
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            >
                                <option value="">Pilih Metode Lamaran</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="jobstreet">Jobstreet</option>
                                <option value="glints">Glints</option>
                                <option value="other">Link Lainnya</option>
                            </select>
                        </div>
                        {editApplyMethod && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Link Lamaran (Apply URL) <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    required
                                    value={editItemData.whatsapp_url || ''}
                                    onChange={(e) => setEditItemData({ ...editItemData, whatsapp_url: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    placeholder={
                                        editApplyMethod === 'whatsapp' ? 'https://wa.me/628...' :
                                            editApplyMethod === 'linkedin' ? 'https://linkedin.com/...' :
                                                editApplyMethod === 'jobstreet' ? 'https://jobstreet.co.id/...' :
                                                    editApplyMethod === 'glints' ? 'https://glints.com/id/...' :
                                                        'https://...'
                                    }
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Logo <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    required
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-montserrat mb-1">Deskripsi Pekerjaan <span className="text-red-500">*</span></label>
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
