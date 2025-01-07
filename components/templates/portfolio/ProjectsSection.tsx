import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
    style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5';
}

export default function ProjectsSection({ style }: ProjectsSectionProps) {
    const projects = [
        { title: 'E-commerce Platform', description: 'A full-stack online shopping platform' },
        { title: 'Task Management App', description: 'A React-based productivity application' },
        { title: 'Portfolio Website', description: 'A responsive portfolio site using Next.js' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                            >
                                <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                                <p className="text-gray-200">{project.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style2':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                            >
                                <h4 className="text-xl font-bold mb-2 text-purple-800">{project.title}</h4>
                                <p className="text-gray-800">{project.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style3':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center space-y-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-600 w-full md:w-2/3"
                            >
                                <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                                <p className="text-gray-200">{project.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style4':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="relative overflow-hidden mb-4">
                                    <img src={`/placeholder.svg?height=200&width=300&text=${project.title}`} alt={project.title} className="w-full h-40 object-cover rounded" />
                                    <div className="absolute inset-0 bg-purple-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button className="bg-white text-purple-800 hover:bg-gray-100">View Project</Button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-purple-800">{project.title}</h4>
                                <p className="text-gray-600">{project.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'style5':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 w-full md:w-72"
                            >
                                <div className="text-4xl mb-4 text-purple-500">🚀</div>
                                <h4 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h4>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <Button className="w-full bg-purple-500 text-white hover:bg-purple-600">Learn More</Button>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4">
            {renderContent()}
        </div>
    );
}

