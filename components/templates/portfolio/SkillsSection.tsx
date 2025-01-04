import { Button } from "@/components/ui/button";

interface SkillsSectionProps {
    style: 'style1' | 'style2' | 'style3';
    onStyleChange: (style: 'style1' | 'style2' | 'style3') => void;
}

export default function SkillsSection({ style, onStyleChange }: SkillsSectionProps) {
    const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML'];

    const renderContent = () => {
        switch (style) {
            case 'style1':
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-purple-800 p-4 rounded-lg text-center">
                                {skill}
                            </div>
                        ))}
                    </div>
                );
            case 'style2':
                return (
                    <div className="flex flex-wrap justify-center">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-purple-800 m-2 px-4 py-2 rounded-full">
                                {skill}
                            </div>
                        ))}
                    </div>
                );
            case 'style3':
                return (
                    <div className="space-y-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-1/4 font-bold">{skill}</div>
                                <div className="w-3/4 bg-purple-800 rounded-full h-4">
                                    <div className="bg-pink-500 h-4 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <section>
            <h3 className="text-2xl font-bold mb-4">Skills Section</h3>
            <div className="mb-4">
                <Button onClick={() => onStyleChange('style1')} variant={style === 'style1' ? 'default' : 'outline'} className="mr-2">Style 1</Button>
                <Button onClick={() => onStyleChange('style2')} variant={style === 'style2' ? 'default' : 'outline'} className="mr-2">Style 2</Button>
                <Button onClick={() => onStyleChange('style3')} variant={style === 'style3' ? 'default' : 'outline'}>Style 3</Button>
            </div>
            {renderContent()}
        </section>
    );
}

