'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const CraftSite = dynamic(() => import('../../components/craft/CraftSite'), {
    ssr: false, // Disable SSR for CraftSite
});

export default function Page() {
    const [selectedSite, setSelectedSite] = useState<string>('Portfolio');

    const searchParams = useSearchParams();

    useEffect(() => {
        const site = searchParams.get('site') || 'Portfolio';
        setSelectedSite(site); // Update selected site based on search params
    }, [searchParams]); // Run effect when searchParams change

    return (
        <div>
            <CraftSite selectedSite={selectedSite} />
        </div>
    );
}
