// SkillsSection.tsx
import { motion } from "framer-motion";
import { Code, Globe, Server, Laptop } from 'lucide-react';

interface StyleType {
    style: "style1" | "style2" | "style3" | "style4" | "style5";
}

interface Skill {
    name: string;
    icon: JSX.Element;
}

interface SkillsSectionProps {
    style: "style1" | "style2" | "style3" | "style4" | "style5";
    skills: Skill[];
    onUpdate: (updatedData: any) => void;
}

const skills: Skill[] = [
    { name: 'JavaScript', icon: <Code className="h-6 w-6" /> },
    { name: 'React', icon: <Globe className="h-6 w-6" /> },
    { name: 'Node.js', icon: <Server className="h-6 w-6" /> },
    { name: 'Python', icon: <Code className="h-6 w-6" /> },
    { name: 'CSS', icon: <Laptop className="h-6 w-6" /> },
    { name: 'HTML', icon: <Globe className="h-6 w-6" /> },
];

export function SkillsSection({ style, skills, onUpdate }: SkillsSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 p-4 rounded-lg text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
                            >
                                <span className="text-purple-400 font-semibold flex items-center justify-center gap-2">
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            // Handle other styles (style2, style3, etc.)
            default:
                return null;
        }
    };

    return (
        <section className="container mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>
            {renderContent()}
        </section>
    );
}
