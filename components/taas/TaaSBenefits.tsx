import Link from 'next/link';
import { softwareDevelopmentServices } from '@/data/software-development-services';
import { LuFileSpreadsheet, LuPenTool, LuMonitor, LuSmartphone, LuRocket, LuCpu } from 'react-icons/lu';

const iconMapping: { [key: string]: React.ElementType } = {
    'specifications-and-wireframe': LuFileSpreadsheet,
    'ui-ux-design': LuPenTool,
    'website-development': LuMonitor,
    'mobile-app-development': LuSmartphone,
    'mvp-development': LuRocket,
    'custom-software-development': LuCpu,
};

export default function TaaSBenefits() {
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
                        const IconComponent = iconMapping[service.slug] || LuCpu;
                        return (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 h-96 px-8 pt-8 pb-12 bg-white outline outline-[0.5px] outline-offset-[-0.25px] outline-gray-200 inline-flex flex-col justify-start items-start gap-6 hover:bg-violet-800 transition-colors duration-300 group"
                            >
                                <div className="w-14 h-14 relative flex items-center justify-center rounded-2xl bg-violet-50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                                    <IconComponent className="text-3xl text-violet-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="self-stretch text-text-light group-hover:text-white text-2xl font-medium font-montserrat leading-tight transition-colors duration-300">
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
