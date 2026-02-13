import Link from 'next/link';
import { softwareDevelopmentServices } from '@/data/software-development-services';
import Image from 'next/image';

const iconMapping: { [key: string]: string } = {
    'specifications-and-wireframe': "/assets/images/3d-icons/spiral_notepad_3d.png",
    'ui-ux-design': "/assets/images/3d-icons/artist_palette_3d.png",
    'website-development': "/assets/images/3d-icons/desktop_computer_3d.png",
    'mobile-app-development': "/assets/images/3d-icons/mobile_phone_3d.png",
    'mvp-development': "/assets/images/3d-icons/rocket_3d.png",
    'custom-software-development': "/assets/images/3d-icons/gear_3d.png",
};

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
                    {softwareDevelopmentServices.map((service, index) => {
                        const iconSrc = iconMapping[service.slug] || "/assets/images/3d-icons/gear_3d.png";
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group"
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
                                <h3 className="self-stretch text-text-light group-hover:text-white text-xl font-medium font-montserrat leading-tight transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="self-stretch text-text-light group-hover:text-white text-sm font-normal font-montserrat leading-relaxed transition-colors duration-300">
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

