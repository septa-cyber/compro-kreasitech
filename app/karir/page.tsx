"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/landing/WhatsAppButton";
import Breadcrumb from "@/app/components/ui/Breadcrumb";

interface Job {
    id: number;
    title: string;
    company: string;
    icon: string;
    iconBg: string;
    postedTime: string;
    salary: string;
    description: string;
    type: string;
    location: string;
    category: string;
}

const jobsData: Job[] = [
    {
        id: 1,
        title: "Front-End Developer",
        company: "KreasiTech",
        icon: "⚛️",
        iconBg: "bg-cyan-100",
        postedTime: "18 minutes ago",
        salary: "3,000K-8,000K",
        description: "Hire UI/UX designers, experts, specialists, and artists on demand. Top companies and startups choose UI/UX designers from KreasiTech for user research, wireframing, interaction design, usability testing, and more.",
        type: "Technology",
        location: "On-site",
        category: "full-time"
    },
    {
        id: 2,
        title: "Back-End Developer",
        company: "KreasiTech",
        icon: "JS",
        iconBg: "bg-yellow-400",
        postedTime: "18 minutes ago",
        salary: "3,500K-9,000K",
        description: "Hire UI/UX designers, experts, specialists, and artists on demand. Top companies and startups choose UI/UX designers from KreasiTech for user research, wireframing, interaction design, usability testing, and more.",
        type: "Technology",
        location: "Remote",
        category: "full-time"
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "KreasiTech",
        icon: "🎨",
        iconBg: "bg-pink-100",
        postedTime: "18 minutes ago",
        salary: "3,000K-6,500K",
        description: "Hire UI/UX designers, experts, specialists, and artists on demand. Top companies and startups choose UI/UX designers from KreasiTech for user research, wireframing, interaction design, usability testing, and more.",
        type: "Creative",
        location: "On-site",
        category: "full-time"
    },
    {
        id: 4,
        title: "Legal Staff",
        company: "KreasiTech",
        icon: "⚖️",
        iconBg: "bg-blue-100",
        postedTime: "18 minutes ago",
        salary: "3,000K-6,500K",
        description: "Hire UI/UX designers, experts, specialists, and artists on demand. Top companies and startups choose UI/UX designers from KreasiTech for user research, wireframing, interaction design, usability testing, and more.",
        type: "Management",
        location: "On-site",
        category: "full-time"
    },
    {
        id: 5,
        title: "Digital Marketing Specialist",
        company: "KreasiTech",
        icon: "📱",
        iconBg: "bg-purple-100",
        postedTime: "1 day ago",
        salary: "2,500K-5,500K",
        description: "Hire UI/UX designers, experts, specialists, and artists on demand. Top companies and startups choose UI/UX designers from KreasiTech for user research, wireframing, interaction design, usability testing, and more.",
        type: "Marketing",
        location: "Hybrid",
        category: "full-time"
    },
    {
        id: 6,
        title: "Product Manager",
        company: "KreasiTech",
        icon: "📊",
        iconBg: "bg-green-100",
        postedTime: "2 days ago",
        salary: "5,000K-12,000K",
        description: "Hire UI/UX designers, experts, specialists, and artists on demand. Top companies and startups choose UI/UX designers from KreasiTech for user research, wireframing, interaction design, usability testing, and more.",
        type: "Management",
        location: "Remote",
        category: "full-time"
    },
];

export default function KarirPage() {
    const [searchJob, setSearchJob] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [selectedJob, setSelectedJob] = useState<number | null>(null);
    const [datePosted, setDatePosted] = useState("anytime");
    const [jobTypes, setJobTypes] = useState({
        fulltime: false,
        freelance: false,
        internship: false
    });
    const [salaryRange, setSalaryRange] = useState([3500, 8500]);
    const [locationPrefs, setLocationPrefs] = useState({
        remote: false,
        onsite: false,
        hybrid: false
    });

    const handleClearAll = () => {
        setSearchJob("");
        setSearchLocation("");
        setDatePosted("anytime");
        setJobTypes({ fulltime: false, freelance: false, internship: false });
        setSalaryRange([3500, 8500]);
        setLocationPrefs({ remote: false, onsite: false, hybrid: false });
    };

    const filteredJobs = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
                            job.description.toLowerCase().includes(searchJob.toLowerCase());
        const matchesLocation = searchLocation === "" || 
                              job.location.toLowerCase().includes(searchLocation.toLowerCase());
        
        return matchesSearch && matchesLocation;
    });

    return (
        <div className="bg-[#F4F4F7] text-gray-800 transition-colors duration-300 min-h-screen">
            <Navbar />
            <Breadcrumb className="px-4 sm:px-6 lg:px-8" items={[
                { label: "Home", href: "/" },
                { label: "Karir", href: "/karir" }
            ]} />

            {/* Hero Section */}
            <section className="pt-8 pb-6 bg-[#F4F4F7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium font-montserrat leading-tight text-text-light mb-4">
                            Temukan <span className="text-violet-600 font-semibold">Karir Impian</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 font-montserrat">
                            Bergabunglah dengan tim terbaik dan kembangkan karir Anda bersama KreasiTech
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search for jobs"
                                    value={searchJob}
                                    onChange={(e) => setSearchJob(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent font-montserrat text-sm"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search by location"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent font-montserrat text-sm"
                                />
                            </div>
                            <button className="px-8 py-3 bg-violet-600 text-white rounded-xl font-semibold font-montserrat hover:bg-violet-700 transition-colors whitespace-nowrap">
                                Find Jobs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20 bg-[#F4F4F7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* Sidebar Filters */}
                        <div className="lg:w-80 flex-shrink-0">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-semibold font-montserrat text-text-light">Filters</h3>
                                    <button 
                                        onClick={handleClearAll}
                                        className="text-violet-600 text-sm font-medium font-montserrat hover:text-violet-700"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                {/* Date Posted */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold font-montserrat text-text-light mb-3">
                                        Date Posted
                                    </label>
                                    <select
                                        value={datePosted}
                                        onChange={(e) => setDatePosted(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 font-montserrat text-sm bg-white cursor-pointer"
                                    >
                                        <option value="anytime">Anytime</option>
                                        <option value="today">Today</option>
                                        <option value="week">This Week</option>
                                        <option value="month">This Month</option>
                                    </select>
                                </div>

                                {/* Job Type */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold font-montserrat text-text-light mb-3">
                                        Job Type
                                    </label>
                                    <div className="space-y-3">
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={jobTypes.fulltime}
                                                onChange={(e) => setJobTypes({...jobTypes, fulltime: e.target.checked})}
                                                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-montserrat text-gray-700">Full-time</span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={jobTypes.freelance}
                                                onChange={(e) => setJobTypes({...jobTypes, freelance: e.target.checked})}
                                                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-montserrat text-gray-700">Freelance</span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={jobTypes.internship}
                                                onChange={(e) => setJobTypes({...jobTypes, internship: e.target.checked})}
                                                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-montserrat text-gray-700">Internship</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Salary Range */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold font-montserrat text-text-light mb-3">
                                        Salary Range
                                    </label>
                                    <div className="px-2">
                                        <input
                                            type="range"
                                            min="3000"
                                            max="12000"
                                            step="500"
                                            value={salaryRange[1]}
                                            onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                                        />
                                        <div className="flex justify-between mt-2">
                                            <span className="text-xs font-montserrat text-gray-600">{salaryRange[0]}K</span>
                                            <span className="text-xs font-montserrat text-gray-600">{salaryRange[1]}K</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Preference */}
                                <div>
                                    <label className="block text-sm font-semibold font-montserrat text-text-light mb-3">
                                        Location Preference
                                    </label>
                                    <div className="space-y-3">
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={locationPrefs.remote}
                                                onChange={(e) => setLocationPrefs({...locationPrefs, remote: e.target.checked})}
                                                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-montserrat text-gray-700">Remote</span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={locationPrefs.onsite}
                                                onChange={(e) => setLocationPrefs({...locationPrefs, onsite: e.target.checked})}
                                                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-montserrat text-gray-700">On-site</span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={locationPrefs.hybrid}
                                                onChange={(e) => setLocationPrefs({...locationPrefs, hybrid: e.target.checked})}
                                                className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500 cursor-pointer"
                                            />
                                            <span className="ml-3 text-sm font-montserrat text-gray-700">Hybrid</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div className="flex-1">
                            <div className="mb-4">
                                <p className="text-sm text-gray-500 font-montserrat">
                                    Found <span className="font-semibold text-text-light">{filteredJobs.length}</span> Related Jobs
                                </p>
                            </div>

                            <div className="space-y-4">
                                {filteredJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        onClick={() => window.location.href = `/karir/${job.id}`}
                                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <div className={`w-14 h-14 ${job.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 text-2xl`}>
                                                {job.icon}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                    <div>
                                                        <h3 className="text-xl font-semibold font-montserrat text-text-light mb-1">
                                                            {job.title}
                                                        </h3>
                                                        <div className="flex items-center gap-3 text-sm text-gray-500 font-montserrat">
                                                            <span>Posted {job.postedTime}</span>
                                                            <span>•</span>
                                                            <span>{job.salary}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-lg text-xs font-medium font-montserrat">
                                                            {job.type}
                                                        </span>
                                                        <span className={`px-3 py-1 rounded-lg text-xs font-medium font-montserrat ${
                                                            job.location === 'Remote' ? 'bg-green-100 text-green-700' :
                                                            job.location === 'On-site' ? 'bg-orange-100 text-orange-700' :
                                                            'bg-blue-100 text-blue-700'
                                                        }`}>
                                                            {job.location}
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-600 font-montserrat leading-relaxed mb-4">
                                                    {job.description}
                                                </p>

                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.location.href = `/karir/${job.id}`;
                                                    }}
                                                    className="px-6 py-2.5 bg-violet-600 text-white rounded-xl font-medium font-montserrat hover:bg-violet-700 transition-colors flex items-center gap-2"
                                                >
                                                    View Details
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredJobs.length === 0 && (
                                <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                                    <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <h3 className="text-xl font-semibold font-montserrat text-text-light mb-2">
                                        No jobs found
                                    </h3>
                                    <p className="text-gray-500 font-montserrat">
                                        Try adjusting your filters or search criteria
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
