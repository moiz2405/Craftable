import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Project {
  title: string;
  description: string;
  icon: string;
  github: string;
  demo: string;
  tags: string[];
}

interface CustomizeProjectsProps {
  props: {
    title: string;
    subtitle: string;
    buttonText1: string;
    buttonLink1: string;
    projects: Project[];
  };
  onUpdate: (updatedProps: any) => void;
}

export function CustomizeProjects({ props, onUpdate }: CustomizeProjectsProps) {
  const [tagInputs, setTagInputs] = useState<string[]>(props.projects.map(() => ""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...props, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...props.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    onUpdate({ ...props, projects: updatedProjects });
  };

  const handleAddTag = (index: number) => {
    if (tagInputs[index].trim()) {
      const updatedProjects = [...props.projects];
      updatedProjects[index].tags.push(tagInputs[index].trim());
      onUpdate({ ...props, projects: updatedProjects });
      setTagInputs((prev) => prev.map((tag, i) => (i === index ? "" : tag)));
    }
  };

  const handleRemoveTag = (projectIndex: number, tagIndex: number) => {
    const updatedProjects = [...props.projects];
    updatedProjects[projectIndex].tags.splice(tagIndex, 1);
    onUpdate({ ...props, projects: updatedProjects });
  };

  const addProject = useCallback(() => {
    const newProject: Project = {
      title: "New Project",
      description: "Project description",
      icon: "Globe",
      github: "",
      demo: "",
      tags: [],
    };
    onUpdate({ ...props, projects: [...props.projects, newProject] });
    setTagInputs((prev) => [...prev, ""]);
  }, [props, onUpdate]);

  const removeProject = (index: number) => {
    const updatedProjects = props.projects.filter((_, i) => i !== index);
    onUpdate({ ...props, projects: updatedProjects });
    setTagInputs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-white mb-6">Customize Projects Section</h2>

      <div className="space-y-6">
        {props.projects.map((project, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4">
            <Label htmlFor="title" className="text-gray-300 ">
              Project Title
            </Label>
            <Input
              placeholder="Project Title"
              value={project.title}
              onChange={(e) => handleProjectChange(index, "title", e.target.value)}
              className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
            />

            <Label htmlFor="description" className="text-gray-300">
              Project Description
            </Label>
            <Textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, "description", e.target.value)}
              className="bg-gray-800"
            />

            <Label htmlFor="icon" className="text-gray-300">
              Select Project Icon
            </Label>
            <Select
              value={project.icon}
              onValueChange={(value) => handleProjectChange(index, "icon", value)}
            >
              <SelectTrigger className="bg-gray-800">
                <SelectValue placeholder="Select an icon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Layers">Layers</SelectItem>
                <SelectItem value="Smartphone">Smartphone</SelectItem>
                <SelectItem value="Globe">Globe</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="github" className="text-gray-300">
              GitHub Link
            </Label>
            <Input
              placeholder="GitHub Link"
              value={project.github}
              onChange={(e) => handleProjectChange(index, "github", e.target.value)}
              className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
            />

            <Label htmlFor="demo" className="text-gray-300">
              Demo Link
            </Label>
            <Input
              placeholder="Demo Link"
              value={project.demo}
              onChange={(e) => handleProjectChange(index, "demo", e.target.value)}
              className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
            />

            <div>
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      className="ml-2 text-xs"
                      onClick={() => handleRemoveTag(index, tagIndex)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex mt-2 gap-2">
                <Input
                  placeholder="Add a tag"
                  value={tagInputs[index]}
                  onChange={(e) =>
                    setTagInputs((prev) =>
                      prev.map((tag, i) => (i === index ? e.target.value : tag))
                    )
                  }
                  className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
                />
                <Button onClick={() => handleAddTag(index)}>Add</Button>
              </div>
            </div>

            <Button variant="destructive" onClick={() => removeProject(index)}>
              Remove Project
            </Button>
          </div>
        ))}
        <Button className="bg-purple-500" onClick={addProject}>
          Add New Project
        </Button>
      </div>
    </div>
  );
}
