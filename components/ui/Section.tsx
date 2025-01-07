import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export const Section = ({ children, className = '' }: SectionProps) => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ${className}`}
    >
        {children}
    </motion.section>
);