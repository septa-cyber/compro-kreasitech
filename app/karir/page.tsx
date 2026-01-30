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
    salary: string; // e.g., "$80k - $120k/year" or "3.500K-6.500K"
    description: string;
    type: string;
    location: string;
    category: string;
}

const jobsData: Job[] = [
    {
        id: 1,
        title: "Front-End Developer",
        company: "CodeCo",
        icon: "fab fa-react",
        iconBg: "bg-blue-600 text-white",
        postedTime: "2 days ago",
        salary: "$80k - $120k/year",
        description: "We are looking for an experienced Front-End Developer to join our team and build responsive user interfaces.",
        type: "Technology",
        location: "On Site",
        category: "full-time"
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: "EcoWorks",
        icon: "fab fa-figma",
        iconBg: "bg-green-500 text-white",
        postedTime: "1 day ago",
        salary: "$75k - $110k/year",
        description: "Design user-centric experiences for sustainable products.",
        type: "Technology",
        location: "Hybrid",
        category: "full-time"
    },
    {
        id: 3,
        title: "Back-End Engineer",
        company: "TechFlow",
        icon: "fas fa-server",
        iconBg: "bg-yellow-500 text-white",
        postedTime: "3 days ago",
        salary: "$90k - $130k/year",
        description: "Build scalable APIs and microservices for our growing platform.",
        type: "Technology",
        location: "Remote",
        category: "full-time"
    },
    {
        id: 4,
        title: "Product Manager",
        company: "InnoSoft",
        icon: "fas fa-rocket",
        iconBg: "bg-purple-500 text-white",
        postedTime: "5 days ago",
        salary: "$100k - $150k/year",
        description: "Lead the product vision and strategy for our core products.",
        type: "Management",
        location: "On Site",
        category: "full-time"
    }
];

export default function KarirPage() {
    const [searchJob, setSearchJob] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [datePosted, setDatePosted] = useState("Last 7 Days");
    const [jobTypes, setJobTypes] = useState({
        fulltime: true,
        parttime: true,
        contract: false,
        internship: false
    });
    const [salaryRange, setSalaryRange] = useState([3500, 6500]);
    const [locationPrefs, setLocationPrefs] = useState({
        remote: false,
        onsite: false,
        hybrid: false
    });
    // Track active job for mobile click state
    const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

    const handleClearAll = () => {
        setSearchJob("");
        setSearchLocation("");
        setDatePosted("Last 7 Days");
        setJobTypes({ fulltime: false, parttime: false, contract: false, internship: false });
        setSalaryRange([3500, 6500]);
        setLocationPrefs({ remote: false, onsite: false, hybrid: false });
    };

    const handleSalaryChange = (index: number, value: number) => {
        const newRange = [...salaryRange];
        newRange[index] = value;
        // Prevent crossing
        if (index === 0 && value > salaryRange[1]) newRange[0] = salaryRange[1];
        if (index === 1 && value < salaryRange[0]) newRange[1] = salaryRange[0];
        setSalaryRange(newRange);
    };

    const handleJobClick = (e: React.MouseEvent, id: number) => {
        // Build navigation url
        const url = `/karir/${id}`;

        // Check if device is likely mobile/tablet (or if user wants persistent click state logic)
        // Using window.innerWidth in handler is safe for client interaction
        if (window.innerWidth < 1024) { // lg breakpoint
            if (selectedJobId !== id) {
                e.preventDefault();
                setSelectedJobId(id);
            } else {
                // Already selected, proceed to navigate
                window.location.href = url;
            }
        } else {
            // Desktop: Navigate immediately
            window.location.href = url;
        }
    };

    const filteredJobs = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
            job.description.toLowerCase().includes(searchJob.toLowerCase());
        const matchesLocation = searchLocation === "" ||
            job.location.toLowerCase().includes(searchLocation.toLowerCase());

        return matchesSearch && matchesLocation;
    });

    // Calculations for salary slider track
    const minSalary = 3000;
    const maxSalary = 12000;
    const getPercent = (value: number) => Math.round(((value - minSalary) / (maxSalary - minSalary)) * 100);

    return (
        <div className="bg-[#f8f9fc] text-gray-800 font-sans min-h-screen">
            <Navbar />

            {/* Main Content Container */}
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="pb-4 bg-white rounded-lg border border-gray-200 inline-flex flex-col justify-start items-center gap-4 w-full">
                                {/* Header */}
                                <div className="w-full py-4 border-b border-gray-200 inline-flex justify-center items-center gap-2.5">
                                    <div className="flex-1 px-4 flex justify-center items-center gap-2.5">
                                        <div className="flex-1 justify-start text-gray-900 text-base font-medium font-montserrat">Filters</div>
                                        <button
                                            onClick={handleClearAll}
                                            className="flex-1 text-right justify-start text-violet-600 text-xs font-medium font-montserrat hover:text-violet-700"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-start gap-6 w-full px-4">
                                    {/* Date Posted */}
                                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                                        <div className="self-stretch justify-start text-gray-900 text-base font-medium font-montserrat">Date Posted</div>
                                        <div className="relative w-full h-12 rounded-lg border border-gray-200 inline-flex justify-start items-center gap-2.5 bg-white">
                                            <select
                                                value={datePosted}
                                                onChange={(e) => setDatePosted(e.target.value)}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 appearance-none pl-4 pr-10"
                                            >
                                                <option value="Anytime">Anytime</option>
                                                <option value="Last 24 Hours">Last 24 Hours</option>
                                                <option value="Last 3 Days">Last 3 Days</option>
                                                <option value="Last 7 Days">Last 7 Days</option>
                                            </select>

                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-900">
                                                <i className="fas fa-chevron-down text-xs"></i>
                                            </div>

                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <span className="text-gray-900 text-xs font-normal font-montserrat">{datePosted}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="self-stretch h-px bg-gray-200" />

                                    {/* Job Type */}
                                    <div className="w-full flex flex-col justify-start items-start gap-4">
                                        <div className="justify-start text-gray-900 text-base font-medium font-montserrat">Job Type</div>
                                        {[
                                            { id: 'fulltime', label: 'Full-time' },
                                            { id: 'freelance', label: 'Freelance' },
                                            { id: 'internship', label: 'Internship' }
                                        ].map((type) => (
                                            <label key={type.id} className="self-stretch h-5 inline-flex justify-start items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={jobTypes[type.id as keyof typeof jobTypes]}
                                                    onChange={(e) => setJobTypes({ ...jobTypes, [type.id]: e.target.checked })}
                                                    className="hidden"
                                                />
                                                {jobTypes[type.id as keyof typeof jobTypes] ? (
                                                    <div className="w-5 h-5 bg-violet-800 rounded border border-violet-800 flex justify-center items-center gap-2.5 overflow-hidden">
                                                        <i className="fas fa-check text-white text-[8px]"></i>
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 rounded border border-gray-200 group-hover:border-violet-400 transition-colors" />
                                                )}
                                                <div className="text-center justify-start text-gray-900 text-xs font-normal font-montserrat">{type.label}</div>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="self-stretch h-px bg-gray-200" />

                                    {/* Salary Range */}
                                    <div className="self-stretch justify-start text-gray-900 text-base font-medium font-montserrat">Salary Range</div>
                                    <div className="self-stretch flex flex-col justify-start items-start gap-6 relative h-16">
                                        {/* Slider Container */}
                                        <div className="relative w-full h-1 bg-gray-200 rounded-sm mt-2">
                                            {/* Active Rail */}
                                            <div
                                                className="absolute h-full bg-violet-600 rounded-sm z-10"
                                                style={{
                                                    left: `${getPercent(salaryRange[0])}%`,
                                                    width: `${getPercent(salaryRange[1]) - getPercent(salaryRange[0])}%`
                                                }}
                                            />

                                            {/* Min Slider */}
                                            <input
                                                type="range"
                                                min={minSalary}
                                                max={maxSalary}
                                                step="500"
                                                value={salaryRange[0]}
                                                onChange={(e) => handleSalaryChange(0, Math.min(Number(e.target.value), salaryRange[1] - 500))}
                                                className="absolute w-full h-full opacity-0 z-20 cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [-webkit-appearance:none] bg-transparent"
                                            />
                                            {/* Max Slider */}
                                            <input
                                                type="range"
                                                min={minSalary}
                                                max={maxSalary}
                                                step="500"
                                                value={salaryRange[1]}
                                                onChange={(e) => handleSalaryChange(1, Math.max(Number(e.target.value), salaryRange[0] + 500))}
                                                className="absolute w-full h-full opacity-0 z-20 cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [-webkit-appearance:none] bg-transparent"
                                            />

                                            {/* Thumb Visuals */}
                                            <div
                                                className="absolute w-3 h-3 bg-white border-2 border-violet-600 rounded-full z-10 top-1/2 -translate-y-1/2 -ml-1.5 flex items-center justify-center pointer-events-none"
                                                style={{ left: `${getPercent(salaryRange[0])}%` }}
                                            >
                                                <div className="w-1.5 h-1.5 bg-violet-600 rounded-full" />
                                            </div>
                                            <div
                                                className="absolute w-3 h-3 bg-white border-2 border-violet-600 rounded-full z-10 top-1/2 -translate-y-1/2 -ml-1.5 flex items-center justify-center pointer-events-none"
                                                style={{ left: `${getPercent(salaryRange[1])}%` }}
                                            >
                                                <div className="w-1.5 h-1.5 bg-violet-600 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Labels */}
                                        <div className="w-full flex justify-between items-center -mt-2">
                                            <div className="flex flex-col justify-start items-center gap-2" style={{ marginLeft: `${getPercent(salaryRange[0])}%`, transform: 'translateX(-50%)', transition: 'margin-left 0.1s' }}>
                                                <div className="text-center justify-start text-gray-900 text-xs font-medium font-montserrat">{salaryRange[0].toLocaleString()} K</div>
                                            </div>
                                            <div className="flex flex-col justify-start items-center gap-2" style={{ marginRight: `${100 - getPercent(salaryRange[1])}%`, transform: 'translateX(50%)', transition: 'margin-right 0.1s' }}>
                                                <div className="text-center justify-start text-gray-900 text-xs font-medium font-montserrat">{salaryRange[1].toLocaleString()} K</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="self-stretch h-px bg-gray-200" />

                                    {/* Location Preference */}
                                    <div className="w-full flex flex-col justify-start items-start gap-4">
                                        <div className="justify-start text-gray-900 text-base font-medium font-montserrat">Location Preference</div>
                                        {[
                                            { id: 'remote', label: 'Remote' },
                                            { id: 'onsite', label: 'On-site' },
                                            { id: 'hybrid', label: 'Hybrid' }
                                        ].map((loc) => (
                                            <label key={loc.id} className="self-stretch h-5 inline-flex justify-start items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={locationPrefs[loc.id as keyof typeof locationPrefs]}
                                                    onChange={(e) => setLocationPrefs({ ...locationPrefs, [loc.id]: e.target.checked })}
                                                    className="hidden"
                                                />
                                                {locationPrefs[loc.id as keyof typeof locationPrefs] ? (
                                                    <div className="w-5 h-5 bg-violet-800 rounded border border-violet-800 flex justify-center items-center gap-2.5 overflow-hidden">
                                                        <i className="fas fa-check text-white text-[8px]"></i>
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 rounded border border-gray-200 group-hover:border-violet-400 transition-colors" />
                                                )}
                                                <div className="text-center justify-start text-gray-900 text-xs font-normal font-montserrat">{loc.label}</div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="w-full p-4 bg-white rounded-lg border border-gray-200 flex flex-col justify-start items-start gap-4 mb-6">
                            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="flex-1 w-full md:border-r border-gray-200 flex justify-start items-center gap-2.5">
                                    <div className="flex-1 flex justify-start items-center gap-2">
                                        <div className="w-6 h-6 relative flex items-center justify-center">
                                            <i className="fas fa-search text-gray-400 text-base"></i>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search for jobs"
                                            value={searchJob}
                                            onChange={(e) => setSearchJob(e.target.value)}
                                            className="w-full bg-transparent border-none focus:ring-0 text-base font-normal font-montserrat text-gray-900 placeholder-gray-400 p-0"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 w-full flex justify-start items-center gap-2.5">
                                    <div className="flex-1 md:pl-4 flex justify-start items-center gap-2">
                                        <div className="w-6 h-6 relative flex items-center justify-center">
                                            <i className="fas fa-map-marker-alt text-gray-400 text-base"></i>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search by location"
                                            value={searchLocation}
                                            onChange={(e) => setSearchLocation(e.target.value)}
                                            className="w-full bg-transparent border-none focus:ring-0 text-base font-normal font-montserrat text-gray-900 placeholder-gray-400 p-0"
                                        />
                                    </div>
                                </div>
                                <button className="w-full md:w-auto px-8 py-3.5 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors">
                                    <div className="justify-start text-gray-100 text-xs font-medium font-montserrat">Find Jobs</div>
                                </button>
                            </div>
                        </div>

                        {/* Top Result Count */}
                        <div className="text-right mb-4">
                            <p className="text-sm text-gray-400 font-montserrat">
                                Found {filteredJobs.length} Related Jobs
                            </p>
                        </div>

                        {/* Job Lists */}
                        <div className="space-y-4">
                            {filteredJobs.map((job) => (
                                <div
                                    key={job.id}
                                    onClick={(e) => handleJobClick(e, job.id)}
                                    // data-active attribute for cleaner state selection logic
                                    data-active={selectedJobId === job.id}
                                    className={`w-full p-4 rounded-lg border border-gray-200 flex flex-col justify-start items-start gap-4 transition-all duration-500 ease-in-out cursor-pointer group 
                                    bg-white hover:bg-violet-800 hover:border-violet-800
                                    data-[active=true]:bg-violet-800 data-[active=true]:border-violet-800`}
                                >
                                    <div className="self-stretch flex flex-col md:flex-row justify-between items-start gap-4">
                                        <div className="flex justify-start items-center gap-4">
                                            <div className="w-11 h-11 rounded-lg flex justify-center items-center flex-shrink-0
                                                bg-gray-100 group-hover:bg-yellow-400
                                                data-[active=true]:bg-yellow-400 transition-colors duration-500">
                                                <i className={`${job.icon} text-xl
                                                    text-gray-700 group-hover:text-violet-900
                                                    data-[active=true]:text-violet-900 transition-colors duration-500`}></i>
                                            </div>
                                            <div className="flex flex-col justify-center items-start gap-1">
                                                <div className="text-lg font-medium font-montserrat
                                                    text-gray-900 group-hover:text-white
                                                    data-[active=true]:text-white transition-colors duration-500">
                                                    {job.title}
                                                </div>
                                                <div className="flex justify-start items-center gap-2">
                                                    <div className="text-xs font-normal font-montserrat
                                                        text-gray-900 group-hover:text-white
                                                        data-[active=true]:text-white transition-colors duration-500">
                                                        Posted {job.postedTime}
                                                    </div>
                                                    <div className="w-1 h-1 rounded-full
                                                        bg-gray-300 group-hover:bg-white
                                                        data-[active=true]:bg-white transition-colors duration-500" />
                                                    <div className="text-xs font-normal font-montserrat
                                                        text-gray-900 group-hover:text-white
                                                        data-[active=true]:text-white transition-colors duration-500">
                                                        {job.salary}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-start items-center gap-2">
                                            <div className="px-3 py-1 bg-violet-500 rounded flex justify-center items-center">
                                                <div className="text-white text-xs font-normal font-montserrat">{job.type}</div>
                                            </div>
                                            <div className="px-3 py-1 bg-orange-300 rounded flex justify-center items-center">
                                                <div className="text-white text-xs font-normal font-montserrat">{job.location}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="self-stretch text-sm font-normal font-montserrat line-clamp-2
                                        text-gray-500 group-hover:text-white
                                        data-[active=true]:text-white transition-colors duration-500">
                                        {job.description}
                                    </div>

                                    {/* Apply Button Section - Originally Hidden, Visible on Hover/Active */}
                                    <div className="self-stretch hidden group-hover:flex data-[active=true]:flex flex-col justify-center items-end gap-2.5 animate-in fade-in slide-in-from-top-1 duration-500 fill-mode-forwards">
                                        <div className="inline-flex justify-end items-center gap-4">
                                            <div className="text-right justify-start text-white text-base font-medium font-montserrat">Apply</div>
                                            <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                                                <i className="fas fa-arrow-right text-violet-300 -rotate-45"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredJobs.length === 0 && (
                            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold font-montserrat text-gray-900 mb-2">
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

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
