"use client";

import { Suspense } from 'react';
import CustomizePageContent from '../../components/customize/';

export default function CustomizePage() {
    return (
        <Suspense fallback={<div>Loading customization options...</div>}>
            <CustomizePageContent />
        </Suspense>
    );
}
