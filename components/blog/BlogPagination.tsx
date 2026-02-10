"use client";

import React from "react";

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
    const getVisiblePages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
                {/* Previous Button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 text-sm font-medium font-montserrat px-3 py-2 rounded-md transition-colors ${currentPage === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Sebelumnya
                </button>

                {/* Page Numbers */}
                <div className="hidden sm:flex items-center gap-1">
                    {getVisiblePages().map((page, index) => (
                        typeof page === 'number' ? (
                            <button
                                key={index}
                                onClick={() => onPageChange(page)}
                                className={`w-10 h-10 rounded-lg font-medium text-sm font-montserrat transition-colors ${currentPage === page
                                        ? 'bg-gray-100 text-text-light'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-text-light'
                                    }`}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className="w-10 h-10 flex items-center justify-center text-gray-400">
                                ...
                            </span>
                        )
                    ))}
                </div>

                {/* Mobile Page Indicator */}
                <span className="sm:hidden text-sm font-montserrat text-gray-500">
                    Halaman {currentPage} dari {totalPages}
                </span>

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 text-sm font-medium font-montserrat px-3 py-2 rounded-md transition-colors ${currentPage === totalPages
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                >
                    Berikutnya
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

