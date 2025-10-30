"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Competitor {
  name: string;
  toneOfVoice: string;
  mission: string;
  positioning: string;
  visualStyle: string;
  contentOffering: string;
  strengths: string[];
  limitations: string[];
}

interface Props {
  competitors: Competitor[];
  overview?: string;
  documentLink?: string;
  onClose: () => void;
}

export default function CompetitorCarouselModal({
  competitors,
  overview,
  documentLink,
  onClose,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerClose();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 250);
  };

  const total = competitors.length;
  const nextSlide = () => setActiveIndex((i) => (i + 1) % total);
  const prevSlide = () => setActiveIndex((i) => (i - 1 + total) % total);
  const competitor = competitors[activeIndex];

  const buttonStyle: React.CSSProperties = {
    padding: "var(--space-2) var(--space-4)",
    fontFamily: "var(--font-family-roboto-mono)",
    fontSize: "var(--text-sm)", 
    fontWeight: "var(--font-weight-medium)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--text-primary)",
    backgroundColor: "transparent",
    border: "var(--border-width) solid var(--border-color)",
    borderRadius: "0.25rem",
    display: "flex",
    alignItems: "center",
    gap: "var(--space-1)",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  const renderField = (label: string, value: string | string[]) => (
    <div style={{ marginBottom: "var(--space-3)", overflowX:"visible", overflow:"visible", overflowY:"visible" }}>
      <h6
        style={{
          marginBottom: "var(--space-1)",
          paddingBottom: "var(--space-1)",
          borderBottom: "solid 1px black",
          color: "var(--text-primary)",
        }}
      >
        {label}
      </h6>
      <div
        style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-sm)",
          color: "var(--text-primary)",
        }}
      >
        {Array.isArray(value) ? value.join(", ") : value}
      </div>
    </div>
  );
  const renderFieldMobile = (label: string, value: string | string[]) => (
    <div style={{ marginBottom: "var(--space-3)",overflowX:"visible"}}>
      <h6
        style={{
          marginBottom: "var(--space-1)",
          paddingBottom: "var(--space-1)",
          borderBottom: "solid 1px black",
          color: "var(--text-primary)",
        }}
      >
        {label}
      </h6>
      <div
        style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-sm)",
          color: "var(--text-primary)",
        }}
      >
        {Array.isArray(value) ? value.join(", ") : value}
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "var(--space-10)",
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
            zIndex: 50,
            padding: "var(--space-4)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) triggerClose();
          }}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              border: "var(--border-width) solid var(--border-color)",
              borderRadius: "1rem",
              width: "90vw",
              maxWidth: "1080px",
              maxHeight: "720px",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <button
              onClick={triggerClose}
              style={{
                position: "absolute",
                top: "var(--space-2)",
                right: "var(--space-4)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={24} color="var(--text-primary)" />
            </button>

            {/* Heading */}
            <h2
              style={{
                width: "100%",
                height: "60px", // or any height you want
                display: "flex",
                alignItems: "center", // ⬅ centers vertically
                justifyContent: "center", // ⬅ centers horizontally
                fontWeight: "var(--font-weight-bold)",
                color: "var(--text-primary)",
                borderBottom: "var(--border-width) solid var(--border-color)",
                padding: "var(--space-3)",
                textAlign: "center",
              }}
            >
              {competitor.name}
            </h2>


            {/* Layout changes based on screen size */}
            {isMobile ? (
              // 📱 MOBILE VERSION
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "var(--space-4)",
                  textAlign: "left",
                  overflowY: "scroll"
                }}
              >
                {renderFieldMobile("Tone of Voice", competitor.toneOfVoice)}
                {renderFieldMobile("Mission", competitor.mission)}
                {renderFieldMobile("Positioning", competitor.positioning)}
                {renderFieldMobile("Content Offering", competitor.contentOffering)}
                {renderFieldMobile("Visual Style", competitor.visualStyle)}
                {renderFieldMobile("Strengths", competitor.strengths)}
                {renderFieldMobile("Limitations", competitor.limitations)}
              </div>
            ) : (
              // 💻 DESKTOP VERSION
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  flex: 1,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    borderRight: "2px solid var(--border-color)",
                    padding: "var(--space-6)",
                  }}
                >
                  {renderField("Tone of Voice", competitor.toneOfVoice)}
                  {renderField("Mission", competitor.mission)}
                  {renderField("Positioning", competitor.positioning)}
                  {renderField("Content Offering", competitor.contentOffering)}
                </div>

                <div
                  style={{
                    padding: "var(--space-6)",
                    textAlign: "left",
                  }}
                >
                  {renderField("Visual Style", competitor.visualStyle)}
                  {renderField("Strengths", competitor.strengths)}
                  {renderField("Limitations", competitor.limitations)}
                </div>
              </div>
            )}

            {/* Bottom Nav */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "var(--space-3)",
                borderTop: "var(--border-width) solid var(--border-color)",
                alignItems:"center",
                gap: "var(--space-2)",
              }}
            >
              <button
                onClick={prevSlide}
                onMouseEnter={() => setPrevHover(true)}
                onMouseLeave={() => setPrevHover(false)}
                style={{
                  ...buttonStyle,
                  backgroundColor: prevHover
                    ? "var(--bg-secondary)"
                    : "transparent",
                }}
              >
                <ArrowLeft size={16} /> Previous
              </button>

              {documentLink && (
                <a
                  href={documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "var(--space-2) var(--space-4)",
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "var(--font-family-roboto-mono)",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-medium)",
                    borderRadius: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  View Spreadsheet
                </a>
              )}

              <button
                onClick={nextSlide}
                onMouseEnter={() => setNextHover(true)}
                onMouseLeave={() => setNextHover(false)}
                style={{
                  ...buttonStyle,
                  backgroundColor: nextHover
                    ? "var(--bg-secondary)"
                    : "transparent",
                }}
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
