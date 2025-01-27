import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CustomizeExperienceProps {
    props: any;
    onUpdate: (updatedProps: any) => void;
}

export function CustomizeExperience({ props, onUpdate }: CustomizeExperienceProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate({ ...props, [e.target.name]: e.target.value });
    };

    const handleExperienceChange = (index: number, field: string, value: string) => {
        const updatedExperiences = [...props.experiences];
        updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
        onUpdate({ ...props, experiences: updatedExperiences });
    };

    const addExperience = () => {
        onUpdate({ ...props, experiences: [...props.experiences, { company: "", role: "", period: "" }] });
    };

    const removeExperience = (index: number) => {
        const updatedExperiences = props.experiences.filter((_: any, i: number) => i !== index);
        onUpdate({ ...props, experiences: updatedExperiences });
    };

    return (
        <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md" id="title" name="title" value={props.title} onChange={handleChange} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input id="subtitle" name="subtitle" value={props.subtitle} onChange={handleChange} />
                </div>
            </div>
            <div className="space-y-6">
                {props.experiences.map((experience: any, index: number) => (
                    <div key={index} className="border rounded-md p-4 space-y-4">
                        <Input
                            placeholder="Company"
                            value={experience.company}
                            onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                        />
                        <Input
                            placeholder="Role"
                            value={experience.role}
                            onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
                        />
                        <Input
                            placeholder="Period"
                            value={experience.period}
                            onChange={(e) => handleExperienceChange(index, "period", e.target.value)}
                        />
                        <Button onClick={() => removeExperience(index)} variant="destructive">
                            Remove Experience
                        </Button>
                    </div>
                ))}
            </div>
            <Button onClick={addExperience}>Add Experience</Button>
        </div>
    );
}
