"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "../api/optimizedProjectsApi";

// Animation configuration
const ANIMATION_CONFIG = {
  CARD_TRANSITION: {
    DURATION: 0.7,
    EASING: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  },
  STAGGER_DELAY: 0.15,
  HOVER_DURATION: 0.3,
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  isSelected: boolean;
}

export default function ProjectCard({
  project,
  index,
  onSelect,
  isSelected,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: ANIMATION_CONFIG.CARD_TRANSITION.DURATION,
        ease: ANIMATION_CONFIG.CARD_TRANSITION.EASING,
        delay: index * ANIMATION_CONFIG.STAGGER_DELAY,
      }}
      className={`relative cursor-pointer group ${
        isSelected ? "z-10" : "z-5"
      }`}
      onClick={() => onSelect(project)}
                style={{
            borderRadius:"1rem",
            overflow:"hidden"
          }}
    >
      {/* Project Image */}
    <div           
        style={{
            border: "var(--border-width) solid var(--border-color)",
            borderRadius:"1rem",
            overflow:"hidden"
          }}>
      <div className="relative overflow-hidden aspect-[3/2]">
        <motion.div
          style={{
            border: "var(--border-width) solid var(--border-color)",
            overflow:"hidden"
          }}
          whileHover={{ scale: 1.05}}
          transition={{
            duration: ANIMATION_CONFIG.HOVER_DURATION,
            ease: "easeInOut",
          }}
        >
          <ImageWithFallback
            src={project.image}
            alt={`${project.name} project showcase`}
          />
        </motion.div>
      </div>
    </div>
      {/* Project Info */}
      <motion.div
        className="mt-4 md:mt-6 flex flex-col mobile-project-card"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{
          duration: ANIMATION_CONFIG.CARD_TRANSITION.DURATION,
          ease: ANIMATION_CONFIG.CARD_TRANSITION.EASING,
          delay: (index * ANIMATION_CONFIG.STAGGER_DELAY) + 0.2,
        }}
        style={{gap:"var(--space-2)"}}
      >
        {/* Category & Year */}
        <div 
          className="flex items-center justify-between mb-1 md:mb-2"
        >
          <span
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-primary)",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontFamily: "var(--font-family-inter)",
            fontSize: "var(--text-h4)",
            fontWeight: "var(--font-weight-semibold)",
            textTransform: "uppercase",
            lineHeight: "1.3",
            color: "var(--text-primary)",
            marginBottom: "var(--space-1)",
          }}
        >
          {project.name}
        </h3>

      </motion.div>

      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          className="absolute -inset-2"
          style={{
            border: "2px solid var(--text-primary)",
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: ANIMATION_CONFIG.HOVER_DURATION,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}