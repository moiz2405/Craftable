'use client'

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import HeroSection from './portfolio/HeroSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ExperienceSection from './portfolio/ExperienceSection';
import TestimonialsSection from './portfolio/TestimonialsSection';
import ContactSection from './portfolio/ContactSection';
import { motion } from 'framer-motion';

type StyleType = 'style1' | 'style2' | 'style3' | 'style4' | 'style5';

interface PortfolioTemplateProps {
    style: StyleType;
    onSelect: () => void;
    isSelected: boolean;
}

const templates = [
    { label: 'Portfolio', status: 'Available' },
    { label: 'E-commerce Site', status: 'Upcoming' },
    { label: 'Business Site', status: 'Upcoming' },
    { label: 'Blog Site', status: 'Upcoming' },
    { label: 'Landing Page', status: 'Upcoming' },
];

function PortfolioTemplate({ style, onSelect, isSelected }: PortfolioTemplateProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Card className={`w-full bg-gray-800 text-white shadow-lg rounded-lg ${isSelected ? 'ring-2 ring-purple-500' : ''}`}>
                <CardContent className="space-y-8 max-h-[600px] overflow-y-auto px-4">
                    <HeroSection style={style} onStyleChange={() => { }} />
                    <SkillsSection style={style} />
                    <ProjectsSection style={style} />
                    <ExperienceSection style={style} />
                    <TestimonialsSection style={style} />
                    <ContactSection style={style} />
                </CardContent>
                <CardFooter className="p-4">
                    <Button
                        onClick={onSelect}
                        className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-semibold ${isSelected ? 'bg-gradient-to-l' : ''}`}
                        aria-pressed={isSelected}
                    >
                        {isSelected ? 'Selected' : 'Select This Style'}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default function TemplateGrid() {
    const [selectedStyle, setSelectedStyle] = useState<StyleType>('style1');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0].label);

    const handleStyleSelect = (style: StyleType) => {
        setIsLoading(true);
        setSelectedStyle(style);
    };

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                const selectedPortfolio = document.getElementById('selected-portfolio');
                if (selectedPortfolio) {
                    selectedPortfolio.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <div className="space-y-12 container mx-auto px-4">
            <div className="flex justify-start items-center mb-8">
                <label htmlFor="template-select" className="text-3xl font-bold text-gray-100 mr-4">Template:</label>
                <div className="relative">
                    <select
                        id="template-select"
                        value={selectedTemplate}
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="bg-gray-800 text-white p-2 rounded-lg"
                    >
                        {templates.map((template) => (
                            <option key={template.label} value={template.label}>
                                {template.label} ({template.status})
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {(['style1', 'style2', 'style3', 'style4', 'style5'] as StyleType[]).map((style) => (
                    <PortfolioTemplate
                        key={style}
                        style={style}
                        onSelect={() => handleStyleSelect(style)}
                        isSelected={selectedStyle === style}
                    />
                ))}
            </div>

            <motion.div
                id="selected-portfolio"
                className="mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Your Selected Portfolio</h2>
                <div className="space-y-12">
                    <HeroSection style={selectedStyle} onStyleChange={() => { }} />
                    <SkillsSection style={selectedStyle} />
                    <ProjectsSection style={selectedStyle} />
                    <ExperienceSection style={selectedStyle} />
                    <TestimonialsSection style={selectedStyle} />
                    <ContactSection style={selectedStyle} />
                </div>
            </motion.div>
        </div>
    );
}