import { motion } from "framer-motion";
import { Code, Globe, Server, Laptop } from 'lucide-react';

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
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            case 'style2':
                return (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg mb-4 shadow-lg"
                            >
                                <span className="text-purple-400 text-xl">{skill.icon}</span>
                                <span className="text-white text-lg">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style3':
                return (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative bg-gray-700 p-8 rounded-lg text-white shadow-lg"
                            >
                                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/path-to-background-image.jpg')` }}></div>
                                <span className="relative z-10 flex items-center justify-center gap-2 text-2xl">{skill.icon} {skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style4':
                return (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-full shadow-lg"
                            >
                                <span className="text-purple-400 text-3xl">{skill.icon}</span>
                                <span className="text-white text-sm mt-2">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style5':
                return (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
                            >
                                <span className="text-purple-400 text-4xl">{skill.icon}</span>
                                <span className="text-white text-xl mt-4">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                );
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
