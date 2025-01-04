'use client';

import { useState } from 'react';
import HeroSection from '../portfolio/HeroSection';
import SkillsSection from '../portfolio/SkillsSection';
import ProjectsSection from '../portfolio/ProjectsSection';
import ExperienceSection from '../portfolio/ExperienceSection';



type StyleType = 'style1' | 'style2' | 'style3';

export default function PortfolioLayout() {
    const [heroStyle, setHeroStyle] = useState<StyleType>('style1');
    const [skillsStyle, setSkillsStyle] = useState<StyleType>('style1');
    const [projectsStyle, setProjectsStyle] = useState<StyleType>('style1');
    const [experienceStyle, setExperienceStyle] = useState<StyleType>('style1');

    return (
        <div className="w-full max-w-6xl mx-auto space-y-16 py-12">
            <HeroSection
                style={heroStyle}
                onStyleChange={(style) => setHeroStyle(style as StyleType)}
            />
            <SkillsSection
                style={skillsStyle}
                onStyleChange={(style) => setSkillsStyle(style as StyleType)}
            />
            <ProjectsSection
                style={projectsStyle}
                onStyleChange={(style) => setProjectsStyle(style as StyleType)}
            />
            <ExperienceSection
                style={experienceStyle}
                onStyleChange={(style) => setExperienceStyle(style as StyleType)}
            />
        </div>
    );
}

