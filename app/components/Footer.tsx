import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#F4F4F7] pb-12 pt-0 px-4">
            <div className="w-full max-w-[1400px] mx-auto bg-white rounded-lg p-8 lg:p-12 shadow-sm flex flex-col justify-start items-start gap-8">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="/assets/images/Logo.svg"
                            alt="Kreasitech Logo"
                            className="h-7 w-auto"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-start items-center gap-6">
                        <div className="flex justify-start items-center gap-2">
                            <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                                <i className="fas fa-map-marker-alt text-violet-600 text-sm"></i>
                            </div>
                            <div className="justify-start text-text-light text-sm font-normal font-montserrat">
                                Jalan Lorong, Gedongan RT01/RW04, Sinduadi, Mlati, Sleman, DIY 55284
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                                <i className="fas fa-phone text-violet-600 text-sm"></i>
                            </div>
                            <div className="justify-start text-text-light text-sm font-normal font-montserrat">
                                (62) 888-8088-877
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                                <i className="far fa-envelope text-violet-600 text-sm"></i>
                            </div>
                            <div className="justify-start text-text-light text-sm font-normal font-montserrat">
                                marketing@kreasi.tech
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />
                <div className="w-full grid grid-cols-2 lg:flex lg:flex-row justify-start items-start gap-y-10 gap-x-8 lg:gap-12 xl:gap-44">
                    <div className="inline-flex flex-col justify-center items-start gap-6 order-1 lg:order-1">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            Find a Hire
                        </div>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Finance & Accounting
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Customer Support, Ops, & VAs
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Sales & Marketing
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Product, Design, Data, & Engineering
                        </a>
                    </div>
                    <div className="inline-flex flex-col justify-center items-start gap-6 order-3 lg:order-2">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            PRODUCTS
                        </div>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            HiTalent
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            IDAS SFA
                        </a>
                    </div>
                    <div className="inline-flex flex-col justify-center items-start gap-6 order-4 lg:order-3">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            SERVICES
                        </div>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Find a Hire
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Recruitment
                        </a>
                    </div>
                    <div className="inline-flex flex-col justify-center items-start gap-6 order-2 lg:order-4">
                        <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                            COMPANY
                        </div>
                        <Link href="/company" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            About Us
                        </Link>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Careers
                        </a>
                        <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                            Article
                        </a>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />
                <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6">
                    <div className="flex justify-center lg:justify-start items-center gap-6 order-2 lg:order-1 flex-wrap">
                        <a href="#" className="justify-start text-violet-600 text-xs font-semibold font-montserrat hover:text-primary-dark transition">
                            Terms & Conditions
                        </a>
                        <a href="#" className="justify-start text-violet-600 text-xs font-semibold font-montserrat hover:text-primary-dark transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="justify-start text-violet-600 text-xs font-semibold font-montserrat hover:text-primary-dark transition">
                            Cookie Settings
                        </a>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center gap-6 order-1 lg:order-2">
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="w-5 h-5 relative overflow-hidden text-violet-600 hover:text-primary-dark transition">
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                    </div>
                    <div className="flex justify-center lg:justify-end items-center gap-6 order-3 lg:order-3">
                        <div className="text-center lg:text-right justify-start text-violet-600 text-xs font-semibold font-montserrat">
                            © 2025 KREASITECH. All right reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
