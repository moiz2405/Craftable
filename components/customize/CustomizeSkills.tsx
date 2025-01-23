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
        <div className="space-y-4">
            {props.skills.map((skill: any, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                    <Input
                        value={skill.name}
                        onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                        placeholder="Skill name"
                    />
                    <Input
                        value={skill.icon}
                        onChange={(e) => handleSkillChange(index, "icon", e.target.value)}
                        placeholder="Icon name"
                    />
                    <Button onClick={() => removeSkill(index)} variant="destructive">
                        Remove
                    </Button>
                </div>
            ))}
            <Button onClick={addSkill}>Add Skill</Button>
        </div>
    );
}
