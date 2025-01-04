'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';  // For navigation
import { useSiteContext } from '../../context/SiteContext';

interface Option {
    label: string;
    status: string;
}

const options: Option[] = [
    { label: 'Portfolio', status: 'Available' },
    { label: 'E-commerce Site', status: 'Upcoming' },
    { label: 'Business Site', status: 'Upcoming' },
    { label: 'Blog Site', status: 'Upcoming' },
    { label: 'Landing Page', status: 'Upcoming' }
];

const siteNameMapping: { [key: string]: string } = {
    'Portfolio': 'portfolio',
    'E-commerce Site': 'ecommerce-site',
    'Business Site': 'business-site',
    'Blog Site': 'blog-site',
    'Landing Page': 'landing-page',
};

export default function Hero() {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { setSelectedSite } = useSiteContext();  // Access Site context
    const router = useRouter();  // Next.js router for navigation

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleSelect = (option: Option): void => {
        console.log('Selected option:', option.label); // Confirm the correct option
        setSelectedOption(option.label); // Update local state
        setSelectedSite(option.label); // Update context state
        setShowDropdown(false);
    };




    const handleGetStarted = (): void => {
        const siteSlug = siteNameMapping[selectedOption || options[currentIndex].label] || 'portfolio';
        setSelectedSite(siteSlug);  // Set selected site context
        router.push(`/craft`);  // Redirect to craft page with the selected site
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 pointer-events-none"></div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center z-10">
                Make your Website
                with <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Craftable</span>
            </h1>

            <p className="text-2xl md:text-2xl text-center mb-8 z-10 max-w-2xl text-purple-300 font-bold">
                Create, customize, and deploy your site in minutes.
            </p>

            <div className="relative w-full max-w-2xl mx-auto mb-8 z-10">
                <div
                    className="flex items-center bg-white bg-opacity-10 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <span className="text-2xl font-medium ml-4">I want to Create a </span>
                    <div className="relative flex-grow ml-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <input
                            type="text"
                            value={selectedOption || options[currentIndex].label}
                            readOnly
                            className="w-full bg-transparent border-none focus:outline-none text-2xl font-semibold cursor-pointer"
                        />
                        <ChevronDown
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                        />
                        {showDropdown && (
                            <ul className="absolute top-full left-0 w-full bg-purple-800 bg-opacity-95 rounded-md mt-2 py-2 z-40 shadow-lg">
                                {options.map((option, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-purple-700 cursor-pointer flex justify-between items-center transition-colors text-white"
                                        onClick={() => handleSelect(option)}
                                    >
                                        <span>{option.label}</span>
                                        <span className="text-sm text-gray-400">{option.status}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex space-x-4">
                <button
                    className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
                    onClick={handleGetStarted}
                >
                    Get Started
                </button>
                <button className="px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    );
}
