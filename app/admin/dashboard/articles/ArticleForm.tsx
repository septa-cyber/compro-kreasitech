
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/lib/types';
import { FaSave, FaArrowLeft } from 'react-icons/fa';

interface ArticleFormProps {
    initialData?: BlogPost;
    isEdit?: boolean;
}

export default function ArticleForm({ initialData, isEdit = false }: ArticleFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<BlogPost>>({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: 'TECHNOLOGY',
        status: 'draft',
        date: new Date().toISOString().split('T')[0],
        author: { name: 'Admin', avatar: '' },
        coverImage: '',
        tags: [],
        ...initialData
    });

    const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(', ') || '');

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
            setTagsInput(initialData.tags?.join(', ') || '');
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...(prev as any)[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            ...formData,
            tags: tagsInput.split(',').map(t => t.trim()).filter(t => t),
            slug: formData.slug || formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'untitled'
        };

        try {
            const url = isEdit ? `/api/articles/${initialData?.id}` : '/api/articles';
            const method = isEdit ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push('/admin/dashboard/articles');
                router.refresh(); // Refresh server components if any
            } else {
                alert('Failed to save article');
            }
        } catch (error) {
            console.error('Error saving article:', error);
            alert('Error saving article');
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
                    {isEdit ? 'Edit Article' : 'Create New Article'}
                </h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                {/* Title & Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="Article Title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Slug (Optional)</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat bg-gray-50"
                            placeholder="auto-generated-from-title"
                        />
                    </div>
                </div>

                {/* Status & Date & Category */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        >
                            <option value="draft">Draft</option>
                            <option value="publish">Publish</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Publish Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        >
                            <option value="TECHNOLOGY">Technology</option>
                            <option value="NEWS">News</option>
                            <option value="EVENT">Event</option>
                            <option value="TIPS_TRICKS">Tips & Tricks</option>
                        </select>
                    </div>
                </div>

                {/* Author & Cover Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Author Name</label>
                        <input
                            type="text"
                            name="author.name"
                            value={formData.author?.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Cover Image URL</label>
                        <input
                            type="text"
                            name="coverImage"
                            value={formData.coverImage}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                            placeholder="https://..."
                        />
                    </div>
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Tags (Comma separated)</label>
                    <input
                        type="text"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        placeholder="Tech, AI, Innovation"
                    />
                </div>

                {/* Excerpt */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Excerpt</label>
                    <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        placeholder="Brief summary..."
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Content (Markdown)</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={10}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat font-mono text-sm"
                        placeholder="# Heading..."
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
                        {isEdit ? 'Update Article' : 'Create Article'}
                    </button>
                </div>
            </div>
        </form>
    );
}
