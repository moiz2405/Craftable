"use client";

import { Suspense } from 'react';

export default function CustomizePage() {
    return (
        <Suspense fallback={<div>Loading customization options...</div>}>
            
        </Suspense>
    );
}
