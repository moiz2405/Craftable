// constants/templates.ts
import { HeroSection } from "@/components/templates/portfolio/HeroSection";
import { SkillsSection } from "@/components/templates/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/templates/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/templates/portfolio/ExperienceSection";
// import { TestimonialsSection } from "@/components/templates/portfolio/TestimonialsSection";
// import { ContactSection } from "@/components/templates/portfolio/ContactSection";
export const TEMPLATES = [
    {
        label: 'Portfolio',
        status: 'Available',
        components: [
            { component: HeroSection, title: '' },
            { component: SkillsSection, title: '' },
            { component: ProjectsSection, title: '' },
            { component: ExperienceSection, title: '' },
        ],
    },
    { label: 'E-commerce Site', status: 'Testing', components: [] },
    { label: 'Business Site', status: 'Upcoming', components: [] },
    { label: 'Blog Site', status: 'Upcoming', components: [] },
    { label: 'Landing Page', status: 'Upcoming', components: [] },
];
// { component: TestimonialsSection, title: '' },{ component: ContactSection, title: '' },