import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
    style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5';
    onStyleChange: (style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5') => void;
}

export default function HeroSection({ style, onStyleChange }: HeroSectionProps) {
    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 md:p-10 rounded-lg shadow-lg"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Welcome to My Portfolio</h2>
                        <p className="text-xl md:text-2xl text-gray-200 mb-6">I'm a passionate developer creating amazing web experiences.</p>
                        <Button className="bg-white text-blue-500 hover:bg-gray-100 transition-colors duration-300">Contact Me</Button>
                    </motion.div>
                );
            case 'style2':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg"
                    >
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Hi, I'm John Doe</h2>
                            <p className="text-xl md:text-2xl text-gray-600 mb-6">Full-stack developer with a love for clean code and innovative solutions.</p>
                            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">View My Work</Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/placeholder.svg?height=300&width=300" alt="John Doe" className="rounded-lg shadow-lg w-full h-auto" />
                        </div>
                    </motion.div>
                );
            case 'style3':
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-white p-6 md:p-10 rounded-lg shadow-lg"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Explore My Projects</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-6">Discover the innovative solutions and projects I've worked on.</p>
                        <Button className="bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300">See Projects</Button>
                    </motion.div>
                );
            case 'style4':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-lg shadow-lg"
                    >
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1" alt="Background" className="w-full h-auto" style={{ height: '400px', width: '800px' }} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4">Innovative Web Solutions</h2>
                                <p className="text-xl md:text-2xl mb-6">Crafting digital experiences that inspire and engage</p>
                                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300">Discover More</Button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'style5':
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-10 rounded-lg shadow-lg text-white"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Elevate Your Digital Presence</h2>
                                <p className="text-xl md:text-2xl mb-6">Let's create something extraordinary together</p>
                                <Button className="bg-white text-purple-500 hover:bg-gray-100 transition-colors duration-300">Start a Project</Button>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center">
                                <motion.img
                                    src="https://placehold.co/300x300"
                                    alt="Digital Illustration"
                                    className="rounded-full w-64 h-64 object-cover"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4">
            {renderContent()}
        </div>
    );
}