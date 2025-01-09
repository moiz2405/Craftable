'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, Code, Layers, Database } from 'lucide-react'
import Link from "next/link"

interface ProjectsSectionProps {
    style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5'
}

const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack online shopping platform', icon: <Layers className="h-6 w-6" />, github: '#', demo: '#' },
    { title: 'Task Management App', description: 'A React-based productivity application', icon: <Code className="h-6 w-6" />, github: '#', demo: '#' },
    { title: 'Portfolio Website', description: 'A responsive portfolio site using Next.js', icon: <Database className="h-6 w-6" />, github: '#', demo: '#' },
]

export function ProjectsSection({ style }: ProjectsSectionProps) {
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
                                <Card className="h-full flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm">
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
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm">
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
                                <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="secondary">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm" variant="secondary">
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
                                <Card className="overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm">
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
                                <Card className="bg-gray-100 dark:bg-gray-800">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {project.icon}
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex gap-4">
                                            <Button asChild size="sm" variant="outline">
                                                <Link href={project.github}>
                                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                            <Button asChild size="sm">
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
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            {renderContent()}
        </section>
    )
}

