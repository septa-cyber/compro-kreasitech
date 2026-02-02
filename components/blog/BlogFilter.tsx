"use client";

import React from "react";

interface Category {
    name: string;
    value: string;
}

interface BlogFilterProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function BlogFilter({ categories, activeCategory, onCategoryChange }: BlogFilterProps) {
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
                                    ? "text-text-light"
                                    : "text-gray-500 hover:text-gray-700"
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

                {/* Sort dropdown (optional) */}
                <div className="hidden sm:block py-2">
                    <button className="flex items-center gap-2 text-sm font-medium font-montserrat text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
                        Terbaru
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
