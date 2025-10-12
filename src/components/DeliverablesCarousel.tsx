"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import TouchpointImageModal from "./TouchpointImageModal";

export interface DeliverableItem {
  name: string;
  image: string;
}

interface TouchpointCarouselProps {
  items: DeliverableItem[];
  category: string;
  description?: string;
}

export default function TouchpointCarousel({
  items,
  category,
  description,
}: TouchpointCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const currentItem = items[currentIndex];

  return (
    <div
      className="relative mx-auto flex flex-col items-center w-full"
      style={{
        height: "70vh", // total height (image + caption + dots)
        maxHeight: "70vh",
      }}
    >
      {/* 🖼️ Image Container */}
      <div
        className="flex-1 flex items-center justify-center overflow-hidden cursor-pointer w-full px-[var(--space-3)] py-[var(--space-3)] box-border"
        style={{
          border: "var(--border-width) solid var(--border-color)",
          padding: "var(--space-3)",
          borderBottom: "none",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageWithFallback
              src={currentItem.image}
              alt={currentItem.name}
              className="max-h-full w-auto object-contain border"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🏷️ Caption Bar */}
      <div
        className="w-full flex items-center"
        style={{
          backgroundColor: "var(--text-primary)",
          border: "var(--border-width) solid var(--border-color)",
          borderTop: "none",
        }}
      >
        {items.length > 1 && (
          <button
            onClick={prevSlide}
            className="flex items-center justify-center flex-shrink-0"
            style={{
              padding: "var(--space-2)",
              color: "var(--text-inverse)",
              borderRight: "var(--border-width) solid var(--border-color)",
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div className="flex-1 flex items-center justify-center text-center">
          <span
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-inverse)",
            }}
          >
            {currentItem.name}
          </span>
        </div>

        {items.length > 1 && (
          <button
            onClick={nextSlide}
            className="flex items-center justify-center flex-shrink-0"
            style={{
              padding: "var(--space-2)",
              color: "var(--text-inverse)",
              borderLeft: "var(--border-width) solid var(--border-color)",
            }}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Dots */}
      {items.length > 1 && (
        <div className="flex justify-center mt-3 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "8px",
                height: "8px",
                border: "var(--border-width) solid var(--border-color)",
                backgroundColor:
                  index === currentIndex ? "var(--text-primary)" : "transparent",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {items.length > 1 && (
        <div className="text-center mt-2">
          <span
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--text-primary)",
              opacity: 0.6,
            }}
          >
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </div>
  );
}
