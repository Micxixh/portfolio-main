"use client";

import { useState, useEffect, memo, useMemo, useCallback, lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import NavRow from "./NavRow";
import AboutAccordion from "./AboutAccordion";
import Contact from "./Contact";
import { Project } from "../api/optimizedProjectsApi.ts";
// Lazy load heavy components
const Projects = lazy(() => import("./Projects"));
const Graphics = lazy(() => import("./Graphics"));
const ProjectDetail = lazy(() => import("./ProjectDetail"));

// Loading component
const ComponentLoader = ({ componentName }: { componentName: string }) => (
  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
    <p style={{
      fontFamily: "var(--font-family-roboto-mono)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-light)",
      color: "var(--text-primary)"
    }}>
      Loading {componentName}...
    </p>
  </div>
);

interface MainContentProps {
  onAboutClick: () => void;
  showHeaderNav: boolean;
  triggerAboutTransition: boolean;
  currentPage: string;
  onProjectsClick: () => void;
  onContactClick: () => void;
  onProjectDetailClick: (project: Project) => void;
  onBackToProjects: () => void;
  selectedProject: Project | null;
  onNextProject: () => void;
  projects: Project[];
  projectsLoading?: boolean;
  projectsError?: string | null;
}

// Static animation configurations to prevent recreation on every render
const ANIMATIONS = {
  portraitMobile: {
    initial: { x: 0 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
  heroText: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  contentArea: {
    initial: { x: "100%" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  },
  navRow: {
    initial: { x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Memoized navigation component to prevent unnecessary re-renders
const NavigationSection = memo(({ 
  isAboutView, 
  isProjectsView, 
  isContactView, 
  isGraphicsView, 
  isProjectDetailView,
  onProjectsClick,
  onAboutClick,
  onContactClick,
  isMobile = false
}: {
  isAboutView: boolean;
  isProjectsView: boolean;
  isContactView: boolean;
  isGraphicsView: boolean;
  isProjectDetailView: boolean;
  onProjectsClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  isMobile?: boolean;
}) => {
  const shouldSlideOut = isAboutView || isProjectsView || isContactView || isGraphicsView || isProjectDetailView;
  
  const navItems = [
    { text: "PROJECTS", onClick: onProjectsClick, delay: isMobile ? 0.15 : 0.3 },
    { text: "ABOUT", onClick: onAboutClick, delay: isMobile ? 0.3 : 0.15 },
    { text: "CONTACT", onClick: onContactClick, delay: isMobile ? 0.45 : 0 }
  ];

  return (
    <div
      className={isMobile ? "mobile-navigation" : "hidden md:flex flex-col"}
      style={{
        gap: isMobile ? "var(--space-2)" : "var(--section-gap)",
        paddingBottom: isMobile ? "var(--space-4)" : "var(--space-8)",
        paddingLeft: isMobile ? "var(--mobile-content-padding-x)" : "var(--space-3)",
        paddingRight: isMobile ? "var(--mobile-content-padding-x)" : "0",
        width: "100%",
      }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={item.text}
          {...ANIMATIONS.navRow}
          animate={{
            x: shouldSlideOut ? (isMobile ? "-100vw" : "-100vw") : 0,
          }}
          transition={{
            ...ANIMATIONS.navRow.transition,
            delay: shouldSlideOut ? item.delay : (isMobile ? 0.45 + (index * 0.05) : 0.3 - (index * 0.15)),
          }}
        >
          <NavRow text={item.text} onClick={item.onClick} />
        </motion.div>
      ))}
    </div>
  );
});

NavigationSection.displayName = "NavigationSection";

// Memoized hero text component
const HeroTextSection = memo(({ 
  showHeaderNav, 
  isAboutView, 
  isProjectsView, 
  isContactView, 
  isGraphicsView, 
  isProjectDetailView,
  isMobile = false 
}: {
  showHeaderNav: boolean;
  isAboutView: boolean;
  isProjectsView: boolean;
  isContactView: boolean;
  isGraphicsView: boolean;
  isProjectDetailView: boolean;
  isMobile?: boolean;
}) => {
  const shouldSlideOut = isAboutView || isProjectsView || isContactView || isGraphicsView || isProjectDetailView;

  return (
    <motion.div
      className={isMobile ? "mobile-hero-text" : "hidden md:flex items-center flex-1"}
      style={{
        paddingBottom: isMobile ? "var(--space-4)" : "var(--space-8)",
        paddingLeft: isMobile ? "var(--mobile-content-padding-x)" : "var(--content-padding-x)",
        paddingRight: isMobile ? "var(--mobile-content-padding-x)" : "0",
        paddingTop: !isMobile && showHeaderNav ? "0px" : isMobile ? "0" : "var(--header-padding-top)",
        textAlign: isMobile ? "center" : "left",
      }}
      initial={{ x: 0 }}
      animate={{
        x: shouldSlideOut ? "-100vw" : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: shouldSlideOut ? 0 : (isMobile ? 0.3 : 0.45),
      }}
    >
      <div style={{ paddingLeft: isMobile ? "0" : "var(--space-2)" }}>
        <motion.h3
          style={{
            paddingBottom: isMobile ? "var(--space-3)" : "var(--space-2)",
          }}
          {...ANIMATIONS.heroText}
          transition={{
            ...ANIMATIONS.heroText.transition,
            delay: isMobile ? 0.4 : 0.6,
          }}
        >
          { "BRAND Designer"}
        </motion.h3>

        <motion.p
          style={{
            fontStyle: "italic",
            lineHeight: "1.6",
            textAlign: isMobile ? "center" : "left",
            margin: 0,
            fontSize: isMobile ? "var(--text-base)" : "inherit",
          }}
          {...ANIMATIONS.heroText}
          transition={{
            ...ANIMATIONS.heroText.transition,
            delay: isMobile ? 0.6 : 0.8,
          }}
        >
          {isMobile ? (
            <>
              Design that whispers but speaks volumes.
              <br />
              Clarity. Emotion. Impact.
            </>
          ) : (
            <>
              Shaping stories and systems that move culture forward.
              <br />
              Clarity. Emotion. Impact.
            </>
          )}
        </motion.p>
      </div>
    </motion.div>
  );
});

HeroTextSection.displayName = "HeroTextSection";

export default function MainContent({
  onAboutClick,
  showHeaderNav,
  triggerAboutTransition,
  currentPage,
  onProjectsClick,
  onContactClick,
  onProjectDetailClick,
  onBackToProjects,
  selectedProject,
  onNextProject,
  projects,
  projectsLoading = false,
  projectsError = null,
}: MainContentProps) {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "about"
    | "projects"
    | "contact"
    | "graphics"
    | "project_detail"
  >("home");

  // Memoize handlers to prevent recreation
  const handleAboutClick = useCallback(() => {
    onAboutClick();
  }, [onAboutClick]);

  const handleProjectsClick = useCallback(() => {
    onProjectsClick();
  }, [onProjectsClick]);

  const handleContactClick = useCallback(() => {
    onContactClick();
  }, [onContactClick]);

  // Memoize view states to prevent unnecessary re-renders
  const viewStates = useMemo(() => ({
    isAboutView: currentView === "about",
    isProjectsView: currentView === "projects",
    isContactView: currentView === "contact",
    isGraphicsView: currentView === "graphics",
    isProjectDetailView: currentView === "project_detail",
    isHomeView: currentView === "home"
  }), [currentView]);

  // Handle view changes from App
  useEffect(() => {
    if (currentPage === "PROJECT_DETAIL") {
      setCurrentView("project_detail");
    } else if (currentPage === "PROJECTS") {
      setCurrentView("projects");
    } else if (currentPage === "CONTACT") {
      setCurrentView("contact");
    } else if (currentPage === "GRAPHICS") {
      setCurrentView("graphics");
    } else if (
      currentPage === "ABOUT" ||
      triggerAboutTransition
    ) {
      setCurrentView("about");
    } else if (currentPage === "" && !triggerAboutTransition) {
      setCurrentView("home");
    }
  }, [triggerAboutTransition, currentPage]);

  const { isAboutView, isProjectsView, isContactView, isGraphicsView, isProjectDetailView, isHomeView } = viewStates;

  return (
    <div
      className="relative flex w-full h-full"
      style={{
        height: "100vh",
        paddingTop:
          showHeaderNav &&
          !isProjectsView &&
          !isContactView &&
          !isGraphicsView &&
          !isProjectDetailView
            ? "var(--header-padding-top)"
            : "0px",
      }}
    >
      {/* Home Content Area - Desktop: Left 2/3, Mobile: Full width centered vertically */}
      <div
        className={`flex flex-col w-full md:w-2/3 hide-scrollbar ${isProjectsView || isContactView || isGraphicsView || isProjectDetailView ? "md:block hidden" : ""}`}
        style={{
          height: "100%",
          justifyContent: showHeaderNav
            ? "flex-start"
            : "center", // Center content on mobile homepage
          paddingTop: showHeaderNav
            ? "0px"
            : "var(--mobile-header-height)", // Account for header on homepage
        }}
      >
        {/* Mobile Layout Container - Centers content vertically */}
        <div
          className="flex flex-col md:hidden mobile-homepage-container"
          style={{
            height: showHeaderNav ? "100%" : "auto",
            justifyContent: showHeaderNav
              ? "flex-start"
              : "center",
            minHeight: showHeaderNav
              ? "auto"
              : "calc(100vh - var(--mobile-header-height))",
          }}
        >
          {/* Mobile Portrait Image - Only visible on mobile */}
          <motion.div
            className="mobile-portrait"
            style={{
              paddingLeft: "var(--mobile-content-padding-x)",
              paddingRight: "var(--mobile-content-padding-x)",
              paddingBottom: "var(--space-3)",
              height: "35vh",
              maxHeight: "280px",
              marginBottom: "var(--space-3)",
            }}
            {...ANIMATIONS.portraitMobile}
            animate={{
              x: isAboutView || isProjectsView || isContactView || isGraphicsView || isProjectDetailView
                ? "-100vw"
                : 0,
            }}
            transition={{
              ...ANIMATIONS.portraitMobile.transition,
              delay: isAboutView || isProjectsView || isContactView || isGraphicsView || isProjectDetailView
                ? 0
                : 0.2,
            }}
          >
            <ImageWithFallback
              src="https://i.postimg.cc/kXyNHw61/image.png"
              alt="Micaiah Douglas Portrait"
              className="w-full h-full object-cover"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                border: "var(--border-width) solid var(--border-color)",
              }}
            />
          </motion.div>

          {/* Mobile Hero Text */}
          <HeroTextSection
            showHeaderNav={showHeaderNav}
            isAboutView={isAboutView}
            isProjectsView={isProjectsView}
            isContactView={isContactView}
            isGraphicsView={isGraphicsView}
            isProjectDetailView={isProjectDetailView}
            isMobile={true}
          />

          {/* Mobile Navigation Section */}
          <NavigationSection
            isAboutView={isAboutView}
            isProjectsView={isProjectsView}
            isContactView={isContactView}
            isGraphicsView={isGraphicsView}
            isProjectDetailView={isProjectDetailView}
            onProjectsClick={handleProjectsClick}
            onAboutClick={handleAboutClick}
            onContactClick={handleContactClick}
            isMobile={true}
          />
        </div>

        {/* Desktop Hero Text Section */}
        <HeroTextSection
          showHeaderNav={showHeaderNav}
          isAboutView={isAboutView}
          isProjectsView={isProjectsView}
          isContactView={isContactView}
          isGraphicsView={isGraphicsView}
          isProjectDetailView={isProjectDetailView}
          isMobile={false}
        />

        {/* Desktop Navigation Section */}
        <NavigationSection
          isAboutView={isAboutView}
          isProjectsView={isProjectsView}
          isContactView={isContactView}
          isGraphicsView={isGraphicsView}
          isProjectDetailView={isProjectDetailView}
          onProjectsClick={handleProjectsClick}
          onAboutClick={handleAboutClick}
          onContactClick={handleContactClick}
          isMobile={false}
        />
      </div>

      {/* About Content Area - Desktop: Right 1/2, Mobile: Full width - Slides in from right when about view */}
      <motion.div
        className="absolute top-0 right-0 w-full md:w-1/2 mobile-about"
        style={{
          height: "100%",
          paddingLeft: "var(--mobile-content-padding-x)",
          paddingRight: "var(--mobile-content-padding-x)",
          paddingTop: showHeaderNav
            ? "var(--space-12)"
            : "var(--space-12)",
          paddingBottom: "var(--mobile-content-padding-y)",
          overflow: "hidden", // Prevent any scrolling at this level
          zIndex: isAboutView
            ? 10
            : isProjectsView
              ? 5
              : isContactView
                ? 5
                : isGraphicsView
                  ? 5
                  : isProjectDetailView
                    ? 5
                    : 10,
        }}
        {...ANIMATIONS.contentArea}
        animate={{
          x: isAboutView
            ? 0
            : isProjectsView
              ? "-200%"
              : isContactView
                ? "-200%"
                : isGraphicsView
                  ? "-200%"
                  : isProjectDetailView
                    ? "-200%"
                    : "100%",
        }}
        transition={{
          ...ANIMATIONS.contentArea.transition,
          delay: isAboutView ? 0.2 : 0,
        }}
      >

        {/* Scrollable Accordion Container - Only this part scrolls */}
        <motion.div
          className="mobile-about-accordion-container hide-scrollbar"
          style={{
            height:"100%", // Full height minus header, padding, and title block
            overflowY: "auto",
            padding:"none",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch", // Smooth iOS scrolling
          }}
          initial={{ x: 50 }}
          animate={{
            x: isAboutView ? 0 : 50,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: isAboutView ? 0.5 : 0,
          }}
        >
          <AboutAccordion />
        </motion.div>
      </motion.div>

      {/* Projects Content Area - Full width, slides in from right, mobile takes full vw */}
      <motion.div
        className={`absolute md:absolute`}
        style={{
          width: "100vw", // Force full viewport width on all devices
          height: "100%", // Full height on all devices
          left: "0", // Ensure it starts from the left edge
          top: "0", // Ensure it starts from the top
          paddingLeft: 0, // Remove padding - Projects component handles its own
          paddingRight: 0,
          paddingTop: 0, // Remove top padding - Projects component handles its own spacing
          paddingBottom: 0, // Remove padding - Projects component handles its own
          pointerEvents: isProjectsView ? "auto" : "none",
          zIndex: isProjectsView
            ? 10
            : isProjectDetailView
              ? 1
              : 5,
        }}
        {...ANIMATIONS.contentArea}
        animate={{
          x: isProjectsView ? 0 : "100vw",
        }}
        transition={{
          ...ANIMATIONS.contentArea.transition,
          delay: isProjectsView ? 0.4 : 0,
        }}
      >
        <Suspense fallback={<ComponentLoader componentName="Projects" />}>
          <Projects
            onProjectClick={onProjectDetailClick}
            projects={projects}
            loading={projectsLoading}
            error={projectsError}
          />
        </Suspense>
      </motion.div>

      {/* Contact Content Area - Full width, slides in from right */}
      <motion.div
        className="absolute inset-0 mobile-contact"
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: "var(--mobile-content-padding-x)",
          paddingRight: "var(--mobile-content-padding-x)",
          paddingTop: showHeaderNav
            ? "var(--space-12)"
            : "var(--space-12)",
          paddingBottom: "var(--mobile-content-padding-y)",
          pointerEvents: isContactView ? "auto" : "none",
          zIndex: isContactView ? 10 : 5,
        }}
        {...ANIMATIONS.contentArea}
        animate={{
          x: isContactView ? 0 : "100%",
        }}
        transition={{
          ...ANIMATIONS.contentArea.transition,
          delay: isContactView ? 0.4 : 0,
        }}
      >
        {/* Contact Content */}
        <motion.div
          initial={{ x: 50 }}
          animate={{
            x: isContactView ? 0 : 50,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: isContactView ? 0.7 : 0,
          }}
        >
          <Contact />
        </motion.div>
      </motion.div>

      {/* Graphics Content Area - Full width, slides in from right, mobile takes full vw */}
      <motion.div
        className={`absolute md:absolute`}
        style={{
          width: "100vw", // Force full viewport width on all devices
          height: "100%", // Full height on all devices
          left: "0", // Ensure it starts from the left edge
          top: "0", // Ensure it starts from the top
          paddingLeft: 0, // Remove padding - Graphics component handles its own
          paddingRight: 0,
          paddingTop: 0, // Remove top padding - Graphics component handles its own spacing
          paddingBottom: 0, // Remove padding - Graphics component handles its own
          pointerEvents: isGraphicsView ? "auto" : "none",
          zIndex: isGraphicsView
            ? 10
            : isProjectDetailView
              ? 1
              : 5,
        }}
        {...ANIMATIONS.contentArea}
        animate={{
          x: isGraphicsView ? 0 : "100vw",
        }}
        transition={{
          ...ANIMATIONS.contentArea.transition,
          delay: isGraphicsView ? 0.4 : 0,
        }}
      >
        <Suspense fallback={<ComponentLoader componentName="Graphics" />}>
          <Graphics onBackToProjects={onBackToProjects} />
        </Suspense>
      </motion.div>

      {/* Project Detail Content Area - Full width, slides in from right */}
      <motion.div
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: isProjectDetailView ? "auto" : "none",
          zIndex: isProjectDetailView
            ? 10
            : isProjectsView
              ? 1
              : 5,
        }}
        {...ANIMATIONS.contentArea}
        animate={{
          x: isProjectDetailView ? 0 : "100%",
        }}
        transition={{
          ...ANIMATIONS.contentArea.transition,
          delay: isProjectDetailView ? 0.4 : 0,
        }}
      >
        {selectedProject && (
          <Suspense fallback={<ComponentLoader componentName="Project Detail" />}>
            <ProjectDetail
              project={selectedProject}
              isOpen={isProjectDetailView}
              onClose={() => {}} // Not used in page mode
              onBackToProjects={onBackToProjects}
              onNextProject={onNextProject}
              projects={projects}
            />
          </Suspense>
        )}
      </motion.div>

      {/* Portrait Area - Hidden on mobile, visible on tablet/desktop - First shrinks vertically, then moves left */}
      <motion.div
        className="absolute top-0 hidden md:block"
        animate={{
          x: isAboutView
            ? 0
            : isProjectsView
              ? "-200vw"
              : isContactView
                ? "-200vw"
                : isGraphicsView
                  ? "-200vw"
                  : isProjectDetailView
                    ? "-200vw"
                    : "66.666vw", // Home: right position, About: left position, Projects/Contact/Graphics/ProjectDetail: far off-screen left
          width: isAboutView ? "50%" : "33.333%", // Home: 1/3 width, About: 1/2 width, Others: doesn't matter (hidden)
          height: showHeaderNav
            ? "calc(100vh - var(--header-height))"
            : "100vh", // Shrink when header appears
          top: showHeaderNav ? "var(--header-height)" : "0px", // Move down when header appears
        }}
        transition={{
          height: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
          top: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
          x: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: isAboutView ? 0.3 : 0,
          },
          width: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: isAboutView ? 0.3 : 0,
          },
        }}
      >
        <ImageWithFallback
          src="https://i.postimg.cc/kXyNHw61/image.png"
          alt="Micaiah Douglas Portrait"
          className="w-full h-full object-cover"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            border: "var(--border-width) solid var(--border-color)",
          }}
        />
      </motion.div>
    </div>
  );
}