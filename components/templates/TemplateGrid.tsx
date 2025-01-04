import { useState } from 'react';  // <-- Add this import
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import HeroSection from './portfolio/HeroSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ExperienceSection from './portfolio/ExperienceSection';

type StyleType = 'style1' | 'style2' | 'style3';

interface PortfolioTemplateProps {
    style: StyleType;
    onSelect: () => void;
}

function PortfolioTemplate({ style, onSelect }: PortfolioTemplateProps) {
    return (
        <Card className="w-full bg-gray-800 text-white shadow-lg rounded-lg">
            <CardContent className="space-y-8 max-h-[600px] overflow-y-auto px-4">
                <HeroSection style={style} onStyleChange={() => { }} />
                <SkillsSection style={style} onStyleChange={() => { }} />
                <ProjectsSection style={style} onStyleChange={() => { }} />
                <ExperienceSection style={style} onStyleChange={() => { }} />
            </CardContent>
            <CardFooter className="p-4">
                <Button onClick={onSelect} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold">Select This Style</Button>
            </CardFooter>
        </Card>
    );
}

export default function TemplateGrid() {
    const [selectedStyle, setSelectedStyle] = useState<StyleType>('style1');  // <-- Fix here

    const handleStyleSelect = (style: StyleType) => {
        setSelectedStyle(style);
    };

    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Choose Your Portfolio Template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
                {(['style1', 'style2', 'style3'] as StyleType[]).map((style) => (
                    <PortfolioTemplate
                        key={style}
                        style={style}
                        onSelect={() => handleStyleSelect(style)}
                    />
                ))}
            </div>

            <div className="mt-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Your Selected Portfolio</h2>
                <div className="space-y-12">
                    <HeroSection style={selectedStyle} onStyleChange={() => { }} />
                    <SkillsSection style={selectedStyle} onStyleChange={() => { }} />
                    <ProjectsSection style={selectedStyle} onStyleChange={() => { }} />
                    <ExperienceSection style={selectedStyle} onStyleChange={() => { }} />
                </div>
            </div>
        </div>
    );
}
