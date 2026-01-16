"use client";

import { useState } from "react";
import WhyUs from "@/components/WhyUs";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

  // Portfolio items data for auto-clone marquee
  const portfolioItems = [
    { id: 1, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    { id: 2, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
    { id: 3, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    { id: 4, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    { id: 5, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
    { id: 6, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    { id: 7, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    { id: 8, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/400x400", size: "medium" },
    { id: 9, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
    { id: 10, title: "Danarhadi CRM", subtitle: "Marketing Specialist", image: "https://placehold.co/600x400", size: "large" },
  ];

  // Testimonials items data for auto-clone marquee
  const testimonialItems = [
    {
      id: 1,
      name: "Tina Rahayu",
      role: "Marketing Specialist",
      company: "PT Marketing Pro",
      avatar: "https://placehold.co/48x48/ec4899/1f2937",
      quote: "Tina's marketing strategies are exceptionally creative, highly innovative, and meticulously data-driven, consistently capturing audience attention and driving impressive campaign results that not only exceed targets but also maximize ROI, setting new standards for marketing effectiveness."
    },
    {
      id: 2,
      name: "Joko Lestari",
      role: "QA Engineer",
      company: "PT Quality Assurance",
      avatar: "https://placehold.co/48x48/fbbf24/1f2937",
      quote: "Joko's rigorous testing protocols guarantee the superior quality and reliability of our products, proactively preventing potential problems and ensuring a seamless user experience right from initial release, significantly enhancing customer loyalty and fostering long-term relationships."
    },
    {
      id: 3,
      name: "Siti Aminah",
      role: "Product Manager",
      company: "PT Digital Solutions",
      avatar: "https://placehold.co/48x48/3b82f6/1f2937",
      quote: "Siti's leadership is truly transformative, as she champions collaboration, sparks innovation, and drives substantial growth. Her team consistently surpasses ambitious goals, achieving remarkable success and establishing new benchmarks for excellence throughout the entire organization, inspiring others to reach higher."
    },
    {
      id: 4,
      name: "Budi Santoso",
      role: "UX Designer",
      company: "PT Creative Minds",
      avatar: "https://placehold.co/48x48/f97316/1f2937",
      quote: "Budi's UX designs are widely celebrated for their intuitive interfaces and exceptionally delightful user journeys, significantly boosting user satisfaction and engagement metrics. His thoughtful designs greatly enhance the overall user experience, making every interaction seamless and enjoyable for all users."
    },
    {
      id: 5,
      name: "Rina Dewi",
      role: "Data Analyst",
      company: "PT Analytics Hub",
      avatar: "https://placehold.co/48x48/ec4899/1f2937",
      quote: "Rina's profound data insights are instrumental in shaping our strategic direction and future initiatives. Her detailed analyses provide unparalleled clarity and foresight, enabling well-informed decisions that drive significant growth and improve efficiency across all departments, optimizing resource allocation."
    },
    {
      id: 6,
      name: "Eko Setiawan",
      role: "DevOps Engineer",
      company: "PT Tech Infrastructure",
      avatar: "https://placehold.co/48x48/10b981/1f2937",
      quote: "Eko's DevOps expertise ensures our systems run smoothly and efficiently. His automation solutions have dramatically reduced deployment times while improving reliability, enabling our team to focus on innovation rather than maintenance."
    },
  ];


  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(prev => prev === name ? null : name);
  };

  return (
    <div className="bg-background-light text-text-light font-sans transition-colors duration-300">
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 bg-white/95/95 backdrop-blur-md border border-gray-100 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] rounded-lg transition-all duration-300">
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
              <div className="flex items-center gap-3 xl:gap-8 text-[10px] xl:text-xs font-medium font-montserrat text-text-light">
                {/* Find a Talent - Mega Menu Trigger */}
                <div className="group h-full flex items-center">
                  <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                    Find a Talent <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-0 w-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl rounded-2xl overflow-hidden">
                      <div className="max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-4 gap-8">
                        <div>
                          <h4 className="font-bold text-sm mb-4">Finance & Accounting</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted">
                            <li><a href="#" className="dropdown-item block pb-1">Bookkeeper</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Financial Analyst</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Tax Specialist</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Accountant</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-4">Customer Support, Ops, & VAs</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted">
                            <li><a href="#" className="dropdown-item block pb-1">Virtual Assistant</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Create Support</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Data Entry Specialist</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Operations Manager</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-4">Sales & Marketing</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted">
                            <li><a href="#" className="dropdown-item block pb-1">Digital Marketer</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Social Media Manager</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">SEO Specialist</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Sales Representative</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-4">IT, Data, and Engineering</h4>
                          <ul className="space-y-3 text-xs text-text-light-muted">
                            <li><a href="#" className="dropdown-item block pb-1">UI/UX Designer</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Frontend Developer</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">Backend Developer</a></li>
                            <li><a href="#" className="dropdown-item block pb-1">DevOps Engineer</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                    Services <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full -left-12 w-max min-w-[500px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-6 grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-sm mb-3">Talent As a Service</h4>
                        <ul className="space-y-2 text-xs text-text-light-muted">
                          <li><a href="#" className="dropdown-item block py-1">Head Hunting</a></li>
                          <li><a href="#" className="dropdown-item block py-1">Staffing</a></li>
                          <li><a href="#" className="dropdown-item block py-1">Internship</a></li>
                          <li><a href="#" className="dropdown-item block py-1">Inclusive Talent</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-3">Software Development</h4>
                        <ul className="space-y-2 text-xs text-text-light-muted">
                          <li><a href="#" className="dropdown-item block py-1">Specifications & Wireframe</a></li>
                          <li><a href="#" className="dropdown-item block py-1">UI/UX Design</a></li>
                          <li><a href="#" className="dropdown-item block py-1">Website Development</a></li>
                          <li><a href="#" className="dropdown-item block py-1">Mobile App Development</a></li>
                          <li><a href="#" className="dropdown-item block py-1">MVP Development</a></li>
                          <li><a href="#" className="dropdown-item block py-1">Custom Software Development</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Products - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                    Products <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5">
                      <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Products</h4>
                      <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                        <li><a href="#" className="dropdown-item block py-1">Hitalent</a></li>
                        <li><a href="#" className="dropdown-item block py-1">lorem ipsum</a></li>
                        <li><a href="#" className="dropdown-item block py-1">lorem ipsum</a></li>
                        <li><a href="#" className="dropdown-item block py-1">lorem ipsum</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Company - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                    Company <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5">
                      <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Company</h4>
                      <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                        <li><a href="#" className="dropdown-item block py-1">About Us</a></li>
                        <li><a href="#" className="dropdown-item block py-1">Portfolio</a></li>
                        <li><a href="#" className="dropdown-item block py-1">Careers</a></li>
                        <li><a href="#" className="dropdown-item block py-1">Our Journey</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Kreasi Academy - Dropdown */}
                <div className="group relative h-full flex items-center">
                  <button className="nav-link flex items-center gap-2 hover:text-primary transition py-6 whitespace-nowrap">
                    Kreasi Academy <i className="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform duration-300"></i>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10">
                    <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-5">
                      <h4 className="font-bold text-sm mb-3 text-left whitespace-nowrap">Kreasi Academy</h4>
                      <ul className="space-y-2 text-xs text-text-light-muted text-left whitespace-nowrap">
                        <li><a href="#" className="dropdown-item block py-1">After Office Academy</a></li>
                        <li><a href="#" className="dropdown-item block py-1">Impact Academy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a href="#" className="nav-link hover:text-primary transition py-6 whitespace-nowrap">
                  Digital Marketing
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-2 xl:ml-4">
                <a
                  href="#"
                  className="bg-white h-8 xl:h-10 px-2 xl:px-4 rounded-lg outline outline-1 outline-violet-600 text-violet-600 text-[10px] xl:text-xs font-semibold font-montserrat flex items-center justify-center hover:bg-violet-50 transition whitespace-nowrap"
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
                className="text-gray-500 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 font-montserrat h-auto max-h-[calc(100vh-72px)] overflow-y-auto shadow-lg rounded-b-2xl">
            {/* Find a Talent */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileDropdown("find-talent")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "find-talent"}
              >
                Find a Talent
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "find-talent" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "find-talent" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 p-4 space-y-6 rounded-lg mb-2">
                  <div>
                    <h4 className="font-bold text-sm mb-3">Finance & Accounting</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Bookkeeper</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Financial Analyst</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Tax Specialist</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Accountant</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3">Customer Support, Ops, & VAs</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Virtual Assistant</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Create Support</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Data Entry Specialist</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Operations Manager</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3">Sales & Marketing</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Digital Marketer</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Social Media Manager</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">SEO Specialist</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Sales Representative</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3">IT, Data, and Engineering</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted">
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
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "services"}
              >
                Services
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "services" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "services" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 p-4 space-y-6 rounded-lg mb-2">
                  <div>
                    <h4 className="font-bold text-sm mb-3">Talent As a Service</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted">
                      <li><a href="#" className="block py-1 hover:text-primary">Head Hunting</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Staffing</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Internship</a></li>
                      <li><a href="#" className="block py-1 hover:text-primary">Inclusive Talent</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3">Software Development</h4>
                    <ul className="space-y-2 text-xs text-text-light-muted">
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
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "products"}
              >
                Products
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "products" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "products" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 p-4 rounded-lg mb-2">
                  <ul className="space-y-2 text-xs text-text-light-muted">
                    <li><a href="#" className="block py-1 hover:text-primary">Hitalent</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">lorem ipsum</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "company"}
              >
                Company
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "company" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "company" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 p-4 rounded-lg mb-2">
                  <ul className="space-y-2 text-xs text-text-light-muted">
                    <li><a href="#" className="block py-1 hover:text-primary">About Us</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Portfolio</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Careers</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Our Journey</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kreasi Academy */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => toggleMobileDropdown("academy")}
                className="flex w-full items-center justify-between px-3 py-4 text-sm font-medium text-text-light hover:text-primary transition-colors"
                aria-expanded={activeMobileDropdown === "academy"}
              >
                Kreasi Academy
                <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${activeMobileDropdown === "academy" ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === "academy" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-gray-50 p-4 rounded-lg mb-2">
                  <ul className="space-y-2 text-xs text-text-light-muted">
                    <li><a href="#" className="block py-1 hover:text-primary">After Office Academy</a></li>
                    <li><a href="#" className="block py-1 hover:text-primary">Impact Academy</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="block px-3 py-4 text-sm font-medium text-text-light hover:text-primary"
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

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-16 overflow-hidden bg-[#F4F4F7]" style={{ paddingTop: "14rem" }}>
        {/* Geometric Background Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-full md:h-full max-w-[1400px] pointer-events-none flex items-center justify-center z-0">
          <img src="/assets/images/Lines.svg" alt="" className="w-full h-full object-contain opacity-80 dark:opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-5xl mx-auto mb-8 text-text-light">
            Connecting <span className="font-semibold text-violet-600">Education, Career, and Business</span> through Digital Innovation.
          </h1>

          {/* Subheading */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-sm sm:text-base text-gray-500 font-montserrat mb-8">
              An innovative IT firm that drives digital transformation with experienced experts and effective technology solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                <div className="text-gray-100 text-base font-medium font-montserrat">Start Hiring</div>
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                Learn More
                <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-400 font-montserrat">Free to interview, low-cost hiring</p>
          </div>

          {/* Floating Cards - Desktop (Absolute) for XL+ screens only */}

          {/* Card 1: Happy Clients */}
          <div className="hidden xl:block absolute -top-5 left-0 animate-float-slow z-20">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Talents */}
          <div className="hidden xl:block absolute top-40 -right-12 animate-float-medium z-20">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light">100+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Professional Talents</div>
              </div>
            </div>
          </div>

          {/* Card 3: Projects Completed */}
          <div className="hidden xl:block absolute bottom-56 left-10 animate-float-fast z-20">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Tablet/Laptop Static Section (MD to XL) */}
          <div className="hidden md:flex xl:hidden w-full justify-center gap-6 mt-16 flex-wrap">
            {/* Badge 1 */}
            <div className="p-4 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light">50+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="p-4 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light">100+</div>
                <div className="text-[10px] text-gray-500 uppercase font-medium">Professional Talents</div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="p-4 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4 min-w-[200px]">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-full">
                <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-text-light">50+</div>
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
                <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light text-sm font-medium font-montserrat">50+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Happy Clients</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light text-sm font-medium font-montserrat">100+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Projects Completed</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light text-sm font-medium font-montserrat">4+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Loop 2 (Duplicate for smooth infinite scroll) */}
              <div className="flex gap-4 mx-2">
                {/* Badge 1 */}
                <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/tag_faces.svg" alt="Happy Clients" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light text-sm font-medium font-montserrat">50+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Happy Clients</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/task_alt.svg" alt="Projects Completed" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light text-sm font-medium font-montserrat">100+</div>
                    <div className="text-gray-500 text-[10px] font-normal font-montserrat uppercase">Projects Completed</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15)] flex justify-start items-center gap-4 border border-gray-100">
                  <div className="w-8 h-8 relative flex items-center justify-center bg-primary/10 rounded-full">
                    <img src="/assets/images/star_border_purple500.svg" alt="Professional Talents" className="w-6 h-6" />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="text-text-light text-sm font-medium font-montserrat">4+</div>
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

      <section className="py-24 bg-white">
        <div className="flex flex-col items-center gap-24">
          <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
            <h2 className="text-4xl font-medium font-montserrat text-text-light">
              Our Services
            </h2>
            <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted">
              Unlock Your Business Potential with Our Expert Solutions
            </p>
          </div>

          <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">
            {/* 1. Talent as a Service */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="far fa-star text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                Talent as a Service
              </h3>
              <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We provide flexible and efficient Talent as a Service (TaaS), delivering top talent in the tech industry to support your business innovation and growth.
              </p>
            </div>

            {/* 2. Web & Mobile Apps Development */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fas fa-mobile-alt text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                Web & Mobile Apps Development
              </h3>
              <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer innovative Web & Mobile App services that support your business's digital transformation with the latest technology and a focus on user experience.
              </p>
            </div>

            {/* 3. Product Digital Design & Tech Consultation */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="far fa-question-circle text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                Product Digital Design & Tech Consultation
              </h3>
              <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer Digital Product Design & Tech Consultation services to create innovative digital solutions with a strategic approach that drives your business growth.
              </p>
            </div>

            {/* 4. UI/UX Design */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fas fa-pencil-ruler text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                UI/UX Design
              </h3>
              <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We provide research-based UI/UX Design services to deliver attractive visuals and optimal user experiences tailored to your business needs.
              </p>
            </div>

            {/* 5. QA Testing */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fas fa-tasks text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                QA Testing
              </h3>
              <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                We offer Quality Assurance (QA) Testing services with strict methodologies and the latest tools to ensure your digital products are reliable, secure, bug-free, and high-quality.
              </p>
            </div>

            {/* 6. WordPress */}
            <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
              <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                <i className="fab fa-wordpress text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
              </div>
              <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                WordPress
              </h3>
              <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
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

      {/* Why Us Section */}
      <WhyUs />

      {/* Hiring Process Section */}
      <section className="py-24 bg-[#F4F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 lg:gap-24">
          <div className="w-full max-w-[784px] text-center">
            <h2 className="text-3xl lg:text-4xl font-medium font-montserrat text-text-light leading-tight">
              Discover the Power of <br className="hidden md:block" /> KreasiTech Hiring Process
            </h2>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8 lg:gap-0">
            {/* 1. Candidate Screening */}
            <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-text-light text-center">
                1. Candidate Screening
              </h3>
              <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                Implement strategies to effectively evaluate resumes and shortlist candidates based on their qualifications.
              </p>
            </div>

            {/* 2. Interview Process Improvement */}
            <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6 lg:border-l lg:border-r border-gray-300">
              <h3 className="text-2xl font-medium font-montserrat text-text-light text-center">
                2. Interview Process Improvement
              </h3>
              <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                Refine the interview structure to better assess candidate skills and cultural fit.
              </p>
            </div>

            {/* 3. Onboarding Experience */}
            <div className="w-full lg:w-96 px-4 lg:px-8 py-4 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-text-light text-center">
                3. Onboarding Experience
              </h3>
              <p className="text-sm font-normal font-montserrat text-text-light-muted text-center leading-relaxed">
                Develop a comprehensive onboarding program to help new hires integrate smoothly into the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-24">
          <div className="w-full max-w-[784px] text-center">
            <h2 className="text-3xl font-medium font-montserrat text-text-light">
              After You Hire
            </h2>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
            {/* Left Box */}
            <div className="w-full max-w-sm px-8 pt-8 pb-12 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-medium font-montserrat text-center text-text-light">
                Onboard, pay, retain
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-text-light-muted leading-relaxed">
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
              <h3 className="text-2xl font-medium font-montserrat text-center text-text-light">
                Ongoing support & team expansion
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-text-light-muted leading-relaxed">
                Keep hiring with the same speed and quality whenever you need. Your recruiter stays close to support future hires, backfills, or scaling your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light">
            See why customers love using KreasiTech
          </h2>
        </div>

        <div className="relative">
          {/* Single marquee container with all testimonials (original + duplicate) */}
          <div
            className="flex gap-4 md:gap-8 overflow-hidden"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            <div
              className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee"
              style={{ animationPlayState: isTestimonialHovered ? 'paused' : 'running' }}
            >
              {/* Auto-clone: Original + Duplicate items for seamless loop */}
              {[...testimonialItems, ...testimonialItems].map((item, index) => {
                const isOriginal = index < testimonialItems.length;

                return (
                  <div
                    key={`testimonial-${item.id}-${index}`}
                    className="group flex-shrink-0 w-72 md:w-96 h-auto md:h-[600px] p-4 md:p-8 bg-white hover:bg-violet-800 border border-gray-300 hover:border-violet-800 flex flex-col justify-start items-start gap-3 md:gap-6 transition-all duration-300"
                    aria-hidden={!isOriginal}
                  >
                    <div className="self-stretch inline-flex justify-start items-center gap-3 md:gap-6">
                      <img className="w-12 h-12" src={item.avatar} alt={item.name} />
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-medium font-montserrat transition-colors duration-300">
                          {item.name}
                        </div>
                        <div className="self-stretch justify-start text-text-light group-hover:text-white text-xs font-normal font-montserrat transition-colors duration-300">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start text-text-light group-hover:text-white text-base md:text-xl font-light font-montserrat transition-colors duration-300">
                      "{item.quote}"
                    </div>
                    <div className="self-stretch justify-start text-gray-400 group-hover:text-white text-xs font-normal font-montserrat mt-auto transition-colors duration-300">
                      {item.company}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Progress Indicator */}
        <div className="flex items-center gap-4 mt-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-24 h-[5px] bg-text-light rounded-full"></div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden" >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
            <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
              <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-gray-900">
                Our Portfolio
              </h2>
              <p className="text-sm md:text-base font-normal font-montserrat text-gray-600">
                Projects showcase our expertise across various industries. We are committed to delivering excellence in every solution.
              </p>
            </div>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300">
              <span className="text-white text-sm md:text-base font-medium font-montserrat">View All</span>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Portfolio Cards with Marquee */}
        <div className="relative">
          <div
            className="flex overflow-hidden"
            onMouseEnter={() => setIsPortfolioHovered(true)}
            onMouseLeave={() => setIsPortfolioHovered(false)}
          >
            {/* Single marquee container with all cards (original + duplicate) */}
            <div
              className="flex gap-4 md:gap-8 pr-4 md:pr-8 w-max flex-shrink-0 animate-marquee-reverse"
              style={{ animationPlayState: isPortfolioHovered ? 'paused' : 'running' }}
            >
              {/* Auto-clone: Original + Duplicate items for seamless loop */}
              {[...portfolioItems, ...portfolioItems].map((item, index) => {
                const isOriginal = index < portfolioItems.length;
                const sizeClasses = item.size === "large"
                  ? "w-80 md:w-[600px]"
                  : "w-64 md:w-96";

                return (
                  <div
                    key={`portfolio-${item.id}-${index}`}
                    className="group flex-shrink-0 flex flex-col gap-4 md:gap-8"
                    aria-hidden={!isOriginal}
                  >
                    <img
                      className={`${sizeClasses} h-64 md:h-96 object-cover`}
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-base md:text-xl font-medium font-montserrat text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-xs font-normal font-montserrat text-gray-600">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      <section className="py-24 bg-violet-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium font-montserrat mb-6">
              Match your energy with our workflow
            </h2>
            <p className="text-sm md:text-base font-normal font-montserrat text-white/90 leading-relaxed">
              We ensure every project is executed efficiently and tailored to your unique business needs, providing innovative solutions that drive success.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-center items-center content-center border border-white/20 divide-y divide-white/20 md:divide-y-0">
            {/* Row 1 */}
            <div className="w-full md:w-1/2 lg:w-1/4 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-shapes text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                Discovery & Requirements
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                Are essential documents outlining a project's boundaries and goals.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-pen-nib text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                Wireframe & UI/UX Design
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                Details the step-by-step method of developing or improving a current product.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-laptop-code text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                Development
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                Outlines the detailed procedure for innovating or upgrading an existing service.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-microscope text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                SIT
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                Represents a milestone reached through commitment, skill, and courage.
              </p>
            </div>

            {/* Row 2 */}
            <div className="w-full md:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-users text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                UAT
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                Embodies a success story built on perseverance, expertise, and valor.
              </p>
            </div>

            <div className="w-full md:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 border-b md:border-b-0 md:border-r border-white/20 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-rocket text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                Deployment
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                It allows for ongoing improvements through constant reviews and iterative changes.
              </p>
            </div>

            <div className="w-full md:w-1/3 h-80 p-8 flex flex-col justify-start items-center gap-6 transition-all duration-300 hover:bg-white group cursor-default">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <i className="fas fa-wrench text-3xl text-violet-300 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300"></i>
              </div>
              <h3 className="text-xl font-medium font-montserrat text-center h-14 flex items-center justify-center group-hover:text-gray-900 transition-colors duration-300">
                Maintenance & Support
              </h3>
              <p className="text-sm font-normal font-montserrat text-center text-white/80 group-hover:text-gray-600 transition-colors duration-300">
                It facilitates ongoing development through constant reviews and iterative modifications.
              </p>
            </div>
          </div>
        </div>
      </section>


      <CallToAction />

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
              <a href="#" className="justify-start text-text-light text-sm font-medium font-montserrat hover:text-primary transition">
                About Us
              </a>
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
      <a
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce cursor-pointer"
        href="#"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div >
  );
}
