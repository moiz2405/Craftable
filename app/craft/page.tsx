'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import CraftSite from '../../components/craft/CraftSite';

export default function Page() {
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
}
