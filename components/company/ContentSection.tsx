import React from "react";

interface ContentSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string; // For background color overrides
}

export default function ContentSection({ title, children, className = "bg-background-light" }: ContentSectionProps) {
    return (
        <section className={`py-24 ${className}`}>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">
                    {title}
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-body">
                    {children}
                </div>
            </div>
        </section>
    );
}
