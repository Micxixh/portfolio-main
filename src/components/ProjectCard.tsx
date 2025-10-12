"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "../api/projectsApi";

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
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <motion.div
          className="absolute inset-0"
          style={{
            border: "var(--border-width) solid var(--border-color)",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: ANIMATION_CONFIG.HOVER_DURATION,
            ease: "easeInOut",
          }}
        >
          <ImageWithFallback
            src={project.image}
            alt={`${project.name} project showcase`}
            className="w-full h-full object-cover"
          />
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            transition={{
              duration: ANIMATION_CONFIG.HOVER_DURATION,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Project Info */}
      <motion.div
        className="mt-4 md:mt-6 mobile-project-card"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{
          duration: ANIMATION_CONFIG.CARD_TRANSITION.DURATION,
          ease: ANIMATION_CONFIG.CARD_TRANSITION.EASING,
          delay: (index * ANIMATION_CONFIG.STAGGER_DELAY) + 0.2,
        }}
      >
        {/* Category & Year */}
        <div 
          className="flex items-center justify-between mb-1 md:mb-2"
          style={{ gap: "var(--space-2)" }}
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
          {project.title}
        </h3>

        {/* Project Name */}
        <h4
          style={{
            fontFamily: "var(--font-family-roboto-mono)",
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--text-primary)",
            marginBottom: "var(--space-2)",
          }}
        >
          {project.name}
        </h4>

        {/* Tags */}
        <div 
          className="flex flex-wrap"
          style={{ gap: "var(--space-1)" }}
        >
          {(project.tags || []).slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-primary)",
                padding: "var(--space-1) var(--space-2)",
                border: "var(--border-width) solid var(--border-color)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover Indicator */}
        <motion.div
          className="mt-4 flex items-center"
          style={{ gap: "var(--space-2)" }}
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.HOVER_DURATION,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-6 h-px"
            style={{ backgroundColor: "var(--text-primary)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-family-inter)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            View Project
          </span>
        </motion.div>
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