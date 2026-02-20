"use client";
import React from "react";
import Image from "next/image";

export default function PartnersSection() {
    const [isHovered, setIsHovered] = React.useState(false);

    const [partnerLogos, setPartnerLogos] = React.useState<string[]>([]);

    React.useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch('/api/partners');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await res.text();
                    console.error("Received non-JSON response:", text.substring(0, 100)); // Log first 100 chars
                    return; // Stop processing
                }

                const data = await res.json();
                const logos = data
                    .filter((p: any) => p.status === 'active' && p.logo)
                    .map((p: any) => p.logo);
                setPartnerLogos(logos);
            } catch (error) {
                console.error('Failed to fetch partners:', error);
            }
        };

        fetchPartners();
    }, []);

    return (
        <section className="py-10 bg-gray-100 border-y border-gray-200">
            <div className="max-w-[1200px] mx-auto px-4 text-center mb-6">
                <span className="font-body-sm font-medium text-gray-500 uppercase tracking-wider">
                    Dipercaya oleh bisnis terkemuka seperti:
                </span>
            </div>
            <div
                className="overflow-hidden relative w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="flex space-x-16 items-center animate-marquee whitespace-nowrap px-4 justify-center"
                    style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                >
                    {/* Duplicate content for seamless marquee */}
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
                        >
                            <Image
                                src={logo}
                                alt={`Partner ${(index % partnerLogos.length) + 1}`}
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                                style={{ width: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

