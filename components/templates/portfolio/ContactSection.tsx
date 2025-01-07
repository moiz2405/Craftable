import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
    style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5';
}

export default function ContactSection({ style }: ContactSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center">Get in Touch</motion.h2>
                        <motion.form variants={itemVariants} className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded"></textarea>
                            <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">Send Message</Button>
                        </motion.form>
                    </motion.div>
                );
            case 'style2':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-purple-800 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center">Let's Connect</motion.h2>
                        <motion.form variants={itemVariants} className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded bg-purple-700 text-white placeholder-purple-300" />
                            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded bg-purple-700 text-white placeholder-purple-300" />
                            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded bg-purple-700 text-white placeholder-purple-300"></textarea>
                            <Button className="w-full bg-white text-purple-800 hover:bg-gray-100 transition-colors duration-300">Reach Out</Button>
                        </motion.form>
                    </motion.div>
                );
            case 'style3':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-lg shadow-lg text-white"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center">Say Hello</motion.h2>
                        <motion.form variants={itemVariants} className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded bg-white/20 text-white placeholder-white/70" />
                            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded bg-white/20 text-white placeholder-white/70" />
                            <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded bg-white/20 text-white placeholder-white/70"></textarea>
                            <Button className="w-full bg-white text-purple-800 hover:bg-gray-100 transition-colors duration-300">Send</Button>
                        </motion.form>
                    </motion.div>
                );
            case 'style4':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-gray-100 p-8 rounded-lg shadow-lg"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-800">Contact Us</motion.h2>
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                                <input type="tel" placeholder="Your Phone" className="w-full p-2 border rounded" />
                            </div>
                            <div className="space-y-4">
                                <textarea placeholder="Your Message" rows={6} className="w-full p-2 border rounded"></textarea>
                                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">Send Message</Button>
                            </div>
                        </motion.div>
                    </motion.div>
                );
            case 'style5':
                return (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-purple-800">Get in Touch</motion.h2>
                        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                                <p className="text-gray-600">
                                    <strong>Email:</strong> contact@example.com
                                </p>
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> +1 (123) 456-7890
                                </p>
                                <p className="text-gray-600">
                                    <strong>Address:</strong> 123 Main St, City, Country
                                </p>
                            </div>
                            <div className="md:w-1/2 space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                                <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded"></textarea>
                                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">Send Message</Button>
                            </div>
                        </motion.div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 max-w-4xl">
            {renderContent()}
        </div>
    );
}

