'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from 'lucide-react';
import { StyleType } from '../../../types';

interface Experience {
    company: string;
    role: string;
    period: string;
}

interface StyleProps {
    style: StyleType;
    title?: string; // Optional Title for the Section
    subtitle?: string; // Optional Subtitle
    experiences?: Experience[]; // Optional custom experiences
    onUpdate: (updatedData: Partial<StyleProps>) => void; // Specific type for updates
}

// Default Experience Data
const defaultExperiences = [
    { company: 'Tech Innovators', role: 'Senior Developer', period: '2020 - Present' },
    { company: 'Web Solutions Inc.', role: 'Full Stack Developer', period: '2018 - 2020' },
    { company: 'Digital Creations', role: 'Junior Developer', period: '2016 - 2018' },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

// Reusable Card Component
const ExperienceCard = ({ company, role, period }: { company: string; role: string; period: string }) => (
    <motion.div variants={itemVariants}>
        <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                    <Briefcase className="h-5 w-5" />
                    {company}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-gray-300">{role}</p>
                <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
                    <Calendar className="h-4 w-4" />
                    {period}
                </p>
            </CardContent>
        </Card>
    </motion.div>
);

// Reusable Style Components
const Style1 = ({ experiences }: { experiences: { company: string; role: string; period: string }[] }) => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
        ))}
    </motion.div>
);

const Style2 = ({ experiences }: { experiences: { company: string; role: string; period: string }[] }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-l-4 border-purple-500 pl-6 ml-6 space-y-6"
    >
        {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
        ))}
    </motion.div>
);

const Style3 = ({ experiences }: { experiences: { company: string; role: string; period: string }[] }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
        {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
        ))}
    </motion.div>
);

const Style4 = ({ experiences }: { experiences: { company: string; role: string; period: string }[] }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
    >
        {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
        ))}
    </motion.div>
);

const Style5 = ({ experiences }: { experiences: { company: string; role: string; period: string }[] }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
        {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
        ))}
    </motion.div>
);

// Map styles to components
const styleMap: { [key in StyleType]: React.FC<{ experiences: { company: string; role: string; period: string }[] }> } = {
    style1: Style1,
    style2: Style2,
    style3: Style3,
    style4: Style4,
    style5: Style5,
};

// Experience Section Component
export function ExperienceSection({ style, title = "My Experience", subtitle = "", experiences = defaultExperiences, onUpdate }: StyleProps) {
    const RenderStyle = styleMap[style] || (() => <p>Style not found</p>);

    return (
        <section className="container mx-auto px-4 py-6 text-black">
            <h2 className="text-3xl font-bold  mb-12 text-white">{title}</h2>
            {subtitle && <p className="text-center text-gray-400 mb-8">{subtitle}</p>}
            <RenderStyle experiences={experiences} />
        </section>
    );
}
