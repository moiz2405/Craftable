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
            <header className="text-center mb-12 w-full">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Craft Your{' '}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        {selectedSite}
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Choose from our curated templates or create a fully custom design that perfectly fits your vision.
                </p>
            </header>

            <main className="w-full max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden px-8 py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Template Grid */}
                    <div className="w-full lg:w-4/5">
                        <TemplateGrid />
                    </div>

                    {/* Continue Button */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
                        <p className="text-lg text-gray-300 mb-4 text-center">
                            Edit the template in the next step
                        </p>
                        <Link href="/next-step">
                            <Button
                                variant="solid"
                                size="lg"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold px-12 py-4 shadow-lg transform transition-transform hover:scale-105"
                            >
                                Continue
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
