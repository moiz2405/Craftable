'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TemplateSelector from "../templates/TemplateSelector";

interface CraftSiteProps {
    selectedSite: string;
}

export default function CraftSite({ selectedSite }: CraftSiteProps) {
    const searchParams = useSearchParams();
    const dynamicSite = searchParams.get('site') || selectedSite; // Use dynamic site or fallback to selectedSite

    return (
        <div className="min-h-screen flex flex-col text-white bg-gradient-to-b from-purple-900 to-black">
            <header className="text-center py-6 px-4">
                <h1 className="text-5xl md:text-5xl font-extrabold mb-4">
                    Craft Your{' '}
                    <span className="font-bold text-transparent bg-clip-text text-5xl bg-gradient-to-r from-purple-400 to-pink-600 shadow-inner">
                        {dynamicSite}
                    </span>
                </h1>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center px-8 py-4">
                {/* Wrap the TemplateSelector inside Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="w-full max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden transform scale-70">
                        <TemplateSelector />
                    </div>
                </Suspense>
            </main>
        </div>
    );
}
