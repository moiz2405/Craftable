import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CustomizeHeroProps {
  props: any
  onUpdate: (updatedProps: any) => void
}

export function CustomizeHero({ props, onUpdate }: CustomizeHeroProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...props, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (field: string, value: string) => {
    onUpdate({ ...props, [field]: value })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Customize Hero Section</h2>
      <div>
        <Label htmlFor="title" className="text-white">
          Title
        </Label>
        <Input
          id="title"
          name="title"
          value={props.title}
          onChange={handleChange}
          className="bg-purple-700 text-white border-purple-500"
        />
      </div>
      <div>
        <Label htmlFor="subtitle" className="text-white">
          Subtitle
        </Label>
        <Input
          id="subtitle"
          name="subtitle"
          value={props.subtitle}
          onChange={handleChange}
          className="bg-purple-700 text-white border-purple-500"
        />
      </div>
      <div>
        <Label htmlFor="buttonText1" className="text-white">
          Button 1 Text
        </Label>
        <Input
          id="buttonText1"
          name="buttonText1"
          value={props.buttonText1}
          onChange={handleChange}
          className="bg-purple-700 text-white border-purple-500"
        />
      </div>
      <div>
        <Label htmlFor="buttonText2" className="text-white">
          Button 2 Text
        </Label>
        <Input
          id="buttonText2"
          name="buttonText2"
          value={props.buttonText2}
          onChange={handleChange}
          className="bg-purple-700 text-white border-purple-500"
        />
      </div>
      <div>
        <Label htmlFor="pfpShape" className="text-white">
          Profile Picture Shape
        </Label>
        <Select value={props.pfpShape} onValueChange={(value) => handleSelectChange("pfpShape", value)}>
          <SelectTrigger className="bg-purple-700 text-white border-purple-500">
            <SelectValue placeholder="Select shape" />
          </SelectTrigger>
          <SelectContent className="bg-purple-700 text-white">
            <SelectItem value="circle">Circle</SelectItem>
            <SelectItem value="square">Square</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="imageUrl" className="text-white">
          Background Image URL
        </Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={props.imageUrl}
          onChange={handleChange}
          className="bg-purple-700 text-white border-purple-500"
        />
      </div>
    </div>
  )
}

