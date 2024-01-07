import { ReactNode } from "react";

export interface ButtonProps {
    text: string;
    extraclasses?: string;
    variant?: 'small' | 'big',
}

export interface InputProps {
    name: string;
    type?: string;
    extraClasses?: string;
    placeholder?: string;
}

export interface HomePageSectionProps {
    children: ReactNode;
}
export interface DescriptionWithHeadingCardProps {
    headingLines: Array<string>; 
    descriptionLines: Array<string>;
}

export interface AccordionBaseProps {
    question: string; 
    answers: Array<string>;
}

export interface AccordionProps extends AccordionBaseProps {
    isOpen: boolean;
    index: number;
    setActiveAccordian(index:number): any; 
}