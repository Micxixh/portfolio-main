"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  src: string;
  title?: string;
  onClose: () => void;
}

export default function ImageModal({ src, title, onClose }: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="relative max-w-3xl w-[90%] rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>

        {title && <h3 className="text-white text-center mb-4">{title}</h3>}
        <img src={src} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
}
