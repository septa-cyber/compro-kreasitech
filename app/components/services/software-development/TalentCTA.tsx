import React from "react";

export default function TalentCTA() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
                    Build Your Dream<br />Team Effortlessly
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto font-inter">
                    Connect with pre-vetted professionals ready to accelerate your project's success.
                </p>
                <a className="inline-block px-8 py-3 bg-[#6342E8] text-white rounded-[4px] font-medium text-sm hover:bg-[#5033c5] shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 font-montserrat" href="#">
                    Hire Top Tech Talent
                </a>
            </div>
        </section>
    );
}
