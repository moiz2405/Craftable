interface ExperienceSectionProps {
    style: 'style1' | 'style2' | 'style3';
}

export default function ExperienceSection({ style }: ExperienceSectionProps) {
    const experiences = [
        { company: 'Tech Innovators', role: 'Senior Developer', period: '2020 - Present' },
        { company: 'Web Solutions Inc.', role: 'Full Stack Developer', period: '2018 - 2020' },
        { company: 'Digital Creations', role: 'Junior Developer', period: '2016 - 2018' },
    ];

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-purple-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                                <p className="text-lg text-gray-200">{exp.role}</p>
                                <p className="text-sm text-gray-400">{exp.period}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style2':
                return (
                    <div className="relative border-l-4 border-purple-500 pl-6 ml-6 space-y-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <h4 className="text-xl font-bold text-purple-800">{exp.company}</h4>
                                <p className="text-lg text-gray-800">{exp.role}</p>
                                <p className="text-sm text-gray-600">{exp.period}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style3':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                                <p className="text-lg text-gray-200">{exp.role}</p>
                                <p className="text-sm text-gray-300">{exp.period}</p>
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