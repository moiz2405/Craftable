"use client"; // Important to mark this as client-side

import React, { createContext, useContext, useState } from "react";

interface SiteContextType {
    selectedSite: string;
    setSelectedSite: React.Dispatch<React.SetStateAction<string>>;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedSite, setSelectedSite] = useState<string>("Landing Page");

    return (
        <SiteContext.Provider value={{ selectedSite, setSelectedSite }}>
            {children}
        </SiteContext.Provider>
    );
};

export const useSiteContext = (): SiteContextType => {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error("useSiteContext must be used within a SiteProvider");
    }
    return context;
};
