"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

interface ModalCloseButtonProps {
  onClick: () => void;
  className?: string;
}

export default function ModalCloseButton({ onClick, className = "" }: ModalCloseButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`cursor-pointer z-10 ${className}`}
      style={{
        padding: "var(--space-2)",
        border: "var(--border-width) solid var(--border-color)",
        backgroundColor: "var(--bg-primary)",
        fontFamily: "var(--font-family-inter)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-medium)",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      aria-label="Close modal" // Accessibility improvement
    >
      <X
        size={24}
        style={{ color: "var(--text-primary)" }}
      />
    </motion.button>
  );
}