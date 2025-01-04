// components/ClientOnlyProvider.tsx
"use client"; // Ensure this is a client component

import { SiteProvider } from '../context/SiteContext';

const ClientOnlyProvider = ({ children }: { children: React.ReactNode }) => {
    return <SiteProvider>{children}</SiteProvider>;
};

export default ClientOnlyProvider;
