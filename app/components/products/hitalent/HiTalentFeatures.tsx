"use client";

const features = [
    {
        number: 1,
        title: "Smart Attendance",
        description:
            "Our SaaS hiring experts keep a wide range of pre-screened experts from different areas of information technology and with varied skills. These professionals come from areas like Software Development.",
    },
    {
        number: 2,
        title: "Manage Employees",
        description:
            "Clients can hire workers as they need them, whether it's for short projects longer contracts, or freelance work. Companies don't have to worry about long-term commitments hiring processes.",
    },
    {
        number: 3,
        title: "Manage Projects",
        description:
            "Our SaaS platforms use cutting-edge tech such as AI, Machine Learning, and Data Analytics to find, evaluate, and match candidates. This will provide a super quick Turn-Around Time.",
    },
    {
        number: 4,
        title: "Manage Payroll",
        description:
            "Companies can ask for specific experts based on what their projects need, the skills required, and how long they'll need them. Kreasitech TaaS system finds the right people for the job.",
    },
    {
        number: 5,
        title: "Task Monitoring",
        description:
            "Kreasitech TaaS platforms make remote work easier giving companies access to talent worldwide. This matters a lot in today's gig economy where skilled people aren't tied to one place.",
    },
    {
        number: 6,
        title: "Manage Permit",
        description:
            "Our TaaS platform provides additional services which includes Background Screening Verification, Project Management, Cross-Skills Training etc. This makes the whole process smooth.",
    },
];

export default function HiTalentFeatures() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-violet-600 relative overflow-hidden">
            {/* Dotted Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        HiTalent Features
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.number}
                            className={`border border-white/20 p-6 sm:p-8 hover:bg-white/5 transition-colors duration-300
                ${index === 0 ? "" : ""}
                ${index === 1 ? "border-t-0 sm:border-t sm:border-l-0" : ""}
                ${index === 2 ? "border-t-0 lg:border-t lg:border-l-0" : ""}
                ${index === 3 ? "border-t-0" : ""}
                ${index === 4 ? "border-t-0 sm:border-l-0 lg:border-l" : ""}
                ${index === 5 ? "border-t-0 sm:border-l lg:border-l-0" : ""}
              `}
                        >
                            <div className="w-10 h-10 border border-white/40 rounded flex items-center justify-center text-white font-mono mb-4 text-lg">
                                {feature.number}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
