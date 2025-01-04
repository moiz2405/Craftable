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
                            <div key={index} className="bg-purple-800 p-6 rounded-lg">
                                <h4 className="text-xl font-bold">{exp.company}</h4>
                                <p className="text-lg">{exp.role}</p>
                                <p className="text-sm text-gray-300">{exp.period}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style2':
                return (
                    <div className="relative border-l-4 border-purple-500 pl-6 ml-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-8 relative">
                                <div className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full mt-2"></div>
                                <h4 className="text-xl font-bold">{exp.company}</h4>
                                <p className="text-lg">{exp.role}</p>
                                <p className="text-sm text-gray-300">{exp.period}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'style3':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-purple-800 p-6 rounded-lg text-center">
                                <h4 className="text-xl font-bold mb-2">{exp.company}</h4>
                                <p className="text-lg mb-2">{exp.role}</p>
                                <p className="text-sm text-gray-300">{exp.period}</p>
                            </div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <section>
            <h3 className="text-2xl font-bold mb-4">Experience Section</h3>
            {renderContent()}
        </section>
    );
}
