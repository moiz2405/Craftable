import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Layers, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

interface Project {
    title: string
    description: string
    icon: string
    github: string
    demo: string
    tags: string[]
}

interface ProjectsSectionProps {
    style?: "style1" | "style2" | "style3" | "style4" | "style5"
    title?: string
    subtitle?: string
    buttonText1?: string
    buttonLink1?: string
    projects?: Project[]
}

const iconMap: { [key: string]: React.ReactNode } = {
    Layers: <Layers className="h-6 w-6" />,
    Smartphone: <Smartphone className="h-6 w-6" />,
    Globe: <Globe className="h-6 w-6" />,
}

const defaultProjects: Project[] = [
    {
        title: "Project 1",
        description: "This is a description of Project 1. It's a web application built with React and Next.js.",
        icon: "Layers",
        github: "https://github.com/username/project1",
        demo: "https://project1-demo.com",
        tags: ["React", "Next.js", "TypeScript"],
    },
    {
        title: "Project 2",
        description: "Project 2 is a mobile app developed using React Native. It features real-time data synchronization.",
        icon: "Smartphone",
        github: "https://github.com/username/project2",
        demo: "https://project2-demo.com",
        tags: ["React Native", "Firebase", "Mobile"],
    },
    {
        title: "Project 3",
        description:
            "A global web platform that connects users from different countries. Built with cutting-edge technologies.",
        icon: "Globe",
        github: "https://github.com/username/project3",
        demo: "https://project3-demo.com",
        tags: ["Vue.js", "Node.js", "MongoDB"],
    },
]

export function ProjectsSection({
    style = "style1",
    title = "My Projects",
    subtitle = "",
    buttonText1 = "",
    buttonLink1 = "",
    projects = defaultProjects,
}: ProjectsSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    const renderProjectCard = (project: Project) => (
        <motion.div key={project.title} variants={itemVariants}>
            <div className="bg-gray-800 border-gray-700 text-white flex flex-col p-4 rounded-lg h-full">
                <div className="flex items-center gap-2 text-purple-400">
                    {iconMap[project.icon] || <Globe className="h-6 w-6" />}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mt-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-600 text-xs rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex gap-4">
                    {project.github && (
                        <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                        >
                            <Link href={project.github}>
                                <Github className="mr-2 h-4 w-4" /> GitHub
                            </Link>
                        </Button>
                    )}
                    {project.demo && (
                        <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Link href={project.demo}>
                                <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    )

    return (
        <section className={`py-16 ${style}`}>
            <div className="container mx-auto px-4">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
                    <div className="">
                        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                        {/* <p className="text-xl text-gray-400 mb-8">{subtitle}</p> */}
                        {/* {buttonText1 && buttonLink1 && (
                            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                                <Link href={buttonLink1}>{buttonText1}</Link>
                            </Button> */}
                        {/* )} */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map(renderProjectCard)}</div>
                </motion.div>
            </div>
        </section>
    )
}

