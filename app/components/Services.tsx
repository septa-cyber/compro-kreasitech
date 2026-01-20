import React from 'react';

export default function Services() {
    return (
        <section className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="text-4xl font-medium font-montserrat text-text-light">
                        Layanan Kami
                    </h2>
                    <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted">
                        Buka Potensi Bisnis Anda dengan Solusi Ahli Kami
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">
                    {/* 1. Talent as a Service */}
                    <div className="w-full md:w-1/2 lg:w-1/2 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="far fa-star text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Software Development
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Kami menawarkan layanan Web & Mobile App yang inovatif, mendukung transformasi digital bisnis Anda dengan teknologi terkini dan fokus pada pengalaman pengguna.
                        </p>
                    </div>

                    {/* 2. Web & Mobile Apps Development */}
                    <div className="w-full md:w-1/2 lg:w-1/2 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fas fa-mobile-alt text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Talent as a Service
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Kami menyediakan Talent as a Service (TaaS) yang fleksibel dan efisien, menghadirkan talenta terbaik di industri teknologi untuk mendukung inovasi dan pertumbuhan bisnis Anda.
                        </p>
                    </div>

                    {/* 3. Product Digital Design & Tech Consultation */}
                    <div className="w-full md:w-1/2 lg:w-1/2 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="far fa-question-circle text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Academy
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Kami menawarkan layanan pengembangan website WordPress yang profesional, responsif, dan optimal untuk mendukung kebutuhan dan kinerja bisnis Anda.
                        </p>
                    </div>

                    {/* 4. UI/UX Design */}
                    <div className="w-full md:w-1/2 lg:w-1/2 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fas fa-pencil-ruler text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            Digital Marketing
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            Kami menyediakan layanan Desain UI/UX berbasis riset untuk menghasilkan visual yang menarik dan pengalaman pengguna yang optimal, disesuaikan dengan kebutuhan bisnis Anda.
                        </p>
                    </div>

                    {/* 5. QA Testing */}
                    {/* <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fas fa-tasks text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            QA Testing
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            We offer Quality Assurance (QA) Testing services with strict methodologies and the latest tools to ensure your digital products are reliable, secure, bug-free, and high-quality.
                        </p>
                    </div> */}

                    {/* 6. WordPress */}
                    {/* <div className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer">
                        <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                            <i className="fab fa-wordpress text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300"></i>
                        </div>
                        <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                            WordPress
                        </h3>
                        <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                            We offer professional, responsive, and optimal WordPress website development services to support your business needs and performance.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
