"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(prev => prev === name ? null : name);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] rounded-2xl transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img
                src="/assets/images/Logo.svg"
                alt="Kreasitech Logo"
                className="h-6 lg:h-7 xl:h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-8">
              <div className="flex items-center gap-3 xl:gap-8 text-[10px] xl:text-xs font-medium font-montserrat text-text-light dark:text-text-dark">
                {/* Find a Talent - Mega Menu Trigger */}
                <div className="group h-full flex items-center">
                  <button className="flex items-center gap-2 hover:text-primary transition py-6 border-b-2 border-transparent group-hover:border-primary whitespace-nowrap">
                    Find a Talent <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-0 w-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white dark:bg-background-dark-sec border-t border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden">
                      <div className="max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-4 gap-8">
                        <div>
                          <h4 className="font-bold text-sm mb-4 dark:text-white">Finance & Accounting</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted dark:text-text-dark-muted">
                            <li><a href="#" className="hover:text-primary transition block">Bookkeeper</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Financial Analyst</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Tax Specialist</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Accountant</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-4 dark:text-white">Customer Support, Ops, & VAs</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted dark:text-text-dark-muted">
                            <li><a href="#" className="hover:text-primary transition block">Virtual Assistant</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Create Support</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Data Entry Specialist</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Operations Manager</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-4 dark:text-white">Sales & Marketing</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted dark:text-text-dark-muted">
                            <li><a href="#" className="hover:text-primary transition block">Digital Marketer</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Social Media Manager</a></li>
                            <li><a href="#" className="hover:text-primary transition block">SEO Specialist</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Sales Representative</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-4 dark:text-white">IT, Data, and Engineering</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted dark:text-text-dark-muted">
                            <li><a href="#" className="hover:text-primary transition block">UI/UX Designer</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Frontend Developer</a></li>
                            <li><a href="#" className="hover:text-primary transition block">Backend Developer</a></li>
                            <li><a href="#" className="hover:text-primary transition block">DevOps Engineer</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="flex items-center gap-2 hover:text-primary transition py-6 border-b-2 border-transparent group-hover:border-primary whitespace-nowrap">
                    Services <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full -left-12 w-max min-w-[500px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white dark:bg-background-dark-sec border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden p-6 grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-sm mb-3 dark:text-white">Talent As a Service</h4>
                        <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                          <li><a href="#" className="hover:text-primary transition block py-1">Head Hunting</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">Staffing</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">Internship</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">Inclusive Talent</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-3 dark:text-white">Software Development</h4>
                        <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                          <li><a href="#" className="hover:text-primary transition block py-1">Specifications & Wireframe</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">UI/UX Design</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">Website Development</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">Mobile App Development</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">MVP Development</a></li>
                          <li><a href="#" className="hover:text-primary transition block py-1">Custom Software Development</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Products - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="flex items-center gap-2 hover:text-primary transition py-6 border-b-2 border-transparent group-hover:border-primary whitespace-nowrap">
                    Products <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white dark:bg-background-dark-sec border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden p-5">
                      <h4 className="font-bold text-sm mb-3 dark:text-white text-left whitespace-nowrap">Products</h4>
                      <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted text-left whitespace-nowrap">
                        <li><a href="#" className="hover:text-primary transition block py-1">Hitalent</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">lorem ipsum</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">lorem ipsum</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">lorem ipsum</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Company - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="flex items-center gap-2 hover:text-primary transition py-6 border-b-2 border-transparent group-hover:border-primary whitespace-nowrap">
                    Company <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white dark:bg-background-dark-sec border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden p-5">
                      <h4 className="font-bold text-sm mb-3 dark:text-white text-left whitespace-nowrap">Company</h4>
                      <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted text-left whitespace-nowrap">
                        <li><a href="#" className="hover:text-primary transition block py-1">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">Portfolio</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">Our Journey</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Kreasi Academy - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="flex items-center gap-2 hover:text-primary transition py-6 border-b-2 border-transparent group-hover:border-primary whitespace-nowrap">
                    Kreasi Academy <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white dark:bg-background-dark-sec border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden p-5">
                      <h4 className="font-bold text-sm mb-3 dark:text-white text-left whitespace-nowrap">Kreasi Academy</h4>
                      <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted text-left whitespace-nowrap">
                        <li><a href="#" className="hover:text-primary transition block py-1">After Office Academy</a></li>
                        <li><a href="#" className="hover:text-primary transition block py-1">Impact Academy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a href="#" className="hover:text-primary transition py-6 border-b-2 border-transparent hover:border-primary whitespace-nowrap">
                  Digital Marketing
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-2 xl:ml-4">
                <a
                  href="#"
                  className="h-8 xl:h-10 px-2 xl:px-4 rounded-lg outline outline-1 outline-violet-600 text-violet-600 text-[10px] xl:text-xs font-semibold font-montserrat flex items-center justify-center hover:bg-violet-50 transition whitespace-nowrap"
                >
                  APPLY FOR JOBS
                </a>
                <a
                  href="#"
                  className="h-8 xl:h-10 px-2 xl:px-4 rounded-lg bg-violet-600 text-white text-[10px] xl:text-xs font-bold font-montserrat flex items-center justify-center hover:bg-violet-700 transition shadow-[0px_4px_20px_0px_rgba(124,58,237,0.4)] whitespace-nowrap"
                >
                  START HIRING
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="text-gray-500 dark:text-gray-300 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 font-montserrat h-auto max-h-[calc(100vh-72px)] overflow-y-auto shadow-lg rounded-b-2xl">
            {/* Find a Talent */}
            <div className="border-b border-gray-50 dark:border-gray-800">
              <button
                onClick={() => toggleMobileDropdown("find-talent")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "find-talent"}
              >
                Find a Talent
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "find-talent" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "find-talent" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 dark:bg-black/20 p-4 space-y-6 rounded-lg mb-2">
                  <div>
                    <h4 className="font-bold text-sm mb-3 dark:text-white">Finance & Accounting</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Bookkeeper</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Financial Analyst</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Tax Specialist</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Accountant</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3 dark:text-white">Customer Support, Ops, & VAs</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Virtual Assistant</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Create Support</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Data Entry Specialist</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Operations Manager</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3 dark:text-white">Sales & Marketing</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Digital Marketer</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Social Media Manager</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">SEO Specialist</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Sales Representative</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3 dark:text-white">IT, Data, and Engineering</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">UI/UX Designer</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Frontend Developer</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Backend Developer</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">DevOps Engineer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="border-b border-gray-50 dark:border-gray-800">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "services"}
              >
                Services
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "services" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "services" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 dark:bg-black/20 p-4 space-y-6 rounded-lg mb-2">
                  <div>
                    <h4 className="font-bold text-sm mb-3 dark:text-white">Talent As a Service</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Head Hunting</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Staffing</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Internship</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Inclusive Talent</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3 dark:text-white">Software Development</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Specifications & Wireframe</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">UI/UX Design</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Website Development</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Mobile App Development</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">MVP Development</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Custom Software Development</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="border-b border-gray-50 dark:border-gray-800">
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "products"}
              >
                Products
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "products" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "products" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg mb-2">
                  <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                    <li><a href="#" className="block py-1 hover:text-primary">Hitalent</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="border-b border-gray-50 dark:border-gray-800">
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "company"}
              >
                Company
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "company" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "company" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg mb-2">
                  <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                    <li><a href="#" className="block py-1 hover:text-primary">About Us</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Portfolio</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Careers</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Our Journey</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kreasi Academy */}
            <div className="border-b border-gray-50 dark:border-gray-800">
              <button
                onClick={() => toggleMobileDropdown("academy")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "academy"}
              >
                Kreasi Academy
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "academy" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "academy" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg mb-2">
                  <ul className="space-y-2 text-xs text-text-light-muted dark:text-text-dark-muted">
                    <li><a href="#" className="block py-1 hover:text-primary">After Office Academy</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Impact Academy</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="block px-3 py-4 text-sm font-medium text-text-light dark:text-text-dark hover:text-primary"
            >
              Digital Marketing
            </a>

            <div className="grid grid-cols-2 gap-3 mt-4 px-3 pb-8">
              <a
                href="#"
                className="px-4 py-2.5 rounded-lg outline outline-1 outline-violet-600 text-violet-600 text-xs font-semibold text-center hover:bg-violet-50 transition-colors"
              >
                APPLY FOR JOBS
              </a>
              <a
                href="#"
                className="px-4 py-2.5 bg-violet-600 rounded-lg text-white text-xs font-medium text-center hover:bg-violet-700 transition-colors"
              >
                START HIRING
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-16 overflow-hidden bg-[#F4F4F7] dark:bg-background-dark" style={{ paddingTop: "14rem" }}>
        {/* Geometric Background Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-full md:h-full max-w-[1400px] pointer-events-none flex items-center justify-center z-0">
          <img src="/assets/images/Lines.svg" alt="" className="w-full h-full object-contain opacity-80 dark:opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-5xl mx-auto mb-8 text-text-light dark:text-text-dark">
            Connecting <span className="font-semibold text-violet-600">Education, Career, and Business</span> through Digital Innovation.
          </h1>

          {/* Subheading */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-montserrat mb-8">
              An innovative IT firm that drives digital transformation with experienced experts and effective technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                <div className="text-gray-100 text-base font-medium font-montserrat">Start Hiring</div>
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-text-light dark:text-text-dark text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                Learn More
                <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-400 font-montserrat">Free to interview, low-cost hiring</p>
          </div>

          {/* Floating Cards - Desktop (Absolute) for XL+ screens only */}

          {/* Card 1: Happy Clients */}
          <div className="hidden xl:block absolute -top-5 left-0 animate-float-slow z-20">
            <div className="bg-white dark:bg-background-dark-sec p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light dark:text-text-dark">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Talents */}
          <div className="hidden xl:block absolute top-40 -right-12 animate-float-medium z-20">
            <div className="bg-white dark:bg-background-dark-sec p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light dark:text-text-dark">100+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Professional Talents</div>
              </div>
            </div>
          </div>

          {/* Card 3: Projects Completed */}
          <div className="hidden xl:block absolute bottom-56 left-10 animate-float-fast z-20">
            <div className="bg-white dark:bg-background-dark-sec p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light dark:text-text-dark">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Tablet/Laptop Static Section (MD to XL) */}
          <div className="hidden md:flex xl:hidden w-full justify-center gap-6 mt-16 flex-wrap">
            {/* Badge 1 */}
            <div className="p-4 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light dark:text-text-dark">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="p-4 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light dark:text-text-dark">100+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Professional Talents</div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="p-4 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light dark:text-text-dark">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Mobile Marquee Section (< MD) */}
          {/* Mobile Marquee Section (< MD) */}
          <div className="w-full md:hidden mt-8 overflow-hidden relative">
            <div className="inline-flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-4">
              {/* Loop 1 */}
              <div className="flex gap-4 mx-2">
                {/* Badge 1 */}
                <div className="p-2 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light dark:text-text-dark text-sm font-medium font-montserrat">50+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Happy Clients</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="p-2 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light dark:text-text-dark text-sm font-medium font-montserrat">100+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Projects Completed</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="p-2 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light dark:text-text-dark text-sm font-medium font-montserrat">4+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Loop 2 (Duplicate for smooth infinite scroll) */}
              <div className="flex gap-4 mx-2">
                {/* Badge 1 */}
                <div className="p-2 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light dark:text-text-dark text-sm font-medium font-montserrat">50+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Happy Clients</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="p-2 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light dark:text-text-dark text-sm font-medium font-montserrat">100+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Projects Completed</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="p-2 bg-white dark:bg-background-dark-sec rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light dark:text-text-dark text-sm font-medium font-montserrat">4+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By Header */}
          <div className="mt-24 mb-6 w-full max-w-7xl mx-auto text-center z-10">
            <div className="w-full text-center text-SubText text-xs font-normal font-['Montserrat']">Trusted by great businesses like:</div>
          </div>

        </div>

        {/* Trusted By Marquee */}
        <div className="w-full overflow-hidden flex space-x-12 animate-marquee items-center opacity-60 grayscale hover:grayscale-0 transition duration-500 hide-scrollbar whitespace-nowrap px-4 pb-12 z-10 relative">
          {/* Duplicate content for marquee effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 shrink-0">
              {[...Array(7)].map((_, j) => (
                <div key={j} className="flex items-center gap-2">
                  <img src="/assets/images/Logo.svg" alt="Kreasitech" className="h-8 w-auto" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="flex flex-col items-center gap-24">
          <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
            <h2 className="text-4xl font-medium font-montserrat text-text-light dark:text-white">
              Our Services
            </h2>
            <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
              Unlock Your Business Potential with Our Expert Solutions
            </p>
          </div>

          <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 dark:outline-gray-800 inline-flex justify-between items-center flex-wrap content-center">
            {/* 1. Talent as a Service */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white dark:bg-background-dark outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 dark:outline-gray-800 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="far fa-star text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light dark:text-white group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                Talent as a Service
              </h3>
              <p className="self-stretch text-text-light dark:text-text-dark group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We provide flexible and efficient Talent as a Service (TaaS), delivering top talent in the tech industry to support your business innovation and growth.
              </p>
            </div>

            {/* 2. Web & Mobile Apps Development */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white dark:bg-background-dark outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 dark:outline-gray-800 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fas fa-mobile-alt text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light dark:text-white group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                Web & Mobile Apps Development
              </h3>
              <p className="self-stretch text-text-light dark:text-text-dark group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer innovative Web & Mobile App services that support your business's digital transformation with the latest technology and a focus on user experience.
              </p>
            </div>

            {/* 3. Product Digital Design & Tech Consultation */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white dark:bg-background-dark outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 dark:outline-gray-800 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="far fa-question-circle text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light dark:text-white group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                Product Digital Design & Tech Consultation
              </h3>
              <p className="self-stretch text-text-light dark:text-text-dark group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer Digital Product Design & Tech Consultation services to create innovative digital solutions with a strategic approach that drives your business growth.
              </p>
            </div>

            {/* 4. UI/UX Design */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white dark:bg-background-dark outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 dark:outline-gray-800 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fas fa-pencil-ruler text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light dark:text-white group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                UI/UX Design
              </h3>
              <p className="self-stretch text-text-light dark:text-text-dark group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We provide research-based UI/UX Design services to deliver attractive visuals and optimal user experiences tailored to your business needs.
              </p>
            </div>

            {/* 5. QA Testing */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white dark:bg-background-dark outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 dark:outline-gray-800 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fas fa-tasks text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light dark:text-white group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                QA Testing
              </h3>
              <p className="self-stretch text-text-light dark:text-text-dark group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer Quality Assurance (QA) Testing services with strict methodologies and the latest tools to ensure your digital products are reliable, secure, bug-free, and high-quality.
              </p>
            </div>

            {/* 6. WordPress */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white dark:bg-background-dark outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 dark:outline-gray-800 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fab fa-wordpress text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light dark:text-white group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                WordPress
              </h3>
              <p className="self-stretch text-text-light dark:text-text-dark group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer professional, responsive, and optimal WordPress website development services to support your business needs and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-violet-600 text-white overflow-hidden">
        <div className="flex flex-col items-center gap-24 px-4 w-full">
          {/* Header */}
          <div className="w-full max-w-[784px] text-center">
            <h2 className="text-4xl font-medium font-montserrat">
              Our Product
            </h2>
          </div>

          {/* Content */}
          <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">
            {/* Left Column: Text */}
            <div className="w-full lg:w-[480px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <div className="text-xs font-normal font-montserrat text-white opacity-90">
                13 Nov 2025
              </div>
              <h3 className="text-3xl font-medium font-montserrat text-white">
                HiTalent
              </h3>
              <p className="text-base font-normal font-montserrat leading-relaxed text-white opacity-90">
                Smart solutions to manage human resources efficiently — from attendance to payroll. Powered by cloud-based technology that simplifies management while boosting your company's productivity and efficiency.
              </p>
              <button className="px-8 py-4 bg-violet-300 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-200 transition-colors">
                <span className="text-violet-800 text-base font-medium font-montserrat">See Detail</span>
              </button>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <img
                className="w-full max-w-[696px] h-auto rounded-2xl shadow-2xl"
                src="/assets/images/Product.png"
                alt="HiTalent Dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-24 bg-[#F4F4F7] dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 lg:gap-24">
          <div className="w-full max-w-[784px] text-center">
            <h2 className="text-3xl lg:text-4xl font-medium font-montserrat text-text-light dark:text-white leading-tight">
              Discover the Power of <br className="hidden md:block" /> KreasiTech Hiring Process
            </h2>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8 lg:gap-0">
            {/* 1. Candidate Screening */}
            <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-text-light dark:text-white text-center">
                1. Candidate Screening
              </h3>
              <p className="text-sm font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted text-center leading-relaxed">
                Implement strategies to effectively evaluate resumes and shortlist candidates based on their qualifications.
              </p>
            </div>

            {/* 2. Interview Process Improvement */}
            <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6 lg:border-l lg:border-r border-gray-300 dark:border-gray-700">
              <h3 className="text-2xl font-medium font-montserrat text-text-light dark:text-white text-center">
                2. Interview Process Improvement
              </h3>
              <p className="text-sm font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted text-center leading-relaxed">
                Refine the interview structure to better assess candidate skills and cultural fit.
              </p>
            </div>

            {/* 3. Onboarding Experience */}
            <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-text-light dark:text-white text-center">
                3. Onboarding Experience
              </h3>
              <p className="text-sm font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted text-center leading-relaxed">
                Develop a comprehensive onboarding program to help new hires integrate smoothly into the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark-sec border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-24">
          <div className="w-full max-w-[784px] text-center">
            <h2 className="text-3xl font-medium font-montserrat text-text-light dark:text-white">
              After You Hire
            </h2>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
            {/* Left Box */}
            <div className="w-full max-w-sm px-8 pt-8 pb-12 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-center text-text-light dark:text-white">
                Onboard, pay, retain
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-text-light-muted dark:text-text-dark-muted leading-relaxed">
                We support onboarding, payroll, and compliance, so your new hire integrates fast and sticks long term.
              </p>
            </div>

            {/* Arrows */}
            {/* Desktop Arrows (Right) */}
            <div className="hidden lg:flex items-center gap-[-8px]">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="relative w-16 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-violet-300">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Mobile Arrow (Down) */}
            <div className="flex lg:hidden items-center justify-center py-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-violet-300">
                  <path d="M5 8h14l-7 11z" />
                </svg>
              </div>
            </div>

            {/* Right Box */}
            <div className="w-full max-w-sm px-8 pt-8 pb-12 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-center text-text-light dark:text-white">
                Ongoing support & team expansion
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-text-light-muted dark:text-text-dark-muted leading-relaxed">
                Keep hiring with the same speed and quality whenever you need. Your recruiter stays close to support future hires, backfills, or scaling your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100 dark:bg-background-dark overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-medium font-montserrat text-text-light dark:text-white mb-24">
            See why customers love using KreasiTech
          </h2>

          <div className="relative">
            {/* Horizontal Scrolling Container */}
            <div
              id="testimonials-scroll"
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Testimonial 1 - Tina Rahayu */}
              <div className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-96 h-[600px] p-8 bg-white dark:bg-background-dark-sec outline outline-[0.5px] outline-gray-300 dark:outline-gray-700 flex flex-col justify-between snap-start">
                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
                      T
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-xl font-medium font-montserrat text-text-light dark:text-white">
                        Tina Rahayu
                      </div>
                      <div className="text-xs font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
                        Marketing Specialist
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light font-montserrat text-text-light dark:text-white leading-relaxed">
                    "Tina's marketing strategies are exceptionally creative, highly innovative, and meticulously data-driven, consistently capturing audience attention and driving impressive campaign results that not only exceed targets but also maximize ROI, setting new standards for marketing effectiveness."
                  </p>
                </div>
                <div className="text-xs font-normal font-montserrat text-gray-400">
                  PT Marketing Pro
                </div>
              </div>

              {/* Testimonial 2 - Joko Lestari */}
              <div className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-96 h-[600px] p-8 bg-white dark:bg-background-dark-sec outline outline-[0.5px] outline-gray-300 dark:outline-gray-700 flex flex-col justify-between snap-start">
                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                      J
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-xl font-medium font-montserrat text-text-light dark:text-white">
                        Joko Lestari
                      </div>
                      <div className="text-xs font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
                        QA Engineer
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light font-montserrat text-text-light dark:text-white leading-relaxed">
                    "Joko's rigorous testing protocols guarantee the superior quality and reliability of our products, proactively preventing potential problems and ensuring a seamless user experience right from initial release, significantly enhancing customer loyalty and fostering long-term relationships."
                  </p>
                </div>
                <div className="text-xs font-normal font-montserrat text-gray-400">
                  PT Quality Assurance
                </div>
              </div>

              {/* Testimonial 3 - Siti Aminah */}
              <div className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-96 h-[600px] p-8 bg-white dark:bg-background-dark-sec outline outline-[0.5px] outline-gray-300 dark:outline-gray-700 flex flex-col justify-between snap-start">
                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-xl font-medium font-montserrat text-text-light dark:text-white">
                        Siti Aminah
                      </div>
                      <div className="text-xs font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
                        Product Manager
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light font-montserrat text-text-light dark:text-white leading-relaxed">
                    "Siti's leadership is truly transformative, as she champions collaboration, sparks innovation, and drives substantial growth. Her team consistently surpasses ambitious goals, achieving remarkable success and establishing new benchmarks for excellence throughout the entire organization, inspiring others to reach higher."
                  </p>
                </div>
                <div className="text-xs font-normal font-montserrat text-gray-400">
                  PT Digital Solutions
                </div>
              </div>

              {/* Testimonial 4 - Budi Santoso */}
              <div className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-96 h-[600px] p-8 bg-white dark:bg-background-dark-sec outline outline-[0.5px] outline-gray-300 dark:outline-gray-700 flex flex-col justify-between snap-start">
                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      B
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-xl font-medium font-montserrat text-text-light dark:text-white">
                        Budi Santoso
                      </div>
                      <div className="text-xs font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
                        UX Designer
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light font-montserrat text-text-light dark:text-white leading-relaxed">
                    "Budi's UX designs are widely celebrated for their intuitive interfaces and exceptionally delightful user journeys, significantly boosting user satisfaction and engagement metrics. His thoughtful designs greatly enhance the overall user experience, making every interaction seamless and enjoyable for all users."
                  </p>
                </div>
                <div className="text-xs font-normal font-montserrat text-gray-400">
                  PT Creative Minds
                </div>
              </div>

              {/* Testimonial 5 - Rina Dewi */}
              <div className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-96 h-[600px] p-8 bg-white dark:bg-background-dark-sec outline outline-[0.5px] outline-gray-300 dark:outline-gray-700 flex flex-col justify-between snap-start">
                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xl">
                      R
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-xl font-medium font-montserrat text-text-light dark:text-white">
                        Rina Dewi
                      </div>
                      <div className="text-xs font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
                        Data Analyst
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light font-montserrat text-text-light dark:text-white leading-relaxed">
                    "Rina's profound data insights are instrumental in shaping our strategic direction and future initiatives. Her detailed analyses provide unparalleled clarity and foresight, enabling well-informed decisions that drive significant growth and improve efficiency across all departments, optimizing resource allocation."
                  </p>
                </div>
                <div className="text-xs font-normal font-montserrat text-gray-400">
                  PT Analytics Hub
                </div>
              </div>

              {/* Testimonial 6 - Eko Setiawan */}
              <div className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] lg:w-96 h-[600px] p-8 bg-white dark:bg-background-dark-sec outline outline-[0.5px] outline-gray-300 dark:outline-gray-700 flex flex-col justify-between snap-start">
                <div className="flex flex-col gap-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                      E
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-xl font-medium font-montserrat text-text-light dark:text-white">
                        Eko Setiawan
                      </div>
                      <div className="text-xs font-normal font-montserrat text-text-light-muted dark:text-text-dark-muted">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light font-montserrat text-text-light dark:text-white leading-relaxed">
                    "Eko's coding expertise is unparalleled in its depth and breadth, and his unwavering commitment to staying current with the latest technology trends ensures our projects are always cutting-edge and remarkably efficient, firmly positioning us as industry leaders in technological innovation."
                  </p>
                </div>
                <div className="text-xs font-normal font-montserrat text-gray-400">
                  PT Web Solutions
                </div>
              </div>
            </div>

            {/* Custom Progress Indicator */}
            <div className="flex items-center gap-4 mt-20">
              <div className="w-24 h-[5px] bg-primary rounded-full"></div>
              <div className="flex-1 h-[5px] bg-zinc-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Hide default scrollbar */}
        <style jsx>{`
          #testimonials-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      <section className="py-20 bg-background-light-sec dark:bg-background-dark-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-light dark:text-white">
                Our Portfolio
              </h2>
              <p className="text-xs mt-2 text-text-light-muted dark:text-text-dark-muted">
                Projects showcase our expertise across various industries.
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-secondary transition cursor-pointer">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl h-64 mb-3">
                <img
                  alt="Art 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7u-AooC_b90LajyHtqr0n7WRgQJz8pLn9Ik6YIg9YCafgTkHh0c2sZfxfAstoqAqRt2hubSOSde-5Xnpf6BNex9EMjgn3euPTMdKIB4ySMi7DE6MN4gtSMWttXwBdT-wb5hWufyDei9kdDHDBK1LhlgfVpaWEk1PlNf-uPRaRhhTt-2mLWchmzQxY45NbLrCnMNycBVuuYeRU0Ws5lkicBgaA-bQoELpi8awBjcYer8YORmdAGPWbncTymWBGqPp260abrcYlknY"
                />
              </div>
              <div className="font-bold text-sm dark:text-white">
                Danarhadi CRM
              </div>
              <div className="text-[10px] text-gray-500">
                Marketing Specialist
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl h-64 mb-3">
                <img
                  alt="Art 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpM1gNDWKv0g4oyXtLm3c85s-AnPrlBIM0BeYFfchv_bbv9ACJSEAZchbajLtG5E1ZiU1hurf6wNp6xG02qvAKRsIqF_j82XCftTz0gkA45ALh2djHX2GDxCzQv_cCFVPMG-D0B6Wp5rVC7OdGJK8xpvLSRFWzCI9I1FOgyGKuCnXpr-xme-rjclu0f45pwBwpmbGgWeXnwAeH_RSPvxi_86IBK94inS7zk43nWzbqbnFzSxd81Q6bXw9whFe-mGKbsvcaqJTkuRI"
                />
              </div>
              <div className="font-bold text-sm dark:text-white">
                Danarhadi CRM
              </div>
              <div className="text-[10px] text-gray-500">
                Marketing Specialist
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl h-64 mb-3">
                <img
                  alt="Art 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIvQ65UnHhWnBrnX__MhQmLUJ69ivu7eEoe5rI-lKCWr_5ihJoyv378MuHaz4c9Ob9XcwGi5_Rz5tO4jyAVuCpvPCI1cXGH4-8IaFKqOZ-7d7_sNeQ-NBQJUE8CHGwuEOgLeeyg0q6kCADCU-mFUoh5gYKwnDjWhw_fYIAkOm4Xnjpyv82VhLccpk8DwCtY1ZhdwMKBqDPeRcs_3g9Pp1BjnGZ1ICwLocc892k3e7bXXSZFdXyO9e5CzfCgdNV7gHLmAtdAvPUWs"
                />
              </div>
              <div className="font-bold text-sm dark:text-white">
                Danarhadi CRM
              </div>
              <div className="text-[10px] text-gray-500">
                Marketing Specialist
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl h-64 mb-3">
                <img
                  alt="Art 4"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2zGjmfAdEJ23aq69VWlQy4P1KKZtS3Oief1zQOO9MDaWVTK4HoYs35dK9mu2QLJiXxIYzBIY8Z9VFndxNm2wi4lN1DmmKzNBQT5FpgEOFxvL_o7_LzvpyRT6dfDktMUJOpTT8hEzJEfBVvqzn_JUsXHLF2fQaVb_58zBbPuEiljTYV2OcSR7dDXugIakKYBwX6P2ldvPShiS-zNRqxh7CKgpLROOLHTb17qKvI3qKHLEe6_v6w9xiHw1BQvsPf-JTgXZv7y3fMI"
                />
              </div>
              <div className="font-bold text-sm dark:text-white">
                Danarhadi CRM
              </div>
              <div className="text-[10px] text-gray-500">
                Marketing Specialist
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-dark to-[#312e81] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Match your energy with our
            <br />
            workflow
          </h2>
          <p className="text-sm text-white/70 mb-12 max-w-2xl mx-auto">
            We ensure every project is executed efficiently and tailored to your
            unique business needs, providing innovative solutions that drive
            success.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-search text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">
                Discovery & Requirements
              </h3>
              <p className="text-[10px] text-white/60">
                Are essential documents outlining a project's boundaries and
                goals.
              </p>
            </div>
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-pencil-alt text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">
                Wireframe & UI/UX Design
              </h3>
              <p className="text-[10px] text-white/60">
                Details the step-by-step method of developing or improving a
                current product.
              </p>
            </div>
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-laptop-code text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">Development</h3>
              <p className="text-[10px] text-white/60">
                Outlines the detailed procedure for innovating or upgrading an
                existing service.
              </p>
            </div>
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-vial text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">SIT</h3>
              <p className="text-[10px] text-white/60">
                Represents a milestone reached through commitment, skill, and
                courage.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:w-3/4 mx-auto">
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-users text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">UAT</h3>
              <p className="text-[10px] text-white/60">
                Embodies a success story built on perseverance, expertise, and
                valor.
              </p>
            </div>
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-rocket text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">Deployment</h3>
              <p className="text-[10px] text-white/60">
                It allows for ongoing improvements through constant reviews and
                iterative changes.
              </p>
            </div>
            <div className="border border-white/20 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition backdrop-blur-sm">
              <i className="fas fa-tools text-2xl mb-4 text-white/80"></i>
              <h3 className="font-bold text-sm mb-2">
                Maintenance & Support
              </h3>
              <p className="text-[10px] text-white/60">
                It facilitates ongoing development through constant reviews and
                iterative modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 relative flex flex-col justify-between h-full gap-24 text-center lg:text-left">
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-white">
                Why Kreasitech is the
                <br />
                right choice for you?
              </h2>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted mb-8">
                We provide secure, scalable, and innovative IT solutions
                tailored to your needs. With expert-driven execution, we ensure
                efficiency.
              </p>
              <div className="text-primary/80 mx-auto lg:mx-0 w-48">
                <svg
                  className="w-full h-auto fill-current"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,92.6,-8.2C93.5,4.9,89.1,18.1,81.4,29.3C73.7,40.5,62.7,49.7,51.4,56.8C40.1,63.9,28.5,68.9,16.5,70.9C4.5,72.9,-7.9,71.9,-19.9,68.7C-31.9,65.5,-43.5,60.1,-53.6,52.4C-63.7,44.7,-72.3,34.7,-77.8,23.1C-83.3,11.5,-85.7,-1.7,-82.9,-13.9C-80.1,-26.1,-72.1,-37.3,-62.4,-45.8C-52.7,-54.3,-41.3,-60.1,-30.1,-68.2C-18.9,-76.3,-7.9,-86.7,4.2,-93.2C16.3,-99.7,32.5,-102.3,45.7,-76.3Z"
                    style={{ opacity: 0.1 }}
                    transform="translate(100 100) scale(1.1)"
                  ></path>
                  <circle cx="100" cy="80" fill="currentColor" r="15"></circle>
                  <path d="M100 100 L80 140 L120 140 Z" fill="currentColor"></path>
                  <path
                    d="M80 120 L60 100"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                  <path
                    d="M120 120 L140 100"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="text-primary/80 mx-auto lg:mx-0 w-48">
              <svg
                className="w-full h-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" x2="12" y1="22.08" y2="12"></line>
                <line x1="17" x2="22" y1="5" y2="2"></line>
                <line x1="7" x2="2" y1="5" y2="2"></line>
              </svg>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Creative Partnership
              </h3>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                At Kreasitech, we believe that the best innovation comes from
                strong collaboration. We work closely as a strategic partner.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Cost Effective & High ROI
              </h3>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                The technology we develop is not only effective but also
                provides optimal investment value, increasing operational
                efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                End to End IT Support
              </h3>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                From consultation to implementation and maintenance, we are here
                to ensure your technology solutions always run optimally.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Experience Professionals
              </h3>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                We guarantee your project is handled by our experienced team of
                professionals who understand modern business challenges.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Security & Compliance
              </h3>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                We prioritize data security and compliance with industry
                regulations, ensuring your system remains secure and reliable.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Tailor Solutions
              </h3>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                The best technology is that which suits your business needs. At
                Kreasitech, we present Tailored Solutions specifically designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light-sec dark:bg-background-dark-sec border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Empower Your Business
            <br />
            with Smart Digital Solutions
          </h2>
          <p className="text-sm text-text-light-muted dark:text-text-dark-muted mb-8">
            Transform your business with our end-to-end digital expertise and
            innovative technology.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition cursor-pointer">
            Get Started Today
          </button>
        </div>
      </section>

      <footer className="w-full bg-background-light-sec dark:bg-background-dark-sec pb-12 pt-0 px-4">
        <div className="w-full max-w-[1400px] mx-auto bg-white dark:bg-background-dark rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col justify-start items-start gap-8">
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
                <div className="justify-start text-text-light dark:text-text-dark text-sm font-normal font-montserrat">
                  Jalan Lorong, Gedongan RT01/RW04, Sinduadi, Mlati, Sleman, DIY 55284
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                  <i className="fas fa-phone text-violet-600 text-sm"></i>
                </div>
                <div className="justify-start text-text-light dark:text-text-dark text-sm font-normal font-montserrat">
                  (62) 888-8088-877
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div data-style="Outlined" className="w-5 h-5 relative overflow-hidden flex items-center justify-center">
                  <i className="far fa-envelope text-violet-600 text-sm"></i>
                </div>
                <div className="justify-start text-text-light dark:text-text-dark text-sm font-normal font-montserrat">
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
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Finance & Accounting
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Customer Support, Ops, & VAs
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Sales & Marketing
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Product, Design, Data, & Engineering
              </a>
            </div>
            <div className="inline-flex flex-col justify-center items-start gap-6 order-3 lg:order-2">
              <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                PRODUCTS
              </div>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                HiTalent
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                IDAS SFA
              </a>
            </div>
            <div className="inline-flex flex-col justify-center items-start gap-6 order-4 lg:order-3">
              <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                SERVICES
              </div>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Find a Hire
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Recruitment
              </a>
            </div>
            <div className="inline-flex flex-col justify-center items-start gap-6 order-2 lg:order-4">
              <div className="justify-start text-violet-600 text-xs font-bold uppercase font-montserrat">
                COMPANY
              </div>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                About Us
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
                Careers
              </a>
              <a href="#" className="justify-start text-text-light dark:text-text-dark text-sm font-medium font-montserrat hover:text-primary transition">
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
      <a
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce cursor-pointer"
        href="#"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div >
  );
}
