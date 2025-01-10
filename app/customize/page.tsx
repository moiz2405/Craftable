'use client';
import { useSearchParams } from 'next/navigation';
import { TEMPLATES } from '../../constants/Templates';
import { StyleType } from '../../types';  // Import StyleType
import { Suspense } from 'react';  // Import Suspense

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
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Customize Your Template</h1>
            <p className="text-gray-600">
                You selected template: <span className="font-semibold">{selectedTemplate.label}</span>
            </p>
            <p className="text-gray-600">
                Selected style: <span className="font-semibold">{selectedStyle}</span>
            </p>

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
