'use client';
import { useSearchParams } from 'next/navigation';
import { TEMPLATES } from '../../constants/Templates';
import { StyleType } from '../../types'; 
import { Suspense } from 'react'; 

const CustomizePageContent = () => {
    const searchParams = useSearchParams();
    const selectedTemplateLabel = searchParams.get('template');
    const selectedStyle = (searchParams.get('style') as StyleType) || 'style1'; // Assert the type as StyleType

    const selectedTemplate = TEMPLATES.find(
        (template) => template.label === selectedTemplateLabel
    );

    if (!selectedTemplate) {
        return <p className="text-red-500">Invalid template selected.</p>;
    }

    return (
        <div className="p-6 space-y-4 bg-gradient-to-b from-purple-900 to-black">
            <span className="text-4xl md:text-4xl font-extrabold mb-6 text-center z-10 font-2xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Customize Your Template</span>


            <div className="space-y-4">
                {selectedTemplate.components.length > 0 ? (
                    selectedTemplate.components.map(({ component: Component }, index) => (
                        <div key={index} className="p-4 border rounded-md shadow-md bg-white">
                            <Component style={selectedStyle} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No components available for this template.</p>
                )}
            </div>
        </div>
    );
};

export default function CustomizePage() {
    return (
        <Suspense fallback={<div>Loading customization options...</div>}>
            <CustomizePageContent />
        </Suspense>
    );
}
