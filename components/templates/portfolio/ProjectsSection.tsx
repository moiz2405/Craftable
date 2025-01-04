interface ProjectsSectionProps {
    style: 'style1' | 'style2' | 'style3';
}

export default function ProjectsSection({ style }: ProjectsSectionProps) {
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
                            <div key={index} className="bg-purple-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                                <p className="text-gray-200">{project.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style2':
                return (
                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <h4 className="text-xl font-bold mb-2 text-purple-800">{project.title}</h4>
                                <p className="text-gray-800">{project.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style3':
                return (
                    <div className="flex flex-col items-center space-y-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                                <p className="text-gray-200">{project.description}</p>
                            </div>
                        ))}
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