import React from 'react';
import Link from 'next/link';
import { softwareDevelopmentServices } from '@/app/data/software-development-services';

export default function Services() {
    return (
        <section id="solutions" className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="text-4xl font-medium font-montserrat text-text-light">
                        Solusi Kami
                    </h2>
                    <p className="max-w-[576px] text-base font-normal font-montserrat text-text-light-muted">
                        Kami menyediakan solusi komprehensif, mulai dari perencanaan awal hingga implementasi akhir, memastikan proyek Anda ditangani dengan keahlian dan perhatian penuh.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">
                    {softwareDevelopmentServices.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/software-development/${service.slug}`}
                            className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group cursor-pointer"
                        >
                            <div className="w-12 h-12 relative overflow-hidden flex items-center justify-center">
                                {/* Using a fallback icon for now, could be dynamic if added to data */}
                                <i className={`fas ${service.slug === 'specifications-and-wireframe' ? 'fa-star' :
                                        service.slug === 'ui-ux-design' ? 'fa-mobile-alt' :
                                            service.slug === 'website-development' ? 'fa-desktop' :
                                                service.slug === 'mobile-app-development' ? 'fa-mobile' :
                                                    service.slug === 'mvp-development' ? 'fa-tasks' :
                                                        'fa-code'
                                    } text-violet-600 group-hover:text-violet-300 text-3xl transition-colors duration-300`}></i>
                            </div>
                            <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
                                {service.heroDescription}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
