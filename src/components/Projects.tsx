"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
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

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
  projects: Project[];
  loading?: boolean;
  error?: string | null;
}

export default function Projects({ 
  onProjectClick, 
  projects, 
  loading = false, 
  error = null 
}: ProjectsProps) {
  const handleProjectSelect = (project: Project) => {
    onProjectClick(project);
  };

  // Show loading state
  if (loading) {
    return (
      <div
        className="w-full h-screen md:flex md:flex-col md:justify-start projects-page-mobile"
        style={{
          paddingTop: "var(--space-3)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-base)",
              color: "var(--text-primary)",
            }}
          >
            Loading projects...
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div
        className="w-full h-screen md:flex md:flex-col md:justify-start projects-page-mobile"
        style={{
          paddingTop: "var(--space-3)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-base)",
              color: "var(--text-primary)",
              textAlign: "center",
            }}
          >
            Error loading projects
            <br />
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Main Projects Grid */}
      <div
        className="w-full h-screen md:flex md:flex-col md:justify-start projects-page-mobile"
        style={{
          paddingTop: "var(--space-3)", // Will be overridden by CSS for desktop
          backgroundColor: "var(--bg-primary)",
        }}
      >
        {/* Page Title */}
        <motion.div
          className="w-full mobile-content projects-page-title"
          style={{
            padding: "0 var(--content-padding-x)",
            marginBottom: "var(--space-4)",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: ANIMATION_CONFIG.CARD_TRANSITION.DURATION,
            ease: ANIMATION_CONFIG.CARD_TRANSITION.EASING,
            delay: 0.2,
          }}
        >
          <div
            style={{
              borderBottom:
                "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-4)",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-family-inter)",
                fontSize: "var(--text-h1)",
                fontWeight: "var(--font-weight-bold)",
                textTransform: "uppercase",
                lineHeight: "1.2",
                color: "var(--text-primary)",
              }}
            >
              Selected Projects
            </h1>
            <p
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-primary)",
                marginTop: "var(--space-2)",
              }}
            >
              A curated collection of design projects showcasing
              user experience research, interface design, and
              strategic problem-solving across various
              industries.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="flex-1 w-full overflow-y-auto mobile-content hide-scrollbar"
          style={{
            padding: "0 var(--content-padding-x)",
            paddingBottom: "var(--content-padding-y)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 mobile-projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={handleProjectSelect}
                isSelected={false}
              />
            ))}
          </div>
        </div>

        {/* Project Count */}
        <motion.div
          className="w-full mobile-content"
          style={{
            padding: "var(--space-4) var(--content-padding-x)",
            borderTop:
              "var(--border-width) solid var(--border-color)",
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: ANIMATION_CONFIG.CARD_TRANSITION.DURATION,
            ease: ANIMATION_CONFIG.CARD_TRANSITION.EASING,
            delay:
              projects.length *
                ANIMATION_CONFIG.STAGGER_DELAY +
              0.3,
          }}
        >
          <div className="flex items-center justify-between">
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
              {projects.length} Projects
            </span>
            <span
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-primary)",
              }}
            >
              2023 - 2024
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
}