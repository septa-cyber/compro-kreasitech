"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-[#F4F4F7]">
            <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
            <AdminHeader isSidebarCollapsed={isSidebarCollapsed} />
            <main className={`pt-16 transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}

