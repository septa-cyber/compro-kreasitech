import React from "react";

export default function TeamSection() {
    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">Meet Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 overflow-hidden rounded-xl max-w-6xl mx-auto">
                    {/* Item 1 */}
                    <div className="aspect-square bg-sky-300 relative group overflow-hidden">
                        <img
                            alt="Team member"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWFEFT5lydH8CSDPBPwwYIOxUreWBm9a-MeZmSV09kBUNUCAvElv_yQYSRGVvuHNnxAE_e2kw2DKhnUjd0Od_HtATv0vFA3Vc22pDCHwi43h-WjrAC-7_dENAb4HozSUnKjYEiVmYDa14uPsS-VCHGKbdP016eTpPaX8WOhMQLszK-wvHouKjinjxLfzI_x9vZqWJzpdvrGEIJ0eiAKTM32vsWO5vziflr9UrFqabGD6z3EyCwbrkJfFQcK76QH3ZTbvUNVOrDWM"
                        />
                    </div>
                    {/* Item 2 - Fernando */}
                    <div className="aspect-square bg-yellow-700/80 relative group overflow-hidden flex items-end justify-center">
                        <img
                            alt="Fernando Alonso"
                            className="w-full h-full object-cover mix-blend-overlay opacity-50 absolute inset-0 group-hover:scale-105 transition duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHoL3U4cBqJ3uAQN5XnudwTHFq_tUSz-2Mo6z0QYXheuP4SuIAQAU5eJ_7sBoqJ5GQ8fngOuAe7n2uQyQ3ISbXceZDLeNxbcaGhqZWV5trlpIL3w6icCaJZ5yBBS7DQ_P8Vx02132sCbLSLjybHmED186KmbafCd3eiBcipl_PtkgCwAFxiv5cCTIIpddBnOVcm2dbJBHsgvQ1W671ByUb_3SuGX9XEmTuUGCAcmzQXv1yf2mUDMh5IVp7l0M-ykqB1oaCpWGTIKY"
                        />
                        <div className="relative z-10 p-4 text-white text-left w-full bg-gradient-to-t from-black/60 to-transparent">
                            <p className="font-bold text-lg font-display">Fernando<br />Alonso</p>
                            <p className="text-xs opacity-80 mt-1 font-body">DevOps Developer</p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="aspect-square bg-pink-200 relative group overflow-hidden">
                        <img
                            alt="Team member"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_cpXX_o-s4h5HwiBtvZkSRWHcg3KBN8I4NX2VSoWO7-V0HYbXSGtSW2LGn6S0tnuoazG0wjQb97geK2ultqubkT5K6BTMBP4dadEvKDK3-bGS-EhUoD8Aewu87smP0J07RMRJN72IQ5yzjp591vl_gWzLHh_OvpV-D6G3aPZEvFKqvVrfv39fb4Qrh1mhyGeK6HvUI1o-MM2PU2nhFoLphgVNOkTvgogNSh3XjTpTI1x1QVJa5pNO2H19aLnqKMYRJULSZqsqAgQ"
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="aspect-square bg-violet-300 relative group overflow-hidden">
                        <img
                            alt="Team member"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf-dqhb-NaljcAqBFpbEnOCcCSa3CFUj_0A7DL4AqHOH63p-0PIBuKG6RkALlQbp7xfYT3td93a_fVcoLUa6mMyWvfs7EiAm8-oiRjn9ppCZvT07S1wEQF4aytN52fSBtBi5r1R5ymY6xuBY3fpKwsiaJrBH4YaEYFQdPDuM7wJdS-8_4rLnkn9NqVg_fe2fZNSXEBRPMKV0TlnyAYeccxcTKvGVW9mhacZpmX7ZSIyAc-dbjTacswnnMV5-ob9BOiG-8UTc1VFHk"
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="aspect-square bg-yellow-400 relative group overflow-hidden">
                        <img
                            alt="Team member"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV1dTuk7MrdMgSNiSd8QJUdhr5r3-jRdtaHdepCh3seiNqemJkEtWchPy5fFWTO1pqXNTSpPRV3-yELeQ7xaW5c_GlDUZocr-6n5Q181Tb51QVsne2hjWSBwRW5agukNC32EyIhLK-J0y3i0vovLKMcJeMvyteKRmuBaS7xLwptc_pcxX5zrdOo0Y6wbI2LzSu_SizykglRGvbWQ1Y-4ywt7-81a7WMY8pOCJWAJZZox_ccHpRUi89MPkovEXLZusqrqRnyV_GmoY"
                        />
                    </div>
                    {/* Item 6 */}
                    <div className="aspect-square bg-purple-500 relative group overflow-hidden">
                        <img
                            alt="Team member"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfGO_O5pPHYigm4LB7uwMnVXVqgBiQN72zCaDP-_nDkB5h5NjDl-EgyyIPmXIPPFdJcecQlXA7Evo6i0wiIgnbroQ1ZQbgKNEgfoaNiBUBv-qEAlzfNqymp-V-Ca-ve6zXhRSsaHt_y8dfjRvza45o1Nta-R5BpuHeXF1iYsiRNdy1RSeCVTlFRDddFZ-D3d_vBgeYbWqu2nJXFpCqBNNQgXLbaAknsQ9YqDRBX561v9C67MfKP1XsCphDWSkKuhqxPJK6TR2puxQ"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
