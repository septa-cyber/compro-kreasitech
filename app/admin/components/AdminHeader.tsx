"use client";

import React, { useState } from 'react';

interface AdminHeaderProps {
    isSidebarCollapsed?: boolean;
}

export default function AdminHeader({ isSidebarCollapsed = false }: AdminHeaderProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const notifications = [
        { id: 1, title: 'Portfolio baru ditambahkan', time: '5 menit lalu', read: false },
        { id: 2, title: 'Testimonial menunggu review', time: '1 jam lalu', read: false },
        { id: 3, title: 'Backup berhasil', time: '2 jam lalu', read: true },
    ];

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <header className={`h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 right-0 z-20 transition-all duration-300 ${isSidebarCollapsed ? 'left-20' : 'left-64'}`}>
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
                <div className="relative">
                    <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input
                        type="text"
                        placeholder="Cari konten, halaman, atau pengaturan..."
                        className="w-full pl-11 pr-4 py-2.5 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm font-montserrat text-text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsNotificationOpen(!isNotificationOpen);
                            setIsProfileOpen(false);
                        }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
                    >
                        <i className="fas fa-bell text-gray-500"></i>
                        {unreadCount > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {isNotificationOpen && (
                        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                            <div className="px-4 py-2 border-b border-gray-100">
                                <h4 className="font-semibold text-sm text-text-light font-montserrat">Notifikasi</h4>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {notifications.map((notif) => (
                                    <div
                                        key={notif.id}
                                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-2 ${notif.read ? 'border-transparent' : 'border-violet-500 bg-violet-50/50'}`}
                                    >
                                        <p className="text-sm text-text-light font-montserrat">{notif.title}</p>
                                        <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="px-4 py-2 border-t border-gray-100">
                                <button className="text-sm text-violet-600 font-medium font-montserrat hover:text-violet-700">
                                    Lihat semua notifikasi
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-gray-200"></div>

                {/* User Profile */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setIsProfileOpen(!isProfileOpen);
                            setIsNotificationOpen(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">A</span>
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-medium text-text-light font-montserrat">Admin</p>
                            <p className="text-xs text-gray-400">Super Admin</p>
                        </div>
                        <i className="fas fa-chevron-down text-gray-400 text-xs hidden md:block"></i>
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 font-montserrat">
                                <i className="fas fa-user text-gray-400 w-4"></i>
                                Profil Saya
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 font-montserrat">
                                <i className="fas fa-cog text-gray-400 w-4"></i>
                                Pengaturan
                            </a>
                            <div className="border-t border-gray-100 my-1"></div>
                            <a href="/admin/login" className="flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-montserrat">
                                <i className="fas fa-sign-out-alt text-red-400 w-4"></i>
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
