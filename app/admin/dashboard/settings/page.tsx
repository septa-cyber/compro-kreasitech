"use client";

import React, { useState } from 'react';
import { FaGlobe, FaImage, FaStar, FaAddressBook, FaShareAlt, FaInstagram, FaLinkedinIn, FaWhatsapp, FaSave, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function SettingsPage() {
    // General Settings
    const [siteTitle, setSiteTitle] = useState('Kreasitech');
    const [siteDescription, setSiteDescription] = useState('Solusi Digital Terbaik untuk Bisnis Anda');

    // Contact Info
    const [email, setEmail] = useState('marketing@kreasi.tech');
    const [phone, setPhone] = useState('(62) 888-8088-877');
    const [address, setAddress] = useState('Jalan Lorong, Gedongan RT01/RW04, Sinduadi, Mlati, Sleman, DIY 55284');
    const [mapsUrl, setMapsUrl] = useState('https://goo.gl/maps/example');

    // Social Media
    const [instagram, setInstagram] = useState('https://instagram.com/kreasitech');
    const [linkedin, setLinkedin] = useState('https://linkedin.com/company/kreasitech');
    const [twitter, setTwitter] = useState('https://twitter.com/kreasitech');
    const [facebook, setFacebook] = useState('https://facebook.com/kreasitech');
    const [whatsapp, setWhatsapp] = useState('https://wa.me/628888088877');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle save logic here
        alert('Pengaturan berhasil disimpan!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-semibold font-montserrat text-text-light">
                    Pengaturan Website
                </h1>
                <button
                    onClick={handleSave}
                    className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg text-sm transition-colors shadow-glow flex items-center gap-2"
                >
                    <FaSave />
                    <span>Simpan Perubahan</span>
                </button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* General Settings */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaGlobe size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Umum</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Judul Website
                            </label>
                            <input
                                type="text"
                                value={siteTitle}
                                onChange={(e) => setSiteTitle(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Deskripsi Website
                            </label>
                            <textarea
                                value={siteDescription}
                                onChange={(e) => setSiteDescription(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                    Logo
                                </label>
                                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-violet-400 transition-colors cursor-pointer bg-[#F4F4F7]">
                                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-2 flex items-center justify-center text-violet-600">
                                        <FaImage size={20} />
                                    </div>
                                    <span className="text-xs text-gray-500">Upload Logo</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                    Favicon
                                </label>
                                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-violet-400 transition-colors cursor-pointer bg-[#F4F4F7]">
                                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-2 flex items-center justify-center text-violet-600">
                                        <FaStar size={20} />
                                    </div>
                                    <span className="text-xs text-gray-500">Upload Favicon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaAddressBook size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Informasi Kontak</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Email Resmi
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Nomor Telepon / WhatsApp
                            </label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Alamat Kantor
                            </label>
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                            <FaShareAlt size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-text-light font-montserrat">Sosial Media</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Instagram URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaInstagram className="text-gray-400" size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={instagram}
                                    onChange={(e) => setInstagram(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                LinkedIn URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLinkedinIn className="text-gray-400" size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Twitter URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaTwitter className="text-gray-400" size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={twitter}
                                    onChange={(e) => setTwitter(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                Facebook URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaFacebook className="text-gray-400" size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-montserrat mb-2">
                                WhatsApp URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaWhatsapp className="text-gray-400" size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-[#F4F4F7] border border-gray-200 rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

