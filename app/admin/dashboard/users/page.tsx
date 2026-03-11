"use client";

import React, { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaUserShield, FaUserPlus, FaUsers } from 'react-icons/fa';
import toast from 'react-hot-toast';
import ConfirmationModal from '@/components/ui/ConfirmationModal';

interface User {
    id: string;
    email: string;
    name: string;
    role: 'super_admin' | 'admin';
    createdAt: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [userToDelete, setUserToDelete] = useState<string | null>(null);

    // Form states
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        role: 'admin' as 'super_admin' | 'admin'
    });

    useEffect(() => {
        fetchCurrentUser();
        fetchUsers();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const res = await fetch('/api/auth/me');
            if (res.ok) {
                const data = await res.json();
                setCurrentUser(data);
                if (data.role !== 'super_admin') {
                    window.location.href = '/admin/dashboard';
                }
            } else {
                window.location.href = '/admin/login';
            }
        } catch (error) {
            console.error('Failed to fetch current user:', error);
        }
    };

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/users');
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            } else {
                toast.error('Gagal mengambil data user');
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
            toast.error('Terjadi kesalahan');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success('User berhasil dibuat');
                setIsModalOpen(false);
                setFormData({ email: '', password: '', name: '', role: 'admin' });
                fetchUsers();
            } else {
                const err = await res.json();
                toast.error(err.error || 'Gagal membuat user');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan');
        }
    };

    const handleUpdateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUser) return;

        try {
            const res = await fetch(`/api/users/${selectedUser.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success('User berhasil diperbarui');
                setIsEditModalOpen(false);
                setSelectedUser(null);
                setFormData({ email: '', password: '', name: '', role: 'admin' });
                fetchUsers();
            } else {
                const err = await res.json();
                toast.error(err.error || 'Gagal memperbarui user');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan');
        }
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;

        try {
            const res = await fetch(`/api/users/${userToDelete}`, { method: 'DELETE' });
            if (res.ok) {
                toast.success('User berhasil dihapus');
                setUserToDelete(null);
                fetchUsers();
            } else {
                const err = await res.json();
                toast.error(err.error || 'Gagal menghapus user');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan');
        }
    };

    const openEditModal = (user: User) => {
        setSelectedUser(user);
        setFormData({
            email: user.email,
            password: '', // Don't show password
            name: user.name,
            role: user.role
        });
        setIsEditModalOpen(true);
    };

    if (isLoading || !currentUser) {
        return <div className="p-8 text-center font-montserrat text-gray-500">Memuat...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 font-montserrat mb-1">Kelola Administrator</h1>
                    <p className="text-gray-500 text-sm font-montserrat">Atur hak akses staf dan admin panel Anda.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2.5 rounded-xl font-montserrat text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                    <FaUserPlus /> Tambah User Baru
                </button>
            </div>

            {/* User List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider font-montserrat">Nama & Email</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider font-montserrat">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider font-montserrat">Tanggal Dibuat</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider font-montserrat text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 font-montserrat text-sm">{user.name}</p>
                                                <p className="text-xs text-gray-500 font-montserrat">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${user.role === 'super_admin'
                                            ? 'bg-amber-100 text-amber-700'
                                            : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                            <FaUserShield size={10} />
                                            {user.role === 'super_admin' ? 'Super Admin' : 'Admin'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-xs text-gray-500 font-montserrat">
                                            {new Date(user.createdAt).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {user.email !== 'admin@kreasi.tech' ? (
                                                <>
                                                    <button
                                                        onClick={() => openEditModal(user)}
                                                        className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all"
                                                        title="Edit User"
                                                    >
                                                        <FaEdit size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => setUserToDelete(user.id)}
                                                        disabled={user.id === currentUser.id}
                                                        className={`p-2 rounded-lg transition-all ${user.id === currentUser.id
                                                            ? 'text-gray-200 cursor-not-allowed'
                                                            : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                                                            }`}
                                                        title={user.id === currentUser.id ? "Tidak bisa menghapus diri sendiri" : "Hapus User"}
                                                    >
                                                        <FaTrash size={14} />
                                                    </button>
                                                </>
                                            ) : (
                                                <span className="text-[10px] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 uppercase tracking-tighter">System Protected</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500 font-montserrat text-sm">
                                        Tidak ada user ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            {(isModalOpen || isEditModalOpen) && (
                <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-scale-in">
                        <h2 className="text-xl font-bold text-gray-800 font-montserrat mb-4">
                            {isEditModalOpen ? 'Edit User' : 'Tambah User Baru'}
                        </h2>
                        <form onSubmit={isEditModalOpen ? handleUpdateUser : handleCreateUser} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-montserrat">Nama Lengkap</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-montserrat">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-montserrat">
                                    Password {isEditModalOpen && <span className="text-[10px] text-gray-400">(Kosongi jika tidak diubah)</span>}
                                </label>
                                <input
                                    type="password"
                                    required={!isEditModalOpen}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-montserrat">Role</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                                >
                                    <option value="admin">Admin (Hanya Kelola Konten)</option>
                                    <option value="super_admin">Super Admin (Akses Penuh)</option>
                                </select>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setIsEditModalOpen(false);
                                        setSelectedUser(null);
                                        setFormData({ email: '', password: '', name: '', role: 'admin' });
                                    }}
                                    className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2.5 bg-violet-600 text-white rounded-xl font-semibold text-sm hover:bg-violet-700 transition shadow-lg shadow-violet-200"
                                >
                                    {isEditModalOpen ? 'Simpan Perubahan' : 'Buat User'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            <ConfirmationModal
                isOpen={!!userToDelete}
                onClose={() => setUserToDelete(null)}
                onConfirm={handleDeleteUser}
                title="Hapus Administrator"
                message="Apakah Anda yakin ingin menghapus administrator ini? Tindakan ini tidak dapat dibatalkan."
                confirmText="Hapus"
                isDanger
            />
        </div>
    );
}
