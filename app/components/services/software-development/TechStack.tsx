"use client";
import React from "react";
import Image from "next/image";

export default function TechStack() {

    const [isTechStackHovered, setIsTechStackHovered] = React.useState(false);

    const techStackLogos = [
        "/assets/images/LOGO TECH STACK/LOGO TECH/Android Studio.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Docker.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Elastic.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Figma.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Flutter.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/GitHub.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Gitlab.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Golang.jpg",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Java spring boot.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Java.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Jenkins.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/kubernetes.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Laravel-PHP.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/MariaDB.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/MobaXtrem.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Mysql_logo.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/NET.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/NextJS.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/NodeJS.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/PostgreSQL.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Postman.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Python.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/ReactJS.png",
        "/assets/images/LOGO TECH STACK/LOGO TECH/SQLserver.jpg",
        "/assets/images/LOGO TECH STACK/LOGO TECH/Swagger.jpeg",
    ];

    return (
        <section className="relative lg:pb-20 lg:pt-20 md:pb-16 md:pt-16 sm:pb-12 sm:pt-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-medium font-montserrat text-text-light text-center">
                    Tech Stack yang Kami Gunakan
                </h2>
            </div>

            {/* Tech Stack Marquee */}
            <div className="relative">
                <div
                    className="w-full overflow-hidden flex items-center px-4 pb-4 pt-4 z-10"
                    onMouseEnter={() => setIsTechStackHovered(true)}
                    onMouseLeave={() => setIsTechStackHovered(false)}
                >
                    <div
                        className="flex space-x-12 shrink-0 animate-marquee-reverse-slow items-center"
                        style={{ animationPlayState: isTechStackHovered ? 'paused' : 'running' }}
                    >
                        {/* Duplicate content for marquee effect */}
                        {[...techStackLogos, ...techStackLogos, ...techStackLogos].map((logo, index) => (
                            <div key={index} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500">
                                <Image src={logo} alt="Tech Stack" width={100} height={100} className="h-12 w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
