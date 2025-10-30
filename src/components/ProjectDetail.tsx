"use client";

import { motion, AnimatePresence, color } from "motion/react";
import { useState, useEffect, useMemo, useCallback, React } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Play,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "../api/optimizedProjectsApi";
import { getNextProject } from "../utils/projectHelpers";
import BentoGrid from "./DeliverablesGrid";
import ModalCloseButton from "./ModalCloseButton";
import IdeationCarousel from "./IdeationCarousel";
import { text } from "stream/consumers";
import CompetitorCarouselModal from "./CompetitorCarouselModal";
import PdfEmbedModal from "./PdfEmbedModal";
import ImageModal from "./ImageModal";


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
  const [expandedDeliverables, setExpandedDeliverables] = useState(new Set<number>());
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeResearchModal, setActiveResearchModal] = useState<
  null | { type: "carousel" | "pdf" | "image"; data?: any }
>(null);




  // Memoize calculations to prevent re-renders
  const nextProject = useMemo(() => {
    return projects.length > 0 ? getNextProject(projects, project) : null;
  }, [projects, project]);

  const projectData = useMemo(() => {
    return project?.caseStudy;
  }, [project?.caseStudy]);


  // Optimized handlers
const handleNextProjectClick = useCallback(() => {
  // Smoothly scroll to top of the project detail container
  const container = document.querySelector(".project-detail-container");
  if (container) {
    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Trigger the next project
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

    const [isMobile, setIsMobile] = useState(false);
  const summaries = projectData.deliverables?.summary || [];

    const linkButtonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    padding: "var(--space-2) var(--space-4)",
    border: "var(--border-width) solid var(--border-color)",
    borderRadius: "0.25rem",
    backgroundColor: "transparent",
    fontFamily: "var(--font-family-inter)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-weight-medium)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--text-primary)",
    textDecoration: "none",
  };

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  handleResize(); // check initially
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
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
        }}
      >
        <div
          className="w-full min-h-full flex items-center justify-center"

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
      }}
    >

      <div
        className="w-full min-h-full"
      >
{isMobile ? (
  // MOBILE LAYOUT: Image on top, info stacked below
  <div className="flex flex-col w-full">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-[60vh] bg-center bg-cover"
      style={{ marginTop: "70px" }}
    />

    <div className="flex flex-col gap-4 p-[var(--space-4)]" style={{ padding: "var(--space-4)", gap: "var(--space-4)" }}>
      {/* Project Name */}
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-4">
        <h6 className="text-white opacity-80 text-[var(--text-sm)] font-mono uppercase mb-2">
          Project
        </h6>
        <h2 className="text-white font-bold leading-tight text-[clamp(1.5rem,2vw,2rem)]">
          {project.name}
        </h2>
      </div>

      {/* Deliverables */}
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-4">
        <h4 style={{ marginBottom: "var(--space-2)" }} className="text-white opacity-80 text-[var(--text-sm)] font-mono uppercase mb-2">
          Deliverables
        </h4>
        <div className="flex flex-wrap gap-2">
          {projectData.overview.deliverables?.map((deliverable, index) => {
            const deliverableName = typeof deliverable === "string" ? deliverable : deliverable.name;
            return (
              <span
                key={index}
                style={{ color: "white", backgroundColor: "black", padding: " var(--space-2)" }}
              >
                {deliverableName}
              </span>
            );
          })}
        </div>
      </div>

      {/* Context */}
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-4">
        <h4 style={{ marginBottom: "var(--space-2)" }} className="text-white opacity-80 text-[var(--text-sm)] font-mono uppercase mb-2">
          Context
        </h4>
        <p className="text-white text-[var(--text-base)] leading-relaxed">
          {projectData.overview.context}
        </p>
      </div>

      {/* Tools */}
      <div className="bg-black/40 backdrop-blur-md rounded-lg p-4">
        <h4 style={{ marginBottom: "var(--space-2)" }} className="text-white opacity-80 text-[var(--text-sm)] font-mono uppercase mb-2">
          Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          {projectData.overview.tools?.map((tool, index) => (
            <span
              key={index}
                style={{ color: "white", backgroundColor: "black", padding: " var(--space-2)" }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
) : (
  // DESKTOP LAYOUT: Original four-corner overlay
        <section
          className="relative w-screen h-screen mb-[var(--space-12)] overflow-hidden border border-[var(--border-color)] text-white"
          style={{
            margin:0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color:"white"
          }}
        >
         {/* Four-Corner Info Grid */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              paddingTop: "var(--space-12)",
              paddingLeft: "var(--space-10)",
              paddingRight: "var(--space-10)",
              paddingBottom: "var(--space-10)",
              gap: "var(--space-8)",
            }}
          >
            {/* Top Left - Project Name */}
            <div
              style={{
                alignSelf: "start",
                justifySelf: "start",
                width: "30vw",
                textAlign: "left",
                padding: "var(--space-4)",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(6px)",
                borderRadius: "1rem",
              }}
            >
              <h6
                style={{
                  marginBottom: "var(--space-2)",
                  fontSize: "var(--text-sm)",
                  textTransform: "uppercase",
                  opacity: 0.8,
                  fontFamily: "var(--font-family-roboto-mono)",
                  color: "white",
                }}
              >
                Project
              </h6>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2vw, 2rem)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.2,
                }}
              >
                {project.name}
              </h2>
            </div>

            {/* Top Right - Deliverables */}
            <div
              style={{
                alignSelf: "start",
                justifySelf: "end",
                width: "30vw",
                textAlign: "right",
                padding: "var(--space-4)",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(6px)",
                borderRadius: "1rem",
              }}
            >
              <h6
                style={{
                  marginBottom: "var(--space-2)",
                  fontSize: "var(--text-sm)",
                  textTransform: "uppercase",
                  opacity: 0.8,
                  fontFamily: "var(--font-family-roboto-mono)",
                  color: "white",
                }}
              >
                Deliverables
              </h6>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  justifyContent: "flex-end",
                }}
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
                        borderLeft: "1px solid white",
                        paddingLeft: "var(--space-2)",
                        fontFamily: "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {deliverableName}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Bottom Left - Context */}
            <div
              style={{
                alignSelf: "end",
                justifySelf: "start",
                width: "30vw",
                textAlign: "left",
                padding: "var(--space-4)",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(6px)",
                borderRadius: "1rem",
              }}
            >
              <h6
                style={{
                  marginBottom: "var(--space-2)",
                  fontSize: "var(--text-sm)",
                  textTransform: "uppercase",
                  opacity: 0.8,
                  fontFamily: "var(--font-family-roboto-mono)",
                  color: "white",
                }}
              >
                Context
              </h6>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.6,
                  color: "white",
                }}
              >
                {projectData.overview.context}
              </p>
            </div>

            {/* Bottom Right - Tools */}
            <div
              style={{
                alignSelf: "end",
                justifySelf: "end",
                width: "30vw",
                textAlign: "left",
                padding: "var(--space-4)",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(6px)",
                borderRadius: "1rem",
              }}
            >
              <h6
                style={{
                  
                  marginBottom: "var(--space-2)",
                  fontSize: "var(--text-sm)",
                  textTransform: "uppercase",
                  opacity: 0.8,
                  fontFamily: "var(--font-family-roboto-mono)",
                  color: "white",
                  textAlign: "right",
                }}
              >
                Tools
              </h6>
              <div
                style={{
                  justifyContent: "flex-end",
                  textAlign: "right",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {projectData.overview.tools?.map((tool, index) => (
                  <span
                    key={index}
                    style={{
                      border: "var(--border-width) solid var(--border-color)",
                      padding: "var(--space-1) var(--space-2)",
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-sm)",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
)}

        {/* 3. Research & Discovery */}
       <motion.section
          id="research"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          }}
          style={{ marginBottom: "0" }}
        >
          {/* Section Header */}
          <div
            style={{
              textAlign: "center",
              borderBottom: "var(--border-width) solid var(--border-color)",
              padding: "var(--space-3)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h2>Research & Discovery</h2>
          </div>

          {/* Analysis Summary */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
          >
            {/* Insights Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-4)",
                marginBottom: "var(--space-6)",
                paddingInline: "var(--space-6)",
              }}
            >
              {(
                projectData.research?.strategicInsights?.length > 0
                  ? projectData.research.strategicInsights.map((insightObj, index) => ({
                      title: insightObj.title || `Insight 0${index + 1}`,
                      description: insightObj.insight,
                    }))
                  : [
                      {
                        title: "User Experience Gaps",
                        description:
                          projectData.research?.keyFindings ||
                          "Research revealed pain points in current workflows and highlighted opportunities to streamline experiences through improved hierarchy and consistency.",
                      },
                      {
                        title: "Competitive Positioning",
                        description:
                          "Competitor analysis identified differentiation opportunities around clarity, scalability, and visual cohesion in brand and UX systems.",
                      },
                      {
                        title: "Design Strategy Impact",
                        description:
                          projectData.research?.designImplications ||
                          "Findings directly shaped the design principles — simplicity, adaptability, and coherence — ensuring user and brand goals aligned across all touchpoints.",
                      },
                    ]
              ).map((insight, index) => (
                <div
                  key={index}
                  style={{
                    padding: "var(--space-4)",
                    backgroundColor: "#131313",
                    border: "var(--border-width) solid var(--border-color)",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <h6
                      style={{
                        color:"white",
                        marginBottom: "var(--space-2)",
                        paddingBottom: "var(--space-2)",
                        borderBottom: "solid 1px white",
                      }}
                    >
                      {insight.title}
                    </h6>

                    <p
                      style={{
                        fontFamily: "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-light)",
                        color: "#ffffff",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}


            </div>

          {/* Documentation Links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--space-3)",
              borderBottom: "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-6)",
            }}
          >
            {/* Competitor Analysis */}
            {projectData.research.competitorAnalysis && (
              <motion.button
                onClick={() =>
                  setActiveResearchModal({
                    type: "carousel",
                    data: projectData.research.competitorAnalysis,
                  })
                }
                style={linkButtonStyle}
                whileHover={{ x: 4, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <span>Competitor Analysis</span>
                <ExternalLink size={16} />
              </motion.button>
            )}

            {/* Audience Research */}
            {projectData.research.audienceResearchLink && (
              <motion.button
                onClick={() =>
                  setActiveResearchModal({
                    type: "pdf",
                    data: projectData.research.audienceResearchLink,
                  })
                }
                style={linkButtonStyle}
                whileHover={{ x: 4, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <span>Audience Research</span>
                <ExternalLink size={16} />
              </motion.button>
            )}

            {/* Additional Docs */}
            {projectData.research.additionalDocs?.map((doc, i) => (
              <motion.button
                key={i}
                onClick={() =>
                  setActiveResearchModal({
                    type: doc.type === "PDF" ? "pdf" : "image",
                    data: doc,
                  })
                }
                style={linkButtonStyle}
                whileHover={{ x: 4, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <span>{doc.title}</span>
                <ExternalLink size={16} />
              </motion.button>
            ))}

            <AnimatePresence>
            {activeResearchModal?.type === "carousel" && (
              <CompetitorCarouselModal
                competitors={activeResearchModal.data.competitors}
                overview={activeResearchModal.data.overview}
                documentLink={activeResearchModal.data.documents?.[0]?.url}
                onClose={() => setActiveResearchModal(null)}
              />
            )}

            {activeResearchModal?.type === "pdf" && (
              <PdfEmbedModal
                url={
                  typeof activeResearchModal.data === "string"
                    ? activeResearchModal.data
                    : activeResearchModal.data.url
                }
                onClose={() => setActiveResearchModal(null)}
              />
            )}

            {activeResearchModal?.type === "image" && (
              <ImageModal
                src={activeResearchModal.data.url}
                title={activeResearchModal.data.title}
                onClose={() => setActiveResearchModal(null)}
              />
            )}
            
          </AnimatePresence>

          </div>

          </motion.section>
       </motion.section>



        {/* 4. Ideation */}
        <motion.section 
          id="ideation"
          className="flex flex-col items-center justify-center text-center"
        >
          <div
            style={{
              width: "100%",
              borderBottom: "var(--border-width) solid var(--border-color)",
              padding: "var(--space-3)",
            }}
          >
            <h2>Ideation</h2>
          </div>
            {project.caseStudy?.ideation?.directions && (
              <IdeationCarousel directions={project.caseStudy.ideation.directions} />
            )}
        </motion.section>

      <motion.section
        id="deliverables"
        style={{
          marginBottom: "var(--space-12)",
          backgroundColor: "black",
          color: "white",
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.6,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid white",
            padding: "var(--space-3)",
            textAlign: "center",
          }}
        >
          <h1>Final Deliverables</h1>
        </div>
        {/* Summary & Links */}
        <div
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              textAlign: "left",
              borderBottom: "var(--border-width) solid white",
              alignItems: "center",
              justifyContent: "left",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color:"white" 
            }}
          >
            <div style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.9)", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  maxWidth: "1080px",
                  width: "100%",
                  padding: "var(--space-6)",
                  gap: "var(--space-2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                {/* Summary */}
                <h4 style={{ color: "white", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                  Summary
                </h4>
                <p style={{ color: "white", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                  {(expanded ? summaries : summaries.slice(0, 1)).map((paragraph, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: "block",
                        marginBottom: "var(--space-2)",
                        lineHeight: "1.6",
                      }}
                    >
                      {paragraph}
                      {expanded ? "" : idx === 0 ? ".." : ""}
                    </span>
                  ))}

                  {summaries.length > 1 && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontFamily: "var(--font-family-inter)",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                        marginTop: "var(--space-1)",
                      }}
                    >
                      {expanded ? "Show less" : "Show more"}
                    </button>
                  )}
                </p>
                <div style={{ width: "100%", display: "flex", flexDirection: "row", gap: "var(--space-4)" }}>

                {/* Relevant Links */}
                {projectData.deliverables?.links &&
                  projectData.deliverables.links.length > 0 && (
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "var(--space-2)",
                      }}
                    >
                      <h4
                        style={{
                          marginTop: "var(--space-4)",
                          color: "white",
                          fontSize: "clamp(1rem, 2vw, 1.25rem)",
                        }}
                      >
                        Relevant links:
                      </h4>

                      {projectData.deliverables.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.5rem",
                            cursor: "pointer",
                            padding: "var(--space-2) var(--space-4)",
                            border: "var(--border-width) solid white",
                            backgroundColor: "transparent",
                            fontFamily: "var(--font-family-inter)",
                            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                            fontWeight: "var(--font-weight-medium)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "0.25rem",
                          }}
                          whileHover={{
                            x: 4,
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
                        >
                          {link.name}
                          <ExternalLink size={16} color="white" />
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Full-Bleed Bento Grid */}
        <div>
          {(() => {
            const gridItems =
              projectData.deliverables?.items?.map((d) => ({
                name: d.name,
                image: d.image,
                description: d.description,
                tags: d.tags ?? [],
                link: d.link,
              })) || [];
            return <BentoGrid items={gridItems} />;
          })()}
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
      </div>
    </div>
  );
}