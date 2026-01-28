"use client";

export default function HiTalentHero() {
    return (
        <section className="pt-12 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Breadcrumb */}
                <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>Products</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                    <span className="text-violet-600 font-medium">HiTalent</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
                    <span className="text-violet-600">HiTalent:</span> Your Gateway to{" "}
                    <br className="hidden md:block" /> Exceptional Talent
                </h1>

                {/* Description */}
                <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-10 leading-relaxed px-4">
                    Manage HR more efficiently with HiTalent! From employee management and
                    automated payroll to digital attendance—everything in one platform.
                    Increase productivity, reduce errors, and deliver the best employee
                    experience. It&apos;s time to switch to a smarter HR solution!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
                    <a
                        className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-violet-600 rounded shadow-lg shadow-violet-500/30 hover:bg-violet-700 transition-all text-center"
                        href="#"
                    >
                        Contact Us
                    </a>
                    <a
                        className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:text-violet-600 transition-colors"
                        href="#about"
                    >
                        Learn More <i className="fas fa-arrow-down text-sm"></i>
                    </a>
                </div>

                {/* Dashboard Preview */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                        {/* Browser Chrome */}
                        <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        {/* Dashboard Image */}
                        <img
                            alt="HiTalent Dashboard Interface showing analytics graphs, employee lists, and notifications in a clean layout"
                            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9H5g8On2Vp5j_gJs3KZpR3lbUccEOnVoKvomGd_YQujv6qZeRn9pf0FZaD1jW5Ct59l-yYN4xKfhJp_aWof_jzIHRXTTHt8JC_0Oa39N7bGO-9ZBNODiBFPZEIsp_rQ9w5hZXerroD8TNFdReo0RkY_6Q6A3tCGm5qv-AJDKSZz2BLNlzbarB_6Lru-4TUc-dNrRw_upvh8G5encpu74s6hy8Z4sK0-9Vf5R_f45iuj6DsSYYUl1XM7dveQU1bPPXTqROFMB4TJY"
                        />
                        {/* Floating Card */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-gray-200 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-violet-100 rounded-full text-violet-600">
                                    <i className="fas fa-chart-line text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        Real-time Analytics
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Monitor performance instantly
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-violet-500/20 blur-3xl -z-10 rounded-[50%]"></div>
                </div>

                {/* Trusted By Section */}
                <p className="mt-16 mb-6 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Trusted by great businesses like:
                </p>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center gap-2 font-bold text-lg sm:text-xl text-violet-600">
                            <span className="w-6 h-6 bg-violet-600 text-white flex items-center justify-center rounded text-xs">
                                K
                            </span>
                            kreasitech
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
