'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Laptop, Server, Smartphone } from 'lucide-react'
import { StyleType } from '../../../types';
interface StyleProps {
    style: StyleType
}

const skills = [
    { name: 'JavaScript', icon: <Code className="h-6 w-6" /> },
    { name: 'React', icon: <Globe className="h-6 w-6" /> },
    { name: 'Node.js', icon: <Server className="h-6 w-6" /> },
    { name: 'Python', icon: <Code className="h-6 w-6" /> },
    { name: 'CSS', icon: <Laptop className="h-6 w-6" /> },
    { name: 'HTML', icon: <Globe className="h-6 w-6" /> },
]

export function SkillsSection({ style }: StyleProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

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
                )
            case 'style2':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 px-4 py-2 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
                            >
                                <span className="text-purple-400 font-semibold flex items-center gap-2">
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case 'style3':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                            >
                                <span className="text-purple-400 font-semibold flex items-center gap-2">
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case 'style4':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-between"
                            >
                                <span className="text-purple-400 font-semibold flex items-center gap-2">
                                    {skill.icon}
                                    {skill.name}
                                </span>
                                <motion.div
                                    className="h-2 bg-purple-600 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.random() * 60 + 40}%` }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case 'style5':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
                            >
                                <motion.div
                                    className="text-4xl mb-2 text-purple-400"
                                    animate={{ rotateY: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <span className="text-white font-semibold">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            default:
                return null
        }
    }

    return (
        <section className="container mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>
            {renderContent()}
        </section>
    )
}
