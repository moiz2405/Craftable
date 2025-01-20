import { motion } from "framer-motion"
import { Code, Globe, Server, Laptop } from "lucide-react"
import { ErrorBoundary } from "react-error-boundary"

interface Skill {
    name: string
    icon: string
}

interface SkillsSectionProps {
    style: "style1" | "style2" | "style3" | "style4" | "style5"
    skills?: Skill[]
    onUpdate: (updatedData: unknown) => void
    isLoading?: boolean
}

const iconMap: { [key: string]: JSX.Element } = {
    Code: <Code />,
    Globe: <Globe />,
    Server: <Server />,
    Laptop: <Laptop />,
}

export function SkillsSection({ style, skills = defaultSkills, onUpdate, isLoading = false }: SkillsSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    const renderContent = () => {
        if (isLoading) {
            return <div className="text-white text-center">Loading skills...</div>
        }

        if (!Array.isArray(skills)) {
            console.error("Invalid 'skills' prop: Expected an array.")
            return <div className="text-white text-center">Error loading skills. Please try again.</div>
        }

        switch (style) {
            case "style1":
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
                                    {iconMap[skill.icon] || <Globe />}
                                    <span className="sr-only">Skill:</span>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case "style2":
                return (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg mb-4 shadow-lg"
                            >
                                <span className="text-purple-400 text-xl" aria-hidden="true">
                                    {iconMap[skill.icon] || <Globe />}
                                </span>
                                <span className="text-white text-lg">
                                    <span className="sr-only">Skill:</span>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case "style3":
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative bg-gray-700 p-8 rounded-lg text-white shadow-lg"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-20"
                                    style={{ backgroundImage: `url('/placeholder.svg?height=200&width=200')` }}
                                    aria-hidden="true"
                                ></div>
                                <span className="relative z-10 flex items-center justify-center gap-2 text-2xl">
                                    <span aria-hidden="true">{iconMap[skill.icon] || <Globe />}</span>
                                    <span className="sr-only">Skill:</span>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case "style4":
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-full shadow-lg"
                            >
                                <span className="text-purple-400 text-3xl" aria-hidden="true">
                                    {iconMap[skill.icon] || <Globe />}
                                </span>
                                <span className="text-white text-sm mt-2">
                                    <span className="sr-only">Skill:</span>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case "style5":
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
                            >
                                <span className="text-purple-400 text-4xl" aria-hidden="true">
                                    {iconMap[skill.icon] || <Globe />}
                                </span>
                                <span className="text-white text-xl mt-4 block">
                                    <span className="sr-only">Skill:</span>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            default:
                return null
        }
    }

    return (
        <ErrorBoundary fallback={<div className="text-white text-center">Something went wrong. Please try again.</div>}>
            <section className="container mx-auto px-4 py-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>
                {renderContent()}
            </section>
        </ErrorBoundary>
    )
}

const defaultSkills: Skill[] = [
    { name: "JavaScript", icon: "Code" },
    { name: "React", icon: "Globe" },
    { name: "Node.js", icon: "Server" },
    { name: "Python", icon: "Code" },
    { name: "CSS", icon: "Laptop" },
    { name: "HTML", icon: "Globe" },
]

