"use client"
import { useState } from 'react';
import { TEMPLATES } from '../../constants/Templates';
import { HeroSection } from "@/components/templates/portfolio/HeroSection"; // Import HeroSection
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const CustomizePageContent = () => {
    const searchParams = useSearchParams();
    const selectedTemplateLabel = searchParams.get('template');
    const selectedStyle = (searchParams.get('style') as "style1" | "style2" | "style3" | "style4" | "style5") || 'style1';

    const selectedTemplate = TEMPLATES.find(
        (template) => template.label === selectedTemplateLabel
    );

    if (!selectedTemplate) {
        return <p className="text-red-500">Invalid template selected.</p>;
    }

    const [customizedData, setCustomizedData] = useState(
        selectedTemplate.components.reduce((acc, { component: Component }) => {
            acc[Component.name] = {}; // Initialize each component with an empty object
            return acc;
        }, {} as Record<string, any>)
    );

    // Handle dynamic updates for components
    const handleComponentUpdate = (componentName: string, updatedData: any) => {
        setCustomizedData((prevData) => ({
            ...prevData,
            [componentName]: updatedData, // Update the data for the specific component
        }));
    };

    // Handle user input for HeroSection
    const handleHeroSectionInputChange = (field: string, value: string) => {
        setCustomizedData((prevData) => ({
            ...prevData,
            HeroSection: {
                ...prevData.HeroSection,
                [field]: value,
            },
        }));
    };

    return (
        <div className="p-6 space-y-8 bg-gradient-to-b from-purple-900 to-black text-white">
            <span className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Customize Your Template
            </span>

            <div className="space-y-6">
                {selectedTemplate.components.length > 0 ? (
                    selectedTemplate.components.map(({ component: Component }, index) => (
                        <div key={index} className="p-6 border rounded-xl shadow-lg bg-white text-black">
                            {Component === HeroSection ? (
                                <>
                                    <Component
                                        style={selectedStyle}
                                        title={customizedData.HeroSection.title || "Welcome to My Portfolio"}
                                        subtitle={customizedData.HeroSection.subtitle || "Showcasing My Work and Projects"}
                                        buttonText1={customizedData.HeroSection.buttonText1 || "Get Started"}
                                        buttonText2={customizedData.HeroSection.buttonText2 || "Learn More"}
                                        buttonLink1={customizedData.HeroSection.buttonLink1 || "#"}
                                        buttonLink2={customizedData.HeroSection.buttonLink2 || "#"}
                                        socialLinks={customizedData.HeroSection.socialLinks || {}}
                                        imageUrl={customizedData.HeroSection.imageUrl}
                                        onUpdate={(updatedData) => handleComponentUpdate('HeroSection', updatedData)}
                                    />

                                    {/* Input fields for dynamic data */}
                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <label className="block text-lg font-semibold">Hero Section Title:</label>
                                            <input
                                                type="text"
                                                value={customizedData.HeroSection.title || ''}
                                                onChange={(e) => handleHeroSectionInputChange('title', e.target.value)}
                                                className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-lg font-semibold">Hero Section Subtitle:</label>
                                            <input
                                                type="text"
                                                value={customizedData.HeroSection.subtitle || ''}
                                                onChange={(e) => handleHeroSectionInputChange('subtitle', e.target.value)}
                                                className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-lg font-semibold">Button Text 1:</label>
                                            <input
                                                type="text"
                                                value={customizedData.HeroSection.buttonText1 || ''}
                                                onChange={(e) => handleHeroSectionInputChange('buttonText1', e.target.value)}
                                                className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-lg font-semibold">Button Text 2:</label>
                                            <input
                                                type="text"
                                                value={customizedData.HeroSection.buttonText2 || ''}
                                                onChange={(e) => handleHeroSectionInputChange('buttonText2', e.target.value)}
                                                className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Component
                                    style={selectedStyle}
                                    customizationData={customizedData[Component.name]} // Default data for other components
                                    onUpdate={(updatedData) => handleComponentUpdate(Component.name, updatedData)} // Update other component data dynamically
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No components available for this template.</p>
                )}
            </div>
        </div>
    );
};

export default function CustomizePage() {
    return (
        <Suspense fallback={<div>Loading customization options...</div>}>
            <CustomizePageContent />
        </Suspense>
    );
}
