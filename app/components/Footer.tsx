import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full bg-[#F4F4F7] pb-12 pt-0 px-4">
            <div className="w-full max-w-[1400px] mx-auto bg-white rounded-lg p-8 lg:p-12 shadow-sm flex flex-col justify-start items-start gap-8">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="/assets/images/Logo.svg"
                            alt="Kreasitech Logo"
                            className="h-7 w-auto"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-start items-center gap-6">
                        <div className="flex justify-start items-center gap-2">
                            <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                                <FaMapMarkerAlt className="text-violet-600 text-sm" />
                            </div>
                            <div className="justify-start text-text-light text-sm font-normal font-montserrat">
                                Jalan Lorong, Gedongan RT01/RW04, Sinduadi, Mlati, Sleman, DIY 55284
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                                <FaPhone className="text-violet-600 text-sm" />
                            </div>
                            <div className="justify-start text-text-light text-sm font-normal font-montserrat">
                                (62) 888-8088-877
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                                <FaRegEnvelope className="text-violet-600 text-sm" />
                            </div>
                            <div className="justify-start text-text-light text-sm font-normal font-montserrat">
                                marketing@kreasi.tech
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-8">
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            Layanan
                        </div>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Talent as a Service
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Software Development
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Academy
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Digital Marketing
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            Perusahaan
                        </div>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Tentang Kami
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Portfolio
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            Produk
                        </div>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            HiTalent
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            IDAS SFA
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            Lain-lainnya
                        </div>
                        <Link href="/company" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Karier
                        </Link>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Artikel
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Kontak Kami
                        </a>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6">
                    <div className="flex justify-center lg:justify-start items-center gap-6 order-2 lg:order-1 flex-wrap">
                        <a href="#" className="justify-start text-violet-600 text-xs font-semibold font-montserrat hover:text-primary-dark transition">
                            Syarat & Ketentuan
                        </a>
                        <a href="#" className="justify-start text-violet-600 text-xs font-semibold font-montserrat hover:text-primary-dark transition">
                            Kebijakan Privasi
                        </a>
                        <a href="#" className="justify-start text-violet-600 text-xs font-semibold font-montserrat hover:text-primary-dark transition">
                            Pengaturan Cookie
                        </a>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center gap-6 order-1 lg:order-2">
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition flex items-center justify-center">
                            <FaLinkedin className="text-xl" />
                        </a>
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition flex items-center justify-center">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition flex items-center justify-center">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition flex items-center justify-center">
                            <FaFacebook className="text-xl" />
                        </a>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center gap-6 order-3 lg:order-3">
                        <div className="text-center lg:text-right justify-start text-violet-600 text-xs font-semibold font-montserrat">
                            © 2025 KREASITECH. Hak cipta dilindungi.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
