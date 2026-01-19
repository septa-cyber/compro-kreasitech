import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-20">
            <nav className="flex text-xs text-gray-500 dark:text-gray-400 font-body">
                <Link className="hover:text-primary" href="#">Company</Link>
                <span className="mx-2">→</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">About Us</span>
            </nav>
        </div>
    );
}
