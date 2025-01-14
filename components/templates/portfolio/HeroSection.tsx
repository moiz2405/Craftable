import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle: string;
    buttonText1: string;
    buttonText2?: string;
    buttonLink1: string;
    buttonLink2?: string;
    socialLinks?: { github?: string; linkedin?: string };
    pfpImage?: string;
    pfpShape?: "circle" | "square";  // Prop to define the shape of the profile picture
    imageUrl?: string;
    style: "style1" | "style2" | "style3" | "style4" | "style5";  // Style selector\
    onUpdate: (updatedData: any) => void;
}

export function HeroSection({
    title = "Welcome to My Portfolio",
    subtitle = "Showcasing My Work and Projects",
    buttonText1 = "Get Started",
    buttonText2 = "Learn More",
    buttonLink1 = "#",
    buttonLink2 = "#",
    socialLinks = { github: "#", linkedin: "#" },
    pfpImage = "https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pfpShape = "circle", // Default shape is circle
    imageUrl = "https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    style = "style1",

}: HeroProps) {

    const renderSocialLinks = () => (
        <div className="flex justify-center space-x-4 mt-6">
            {socialLinks.github && (
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                </Link>
            )}
            {socialLinks.linkedin && (
                <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                </Link>
            )}
        </div>
    );

    const renderProfilePicture = () => {
        const pfpClass = pfpShape === "circle" ? "rounded-full" : "rounded-lg";
        return (
            <div className="mt-6">
                <Image
                    src={pfpImage}
                    alt="Profile Picture"
                    width={120}
                    height={120}
                    className={`${pfpClass} mx-auto`} // Apply rounded shape
                />
            </div>
        );
    };

    const renderContent = () => {
        switch (style) {
            case "style1":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {buttonLink1 && (
                                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                                    <Link href={buttonLink1}>
                                        {buttonText1} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                            {buttonText2 && buttonLink2 && (
                                <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                    <Link href={buttonLink2}>
                                        {buttonText2} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                        {renderSocialLinks()}
                        {renderProfilePicture()}
                    </motion.div>
                );
            case "style2":
                return (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center bg-gradient-to-bl from-blue-900 to-gray-800 p-8 md:p-16 rounded-3xl shadow-2xl text-white"
                    >
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-bold mb-4">{title}</h1>
                            <p className="text-lg text-gray-300 mb-6">{subtitle}</p>
                            <div className="flex gap-4">
                                {buttonLink1 && (
                                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                                        <Link href={buttonLink1}>
                                            {buttonText1} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                )}
                                {buttonText2 && buttonLink2 && (
                                    <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white">
                                        <Link href={buttonLink2}>
                                            {buttonText2} <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                        {imageUrl && (
                            <div className="md:w-1/2 mt-6 md:mt-0">
                                <Image
                                    src={imageUrl}
                                    alt="Hero Image"
                                    width={200}
                                    height={200}
                                    className="object-cover rounded-lg shadow-lg ml-10"
                                />
                            </div>
                        )}
                        {renderSocialLinks()}
                    </motion.div>
                );
            case "style3":
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-gradient-to-br from-green-700 to-teal-600 p-10 rounded-3xl shadow-2xl text-white text-center"
                    >
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-100">
                            {title}
                        </h1>
                        <p className="text-lg mt-4 text-green-200">{subtitle}</p>
                        <div className="mt-6">
                            {buttonLink1 && (
                                <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
                                    <Link href={buttonLink1}>
                                        {buttonText1} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                        {renderSocialLinks()}
                        {renderProfilePicture()}
                    </motion.div>
                );
            case "style4":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-black text-white p-8 rounded-lg shadow-md"
                    >
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2">
                                <h1 className="text-4xl font-bold">{title}</h1>
                                <p className="mt-4">{subtitle}</p>
                                <div className="mt-6 flex gap-4">
                                    {buttonLink1 && (
                                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                                            <Link href={buttonLink1}>
                                                {buttonText1} <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0 md:w-1/2">
                                <Image
                                    src={pfpImage}
                                    alt="Profile Picture"
                                    width={150}
                                    height={150}
                                    className="rounded-full mx-auto"
                                />
                            </div>
                        </div>
                        {renderSocialLinks()}
                    </motion.div>
                );
            case "style5":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-white bg-gradient-to-r from-pink-500 to-yellow-500 p-12 rounded-xl shadow-lg"
                    >
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-lg text-gray-200 mb-6">{subtitle}</p>
                        <div className="flex justify-center gap-4">
                            {buttonLink1 && (
                                <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
                                    <Link href={buttonLink1}>
                                        {buttonText1} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                            {buttonText2 && buttonLink2 && (
                                <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white">
                                    <Link href={buttonLink2}>
                                        {buttonText2} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                        {renderProfilePicture()}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return <>{renderContent()}</>;
}
