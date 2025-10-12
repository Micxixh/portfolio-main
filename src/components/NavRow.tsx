"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface NavRowProps {
  text: string;
  onClick?: () => void;
}

export default function NavRow({ text, onClick }: NavRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      className="relative cursor-pointer mobile-nav-row"
      style={{
        borderBottom: "1px solid #000000",
        paddingBottom: "8px",
        paddingLeft: "24px", // Will be overridden by mobile CSS
        width: "100%",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background highlight - absolutely positioned from leftmost edge, fills full height */}
      <motion.div
        className="absolute top-0"
        style={{
          backgroundColor: "#000000",
          zIndex: 1,
          height: "100%", // Full height of the navrow
          left: "0", // Start from before the padding to reach leftmost edge
        }}
        initial={{ width: 0 }}
        animate={{
          width: isHovered ? (isMobile ? "50%" : "35%") : "1px", // 50% on mobile, 35% on desktop
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Visible text with blend mode */}
      <h2
        className="relative z-10 blend-difference"
        style={{
          display: "block",
          textAlign: "left",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </h2>
    </motion.div>
  );
}