'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Laptop, Zap, Github, Linkedin } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
    style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5'
}

export function HeroSection({ style }: HeroSectionProps) {
    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Welcome to My Portfolio</h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">Crafting digital experiences that inspire and engage</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                                <Link href="#contact">
                                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                <Link href="#projects">
                                    View Projects <Code2 className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="mt-8 flex justify-center space-x-4">
                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                            </Link>
                        </div>
                    </motion.div>
                )
            case 'style2':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Hi, I'm John Doe</h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-8">Full-stack developer passionate about creating innovative solutions</p>
                            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                                <Link href="#projects">
                                    View My Work <Laptop className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <motion.div
                                className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full overflow-hidden shadow-2xl"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Image
                                    src="/placeholder.svg"
                                    alt="John Doe"
                                    height={400}
                                    width={400}
                                    className="w-full h-full object-cover mix-blend-overlay"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )
            case 'style3':
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Elevate Your Digital Presence</h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">Let's create something extraordinary together</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                                <Link href="#projects">
                                    View Projects <Code2 className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                <Link href="#contact">
                                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )
            // Cases for `style4` and `style5` follow the same logic.
        }
    }

    return (
        <section className="container mx-auto px-4 py-6">
            {renderContent()}
        </section>
    )
}
