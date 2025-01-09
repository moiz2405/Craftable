'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Laptop, Zap } from 'lucide-react'
import Link from "next/link"

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
                        className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 p-8 md:p-16 rounded-3xl shadow-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Welcome to My Portfolio</h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8">Crafting digital experiences that inspire and engage</p>
                        <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
                            <Link href="#contact">
                                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                )
            case 'style2':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 md:p-16 rounded-3xl shadow-lg"
                    >
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Hi, I'm John Doe</h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-8">Full-stack developer passionate about creating innovative solutions</p>
                            <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
                                <Link href="#projects">
                                    View My Work <Laptop className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <motion.img
                                src="/placeholder.svg?height=400&width=400"
                                alt="John Doe"
                                className="rounded-full shadow-2xl mx-auto"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                )
            case 'style3':
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Elevate Your Digital Presence</h1>
                        <p className="text-xl md:text-2xl mb-8">Let's create something extraordinary together</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" variant="secondary">
                                <Link href="#projects">
                                    View Projects <Code className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                                <Link href="#contact">
                                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )
            case 'style4':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-3xl shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&h=800&q=80"
                            alt="Hero Background"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <div className="text-center text-white p-8">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovative Web Solutions</h1>
                                <p className="text-xl md:text-2xl mb-8">Crafting digital experiences that inspire and engage</p>
                                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
                                    <Link href="#contact">
                                        Start a Project <Zap className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )
            case 'style5':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Transforming Ideas into Reality</h1>
                                <p className="text-xl md:text-2xl mb-8">Innovative solutions for the digital age</p>
                                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
                                    <Link href="#projects">
                                        Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center">
                                <motion.img
                                    src="/placeholder.svg?height=300&width=300"
                                    alt="Digital Illustration"
                                    className="rounded-full w-64 h-64 object-cover"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )
            default:
                return null
        }
    }

    return (
        <section className="container mx-auto px-4 py-6">
            {renderContent()}
        </section>
    )
}

