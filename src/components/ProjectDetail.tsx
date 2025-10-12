"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Play,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "../api/optimizedProjectsApi";
import { getNextProject } from "../utils/projectHelpers";
import DeliverablesCarousel from "./DeliverablesCarousel";
import ModalCloseButton from "./ModalCloseButton";
import IdeationCarousel from "./IdeationCarousel";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onBackToProjects?: () => void;
  onNextProject?: () => void;
  projects?: Project[];
}

export default function ProjectDetail({
  project,
  isOpen,
  onClose,
  onBackToProjects,
  onNextProject,
  projects = [],
}: ProjectDetailProps) {
  const [expandedPrototype, setExpandedPrototype] = useState(false);
  const [expandedVideo, setExpandedVideo] = useState(false);
  const [expandedDeliverables, setExpandedDeliverables] = useState<Set<number>>(new Set());
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  // Memoize calculations to prevent re-renders
  const nextProject = useMemo(() => {
    return projects.length > 0 ? getNextProject(projects, project) : null;
  }, [projects, project]);

  const projectData = useMemo(() => {
    return project?.caseStudy;
  }, [project?.caseStudy]);


  // Optimized handlers
  const handleNextProjectClick = useCallback(() => {
    if (onNextProject) {
      onNextProject();
    }
  }, [onNextProject]);

  const handleBackClick = useCallback(() => {
    if (onBackToProjects) {
      onBackToProjects();
    } else {
      onClose();
    }
  }, [onBackToProjects, onClose]);

  // Handle escape key for modals
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (expandedPrototype) {
          setExpandedPrototype(false);
        } else if (expandedVideo) {
          setExpandedVideo(false);
        } else if (showComparisonModal) {
          setShowComparisonModal(false);
        }
      }
    };

    if (expandedPrototype || expandedVideo || showComparisonModal) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [expandedPrototype, expandedVideo, showComparisonModal]);

  // Early return if no project
  if (!project) return null;

  // Error state if no case study data
  if (!projectData) {
    return (
      <div
        className="w-full h-full overflow-y-auto project-detail-container"
        data-project-detail="true"
        style={{
          backgroundColor: "var(--bg-primary)",
          paddingTop: "var(--header-padding-top)",
        }}
      >
        <div
          className="w-full min-h-full flex items-center justify-center"
          style={{
            paddingLeft: "var(--content-padding-x)",
            paddingRight: "var(--content-padding-x)",
            paddingBottom: "var(--content-padding-y)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "var(--space-4)" }}>
              Project Details Unavailable
            </h2>
            <p style={{ marginBottom: "var(--space-6)" }}>
              This project's detailed case study information is not available.
            </p>
            <motion.button
              onClick={handleBackClick}
              className="flex items-center group cursor-pointer mx-auto"
              style={{
                padding: "var(--space-2) var(--space-4)",
                border: "var(--border-width) solid var(--border-color)",
                backgroundColor: "transparent",
              }}
              whileHover={{
                x: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <ArrowLeft
                size={20}
                style={{
                  marginRight: "var(--space-2)",
                  color: "var(--text-primary)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-family-roboto-mono)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Back to Projects
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full overflow-y-auto project-detail-container"
      data-project-detail="true"
      style={{
        backgroundColor: "var(--bg-primary)",
        paddingTop: "var(--header-padding-top)",
      }}
    >
      <div
        className="w-full min-h-full"
        style={{
          paddingLeft: "var(--content-padding-x)",
          paddingRight: "var(--content-padding-x)",
          paddingBottom: "var(--content-padding-y)",
        }}
      >
        {/* Navigation Header */}
        <motion.div
          className="w-full"
          style={{
            paddingBottom: "var(--space-2)",
            marginBottom: "var(--space-2)",
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
        >
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start w-full">
            <motion.button
              onClick={handleBackClick}
              className="flex items-center group cursor-pointer"
              style={{
                padding: "var(--space-2) 0",
              }}
              whileHover={{
                x: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <ArrowLeft
                size={20}
                style={{
                  marginRight: "var(--space-2)",
                  color: "var(--text-primary)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-family-roboto-mono)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Back to Projects
              </span>
            </motion.button>

            {nextProject && onNextProject && (
              <motion.button
                onClick={handleNextProjectClick}
                className="flex items-center gap-2 cursor-pointer"
                style={{
                  padding: "var(--space-2) var(--space-4)",
                  border: "var(--border-width) solid var(--border-color)",
                  backgroundColor: "transparent",
                }}
                whileHover={{
                  x: 4,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
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
                  Next: {nextProject.name}
                </span>
                <ArrowRight
                  size={16}
                  style={{ color: "var(--text-primary)" }}
                />
              </motion.button>
            )}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <motion.button
              onClick={handleBackClick}
              className="flex items-center group cursor-pointer"
              style={{
                marginBottom: "var(--space-4)",
                padding: "var(--space-2) 0",
              }}
              whileHover={{
                x: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <ArrowLeft
                size={20}
                style={{
                  marginRight: "var(--space-2)",
                  color: "var(--text-primary)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-family-roboto-mono)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Back to Projects
              </span>
            </motion.button>

            {nextProject && onNextProject && (
              <motion.button
                onClick={handleNextProjectClick}
                className="flex items-center gap-2 cursor-pointer"
                style={{
                  padding: "var(--space-2) var(--space-4)",
                  border: "var(--border-width) solid var(--border-color)",
                  backgroundColor: "transparent",
                  marginBottom: "var(--space-2)",
                }}
                whileHover={{
                  x: 4,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
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
                  Next: {nextProject.name}
                </span>
                <ArrowRight
                  size={16}
                  style={{ color: "var(--text-primary)" }}
                />
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* 1. Title & Hero Visual */}
        <motion.section
          style={{ marginBottom: "var(--space-12)" }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
        >
          <h1 style={{ marginBottom: "var(--space-3)" }}>
            {project.name}
          </h1>

          <p
            style={{
              marginBottom: "var(--space-8)",
              fontSize: "var(--text-h6)",
              fontFamily: "var(--font-family-roboto-mono)",
              fontWeight: "var(--font-weight-light)",
              color: "var(--text-primary)",
            }}
          >
            {project.description}
          </p>

          <div
            className="project-detail-image-container"
            style={{
              height: "60vh",
              border: "var(--border-width) solid var(--border-color)",
              overflow: "hidden",
              marginBottom: "var(--space-8)",
            }}
          >
            <ImageWithFallback
              src={project.image}
              alt={`${project.name} hero visual`}
              className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          </div>
        </motion.section>

        {/* 2. Context / Overview */}
        <motion.section
          style={{ marginBottom: "var(--space-12)" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
        >
          <div
            style={{
              borderBottom: "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-3)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2>Context / Overview</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
            <div>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Context
                </h6>
                <p>{projectData.overview.context}</p>
              </div>

              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Role
                </h6>
                <p>{projectData.overview.role}</p>
              </div>

              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Tools
                </h6>
                <div className="flex flex-wrap gap-2">
                  {projectData.overview.tools?.map((tool, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "var(--space-1) var(--space-2)",
                        border: "var(--border-width) solid var(--border-color)",
                        fontFamily: "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-normal)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {tool}
                    </span>
                  )) || []}
                </div>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Category
                </h6>
                <p>{project.category}</p>
              </div>

              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Target Audience
                </h6>
                <p>
                  {projectData.overview.targetAudience ||
                    "Primary users and stakeholders identified through research and discovery processes."}
                </p>
              </div>

              <div>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Deliverables
                </h6>
                <div
                  className="flex flex-wrap gap-2"
                  style={{ marginBottom: "var(--space-4)" }}
                >
                  {projectData.overview.deliverables?.map((deliverable, index) => {
                    const deliverableName =
                      typeof deliverable === "string"
                        ? deliverable
                        : deliverable.name;

                    return (
                      <span
                        key={index}
                        style={{
                          padding: "var(--space-1) var(--space-2)",
                          border: "var(--border-width) solid var(--border-color)",
                          fontFamily: "var(--font-family-roboto-mono)",
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-normal)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {deliverableName}
                      </span>
                    );
                  }) || []}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. Research & Discovery */}
        <motion.section
          style={{ marginBottom: "var(--space-12)" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
        >
          <div
            style={{
              borderBottom: "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-3)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2>Research & Discovery</h2>
          </div>

          <motion.section
            style={{ marginBottom: "var(--space-12)", border: "var(--border-width) solid var(--border-color)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
          >
            <div
                  style={{
                    padding: "var(--space-4)",
                    borderBottom: "var(--border-width) solid var(--border-color)",
                    backgroundColor: "#000000",
                  }}
                >
                  <h6
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-h6)",
                      fontWeight: "var(--font-weight-normal)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Documentation
                  </h6>
                </div>


            <div
              style={{
                padding: "var(--space-4)",
                borderBottom: "var(--border-width) solid var(--border-color)",
                display: "flex",
                flexDirection: "row",
                gap: "var(--space-2)",
                justifyContent: "center",
              }}
            >
              <motion.a
                href={projectData?.research.competitorAnalysisLink || "https://docs.google.com/spreadsheets/d/1example-research-document-link/edit"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer"
                style={{
                  padding: "var(--space-2) var(--space-4)",
                  border: "var(--border-width) solid var(--border-color)",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-family-inter)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                >
                <span>Competitor analysis</span>
                <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href={projectData?.research.audienceResearchLink || "https://docs.google.com/spreadsheets/d/1example-research-document-link/edit"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer"
                style={{
                  padding: "var(--space-2) var(--space-4)",
                  border: "var(--border-width) solid var(--border-color)",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-family-inter)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                >
                <span>Audience Research</span>
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.section>


          <motion.section
            style={{ marginBottom: "var(--space-12)", border: "var(--border-width) solid var(--border-color)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
          >
            <div
                  style={{
                    padding: "var(--space-4)",
                    borderBottom: "var(--border-width) solid var(--border-color)",
                    backgroundColor: "#000000",
                  }}
                >
                  <h6
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-h6)",
                      fontWeight: "var(--font-weight-normal)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Analysis Summary
                  </h6>
                </div>

                {/* Strategic Insights Section */}
                <div
                  style={{
                    padding: "var(--space-6)",
                  }}
                >

                  <div className="space-y-4">
                    {projectData.research.strategicInsights && projectData.research.strategicInsights.length > 0 ? (
                      projectData.research.strategicInsights.map((insight, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "var(--space-4)",
                            backgroundColor: "#131313",
                            border: "var(--border-width) solid var(--border-color)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "var(--space-2)",
                            }}
                          >
                            <h6
                              style={{
                                fontFamily: "var(--font-family-roboto-mono)",
                                fontSize: "var(--text-base)",
                                fontWeight: "var(--font-weight-normal)",
                                color: "#ffffff",
                                margin: 0,
                              }}
                            >
                              Insight 0{index + 1}
                            </h6>
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-family-roboto-mono)",
                              fontSize: "var(--text-base)",
                              fontWeight: "var(--font-weight-light)",
                              color: "#ffffff",
                              margin: 0,
                              lineHeight: "1.6",
                            }}
                          >
                            {insight || "Analysis details will be displayed here when data is available."}
                          </p>
                        </div>
                      ))
                    ) : (
                      // Default insights when no project data available
                      [
                        {
                          title: "User Experience Gaps",
                          description: projectData.research.keyFindings || "User research revealed critical pain points in the current workflow and opportunities for streamlined interactions that reduce cognitive load.",
                          impact: "high",
                        },
                        {
                          title: "Competitive Positioning",
                          description: "Analysis identified market opportunities for differentiation through clearer information architecture and more intuitive user flows.",
                          impact: "medium",
                        },
                        {
                          title: "Design Strategy Impact",
                          description: projectData.research.designImplications || "These insights directly informed our design principles of clarity, consistency, and efficiency, ensuring user needs remained central to all design decisions.",
                          impact: "high",
                        },
                      ].map((insight, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "var(--space-4)",
                            backgroundColor: "#131313",
                            border: "var(--border-width) solid var(--border-color)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "var(--space-2)",
                            }}
                          >
                            <h6
                              style={{
                                fontFamily: "var(--font-family-roboto-mono)",
                                fontSize: "var(--text-base)",
                                fontWeight: "var(--font-weight-normal)",
                                color: "#ffffff",
                                margin: 0,
                              }}
                            >
                              {insight.title}
                            </h6>
                            <span
                              style={{
                                fontFamily: "var(--font-family-roboto-mono)",
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-normal)",
                                color:
                                  insight.impact === "high"
                                    ? "#ffffff"
                                    : insight.impact === "medium"
                                      ? "#cccccc"
                                      : "#999999",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {insight.impact} Impact
                            </span>
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-family-roboto-mono)",
                              fontSize: "var(--text-base)",
                              fontWeight: "var(--font-weight-light)",
                              color: "#ffffff",
                              margin: 0,
                              lineHeight: "1.6",
                            }}
                          >
                            {insight.description}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
          </motion.section>
        
        </motion.section>

{/* 4. Ideation */}
<motion.section>
  <h2>Ideation</h2>

// inside ProjectDetail render:
{project.caseStudy?.ideation?.directions && (
  <section className="mt-16">
    <h2 className="text-3xl font-bold mb-8">Ideation</h2>
    <IdeationCarousel directions={project.caseStudy.ideation.directions} />
  </section>
)}

</motion.section>



        {/* 5. Execution (The Work) */}
        <motion.section
          style={{ marginBottom: "var(--space-12)" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6,
          }}
        >
          <div
            style={{
              borderBottom: "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-3)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2>Execution (The Work)</h2>
          </div>

          <div style={{ marginBottom: "var(--space-8)" }}>
            {projectData.deliverables && projectData.deliverables.length > 0 ? (
              projectData.deliverables.map((deliverables, index) => (
                <div
                  key={index}
                  className="mobile-deliverables-section"
                  style={{ marginBottom: "var(--space-12)" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mobile-deliverables-layout items-center">
                    <div className="lg:col-span-1 mobile-deliverables-content">
                      <h5 style={{ marginBottom: "var(--space-3)" }}>
                        {deliverables.category}
                      </h5>
                      <p style={{ marginBottom: "var(--space-6)", opacity: 0.8 }}>
                        {deliverables.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                      {(expandedDeliverables.has(index)
                        ? deliverables.items
                        : deliverables.items.slice(0, 3)
                      ).map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          style={{
                            padding: "var(--space-1) var(--space-2)",
                            border: "var(--border-width) solid var(--border-color)",
                            fontFamily: "var(--font-family-roboto-mono)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--font-weight-normal)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {item.name} 
                        </span>
                      ))}

                        {deliverables.items.length > 3 && (
                          <button
                            style={{
                              padding: "var(--space-1) var(--space-2)",
                              border: "var(--border-width) solid var(--border-color)",
                              fontFamily: "var(--font-family-roboto-mono)",
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-normal)",
                              backgroundColor: "transparent",
                              cursor: "pointer",
                              color: "var(--text-primary)",
                              opacity: 0.8,
                            }}
                          >
                            {expandedDeliverables.has(index)
                              ? "Show less"
                              : `+${deliverables.items.length - 3} more`}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-2 mobile-deliverables-carousel">
                      <DeliverablesCarousel
                        items={deliverables.items}
                        category={deliverables.category}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-wrap gap-2">
                {projectData.overview.deliverables?.map((deliverable, index) => {
                  const deliverableName =
                    typeof deliverable === "string" ? deliverable : deliverable.name;
                  return (
                    <span
                      key={index}
                      style={{
                        padding: "var(--space-1) var(--space-2)",
                        border: "var(--border-width) solid var(--border-color)",
                        fontFamily: "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-normal)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {deliverableName}
                    </span>
                  );
                }) || []}
              </div>
            )}
          </div>
        </motion.section>

        {/* 6. Impact / Reflection */}
        <motion.section
          style={{ marginBottom: "var(--space-12)" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.7,
          }}
        >
          <div
            style={{
              borderBottom: "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-3)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2>Impact / Reflection</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Key Learnings
                </h6>
                <p>{projectData.reflection?.learnings || "Key insights and learnings from the project development process."}</p>
              </div>

              <div>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Collaboration
                </h6>
                <p>{projectData.reflection?.collaboration || "Cross-functional collaboration with engineering, product, and stakeholder teams."}</p>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Constraints & Challenges
                </h6>
                <p>{projectData.reflection?.constraints || "Technical, timeline, and resource constraints that shaped design decisions."}</p>
              </div>

              <div>
                <h6 style={{ marginBottom: "var(--space-2)" }}>
                  Final Outcome
                </h6>
                <p>{projectData.finalOutcome?.heroVisuals || "Successful project delivery meeting all defined objectives and user requirements."}</p>
              </div>
            </div>
          </div>
        </motion.section>

        

        {/* Bottom Next Project Button */}
        {nextProject && onNextProject && (
          <motion.div
            className="w-full flex justify-center"
            style={{ marginBottom: "var(--space-8)" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.0,
            }}
          >
            <motion.button
              onClick={handleNextProjectClick}
              className="flex items-center justify-center gap-2 cursor-pointer"
              style={{
                padding: "var(--space-3) var(--space-6)",
                backgroundColor: "var(--text-primary)",
                color: "var(--text-inverse)",
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              Next Project: {nextProject.name}
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Expanded Prototype Modal */}
        <AnimatePresence>
          {expandedPrototype && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: "var(--bg-primary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedPrototype(false)}
            >
              <ModalCloseButton
                onClick={() => setExpandedPrototype(false)}
                className="absolute top-6 right-6"
              />
              <div
                className="w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center cursor-default"
                style={{ padding: "var(--space-8)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "var(--border-width) solid var(--border-color)",
                    backgroundColor: "var(--bg-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-light)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Interactive prototype would be embedded here
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Video Modal */}
        <AnimatePresence>
          {expandedVideo && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: "var(--bg-primary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedVideo(false)}
            >
              <ModalCloseButton
                onClick={() => setExpandedVideo(false)}
                className="absolute top-6 right-6"
              />
              <div
                className="w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center cursor-default"
                style={{ padding: "var(--space-8)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "var(--border-width) solid var(--border-color)",
                    backgroundColor: "var(--bg-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-light)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Demo video would be embedded here
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}