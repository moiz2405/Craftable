"use client";

import { useState } from 'react';
import { TEMPLATES } from '../../constants/Templates';
import { HeroSection } from "@/components/templates/portfolio/HeroSection";
import { SkillsSection } from "@/components/templates/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/templates/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/templates/portfolio/ExperienceSection";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const CustomizePageContent = () => {
    const searchParams = useSearchParams();
    const selectedTemplateLabel = searchParams.get('template');
    const selectedStyle = (searchParams.get('style') as "style1" | "style2" | "style3" | "style4" | "style5") || 'style1';

    const selectedTemplate = TEMPLATES.find(
        (template) => template.label === selectedTemplateLabel
    );

    const initialCustomizedData = selectedTemplate?.components.reduce((acc, { component: Component }) => {
        acc[Component.name] = {}; // Initialize each component with an empty object
        return acc;
    }, {} as Record<string, Record<string, unknown>>) || {};


    const [customizedData, setCustomizedData] = useState(initialCustomizedData);

    if (!selectedTemplate) {
        return <p className="text-red-500">Invalid template selected.</p>;
    }

    const handleComponentUpdate = (componentName: string, updatedData: object) => {
        setCustomizedData((prevData) => ({
            ...prevData,
            [componentName]: updatedData,
        }));
    };

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

            <div className="grid grid-cols-12 gap-8">
                {/* Template Preview */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="space-y-6">
                        {selectedTemplate.components.length > 0 ? (
                            selectedTemplate.components.map(({ component: Component }, index) => (
                                <div key={index} className="p-6 border rounded-xl shadow-lg bg-white text-black">
                                    {Component === HeroSection ? (
                                        <HeroSection
                                            style={selectedStyle}
                                            title={customizedData.HeroSection.title || "Welcome to My Portfolio"}
                                            subtitle={customizedData.HeroSection.subtitle || "Showcasing My Work and Projects"}
                                            buttonText1={customizedData.HeroSection.buttonText1 || "Get Started"}
                                            buttonText2={customizedData.HeroSection.buttonText2 || "Learn More"}
                                            buttonLink1={customizedData.HeroSection.buttonLink1 || "#"}
                                            buttonLink2={customizedData.HeroSection.buttonLink2 || "#"}
                                            socialLinks={customizedData.HeroSection.socialLinks || {}}
                                            imageUrl={customizedData.HeroSection.imageUrl}
                                            pfpShape={customizedData.HeroSection.pfpShape || "circle"}
                                            onUpdate={(updatedData) => handleComponentUpdate('HeroSection', updatedData)}
                                        />
                                    ) : Component === SkillsSection ? (
                                        <SkillsSection
                                            style={selectedStyle}


                                        />
                                    ) : Component === ProjectsSection ? (
                                        <ProjectsSection
                                            style={selectedStyle}
                                            projects={customizedData.ProjectsSection.projects || []}
                                            onUpdate={(updatedData) => handleComponentUpdate('ProjectsSection', updatedData)}
                                        />
                                    ) : Component === ExperienceSection ? (
                                        <ExperienceSection
                                            style={selectedStyle}

                                            onUpdate={(updatedData) => handleComponentUpdate('ExperienceSection', updatedData)}
                                        />
                                    ) : null}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No components available for this template.</p>
                        )}
                    </div>
                </div>

                {/* Editor Panel */}
                <div className="col-span-12 lg:col-span-4 p-6 border rounded-xl shadow-lg bg-white text-black">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold">Hero Section</h3>
                            <div>
                                <label className="block text-lg font-semibold">Title:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.title || ''}
                                    onChange={(e) => handleHeroSectionInputChange('title', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Subtitle:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.subtitle || ''}
                                    onChange={(e) => handleHeroSectionInputChange('subtitle', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Button 1 Text:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.buttonText1 || ''}
                                    onChange={(e) => handleHeroSectionInputChange('buttonText1', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Button 1 Link:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.buttonLink1 || ''}
                                    onChange={(e) => handleHeroSectionInputChange('buttonLink1', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Button 2 Text:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.buttonText2 || ''}
                                    onChange={(e) => handleHeroSectionInputChange('buttonText2', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Button 2 Link:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.buttonLink2 || ''}
                                    onChange={(e) => handleHeroSectionInputChange('buttonLink2', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Profile Image URL:</label>
                                <input
                                    type="text"
                                    value={customizedData.HeroSection.imageUrl || ''}
                                    onChange={(e) => handleHeroSectionInputChange('imageUrl', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-semibold">Profile Image Shape:</label>
                                <select
                                    value={customizedData.HeroSection.pfpShape || 'circle'}
                                    onChange={(e) => handleHeroSectionInputChange('pfpShape', e.target.value)}
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                >
                                    <option value="circle">Circle</option>
                                    <option value="square">Square</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Skills Section</h3>
                            <div>
                                <label className="block text-lg font-semibold">Skills:</label>
                                <textarea
                                    value={customizedData.SkillsSection.skills?.join(', ') || ''}
                                    onChange={(e) =>
                                        handleComponentUpdate('SkillsSection', { skills: e.target.value.split(', ') })
                                    }
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Projects Section</h3>
                            <div>
                                <label className="block text-lg font-semibold">Projects (comma separated):</label>
                                <textarea
                                    value={customizedData.ProjectsSection.projects?.join(', ') || ''}
                                    onChange={(e) =>
                                        handleComponentUpdate('ProjectsSection', { projects: e.target.value.split(', ') })
                                    }
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Experience Section</h3>
                            <div>
                                <label className="block text-lg font-semibold">Experience (comma separated):</label>
                                <textarea
                                    value={customizedData.ExperienceSection.experience?.join(', ') || ''}
                                    onChange={(e) =>
                                        handleComponentUpdate('ExperienceSection', { experience: e.target.value.split(', ') })
                                    }
                                    className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
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
