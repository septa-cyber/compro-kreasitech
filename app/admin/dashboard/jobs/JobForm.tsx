
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Job } from '@/lib/types';
import { FaSave, FaArrowLeft } from 'react-icons/fa';

interface JobFormProps {
    initialData?: Job;
    isEdit?: boolean;
}

export default function JobForm({ initialData, isEdit = false }: JobFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Job>>({
        title: '',
        company: '',
        icon: 'fas fa-briefcase',
        iconBg: 'bg-violet-600 text-white',
        postedDate: new Date().toISOString().split('T')[0],
        salary: '',
        description: '',
        type: 'Technology',
        location: 'Remote',
        category: 'full-time',
        status: 'active',
        expiredDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        ...initialData
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = { ...formData };

        try {
            const url = isEdit ? `/api/jobs/${initialData?.id}` : '/api/jobs';
            const method = isEdit ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push('/admin/dashboard/jobs');
                router.refresh();
            } else {
                alert('Failed to save job');
            }
        } catch (error) {
            console.error('Error saving job:', error);
            alert('Error saving job');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto pb-12">
            <div className="flex justify-between items-center">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-montserrat"
                >
                    <FaArrowLeft /> Back
                </button>
                <h1 className="text-2xl font-bold font-montserrat text-gray-800">
                    {isEdit ? 'Edit Job' : 'Post New Job'}
                </h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                {/* Title & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="e.g. Frontend Developer"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="e.g. Kreasitech"
                        />
                    </div>
                </div>

                {/* Meta Data */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Location</label>
                        <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        >
                            <option value="Remote">Remote</option>
                            <option value="On Site">On Site</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        >
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="freelance">Freelance</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Job Type</label>
                        <input
                            type="text"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="e.g. Technology"
                        />
                    </div>
                </div>

                {/* Salary & Dates */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Salary Range</label>
                        <input
                            type="text"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="e.g. $80k - $120k/year"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Posted Date</label>
                        <input
                            type="date"
                            name="postedDate"
                            value={formData.postedDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Expired Date</label>
                        <input
                            type="date"
                            name="expiredDate"
                            value={formData.expiredDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        />
                    </div>
                </div>

                {/* Status & Icon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Icon Class (FontAwesome)</label>
                        <input
                            type="text"
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="fas fa-code"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        placeholder="Brief job description..."
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-montserrat font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition font-montserrat font-medium flex items-center gap-2"
                    >
                        {isLoading ? <span className="animate-spin">⏳</span> : <FaSave />}
                        {isEdit ? 'Update Job' : 'Post Job'}
                    </button>
                </div>
            </div>
        </form>
    );
}
