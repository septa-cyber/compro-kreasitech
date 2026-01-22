"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [isDarkBg, setIsDarkBg] = useState(false);

    const toggleMobileDropdown = (name: string) => {
        setActiveMobileDropdown(prev => prev === name ? null : name);
    };

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
                <div className="flex justify-between items-center h-[72px]">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/assets/images/Logo.svg"
                                alt="Kreasitech Logo"
                                className={`h-6 lg:h-7 xl:h-8 w-auto transition-all duration-300 ${isDarkBg ? 'brightness-0 invert' : ''}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-8">
                        <div className={`flex items-center gap-3 xl:gap-8 text-[10px] xl:text-xs font-medium font-montserrat ${isDarkBg ? 'text-white' : 'text-text-light'} transition-colors duration-300`}>
                            {/* Find a Talent - Mega Menu Trigger */}
                            <div className="group h-full flex items-center">
                                <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                                    Layanan <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300 ${isDarkBg ? 'text-white' : 'text-text-light'}`}></i>
                                </button>

                                {/* Mega Menu Dropdown */}
                                <div className="absolute top-full left-0 w-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl rounded-2xl overflow-hidden">
                                        <div className="max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-4 gap-8">
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Academy</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Impact Academy</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Talent As a Service</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Head Hunting</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Staffing</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Internship</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Inclusive Talent</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Digital Marketing</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Google Ads</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Backlink</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Search Engine Optimization</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Press Release</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Software Development</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Specifications & Wireframe</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">UI/UX Design</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Website Development</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Mobile App Development</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">MVP Development</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Custom Software Development</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* Products - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                                    Produk <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300 ${isDarkBg ? 'text-white' : 'text-text-light'}`}></i>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Produk</h4>
                                        <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                                            <li><a href="#" className="dropdown-item block py-1">HiTalent</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">HiSales</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Company - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                                    Perusahaan <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300 ${isDarkBg ? 'text-white' : 'text-text-light'}`}></i>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Perusahaan</h4>
                                        <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                                            <li><Link href="/company" className="dropdown-item block py-1">Tentang Kami</Link></li>
                                            <li><a href="#" className="dropdown-item block py-1">Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className={`nav-link hover:text-primary transition-colors duration-300 py-6 whitespace-nowrap ${isDarkBg ? 'text-white' : 'text-text-light'}`}>
                                Artikel
                            </a>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 ml-2 xl:ml-4">
                            <a
                                href="#"
                                className="bg-white h-8 xl:h-10 px-2 xl:px-4 rounded-lg outline outline-1 outline-violet-600 text-violet-600 text-[10px] xl:text-xs font-semibold font-montserrat flex items-center justify-center hover:bg-violet-50 transition whitespace-nowrap"
                            >
                                APPLY FOR JOBS
                            </a>
                            <a
                                href="#"
                                className="h-8 xl:h-10 px-2 xl:px-4 rounded-lg bg-violet-600 text-white text-[10px] xl:text-xs font-bold font-montserrat flex items-center justify-center hover:bg-violet-700 transition shadow-[0px_4px_20px_0px_rgba(124,58,237,0.4)] whitespace-nowrap"
                            >
                                START HIRING
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className="text-gray-500 hover:text-primary"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 font-montserrat h-auto max-h-[calc(100vh-72px)] overflow-y-auto shadow-lg rounded-b-2xl">
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
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "layanan" ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 space-y-6 rounded-lg mb-2">
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Academy</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Impact Academy</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Talent As a Service</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Head Hunting</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Staffing</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Internship</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Inclusive Talent</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Digital Marketing</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Google Ads</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Backlink</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Search Engine Optimization</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Press Release</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Software Development</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Specifications & Wireframe</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">UI/UX Design</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Website Development</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Mobile App Development</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">MVP Development</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Custom Software Development</a></li>
                                    </ul>
                                </div>
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
                                <ul className="space-y-2 text-xs text-text-light-muted">
                                    <li><a href="#" className="block py-1 hover:text-primary">HiTalent</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">HiSales</a></li>
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
                                <ul className="space-y-2 text-xs text-text-light-muted">
                                    <li><Link href="/company" className="block py-1 hover:text-primary">Tentang Kami</Link></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="block px-3 py-4 text-sm font-medium text-text-light hover:text-primary"
                    >
                        Artikel
                    </a>

                    <div className="grid grid-cols-2 gap-3 mt-4 px-3 pb-8">
                        <a
                            href="#"
                            className="px-4 py-2.5 rounded-lg outline outline-1 outline-violet-600 text-violet-600 text-xs font-semibold text-center hover:bg-violet-50 transition-colors"
                        >
                            APPLY FOR JOBS
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2.5 bg-violet-600 rounded-lg text-white text-xs font-medium text-center hover:bg-violet-700 transition-colors"
                        >
                            START HIRING
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}