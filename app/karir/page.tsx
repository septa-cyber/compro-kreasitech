"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface Job {
    id: number;
    title: string;
    position?: string;
    company: string;
    icon: string;
    iconBg: string;
    postedTime: string;
    salary: string; // e.g., "$80k - $120k/year" or "3.500K-6.500K"
    description: string;
    type: string;
    location: string;
    category: string;
    logo_url?: string;
    location_type?: string;
    originalDate?: string;
    salary_min?: number | string;
    salary_max?: number | string;
}

const formatCurrency = (value: number | string) => {
    if (!value && value !== 0) return '';
    const numberString = value.toString().replace(/\D/g, '');
    return 'Rp ' + numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const unformatCurrency = (value: string) => {
    return value.replace(/\D/g, '');
};

const displaySalary = (job: any) => {
    if (job.salary_min && job.salary_max) {
        return `${formatCurrency(job.salary_min)} - ${formatCurrency(job.salary_max)}`;
    } else if (job.salary_min) {
        return `${formatCurrency(job.salary_min)}`;
    } else if (job.salary_max) {
        return `${formatCurrency(job.salary_max)}`;
    }
    
    // Fallback if parsing failed - try to format if it looks like a number string
    if (job.salary && /^\d+$/.test(job.salary.toString().replace(/\D/g, ''))) {
        return formatCurrency(job.salary);
    }
    
    return job.salary || "Negosiasi";
};

export default function KarirPage() {
    const [jobsData, setJobsData] = useState<Job[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // Add { cache: "no-store", next: { revalidate: 0 } } or cache busting to ensure fresh data for CSR
                const res = await fetch('/api/jobs?status=open&t=' + new Date().getTime(), {
                    cache: 'no-store'
                });
                if (res.ok) {
                    const data = await res.json();
                    setJobsData(data.map((j: any) => ({
                        ...j,
                        originalDate: j.postedDate, // Preserve for filtering
                        postedTime: j.postedDate ? new Date(j.postedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : j.postedDate
                    })));
                }
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            }
        };
        fetchJobs();
    }, []);

    const [searchJob, setSearchJob] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [datePosted, setDatePosted] = useState("Anytime");
    const [jobTypes, setJobTypes] = useState({
        fulltime: false,
        parttime: false,
        contract: false,
        freelance: false,
        internship: false
    });
    const [salaryRange, setSalaryRange] = useState<(string | number)[]>([0, ""]);
    const [locationPrefs, setLocationPrefs] = useState({
        remote: false,
        wfo: false,
        wfh: false,
        hybrid: false
    });
    // Track active job for mobile click state
    const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

    // Filter toggle for mobile
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // Track if filter is maximized or minimized (half screen)
    const [isFilterMaximized, setIsFilterMaximized] = useState(false);
    const [dragStartY, setDragStartY] = useState<number | null>(null);
    const [dragCurrentY, setDragCurrentY] = useState<number | null>(null);

    // Applied Filters state (used for actual data filtering)
    const [appliedFilters, setAppliedFilters] = useState({
        searchJob: "",
        searchLocation: "",
        datePosted: "Anytime",
        jobTypes: {
            fulltime: false,
            parttime: false,
            contract: false,
            freelance: false,
            internship: false
        },
        salaryRange: [0, "" ] as (string | number)[],
        locationPrefs: {
            remote: false,
            wfo: false,
            wfh: false,
            hybrid: false
        }
    });

    const hasActiveFilters =
        searchJob !== "" ||
        searchLocation !== "" ||
        datePosted !== "Anytime" ||
        Object.values(jobTypes).some(v => v) ||
        salaryRange[0] !== 0 ||
        salaryRange[1] !== "" ||
        Object.values(locationPrefs).some(v => v);

    const handleClearAll = () => {
        const clearedUI = {
            searchJob: "",
            searchLocation: "",
            datePosted: "Anytime",
            jobTypes: { fulltime: false, parttime: false, contract: false, freelance: false, internship: false },
            salaryRange: [0, ""],
            locationPrefs: { remote: false, wfo: false, wfh: false, hybrid: false }
        };

        setSearchJob(clearedUI.searchJob);
        setSearchLocation(clearedUI.searchLocation);
        setDatePosted(clearedUI.datePosted);
        setJobTypes(clearedUI.jobTypes);
        setSalaryRange(clearedUI.salaryRange);
        setLocationPrefs(clearedUI.locationPrefs);

        setAppliedFilters(clearedUI);
    };

    const handleFindJobs = () => {
        setAppliedFilters({
            searchJob,
            searchLocation,
            datePosted,
            jobTypes,
            salaryRange,
            locationPrefs
        });
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

    // Drag handlers for the bottom sheet
    const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        setDragStartY(clientY);
        setDragCurrentY(0);
    };

    const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (dragStartY === null) return;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        const deltaY = clientY - dragStartY;

        // If maximized, only allow dragging down (deltaY > 0)
        if (isFilterMaximized && deltaY < 0) return;

        setDragCurrentY(deltaY);
    };

    const handleDragEnd = () => {
        if (dragStartY === null || dragCurrentY === null) {
            setDragStartY(null);
            setDragCurrentY(null);
            return;
        }

        const threshold = 50; // pixels to trigger state change

        if (isFilterMaximized) {
            // Dragged down from max
            if (dragCurrentY > threshold * 2) {
                // Dragged far down, close
                setIsFilterOpen(false);
                setIsFilterMaximized(false);
            } else if (dragCurrentY > threshold) {
                // Dragged slightly down, minimize
                setIsFilterMaximized(false);
            }
        } else {
            // If dragging from half size
            if (dragCurrentY < -threshold) {
                // Dragged up
                setIsFilterMaximized(true);
            } else if (dragCurrentY > threshold) {
                // Dragged down
                setIsFilterOpen(false);
            }
        }

        setDragStartY(null);
        setDragCurrentY(null);
    };

    const getTypeColor = (type: string) => {
        if (!type) return 'bg-gray-400 !text-white';
        const t = type.toLowerCase();
        if (t.includes('full-time') || t.includes('fulltime')) return 'bg-violet-500 !text-white';
        if (t.includes('part-time') || t.includes('parttime')) return 'bg-pink-500 !text-white';
        if (t.includes('freelance')) return 'bg-amber-500 !text-white';
        if (t.includes('internship')) return 'bg-emerald-500 !text-white';
        if (t.includes('contract')) return 'bg-cyan-500 !text-white';
        return 'bg-gray-400 !text-white';
    };

    const getLocationTypeColor = (type: string) => {
        if (!type) return 'bg-gray-400 !text-white';
        const t = type.toLowerCase();
        if (t.includes('remote')) return 'bg-blue-400 !text-white';
        if (t.includes('hybrid')) return 'bg-indigo-400 !text-white';
        if (t.includes('wfo') || t.includes('office')) return 'bg-rose-400 !text-white';
        if (t.includes('wfh') || t.includes('home')) return 'bg-sky-400 !text-white';
        return 'bg-gray-400 !text-white';
    };

    const filteredJobs = jobsData.filter(job => {
        // 1. Search Filter
        const matchesSearch = job.title.toLowerCase().includes(appliedFilters.searchJob.toLowerCase());

        // 2. Location Search Filter
        const matchesLocation = appliedFilters.searchLocation === "" ||
            job.location.toLowerCase().includes(appliedFilters.searchLocation.toLowerCase());

        // 3. Date Posted Filter
        let matchesDate = true;
        const compareDate = job.originalDate || job.postedTime;
        if (appliedFilters.datePosted !== "Anytime" && compareDate) {
            const now = new Date();
            const jobDate = new Date(compareDate);
            const diffTime = Math.abs(now.getTime() - jobDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (appliedFilters.datePosted === "Last 24 Hours") matchesDate = diffDays <= 1;
            else if (appliedFilters.datePosted === "Last 3 Days") matchesDate = diffDays <= 3;
            else if (appliedFilters.datePosted === "Last 7 Days") matchesDate = diffDays <= 7;
        }

        // 4. Job Type Filter
        const activeTypes = Object.entries(appliedFilters.jobTypes)
            .filter(([_, active]) => active)
            .map(([id]) => {
                if (id === 'fulltime') return 'full-time';
                if (id === 'parttime') return 'part-time';
                return id;
            });

        const matchesJobType = activeTypes.length === 0 ||
            (job.type && activeTypes.includes(job.type.toLowerCase()));

        // 5. Salary Range Filter
        let matchesSalary = true;
        const jobMinVal = job.salary_min ? parseFloat(job.salary_min.toString().replace(/\D/g, '')) : null;

        if (jobMinVal !== null) {
            const filterMin = appliedFilters.salaryRange[0] ? parseInt(appliedFilters.salaryRange[0].toString()) : 0;
            const filterMax = appliedFilters.salaryRange[1] ? parseInt(appliedFilters.salaryRange[1].toString()) : null;
            
            matchesSalary = jobMinVal >= filterMin && (filterMax === null || jobMinVal <= filterMax);
        } else if (job.salary) {
            // Fallback for old string format
            const salaryParts = job.salary.match(/\d+[\d,.]*/g);
            if (salaryParts && salaryParts.length > 0) {
                const jobMin = parseFloat(salaryParts[0].replace(/[,.]/g, ''));
                const filterMin = appliedFilters.salaryRange[0] ? parseInt(appliedFilters.salaryRange[0].toString()) : 0;
                const filterMax = appliedFilters.salaryRange[1] ? parseInt(appliedFilters.salaryRange[1].toString()) : null;
                matchesSalary = jobMin >= filterMin && (filterMax === null || jobMin <= filterMax);
            }
        }

        // 6. Location Preference Filter
        const activeLocs = Object.entries(appliedFilters.locationPrefs)
            .filter(([_, active]) => active)
            .map(([id]) => id.toLowerCase());

        const matchesLocPref = activeLocs.length === 0 ||
            (job.location_type && activeLocs.includes(job.location_type.toLowerCase()));

        return matchesSearch && matchesLocation && matchesDate && matchesJobType && matchesSalary && matchesLocPref;
    });

    // Calculations for salary slider track

    return (
        <div className="bg-[#F4F4F7] min-h-screen">
            <Navbar />

            {/* Main Content Container */}
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-10 lg:pb-48">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside
                        className={`
                            fixed inset-0 z-[1050] bg-black/50 transition-opacity duration-300
                            ${isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                            lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 lg:pointer-events-auto lg:z-[1] lg:w-64 flex-shrink-0 lg:block
                        `}
                        onClick={() => { setIsFilterOpen(false); setIsFilterMaximized(false); }}
                    >
                        <div
                            className={`
                                absolute bottom-0 left-0 w-full bg-white lg:bg-transparent shadow-[0_-8px_30px_rgb(0,0,0,0.12)] lg:shadow-none flex flex-col lg:block
                                lg:static lg:h-auto lg:w-full lg:max-w-none lg:translate-y-0
                                rounded-t-2xl lg:rounded-none lg:overflow-visible
                                ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}
                            `}
                            style={{
                                height: isFilterMaximized
                                    ? (dragCurrentY !== null && dragCurrentY > 0 ? `calc(100dvh - ${dragCurrentY}px)` : '100dvh')
                                    : (dragCurrentY !== null ? `calc(60vh - ${dragCurrentY}px)` : 'auto'),
                                maxHeight: isFilterMaximized ? '100dvh' : '85vh',
                                transition: dragStartY !== null
                                    ? 'none'
                                    : 'height 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.4s cubic-bezier(0.32,0.72,0,1), border-radius 0.4s cubic-bezier(0.32,0.72,0,1)'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Drag Handle for Mobile */}
                            <div
                                className="lg:hidden w-full flex justify-center items-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none shrink-0"
                                onTouchStart={handleDragStart}
                                onTouchMove={handleDragMove}
                                onTouchEnd={handleDragEnd}
                                onMouseDown={handleDragStart}
                                onMouseMove={dragStartY !== null ? handleDragMove : undefined}
                                onMouseUp={handleDragEnd}
                                onMouseLeave={handleDragEnd}
                            >
                                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                            </div>

                            <div className="flex-1 overflow-y-auto lg:overflow-visible custom-scrollbar">
                                <div className="lg:sticky lg:top-24 lg:mb-12">
                                    <div className={`pb-8 lg:pb-12 bg-white lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar lg:rounded-lg border-0 lg:border border-gray-200 inline-flex flex-col justify-start items-center gap-4 w-full lg:min-h-0 rounded-t-2xl lg:rounded-none ${isFilterMaximized ? 'pt-6' : ''} lg:pt-0`}>
                                        {/* Header */}
                                        <div className="w-full py-6 px-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-2xl lg:rounded-t-lg">
                                            <div className="flex justify-start font-h6 text-gray-900">Filters</div>
                                            <div className="flex justify-end items-center gap-3">
                                                    {hasActiveFilters && (
                                                        <button
                                                            onClick={handleClearAll}
                                                            className="text-right justify-start text-violet-600 font-body-xs font-medium hover:text-violet-700 cursor-pointer"
                                                        >
                                                            Clear All
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => setIsFilterOpen(false)}
                                                        className="lg:hidden w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-800 bg-gray-100 rounded-full shrink-0"
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        

                                        <div className="flex flex-col justify-start items-start gap-6 lg:gap-8 w-full px-6 pt-2 lg:pt-6">
                                            {/* Search Group */}
                                            <div className="hidden lg:flex w-full flex-col gap-4">
                                                {/* Job Search */}
                                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                                    <label className="text-sm font-semibold text-gray-700">Search Jobs</label>
                                                    <div className="relative w-full h-11 rounded-lg border border-gray-200 group focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 transition-all bg-gray-50/50 flex justify-start items-center px-4">
                                                        <i className="fas fa-search text-gray-400 text-sm mr-3 group-focus-within:text-violet-500 transition-colors"></i>
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. Frontend Developer"
                                                            value={searchJob}
                                                            onChange={(e) => setSearchJob(e.target.value)}
                                                            className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 font-body-sm placeholder-gray-400 p-0 text-gray-900"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Location Search */}
                                                <div className="self-stretch flex flex-col justify-start items-start gap-2 hidden lg:flex">
                                                    <label className="text-sm font-semibold text-gray-700">Location</label>
                                                    <div className="relative w-full h-11 rounded-lg border border-gray-200 group focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 transition-all bg-gray-50/50 flex justify-start items-center px-4">
                                                        <i className="fas fa-map-marker-alt text-gray-400 text-sm mr-3 group-focus-within:text-violet-500 transition-colors"></i>
                                                        <input
                                                            type="text"
                                                            placeholder="City, state, or zip"
                                                            value={searchLocation}
                                                            onChange={(e) => setSearchLocation(e.target.value)}
                                                            className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 font-body-sm placeholder-gray-400 p-0 text-gray-900"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="hidden lg:block self-stretch h-px bg-gray-100" />

                                            {/* Date Posted */}
                                            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                                <label className="text-sm font-semibold text-gray-700">Date Posted</label>
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
                                                        <span className="font-body-xs">{datePosted}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="self-stretch h-px bg-gray-100" />

                                            {/* Job Type */}
                                            <div className="w-full flex flex-col justify-start items-start gap-3">
                                                <label className="text-sm font-semibold text-gray-700">Job Type</label>
                                                {[
                                                    { id: 'fulltime', label: 'Full-time' },
                                                    { id: 'parttime', label: 'Part-time' },
                                                    { id: 'contract', label: 'Contract' },
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
                                                        <div className="text-center justify-start font-body-sm">{type.label}</div>
                                                    </label>
                                                ))}
                                            </div>

                                            <div className="self-stretch h-px bg-gray-100" />

                                            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                                                <label className="text-sm font-semibold text-gray-700">Salary Range</label>
                                                <div className="w-full flex flex-col gap-3">
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">Minimal (Rp)</label>
                                                        <div className="relative w-full h-10 rounded-lg border border-gray-200 group focus-within:border-violet-500 transition-all bg-white flex justify-start items-center px-3">
                                                            <input
                                                                type="text"
                                                                placeholder="0"
                                                                value={salaryRange[0] ? formatCurrency(salaryRange[0].toString()).replace('Rp ', '') : ''}
                                                                onChange={(e) => {
                                                                    const unformatted = unformatCurrency(e.target.value);
                                                                    if (/^\d*$/.test(unformatted)) {
                                                                        const newRange = [...salaryRange];
                                                                        newRange[0] = unformatted;
                                                                        setSalaryRange(newRange);
                                                                    }
                                                                }}
                                                                className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 font-body-sm text-gray-900 p-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[10px] uppercase tracking-wider text-gray-400 font-bold ml-1">Maksimal (Rp)</label>
                                                        <div className="relative w-full h-10 rounded-lg border border-gray-200 group focus-within:border-violet-500 transition-all bg-white flex justify-start items-center px-3">
                                                            <input
                                                                type="text"
                                                                placeholder="No Limit"
                                                                value={salaryRange[1] ? formatCurrency(salaryRange[1].toString()).replace('Rp ', '') : ''}
                                                                onChange={(e) => {
                                                                    const unformatted = unformatCurrency(e.target.value);
                                                                    if (/^\d*$/.test(unformatted)) {
                                                                        const newRange = [...salaryRange];
                                                                        newRange[1] = unformatted;
                                                                        setSalaryRange(newRange);
                                                                    }
                                                                }}
                                                                className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 font-body-sm text-gray-900 p-0"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        <div className="self-stretch h-px bg-gray-100" />

                                            {/* Location Preference */}
                                            <div className="w-full flex flex-col justify-start items-start gap-3">
                                                <label className="text-sm font-semibold text-gray-700">Location Preference</label>
                                                {[
                                                    { id: 'remote', label: 'Remote' },
                                                    { id: 'wfo', label: 'WFO (Office)' },
                                                    { id: 'wfh', label: 'WFH (Home)' },
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
                                                        <div className="text-center justify-start font-body-sm">{loc.label}</div>
                                                    </label>
                                                ))}
                                            </div>

                                            {/* Find Jobs Button */}
                                            <div className="w-full mt-0 lg:mt-4 pb-0 lg:pb-4">
                                                <button
                                                    onClick={() => { setIsFilterOpen(false); setIsFilterMaximized(false); handleFindJobs(); }}
                                                    disabled={!hasActiveFilters}
                                                    className={`w-full py-3 rounded-lg font-body-sm font-medium transition-all ${
                                                        !hasActiveFilters
                                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                            : 'bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg shadow-md hover:-translate-y-0.5'
                                                    }`}
                                                >
                                                    Apply Filters
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 min-h-[400px] lg:min-h-[800px]">
                        {/* Mobile Search Card */}
                        <div className="lg:hidden mb-4">
                            <div className="w-full rounded-lg border border-gray-200 bg-white p-4 flex flex-col gap-4">
                                {/* Job Keyword Search */}
                                <div className="relative w-full h-10 flex justify-start items-center">
                                    <i className="fas fa-search text-gray-400 text-lg mr-4"></i>
                                    <input
                                        type="text"
                                        placeholder="Search for jobs"
                                        value={searchJob}
                                        onChange={(e) => setSearchJob(e.target.value)}
                                        className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 font-body-sm placeholder-gray-400 p-0 text-gray-900"
                                    />
                                </div>
                                
                                <div className="w-full h-px bg-gray-100" />

                                {/* Location Search */}
                                <div className="relative w-full h-10 flex justify-start items-center">
                                    <i className="fas fa-map-marker-alt text-gray-400 text-lg mr-4 pl-0.5"></i>
                                    <input
                                        type="text"
                                        placeholder="Search by location"
                                        value={searchLocation}
                                        onChange={(e) => setSearchLocation(e.target.value)}
                                        className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 font-body-sm placeholder-gray-400 p-0 text-gray-900"
                                    />
                                </div>

                                {/* Full Width Search Button */}
                                <button
                                    onClick={handleFindJobs}
                                    disabled={!searchJob && !searchLocation}
                                    className={`w-full h-11 mt-1 rounded-lg font-btn-sm font-medium transition-all text-sm flex items-center justify-center ${
                                        (!searchJob && !searchLocation)
                                            ? 'bg-[#F4F5F7] text-gray-400 cursor-not-allowed'
                                            : 'bg-violet-600 text-white hover:bg-violet-700'
                                    }`}
                                >
                                    Find Jobs
                                </button>
                            </div>
                        </div>

                        {/* Top Result Count & Mobile Filter Toggle */}
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="lg:hidden flex border border-gray-200 bg-white items-center gap-2 px-4 py-2 rounded-lg text-gray-700 font-body-sm hover:bg-gray-50 transition-colors"
                            >
                                <i className="fas fa-filter"></i>
                                Filters {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-violet-600"></span>}
                            </button>
                            <div className="text-right flex-1">
                                <p className="font-body-sm text-gray-400">
                                    Found {filteredJobs.length} Related Jobs
                                </p>
                            </div>
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
                                                data-[active=true]:bg-yellow-400 transition-colors duration-500 overflow-hidden">
                                                {job.logo_url ? (
                                                    <img src={job.logo_url} alt={job.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <i className={`${job.icon} text-xl
                                                        text-gray-700 group-hover:text-violet-900
                                                        data-[active=true]:text-violet-900 transition-colors duration-500`}></i>
                                                )}
                                            </div>
                                            <div className="flex flex-col justify-center items-start gap-1">
                                                <div className="font-h5
                                                    text-gray-900 group-hover:text-white
                                                    data-[active=true]:text-white transition-colors duration-500">
                                                    {job.title}
                                                </div>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <div className="font-body-xs
                                                        text-gray-900 group-hover:text-white
                                                        data-[active=true]:text-white transition-colors duration-500">
                                                        Posted {job.postedTime}
                                                    </div>
                                                    {job.position && (
                                                        <>
                                                            <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-white data-[active=true]:bg-white transition-colors duration-500" />
                                                            <div className="font-body-xs text-gray-900 group-hover:text-white data-[active=true]:text-white transition-colors duration-500">
                                                                {job.position}
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="w-1 h-1 rounded-full
                                                        bg-gray-300 group-hover:bg-white
                                                        data-[active=true]:bg-white transition-colors duration-500" />
                                                    <div className="font-body-xs
                                                        text-gray-900 group-hover:text-white
                                                        data-[active=true]:text-white transition-colors duration-500">
                                                        {displaySalary(job)}
                                                    </div>

                                                    <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-white data-[active=true]:bg-white transition-colors duration-500 ml-1" />

                                                    <div className="font-body-xs text-gray-900 group-hover:text-white data-[active=true]:text-white transition-colors duration-500">
                                                        {job.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tags placed in original bottom-right position with dynamic colors */}
                                        <div className="flex flex-wrap justify-start items-center gap-2 mt-2 md:mt-0">
                                            <div className={`px-3 py-1 rounded flex justify-center items-center ${getTypeColor(job.type)} group-hover:bg-white/20 group-hover:text-white data-[active=true]:bg-white/20 data-[active=true]:text-white transition-colors duration-500`}>
                                                <div className="font-body-xs font-medium !text-white">{job.type}</div>
                                            </div>
                                            {job.location_type && (
                                                <div className={`px-3 py-1 rounded flex justify-center items-center ${getLocationTypeColor(job.location_type)} group-hover:bg-white/20 group-hover:text-white data-[active=true]:bg-white/20 data-[active=true]:text-white transition-colors duration-500`}>
                                                    <div className="font-body-xs font-medium !text-white">{job.location_type}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="self-stretch font-body-sm line-clamp-2
                                        text-gray-500 group-hover:text-white
                                        data-[active=true]:text-white transition-colors duration-500">
                                        {job.description}
                                    </div>

                                    {/* Apply Button Section - Originally Hidden, Visible on Hover/Active */}
                                    <div className="self-stretch hidden group-hover:flex data-[active=true]:flex flex-col justify-center items-end gap-2.5 animate-in fade-in slide-in-from-top-1 duration-500 fill-mode-forwards">
                                        <div className="inline-flex justify-end items-center gap-4">
                                            <div className="text-right justify-start font-btn !text-white">Apply</div>
                                            <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                                                <i className="fas fa-arrow-right text-white -rotate-45"></i>
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
                                <h3 className="font-h4 text-gray-900 mb-2">
                                    No jobs found
                                </h3>
                                <p className="font-body-sm text-gray-500">
                                    Try adjusting your filters or search criteria
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

