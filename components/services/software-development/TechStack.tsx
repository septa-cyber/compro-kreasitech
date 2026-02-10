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
            {/* Tech Stack Marquee */}
            <div className="relative">
                <div
                    className="w-full overflow-hidden py-4 marquee-container"
                    onMouseEnter={() => setIsTechStackHovered(true)}
                    onMouseLeave={() => setIsTechStackHovered(false)}
                >
                    <div
                        className="flex flex-nowrap space-x-12 min-w-max animate-marquee-reverse hover:[animation-play-state:paused]"
                    >
                        {/* Perfect loop with 2 sets of logos */}
                        {[...techStackLogos, ...techStackLogos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center gap-2 opacity-100 transition duration-500">
                                <Image src={logo} alt="Tech Stack" width={100} height={40} className="h-[40px] w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

