import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CustomizeProjectsProps {
  props: any
  onUpdate: (updatedProps: any) => void
}

export function CustomizeProjects({ props, onUpdate }: CustomizeProjectsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...props, [e.target.name]: e.target.value })
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
      <div>
        <Label htmlFor="buttonText1">Button Text</Label>
        <Input id="buttonText1" name="buttonText1" value={props.buttonText1} onChange={handleChange} />
      </div>
      {/* Add more fields for other project properties */}
    </div>
  )
}

