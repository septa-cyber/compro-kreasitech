"use client";
import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaCamera } from 'react-icons/fa';

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Profile Info State
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    // Password State
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Visibility States
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await fetch('/api/auth/me');
            if (res.ok) {
                const data = await res.json();
                setUser(data);
                setName(data.name);
                setAvatarUrl(data.avatar_url || '');
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
            toast.error('Gagal mengambil data profil');
        } finally {
            setLoading(false);
        }
    };

    const handleInfoSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/auth/me', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, avatar_url: avatarUrl }),
            });

            if (res.ok) {
                const updatedUser = await res.json();
                setUser(updatedUser);
                toast.success('Informasi profil berhasil diperbarui!');
            } else {
                const data = await res.json();
                toast.error(data.error || 'Gagal memperbarui profil');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan koneksi');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentPassword) {
            toast.error('Password saat ini harus diisi');
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error('Password baru tidak cocok!');
            return;
        }
        if (newPassword.length < 6) {
            toast.error('Password baru minimal 6 karakter');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/auth/me', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            if (res.ok) {
                toast.success('Password berhasil diubah!');
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                const data = await res.json();
                toast.error(data.error || 'Gagal mengubah password');
            }
        } catch (error) {
            toast.error('Terjadi kesalahan koneksi');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        const uploadToast = toast.loading('Mengunggah foto...');
        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                setAvatarUrl(data.url);
                toast.success('Foto berhasil diunggah!', { id: uploadToast });
            } else {
                const data = await res.json();
                toast.error(data.error || 'Gagal mengunggah foto', { id: uploadToast });
            }
        } catch (error) {
            toast.error('Terjadi kesalahan saat mengunggah', { id: uploadToast });
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-600"></div>
        </div>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                Profil Saya
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Information Card */}
                <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-semibold text-text-light font-montserrat mb-6">Informasi Dasar</h2>

                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        {/* Avatar Section */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative group">
                                <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                                    {avatarUrl ? (
                                        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-3xl font-bold text-violet-600">{name?.charAt(0) || 'A'}</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                                >
                                    <FaCamera size={20} />
                                </button>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleAvatarChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="text-sm text-violet-600 font-medium hover:text-violet-700"
                            >
                                Ubah Foto
                            </button>
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleInfoSubmit} className="flex-1 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all font-montserrat"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        value={user?.role?.replace('_', ' ').toUpperCase() || ''}
                                        disabled
                                        className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed font-montserrat"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={user?.email || ''}
                                    disabled
                                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed font-montserrat"
                                />
                                <p className="text-xs text-gray-400 mt-1 font-montserrat">Email tidak dapat diubah. Hubungi support jika diperlukan.</p>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-medium rounded-lg text-sm transition-colors shadow-glow font-montserrat"
                                >
                                    {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Security Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-fit">
                    <h2 className="text-lg font-semibold text-text-light font-montserrat mb-6">Keamanan</h2>

                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Password Saat Ini
                            </label>
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all font-montserrat pr-10"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-3 bottom-2.5 text-gray-400 hover:text-gray-600"
                            >
                                {showCurrentPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                            </button>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Password Baru
                            </label>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all font-montserrat pr-10"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 bottom-2.5 text-gray-400 hover:text-gray-600"
                            >
                                {showNewPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                            </button>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Konfirmasi Password
                            </label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all font-montserrat pr-10"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 bottom-2.5 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                            </button>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-2.5 border border-violet-600 text-violet-600 hover:bg-violet-50 disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-400 font-medium rounded-lg text-sm transition-colors font-montserrat"
                            >
                                {isSubmitting ? 'Memproses...' : 'Ganti Password'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
