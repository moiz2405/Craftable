import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Project {
  title: string
  description: string
  icon: string
  github: string
  demo: string
  tags: string[]
}

interface CustomizeProjectsProps {
  props: {
    title: string
    subtitle: string
    buttonText1: string
    buttonLink1: string
    projects: Project[]
  }
  onUpdate: (updatedProps: any) => void
}

export function CustomizeProjects({ props, onUpdate }: CustomizeProjectsProps) {
  const [newTag, setNewTag] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...props, [e.target.name]: e.target.value })
  }

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...props.projects]
    updatedProjects[index] = { ...updatedProjects[index], [field]: value }
    onUpdate({ ...props, projects: updatedProjects })
  }

  const handleAddTag = (index: number) => {
    if (newTag.trim()) {
      const updatedProjects = [...props.projects]
      updatedProjects[index].tags.push(newTag.trim())
      onUpdate({ ...props, projects: updatedProjects })
      setNewTag("")
    }
  }

  const handleRemoveTag = (projectIndex: number, tagIndex: number) => {
    const updatedProjects = [...props.projects]
    updatedProjects[projectIndex].tags.splice(tagIndex, 1)
    onUpdate({ ...props, projects: updatedProjects })
  }

  const addProject = () => {
    const newProject: Project = {
      title: "New Project",
      description: "Project description",
      icon: "Globe",
      github: "#",
      demo: "#",
      tags: [],
    }
    onUpdate({ ...props, projects: [...props.projects, newProject] })
  }

  const removeProject = (index: number) => {
    const updatedProjects = props.projects.filter((_, i) => i !== index)
    onUpdate({ ...props, projects: updatedProjects })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Section Title</Label>
          <Input id="title" name="title" value={props.title} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="subtitle">Section Subtitle</Label>
          <Input id="subtitle" name="subtitle" value={props.subtitle} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="buttonText1">Button Text</Label>
          <Input id="buttonText1" name="buttonText1" value={props.buttonText1} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="buttonLink1">Button Link</Label>
          <Input id="buttonLink1" name="buttonLink1" value={props.buttonLink1} onChange={handleChange} />
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-lg font-semibold">Projects</h3>
        {props.projects.map((project, index) => (
          <div key={index} className="space-y-4 p-4 border border-gray-300 rounded-md">
            <Input
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => handleProjectChange(index, "title", e.target.value)}
            />
            <Textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, "description", e.target.value)}
            />
            <Select value={project.icon} onValueChange={(value) => handleProjectChange(index, "icon", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select an icon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Layers">Layers</SelectItem>
                <SelectItem value="Smartphone">Smartphone</SelectItem>
                <SelectItem value="Globe">Globe</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="GitHub Link"
              value={project.github}
              onChange={(e) => handleProjectChange(index, "github", e.target.value)}
            />
            <Input
              placeholder="Demo Link"
              value={project.demo}
              onChange={(e) => handleProjectChange(index, "demo", e.target.value)}
            />
            <div>
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                    {tag}
                    <button className="ml-2 text-xs" onClick={() => handleRemoveTag(index, tagIndex)}>
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex mt-2">
                <Input placeholder="Add a tag" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
                <Button onClick={() => handleAddTag(index)}>Add</Button>
              </div>
            </div>
            <Button variant="destructive" onClick={() => removeProject(index)}>
              Remove Project
            </Button>
          </div>
        ))}
        <Button onClick={addProject}>Add New Project</Button>
      </div>
    </div>
  )
}

