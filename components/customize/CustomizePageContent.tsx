// "use client";

// import { useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { TEMPLATES } from '../../constants/Templates';
// import { HeroSection } from "../templates/portfolio/HeroSection";
// import { SkillsSection } from "../templates/portfolio/SkillsSection";
// import { ProjectsSection } from "../templates/portfolio/ProjectsSection";
// import { ExperienceSection } from "../templates/portfolio/ExperienceSection";

// const CustomizePageContent = () => {
//     const searchParams = useSearchParams();
//     const selectedTemplateLabel = searchParams.get('template');
//     const selectedStyle = (searchParams.get('style') as "style1" | "style2" | "style3" | "style4" | "style5") || 'style1';

//     const selectedTemplate = TEMPLATES.find(
//         (template) => template.label === selectedTemplateLabel
//     );

//     interface ComponentData {
//         [key: string]: unknown;
//     }

//     interface Template {
//         label: string;
//         components: { component: React.ComponentType<any>; name: string }[];
//     }

//     const initialCustomizedData = selectedTemplate?.components.reduce((acc, { component: Component }) => {
//         acc[Component.name] = {}; // Initialize each component with an empty object
//         return acc;
//     }, {} as Record<string, ComponentData>) || {};

//     const [customizedData, setCustomizedData] = useState(initialCustomizedData);

//     if (!selectedTemplate) {
//         return <p className="text-red-500">Invalid template selected.</p>;
//     }

//     const handleComponentUpdate = (componentName: string, updatedData: object) => {
//         setCustomizedData((prevData) => ({
//             ...prevData,
//             [componentName]: updatedData,
//         }));
//     };

//     const handleHeroSectionInputChange = (field: string, value: string) => {
//         setCustomizedData((prevData) => ({
//             ...prevData,
//             HeroSection: {
//                 ...prevData.HeroSection,
//                 [field]: value,
//             },
//         }));
//     };

//     return (
//         <div className="p-6 space-y-8 bg-gradient-to-b from-purple-900 to-black text-white">
//             <span className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//                 Customize Your Template
//             </span>

//             <div className="grid grid-cols-12 gap-8">
//                 {/* Template Preview */}
//                 <div className="col-span-12 lg:col-span-8">
//                     <div className="space-y-6">
//                         {selectedTemplate.components.length > 0 ? (
//                             selectedTemplate.components.map(({ component: Component }, index) => (
//                                 <div key={index} className="p-6 border rounded-xl shadow-lg bg-white text-black">
//                                     {Component === HeroSection ? (
//                                         <HeroSection
//                                             style={selectedStyle}
//                                             title={customizedData.HeroSection.title || "Welcome to My Portfolio"}
//                                             subtitle={customizedData.HeroSection.subtitle || "Showcasing My Work and Projects"}
//                                             buttonText1={customizedData.HeroSection.buttonText1 || "Get Started"}
//                                             buttonText2={customizedData.HeroSection.buttonText2 || "Learn More"}
//                                             buttonLink1={customizedData.HeroSection.buttonLink1 || "#"}
//                                             buttonLink2={customizedData.HeroSection.buttonLink2 || "#"}
//                                             socialLinks={customizedData.HeroSection.socialLinks || {}}
//                                             imageUrl={customizedData.HeroSection.imageUrl}
//                                             pfpShape={customizedData.HeroSection.pfpShape || "circle"}
//                                             onUpdate={(updatedData) => handleComponentUpdate('HeroSection', updatedData)}
//                                         />
//                                     ) : Component === SkillsSection ? (
//                                         <SkillsSection
//                                             style={selectedStyle}
//                                             skills={customizedData.SkillsSection.skills || []}
//                                             onUpdate={(updatedData) => handleComponentUpdate('SkillsSection', updatedData)}
//                                         />
//                                     ) : Component === ProjectsSection ? (
//                                         <ProjectsSection
//                                             style={selectedStyle}
//                                             projects={customizedData.ProjectsSection.projects || []}
//                                             onUpdate={(updatedData) => handleComponentUpdate('ProjectsSection', updatedData)}
//                                         />
//                                     ) : Component === ExperienceSection ? (
//                                         <ExperienceSection
//                                             style={selectedStyle}
//                                             experience={customizedData.ExperienceSection.experience || []}
//                                             onUpdate={(updatedData) => handleComponentUpdate('ExperienceSection', updatedData)}
//                                         />
//                                     ) : null}
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="text-gray-500">No components available for this template.</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Editor Panel */}
//                 <div className="col-span-12 lg:col-span-4 p-6 border rounded-xl shadow-lg bg-white text-black">
//                     <div className="space-y-6">
//                         {/* Hero Section Editor */}
//                         {/* Repeating similar structure for Hero Section input fields */}
//                         <div>
//                             <h3 className="text-xl font-bold">Hero Section</h3>
//                             <div>
//                                 <label className="block text-lg font-semibold">Title:</label>
//                                 <input
//                                     type="text"
//                                     value={customizedData.HeroSection.title || ''}
//                                     onChange={(e) => handleHeroSectionInputChange('title', e.target.value)}
//                                     className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
//                                 />
//                             </div>
//                             {/* Repeat for other fields like Subtitle, Button Text, Profile Image, etc. */}
//                         </div>

//                         {/* Skills, Projects, Experience Editors */}
//                         {/* Repeating similar structure for Skills, Projects, and Experience */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomizePageContent;
