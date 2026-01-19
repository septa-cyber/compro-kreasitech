import React from "react";

interface ContentSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string; // For background color overrides
}

export default function ContentSection({ title, children, className = "bg-background-light dark:bg-background-dark" }: ContentSectionProps) {
    return (
        <section className={`py-24 ${className}`}>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-display text-4xl font-semibold mb-10 text-gray-900 dark:text-white">
                    {title}
                </h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-body">
                    {children}
                </div>
            </div>
        </section>
    );
}
