interface SkillsSectionProps {
    style: 'style1' | 'style2' | 'style3';
}

export default function SkillsSection({ style }: SkillsSectionProps) {
    const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML'];

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-purple-800 p-4 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105">
                                <span className="text-white font-semibold">{skill}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'style2':
                return (
                    <div className="flex flex-wrap justify-center">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-purple-800 m-2 px-4 py-2 rounded-full shadow-md transform transition-transform hover:scale-105">
                                <span className="text-white font-semibold">{skill}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'style3':
                return (
                    <div className="flex flex-col items-center space-y-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-purple-800 px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <span className="text-white font-semibold">{skill}</span>
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