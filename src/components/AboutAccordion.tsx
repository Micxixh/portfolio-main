"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

interface AccordionItem {
  title: string;
  content: JSX.Element;
}

export default function AboutAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null); // Start with no panels open
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const skillsData = [
    {
      capability: "Wireframing",
      description:
        "Translate findings into structured wireframes that form the blueprint for intuitive, goal-oriented interfaces.",
    },
    {
      capability: "Web Design",
      description:
        "Design and build responsive websites using clean, semantic code.",
    },
    {
      capability: "UI Design",
      description:
        "Create high-fidelity interfaces in Figma with attention to typography, spacing, and accessibility.",
    },
    {
      capability: "Prototyping",
      description:
        "Create interactive prototypes in Figma with attention to typography, spacing, and accessibility.",
    },
    {
      capability: "Brand Identity",
      description:
        "Craft visual systems that tell a clear and compelling story about your brand.",
    },
  ];

  const accordionItems: AccordionItem[] = [
    {
      title: "WHAT I DO",
      content: (
        <div>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row border-b border-gray-600 last:border-b-0"
              style={{
                backgroundColor:
                  (index % 2) - 1 === 0
                    ? "var(--text-primary)"
                    : "var(--bg-dark)",
                padding: "var(--space-2) var(--space-2)",
              }}
            >
              <h6 className="w-full md:w-1/3 blend-difference self-center mobile-service-title">
                {skill.capability}
              </h6>
              <p
                className="w-full md:w-2/3 self-center"
                style={{
                  color: "var(--text-inverse)",
                }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "WHO I AM",
      content: (
        <div
          style={{
            backgroundColor: "var(--bg-dark)",
            padding: "var(--space-3)",
          }}
        >
          <p
            style={{
              color: "var(--text-inverse)",
              lineHeight: "1.6",
            }}
          >
            I'm a multidisciplinary designer telling stories
            through visuals, interfaces, and systems.
            <br />
            <br />
            My work lives at the intersection of UX, graphic
            design, and illustration—shaping experiences that
            feel intentional and human. Whether it's a brand
            identity, a mobile app, or a single illustration, I
            approach every project as a story waiting to be
            told.
          </p>
        </div>
      ),
    },
    {
      title: "WHAT I BELIEVE",
      content: (
        <div
          style={{
            backgroundColor: "var(--bg-dark)",
            padding: "var(--space-3)",
          }}
        >
          <p
            style={{
              color: "var(--text-inverse)",
              lineHeight: "1.6",
            }}
          >
            Great design is a guided journey. It meets the user
            where they are, understands what they need, and
            moves them gently, intentionally—toward something
            better. It shifts mood. It builds trust. It tells a
            story, not just about the product, but about the
            people behind it, and the values they carry.
            <br />
            <br />
            At its best, design doesn't just solve problems, it
            leaves people feeling seen, valued, and more whole
            than when they arrived.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-0">
      {accordionItems.map((item, index) => (
        <div
          key={index}
        >
          {/* Header */}
          <motion.button
            className="w-full relative flex justify-between items-center cursor-pointer overflow-hidden"
            style={{
              backgroundColor: "#fafafa",
              height: "var(--space-9)",
              padding: "0 var(--space-3)",
            }}
            onClick={() => toggleItem(index)}
            onHoverStart={() => setHoveredItem(index)}
            onHoverEnd={() => setHoveredItem(null)}
            whileHover={
              openItem === index 
                ? {} 
                : { 
                    y: -1,
                    transition: { 
                      duration: 0.15, 
                      ease: "easeOut" 
                    }
                  }
            }
          >
            {/* Expanding background */}
            <motion.div
              className="absolute inset-0"
              initial={{ scaleX: 0 }} // All items start collapsed
              whileHover={
                openItem === index 
                  ? {} 
                  : { 
                      scaleX: 1,
                      transition: { 
                        duration: 0.25, 
                        ease: [0.16, 1, 0.3, 1] 
                      }
                    }
              }
              animate={
                openItem === index
                  ? { scaleX: 1 }
                  : { scaleX: 0 }
              }
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                transformOrigin: "left",
                backgroundColor: "var(--text-primary)",
              }}
            />

            {/* Hover border enhancement */}
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileHover={
                openItem === index 
                  ? {} 
                  : { 
                      scaleX: 1,
                      transition: { 
                        duration: 0.2, 
                        ease: "easeOut",
                        delay: 0.05
                      }
                    }
              }
              animate={{ scaleX: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              style={{
                height: "var(--border-width)",
                backgroundColor: "var(--text-primary)",
                transformOrigin: "left",
              }}
            />

            <motion.h4
              className="relative z-10 blend-difference"
              style={{
                textAlign: "left",
              }}
              whileHover={
                openItem === index 
                  ? {} 
                  : { 
                      x: 2,
                      transition: { 
                        duration: 0.15, 
                        ease: "easeOut" 
                      }
                    }
              }
            >
              {item.title}
            </motion.h4>

            <motion.div
              className="relative z-10 blend-difference"
              initial={{ rotate: 0 }} // All items start with chevron pointing right
              animate={{ rotate: openItem === index ? 90 : 0 }}
              whileHover={
                openItem === index 
                  ? {} 
                  : { 
                      rotate: 45,
                      scale: 1.1,
                      transition: { 
                        duration: 0.2, 
                        ease: "easeOut" 
                      }
                    }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronRight size={20} />
            </motion.div>
          </motion.button>

          {/* Content */}
          <AnimatePresence>
            {openItem === index && (
              <motion.div
                initial={{ height: 0 }} // All items start collapsed
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                style={{ 
                  overflow: "hidden",
                  borderTop: "var(--border-width) solid var(--border-color)"
                }}
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}