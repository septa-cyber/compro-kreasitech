"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

interface AdminHeaderProps {
    isSidebarCollapsed?: boolean;
}

export default function AdminHeader({ isSidebarCollapsed = false }: AdminHeaderProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const profileRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    const searchLinks = [
        { name: 'Dashboard', href: '/admin/dashboard' },
        { name: 'Artikel', href: '/admin/dashboard/articles' },
        { name: 'Testimonials', href: '/admin/dashboard/testimonials' },
        { name: 'Team / Anggota', href: '/admin/dashboard/team' },
        { name: 'Portfolio / Proyek', href: '/admin/dashboard/portfolio' },
        { name: 'Lowongan Kerja (Jobs)', href: '/admin/dashboard/jobs' },
        { name: 'Partners / Mitra', href: '/admin/dashboard/partners' },
        { name: 'Pengaturan (Settings)', href: '/admin/dashboard/settings' },
        ...(user?.role === 'super_admin' ? [{ name: 'Kelola User', href: '/admin/dashboard/users' }] : []),
    ];

    const filteredLinks = searchLinks.filter(link =>
        link.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        const fetchUser = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };
        fetchUser();

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className={`
            h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 right-0 z-40 transition-all duration-300 
            ${isSidebarCollapsed ? 'left-20' : 'left-64'}
            max-[430px]:left-0
        `}>
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl relative" ref={searchRef}>
                    <div className="relative">
                        <FaSearch className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs md:text-sm" />
                        <input
                            type="text"
                            placeholder="Cari..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setIsSearchOpen(true);
                            }}
                            onFocus={() => setIsSearchOpen(true)}
                            className="w-full pl-9 md:pl-11 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-xs md:text-sm font-montserrat text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all truncate"
                        />
                    </div>

                    {/* Search Dropdown */}
                    {isSearchOpen && searchQuery.length > 0 && (
                        <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                            {filteredLinks.length > 0 ? (
                                <div className="max-h-64 overflow-y-auto">
                                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                                        Hasil Pencarian
                                    </div>
                                    {filteredLinks.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition font-montserrat"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="px-4 py-3 text-sm text-gray-500 font-montserrat text-center">
                                    Hasil tidak ditemukan
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 md:gap-4 ml-4">
                {/* User Profile */}
                <div className="relative" ref={profileRef}>
                    <button
                        onClick={() => {
                            setIsProfileOpen(!isProfileOpen);
                        }}
                        className="flex items-center gap-2 md:gap-3 p-1 md:p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-violet-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs md:text-sm font-semibold">
                                {user?.name?.charAt(0) || 'A'}
                            </span>
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-medium text-gray-700 font-montserrat">{user?.name || 'Admin'}</p>
                            <p className="text-xs text-gray-400 capitalize">{user?.role?.replace('_', ' ') || 'Admin'}</p>
                        </div>
                        <FaChevronDown className="text-gray-400 text-[10px] md:text-xs hidden md:block" size={10} />
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                            <Link href="/admin/dashboard/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 font-montserrat">
                                <FaUser className="text-gray-400" size={14} />
                                Profil Saya
                            </Link>
                            <Link href="/admin/dashboard/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 font-montserrat">
                                <FaCog className="text-gray-400" size={14} />
                                Pengaturan
                            </Link>
                            <div className="border-t border-gray-100 my-1"></div>
                            <button
                                onClick={async () => {
                                    await fetch('/api/auth/logout', { method: 'POST' });
                                    window.location.href = '/admin/login';
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-montserrat transition"
                            >
                                <FaSignOutAlt className="text-red-400" size={14} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
