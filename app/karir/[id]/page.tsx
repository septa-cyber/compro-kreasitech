"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { JobPosting } from "@/lib/types";

export default function JobDetailPage() {
    const params = useParams();
    const router = useRouter();
    const jobId = params.id as string;

    const [job, setJob] = useState<JobPosting | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [siteSettings, setSiteSettings] = useState<any>({});

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${jobId}`);
                if (res.ok) {
                    const data = await res.json();
                    setJob(data);
                }
            } catch (error) {
                console.error("Failed to fetch job detail:", error);
            } finally {
                setIsLoading(false);
            }
        };
        const fetchSettings = async () => {
            try {
                const response = await fetch('/api/settings');
                if (response.ok) {
                    const data = await response.json();
                    setSiteSettings(data);
                }
            } catch (error) {
                console.error('Failed to fetch settings:', error);
            }
        };
        if (jobId) {
            fetchJob();
            fetchSettings();
        }
    }, [jobId]);

    if (isLoading) {
        return (
            <div className="bg-[#F4F4F7] text-gray-800 min-h-screen">
                <Navbar />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <p className="font-body text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="bg-[#F4F4F7] text-gray-800 min-h-screen">
                <Navbar />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="font-h2 mb-4">Job Not Found</h1>
                    <button
                        onClick={() => router.push('/karir')}
                        className="px-6 py-3 bg-violet-600 text-white rounded-xl font-btn hover:bg-violet-700 transition-colors"
                    >
                        Back to Jobs
                    </button>
                </div>
            </div>
        );
    }

    // Fallback for missing icon or default colors
    const iconContent = job.icon || "💼";
    const iconBg = job.iconBg || "bg-violet-100";

    const jsonLd = job ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "datePosted": job.postedDate || new Date().toISOString(),
        "validThrough": job.expiredDate || "2026-12-31T23:59:59Z", // Default or specific
        "employmentType": job.type === "Full-time" ? "FULL_TIME" : job.type === "Contract" ? "CONTRACTOR" : "OTHER",
        "hiringOrganization": {
            "@type": "Organization",
            "name": job.company || "Kreasitech",
            "sameAs": "https://kreasitech.com",
            "logo": job.logo_url || "https://kreasitech.com/assets/images/Logo.svg"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": job.location || "Sleman",
                "addressRegion": "DIY",
                "addressCountry": "ID"
            }
        }
    } : null;

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kreasitech.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Karir",
                "item": "https://kreasitech.com/karir"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": job.title,
                "item": `https://kreasitech.com/karir/${job.id}`
            }
        ]
    };

    return (
        <div className="bg-[#F4F4F7] text-gray-800 transition-colors duration-300 min-h-screen">
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Navbar />
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4">
                <button
                    onClick={() => router.push('/karir')}
                    className="flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium font-body transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke Lowongan
                </button>
            </div>
            {/* Main Content */}
            <section className="py-6 bg-[#F4F4F7]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Job Header */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 text-4xl overflow-hidden`}>
                                        {job.logo_url ? (
                                            <img src={job.logo_url} alt={job.title} className="w-full h-full object-cover" />
                                        ) : (
                                            iconContent
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-3xl font-bold font-montserrat text-gray-900 mb-3">
                                            {job.title}
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-4 text-gray-600 font-body text-sm">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span>{job.company || "KreasiTech"}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Posted {job.postedDate ? new Date(job.postedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : "Recently"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm font-medium font-montserrat">
                                        {job.type}
                                    </span>
                                    <span className={`px-3 py-1.5 rounded-lg text-sm font-medium font-montserrat ${job.location === 'Remote' ? 'bg-green-50 text-green-700' :
                                        job.location === 'On-site' ? 'bg-orange-50 text-orange-700' :
                                            'bg-blue-50 text-blue-700'
                                        }`}>
                                        {job.location}
                                    </span>
                                    {job.location_type && (
                                        <span className={`px-3 py-1.5 rounded-lg text-sm font-medium font-montserrat ${job.location_type === 'Remote' ? 'bg-green-50 text-green-700' :
                                            job.location_type === 'Hybrid' ? 'bg-indigo-50 text-indigo-700' :
                                                'bg-violet-50 text-violet-700'
                                            }`}>
                                            {job.location_type}
                                        </span>
                                    )}
                                    {job.category && (
                                        <span className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium font-montserrat">
                                            {job.category}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-8">
                                    <p className="text-gray-700 leading-relaxed font-body text-base whitespace-pre-line">
                                        {job.description}
                                    </p>

                                    {/* Responsibilities */}
                                    {job.responsibilities && job.responsibilities.length > 0 && (
                                        <div className="mt-8 pt-8 border-t border-gray-100">
                                            <h2 className="text-xl font-bold font-montserrat text-gray-900 mb-5">
                                                Tanggung Jawab
                                            </h2>
                                            <ul className="space-y-4">
                                                {job.responsibilities.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-700 font-body leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Requirements */}
                                    {job.requirements && job.requirements.length > 0 && (
                                        <div className="mt-8 pt-8 border-t border-gray-100">
                                            <h2 className="text-xl font-bold font-montserrat text-gray-900 mb-5">
                                                Kualifikasi
                                            </h2>
                                            <ul className="space-y-4">
                                                {job.requirements.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-700 font-body leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Benefits */}
                                    {job.benefits && job.benefits.length > 0 && (
                                        <div className="mt-8 pt-8 border-t border-gray-100">
                                            <h2 className="text-xl font-bold font-montserrat text-gray-900 mb-5">
                                                Benefit & Fasilitas
                                            </h2>
                                            <ul className="space-y-4">
                                                {job.benefits.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-700 font-body leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-96 flex-shrink-0">
                            <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-32">
                                <h2 className="text-xl font-bold font-montserrat text-gray-900 mb-5">
                                    Informasi Lowongan
                                </h2>

                                <div className="space-y-5 mb-8">
                                    <div>
                                        <p className="font-body-sm text-gray-500 mb-1">Salary Range</p>
                                        <p className="text-gray-900 font-semibold font-body text-base">{job.salary || "Negosiasi"}</p>
                                    </div>
                                    <div>
                                        <p className="font-body-sm text-gray-500 mb-1">Job Type</p>
                                        <p className="text-gray-900 font-medium font-body text-base">{job.type}</p>
                                    </div>
                                    <div>
                                        <p className="font-body-sm text-gray-500 mb-1">Location</p>
                                        <p className="text-gray-900 font-medium font-body text-base">{job.location}</p>
                                    </div>
                                    {job.experience && (
                                        <div>
                                            <p className="font-body-sm text-gray-500 mb-1">Experience</p>
                                            <p className="text-gray-900 font-medium font-body text-base">{job.experience}</p>
                                        </div>
                                    )}
                                    {job.education && (
                                        <div>
                                            <p className="font-body-sm text-gray-500 mb-1">Education</p>
                                            <p className="text-gray-900 font-medium font-body text-base">{job.education}</p>
                                        </div>
                                    )}
                                </div>

                                {(() => {
                                    const rawUrl = job.whatsapp_url || siteSettings.whatsapp || '';
                                    const isWhatsApp = !rawUrl || rawUrl.includes('wa.me') || rawUrl.includes('whatsapp') || (!rawUrl.startsWith('http') && /^\+?\d+$/.test(rawUrl.replace(/\D/g, '')));
                                    const isLinkedIn = rawUrl.includes('linkedin.com');
                                    const isJobstreet = rawUrl.includes('jobstreet');
                                    const isGlints = rawUrl.includes('glints');

                                    let buttonText = "Apply Now";
                                    if (isWhatsApp) buttonText = "Apply via WhatsApp";
                                    else if (isLinkedIn) buttonText = "Apply via LinkedIn";
                                    else if (isJobstreet) buttonText = "Apply via Jobstreet";
                                    else if (isGlints) buttonText = "Apply via Glints";

                                    let icon = (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    );

                                    if (isWhatsApp) {
                                        icon = (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        );
                                    } else if (isLinkedIn) {
                                        icon = (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        );
                                    }

                                    const handleClick = () => {
                                        if (isWhatsApp) {
                                            const phone = rawUrl.includes('wa.me') || rawUrl.includes('whatsapp')
                                                ? rawUrl.replace(/\D/g, '') // Extract just numbers if URL provided
                                                : (siteSettings.whatsapp?.replace(/\D/g, '') || '6288880888877');
                                            const text = `Halo Kreasitech, saya tertarik dengan posisi ${job.title}`;
                                            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
                                        } else {
                                            window.open(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`, '_blank');
                                        }
                                    };

                                    let buttonClass = "bg-violet-600 hover:bg-violet-700";
                                    if (isLinkedIn) buttonClass = "bg-[#0A66C2] hover:bg-[#004182]";

                                    return (
                                        <button
                                            onClick={handleClick}
                                            className={`w-full px-6 py-4 text-white rounded-xl font-btn transition-colors flex items-center justify-center gap-3 mb-3 ${buttonClass}`}
                                        >
                                            {icon}
                                            {buttonText}
                                        </button>
                                    );
                                })()}



                                {/* Share */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="font-body-sm text-gray-500 mb-3">Share this job:</p>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                                            className="flex-1 p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${job.title} at ${job.company || "KreasiTech"}`, '_blank')}
                                            className="flex-1 p-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${job.title}`, '_blank')}
                                            className="flex-1 p-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
                                        >
                                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
