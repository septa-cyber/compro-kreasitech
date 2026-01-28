"use client";

const leftBenefits = [
    {
        title: "Guaranteed Data Accuracy",
        description:
            "Minimize human errors in payroll, taxation, and benefits processing.",
    },
    {
        title: "Employee Self-Service",
        description:
            "Employees can easily access payslips, request leave, and update their personal information anytime.",
    },
    {
        title: "Smart HR Analytics",
        description:
            "Gain real-time insights to support data-driven decision-making.",
    },
];

const rightBenefits = [
    {
        title: "Save Time & Costs",
        description:
            "Eliminate manual tasks with automated systems for payroll, attendance, and leave management.",
    },
    {
        title: "Integrated & Flexible",
        description:
            "Compatible with all types of businesses and accessible anytime, anywhere.",
    },
    {
        title: "Regulatory Compliance",
        description:
            "Ensure full compliance with labor regulations effortlessly.",
    },
];

export default function HiTalentBenefits() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FC] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-20 text-gray-900">
                    The Benefit
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8">
                    {/* Left Benefits - Desktop */}
                    <div className="hidden lg:flex flex-1 space-y-16 text-right">
                        {leftBenefits.map((benefit, index) => (
                            <div key={index} className="group">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Phone Mockup */}
                    <div className="flex-shrink-0 w-56 sm:w-64 md:w-80 relative z-10">
                        <div className="relative bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                            {/* Phone Notch */}
                            <div className="absolute top-0 w-full h-8 bg-gray-900 z-20 flex justify-center">
                                <div className="w-24 h-6 bg-black rounded-b-2xl"></div>
                            </div>

                            {/* Phone Screen Content */}
                            <div className="h-full w-full bg-white flex flex-col">
                                {/* Top Section - Purple Header */}
                                <div className="bg-violet-600 h-2/5 flex flex-col items-center justify-center p-6 text-white text-center relative">
                                    <span className="font-bold text-2xl mb-2">HiTalent</span>
                                    {/* Decorative Elements */}
                                    <div className="w-16 h-16 bg-white/20 rounded-xl mb-4 transform rotate-12 absolute -right-4 top-10"></div>
                                    <div className="w-24 h-24 bg-white/10 rounded-full absolute -left-8 bottom-10"></div>
                                    {/* Dashboard Preview Image */}
                                    <img
                                        alt="Mobile Dashboard Preview"
                                        className="rounded shadow-lg w-3/4 absolute -bottom-10 border-4 border-white"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzHub3urktCL6zFHuOcPChwWbI-AQwLe1fsfJU7zSrQLFMM-7G91vLTdYZei8UE-eLpvNngi_aq4pvVwKpvPL1Rj3HaAQRe7jPUw4cFPLLgqDDKkx0CvNoZXbhCFeCdh-B-NYUvTAPNtqkuRC-pTfQt7aXYFl6THNMO6U43sCzySWxS0xDiGWX7Zf7hs6bgveIvbd9akzQicbJa1_HFuyiJGC6nOJLR920b6ToeevgLQeZSwN_yAMKmUqOFr7gh_cpfM7ZL8FexRk"
                                    />
                                </div>

                                {/* Bottom Section - Login Form */}
                                <div className="flex-1 p-8 pt-16 flex flex-col justify-center space-y-4">
                                    <h4 className="font-bold text-gray-800 text-center text-lg">
                                        Login
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="h-10 bg-gray-100 rounded px-3 flex items-center text-xs text-gray-400">
                                            Email
                                        </div>
                                        <div className="h-10 bg-gray-100 rounded px-3 flex items-center text-xs text-gray-400">
                                            Password
                                        </div>
                                    </div>
                                    <div className="text-right text-xs text-violet-600">
                                        Forgot Password?
                                    </div>
                                    <button className="w-full bg-violet-600 text-white py-3 rounded font-bold text-sm">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Benefits - Desktop */}
                    <div className="hidden lg:flex flex-1 space-y-16 text-left">
                        {rightBenefits.map((benefit, index) => (
                            <div key={index} className="group">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Benefits List */}
                    <div className="lg:hidden w-full space-y-8 mt-8">
                        {[...leftBenefits, ...rightBenefits].map((benefit, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
