'use client';

import React, { useState } from 'react';
import Hero from '../components/home/Hero';

export default function Page() {
  const [selectedSite, setSelectedSite] = useState<string>('');

  const handleSiteSelection = (site: string) => {
    setSelectedSite(site);
  };

  return (
    <div>
      <Hero onSelectSite={handleSiteSelection} />
    </div>
  );
}
