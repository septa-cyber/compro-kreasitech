"use client";

import React, { useState } from 'react';

export default function ProfilePage() {
    const [name, setName] = useState('Admin');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle info update logic
        alert('Informasi profil berhasil diperbarui!');
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Password baru tidak cocok!');
            return;
        }
        // Handle password change logic
        alert('Password berhasil diubah!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

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
                            <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-violet-600">A</span>
                            </div>
                            <button className="text-sm text-violet-600 font-medium hover:text-violet-700">
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
                                        className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        value="Super Admin"
                                        disabled
                                        className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value="admin@kreasi.tech"
                                    disabled
                                    className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-not-allowed"
                                />
                                <p className="text-xs text-gray-400 mt-1">Email tidak dapat diubah. Hubungi support jika diperlukan.</p>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg text-sm transition-colors shadow-glow"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Security Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-fit">
                    <h2 className="text-lg font-semibold text-text-light font-montserrat mb-6">Keamanan</h2>

                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Password Saat Ini
                            </label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Password Baru
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full px-6 py-2.5 border border-violet-600 text-violet-600 hover:bg-violet-50 font-medium rounded-lg text-sm transition-colors"
                            >
                                Ganti Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

