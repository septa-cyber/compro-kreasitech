"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaThLarge, FaImage, FaCogs, FaBriefcase, FaComments, FaBox, FaUsers, FaCog, FaSignOutAlt, FaChevronRight, FaChevronLeft, FaHandshake, FaNewspaper, FaUserTie, FaBars, FaTimes, FaUserFriends } from 'react-icons/fa';

interface MenuItem {
    name: string;
    href: string;
    icon: React.ElementType;
    badge?: number;
}

const menuItems: MenuItem[] = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: FaThLarge },
    { name: 'Articles', href: '/admin/dashboard/articles', icon: FaNewspaper },
    { name: 'Jobs', href: '/admin/dashboard/jobs', icon: FaUserTie },
    { name: 'Testimonials', href: '/admin/dashboard/testimonials', icon: FaComments },
    { name: 'Portfolio', href: '/admin/dashboard/portfolio', icon: FaBriefcase },
    { name: 'Team', href: '/admin/dashboard/team', icon: FaUsers },
    { name: 'Partners', href: '/admin/dashboard/partners', icon: FaHandshake },
];

const superAdminMenuItems: MenuItem[] = [
    { name: 'Users', href: '/admin/dashboard/users', icon: FaUserFriends },
];

const bottomMenuItems: MenuItem[] = [
    { name: 'Settings', href: '/admin/dashboard/settings', icon: FaCog },
    { name: 'Logout', href: '/admin/login', icon: FaSignOutAlt },
];

export interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar, isMobileOpen, setIsMobileOpen }: SidebarProps) {
    const pathname = usePathname();
    const [user, setUser] = useState<any>(null);

    const isActive = (href: string) => pathname === href;

    React.useEffect(() => {
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
    }, []);

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] max-[430px]:block hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                ${isCollapsed ? 'w-20' : 'w-64'} 
                h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 fixed left-0 top-0 z-[101]
                max-[430px]:w-72 max-[430px]:z-[101]
                ${isMobileOpen ? 'max-[430px]:translate-x-0' : 'max-[430px]:-translate-x-full'}
            `}>
                {/* Logo Section */}
                <div className={`h-16 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-4'} border-b border-gray-100`}>
                    {!isCollapsed && (
                        <Link href="/admin/dashboard" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
                            <img
                                src="/assets/images/Logo.svg"
                                alt="Kreasitech"
                                className="h-7 w-auto"
                            />
                        </Link>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors max-[430px]:hidden"
                    >
                        {isCollapsed ? <FaChevronRight className="text-gray-500" size={14} /> : <FaChevronLeft className="text-gray-500" size={14} />}
                    </button>
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors max-[430px]:block hidden text-gray-500"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 overflow-y-auto">
                    <div className="space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group relative
                                    ${isActive(item.href)
                                        ? 'bg-violet-600 text-white shadow-glow'
                                        : 'text-gray-600 hover:bg-violet-50 hover:text-violet-600'
                                    }`}
                            >
                                <item.icon className={`w-5 text-center ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-violet-600'}`} size={20} />
                                <span className={`flex-1 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>{item.name}</span>
                                {isActive(item.href) && isCollapsed && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
                                )}
                            </Link>
                        ))}

                        {user?.role === 'super_admin' && superAdminMenuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group relative
                                    ${isActive(item.href)
                                        ? 'bg-violet-600 text-white shadow-glow'
                                        : 'text-gray-600 hover:bg-violet-50 hover:text-violet-600'
                                    }`}
                            >
                                <item.icon className={`w-5 text-center ${isActive(item.href) ? 'text-white' : 'text-gray-400 group-hover:text-violet-600'}`} size={20} />
                                <span className={`flex-1 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>{item.name}</span>
                                {isActive(item.href) && isCollapsed && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full" />
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
                                    <span className={`${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>{item.name}</span>
                                </button>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-lg font-montserrat text-sm transition-all duration-200 group text-gray-600 hover:bg-gray-100 ${isActive(item.href) ? 'bg-gray-100 font-semibold text-gray-900' : ''}`}
                                >
                                    <item.icon className={`w-5 text-center text-gray-400`} size={20} />
                                    <span className={`${isCollapsed ? 'opacity-0 md:hidden' : 'opacity-100'}`}>{item.name}</span>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </aside>

            {/* Bottom Navbar for Mobile */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[90] py-2 px-1 max-[430px]:flex hidden items-center justify-around shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                {menuItems.slice(0, 4).map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 min-w-[60px] relative transition-all duration-300 ${isActive(item.href) ? 'text-violet-600' : 'text-gray-400'}`}
                    >
                        <item.icon size={20} className={`transition-transform duration-300 ${isActive(item.href) ? 'scale-110' : ''}`} />
                        <span className="text-[10px] font-semibold font-montserrat mt-0.5">{item.name}</span>
                        {isActive(item.href) && (
                            <div className="absolute -top-2 w-8 h-1 bg-violet-600 rounded-b-full shadow-[0_2px_4px_rgba(124,58,237,0.3)]" />
                        )}
                    </Link>
                ))}
                {/* Menu Toggle for Mobile */}
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className={`flex flex-col items-center gap-1 min-w-[60px] relative transition-all duration-300 ${isMobileOpen ? 'text-violet-600' : 'text-gray-400'}`}
                >
                    <FaBars size={20} className={`transition-transform duration-300 ${isMobileOpen ? 'scale-110' : ''}`} />
                    <span className="text-[10px] font-semibold font-montserrat">Menu</span>
                </button>
            </nav>
        </>
    );
}
