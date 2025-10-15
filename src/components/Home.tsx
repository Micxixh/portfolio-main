"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import NavRow from "./NavRow";

interface HomeProps {
  onAboutClick: () => void;
  isTransition?: boolean;
}

export default function Home({
  onAboutClick,
  isTransition = false,
}: HomeProps) {
  return (
    <motion.div
      className="relative flex w-full h-full"
      style={{
        height: "100vh", // Full viewport height
        paddingTop: isTransition ? "0px" : "0px",
      }}
      initial={false}
      exit={{
        x: "-66.666vw", // Only content area moves left (2/3 of viewport)
        opacity: 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Content Area - Left 2/3 */}
      <motion.div
        className="flex flex-col"
        style={{
          width: "66.666%",
          height: "100%",
        }}
        initial={false}
        animate={{
          opacity: isTransition ? 1 : 1,
          x: isTransition ? 0 : 0,
        }}
        exit={{
          x: "-66.666vw",
          opacity: 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Hero Text Section - Top portion */}
        <div
          className="flex items-center flex-1"
          style={{
            paddingBottom: "60px", // Space above navigation
            paddingLeft: "48px",
            paddingTop: "120px",
          }}
        >
          <div>
            {/* UX Designer Title */}
            <motion.div
              style={{
                marginBottom: "var(--space-6)",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-family-inter)",
                  fontSize: "var(--header-title-size)",
                  fontWeight: "var(--font-weight-light)",
                  color: "var(--text-primary)",
                  textTransform: "none",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                UX DESIGNER
              </h2>
            </motion.div>

            {/* Hero Text */}
            <motion.p
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "21px",
                fontWeight: "var(--font-weight-normal)",
                fontStyle: "italic",
                color: "#000000",
                lineHeight: "1.6",
                textAlign: "left",
                margin: 0,
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4 
              }}
            >
              Design that whispers but speaks volumes.
              <br />
              Clarity. Emotion. Impact.
            </motion.p>
          </div>
        </div>

        {/* Navigation Section - Bottom */}
        <div
          className="flex flex-col"
          style={{
            gap: "24px",
            paddingBottom: "60px",
            width: "100%",
            paddingLeft: "48px",
            paddingRight: "48px",
          }}
        >
          <NavRow text="PROJECTS" />
          <NavRow text="ABOUT" onClick={onAboutClick} />
          <NavRow text="CONTACT" />
        </div>
      </motion.div>

      {/* Portrait Area - Right 1/3 */}
      <motion.div
        className="absolute top-0 right-0"
        style={{
          width: "33.333%",
          height: "100vh", // Full screen height from top
        }}
        initial={false}
        exit={{
          x: "-16.666vw", // Shift left to center position
          width: "50%",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ImageWithFallback
          src="https://res.cloudinary.com/dfsmaylfo/image/upload/v1760560538/portrait_r8jllf.png"
          alt="Micaiah Douglas Portrait"
          className="w-full h-full object-cover"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>
    </motion.div>
  );
}