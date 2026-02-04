import React from 'react';
import Link from 'next/link';

export default function TaaSCTA() {
    return (
        <section className="py-24 bg-gray-100 flex flex-col justify-start items-center gap-24 overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
                <div className="w-full flex flex-col justify-start items-center gap-8">
                    <div className="w-full flex flex-col justify-start items-center gap-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-medium font-montserrat text-text-light leading-tight">
                            Comprehensive Digital<br />Solutions for Every Need
                        </h2>
                        <p className="text-sm sm:text-base font-normal font-montserrat text-text-light-muted">
                            From web development to marketing,<br />we tailor solutions that help your business grow.
                        </p>
                    </div>
                </div>
                <div className="inline-flex justify-start items-start gap-8">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors"
                    >
                        <span className="text-gray-100 text-base font-medium font-montserrat">
                            Hubungi Kami
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
