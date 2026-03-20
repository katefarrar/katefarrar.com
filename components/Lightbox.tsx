"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in transition-opacity hover:opacity-90`}
        onClick={() => setIsOpen(true)}
      />

      {mounted && isOpen && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white p-4 sm:p-8 rounded-xl border border-gray-200">
            <img
              src={src}
              alt={alt}
              className="max-w-[85vw] sm:max-w-[67.5vw] max-h-[85vh] sm:max-h-[67.5vh] object-contain"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
