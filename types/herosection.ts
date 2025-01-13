import { ReactNode } from 'react';

export type StyleType = 'style1' | 'style2' | 'style3' | 'style4' | 'style5';

export interface HeroSectionSchema {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    buttons: {
        text: string;
        href: string;
        icon?: ReactNode;
        variant: 'primary' | 'secondary';
    }[];
    socialLinks?: {
        icon: ReactNode;
        href: string;
    }[];
    image?: {
        src: string;
        alt: string;
    };
}

export interface HeroSectionProps {
    schema: HeroSectionSchema;
    style: StyleType;
}

