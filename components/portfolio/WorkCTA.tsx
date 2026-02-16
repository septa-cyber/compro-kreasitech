import React from 'react';
import Image from 'next/image';

export default function WorkCTA() {
    return (
        <section className="py-24 bg-gray-100 flex flex-col justify-start items-center gap-24 overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center gap-16">
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start gap-8">
                    <div className="w-full flex flex-col justify-start items-center lg:items-start gap-8 text-center lg:text-left">
                        <h2 className="font-h2">
                            Mau Lihat Track Record Kami?
                        </h2>
                        <p className="font-body text-gray-500">
                            Cek berbagai proyek yang telah kami kerjakan. Siapa tahu bisa jadi referensi untuk proyek Anda berikutnya.
                        </p>
                    </div>
                    <div className="inline-flex justify-start items-start gap-8">
                        <a
                            href="#"
                            className="px-8 py-4 bg-violet-600 rounded-lg flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-colors"
                        >
                            <span className="font-btn text-gray-100">
                                Lihat Proyek
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/assets/images/CTA/machine-learning-violet.svg"
                        alt="Portfolio illustration"
                        width={400}
                        height={400}
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
}

