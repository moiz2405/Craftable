'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
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
    {
        label: 'Portfolio',
        status: 'Available',
        components: [
            { component: HeroSection, title: '' },
            { component: SkillsSection, title: 'Skills' },
            { component: ProjectsSection, title: 'Projects' },
            { component: ExperienceSection, title: 'Experience' },
            { component: TestimonialsSection, title: 'Testimonials' },
            { component: ContactSection, title: 'Contact' }
        ]
    },
    { label: 'E-commerce Site', status: 'Testing', components: [] },
    { label: 'Business Site', status: 'Upcoming', components: [] },
    { label: 'Blog Site', status: 'Upcoming', components: [] },
    { label: 'Landing Page', status: 'Upcoming', components: [] },
];

function TemplateCard({
    style,
    onSelect,
    isSelected,
    components,
}: {
    style: StyleType;
    onSelect: () => void;
    isSelected: boolean;
    components: { component: React.ComponentType; title: string }[];
}) {
    return (
        <div className="w-full bg-gray-800 text-white shadow-lg rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gray-900 p-3 flex items-center justify-between">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">Template Preview</div>
            </div>

            <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-700">
                <div className="h-full scrollbar-custom overflow-y-auto p-4 space-y-6">
                    {components.length > 0 ? (
                        components.map(({ component: Component, title }, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
                                <Component style={style} onStyleChange={() => { }} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center p-4">No components available for this template.</p>
                    )}
                </div>
            </div>

            <div className="p-4 flex justify-center bg-gray-900 rounded-b-lg">
                <Button
                    onClick={onSelect}
                    className={clsx(
                        "w-full max-w-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 hover:from-purple-700 hover:to-pink-700",
                        isSelected && "bg-gradient-to-l"
                    )}
                    aria-pressed={isSelected}
                >
                    {isSelected ? 'Selected' : 'Select This Style'}
                </Button>
            </div>
        </div>
    );
}

function CarouselNavButton({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void; }) {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    return (
        <Button
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} 
                bg-gray-900 text-white hover:bg-gray-800 z-10 rounded-full p-4 transition-all duration-300 hover:scale-125`} // Larger buttons with scale effect
            aria-label={direction === 'left' ? 'Previous style' : 'Next style'}
        >
            <Icon size={32} />
        </Button>
    );
}

export default function TemplateSelector() {
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
        <div className="space-y-8 container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-3xl font-bold text-gray-100">Choose Your Template</h2>
                <div className="flex gap-4">
                    <Select
                        value={selectedTemplate}
                        onValueChange={(value) => setSelectedTemplate(value)}
                    >
                        <SelectTrigger className="w-[280px] bg-gray-800 text-white border-gray-700 rounded-lg">
                            <SelectValue placeholder="Select a template" />
                        </SelectTrigger>
                        <SelectContent>
                            {TEMPLATES.map(({ label, status }) => (
                                <SelectItem
                                    key={label}
                                    value={label}
                                    disabled={status === 'Upcoming'}
                                    className={clsx(status === 'Upcoming' && 'text-gray-500 cursor-not-allowed', 'text-gray-900')}
                                >
                                    {label} ({status})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={() => {/* Continue button action */ }}
                        disabled={!selectedTemplate}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 w-full max-w-xs"
                    >
                        Continue
                    </Button>
                </div>
            </div>

            {/* Template Card Container */}
            <div className="relative aspect-[13/9] w-full max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStyleIndex}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -200 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <TemplateCard
                            style={currentStyle}
                            onSelect={() => handleStyleSelect(currentStyle)}
                            isSelected={selectedStyle === currentStyle}
                            components={selectedTemplateData?.components || []}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
                <CarouselNavButton direction="left" onClick={() => handleNav('prev')} />
                <CarouselNavButton direction="right" onClick={() => handleNav('next')} />
            </div>

            {/* Style Selection Buttons */}
            <div className="flex justify-center mt-4 space-x-2">
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
