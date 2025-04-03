"use client"; // Fix for Next.js

import React from "react";

interface OptionalButtonProps {
    names: string[];
    currentIndex: number;
    onSelect: (index: number) => void; // Callback function
}

const OptionalButton: React.FC<OptionalButtonProps> = ({ names, currentIndex, onSelect }) => {
    return (
        <div className="flex gap-4 md:gap-6 justify-center items-center sm:justify-start basis-0">
            {names.map((name, index) => (
                <button
                    key={index}
                    className={`inline-block cursor-pointer font-semibold text-xl font-sans px-4 py-2
                    ${index === currentIndex ? 'text-[#FA660F] border-[2px] font-bold border-[#FA660F]' : 'bg-black text-white shadow-lg'}`}
                    onClick={() => onSelect(index)} // Call the parent function
                >
                    {name}
                </button>
            ))}     
        </div>      
    );
}

export default OptionalButton;
