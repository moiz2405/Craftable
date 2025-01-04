import BaseTemplate from "./templates/portfolio/BaseTemplate";

interface Template {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface TemplateRendererProps {
    templates: Template[];
    design: "style1" | "style2" | "style3";
    onSelectTemplate: (templateId: number) => void;
}

export default function TemplateRenderer({
    templates,
    design,
    onSelectTemplate,
}: TemplateRendererProps) {
    const designClassMap = {
        style1: "border-red-500 hover:border-red-400",
        style2: "border-green-500 hover:border-green-400",
        style3: "border-blue-500 hover:border-blue-400",
    };

    const designClass = designClassMap[design] || "";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
                <div key={template.id} className={designClass}>
                    <BaseTemplate
                        template={template}
                        onSelect={onSelectTemplate}
                    />
                </div>
            ))}
        </div>
    );
}
