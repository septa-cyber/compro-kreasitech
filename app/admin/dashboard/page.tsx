"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaNewspaper, FaComments, FaUsers, FaBriefcase, FaUserTie, FaHandshake, FaPen, FaFolderOpen, FaUsersSlash, FaExternalLinkAlt, FaChevronRight, FaCircle } from 'react-icons/fa';

interface DashboardData {
    articles: any[];
    testimonials: any[];
    team: any[];
    portfolio: any[];
    jobs: any[];
    partners: any[];
}

export default function DashboardPage() {
    const [data, setData] = useState<DashboardData>({
        articles: [],
        testimonials: [],
        team: [],
        portfolio: [],
        jobs: [],
        partners: [],
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [articles, testimonials, team, portfolio, jobs, partners] = await Promise.all([
                    fetch('/api/articles').then(r => r.json()),
                    fetch('/api/testimonials').then(r => r.json()),
                    fetch('/api/team').then(r => r.json()),
                    fetch('/api/portfolio').then(r => r.json()),
                    fetch('/api/jobs').then(r => r.json()),
                    fetch('/api/partners').then(r => r.json()),
                ]);
                setData({ articles, testimonials, team, portfolio, jobs, partners });
            } catch (e) {
                console.error('Dashboard fetch error:', e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAll();
    }, []);

    const publishedArticles = data.articles.filter(a => a.status === 'published' || a.status === 'publish');
    const draftArticles = data.articles.filter(a => a.status === 'draft');
    const recentArticles = data.articles.slice(0, 5);

    const statCards = [
        {
            title: 'Total Artikel',
            value: data.articles.length,
            sub: `${publishedArticles.length} published · ${draftArticles.length} draft`,
            icon: FaNewspaper,
            color: 'violet',
            href: '/admin/dashboard/articles',
        },
        {
            title: 'Testimonials',
            value: data.testimonials.length,
            sub: 'Ulasan klien',
            icon: FaComments,
            color: 'emerald',
            href: '/admin/dashboard/testimonials',
        },
        {
            title: 'Anggota Tim',
            value: data.team.length,
            sub: 'Orang aktif',
            icon: FaUsers,
            color: 'blue',
            href: '/admin/dashboard/team',
        },
        {
            title: 'Portfolio',
            value: data.portfolio.length,
            sub: 'Proyek showcase',
            icon: FaBriefcase,
            color: 'amber',
            href: '/admin/dashboard/portfolio',
        },
        {
            title: 'Lowongan',
            value: data.jobs.length,
            sub: 'Posisi terbuka',
            icon: FaUserTie,
            color: 'rose',
            href: '/admin/dashboard/jobs',
        },
        {
            title: 'Partners',
            value: data.partners.length,
            sub: 'Mitra kerja sama',
            icon: FaHandshake,
            color: 'cyan',
            href: '/admin/dashboard/partners',
        },
    ];

    const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
        violet: { bg: 'bg-violet-50', text: 'text-violet-600', iconBg: 'bg-violet-100' },
        emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', iconBg: 'bg-emerald-100' },
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', iconBg: 'bg-amber-100' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', iconBg: 'bg-rose-100' },
        cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', iconBg: 'bg-cyan-100' },
    };

    const quickActions = [
        { title: 'Tulis Artikel', desc: 'Buat artikel baru', icon: FaPen, href: '/admin/dashboard/articles/create', color: 'bg-violet-600' },
        { title: 'Kelola Portfolio', desc: 'Atur proyek showcase', icon: FaFolderOpen, href: '/admin/dashboard/portfolio', color: 'bg-blue-600' },
        { title: 'Kelola Team', desc: 'Atur anggota tim', icon: FaUsers, href: '/admin/dashboard/team', color: 'bg-emerald-600' },
        { title: 'Lihat Website', desc: 'Preview halaman utama', icon: FaExternalLinkAlt, href: '/', color: 'bg-gray-700' },
    ];

    // Skeleton placeholder
    const SkeletonCard = () => (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-pulse">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="h-7 w-16 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-24 bg-gray-100 rounded mb-1"></div>
            <div className="h-3 w-32 bg-gray-100 rounded"></div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute right-20 bottom-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2"></div>
                <div className="relative z-10">
                    <h1 className="text-xl md:text-3xl font-semibold font-montserrat mb-2">
                        Selamat Datang, Admin! 👋
                    </h1>
                    <p className="text-violet-100 font-montserrat max-w-xl">
                        Kelola konten website Kreasitech dengan mudah. Semua data di bawah ini diambil secara real-time.
                    </p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                    : statCards.map((card) => {
                        const colors = colorMap[card.color];
                        return (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center`}>
                                        <card.icon className={colors.text} size={20} />
                                    </div>
                                    <FaChevronRight className="text-gray-300 group-hover:text-violet-500 transition-colors" size={14} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 font-montserrat mb-1">{card.value}</h3>
                                <p className="text-sm font-medium text-gray-700 font-montserrat">{card.title}</p>
                                <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
                            </Link>
                        );
                    })
                }
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 font-montserrat mb-4">Aksi Cepat</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.href}
                            target={action.href === '/' ? '_blank' : undefined}
                            className="group p-4 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50/50 transition-all"
                        >
                            <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                                <action.icon className="text-white" size={16} />
                            </div>
                            <h4 className="text-sm font-semibold text-gray-800 font-montserrat group-hover:text-violet-600 transition-colors">
                                {action.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">{action.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Two Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Articles */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 font-montserrat">Artikel Terbaru</h2>
                        <Link href="/admin/dashboard/articles" className="text-sm text-violet-600 font-medium hover:text-violet-700 font-montserrat">
                            Lihat Semua
                        </Link>
                    </div>
                    {isLoading ? (
                        <div className="space-y-3 animate-pulse">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-3 p-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                                    <div className="flex-1">
                                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : recentArticles.length === 0 ? (
                        <div className="text-center py-8 text-gray-400">
                            <FaNewspaper className="mx-auto mb-2 text-gray-300" size={28} />
                            <p className="text-sm font-montserrat">Belum ada artikel.</p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {recentArticles.map((article: any) => (
                                <Link
                                    key={article.id}
                                    href={`/admin/dashboard/articles/${article.id || article.slug}`}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                                >
                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FaNewspaper className="text-violet-600" size={16} />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-sm font-medium text-gray-800 font-montserrat truncate group-hover:text-violet-600 transition-colors">
                                                {article.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${article.categoryColor || 'bg-gray-100 text-gray-600'}`}>
                                                    {article.category}
                                                </span>
                                                <span className="text-xs text-gray-400">{article.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={`ml-2 flex-shrink-0 px-2 py-0.5 text-[10px] rounded-full font-semibold ${article.status === 'published' || article.status === 'publish'
                                        ? 'bg-emerald-100 text-emerald-600'
                                        : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {article.status === 'published' || article.status === 'publish' ? 'Published' : 'Draft'}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Recent Testimonials */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900 font-montserrat">Testimonial Terbaru</h2>
                        <Link href="/admin/dashboard/testimonials" className="text-sm text-violet-600 font-medium hover:text-violet-700 font-montserrat">
                            Lihat Semua
                        </Link>
                    </div>
                    {isLoading ? (
                        <div className="space-y-4 animate-pulse">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="flex items-start gap-3 p-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                    <div className="flex-1">
                                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                                        <div className="h-3 bg-gray-100 rounded w-full mb-1"></div>
                                        <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : data.testimonials.length === 0 ? (
                        <div className="text-center py-8 text-gray-400">
                            <FaComments className="mx-auto mb-2 text-gray-300" size={28} />
                            <p className="text-sm font-montserrat">Belum ada testimonial.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {data.testimonials.slice(0, 4).map((t: any) => (
                                <div
                                    key={t.id}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <img
                                        src={t.avatar || 'https://placehold.co/100x100'}
                                        alt={t.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm font-semibold text-gray-800 font-montserrat">{t.name}</h4>
                                        </div>
                                        <p className="text-xs text-gray-400">{t.role}{t.company ? ` · ${t.company}` : ''}</p>
                                        <p className="text-xs text-gray-500 italic mt-1 line-clamp-2">"{t.content || t.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
