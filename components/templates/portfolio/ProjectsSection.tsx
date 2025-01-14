'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Layers, Smartphone, Globe } from 'lucide-react';
import Link from "next/link";
import { StyleType } from '../../../types';

// Define interfaces for project and style properties
interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  github: string;
  demo: string;
  tags: string[];
}

interface StyleProps {
  style: StyleType;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack online shopping platform with real-time inventory management',
    icon: <Layers className="h-6 w-6" />,
    github: '#',
    demo: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'A React-based productivity application with drag-and-drop functionality',
    icon: <Smartphone className="h-6 w-6" />,
    github: '#',
    demo: '#',
    tags: ['React', 'Redux', 'Firebase'],
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio site using Next.js and Tailwind CSS',
    icon: <Globe className="h-6 w-6" />,
    github: '#',
    demo: '#',
    tags: ['Next.js', 'Tailwind CSS'],
  },
];

// Define style configurations
const styleConfigurations: Record<StyleType, string> = {
  style1: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  style2: "space-y-8",
  style3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  style4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  style5: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
};

export function ProjectsSection({ style }: StyleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const renderProjectCard = (project: Project) => (
    <motion.div key={project.title} variants={itemVariants}>
      <Card className="bg-gray-800 border-gray-700 text-white flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-400">
            {project.icon}
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-purple-600 text-xs rounded-full">{tag}</span>
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
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styleConfigurations[style]}
    >
      {projects.map(renderProjectCard)}
    </motion.div>
  );
}
