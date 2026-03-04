"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SiteSettings {
    site_title?: string;
    site_description?: string;
    site_tagline?: string;
    logo?: string;
    favicon?: string;
    whatsapp?: string;
    phone?: string;
    email?: string;
    address?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    [key: string]: any;
}

const SettingsContext = createContext<SiteSettings>({});

export function SettingsProvider({
    children,
    initialSettings,
}: {
    children: ReactNode;
    initialSettings: SiteSettings;
}) {
    return (
        <SettingsContext.Provider value={initialSettings}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}
