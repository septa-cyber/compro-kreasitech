"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface FormData {
    name: string;
    email: string;
    subject: string;
    purpose: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    purpose?: string;
    message?: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        purpose: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const purposeOptions = [
        { value: "", label: "Pilih tujuan pesan" },
        { value: "informasi", label: "Informasi Umum" },
        { value: "kerjasama", label: "Kerja Sama / Partnership" },
        { value: "konsultasi", label: "Konsultasi Proyek" },
        { value: "dukungan", label: "Dukungan Teknis" },
        { value: "karir", label: "Karir & Lowongan" },
        { value: "lainnya", label: "Lainnya" },
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Nama wajib diisi";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email wajib diisi";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Format email tidak valid";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject wajib diisi";
        }

        if (!formData.purpose) {
            newErrors.purpose = "Pilih tujuan pesan";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Pesan wajib diisi";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Pesan minimal 10 karakter";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate API call - replace with actual email API endpoint
            await new Promise(resolve => setTimeout(resolve, 1500));

            // For now, we'll use mailto as fallback
            const mailtoLink = `mailto:marketing@kreasi.tech?subject=${encodeURIComponent(`[${formData.purpose}] ${formData.subject}`)}&body=${encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\nTujuan: ${purposeOptions.find(p => p.value === formData.purpose)?.label}\n\nPesan:\n${formData.message}`)}`;

            window.location.href = mailtoLink;

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                purpose: "",
                message: "",
            });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#F4F4F7] text-gray-800 transition-colors duration-300 min-h-screen">
            <Navbar />
            <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                { label: "Home", href: "/" },
                { label: "Kontak Kami", href: "/contact" }
            ]} />

            {/* Hero Section */}
            <section className="pt-12 pb-8 bg-[#F4F4F7]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-montserrat leading-tight text-text-light mb-6">
                        Kontak <span className="text-violet-600 font-semibold">Kami</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 font-montserrat">
                        Ada pertanyaan, ide kolaborasi, atau butuh bantuan? Isi form di bawah dan tim kami akan segera menghubungi Anda.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20 bg-[#F4F4F7]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-xl font-semibold font-montserrat text-text-light mb-6">
                                    Kirim Pesan
                                </h2>

                                {/* Success Message */}
                                {submitStatus === "success" && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <p className="text-green-700 font-montserrat text-sm">
                                                Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitStatus === "error" && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <p className="text-red-700 font-montserrat text-sm">
                                                Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium font-montserrat text-gray-700 mb-2">
                                                Nama Lengkap <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Masukkan nama Anda"
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:ring-violet-500'} focus:outline-none focus:ring-2 focus:border-transparent font-montserrat text-sm transition-all`}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-500 font-montserrat">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium font-montserrat text-gray-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="email@contoh.com"
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:ring-violet-500'} focus:outline-none focus:ring-2 focus:border-transparent font-montserrat text-sm transition-all`}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-xs text-red-500 font-montserrat">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject & Purpose Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Subject */}
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium font-montserrat text-gray-700 mb-2">
                                                Subject <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Topik pesan Anda"
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:ring-violet-500'} focus:outline-none focus:ring-2 focus:border-transparent font-montserrat text-sm transition-all`}
                                            />
                                            {errors.subject && (
                                                <p className="mt-1 text-xs text-red-500 font-montserrat">{errors.subject}</p>
                                            )}
                                        </div>

                                        {/* Purpose Dropdown */}
                                        <div>
                                            <label htmlFor="purpose" className="block text-sm font-medium font-montserrat text-gray-700 mb-2">
                                                Tujuan Pesan <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="purpose"
                                                name="purpose"
                                                value={formData.purpose}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl border ${errors.purpose ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:ring-violet-500'} focus:outline-none focus:ring-2 focus:border-transparent font-montserrat text-sm transition-all bg-white appearance-none cursor-pointer`}
                                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                                            >
                                                {purposeOptions.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.purpose && (
                                                <p className="mt-1 text-xs text-red-500 font-montserrat">{errors.purpose}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium font-montserrat text-gray-700 mb-2">
                                            Isi Pesan <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tulis pesan Anda di sini..."
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 focus:ring-red-500' : 'border-gray-200 focus:ring-violet-500'} focus:outline-none focus:ring-2 focus:border-transparent font-montserrat text-sm transition-all resize-none`}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-xs text-red-500 font-montserrat">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full sm:w-auto px-8 py-4 bg-violet-600 rounded-xl flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span className="text-white text-base font-medium font-montserrat">Mengirim...</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                <span className="text-white text-base font-medium font-montserrat">Kirim Pesan</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Quick Contact */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-semibold font-montserrat text-text-light mb-6">
                                    Hubungi Langsung
                                </h3>
                                <div className="space-y-5">
                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/6288880888877?text=Halo%20Kreasitech%2C%20saya%20ingin%20bertanya"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-montserrat">WhatsApp</p>
                                            <p className="text-base font-medium text-text-light font-montserrat">+62 888-8088-877</p>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href="mailto:marketing@kreasi.tech"
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                                            <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-montserrat">Email</p>
                                            <p className="text-base font-medium text-text-light font-montserrat">marketing@kreasi.tech</p>
                                        </div>
                                    </a>

                                    {/* Location */}
                                    <a
                                        href="https://maps.app.goo.gl/k3xF8N7zV9fXBaEn6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-montserrat">Lokasi</p>
                                            <p className="text-base font-medium text-text-light font-montserrat leading-tight">Sinduadi, Mlati, Sleman, DIY</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-semibold font-montserrat text-text-light mb-6">
                                    Jam Operasional
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 font-montserrat text-sm">Senin - Jumat</span>
                                        <span className="text-text-light font-medium font-montserrat text-sm">09:00 - 18:00 WIB</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 font-montserrat text-sm">Sabtu - Minggu</span>
                                        <span className="text-gray-400 font-medium font-montserrat text-sm">Tutup</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-violet-800 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-semibold font-montserrat text-white mb-4">
                                    Ikuti Kami
                                </h3>
                                <p className="text-white/70 font-montserrat text-sm mb-6">
                                    Dapatkan update terbaru seputar teknologi dan tips bisnis digital.
                                </p>
                                <div className="flex gap-3">
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

