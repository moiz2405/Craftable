'use client';

import { useEffect } from 'react';
import { useSiteContext } from '../../context/SiteContext';

function CraftSite() {
    const { selectedSite } = useSiteContext();

    useEffect(() => {
        console.log('CraftSite selectedSite updated:', selectedSite);
    }, [selectedSite]);  // This ensures it runs when selectedSite changes

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-purple-900 to-black">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
                Let's Create Your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{selectedSite}</span> Site
            </h1>
            <p className="text-2xl text-center mb-8 text-purple-300">
                You can start customizing and building your {selectedSite} now.
            </p>
        </div>
    );
}

export default CraftSite;
