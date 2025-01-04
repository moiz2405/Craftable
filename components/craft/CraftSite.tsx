'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from 'next/link';

interface CraftSiteProps {
    selectedSite: string;
}

interface Template {
    id: number;
    name: string;
    description: string;
    image: string;
}

export default function CraftSite({ selectedSite }: CraftSiteProps) {
    const [choice, setChoice] = useState<'templates' | 'custom' | null>(null);
    const [templates, setTemplates] = useState<Template[]>([]);

    useEffect(() => {
        // Fetch template data from the templates.json file
        const fetchTemplates = async () => {
            try {
                const response = await fetch('/path/to/templates.json');
                const data = await response.json();
                setTemplates(data[selectedSite]);
            } catch (error) {
                console.error("Error fetching templates:", error);
            }
        };

        fetchTemplates();
    }, [selectedSite]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 text-white bg-gradient-to-b from-purple-900 to-black">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
                Let's Craft a{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {selectedSite}
                </span>
            </h1>
            <p className="text-2xl text-center mb-8 text-purple-300">
                You can start customizing and building your {selectedSite} now.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <Button
                    variant={choice === 'templates' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setChoice('templates')}
                    className="text-lg px-8 py-6"
                >
                    Templates
                </Button>
                <Link href="/custom">
                    <Button
                        variant={choice === 'custom' ? 'default' : 'outline'}
                        size="lg"
                        className="text-lg px-8 py-6"
                    >
                        Fully Custom
                    </Button>
                </Link>
            </div>

            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    {choice === 'templates' ? 'Choose a Template' : 'Available Templates'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template) => (
                        <Card key={template.id} className="bg-purple-800 border-purple-600 hover:border-purple-400 transition-colors">
                            <CardContent className="p-4">
                                <img src={template.image} alt={template.name} className="w-full h-48 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
                                <p className="text-purple-300 mb-4">{template.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" className="w-full">
                                    Select Template
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
