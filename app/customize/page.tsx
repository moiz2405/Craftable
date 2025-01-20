"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/templates/portfolio/HeroSection"
import { ProjectsSection } from "@/components/templates/portfolio/ProjectsSection"
import { SkillsSection } from "@/components/templates/portfolio/SkillsSection"
import { ExperienceSection } from "@/components/templates/portfolio/ExperienceSection"
import { CustomizeHero } from "@/components/customize/CustomizeHero"
import { CustomizeProjects } from "@/components/customize/CustomizeProjects"
import { CustomizeSkills } from "@/components/customize/CustomizeSkills"
import { CustomizeExperience } from "@/components/customize/CustomizeExperience"
import type { StyleType } from "@/types"

export default function CustomizePage() {
    const searchParams = useSearchParams()
    const [template, setTemplate] = useState(searchParams.get("template") || "")
    const [style, setStyle] = useState<StyleType>((searchParams.get("style") as StyleType) || "style1")

    const [heroProps, setHeroProps] = useState({
        title: "Welcome to My Portfolio",
        subtitle: "Showcasing My Work and Projects",
        buttonText1: "Get Started",
        buttonText2: "Learn More",
        buttonLink1: "#",
        buttonLink2: "#",
        socialLinks: { github: "#", linkedin: "#" },
        pfpImage:
            "https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        pfpShape: "circle" as "circle" | "square",
        imageUrl:
            "https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    })

    const [projectsProps, setProjectsProps] = useState({
        title: "Projects",
        subtitle: "Here are some of my projects",
        buttonText1: "View All",
        buttonLink1: "#",
    })

    const [skillsProps, setSkillsProps] = useState({
        skills: [
            { name: "JavaScript", icon: "Code" },
            { name: "React", icon: "Globe" },
            { name: "Node.js", icon: "Server" },
            { name: "Python", icon: "Code" },
            { name: "CSS", icon: "Laptop" },
            { name: "HTML", icon: "Globe" },
        ],
    })

    const [experienceProps, setExperienceProps] = useState({
        title: "My Experience",
        subtitle: "My professional journey",
        experiences: [
            { company: "Tech Innovators", role: "Senior Developer", period: "2020 - Present" },
            { company: "Web Solutions Inc.", role: "Full Stack Developer", period: "2018 - 2020" },
            { company: "Digital Creations", role: "Junior Developer", period: "2016 - 2018" },
        ],
    })

    const handleSave = () => {
        // Implement save logic here
        console.log("Saving customized template...")
    }

    return (
        <Suspense fallback={<div>Loading customization options...</div>}>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Customize Your {template} Template</h1>
                <Tabs defaultValue="hero" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="hero">Hero</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                    </TabsList>
                    <TabsContent value="hero">
                        <CustomizeHero props={heroProps} onUpdate={setHeroProps} />
                    </TabsContent>
                    <TabsContent value="projects">
                        <CustomizeProjects props={projectsProps} onUpdate={setProjectsProps} />
                    </TabsContent>
                    <TabsContent value="skills">
                        <CustomizeSkills props={skillsProps} onUpdate={setSkillsProps} />
                    </TabsContent>
                    <TabsContent value="experience">
                        <CustomizeExperience props={experienceProps} onUpdate={setExperienceProps} />
                    </TabsContent>
                </Tabs>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Preview</h2>
                    <div className="border border-gray-300 rounded-lg p-4">
                        <HeroSection {...heroProps} style={style} onUpdate={() => { }} />
                        <ProjectsSection {...projectsProps} style={style} onUpdate={() => { }} />
                        <SkillsSection {...skillsProps} style={style} onUpdate={() => { }} />
                        <ExperienceSection {...experienceProps} style={style} onUpdate={() => { }} />
                    </div>
                </div>

                <Button onClick={handleSave} className="mt-8">
                    Save and Continue
                </Button>
            </div>
        </Suspense>
    )
}

