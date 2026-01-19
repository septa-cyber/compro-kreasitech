import React from "react";

export default function CTASection() {
    return (
        <section className="py-24 bg-[#F4F4F7]">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                    We're a team of fun,<br />passionate people
                </h2>
                <p className="text-gray-500 mb-10 text-sm font-body">
                    We are coming from all over the world.<br />Welcome and nice to meet you!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-3 bg-violet-600 text-white rounded-md font-medium hover:bg-violet-700 transition shadow-lg text-sm font-body">
                        Start Hiring
                    </button>
                    <button className="px-8 py-3 bg-purple-200 text-purple-900 rounded-md font-medium hover:bg-purple-300 transition text-sm font-body">
                        Join Our Team
                    </button>
                </div>
            </div>
        </section>
    );
}
