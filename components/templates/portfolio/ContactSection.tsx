'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { StyleType } from '../../../types';
interface StyleProps {
    style: StyleType
}

export function ContactSection({ style }: StyleProps) {
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
                        className="bg-gray-800 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-400">Get in Touch</motion.h2>
                        <motion.form variants={itemVariants} className="space-y-4">
                            <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Textarea placeholder="Your Message" rows={4} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.form>
                    </motion.div>
                )
            case 'style2':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-400">Let's Connect</motion.h2>
                        <motion.form variants={itemVariants} className="space-y-4">
                            <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Textarea placeholder="Your Message" rows={4} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                Reach Out <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.form>
                    </motion.div>
                )
            case 'style3':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-400">Say Hello</motion.h2>
                        <motion.form variants={itemVariants} className="space-y-4">
                            <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Textarea placeholder="Your Message" rows={4} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                Send <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.form>
                    </motion.div>
                )
            case 'style4':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gray-800 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-400">Contact Us</motion.h2>
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                                <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                                <Input type="tel" placeholder="Your Phone" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                            </div>
                            <div className="space-y-4">
                                <Textarea placeholder="Your Message" rows={6} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            case 'style5':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gray-800 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-400">Get in Touch</motion.h2>
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2 space-y-4">
                                <Card className="bg-gray-700 border-gray-600">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-purple-400">
                                            <Mail className="h-5 w-5" /> Email
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>contact@example.com</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gray-700 border-gray-600">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-purple-400">
                                            <Phone className="h-5 w-5" /> Phone
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>+1 (123) 456-7890</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gray-700 border-gray-600">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-purple-400">
                                            <MapPin className="h-5 w-5" /> Address
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>123 Main St, City, Country</p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="md:w-1/2 space-y-4">
                                <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                                <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                                <Textarea placeholder="Your Message" rows={4} className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            default:
                return null
        }
    }

    return (
        <section className="container mx-auto px-4 py-6 max-w-4xl">
            {renderContent()}
        </section>
    )
}
