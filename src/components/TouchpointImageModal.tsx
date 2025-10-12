"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ModalCloseButton from "./ModalCloseButton";

interface DeliverableItem {
  name: string;
  imageUrl: string;
}

interface TouchpointImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: DeliverableItem[];
  category: string;
  initialIndex?: number;
  description?: string;
}

export default function TouchpointImageModal({
  isOpen,
  onClose,
  items,
  category,
  initialIndex = 0,
  description,
}: TouchpointImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Escape key closes modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(250, 250, 250, 0.95)",
            backdropFilter: "blur(4px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            className="relative max-w-4xl w-full mx-8 max-h-[90vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute top-0 right-0 z-10 -mt-12 -mr-2">
              <ModalCloseButton onClick={onClose} />
            </div>

            {/* Image Container */}
            <div
              className="relative flex-1 overflow-hidden"
              style={{
                border: "var(--border-width) solid var(--border-color)",
                backgroundColor: "var(--bg-primary)",
                minHeight: "400px",
                maxHeight: "60vh",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="w-full h-full flex items-center justify-center"
                  style={{ padding: "var(--space-6)" }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ImageWithFallback
                    src={currentItem.imageUrl}
                    alt={currentItem.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "var(--text-primary)",
                      color: "var(--text-inverse)",
                      border: "var(--border-width) solid var(--border-color)",
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "var(--text-primary)",
                      color: "var(--text-inverse)",
                      border: "var(--border-width) solid var(--border-color)",
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Info Section */}
            <div
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--text-inverse)",
                border: "var(--border-width) solid var(--border-color)",
                borderTop: "none",
                padding: "var(--space-4) var(--space-6)",
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-family-inter)",
                  fontSize: "var(--text-h4)",
                  fontWeight: "var(--font-weight-semibold)",
                  textTransform: "uppercase",
                  color: "var(--text-inverse)",
                  marginBottom: "var(--space-2)",
                  lineHeight: "1.3",
                }}
              >
                {currentItem.name}
              </h3>

              {/* Category */}
              <p
                style={{
                  fontFamily: "var(--font-family-roboto-mono)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--text-inverse)",
                  opacity: 0.8,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: description ? "var(--space-3)" : "0",
                }}
              >
                {category}
              </p>

              {/* Description */}
              {description && (
                <p
                  style={{
                    fontFamily: "var(--font-family-roboto-mono)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-light)",
                    color: "var(--text-inverse)",
                    lineHeight: "1.5",
                    opacity: 0.9,
                  }}
                >
                  {description}
                </p>
              )}

              {/* Counter + Dots */}
              {items.length > 1 && (
                <div
                  className="flex justify-between items-center"
                  style={{ marginTop: "var(--space-4)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-normal)",
                      color: "var(--text-inverse)",
                      opacity: 0.6,
                    }}
                  >
                    {currentIndex + 1} of {items.length}
                  </span>

                  <div className="flex gap-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="transition-all duration-200"
                        style={{
                          width: "8px",
                          height: "8px",
                          border: "var(--border-width) solid var(--text-inverse)",
                          backgroundColor:
                            index === currentIndex
                              ? "var(--text-inverse)"
                              : "transparent",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
