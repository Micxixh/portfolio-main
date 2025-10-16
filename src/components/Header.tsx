"use client";

import { motion } from "motion/react";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  showNav: boolean;
  onHomeClick: () => void;
  currentPage?: string;
  onPageClick?: (page: string) => void;
  onBackToProjects?: () => void;
}

export default function Header({
  showNav,
  onHomeClick,
  currentPage = "",
  onPageClick,
  onBackToProjects,
}: HeaderProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 w-full"
      style={{
        backgroundColor: "var(--bg-primary)", // Always opaque background
        zIndex: 100,
      }}
    >
      <div
        className="fixed left-0 w-full z-50"
        style={{
          borderBottom: "solid 1px black",
          paddingLeft: "var(--space-3)",
          paddingRight: "var(--space-3)",
          paddingTop: "var(--space-2)",
          top: "0",
          zIndex: "0",
          backgroundColor: "var(--bg-primary)", // Always transparent for blend context
          isolation: "isolate", // Create stacking context for blend modes
        }}
      >
        {/* Top Row - Name and Navigation */}
        <div
          className="flex justify-between items-center w-full"
          style={{ marginBottom: "var(--space-2)" }}
        >
          <motion.div
            className="cursor-pointer mobile-header-name"
            style={{
              fontFamily: "var(--font-family-inter)",
              fontSize: "var(--header-name-size)",
              fontWeight: "var(--font-weight-light)",
              color: "var(--text-primary)",
              textTransform: "none",
              lineHeight: 1.5,
            }}
            onClick={onHomeClick}
          >
            <img src="https://res.cloudinary.com/dfsmaylfo/image/upload/v1760560404/Asset_1_4x_jwailg.png" alt="Micaiah Douglas Logo" style={{ height: '40px' }} />
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: showNav ? 0 : -50,
              opacity: showNav ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="hidden md:flex mt-2 border"
            style={{borderRadius:"3rem", overflow:"hidden"}}
          >
{["ABOUT", "PROJECTS", "CONTACT"].map((item, index) => {
  const isActive =
    currentPage === item ||
    (currentPage === "PROJECT_DETAIL" && item === "PROJECTS") ||
    (currentPage === "GRAPHICS" && item === "PROJECTS");

  return (
    <p
      key={item}
      className="cursor-pointer transition-all duration-300 ease-in-out"
      style={{
        width: "128px",
        height: "var(--space-5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isActive
          ? "var(--text-primary)"
          : "transparent",
        color: isActive
          ? "var(--text-inverse)"
          : "var(--text-primary)",
        borderInline: "var(--border-width) solid var(--border-color)",
  
        borderRadius: isActive ? "0rem" : "0rem",
        transition: "all 0.3s ease-in-out",
      }}
      onClick={() => {
        if (
          (currentPage === "PROJECT_DETAIL" ||
            currentPage === "GRAPHICS") &&
          item === "PROJECTS"
        ) {
          onBackToProjects?.();
        } else {
          onPageClick?.(item);
        }
      }}
    >
      {item}
    </p>
  );
})}



          </motion.nav>

          {/* Mobile Hamburger Menu - Always visible on mobile */}
          <div className="md:hidden mt-2">
            <MobileMenu
              showNav={true} // Always show on mobile
              currentPage={currentPage}
              onPageClick={onPageClick}
              onBackToProjects={onBackToProjects}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className="blend-difference"
          style={{
            width: "100%",
            height: "var(--border-width)",
            backgroundColor: "var(--border-color)",
          }}
        />
      </div>
    </motion.div>
  );
}