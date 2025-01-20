import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Layers, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

interface ProjectUpdateData {
    title: string
    description: string
    github: string
    demo: string
    tags: string[]
}

interface ProjectsSectionProps {
    style: "style1" | "style2" | "style3" | "style4" | "style5"
    title?: string
    subtitle?: string
    buttonText1?: string
    buttonLink1?: string
    onUpdate: (updatedData: ProjectUpdateData) => void
}

export function ProjectsSection({
    style = "style1",
    title = "Projects",
    subtitle = "Here are some of my projects",
    buttonText1 = "View All",
    buttonLink1 = "#",
}: ProjectsSectionProps) {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-stack online shopping platform with real-time inventory management",
            icon: <Layers className="h-6 w-6" />,
            github: "#",
            demo: "#",
            tags: ["React", "Node.js", "MongoDB"],
        },
        {
            title: "Task Management App",
            description: "A React-based productivity application with drag-and-drop functionality",
            icon: <Smartphone className="h-6 w-6" />,
            github: "#",
            demo: "#",
            tags: ["React", "Redux", "Firebase"],
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio site using Next.js and Tailwind CSS",
            icon: <Globe className="h-6 w-6" />,
            github: "#",
            demo: "#",
            tags: ["Next.js", "Tailwind CSS"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const renderProjectCard = (project: { title: string; description: string; github: string; demo: string; tags: string[]; icon: JSX.Element }) => (
        <motion.div key={project.title} variants={itemVariants}>
            <div className="bg-gray-800 border-gray-700 text-white flex flex-col p-4 rounded-lg">
                <div className="flex items-center gap-2 text-purple-400">
                    {project.icon}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="mt-auto">
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
                </div>
            </div>
        </motion.div>
    );

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${style}`}
        >
            <div className="col-span-full">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-lg text-gray-300">{subtitle}</p>
                <Link href={buttonLink1}>
                    <Button className="mt-4">{buttonText1}</Button>
                </Link>
            </div>
            {projects.map(renderProjectCard)}
        </motion.div>
    );
}
