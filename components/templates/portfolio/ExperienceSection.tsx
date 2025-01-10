'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from 'lucide-react'
import { StyleType } from '../../../types';
interface StyleProps {
    style: StyleType
}

const experiences = [
    { company: 'Tech Innovators', role: 'Senior Developer', period: '2020 - Present' },
    { company: 'Web Solutions Inc.', role: 'Full Stack Developer', period: '2018 - 2020' },
    { company: 'Digital Creations', role: 'Junior Developer', period: '2016 - 2018' },
]

export function ExperienceSection({ style }: StyleProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
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
                        className="space-y-6"
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
                )
            case 'style2':
                return (
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
                )
            case 'style3':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white">
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
                )
            case 'style4':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div key={index} variants={itemVariants} className="flex items-center">
                                <div className="w-1/4 text-right pr-4">
                                    <p className="text-sm text-gray-400">{exp.period}</p>
                                </div>
                                <div className="w-1/2">
                                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                                    <div className="w-1 h-full bg-purple-300 ml-2"></div>
                                </div>
                                <div className="w-3/4 bg-gray-800 border-gray-700 p-4 rounded-lg shadow-md">
                                    <h4 className="text-xl font-bold text-purple-400">{exp.company}</h4>
                                    <p className="text-lg text-gray-300">{exp.role}</p>
                                </div>
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="bg-gray-800 border-gray-700 text-white text-center">
                                    <CardHeader>
                                        <motion.div
                                            className="text-4xl mb-2 text-purple-400"
                                            animate={{ rotateY: 360 }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                        >
                                            <Briefcase className="h-12 w-12 mx-auto" />
                                        </motion.div>
                                        <CardTitle className="text-xl font-bold text-purple-400">{exp.company}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-gray-300">{exp.role}</p>
                                        <p className="text-sm text-gray-400 flex items-center justify-center gap-1 mt-2">
                                            <Calendar className="h-4 w-4" />
                                            {exp.period}
                                        </p>
                                    </CardContent>
                                </Card>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">My Experience</h2>
            {renderContent()}
        </section>
    )
}

