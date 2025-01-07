import { motion } from "framer-motion";

interface ExperienceSectionProps {
    style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5';
}

export default function ExperienceSection({ style }: ExperienceSectionProps) {
    const experiences = [
        { company: 'Tech Innovators', role: 'Senior Developer', period: '2020 - Present' },
        { company: 'Web Solutions Inc.', role: 'Full Stack Developer', period: '2018 - 2020' },
        { company: 'Digital Creations', role: 'Junior Developer', period: '2016 - 2018' },
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
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
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
                        className="space-y-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-purple-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                            >
                                <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                                <p className="text-lg text-gray-200">{exp.role}</p>
                                <p className="text-sm text-gray-400">{exp.period}</p>
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
                        className="relative border-l-4 border-purple-500 pl-6 ml-6 space-y-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                            >
                                <h4 className="text-xl font-bold text-purple-800">{exp.company}</h4>
                                <p className="text-lg text-gray-800">{exp.role}</p>
                                <p className="text-sm text-gray-600">{exp.period}</p>
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-600"
                            >
                                <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                                <p className="text-lg text-gray-200">{exp.role}</p>
                                <p className="text-sm text-gray-300">{exp.period}</p>
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
                        className="space-y-8"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center"
                            >
                                <div className="w-1/4 text-right pr-4">
                                    <p className="text-sm text-gray-500">{exp.period}</p>
                                </div>
                                <div className="w-1/2">
                                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                                    <div className="w-1 h-full bg-purple-300 ml-2"></div>
                                </div>
                                <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold text-purple-800">{exp.company}</h4>
                                    <p className="text-lg text-gray-700">{exp.role}</p>
                                </div>
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                            >
                                <motion.div
                                    className="text-4xl mb-2 text-purple-500"
                                    animate={{ rotateY: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    💼
                                </motion.div>
                                <h4 className="text-xl font-bold text-gray-800">{exp.company}</h4>
                                <p className="text-lg text-gray-600">{exp.role}</p>
                                <p className="text-sm text-gray-500">{exp.period}</p>
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

