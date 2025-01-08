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


            <main className="flex-grow flex flex-col items-center justify-center px-8 py-12">

                <div className="w-full max-w-7xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden">
                    <TemplateSelector />
                </div>
            </main>
        </div>
    );
}
