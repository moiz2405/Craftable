'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Option {
    label: string;
    status: string;
    description: string;
    isAvailable: boolean;
}

const options: Option[] = [
    { label: 'Portfolio', status: 'Available', description: 'Showcase your work and skills', isAvailable: true },
    { label: 'E-commerce Site', status: 'Testing', description: 'Sell products online', isAvailable: true },
    { label: 'Business Site', status: 'Coming Soon', description: 'Promote your business', isAvailable: false },
    { label: 'Blog Site', status: 'Coming Soon', description: 'Share your thoughts and ideas', isAvailable: false },
    { label: 'Landing Page', status: 'Coming Soon', description: 'Promote a specific product or service', isAvailable: false },
];


interface HeroProps {
    onSelectSite: (site: string) => void;
}

export default function EnhancedHero({ onSelectSite }: HeroProps) {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const router = useRouter();

    const dropdownRef = useRef<HTMLUListElement>(null);

    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const availableOptions = options.filter(opt => opt.isAvailable);
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % availableOptions.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSelect = (option: Option): void => {
        if (option.isAvailable) {
            setSelectedOption(option);
            onSelectSite(option.label);
            setShowDropdown(false);
        }
    };

    const handleGetStarted = (): void => {
        const availableOptions = options.filter(opt => opt.isAvailable);
        const selectedSite = selectedOption?.label || availableOptions[currentIndex % availableOptions.length].label;
        onSelectSite(selectedSite);
        router.push(`/craft?site=${encodeURIComponent(selectedSite)}`);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 text-center z-10"
            >
                Websites Made
                <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Craftable</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-center mb-8 z-10 max-w-2xl text-purple-300 font-bold"
            >
                Create, customize, and deploy your site in minutes.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative w-full max-w-2xl mx-auto mb-8 z-10"
            >
                <div
                    ref={buttonRef}
                    className="flex items-center bg-white bg-opacity-10 rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer border border-purple-500"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <span className="text-xl md:text-2xl font-medium ml-4">I want to Create a </span>
                    <div className="relative flex-grow ml-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <input
                            type="text"
                            value={selectedOption?.label || options[currentIndex].label}
                            readOnly
                            className="w-full bg-transparent border-none focus:outline-none text-xl md:text-2xl font-semibold cursor-pointer"
                        />
                        <ChevronDown className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                        <AnimatePresence>
                            {showDropdown && (
                                <motion.ul
                                    ref={dropdownRef}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-full bg-purple-800 bg-opacity-95 border border-purple-700 rounded-md mt-2 py-2 z-40 shadow-lg"
                                >
                                    {options.map((option, index) => (
                                        <li
                                            key={index}
                                            className={`px-4 py-3 ${!option.isAvailable ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-700 cursor-pointer'
                                                } flex justify-between items-center transition-colors text-white`}
                                            onClick={() => option.isAvailable && handleSelect(option)}
                                        >
                                            <div className="flex flex-col">
                                                <span>{option.label}</span>
                                                {!option.isAvailable && (
                                                    <span className="text-xs text-pink-400 font-semibold">Coming Soon</span>
                                                )}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                {option.isAvailable ? (
                                                    <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Available</span>
                                                ) : (
                                                    <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded-full">Unavailable</span>
                                                )}
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Info className="w-4 h-4 text-gray-400" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{option.description}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <Button
                    variant="default"
                    size="lg"
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
                >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="border-white hover:bg-white hover:text-purple-900 transition-colors text-black"
                >
                    Learn More
                </Button>
            </motion.div>
        </div>
    );
}
