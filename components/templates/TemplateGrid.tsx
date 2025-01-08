'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from './portfolio/HeroSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ExperienceSection from './portfolio/ExperienceSection';
import TestimonialsSection from './portfolio/TestimonialsSection';
import ContactSection from './portfolio/ContactSection';
import clsx from 'clsx';

type StyleType = 'style1' | 'style2' | 'style3' | 'style4' | 'style5';

const TEMPLATES = [
    { label: 'Portfolio', status: 'Available', components: [HeroSection, SkillsSection, ProjectsSection, ExperienceSection, TestimonialsSection, ContactSection] },
    { label: 'E-commerce Site', status: 'Available', components: [] },
    { label: 'Business Site', status: 'Upcoming', components: [] },
    { label: 'Blog Site', status: 'Upcoming', components: [] },
    { label: 'Landing Page', status: 'Upcoming', components: [] },
];

function TemplateCard({ style, onSelect, isSelected, components }: { style: StyleType; onSelect: () => void; isSelected: boolean; components: React.ComponentType[]; }) {
    return (
        <Card className="w-full bg-gray-800 text-white shadow-lg rounded-lg border border-gray-700">
            <CardContent className="space-y-8 h-[calc(100vh-300px)] overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700 hover:scrollbar-thumb-purple-400">
                {components.length > 0 ? (
                    components.map((Component, index) => <Component key={index} style={style} onStyleChange={() => { }} />)
                ) : (
                    <p className="text-gray-400 text-center">No components available for this template.</p>
                )}
            </CardContent>
            <CardFooter className="p-4 flex justify-center bg-gray-900">
                <Button
                    onClick={onSelect}
                    className={clsx(
                        "w-full max-w-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold transition-all duration-300",
                        isSelected && "bg-gradient-to-l"
                    )}
                    aria-pressed={isSelected}
                >
                    {isSelected ? 'Selected' : 'Select This Style'}
                </Button>
            </CardFooter>
        </Card>
    );
}

function CarouselNavButton({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void; }) {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    return (
        <Button
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} bg-gray-800 text-white hover:bg-gray-700 z-10`}
            aria-label={direction === 'left' ? 'Previous style' : 'Next style'}
        >
            <Icon size={24} />
        </Button>
    );
}

export default function TemplateGrid() {
    const [selectedStyle, setSelectedStyle] = useState<StyleType>('style1');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<string>(TEMPLATES[0].label);
    const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const handleStyleSelect = (style: StyleType) => {
        setIsLoading(true);
        setSelectedStyle(style);
    };

    const handleNav = (direction: 'prev' | 'next') => {
        setCurrentStyleIndex((prev) => (direction === 'prev' ? (prev === 0 ? 4 : prev - 1) : (prev === 4 ? 0 : prev + 1)));
    };

    const currentStyle = ['style1', 'style2', 'style3', 'style4', 'style5'][currentStyleIndex] as StyleType;
    const selectedTemplateData = TEMPLATES.find((template) => template.label === selectedTemplate);

    return (
        <div className="space-y-8 container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-100">Choose Your Template</h2>
                <Select
                    value={selectedTemplate}
                    onValueChange={(value) => setSelectedTemplate(value)}
                >
                    <SelectTrigger className="w-[280px] bg-gray-800 text-white border-gray-700">
                        <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                        {TEMPLATES.map(({ label, status }) => (
                            <SelectItem
                                key={label}
                                value={label}
                                disabled={status === 'Upcoming'}
                                className={clsx(status === 'Upcoming' && 'text-gray-500 cursor-not-allowed', 'text-gray-100')}
                            >
                                {label} ({status})
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStyleIndex}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TemplateCard
                            style={currentStyle}
                            onSelect={() => handleStyleSelect(currentStyle)}
                            isSelected={selectedStyle === currentStyle}
                            components={selectedTemplateData?.components || []}
                        />
                    </motion.div>
                </AnimatePresence>
                <CarouselNavButton direction="left" onClick={() => handleNav('prev')} />
                <CarouselNavButton direction="right" onClick={() => handleNav('next')} />
            </div>

            <div className="flex justify-center mt-4">
                {['style1', 'style2', 'style3', 'style4', 'style5'].map((style, index) => (
                    <Button
                        key={style}
                        variant="ghost"
                        size="sm"
                        className={clsx("mx-1", currentStyleIndex === index ? 'text-purple-500' : 'text-gray-400')}
                        onClick={() => setCurrentStyleIndex(index)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
        </div>
    );
}
