import React from "react";

export default function CompanyHero() {
    return (
        <section className="relative pt-10 pb-20 overflow-hidden bg-[#F4F4F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                    Where <span className="text-primary">Talent</span> Meets <br className="hidden md:block" /> Technology
                </h1>
                <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-10 leading-relaxed font-body">
                    At Kreasitech, we're dedicated to revolutionizing the tech industry by connecting exceptional talent with cutting-edge opportunities. Our mission is to empower individuals and organizations to thrive in the digital age.
                </p>
                <div className="flex justify-center items-center gap-4 mb-16">
                    <button className="px-6 py-3 bg-violet-600 text-white rounded-md font-medium hover:bg-violet-700 transition shadow-md font-body">
                        Talk to Us
                    </button>
                    <button className="px-6 py-3 bg-transparent text-gray-700 rounded-md font-medium hover:text-violet-600 flex items-center gap-2 group font-body">
                        Learn More
                        <img src="/assets/images/arrow_downward.svg" alt="" className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Avatar Collage */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-purple-200 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                        <img
                            alt="Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6oqCu5NFbV3RpmqDY0cUm3R-wxLjQH2bUNm5kesywiHchR5NV6dTDGme_JKYkyALGCn2mgQkZqcy7z7bsRx_fLtf9IbtxLfW1d6ILiR6Wynd1cmDqEv7zo98A-_L3ICYBEQQh87xtR3FLVrtWlCWcixW7ZAie-ZnIYp_m1rtcaAJlEHm2VnqjaTsLHO56EJvWMuRoqEWHJ1fMjUrvz5AEx_1i2AswO9xq8M8urvzHlln7bOLb4BuN0K2eUjxEJicoWZ10LR6On2M"
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
                    <div className="w-40 h-56 md:w-56 md:h-72 bg-yellow-400 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300 shadow-xl">
                        <img
                            alt="Main Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPHtof3sawxMsK3UP1ij8qJHMsIIsmAbkRSuTdM96_DCbI87MX6lf-TvudekRX_mqFlCVH3tcMtF1jc1xGH9DCgdinscZyCadh0EBRr1ZFpCibCAoux5yZ0AcxZNmJiGq2HuuhOt8IryOPlsgzUMoZ-jcQ5L79ZVfR10hCiqZ4IY4kUUuCVXD2y5ftC8g_uTrIkXSCl3HETntWl0xqQzIc0Ba5dFZ6ayYNMiEUWJ9tlFDruQv_gbjvpgAYk1LMmQyie3fyt2T7AC8"
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
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-500 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
                        <img
                            alt="Avatar illustration"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC66gSYKPGB-uWFQdq2MfPEeeyTeAAGNbHRvLOm71hJQULq3vGJ0xnKb7nddKsNFA1a6YF9mbYVDwW74k1_FwBwlXLrYIalZU6YHPLNf3Pgq6LBJ1_PmCqO0ekv1qusgepQ3pLC0D7HpgjAyNQiI4JqDPcVJYY7Fzh25LlaNydkQDROZis50LSKQ_Acl2-Cg0DpHoOOlE3EQ6GK-YDPev1CQ6omUi_ee2oF4rsuevbpZBLswNHBtg9WwEV9DEA227uX23TSWYV_Huc"
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
