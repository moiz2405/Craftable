'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { StyleType } from '../../types';
import { useRouter } from 'next/navigation'; // Import Next.js router
import { TEMPLATES } from '../../constants/Templates';
interface TemplateCardProps {
    style: string;
    onSelect: () => void;
    isSelected: boolean;
    components: { component: React.ComponentType<any>; title: string }[]; // Adjusting the type here
}

function TemplateCard({
    style,
    onSelect,
    isSelected,
    components,
}: TemplateCardProps) {
    return (
        <div className="w-full bg-gray-800 text-white shadow-lg rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:scale-100 hover:shadow-2xl transform scale-70">
            <div className="bg-gray-900 p-3 flex items-center justify-between">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">Template Preview</div>
            </div>

            <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-700">
                <div className="h-full scrollbar-custom overflow-y-auto p-1 py-0.5">
                    {components.length > 0 ? (
                        components.map(({ component: Component, title }, index) => (
                            <div key={index} className="mb-1">
                                <div className="p-2 text-gray-100">{title}</div>
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
          bg-gray-900 text-white hover:bg-gray-800 z-10 rounded-full p-4 transition-all duration-300 hover:scale-125`}
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
    const router = useRouter();

    const handleContinue = () => {
        router.push(`/customize?template=${selectedTemplate}&style=${selectedStyle}`);
    };

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
            <div className="flex flex-col md:flex-row justify-between items-center mb-3 gap-1">
                <h2 className="text-3xl font-bold text-gray-100">Choose Your Template</h2>
                <div className="flex gap-4">
                    <Select
                        value={selectedTemplate}
                        onValueChange={(value) => setSelectedTemplate(value)}
                    >
                        <SelectTrigger className="w-[280px] bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 transition-all duration-300">
                            <SelectValue placeholder="Select a template" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg mt-1 p-2">
                            {TEMPLATES.map(({ label, status }) => (
                                <SelectItem
                                    key={label}
                                    value={label}
                                    disabled={status === 'Upcoming'}
                                    className={clsx(
                                        'flex justify-between items-center p-2 text-white rounded-lg transition-all duration-300',
                                        status !== 'Upcoming' && 'hover:bg-gray-700 cursor-pointer',
                                        status === 'Upcoming' && 'cursor-not-allowed opacity-70'
                                    )}
                                >
                                    <span>{label}</span>
                                    <span
                                        className={clsx(
                                            'w-3 h-3 rounded-full ml-2',
                                            status === 'Available' ? 'bg-green-500' :
                                                status === 'Testing' ? 'bg-yellow-500' : 'bg-red-500'
                                        )}
                                    />
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Button
                        onClick={handleContinue}
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
