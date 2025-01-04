// app/craft/page.tsx
'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import CraftSite from '../../components/craft/CraftSite';

export default function Page() {
    const searchParams = useSearchParams();
    const selectedSite = searchParams.get('site') || 'Portfolio'; // Default to 'Portfolio' if no site is selected.

    return (
        <div>
            <CraftSite selectedSite={selectedSite} />
        </div>
    );
}
