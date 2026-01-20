"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaThLarge, FaImage, FaCogs, FaBriefcase, FaComments, FaBox, FaUsers, FaCog, FaSignOutAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface MenuItem {
    name: string;
    href: string;
    icon: React.ElementType;
    badge?: number;
}

const menuItems: MenuItem[] = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: FaThLarge },
    { name: 'Hero Section', href: '/admin/dashboard/hero', icon: FaImage },
    { name: 'Services', href: '/admin/dashboard/services', icon: FaCogs },
    { name: 'Portfolio', href: '/admin/dashboard/portfolio', icon: FaBriefcase, badge: 12 },
    { name: 'Testimonials', href: '/admin/dashboard/testimonials', icon: FaComments },
    { name: 'Products', href: '/admin/dashboard/products', icon: FaBox },
    { name: 'Team', href: '/admin/dashboard/team', icon: FaUsers },
];

const bottomMenuItems: MenuItem[] = [
    { name: 'Settings', href: '/admin/dashboard/settings', icon: FaCog },
    { name: 'Logout', href: '/admin/login', icon: FaSignOutAlt },
];

export interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;


    return (
        <aside className={`${isCollapsed ? 'w-20' : 'w-64'} h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 fixed left-0 top-0 z-30`}>
            {/* Logo Section */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                {!isCollapsed && (
                    <Link href="/admin/dashboard" className="flex items-center gap-2">
                        <img
                            src="/assets/images/Logo.svg"
                            alt="Kreasitech"
                            className="h-7 w-auto"
                        />
                    </Link>
                )}
                <button
                    onClick={toggleSidebar}
                    className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${isCollapsed ? 'mx-auto' : ''}`}
                >
                    {isCollapsed ? <FaChevronRight className="text-gray-500" size={14} /> : <FaChevronLeft className="text-gray-500" size={14} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 overflow-y-auto">
                <div className="space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group relative
                                ${isActive(item.href)
                                    ? 'bg-violet-600 text-white shadow-glow'
                                    : 'text-gray-600 hover:bg-violet-50 hover:text-violet-600'
                                }`}
                        >
                            <item.icon className={`w-5 text-center ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-violet-600'}`} size={20} />
                            {!isCollapsed ? (
                                <>
                                    <span className="flex-1">{item.name}</span>
                                    {item.badge && (
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${isActive(item.href) ? 'bg-white/20 text-white' : 'bg-violet-100 text-violet-600'}`}>
                                            {item.badge}
                                        </span>
                                    )}
                                </>
                            ) : (
                                item.badge && (
                                    <span className="absolute top-1 right-2 w-5 h-5 flex items-center justify-center text-[10px] rounded-full bg-violet-600 text-white border-2 border-white">
                                        {item.badge > 9 ? '9+' : item.badge}
                                    </span>
                                )
                            )}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Bottom Menu */}
            <div className="py-4 px-3 border-t border-gray-100">
                <div className="space-y-1">
                    {bottomMenuItems.map((item) => (
                        item.name === 'Logout' ? (
                            <button
                                key={item.name}
                                onClick={async () => {
                                    await fetch('/api/auth/logout', { method: 'POST' });
                                    window.location.href = '/admin/login';
                                }}
                                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group text-red-500 hover:bg-red-50`}
                            >
                                <item.icon className={`w-5 text-center text-red-400`} size={20} />
                                {!isCollapsed && <span>{item.name}</span>}
                            </button>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group text-gray-600 hover:bg-gray-100 ${isActive(item.href) ? 'bg-gray-100 font-semibold text-gray-900' : ''}`}
                            >
                                <item.icon className={`w-5 text-center text-gray-400`} size={20} />
                                {!isCollapsed && <span>{item.name}</span>}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </aside>
    );
}
