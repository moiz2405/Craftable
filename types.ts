// types.ts

export type StyleType = 'style1' | 'style2' | 'style3' | 'style4' | 'style5';

export type ComponentProps = {
    style: StyleType;
    onStyleChange: () => void;
};

export type TemplateCardProps = {
    style: StyleType;
    onSelect: () => void;
    isSelected: boolean;
    components: {
        component: React.ComponentType<ComponentProps>;
        title: string;
    }[];
};

