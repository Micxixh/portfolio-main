"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
  showNav: boolean; // Keep for consistency, but not used for visibility
  currentPage?: string;
  onPageClick?: (page: string) => void;
  onBackToProjects?: () => void;
}

export default function MobileMenu({
  showNav,
  currentPage = "",
  onPageClick,
  onBackToProjects,
}: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (page: string) => {
    // Close menu first to ensure clean navigation
    setIsMenuOpen(false);
    
    // Use requestAnimationFrame to ensure menu close animation starts before navigation
    requestAnimationFrame(() => {
      if (
        (currentPage === "PROJECT_DETAIL" || currentPage === "GRAPHICS") &&
        page === "PROJECTS"
      ) {
        onBackToProjects?.();
      } else {
        onPageClick?.(page);
      }
    });
  };

  return (
    <>
      {/* Hamburger Menu Button - Always visible on mobile */}
      <motion.button
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center cursor-pointer mobile-hamburger-button mobile-menu-button"
        style={{
          width: "44px", // Touch target minimum
          height: "44px",
          padding: "var(--space-2)",
        }}
        aria-label="Toggle navigation menu"
      >
        <motion.span
          className="block"
          style={{
            width: "24px",
            height: "1px",
            backgroundColor: "var(--text-primary)",
            marginBottom: "4px",
          }}
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="block"
          style={{
            width: "24px",
            height: "1px",
            backgroundColor: "var(--text-primary)",
            marginBottom: "4px",
          }}
          animate={{
            opacity: isMenuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="block"
          style={{
            width: "24px",
            height: "1px",
            backgroundColor: "var(--text-primary)",
          }}
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 mobile-menu-overlay"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 200,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-0 top-0 h-full mobile-hamburger-menu"
              style={{
                width: "280px",
                backgroundColor: "var(--bg-primary)",
                borderLeft:
                  "var(--border-width) solid var(--border-color)",
                paddingTop:
                  currentPage === ""
                    ? "var(--mobile-header-height)"
                    : "var(--space-15)", // Different padding for homepage vs other pages
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Items */}
              <nav
                style={{
                  padding: "var(--space-4) var(--space-3)",
                }}
              >
                {["ABOUT", "PROJECTS", "CONTACT"].map(
                  (item, index) => (
                    <motion.button
                      key={item}
                      className="w-full text-left cursor-pointer mobile-nav-row relative"
                      style={{
                        minHeight: "56px", // Larger touch target for mobile
                        paddingTop: "var(--space-2)",
                        paddingBottom: "var(--space-2)",
                        paddingLeft: "var(--space-3)",
                        paddingRight: "var(--space-3)",
                        marginBottom: "var(--space-1)",
                        borderBottom:
                          index < 2
                            ? "var(--border-width) solid var(--border-color)"
                            : "none",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.1,
                      }}
                      onClick={() => handlePageClick(item)}
                    >
                      {/* Background highlight for active state */}
                      <div
                        className="absolute top-0 left-0"
                        style={{
                          backgroundColor: "var(--text-primary)",
                          zIndex: 1,
                          height: "100%",
                          width: currentPage === item ||
                            (currentPage === "PROJECT_DETAIL" &&
                              item === "PROJECTS") ||
                            (currentPage === "GRAPHICS" &&
                              item === "PROJECTS")
                              ? "100%"
                              : "0%",
                          transition: "width 0.3s ease-in-out",
                        }}
                      />

                      <h2
                        className="blend-difference relative z-10"
                        style={{
                          fontFamily: "var(--font-family-inter)",
                          fontSize: "var(--text-h3)",
                          fontWeight: "var(--font-weight-medium)",
                          textTransform: "uppercase",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {item}
                      </h2>
                    </motion.button>
                  ),
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}