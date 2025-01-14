'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from 'lucide-react';
import { StyleType } from '../../../types';

interface StyleProps {
    style: StyleType;
}

const experiences = [
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

// Reusable Style Components
const Style1 = () => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="h-5 w-5" />
                            {exp.company}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-300">{exp.role}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

// Repeat for other styles (Style2, Style3, etc.)
const Style2 = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative border-l-4 border-purple-500 pl-6 ml-6 space-y-6"
    >
        {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="h-5 w-5" />
                            {exp.company}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-300">{exp.role}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

const Style3 = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
        {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="h-5 w-5" />
                            {exp.company}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-300">{exp.role}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

const Style4 = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
    >
        {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="h-5 w-5" />
                            {exp.company}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-300">{exp.role}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

const Style5 = () => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
        {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-400">
                            <Briefcase className="h-5 w-5" />
                            {exp.company}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-300">{exp.role}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-2">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

// Map styles to components
const styleMap: { [key in StyleType]: React.FC } = {
    style1: Style1,
    style2: Style2,
    style3: Style3,
    style4: Style4,
    style5: Style5,
};

// Experience Section Component
export function ExperienceSection({ style }: StyleProps) {
    const RenderStyle = styleMap[style] || (() => <p>Style not found</p>);
    return (
        <section className="container mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">My Experience</h2>
            <RenderStyle />
        </section>
    );
}
