import React from "react";
import Image from "next/image";

export default function NewestProjects() {
    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
                <h2 className="text-4xl font-medium font-montserrat text-center text-gray-900">Proyek Terbaru Kami</h2>

                {/* Bento Grid */}
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[240px] lg:auto-rows-[300px]">
                    {/* Item 1 - Wide (Span 2 cols) */}
                    <div className="col-span-2 rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/784x360"
                            alt="Project 1"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Item 2 - Tall (Span 2 rows) */}
                    <div className="row-span-2 rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/424x764"
                            alt="Project 2"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Item 3 */}
                    <div className="rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/400x400"
                            alt="Project 3"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Item 4 */}
                    <div className="rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/400x248"
                            alt="Project 4"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Item 5 */}
                    <div className="rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/400x220"
                            alt="Project 5"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Item 6 */}
                    <div className="rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/344x160"
                            alt="Project 6"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Item 7 */}
                    <div className="rounded-2xl overflow-hidden relative group h-full">
                        <Image
                            src="https://placehold.co/344x260"
                            alt="Project 7"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
