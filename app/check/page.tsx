import React from 'react';
import { HeroSection } from '@/components/templates/portfolio/HeroSection';

export default function Page() {
    return (
        <>
            <HeroSection
                title="Welcome to My Portfolio"xcfsfasdf
                subtitle="Explore My Work and Achievements"
                buttonText1="Contact Me"
                buttonText2="View Projects"
                buttonLink1="#contact"
                buttonLink2="#projects"
                socialLinks={{
                    github: "https://github.com/yourusername",
                    linkedin: "https://www.linkedin.com/in/yourusername"
                }}
                imageUrl="/profile-image.jpg"
                style="style1"
            />
        </>
    );
}
