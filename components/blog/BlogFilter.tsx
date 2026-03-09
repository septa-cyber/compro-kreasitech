"use client";

import React, { useState, useRef, useEffect } from "react";

interface Category {
    name: string;
    value: string;
}

interface BlogFilterProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    sortBy: string;
    onSortChange: (sort: string) => void;
}

export default function BlogFilter({
    categories,
    activeCategory,
    onCategoryChange,
    sortBy,
    onSortChange
}: BlogFilterProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200">
                {/* Category Tabs */}
                <div className="flex gap-1 sm:gap-2 overflow-x-auto w-full sm:w-auto scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => onCategoryChange(category.value)}
                            className={`px-4 py-4 whitespace-nowrap text-sm font-medium font-montserrat transition-colors relative ${activeCategory === category.value
                                ? "text-text-light font-semibold"
                                : "text-gray-500 hover:text-gray-700 font-medium"
                                }`}
                        >
                            {category.name}
                            {/* Active indicator line */}
                            {activeCategory === category.value && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Sort dropdown */}
                <div className="hidden sm:block py-2 relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 text-sm font-medium font-montserrat text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                        {sortBy === "latest" ? "Terbaru" : "Terlama"}
                        <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-1 overflow-hidden animate-in fade-in zoom-in duration-200">
                            <button
                                onClick={() => {
                                    onSortChange("latest");
                                    setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${sortBy === "latest" ? "text-violet-600 bg-violet-50/50" : "text-gray-600"}`}
                            >
                                Terbaru
                            </button>
                            <button
                                onClick={() => {
                                    onSortChange("oldest");
                                    setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${sortBy === "oldest" ? "text-violet-600 bg-violet-50/50" : "text-gray-600"}`}
                            >
                                Terlama
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

