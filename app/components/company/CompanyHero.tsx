import React from "react";

export default function CompanyHero() {
    return (
        <section className="relative pt-10 pb-20 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-[40px] sm:text-5xl lg:text-7xl font-medium font-montserrat leading-tight max-w-6xl mx-auto mb-8 text-text-light">
                    Where <span className="font-semibold text-violet-600">Talent</span> Meets <br className="hidden md:block" /> Technology
                </h1>
                <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-500 font-montserrat mb-8">
                    At Kreasitech, we're dedicated to revolutionizing the tech industry by connecting exceptional talent with cutting-edge opportunities. Our mission is to empower individuals and organizations to thrive in the digital age.
                </p>
                <div className="flex justify-center items-center gap-4 mb-16">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#" className="w-max px-8 py-4 bg-violet-600 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-violet-700 transition-all duration-300">
                            <div className="text-gray-100 text-base font-medium font-montserrat">Diskusi ke Kami</div>
                        </a>
                        <a href="#" className="w-max flex items-center justify-center gap-2 px-6 py-4 text-text-light text-base font-medium font-montserrat hover:text-violet-600 transition-colors group">
                            Pelajari Layanan
                            <img src="/assets/images/arrow_downward.svg" alt="" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Avatar Collage */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                        <img
                            alt="Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src="/assets/images/employee/Nina.png"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-28 h-28 md:w-32 md:h-32 bg-pink-200 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5iTNypO_2r-4cWTF6I75CB64eBbDioKo0ScrPE8QSOhA-CrXMvKfCry6pC3Bw8VmI3JZxLhmz6NhWMQfETIbgQasiapuG_5sAIHPO34VavS5btSuRLSFbM9L_n0fXTLiR5LFKivqfhdDNxYcd7-2SeEqb8CwlUDiIFTSQ6ph0HH_aOnGftfo1UMSJqaqQZMveZDNdRl4sSe5PePYhLvr1f5kYM_3bwpIi25acqs4_75JUQN3nrWubPUQaa52OnQl5A6QD2z2lH4s"
                            />
                        </div>
                        <div className="w-28 h-28 md:w-32 md:h-32 bg-green-200 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-ZVfmsNMTrPN0CQqJN3yL0AcyARzoADNpl1Q_ZvdP9-HHBWXecjiw5EZl3-3c3nMeONexq7NvIdRO1hhFZfNmwwh6Kc8X9rYsQWCSGXCetnj0hDIDQV7c4meapP1-eirf9r1QSeZmNsxjoNhYaNfv4RpqrOyvCBZpCKfSOpu8gGsn_Dg8X0HjMqdoTGVCKncHj7R7UydCpto5Br-SO51CVV31RB81pbFiyjNebGGBdtEdchrwnFFTh9fXZtP11SMyRkWH72ECDA"
                            />
                        </div>
                    </div>
                    <div className="w-40 h-56 md:w-56 md:h-72 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300 shadow-xl">
                        <img
                            alt="Main Avatar illustration - Fendi"
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                            src="/assets/images/employee/Imdad.png"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-28 h-28 md:w-32 md:h-32 bg-blue-200 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgriPjv37D0InLsts39Gh268QSc6d5CfSGyGgBUOXJinYZCrQShuIw6y947pIx_r8aTKNfzXu8rdlt7aF4LMAmnadI9bXvFbLXjZEv2y-se_uZtCmX5kuShcyHPr0dUjLqhoH0IcXcERcHJs-smZQPf4xyHwbrt8og6Gm7seLlSWeuMLPpWeLYnM_L5kjmDfH8eNxIJ0nVqL-qT7MI2v20aZ14E6JJkL23dL8kiCwV6RbgNFyylAJyNdShioMJb6Dkao_H0aWfJF0"
                            />
                        </div>
                        <div className="w-28 h-28 md:w-32 md:h-32 bg-indigo-300 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                            <img
                                alt="Avatar illustration"
                                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5zAQ9VO63U-sntwAamrEwm9FSiVk-kFtzAcGhYGd1orvaCK0A4IY6cNPRSQ0--SW0Bm_O2UN8n3JdJYRGWa41mJ-Umb19SW28RMUmCsYjgKEZyxtkEYoRQjLCdC0ywiu5ESgMLfAmo2yVLPIO1trjwG0QrLQVXKowgic8-yx1hurwg6hp9TxQT1okcePpvAMGp9msE6oBgehiTmWZy_VhzrSk9X10Ju2LN_YSoTitEJnTdJplGS-_oW6-ZOwWmCa_3Ym8Hh0LkE"
                            />
                        </div>
                    </div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                        <img
                            alt="Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src="/assets/images/employee/Fendi.png"
                        />
                    </div>
                </div>

                {/* Trusted By */}
                <div className="mt-20 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6 font-body">
                        Trusted by great businesses like:
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-2 font-bold text-lg text-primary dark:text-white font-display">
                                <span className="w-5 h-5 bg-primary rounded-sm"></span> kreasitech
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
