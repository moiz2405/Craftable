'use client';

import { useState } from 'react';
import HeroSection from '../portfolio/HeroSection';
import SkillsSection from '../portfolio/SkillsSection';
import ProjectsSection from '../portfolio/ProjectsSection';
import ExperienceSection from '../portfolio/ExperienceSection';

type StyleType = 'style1' | 'style2' | 'style3';

export default function PortfolioLayout() {
    const [heroStyle] = useState<StyleType>('style1');
    const [skillsStyle] = useState<StyleType>('style1');
    const [projectsStyle] = useState<StyleType>('style1');
    const [experienceStyle] = useState<StyleType>('style1');

    return (
        <div className="w-full max-w-6xl mx-auto space-y-16 py-12">
            <HeroSection style={heroStyle} />
            <SkillsSection style={skillsStyle} />
            <ProjectsSection style={projectsStyle} />
            <ExperienceSection style={experienceStyle} />
        </div>
    );
}
