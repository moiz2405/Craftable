import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
    style: 'style1' | 'style2' | 'style3';
    onStyleChange: (style: 'style1' | 'style2' | 'style3') => void;
}

export default function ProjectsSection({ style, onStyleChange }: ProjectsSectionProps) {
    const projects = [
        { title: 'E-commerce Platform', description: 'A full-stack online shopping platform' },
        { title: 'Task Management App', description: 'A React-based productivity application' },
        { title: 'Portfolio Website', description: 'A responsive portfolio site using Next.js' },
    ];

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-purple-800 p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style2':
                return (
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <div key={index} className="flex items-center bg-purple-800 p-6 rounded-lg">
                                <div className="w-1/4">
                                    <img src="/placeholder.svg?height=100&width=100" alt={project.title} className="rounded-full" />
                                </div>
                                <div className="w-3/4">
                                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'style3':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg">
                                <img src="/placeholder.svg?height=200&width=300" alt={project.title} className="w-full" />
                                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <section>
            <h3 className="text-2xl font-bold mb-4">Projects Section</h3>
            <div className="mb-4">
                <Button onClick={() => onStyleChange('style1')} variant={style === 'style1' ? 'default' : 'outline'} className="mr-2">Style 1</Button>
                <Button onClick={() => onStyleChange('style2')} variant={style === 'style2' ? 'default' : 'outline'} className="mr-2">Style 2</Button>
                <Button onClick={() => onStyleChange('style3')} variant={style === 'style3' ? 'default' : 'outline'}>Style 3</Button>
            </div>
            {renderContent()}
        </section>
    );
}

