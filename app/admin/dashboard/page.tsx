"use client";

import React from 'react';
import Link from 'next/link';

interface StatCard {
    title: string;
    value: string;
    icon: string;
    change: string;
    changeType: 'up' | 'down' | 'neutral';
    color: string;
}

const statCards: StatCard[] = [
    { title: 'Total Halaman', value: '12', icon: 'fas fa-file-alt', change: '+2 bulan ini', changeType: 'up', color: 'violet' },
    { title: 'Portfolio', value: '24', icon: 'fas fa-briefcase', change: '+5 bulan ini', changeType: 'up', color: 'blue' },
    { title: 'Testimonials', value: '18', icon: 'fas fa-comments', change: '+3 bulan ini', changeType: 'up', color: 'green' },
    { title: 'Team Members', value: '8', icon: 'fas fa-users', change: 'Tidak berubah', changeType: 'neutral', color: 'orange' },
];

interface QuickAction {
    title: string;
    description: string;
    icon: string;
    href: string;
    color: string;
}

const quickActions: QuickAction[] = [
    { title: 'Edit Hero', description: 'Ubah tampilan hero section', icon: 'fas fa-image', href: '/admin/dashboard/hero', color: 'bg-violet-500' },
    { title: 'Tambah Portfolio', description: 'Upload project baru', icon: 'fas fa-plus', href: '/admin/dashboard/portfolio', color: 'bg-blue-500' },
    { title: 'Kelola Services', description: 'Update daftar layanan', icon: 'fas fa-cogs', href: '/admin/dashboard/services', color: 'bg-green-500' },
    { title: 'Lihat Website', description: 'Preview halaman utama', icon: 'fas fa-external-link-alt', href: '/', color: 'bg-gray-500' },
];

interface RecentActivity {
    id: number;
    action: string;
    target: string;
    user: string;
    time: string;
    icon: string;
}

const recentActivities: RecentActivity[] = [
    { id: 1, action: 'Menambahkan', target: 'Portfolio: Mobile App Design', user: 'Admin', time: '2 jam lalu', icon: 'fas fa-plus-circle text-green-500' },
    { id: 2, action: 'Mengubah', target: 'Hero Section: Tagline', user: 'Admin', time: '5 jam lalu', icon: 'fas fa-edit text-blue-500' },
    { id: 3, action: 'Menghapus', target: 'Testimonial: Outdated Review', user: 'Admin', time: '1 hari lalu', icon: 'fas fa-trash text-red-500' },
    { id: 4, action: 'Mempublikasi', target: 'Services: Digital Marketing', user: 'Admin', time: '2 hari lalu', icon: 'fas fa-check-circle text-violet-500' },
];

const contentSections = [
    { name: 'Hero Section', status: 'Published', lastEdit: '2 hari lalu', icon: 'fas fa-image' },
    { name: 'Services', status: 'Published', lastEdit: '1 minggu lalu', icon: 'fas fa-cogs' },
    { name: 'Portfolio', status: 'Draft', lastEdit: '3 jam lalu', icon: 'fas fa-briefcase' },
    { name: 'Testimonials', status: 'Published', lastEdit: '5 hari lalu', icon: 'fas fa-comments' },
    { name: 'Why Choose Us', status: 'Published', lastEdit: '2 minggu lalu', icon: 'fas fa-star' },
    { name: 'Footer', status: 'Published', lastEdit: '1 bulan lalu', icon: 'fas fa-grip-horizontal' },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute right-20 bottom-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2"></div>
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl font-semibold font-montserrat mb-2">
                        Selamat Datang, Admin! 👋
                    </h1>
                    <p className="text-violet-100 font-montserrat max-w-xl">
                        Kelola konten website Kreasitech dengan mudah. Perbarui hero section, portfolio, testimonials, dan masih banyak lagi.
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.color === 'violet' ? 'bg-violet-100' :
                                    card.color === 'blue' ? 'bg-blue-100' :
                                        card.color === 'green' ? 'bg-green-100' : 'bg-orange-100'
                                }`}>
                                <i className={`${card.icon} text-lg ${card.color === 'violet' ? 'text-violet-600' :
                                        card.color === 'blue' ? 'text-blue-600' :
                                            card.color === 'green' ? 'text-green-600' : 'text-orange-600'
                                    }`}></i>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-text-light font-montserrat mb-1">{card.value}</h3>
                        <p className="text-sm text-gray-500 font-montserrat mb-2">{card.title}</p>
                        <p className={`text-xs font-medium ${card.changeType === 'up' ? 'text-green-500' :
                                card.changeType === 'down' ? 'text-red-500' : 'text-gray-400'
                            }`}>
                            {card.changeType === 'up' && <i className="fas fa-arrow-up mr-1"></i>}
                            {card.changeType === 'down' && <i className="fas fa-arrow-down mr-1"></i>}
                            {card.change}
                        </p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-semibold text-text-light font-montserrat mb-4">Aksi Cepat</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            href={action.href}
                            className="group p-4 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all"
                        >
                            <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                                <i className={`${action.icon} text-white`}></i>
                            </div>
                            <h4 className="text-sm font-semibold text-text-light font-montserrat group-hover:text-violet-600 transition-colors">
                                {action.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">{action.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Content Sections */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Kelola Konten</h2>
                        <button className="text-sm text-violet-600 font-medium hover:text-violet-700 font-montserrat">
                            Lihat Semua
                        </button>
                    </div>
                    <div className="space-y-3">
                        {contentSections.map((section, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                                        <i className={`${section.icon} text-violet-600`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-text-light font-montserrat group-hover:text-violet-600 transition-colors">
                                            {section.name}
                                        </h4>
                                        <p className="text-xs text-gray-400">Terakhir diubah: {section.lastEdit}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${section.status === 'Published'
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {section.status}
                                    </span>
                                    <i className="fas fa-chevron-right text-gray-300 group-hover:text-violet-600 transition-colors"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Aktivitas Terkini</h2>
                        <button className="text-sm text-violet-600 font-medium hover:text-violet-700 font-montserrat">
                            Lihat Semua
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentActivities.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className={activity.icon}></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-text-light font-montserrat">
                                        <span className="font-medium">{activity.user}</span>
                                        {' '}{activity.action}{' '}
                                        <span className="font-medium">{activity.target}</span>
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
