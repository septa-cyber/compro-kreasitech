"use client";

export default function HiTalentAbout() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
                    Enhance Your HR Efficiency with HiTalent
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute inset-0 bg-violet-600 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300"></div>
                        <img
                            alt="Laptop displaying HRIS software dashboard on a desk"
                            className="relative rounded-2xl shadow-xl w-full object-cover h-64 sm:h-80 lg:h-96 transform transition-transform duration-300 group-hover:-translate-y-2"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bK8WABJgNfwGb58aqZ0ehFakG1DPs6ZyzAVs0-Ce9NOWRfCGQ3Zx-BZGMiMusi7ud-B_E46k4y6-R0QOne6Kx69gXNUudm35v5ZQOzPM2r7PBwcHDnLk0HSz8hMTrTsSoOWv6ezMqkGwbBix67A0jC-CKem-79asOxt1I8AYKUkxpv0YGgTD8OzxsP3WfU8MUl7T1kq7mzcwKJ5g-bXUd3Yw_eJ9Em-Dl4gL0fgdrO5AwB6D7XBTPPG8YmugaTWccXrtOJKpzOI"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            HiTalent is a Human Resource Information System (HRIS) designed to
                            help companies manage their human resources more easily, quickly,
                            and accurately.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            With automated features for{" "}
                            <span className="font-bold text-gray-900">
                                payroll, attendance, leave, and employee management
                            </span>
                            , HiTalent enhances HR operational efficiency while ensuring
                            compliance with labor regulations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
