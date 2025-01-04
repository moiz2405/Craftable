'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import TemplateGrid from "../templates/TemplateGrid";
interface CraftSiteProps {
    selectedSite: string;
}

export default function CraftSite({ selectedSite }: CraftSiteProps) {
    return (
        <div className="min-h-screen flex flex-col items-center py-12 px-4 text-white bg-gradient-to-b from-purple-900 to-black">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
                Let's Craft Your{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {selectedSite}
                </span>
            </h1>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <Link href="/custom">
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 py-6"
                    >
                        Fully Custom
                    </Button>
                </Link>
            </div>

            <div className="w-full max-w-7xl mx-auto">
                <TemplateGrid />
            </div>
        </div>
    );
}

