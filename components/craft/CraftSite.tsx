'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import TemplateSelector from "../templates/TemplateSelector";
interface CraftSiteProps {
    selectedSite: string;
}

export default function CraftSite({ selectedSite }: CraftSiteProps) {
    return (
        <div className="min-h-screen flex flex-col text-white bg-gradient-to-b from-purple-900 to-black">
            <header className="text-center py-12 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Craft Your{' '}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        {selectedSite}
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Choose from our curated templates and styles to create a design that perfectly fits your vision.
                </p>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
                <div className="w-full max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden">
                    <TemplateSelector />
                </div>

            </main>
        </div>
    );
}
