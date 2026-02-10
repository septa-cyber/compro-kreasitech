"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Check for expired session message
    useEffect(() => {
        if (searchParams.get('expired') === 'true') {
            setError('Sesi Anda telah berakhir. Silakan login kembali.');
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Login gagal');
                setIsLoading(false);
                return;
            }

            // Redirect to dashboard or the original requested page
            const redirectUrl = searchParams.get('redirect') || '/admin/dashboard';
            router.push(redirectUrl);
        } catch (err) {
            setError('Terjadi kesalahan. Silakan coba lagi.');
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-gray-100 p-8 lg:p-10">

                {/* Mobile Logo */}
                <div className="lg:hidden flex justify-center mb-8">
                    <img
                        src="/assets/images/Logo.svg"
                        alt="Kreasitech Logo"
                        className="h-8 w-auto"
                    />
                </div>

                {/* Form Header */}
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold font-montserrat text-text-light mb-2">
                        Masuk ke Admin Panel
                    </h2>
                    <p className="text-sm text-gray-500 font-montserrat">
                        Masukkan kredensial Anda untuk melanjutkan
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                        <i className="fas fa-exclamation-circle text-red-500"></i>
                        <span className="text-sm text-red-600 font-montserrat">{error}</span>
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-light font-montserrat mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i className="far fa-envelope text-gray-400"></i>
                            </div>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-[#F4F4F7] border border-gray-200 rounded-lg text-text-light font-montserrat text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300"
                                placeholder="admin@kreasi.tech"
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-text-light font-montserrat mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i className="fas fa-lock text-gray-400"></i>
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-11 pr-12 py-3 bg-[#F4F4F7] border border-gray-200 rounded-lg text-text-light font-montserrat text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300"
                                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-violet-600 transition-colors"
                                disabled={isLoading}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
                                disabled={isLoading}
                            />
                            <span className="text-sm text-gray-500 font-montserrat">Ingat saya</span>
                        </label>
                        <Link
                            href="#"
                            className="text-sm text-violet-600 font-medium font-montserrat hover:text-violet-700 transition-colors"
                        >
                            Lupa password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 disabled:cursor-not-allowed text-white font-medium font-montserrat rounded-lg shadow-glow hover:shadow-[0px_4px_25px_0px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <i className="fas fa-spinner fa-spin"></i>
                                <span>Memproses...</span>
                            </>
                        ) : (
                            <>
                                <span>Masuk</span>
                                <i className="fas fa-arrow-right"></i>
                            </>
                        )}
                    </button>
                </form>

                {/* Back to Home */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 font-montserrat hover:text-violet-600 transition-colors inline-flex items-center gap-2"
                    >
                        <i className="fas fa-arrow-left text-xs"></i>
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center">
                <p className="text-xs text-gray-400 font-montserrat">
                    Â© 2025 KREASITECH. Hak cipta dilindungi.
                </p>
            </div>
        </div>
    );
}

export default function AdminLoginPage() {
    return (
        <div className="min-h-screen bg-[#F4F4F7] flex items-center justify-center relative overflow-hidden">
            {/* Geometric Background Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <img
                    src="/assets/images/Lines.svg"
                    alt=""
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                {/* Left Side - Illustration/Branding (Hidden on mobile) */}
                <div className="hidden lg:flex flex-col items-center justify-center flex-1 text-center">
                    <div className="mb-8">
                        <img
                            src="/assets/images/Logo.svg"
                            alt="Kreasitech Logo"
                            className="h-12 w-auto"
                        />
                    </div>
                    <h1 className="text-4xl font-medium font-montserrat text-text-light mb-4">
                        Selamat Datang, <span className="text-violet-600 font-semibold">Admin</span>
                    </h1>
                    <p className="text-base text-gray-500 font-montserrat max-w-md">
                        Kelola konten website Kreasitech dengan mudah dan efisien melalui panel admin.
                    </p>

                    {/* Decorative Elements */}
                    <div className="mt-12 flex gap-6">
                        <div className="p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-gray-100 animate-float-slow">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                                <i className="fas fa-shield-alt text-violet-600 text-lg"></i>
                            </div>
                        </div>
                        <div className="p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-gray-100 animate-float-medium">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                                <i className="fas fa-cog text-violet-600 text-lg"></i>
                            </div>
                        </div>
                        <div className="p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-gray-100 animate-float-fast">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                                <i className="fas fa-chart-line text-violet-600 text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form Wrapped in Suspense */}
                <Suspense fallback={
                    <div className="w-full max-w-md flex items-center justify-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
                    </div>
                }>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    );
}

