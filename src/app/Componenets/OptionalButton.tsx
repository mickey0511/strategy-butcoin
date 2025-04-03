"use client";

import React, { useState, useRef, useEffect } from "react";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";

interface OptionalButtonProps {
  names: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

const OptionalButton: React.FC<OptionalButtonProps> = ({ names, currentIndex, onSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [buttonWidth, setButtonWidth] = useState(100);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const firstButton = containerRef.current.querySelector("button");
        if (firstButton) setButtonWidth(firstButton.offsetWidth + 16); // Adjust for spacing

        const totalWidth = names.length * buttonWidth;
        const newMaxTranslate = Math.max(totalWidth - containerWidth, 0);

        setMaxTranslate(newMaxTranslate);

        // Update arrow visibility
        setShowLeftArrow(translateX < 0);
        setShowRightArrow(translateX > -newMaxTranslate);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [translateX, names, buttonWidth]);

  const handleSlideLeft = () => {
    setTranslateX((prev) => {
      const newTranslate = prev + buttonWidth;
      const updatedTranslate = Math.min(newTranslate, 0); // Stop at first button
      setShowLeftArrow(updatedTranslate < 0);
      setShowRightArrow(updatedTranslate > -maxTranslate);
      return updatedTranslate;
    });
  };

  const handleSlideRight = () => {
    setTranslateX((prev) => {
      const newTranslate = prev - buttonWidth;
      const updatedTranslate = Math.max(newTranslate, -maxTranslate); // Stop at last button
      setShowLeftArrow(updatedTranslate < 0);
      setShowRightArrow(updatedTranslate > -maxTranslate);
      return updatedTranslate;
    });
  };

  return (
    <div className="w-full flex items-center justify-center gap-2 sm:gap-4 relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button onClick={handleSlideLeft} className="text-gray-400">
          <RiArrowLeftWideLine className="text-xl sm:text-2xl" />
        </button>
      )}

      {/* Buttons Container */}
      <div className="overflow-hidden w-full sm:w-auto px-4 sm:px-8" ref={containerRef}>
        <div
          className="flex gap-2 sm:gap-4 justify-center items-center transition-transform duration-300"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {names.map((name, index) => (
            <button
              key={index}
              className={`inline-block cursor-pointer text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2 font-semibold whitespace-nowrap ${
                index === currentIndex
                  ? "text-[#FA660F] border-2 font-bold border-[#FA660F]"
                  : "bg-black text-white shadow-lg"
              }`}
              onClick={() => onSelect(index)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button onClick={handleSlideRight} className="text-gray-400">
          <RiArrowRightWideLine className="text-xl sm:text-2xl" />
        </button>
      )}
    </div>
  );
};

export default OptionalButton;
