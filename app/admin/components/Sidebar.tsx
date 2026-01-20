"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
    name: string;
    href: string;
    icon: string;
    badge?: number;
}

const menuItems: MenuItem[] = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: 'fas fa-th-large' },
    { name: 'Hero Section', href: '/admin/dashboard/hero', icon: 'fas fa-image' },
    { name: 'Services', href: '/admin/dashboard/services', icon: 'fas fa-cogs' },
    { name: 'Portfolio', href: '/admin/dashboard/portfolio', icon: 'fas fa-briefcase', badge: 12 },
    { name: 'Testimonials', href: '/admin/dashboard/testimonials', icon: 'fas fa-comments' },
    { name: 'Products', href: '/admin/dashboard/products', icon: 'fas fa-box' },
    { name: 'Team', href: '/admin/dashboard/team', icon: 'fas fa-users' },
];

const bottomMenuItems: MenuItem[] = [
    { name: 'Settings', href: '/admin/dashboard/settings', icon: 'fas fa-cog' },
    { name: 'Logout', href: '/admin/login', icon: 'fas fa-sign-out-alt' },
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
                    <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'} text-gray-500 text-sm`}></i>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 overflow-y-auto">
                <div className="space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group
                                ${isActive(item.href)
                                    ? 'bg-violet-600 text-white shadow-glow'
                                    : 'text-gray-600 hover:bg-violet-50 hover:text-violet-600'
                                }`}
                        >
                            <i className={`${item.icon} w-5 text-center ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-violet-600'}`}></i>
                            {!isCollapsed && (
                                <>
                                    <span className="flex-1">{item.name}</span>
                                    {item.badge && (
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${isActive(item.href) ? 'bg-white/20 text-white' : 'bg-violet-100 text-violet-600'}`}>
                                            {item.badge}
                                        </span>
                                    )}
                                </>
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
                                <i className={`${item.icon} w-5 text-center text-red-400`}></i>
                                {!isCollapsed && <span>{item.name}</span>}
                            </button>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group text-gray-600 hover:bg-gray-100`}
                            >
                                <i className={`${item.icon} w-5 text-center text-gray-400`}></i>
                                {!isCollapsed && <span>{item.name}</span>}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </aside>
    );
}
