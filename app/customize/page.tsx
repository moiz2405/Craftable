"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/templates/portfolio/HeroSection"
import { ProjectsSection } from "@/components/templates/portfolio/ProjectsSection"
import { SkillsSection } from "@/components/templates/portfolio/SkillsSection"
import { ExperienceSection } from "@/components/templates/portfolio/ExperienceSection"
import { CustomizeHero } from "@/components/customize/CustomizeHero"
import { CustomizeProjects } from "@/components/customize/CustomizeProjects"
import { CustomizeSkills } from "@/components/customize/CustomizeSkills"
import { CustomizeExperience } from "@/components/customize/CustomizeExperience"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { StyleType } from "@/types"

export default function CustomizePage() {
  const searchParams = useSearchParams()
  const [template, setTemplate] = useState(searchParams.get("template") || "")
  const [style, setStyle] = useState<StyleType>((searchParams.get("style") as StyleType) || "style1")
  const [activeSection, setActiveSection] = useState("hero")

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
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-stack online shopping platform with real-time inventory management",
        icon: "Layers",
        github: "#",
        demo: "#",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Task Management App",
        description: "A React-based productivity application with drag-and-drop functionality",
        icon: "Smartphone",
        github: "#",
        demo: "#",
        tags: ["React", "Redux", "Firebase"],
      },
      {
        title: "Portfolio Website",
        description: "A responsive portfolio site using Next.js and Tailwind CSS",
        icon: "Globe",
        github: "#",
        demo: "#",
        tags: ["Next.js", "Tailwind CSS"],
      },
    ],
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
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Customize Your {template} Template</h1>

          <div className="mb-8">
            <Select value={activeSection} onValueChange={setActiveSection}>
              <SelectTrigger className="w-full md:w-[300px] bg-purple-800 text-white border-purple-600">
                <SelectValue placeholder="Select section to edit" />
              </SelectTrigger>
              <SelectContent className="bg-purple-800 text-white border-purple-600">
                <SelectItem value="hero">Hero Section</SelectItem>
                <SelectItem value="projects">Projects Section</SelectItem>
                <SelectItem value="skills">Skills Section</SelectItem>
                <SelectItem value="experience">Experience Section</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <HeroSection {...heroProps} style={style} onUpdate={() => {}} />
              </div>
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <ProjectsSection {...projectsProps} style={style} onUpdate={() => {}} />
              </div>
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <SkillsSection {...skillsProps} style={style} onUpdate={() => {}} />
              </div>
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <ExperienceSection {...experienceProps} style={style} onUpdate={() => {}} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-purple-800 rounded-lg shadow-lg p-6">
                {activeSection === "hero" && <CustomizeHero props={heroProps} onUpdate={setHeroProps} />}
                {activeSection === "projects" && (
                  <CustomizeProjects props={projectsProps} onUpdate={setProjectsProps} />
                )}
                {activeSection === "skills" && <CustomizeSkills props={skillsProps} onUpdate={setSkillsProps} />}
                {activeSection === "experience" && (
                  <CustomizeExperience props={experienceProps} onUpdate={setExperienceProps} />
                )}
              </div>
            </div>
          </div>

          <Button onClick={handleSave} className="mt-8 w-full md:w-auto bg-purple-600 hover:bg-purple-700">
            Save and Continue
          </Button>
        </div>
      </div>
    </Suspense>
  )
}

