"use client";

import { useState } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function Lightbox({ src, alt, width, height, className = "" }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in transition-opacity hover:opacity-90`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close lightbox"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
