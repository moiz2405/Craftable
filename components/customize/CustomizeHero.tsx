import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Assuming you're using react-icons for the icons

interface CustomizeHeroProps {
  props: any;
  onUpdate: (updatedProps: any) => void;
}

export function CustomizeHero({ props, onUpdate }: CustomizeHeroProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      onUpdate({
        ...props,
        [parent]: {
          ...props[parent],
          [child]: value,
        },
      });
    } else {
      onUpdate({ ...props, [name]: value });
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    onUpdate({ ...props, [field]: value });
  };

  return (
    <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Customize Hero Section
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="title" className="text-gray-300">
            Heading
          </Label>
          <Input
            id="title"
            name="title"
            value={props.title}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
        <div>
          <Label htmlFor="subtitle" className="text-gray-300">
            Subheading
          </Label>
          <Input
            id="subtitle"
            name="subtitle"
            value={props.subtitle}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
        <div>
          <Label htmlFor="buttonText1" className="text-gray-300">
            Button 1 Text
          </Label>
          <Input
            id="buttonText1"
            name="buttonText1"
            value={props.buttonText1}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
        <div>
          <Label htmlFor="buttonLink1" className="text-gray-300">
            Button 1 Link
          </Label>
          <Input
            id="buttonLink1"
            name="buttonLink1"
            value={props.buttonLink1}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
        <div>
          <Label htmlFor="buttonText2" className="text-gray-300">
            Button 2 Text
          </Label>
          <Input
            id="buttonText2"
            name="buttonText2"
            value={props.buttonText2}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
        <div>
          <Label htmlFor="buttonLink2" className="text-gray-300">
            Button 2 Link
          </Label>
          <Input
            id="buttonLink2"
            name="buttonLink2"
            value={props.buttonLink2}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
        
        {/* Social Links Section */}
        <div className="space-y-2">
          <div>
            <Label htmlFor="socialLinks.github" className="text-gray-300">
              GitHub Link
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="socialLinks.github"
                name="socialLinks.github"
                value={props.socialLinks.github}
                onChange={handleChange}
                className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
              />
              {props.socialLinks.github && (
                <FaGithub className="text-white text-xl" />
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="socialLinks.linkedin" className="text-gray-300">
              LinkedIn Link
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="socialLinks.linkedin"
                name="socialLinks.linkedin"
                value={props.socialLinks.linkedin}
                onChange={handleChange}
                className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
              />
              {props.socialLinks.linkedin && (
                <FaLinkedin className="text-white text-xl" />
              )}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="pfpShape" className="text-gray-300">
            Profile Picture Shape
          </Label>
          <Select
            value={props.pfpShape}
            onValueChange={(value) => handleSelectChange("pfpShape", value)}
          >
            <SelectTrigger className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md">
              <SelectValue placeholder="Select shape" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white">
              <SelectItem value="circle">Circle</SelectItem>
              <SelectItem value="square">Square</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="imageUrl" className="text-gray-300">
            Background Image URL
          </Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={props.imageUrl}
            onChange={handleChange}
            className="bg-gray-800 text-white border-gray-600 focus:border-purple-500 focus:ring-purple-500 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
