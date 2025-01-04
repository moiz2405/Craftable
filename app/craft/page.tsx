// app/craft/page.tsx

import React from 'react';
import { SiteProvider } from '../../context/SiteContext';
import CraftSite from '../../components/craft/CraftSite';

function Page() {
    return (
        <SiteProvider>
            <CraftSite />
        </SiteProvider>
    );
}

export default Page;

