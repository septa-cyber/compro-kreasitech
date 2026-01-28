"use client";

const testimonials = [
    {
        initials: "TR",
        name: "Tina Rahayu",
        role: "Marketing Specialist",
        company: "PT Marketing Pro",
        color: "bg-pink-500",
        quote:
            '"Tina\'s marketing strategies are exceptionally creative, highly innovative, and meticulously data-driven, consistently capturing audience attention and driving impressive campaign results that not only exceed targets but also maximize ROI."',
    },
    {
        initials: "JL",
        name: "Joko Lestari",
        role: "QA Engineer",
        company: "PT Quality Assurance",
        color: "bg-yellow-500",
        quote:
            '"Joko\'s rigorous testing protocols guarantee the superior quality and reliability of our products, proactively preventing potential problems and ensuring a seamless user experience right from initial release."',
    },
    {
        initials: "SA",
        name: "Siti Aminah",
        role: "Product Manager",
        company: "PT Digital Solutions",
        color: "bg-indigo-500",
        quote:
            '"Siti\'s leadership is truly transformative, as she champions collaboration, sparks innovation, and drives substantial growth. Her team consistently surpasses ambitious goals, achieving remarkable success."',
    },
    {
        initials: "BS",
        name: "Budi Santoso",
        role: "UX Designer",
        company: "PT Creative Minds",
        color: "bg-blue-500",
        quote:
            '"Budi\'s UX designs are celebrated for their intuitive interfaces and elegant flow. His thoughtful layouts and interactions seamlessly guide users, significantly boosting user satisfaction and engagement."',
    },
];

export default function HiTalentTestimonials() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 max-w-xl text-gray-900">
                    See why customers love using KreasiTech
                </h2>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full"
                        >
                            {/* Avatar and Name */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className={`w-10 h-10 ${testimonial.color} rounded flex items-center justify-center text-white font-bold`}
                                >
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                                {testimonial.quote}
                            </p>

                            {/* Company */}
                            <p className="text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                                {testimonial.company}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-8">
                    <div className="w-8 h-1 bg-violet-600 rounded-full"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
