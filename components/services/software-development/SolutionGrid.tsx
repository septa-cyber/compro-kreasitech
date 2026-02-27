import Link from 'next/link';
import { softwareDevelopmentServices } from '@/data/software-development-services';
import Image from 'next/image';

const iconMapping: { [key: string]: string } = {
    'specifications-and-wireframe': "/assets/images/Icons/3d-report 1.svg",
    'ui-ux-design': "/assets/images/Icons/3d-ruler 1.svg",
    'website-development': "/assets/images/Icons/keyboardist 1.svg",
    'mobile-app-development': "/assets/images/Icons/group-chat 1.svg",
    'mvp-development': "/assets/images/Icons/setting 1.svg",
    'custom-software-development': "/assets/images/Icons/customization 1.svg",
};

export default function Services() {
    return (
        <section id="solutions" className="py-24 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="w-full max-w-[784px] flex flex-col items-center gap-8 px-4 text-center">
                    <h2 className="font-h2">
                        Solusi Kami
                    </h2>
                    <p className="font-body-lg max-w-[576px]">
                        Kami menyediakan solusi komprehensif, mulai dari perencanaan awal hingga implementasi akhir, memastikan proyek Anda ditangani dengan keahlian dan perhatian penuh.
                    </p>
                </div>

                <div className="w-full max-w-[1200px] outline outline-[0.5px] outline-offset-[-0.5px] outline-gray-200 inline-flex justify-between items-center flex-wrap content-center">
                    {softwareDevelopmentServices.map((service, index) => {
                        const iconSrc = iconMapping[service.slug] || "/assets/images/3d-icons/gear_3d.png";
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-center items-center gap-6 hover:bg-violet-800 transition-colors duration-300 group text-center"
                            >
                                <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                    <Image
                                        src={iconSrc}
                                        alt={service.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain transition-all duration-300"
                                    />
                                </div>
                                <h3 className="font-h4 text-text-light group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="font-body-sm text-text-light group-hover:text-white transition-colors duration-300">
                                    {service.heroDescription}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

