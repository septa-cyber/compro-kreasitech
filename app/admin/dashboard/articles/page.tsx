"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import { FaPlus, FaTrash, FaEdit, FaEye, FaCalendar, FaUser, FaNewspaper, FaTag } from 'react-icons/fa';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import toast from 'react-hot-toast';
import AdminViewToggle from '@/app/admin/components/AdminViewToggle';

export default function ArticlesPage() {
    const [articles, setArticles] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [viewMode, setViewMode] = useState<'table' | 'card'>('table');

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
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Articles
                </h1>
                <div className="flex items-center gap-3">
                    <AdminViewToggle view={viewMode} onViewChange={setViewMode} />
                    <Link
                        href="/admin/dashboard/articles/create"
                        className="px-3 md:px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition flex items-center gap-2 font-montserrat text-sm shadow-md shadow-violet-200"
                    >
                        <FaPlus size={12} />
                        <span className="hidden md:inline">Tambah Artikel</span>
                        <span className="md:hidden">Tambah</span>
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-1 md:p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 max-[430px]:px-4">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaNewspaper className="text-sm md:text-xl" />
                        </div>
                        <h2 className="text-sm md:text-lg font-semibold text-text-light font-montserrat leading-tight">Daftar Artikel</h2>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="max-[430px]:hidden">
                    {viewMode === 'table' ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Judul</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Kategori</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Tanggal</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase font-montserrat tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {articles.map((article) => (
                                        <tr key={article.id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900 font-montserrat leading-snug">{article.title}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-[10px] rounded-full font-bold uppercase tracking-tighter ${article.categoryColor || 'bg-gray-100 text-gray-600'}`}>
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
                                                        className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors border border-transparent hover:border-violet-100 shadow-sm bg-white"
                                                        title="Edit"
                                                    >
                                                        <FaEdit size={14} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(article.id)}
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
                            {articles.map((article) => (
                                <div key={article.id} className="relative bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-violet-300 transition-all shadow-sm">
                                    {/* Action Buttons (Hover) */}
                                    <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                        <Link
                                            href={`/admin/dashboard/articles/${article.id}/edit`}
                                            className="bg-white/90 p-1.5 rounded-md text-gray-400 hover:text-violet-500 hover:bg-white transition-colors shadow-sm"
                                        >
                                            <FaEdit size={12} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(article.id)}
                                            className="bg-white/90 p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>

                                    <div className="p-5 space-y-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold uppercase tracking-tighter ${article.categoryColor || 'bg-gray-100 text-gray-600'}`}>
                                                    {article.category}
                                                </span>
                                                <span className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${article.status === 'publish' || article.status === 'published'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                                    }`}>
                                                    {article.status === 'publish' || article.status === 'published' ? 'Published' : 'Draft'}
                                                </span>
                                            </div>
                                            <h3 className="text-sm font-semibold text-gray-900 font-montserrat line-clamp-2 leading-tight h-10">
                                                {article.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-50 pt-3">
                                            <div className="flex items-center gap-1.5">
                                                <FaCalendar size={10} className="text-gray-400" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <FaUser size={10} className="text-gray-400" />
                                                <span>Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile View - Always Cards */}
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
                        Belum ada artikel yang ditambahkan.
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

