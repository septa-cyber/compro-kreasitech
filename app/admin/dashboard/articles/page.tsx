"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { FaPlus, FaTrash, FaEdit, FaEye, FaCalendar, FaUser, FaNewspaper } from 'react-icons/fa';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';

export default function ArticlesPage() {
    const [articles, setArticles] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await fetch('/api/articles');
            const data = await res.json();
            setArticles(data);
        } catch (error) {
            console.error('Failed to fetch articles:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = (id: number) => {
        setItemToDelete(id);
    };

    const confirmDelete = async () => {
        if (!itemToDelete) return;
        setIsDeleting(true);

        try {
            const res = await fetch(`/api/articles/${itemToDelete}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setArticles(articles.filter(a => a.id !== itemToDelete));
                setItemToDelete(null);
                toast.success('Artikel berhasil dihapus');
            } else {
                toast.error('Gagal menghapus artikel');
            }
        } catch (error) {
            console.error('Error deleting:', error);
            toast.error('Terjadi kesalahan saat menghapus artikel');
        } finally {
            setIsDeleting(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold font-montserrat text-gray-800">Articles</h1>
                <Link
                    href="/admin/dashboard/articles/create"
                    className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition flex items-center gap-2 font-montserrat text-sm"
                >
                    <FaPlus /> Tambah Artikel
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Desktop Table - Hidden on Mobile */}
                <div className="overflow-x-auto max-[430px]:hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat">Title</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat">Category</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat">Status</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase font-montserrat">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900 font-montserrat">{article.title}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${article.categoryColor || 'bg-gray-100 text-gray-600'}`}>
                                            {article.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 font-montserrat">
                                        {article.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${article.status === 'publish' || article.status === 'published'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {article.status === 'publish' || article.status === 'published' ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <Link
                                                href={`/admin/dashboard/articles/${article.id}/edit`}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(article.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                title="Delete"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View - Visible only on Mobile */}
                <div className="max-[430px]:block hidden divide-y divide-gray-100">
                    {articles.map((article) => (
                        <div key={article.id} className="p-4 space-y-3">
                            <div className="flex justify-between items-start gap-4">
                                <div className="text-sm font-semibold text-gray-900 font-montserrat line-clamp-2 flex-1">
                                    {article.title}
                                </div>
                                <span className={`shrink-0 px-2 py-0.5 text-[10px] rounded-full font-medium ${article.status === 'publish' || article.status === 'published'
                                    ? 'bg-green-100 text-green-600'
                                    : 'bg-yellow-100 text-yellow-600'
                                    }`}>
                                    {article.status === 'publish' || article.status === 'published' ? 'Published' : 'Draft'}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-gray-500 font-montserrat">
                                <span className={`px-2 py-0.5 rounded-full font-medium ${article.categoryColor || 'bg-gray-100 text-gray-600'}`}>
                                    {article.category}
                                </span>
                                <span>{article.date}</span>
                            </div>

                            {/* Mobile Actions */}
                            <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-50">
                                <Link
                                    href={`/admin/dashboard/articles/${article.id}/edit`}
                                    className="flex-1 py-2 px-4 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors active:bg-blue-100"
                                >
                                    <FaEdit size={14} />
                                    <span>Edit</span>
                                </Link>
                                <button
                                    onClick={() => handleDelete(article.id)}
                                    className="flex-1 py-2 px-4 bg-red-50 text-red-600 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors active:bg-red-100"
                                >
                                    <FaTrash size={14} />
                                    <span>Hapus</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {articles.length === 0 && (
                    <div className="px-6 py-12 text-center text-gray-500 font-montserrat bg-white">
                        No articles found. Create your first one!
                    </div>
                )}
            </div>

            <ConfirmationModal
                isOpen={!!itemToDelete}
                onClose={() => setItemToDelete(null)}
                onConfirm={confirmDelete}
                title="Hapus Artikel"
                message="Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
                isLoading={isDeleting}
            />
        </div>
    );
}
