import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface CustomizeExperienceProps {
    props: any
    onUpdate: (updatedProps: any) => void
}

export function CustomizeExperience({ props, onUpdate }: CustomizeExperienceProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate({ ...props, [e.target.name]: e.target.value })
    }

    const handleExperienceChange = (index: number, field: string, value: string) => {
        const updatedExperiences = [...props.experiences]
        updatedExperiences[index] = { ...updatedExperiences[index], [field]: value }
        onUpdate({ ...props, experiences: updatedExperiences })
    }

    const addExperience = () => {
        onUpdate({ ...props, experiences: [...props.experiences, { company: "", role: "", period: "" }] })
    }

    const removeExperience = (index: number) => {
        const updatedExperiences = props.experiences.filter((_: any, i: number) => i !== index)
        onUpdate({ ...props, experiences: updatedExperiences })
    }

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" value={props.title} onChange={handleChange} />
            </div>
            <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input id="subtitle" name="subtitle" value={props.subtitle} onChange={handleChange} />
            </div>
            {props.experiences.map((experience: any, index: number) => (
                <div key={index} className="space-y-2">
                    <Input
                        value={experience.company}
                        onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                        placeholder="Company"
                    />
                    <Input
                        value={experience.role}
                        onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
                        placeholder="Role"
                    />
                    <Input
                        value={experience.period}
                        onChange={(e) => handleExperienceChange(index, "period", e.target.value)}
                        placeholder="Period"
                    />
                    <Button onClick={() => removeExperience(index)} variant="destructive">
                        Remove Experience
                    </Button>
                </div>
            ))}
            <Button onClick={addExperience}>Add Experience</Button>
        </div>
    )
}

