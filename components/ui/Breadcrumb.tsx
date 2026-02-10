import React from "react";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href.startsWith("http") ? item.href : `https://kreasitech.com${item.href}`
        }))
    };

    return (
        <section className={`w-full pt-28 pb-4`}>
            <div className={`max-w-[1200px] mx-auto ${className}`}>
                <nav className="flex text-xs text-gray-500 font-body items-center">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <MdChevronRight className="mx-2 w-4 h-4 text-gray-400" />}
                            {index === items.length - 1 ? (
                                <span className="font-medium text-gray-800">{item.label}</span>
                            ) : (
                                <Link className="hover:text-primary hover:underline transition-colors" href={item.href}>
                                    {item.label}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </div>
        </section>
    );
}

