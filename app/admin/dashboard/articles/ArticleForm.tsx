
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/lib/types';
import { FaSave, FaArrowLeft, FaImage, FaSpinner } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';

const RichTextEditor = dynamic(() => import('@/components/ui/RichTextEditor'), {
    ssr: false,
    loading: () => (
        <div className="border border-gray-300 rounded-lg p-4 min-h-[300px] flex items-center justify-center text-gray-400 text-sm">
            Memuat editor...
        </div>
    ),
});

interface ArticleFormProps {
    initialData?: BlogPost;
    isEdit?: boolean;
}

export default function ArticleForm({ initialData, isEdit = false }: ArticleFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [currentUserName, setCurrentUserName] = useState('Admin');
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

    // Fetch current user to set author name
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const user = await res.json();
                    if (user.name) {
                        setCurrentUserName(user.name);
                        if (!isEdit) {
                            setFormData(prev => ({
                                ...prev,
                                author: { name: user.name, avatar: user.avatar_url || '' }
                            }));
                        }
                    }
                }
            } catch (err) {
                console.error('Failed to fetch user:', err);
            }
        };
        fetchUser();
    }, [isEdit]);

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

    const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast.error('File harus berupa gambar');
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error('Ukuran gambar maksimal 5MB');
            return;
        }

        setIsUploading(true);
        const uploadData = new FormData();
        uploadData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: uploadData,
            });

            if (res.ok) {
                const data = await res.json();
                setFormData(prev => ({ ...prev, coverImage: data.url }));
                toast.success('Gambar berhasil diunggah!');
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check content (Rich Text Editor doesn't have native required)
        if (!formData.content?.trim()) {
            toast.error('Konten artikel wajib diisi');
            return;
        }

        setIsLoading(true);

        const categoryColors: Record<string, string> = {
            'TECHNOLOGY': 'bg-blue-100 text-blue-700',
            'NEWS': 'bg-green-100 text-green-700',
            'EVENT': 'bg-orange-100 text-orange-700',
            'TIPS_TRICKS': 'bg-pink-100 text-pink-700',
        };

        const payload = {
            ...formData,
            author: { name: currentUserName, avatar: formData.author?.avatar || '' },
            date: new Date().toISOString().split('T')[0],
            tags: tagsInput.split(',').map(t => t.trim()).filter(t => t),
            slug: formData.slug || formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'untitled',
            categoryColor: categoryColors[formData.category as string] || 'bg-gray-100 text-gray-700'
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
                toast.success(isEdit ? 'Artikel berhasil diperbarui!' : 'Artikel berhasil dibuat!');
                router.push('/admin/dashboard/articles');
                router.refresh();
            } else {
                const errorData = await res.json().catch(() => ({}));
                console.error('Server error:', res.status, errorData);
                toast.error(`Gagal menyimpan artikel: ${errorData.error || errorData.message || 'Terjadi kesalahan'}`);
            }
        } catch (error) {
            console.error('Error saving article:', error);
            toast.error('Gagal menyimpan artikel. Periksa koneksi Anda.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full pb-12">
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
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Title <span className="text-red-500">*</span></label>
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

                {/* Status & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Status <span className="text-red-500">*</span></label>
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
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Category <span className="text-red-500">*</span></label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        >
                            <option value="TECHNOLOGY">Technology</option>
                            <option value="NEWS">News</option>
                            <option value="EVENT">Event</option>
                            <option value="TIPS_TRICKS">Tips &amp; Tricks</option>
                        </select>
                    </div>
                </div>

                {/* Cover Image */}
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Cover Image</label>
                        <div className="flex gap-2 items-center">
                            <input
                                type="text"
                                name="coverImage"
                                value={formData.coverImage}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                                placeholder="https://... atau upload gambar"
                            />
                            <label className={`flex-shrink-0 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-colors flex items-center justify-center text-sm font-montserrat ${isUploading ? 'opacity-60 cursor-not-allowed' : 'text-gray-600'
                                }`} title="Upload Cover Image">
                                {isUploading ? (
                                    <FaSpinner className="animate-spin" size={16} />
                                ) : (
                                    <FaImage size={16} />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    disabled={isUploading}
                                    onChange={handleCoverImageUpload}
                                />
                            </label>
                        </div>
                        {formData.coverImage && (
                            <div className="mt-3 p-2 border border-gray-200 rounded-lg bg-gray-50">
                                <img
                                    src={formData.coverImage}
                                    alt="Cover Preview"
                                    className="w-full h-40 object-cover rounded-md"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        )}
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
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Excerpt <span className="text-red-500">*</span></label>
                    <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-montserrat"
                        placeholder="Ringkasan singkat artikel..."
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">Content <span className="text-red-500">*</span></label>
                    <RichTextEditor
                        content={formData.content || ''}
                        onChange={(md: string) => setFormData(prev => ({ ...prev, content: md }))}
                        placeholder="Tulis konten artikel di sini..."
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
                        className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition font-montserrat font-medium flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <span className="animate-spin">⏳</span> : <FaSave />}
                        {isEdit ? 'Update Article' : 'Create Article'}
                    </button>
                </div>
            </div>
        </form>
    );
}
