"use client";

import React, { useEffect, useState } from "react";
import { TeamMember } from "@/lib/types";

export default function TeamSection() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await fetch('/api/team?status=active');
                if (res.ok) {
                    const data = await res.json();
                    setTeamMembers(data);
                }
            } catch (error) {
                console.error('Failed to fetch team:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeam();
    }, []);

    if (isLoading) {
        return (
            <section className="py-24 bg-background-light">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-h2 mb-10">Tim KreasiTech</h2>
                    <div className="text-gray-500">Loading...</div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-medium font-montserrat text-text-light mb-10">Tim KreasiTech</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden max-w-6xl mx-auto">
                    {teamMembers.map((member) => {
                        return (
                            <div key={member.id} className="aspect-[3/4] relative group overflow-hidden bg-gray-100">
                                <img
                                    alt={member.name}
                                    className="w-full h-full object-cover transition duration-500"
                                    src={member.avatar || '/assets/images/employee/placeholder.png'}
                                />
                                {/* Overlay with name/role - visible by default, hidden on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-end text-center p-4">
                                    <h3 className="font-h5 leading-tight mb-1 !text-white">
                                        {member.name}
                                    </h3>
                                    <p className="font-body-xs font-medium !text-gray-200">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
