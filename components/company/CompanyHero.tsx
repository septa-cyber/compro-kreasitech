"use client";
import React from "react";

export default function CompanyHero() {

    const INITIAL_EMPLOYEES = [
        { src: "/assets/images/employee/Nina.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Janah.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Fena.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Rahmat.png", alt: "Main Avatar illustration - Fendi" },
        { src: "/assets/images/employee/Imdad.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Luthfi.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Fendi.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Canu.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Rian.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Galang.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Rio.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Wafik.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Tia.png", alt: "Avatar illustration" },
        { src: "/assets/images/employee/Dimas.png", alt: "Avatar illustration" },
    ];

    const [currentEmployees, setCurrentEmployees] = React.useState(INITIAL_EMPLOYEES);
    const [isVisible, setIsVisible] = React.useState(true);
    const [delays, setDelays] = React.useState<number[]>(new Array(INITIAL_EMPLOYEES.length).fill(0));

    React.useEffect(() => {
        let isRunning = true;

        const animateSequence = async () => {
            if (!isRunning) return;

            // Phase 1: Prepare for Exit (Staggered)
            // Sequence: 0, 1, 2... just linear stagger for simplicity or custom order
            // Let's use a simple linear stagger from outside in or left to right
            const exitDelays = currentEmployees.map((_, i) => i * 100);
            setDelays(exitDelays);

            // Give React a frame
            await new Promise(r => setTimeout(r, 50));
            if (!isRunning) return;

            setIsVisible(false);

            // Phase 2: Wait for Exit (Duration + Max Delay)
            // Max delay ~600ms + 300ms transition = ~900ms
            await new Promise(r => setTimeout(r, 789));
            if (!isRunning) return;

            // Phase 3: Shuffle
            setCurrentEmployees(prev => [...prev].sort(() => Math.random() - 0.5));

            // Phase 4: Prepare for Enter
            const enterDelays = currentEmployees.map((_, i) => i * 100);
            setDelays(enterDelays);

            // Give React a frame
            await new Promise(r => setTimeout(r, 50));
            if (!isRunning) return;

            setIsVisible(true);

            // Phase 5: Display Time
            await new Promise(r => setTimeout(r, 3000));
            if (isRunning) animateSequence();
        };

        animateSequence();

        return () => { isRunning = false; };
    }, []);

    return (
        <section className="relative pt-10 lg:pb-20 md:pb-16 sm:pb-12 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Di Mana <span className="font-semibold text-violet-600">Talenta</span> Bertemu <br className="hidden md:block" /> Teknologi
                </h1>
                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                    Di Kreasitech, kami berdedikasi untuk merevolusi industri teknologi dengan menghubungkan talenta luar biasa dengan peluang terdepan. Misi kami adalah memberdayakan individu dan organisasi untuk berkembang di era digital.
                </p>

                {/* Avatar Collage */}
                <div className="flex flex-nowrap justify-center items-center gap-1.5 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
                    {/* Item 0 */}
                    <div
                        className={`w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform flex-shrink-0 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        style={{ transitionDelay: `${delays[0]}ms` }}
                    >
                        <img
                            alt={currentEmployees[0].alt}
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src={currentEmployees[0].src}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-4 flex-shrink-0">
                        {/* Item 1 */}
                        <div
                            className={`w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            style={{ transitionDelay: `${delays[1]}ms` }}
                        >
                            <img
                                alt={currentEmployees[1].alt}
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src={currentEmployees[1].src}
                            />
                        </div>
                        {/* Item 2 */}
                        <div
                            className={`w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            style={{ transitionDelay: `${delays[2]}ms` }}
                        >
                            <img
                                alt={currentEmployees[2].alt}
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src={currentEmployees[2].src}
                            />
                        </div>
                    </div>
                    {/* Item 3 (Center Large) */}
                    <div
                        className={`w-20 h-28 sm:w-40 sm:h-56 md:w-40 md:h-56 lg:w-56 lg:h-72 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform shadow-xl flex-shrink-0 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        style={{ transitionDelay: `${delays[3]}ms` }}
                    >
                        <img
                            alt={currentEmployees[3].alt}
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                            src={currentEmployees[3].src}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:gap-4 flex-shrink-0">
                        {/* Item 4 */}
                        <div
                            className={`w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            style={{ transitionDelay: `${delays[4]}ms` }}
                        >
                            <img
                                alt={currentEmployees[4].alt}
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src={currentEmployees[4].src}
                            />
                        </div>
                        {/* Item 5 */}
                        <div
                            className={`w-12 h-12 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            style={{ transitionDelay: `${delays[5]}ms` }}
                        >
                            <img
                                alt={currentEmployees[5].alt}
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src={currentEmployees[5].src}
                            />
                        </div>
                    </div>
                    {/* Item 6 */}
                    <div
                        className={`w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform flex-shrink-0 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        style={{ transitionDelay: `${delays[6]}ms` }}
                    >
                        <img
                            alt={currentEmployees[6].alt}
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src={currentEmployees[6].src}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
