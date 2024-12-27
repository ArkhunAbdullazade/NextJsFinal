"use client";

interface CardProps {
    children: React.ReactNode;
    backgroundImage?: string;
    border?: string;
    margin?: string;
    width?: string;
    height?: string;
    padding?: string;
}

export default function Card ({ 
    children, 
    backgroundImage, 
    border, 
    margin, 
    width, 
    height, 
    padding 
} : CardProps) {
    const dynamicStyles: React.CSSProperties = {
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        border: border || undefined,
        margin: margin || undefined,
        width: width || undefined,
        height: height || undefined,
        padding: padding || undefined,
    };

    return (
        <div
            className={`rounded-[25px] bg-white text-[#343c6a] font-lato bg-cover bg-center`}
            style={dynamicStyles}
        >
            {children}
        </div>
    );
};