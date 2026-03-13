"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogData";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLink, FaArrowLeft } from "react-icons/fa";
import toast from 'react-hot-toast';

interface ArticleHeaderProps {
    post: BlogPost;
}

export default function ArticleHeader({ post }: ArticleHeaderProps) {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(post.title);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        toast.success("Tautan berhasil disalin!");
    };

    return (
        <section className="bg-white pt-32 pb-8">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-all group font-medium"
                    >
                        <FaArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                        Kembali ke Daftar Artikel
                    </Link>
                </div>

                {/* Title */}
                <h1 className="font-h2 leading-tight pt-8 mb-6">
                    {post.title}
                </h1>

                {/* Meta & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-t border-gray-100 py-6">
                    {/* Date & Category */}
                    {/* Date & Category & Author */}
                    <div className="flex flex-wrap items-center gap-6">
                        <span className={`${post.categoryColor} px-3 py-1 font-body-xs font-semibold tracking-wide rounded-[4px]`}>
                            {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-gray-600 font-body-sm">
                            <div className="flex items-center gap-2">
                                {post.author?.avatar ? (
                                    <img src={post.author.avatar} alt={post.author.name || "Author"} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold border border-violet-200">
                                        {post.author?.name ? post.author.name.charAt(0).toUpperCase() : "A"}
                                    </div>
                                )}
                                <span className="font-medium">{post.author?.name || "Admin"}</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <span>{post.date}</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <span className="font-body-sm font-medium text-gray-500">Bagikan:</span>
                        <div className="flex items-center gap-3">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white hover:bg-[#1877F2] transition-colors"
                            >
                                <FaFacebookF size={14} />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white hover:bg-[#1DA1F2] transition-colors"
                            >
                                <FaTwitter size={14} />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white hover:bg-[#0A66C2] transition-colors"
                            >
                                <FaLinkedinIn size={14} />
                            </a>
                            <a
                                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white hover:bg-[#25D366] transition-colors"
                            >
                                <FaWhatsapp size={15} />
                            </a>
                            <button
                                onClick={handleCopyLink}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white hover:bg-gray-700 transition-colors"
                                title="Salin Tautan"
                            >
                                <FaLink size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

