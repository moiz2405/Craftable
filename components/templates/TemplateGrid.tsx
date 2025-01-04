'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Portfolio Template - Style {style.charAt(style.length - 1)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 max-h-[600px] overflow-y-auto">
                <HeroSection style={style} onStyleChange={() => { }} />
                <SkillsSection style={style} onStyleChange={() => { }} />
                <ProjectsSection style={style} onStyleChange={() => { }} />
                <ExperienceSection style={style} onStyleChange={() => { }} />
            </CardContent>
            <CardFooter>
                <Button onClick={onSelect} className="w-full">Select This Style</Button>
            </CardFooter>
        </Card>
    );
}

export default function TemplateGrid() {
    const [selectedStyle, setSelectedStyle] = useState<StyleType>('style1');

    const handleStyleSelect = (style: StyleType) => {
        setSelectedStyle(style);
    };

    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Portfolio Template</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {(['style1', 'style2', 'style3'] as StyleType[]).map((style) => (
                    <PortfolioTemplate
                        key={style}
                        style={style}
                        onSelect={() => handleStyleSelect(style)}
                    />
                ))}
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">Your Selected Portfolio</h2>
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

