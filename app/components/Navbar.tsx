"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const [isVioletTheme, setIsVioletTheme] = useState(false);

    const toggleMobileDropdown = (name: string) => {
        setActiveMobileDropdown(prev => prev === name ? null : name);
    };

    useEffect(() => {
        const handleScroll = () => {
            const violetSections = document.querySelectorAll('[data-nav-theme="violet"]');
            let isViolet = false;

            const navHeight = 72; // Approximate navbar height
            const safetyMargin = 30; // Extra buffer

            violetSections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Check if the navbar overlapping range (0 to navHeight) is inside the section
                // We add a safety margin to make the switch feel snappier/smoother
                if (rect.top <= (navHeight / 2) && rect.bottom >= (navHeight / 2)) {
                    isViolet = true;
                }
            });

            setIsVioletTheme(isViolet);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic Classes
    const navClasses = isVioletTheme
        ? "fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 bg-violet-800/95 backdrop-blur-md border border-white/10 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] rounded-lg transition-all duration-300"
        : "fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] rounded-lg transition-all duration-300";

    const textClass = isVioletTheme ? "text-white" : "text-text-light";
    const subTextClass = isVioletTheme ? "text-white/80" : "text-text-light-muted";
    const logoSrc = isVioletTheme ? "/assets/images/Logo-white.svg" : "/assets/images/Logo.svg"; // Assuming you have a white logo, otherwise fallback or filter

    // For buttons
    const btnSecondaryClass = isVioletTheme
        ? "bg-transparent h-8 xl:h-10 px-2 xl:px-4 rounded-lg outline outline-1 outline-white text-white text-[10px] xl:text-xs font-semibold font-montserrat flex items-center justify-center hover:bg-white/10 transition whitespace-nowrap"
        : "bg-white h-8 xl:h-10 px-2 xl:px-4 rounded-lg outline outline-1 outline-violet-600 text-violet-600 text-[10px] xl:text-xs font-semibold font-montserrat flex items-center justify-center hover:bg-violet-50 transition whitespace-nowrap";

    const btnPrimaryClass = isVioletTheme
        ? "h-8 xl:h-10 px-2 xl:px-4 rounded-lg bg-white text-violet-600 text-[10px] xl:text-xs font-bold font-montserrat flex items-center justify-center hover:bg-gray-100 transition shadow-lg whitespace-nowrap"
        : "h-8 xl:h-10 px-2 xl:px-4 rounded-lg bg-violet-600 text-white text-[10px] xl:text-xs font-bold font-montserrat flex items-center justify-center hover:bg-violet-700 transition shadow-[0px_4px_20px_0px_rgba(124,58,237,0.4)] whitespace-nowrap";

    return (
        <nav className={navClasses}>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[72px]">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            {/* If you don't have Logo-white.svg, we can use CSS filter brightness(0) invert(1) for white */}
                            <img
                                src="/assets/images/Logo.svg"
                                alt="Kreasitech Logo"
                                className={`h-6 lg:h-7 xl:h-8 w-auto transition-filter duration-300 ${isVioletTheme ? 'brightness-0 invert' : ''}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-8">
                        <div className={`flex items-center gap-3 xl:gap-8 text-[10px] xl:text-xs font-medium font-montserrat ${textClass}`}>
                            {/* Find a Talent - Mega Menu Trigger */}
                            <div className="group h-full flex items-center">
                                <button className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isVioletTheme ? 'hover:text-white/80' : ''}`}>
                                    Find a Talent <i className={`fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300`}></i>
                                </button>

                                {/* Mega Menu Dropdown */}
                                <div className="absolute top-full left-0 w-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl rounded-2xl overflow-hidden text-text-light">
                                        <div className="max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-4 gap-8">
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Finance & Accounting</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Bookkeeper</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Financial Analyst</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Tax Specialist</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Accountant</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Customer Support, Ops, & VAs</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Virtual Assistant</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Create Support</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Data Entry Specialist</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Operations Manager</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">Sales & Marketing</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">Digital Marketer</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Social Media Manager</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">SEO Specialist</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Sales Representative</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-4">IT, Data, and Engineering</h4>
                                                <ul className="space-y-3 text-xs text-text-light-muted">
                                                    <li><a href="#" className="dropdown-item block pb-1">UI/UX Designer</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Frontend Developer</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">Backend Developer</a></li>
                                                    <li><a href="#" className="dropdown-item block pb-1">DevOps Engineer</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isVioletTheme ? 'hover:text-white/80' : ''}`}>
                                    Services <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                                </button>
                                <div className="absolute top-full -left-12 w-max min-w-[500px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-6 grid grid-cols-2 gap-8 text-text-light">
                                        <div>
                                            <h4 className="font-bold text-sm mb-3">Talent As a Service</h4>
                                            <ul className="space-y-2 text-xs text-text-light-muted">
                                                <li><a href="#" className="dropdown-item block py-1">Head Hunting</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">Staffing</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">Internship</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">Inclusive Talent</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-3">Software Development</h4>
                                            <ul className="space-y-2 text-xs text-text-light-muted">
                                                <li><a href="#" className="dropdown-item block py-1">Specifications & Wireframe</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">UI/UX Design</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">Website Development</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">Mobile App Development</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">MVP Development</a></li>
                                                <li><a href="#" className="dropdown-item block py-1">Custom Software Development</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Products - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isVioletTheme ? 'hover:text-white/80' : ''}`}>
                                    Products <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5 text-text-light">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Products</h4>
                                        <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                                            <li><a href="#" className="dropdown-item block py-1">HiTalent</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">lorem ipsum</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">lorem ipsum</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">lorem ipsum</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Company - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isVioletTheme ? 'hover:text-white/80' : ''}`}>
                                    Company <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5 text-text-light">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Company</h4>
                                        <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                                            <li><Link href="/company" className="dropdown-item block py-1">About Us</Link></li>
                                            <li><a href="#" className="dropdown-item block py-1">Portfolio</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">Careers</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">Our Journey</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Kreasi Academy - Dropdown */}
                            <div className="group relative h-full flex items-center">
                                <button className={`nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap ${isVioletTheme ? 'hover:text-white/80' : ''}`}>
                                    Kreasi Academy <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5 text-text-light">
                                        <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Kreasi Academy</h4>
                                        <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                                            <li><a href="#" className="dropdown-item block py-1">After Office Academy</a></li>
                                            <li><a href="#" className="dropdown-item block py-1">Impact Academy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className={`nav-link hover:text-primary transition py-6 whitespace-nowrap ${isVioletTheme ? 'hover:text-white/80' : ''}`}>
                                Digital Marketing
                            </a>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 ml-2 xl:ml-4">
                            <a
                                href="#"
                                className={btnSecondaryClass}
                            >
                                APPLY FOR JOBS
                            </a>
                            <a
                                href="#"
                                className={btnPrimaryClass}
                            >
                                START HIRING
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className={`${isVioletTheme ? 'text-white' : 'text-gray-500'} hover:text-primary transition-colors`}
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
                    {/* Find a Talent */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("find-talent")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "find-talent"}
                        >
                            Find a Talent
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "find-talent" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "find-talent" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 space-y-6 rounded-lg mb-2">
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Finance & Accounting</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Bookkeeper</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Financial Analyst</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Tax Specialist</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Accountant</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Customer Support, Ops, & VAs</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Virtual Assistant</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Create Support</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Data Entry Specialist</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Operations Manager</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">Sales & Marketing</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">Digital Marketer</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Social Media Manager</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">SEO Specialist</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Sales Representative</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-3">IT, Data, and Engineering</h4>
                                    <ul className="space-y-2 text-xs text-text-light-muted">
                                        <li><a href="#" className="block py-1 hover:text-primary">UI/UX Designer</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Frontend Developer</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">Backend Developer</a></li>
                                        <li><a href="#" className="block py-1 hover:text-primary">DevOps Engineer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("services")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "services"}
                        >
                            Services
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "services" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "services" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 space-y-6 rounded-lg mb-2">
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

                    {/* Products */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("products")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "products"}
                        >
                            Products
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "products" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "products" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 rounded-lg mb-2">
                                <ul className="space-y-2 text-xs text-text-light-muted">
                                    <li><a href="#" className="block py-1 hover:text-primary">HiTalent</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("company")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "company"}
                        >
                            Company
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "company" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "company" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 rounded-lg mb-2">
                                <ul className="space-y-2 text-xs text-text-light-muted">
                                    <li><Link href="/company" className="block py-1 hover:text-primary">About Us</Link></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">Portfolio</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">Careers</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">Our Journey</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Kreasi Academy */}
                    <div className="border-b border-gray-50">
                        <button
                            onClick={() => toggleMobileDropdown("academy")}
                            className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                            aria-expanded={activeMobileDropdown === "academy"}
                        >
                            Kreasi Academy
                            <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "academy" ? "rotate-180" : ""}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "academy" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-gray-50 p-4 rounded-lg mb-2">
                                <ul className="space-y-2 text-xs text-text-light-muted">
                                    <li><a href="#" className="block py-1 hover:text-primary">After Office Academy</a></li>
                                    <li><a href="#" className="block py-1 hover:text-primary">Impact Academy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="block px-3 py-4 text-sm font-medium text-text-light hover:text-primary"
                    >
                        Digital Marketing
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