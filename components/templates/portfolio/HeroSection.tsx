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
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
                        <p className="text-xl mb-6">I'm a passionate developer creating amazing web experiences.</p>
                        <Button>Contact Me</Button>
                    </div>
                );
            case 'style2':
                return (
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <h2 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h2>
                            <p className="text-xl mb-6">Full-stack developer with a love for clean code and innovative solutions.</p>
                            <Button>View My Work</Button>
                        </div>
                        <div className="w-1/2">
                            <img src="/placeholder.svg?height=300&width=300" alt="John Doe" className="rounded-full mx-auto" />
                        </div>
                    </div>
                );
            case 'style3':
                return (
                    <div className="relative">
                        <img src="/placeholder.svg?height=400&width=800" alt="Background" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold mb-4">Crafting Digital Experiences</h2>
                                <p className="text-xl mb-6">Web Developer | UI/UX Designer | Tech Enthusiast</p>
                                <Button>Explore My Projects</Button>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <section>
            <h3 className="text-2xl font-bold mb-4">Hero Section</h3>
            {/* Removed Style Buttons */}
            {renderContent()}
        </section>
    );
}
