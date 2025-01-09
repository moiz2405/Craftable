'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import { Suspense } from 'react'; // Import Suspense
import CraftSite from '../../components/craft/CraftSite';

const PageContent = () => {
    const searchParams = useSearchParams(); // Access query parameters
    const [selectedSite, setSelectedSite] = useState<string>('Portfolio');

    useEffect(() => {
        // Get the 'site' parameter or default to 'Portfolio'
        const site = searchParams.get('site') || 'Portfolio';
        setSelectedSite(site);
    }, [searchParams]); // Rerun effect if searchParams change

    return (
        <div>
            <CraftSite selectedSite={selectedSite} />
        </div>
    );
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}
