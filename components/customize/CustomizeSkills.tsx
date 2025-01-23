import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CustomizeSkillsProps {
    props: any;
    onUpdate: (updatedProps: any) => void;
}

export function CustomizeSkills({ props, onUpdate }: CustomizeSkillsProps) {
    const handleSkillChange = (index: number, field: string, value: string) => {
        const updatedSkills = [...props.skills];
        updatedSkills[index] = { ...updatedSkills[index], [field]: value };
        onUpdate({ ...props, skills: updatedSkills });
    };

    const addSkill = () => {
        onUpdate({ ...props, skills: [...props.skills, { name: "", icon: "" }] });
    };

    const removeSkill = (index: number) => {
        const updatedSkills = props.skills.filter((_: any, i: number) => i !== index);
        onUpdate({ ...props, skills: updatedSkills });
    };

    return (
        <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-white mb-6">Customize Skills Section</h2>
            {props.skills.map((skill: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                    <Input
                        value={skill.name}
                        onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                        placeholder="Skill name"
                        className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
                    />
                    <Input
                        value={skill.icon}
                        onChange={(e) => handleSkillChange(index, "icon", e.target.value)}
                        placeholder="Icon name"
                        className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
                    />
                    <Button onClick={() => removeSkill(index)} variant="destructive">
                        Remove
                    </Button>
                </div>
            ))}
            <Button className="bg-purple-400" onClick={addSkill}>Add Skill</Button>
        </div>
    );
}
