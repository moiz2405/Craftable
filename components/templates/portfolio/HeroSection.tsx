import { Button } from "@/components/ui/button";

interface HeroSectionProps {
    style: 'style1' | 'style2' | 'style3';
    onStyleChange: (style: 'style1' | 'style2' | 'style3') => void;
}

export default function HeroSection({ style, onStyleChange }: HeroSectionProps) {
    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg">
                        <h2 className="text-5xl font-extrabold text-white mb-4">Welcome to My Portfolio</h2>
                        <p className="text-2xl text-gray-200 mb-6">I'm a passionate developer creating amazing web experiences.</p>
                        <Button className="bg-white text-blue-500 hover:bg-gray-100">Contact Me</Button>
                    </div>
                );
            case 'style2':
                return (
                    <div className="flex items-center justify-between bg-gray-100 p-10 rounded-lg shadow-lg">
                        <div className="w-1/2">
                            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Hi, I'm John Doe</h2>
                            <p className="text-2xl text-gray-600 mb-6">Full-stack developer with a love for clean code and innovative solutions.</p>
                            <Button className="bg-blue-500 text-white hover:bg-blue-600">View My Work</Button>
                        </div>
                        <div className="w-1/2">
                            <img src="/path/to/image.jpg" alt="John Doe" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                );
            case 'style3':
                return (
                    <div className="text-center bg-white p-10 rounded-lg shadow-lg">
                        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Explore My Projects</h2>
                        <p className="text-2xl text-gray-600 mb-6">Discover the innovative solutions and projects I've worked on.</p>
                        <Button className="bg-purple-500 text-white hover:bg-purple-600">See Projects</Button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}