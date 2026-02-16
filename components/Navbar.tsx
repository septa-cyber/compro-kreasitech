"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [isDarkBg, setIsDarkBg] = useState(false);

    const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);

    const toggleDesktopDropdown = (name: string) => {
        setActiveDesktopDropdown(prev => prev === name ? null : name);
    };

    const toggleMobileDropdown = (name: string) => {
        setActiveMobileDropdown(prev => prev === name ? null : name);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as Element).closest('.group')) {
                setActiveDesktopDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('nav');
            if (!navbar) return;

            const navbarRect = navbar.getBoundingClientRect();
            const navbarCenter = navbarRect.top + navbarRect.height / 2;

            const darkSections = document.querySelectorAll('[data-theme="dark"]');
            let isOverDark = false;

            darkSections.forEach((section) => {
                const sectionRect = section.getBoundingClientRect();
                if (
                    navbarCenter >= sectionRect.top &&
                    navbarCenter <= sectionRect.bottom
                ) {
                    isOverDark = true;
                }
            });

            setIsDarkBg(isOverDark);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 bg-white/95/95 backdrop-blur-md border border-gray-100 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] rounded-lg transition-all duration-300">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/assets/images/Logo.svg"
                                alt="Kreasitech Logo"
                                width={120}
                                height={32}
                                className={`h-6 lg:h-7 xl:h-8 w-auto transition-all duration-300 ${isDarkBg ? 'brightness-0 invert' : ''}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center items-center gap-2 xl:gap-8 font-nav">
                        <div className="flex items-center gap-3 xl:gap-8 transition-colors duration-300">
                            {/* Find a Talent - Mega Menu Trigger */}
                            <div className="group relative h-full flex items-center">
                                <button
                                    onClick={() => toggleDesktopDropdown('layanan')}
                                    className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isDarkBg ? 'text-white' : 'text-text-light'}`}
                                >
                                    Layanan <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300 ${isDarkBg ? 'text-white' : 'text-text-light'} ${activeDesktopDropdown === 'layanan' ? 'rotate-180' : ''}`}></i>
                                </button>

                                {/* Mega Menu Dropdown - Now Simplified */}
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 ${activeDesktopDropdown === 'layanan' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5 text-text-light">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap text-text-light">Layanan</h4>
                                        <ul className="space-y-2 text-sm text-text-light-muted text-left whitespace-nowrap">
                                            <li><Link href="/services/software-development" className="dropdown-item block py-1 text-text-light">Software Development</Link></li>
                                            <li><Link href="/taas" className="dropdown-item block py-1 text-text-light">Talent As a Service</Link></li>
                                            <li><Link href="/services/digital-marketing" className="dropdown-item block py-1 text-text-light">Digital Marketing</Link></li>
                                            <li><Link href="/academy" className="dropdown-item block py-1 text-text-light">Kreasi Space</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            {/* Products - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button
                                    onClick={() => toggleDesktopDropdown('produk')}
                                    className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isDarkBg ? 'text-white' : 'text-text-light'}`}
                                >
                                    Produk <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300 ${isDarkBg ? 'text-white' : 'text-text-light'} ${activeDesktopDropdown === 'produk' ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 ${activeDesktopDropdown === 'produk' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5 text-text-light">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap text-text-light">Produk</h4>
                                        <ul className="space-y-2 text-sm text-text-light-muted text-left whitespace-nowrap">
                                            <li><Link href="/products/hitalent" className="dropdown-item block py-1 text-text-light">HiTalent</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Company - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button
                                    onClick={() => toggleDesktopDropdown('perusahaan')}
                                    className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isDarkBg ? 'text-white' : 'text-text-light'}`}
                                >
                                    Perusahaan <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300 ${isDarkBg ? 'text-white' : 'text-text-light'} ${activeDesktopDropdown === 'perusahaan' ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 ${activeDesktopDropdown === 'perusahaan' ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5 text-text-light">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap text-text-light">Perusahaan</h4>
                                        <ul className="space-y-2 text-sm text-text-light-muted text-left whitespace-nowrap">
                                            <li><Link href="/company" className="dropdown-item block py-1 text-text-light">Tentang Kami</Link></li>
                                            <li><Link href="/portfolio" className="dropdown-item block py-1 text-text-light">Portfolio</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Link href="/blog" className={`nav-link hover:text-primary transition-colors duration-300 py-6 whitespace-nowrap ${isDarkBg ? 'text-white' : 'text-text-light'}`}>
                                Artikel
                            </Link>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                        <a
                            href="/karir"
                            className="bg-white h-8 xl:h-10 px-2 xl:px-4 rounded-lg outline outline-1 outline-violet-600 text-violet-600 font-btn-sm flex items-center justify-center hover:bg-violet-50 transition whitespace-nowrap"
                        >
                            KARIR
                        </a>
                        <a
                            href="/contact"
                            className="h-8 xl:h-10 px-2 xl:px-4 rounded-lg bg-violet-600 text-white font-btn-sm flex items-center justify-center hover:bg-violet-700 transition shadow-[0px_4px_20px_0px_rgba(124,58,237,0.4)] whitespace-nowrap"
                        >
                            KONTAK KAMI
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden ml-auto">
                        <button
                            className={`hover:text-primary transition-colors duration-300 ${isDarkBg ? 'text-white' : 'text-gray-500'}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 font-nav h-auto max-h-[calc(100vh-72px)] overflow-y-auto shadow-lg rounded-b-2xl">
                    {/* Layanan (Consolidated) */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("layanan")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "layanan"}
                        >
                            Layanan
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "layanan" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "layanan" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 space-y-6 rounded-lg mb-2">
                                <ul className="space-y-2 text-sm text-text-light-muted">
                                    <li><Link href="/academy" className="block py-1 hover:text-primary">Kreasi Space</Link></li>
                                    <li><Link href="/taas" className="block py-1 hover:text-primary">Talent As a Service</Link></li>
                                    <li><Link href="/services/digital-marketing" className="block py-1 hover:text-primary">Digital Marketing</Link></li>
                                    <li><Link href="/services/software-development" className="block py-1 hover:text-primary">Software Development</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Produk */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("produk")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "produk"}
                        >
                            Produk
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "produk" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "produk" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 rounded-lg mb-2">
                                <ul className="space-y-2 text-sm text-text-light-muted">
                                    <li><Link href="/products/hitalent" className="block py-1 hover:text-primary">HiTalent</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Perusahaan */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("perusahaan")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "perusahaan"}
                        >
                            Perusahaan
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "perusahaan" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "perusahaan" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 rounded-lg mb-2">
                                <ul className="space-y-2 text-sm text-text-light-muted">
                                    <li><Link href="/company" className="block py-1 hover:text-primary">Tentang Kami</Link></li>
                                    <li><Link href="/portfolio" className="block py-1 hover:text-primary">Portfolio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/blog"
                        className="block px-3 py-4 font-nav text-text-light hover:text-primary"
                    >
                        Artikel
                    </Link>

                    <div className="grid grid-cols-2 gap-3 mt-4 px-3 pb-8">
                        <a
                            href="/karir"
                            className="px-4 py-2.5 rounded-lg outline outline-1 outline-violet-600 text-violet-600 font-btn-sm text-center hover:bg-violet-50 transition-colors"
                        >
                            KARIR
                        </a>
                        <a
                            href="/contact"
                            className="px-4 py-2.5 bg-violet-600 rounded-lg text-white font-btn-sm text-center hover:bg-violet-700 transition-colors"
                        >
                            KONTAK KAMI
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

