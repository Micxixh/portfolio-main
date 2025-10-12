"use client";

import { useState, useCallback, useMemo } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ErrorBoundary from "./components/ErrorBoundary";
import { Project } from "./api/optimizedProjectsApi.ts";
import { useProjects } from "./hooks/useProjects";
import { getNextProject } from "./utils/projectHelpers";

export default function App() {
  const { projects, loading, error } = useProjects();
  const [showHeaderNav, setShowHeaderNav] = useState(false);
  const [triggerAboutTransition, setTriggerAboutTransition] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Memoize handlers to prevent unnecessary re-renders
  const handleAboutClick = useCallback(() => {
    // Stage 1: Show header nav (portrait shrinks vertically)
    setShowHeaderNav(true);
    setCurrentPage("ABOUT");

    // Stage 2: After header appears, trigger about transition (portrait moves left)
    setTimeout(() => {
      setTriggerAboutTransition(true);
    }, 400); // Wait for header animation to complete
  }, []);

  const handleHomeClick = useCallback(() => {
    setTriggerAboutTransition(false);
    setCurrentPage("");
    setSelectedProject(null);
    setTimeout(() => {
      setShowHeaderNav(false);
    }, 300); // Wait for content to slide back before header hides
  }, []);

  const handleProjectsClick = useCallback(() => {
    // Stage 1: Show header nav
    setShowHeaderNav(true);
    setCurrentPage("PROJECTS");
    setSelectedProject(null);

    // Reset about transition if it was active
    if (triggerAboutTransition) {
      setTriggerAboutTransition(false);
    }
  }, [triggerAboutTransition]);

  const handleContactClick = useCallback(() => {
    // Stage 1: Show header nav
    setShowHeaderNav(true);
    setCurrentPage("CONTACT");
    setSelectedProject(null);

    // Reset about transition if it was active
    if (triggerAboutTransition) {
      setTriggerAboutTransition(false);
    }
  }, [triggerAboutTransition]);

  const handleProjectDetailClick = useCallback((project: Project) => {
    // Check if this is the graphics project
    if ('isGraphicsProject' in project && project.isGraphicsProject) {
      // Navigate to graphics page instead of project detail
      setShowHeaderNav(true);
      setCurrentPage("GRAPHICS");
      setSelectedProject(null);
    } else {
      // Normal project detail navigation
      setShowHeaderNav(true);
      setCurrentPage("PROJECT_DETAIL");
      setSelectedProject(project);
    }

    // Reset about transition if it was active
    if (triggerAboutTransition) {
      setTriggerAboutTransition(false);
    }
  }, [triggerAboutTransition]);

  const handleBackToProjects = useCallback(() => {
    // Handle navigation from both project detail and graphics pages
    if ((currentPage === "PROJECT_DETAIL" && selectedProject) || currentPage === "GRAPHICS") {
      // First clear the selected project
      setSelectedProject(null);
      
      // Then set the page to projects with a small delay to ensure smooth transition
      setTimeout(() => {
        setCurrentPage("PROJECTS");
      }, 50);
      
      // Reset about transition if it was active
      if (triggerAboutTransition) {
        setTriggerAboutTransition(false);
      }
    }
  }, [currentPage, selectedProject, triggerAboutTransition]);

  const handleNextProject = useCallback(() => {
    if (projects.length > 0) {
      let currentProject = selectedProject;
      
      // If we're on the graphics page, we need to find the graphics project as our current reference
      if (currentPage === "GRAPHICS" && !selectedProject) {
        currentProject = projects.find(p => 'isGraphicsProject' in p && p.isGraphicsProject) || null;
      }
      
      if (currentProject) {
        const nextProject = getNextProject(projects, currentProject);
        
        // Check if the next project is a graphics project
        if ('isGraphicsProject' in nextProject && nextProject.isGraphicsProject) {
          // Navigate to graphics page instead of project detail
          setShowHeaderNav(true);
          setCurrentPage("GRAPHICS");
          setSelectedProject(null);
        } else {
          // Normal project detail navigation
          setShowHeaderNav(true);
          setCurrentPage("PROJECT_DETAIL");
          setSelectedProject(nextProject);
        }
      }
    }
  }, [projects, selectedProject, currentPage]);

  const handlePageClick = useCallback((page: string) => {
    setCurrentPage(page);
    if (page === "ABOUT") {
      if (!triggerAboutTransition) {
        setTriggerAboutTransition(true);
      }
    } else if (page === "PROJECTS") {
      handleProjectsClick();
    } else if (page === "CONTACT") {
      handleContactClick();
    }
    
    // Clear selected project when navigating to other pages
    if (page !== "PROJECT_DETAIL") {
      setSelectedProject(null);
    }
  }, [triggerAboutTransition, handleProjectsClick, handleContactClick]);

  // Memoize class names and styles to prevent recalculation
  const containerClassName = useMemo(() => 
    `w-full h-screen relative hide-scrollbar ${
      currentPage === "PROJECTS" || currentPage === "GRAPHICS"
        ? "md:overflow-hidden overflow-y-auto mobile-projects-scroll" 
        : "overflow-hidden"
    }`, [currentPage]
  );

  const containerStyle = useMemo(() => ({
    backgroundColor: "var(--bg-primary)",
    minHeight: "100dvh", // Support for dynamic viewport height on mobile
    overflowX: "hidden", // Explicitly prevent horizontal scrolling
  }), []);

  // Early return for loading state to prevent unnecessary rendering
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <p style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-light)",
          color: "var(--text-primary)"
        }}>
          Loading...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <p style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-light)",
          color: "var(--text-primary)"
        }}>
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div
        className={containerClassName}
        style={containerStyle}
      >
        <Header
          showNav={showHeaderNav}
          onHomeClick={handleHomeClick}
          currentPage={currentPage}
          onPageClick={handlePageClick}
          onBackToProjects={handleBackToProjects}
        />
        <MainContent
          onAboutClick={handleAboutClick}
          showHeaderNav={showHeaderNav}
          triggerAboutTransition={triggerAboutTransition}
          currentPage={currentPage}
          onProjectsClick={handleProjectsClick}
          onContactClick={handleContactClick}
          onProjectDetailClick={handleProjectDetailClick}
          onBackToProjects={handleBackToProjects}
          selectedProject={selectedProject}
          onNextProject={handleNextProject}
          projects={projects}
          projectsLoading={loading}
          projectsError={error}
        />
      </div>
    </ErrorBoundary>
  );
}