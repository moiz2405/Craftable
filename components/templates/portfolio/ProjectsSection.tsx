'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Code, Layers, Database, Globe, Smartphone, Server } from 'lucide-react'
import Link from "next/link"
import { StyleType } from '../../../types';
interface StyleProps {
    style: StyleType
}

const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack online shopping platform with real-time inventory management', icon: <Layers className="h-6 w-6" />, github: '#', demo: '#', tags: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Task Management App', description: 'A React-based productivity application with drag-and-drop functionality', icon: <Smartphone className="h-6 w-6" />, github: '#', demo: '#', tags: ['React', 'Redux', 'Firebase'] },
    { title: 'Portfolio Website', description: 'A responsive portfolio site using Next.js and Tailwind CSS', icon: <Globe className="h-6 w-6" />, github: '#', demo: '#', tags: ['Next.js', 'Tailwind CSS'] },
]

export function ProjectsSection({ style }: StyleProps) {
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="h-full flex flex-col bg-gray-800 border-gray-700 text-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-purple-400">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                                                <Link href={project.demo}>
                                                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
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
                        className="space-y-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="bg-gray-800 border-gray-700 text-white overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-600 p-6 flex items-center justify-center">
                                            {project.icon}
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <CardHeader>
                                                <CardTitle className="text-purple-400">{project.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-gray-300">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {project.tags.map((tag, i) => (
                                                        <span key={i} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="flex gap-4">
                                                    <Button asChild size="sm" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
                                                        <Link href={project.github}>
                                                            <Github className="mr-2 h-4 w-4" /> GitHub
                                                        </Link>
                                                    </Button>
                                                    <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                                                        <Link href={project.demo}>
                                                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </CardFooter>
                                        </div>
                                    </div>
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white overflow-hidden">
                                    <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-600"></div>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-purple-400">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                                                <Link href={project.demo}>
                                                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="bg-gray-800 border-gray-700 text-white overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-purple-400">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                                                <Link href={project.demo}>
                                                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="bg-gray-800 border-gray-700 text-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-purple-400">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                                                <Link href={project.demo}>
                                                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">My Projects</h2>
            {renderContent()}
        </section>
    )
}
