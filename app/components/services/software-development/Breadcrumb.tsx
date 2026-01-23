import React from "react";
import Link from "next/link";

export default function Breadcrumb() {
    return (
        <section className="bg-[#F4F4F7] w-full pt-28 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex text-xs text-gray-500 font-body">
                    <Link className="hover:text-primary" href="#">Services</Link>
                    <span className="mx-2">→</span>
                    <span className="font-medium text-gray-800">Software Development</span>
                </nav>
            </div>
        </section>
    );
}
