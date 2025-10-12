"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MoodboardingData {
  moodboards?: Array<{
    title: string;
    description: string;
    imageUrl: string;
    keywords?: string[];
  }>;
  styleExploration?: {
    approach: string;
    directions: Array<{
      name: string;
      description: string;
      rationale: string;
    }>;
  };
  inspiration?: {
    sources: string[];
    principles: string[];
  };
}

interface MoodboardingSectionProps {
  data: MoodboardingData;
  className?: string;
}

// Static animation configurations to prevent recreation
const sectionAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  },
};

// Memoized section title component
const SectionTitle = memo(({ title }: { title: string }) => (
  <motion.div
    {...sectionAnimation}
    style={{
      paddingBottom: "var(--space-3)",
      marginBottom: "var(--space-6)",
      borderBottom: "var(--border-width) solid var(--border-color)",
    }}
  >
    <h2
      style={{
        fontFamily: "var(--font-family-inter)",
        fontSize: "var(--text-h2)",
        fontWeight: "var(--font-weight-medium)",
        textTransform: "uppercase",
        color: "var(--text-primary)",
        margin: 0,
      }}
    >
      {title}
    </h2>
  </motion.div>
));

SectionTitle.displayName = "SectionTitle";

// Memoized moodboard card component
const MoodboardCard = memo(({ 
  moodboard, 
  index 
}: { 
  moodboard: MoodboardingData['moodboards'][0]; 
  index: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2 + (index * 0.1),
    }}
    style={{
      marginBottom: "var(--space-8)",
    }}
  >
    {/* Moodboard Title */}
    <div
      style={{
        marginBottom: "var(--space-4)",
      }}
    >
      <h6
        style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-h6)",
          fontWeight: "var(--font-weight-normal)",
          color: "var(--text-primary)",
          margin: 0,
          marginBottom: "var(--space-2)",
        }}
      >
        {moodboard.title}
      </h6>
      <p
        style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-light)",
          color: "var(--text-primary)",
          margin: 0,
          lineHeight: "1.6",
        }}
      >
        {moodboard.description}
      </p>
    </div>

    {/* Moodboard Image */}
    <div
      style={{
        width: "100%",
        height: "50vh",
        border: "var(--border-width) solid var(--border-color)",
        overflow: "hidden",
        marginBottom: "var(--space-4)",
      }}
    >
      <ImageWithFallback
        src={moodboard.imageUrl}
        alt={`${moodboard.title} moodboard`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Keywords */}
    {moodboard.keywords && moodboard.keywords.length > 0 && (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-2)",
        }}
      >
        {moodboard.keywords.map((keyword, keywordIndex) => (
          <span
            key={keywordIndex}
            style={{
              fontFamily: "var(--font-family-roboto-mono)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-primary)",
              border: "var(--border-width) solid var(--border-color)",
              padding: "var(--space-1) var(--space-2)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {keyword}
          </span>
        ))}
      </div>
    )}
  </motion.div>
));

MoodboardCard.displayName = "MoodboardCard";

// Memoized style direction card component
const StyleDirectionCard = memo(({ 
  direction, 
  index 
}: { 
  direction: MoodboardingData['styleExploration']['directions'][0]; 
  index: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4 + (index * 0.1),
    }}
    style={{
      border: "var(--border-width) solid var(--border-color)",
      backgroundColor: "var(--bg-primary)",
      padding: "var(--space-4)",
      marginBottom: "var(--space-4)",
    }}
  >
    <h6
      style={{
        fontFamily: "var(--font-family-roboto-mono)",
        fontSize: "var(--text-h6)",
        fontWeight: "var(--font-weight-normal)",
        color: "var(--text-primary)",
        margin: 0,
        marginBottom: "var(--space-2)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {direction.name}
    </h6>
    <p
      style={{
        fontFamily: "var(--font-family-roboto-mono)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-light)",
        color: "var(--text-primary)",
        margin: 0,
        marginBottom: "var(--space-3)",
        lineHeight: "1.6",
      }}
    >
      {direction.description}
    </p>
    <div
      style={{
        borderTop: "var(--border-width) solid var(--border-color)",
        paddingTop: "var(--space-2)",
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
          marginBottom: "var(--space-1)",
          display: "block",
        }}
      >
        Rationale
      </span>
      <p
        style={{
          fontFamily: "var(--font-family-roboto-mono)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-light)",
          color: "var(--text-primary)",
          margin: 0,
          lineHeight: "1.5",
        }}
      >
        {direction.rationale}
      </p>
    </div>
  </motion.div>
));

StyleDirectionCard.displayName = "StyleDirectionCard";

export default function MoodboardingSection({
  data,
  className = "",
}: MoodboardingSectionProps) {
  // Default data structure if none provided
  const defaultData: MoodboardingData = {
    moodboards: [
      {
        title: "Visual Direction",
        description: "Initial exploration of visual themes, color palettes, and aesthetic approaches that align with the project goals and brand identity.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
        keywords: ["minimalist", "bold typography", "monochromatic", "geometric"],
      },
      {
        title: "Interaction Patterns",
        description: "Reference collection of micro-interactions, transitions, and interface behaviors that enhance user experience and create emotional connection.",
        imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
        keywords: ["smooth transitions", "hover states", "motion design", "responsive"],
      },
    ],
    styleExploration: {
      approach: "Multiple visual directions were explored to establish the most effective aesthetic approach for the target audience and project constraints.",
      directions: [
        {
          name: "Minimal Precision",
          description: "Clean, systematic approach emphasizing clarity and hierarchy through strategic use of white space and typography.",
          rationale: "Supports content comprehension while maintaining professional credibility and cross-platform consistency.",
        },
        {
          name: "Editorial Bold",
          description: "Magazine-inspired layout with strong typography hierarchy and confident use of contrast and scale.",
          rationale: "Creates memorable brand presence while ensuring accessibility and readability across different contexts.",
        },
        {
          name: "Systematic Modular",
          description: "Component-based design emphasizing reusability, scalability, and consistent interaction patterns.",
          rationale: "Enables efficient development while maintaining design consistency across complex user flows and features.",
        },
      ],
    },
    inspiration: {
      sources: [
        "Contemporary editorial design",
        "Swiss typography principles",
        "Modern web interfaces",
        "Brand identity systems",
      ],
      principles: [
        "Clarity over decoration",
        "Hierarchy through scale and spacing",
        "Purposeful motion and interaction",
        "Accessible color and contrast",
      ],
    },
  };

  const moodboardData = data.moodboards?.length > 0 ? data : defaultData;
  const styleData = data.styleExploration || defaultData.styleExploration;
  const inspirationData = data.inspiration || defaultData.inspiration;

  return (
    <section
      className={className}
      style={{
        width: "100%",
        marginBottom: "var(--space-12)",
      }}
    >
      <SectionTitle title="Research & Inspiration" />

      {/* Moodboards */}
      <div
        style={{
          marginBottom: "var(--space-10)",
        }}
      >
        {moodboardData.moodboards.map((moodboard, index) => (
          <MoodboardCard 
            key={index} 
            moodboard={moodboard} 
            index={index} 
          />
        ))}
      </div>

      {/* Style Exploration */}
      {styleData && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          style={{
            marginBottom: "var(--space-10)",
          }}
        >
          <div
            style={{
              paddingBottom: "var(--space-3)",
              marginBottom: "var(--space-6)",
              borderBottom: "var(--border-width) solid var(--border-color)",
            }}
          >
            <h6
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-h6)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-primary)",
                margin: 0,
                marginBottom: "var(--space-3)",
              }}
            >
              Style Exploration
            </h6>
            <p
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-light)",
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              {styleData.approach}
            </p>
          </div>

          {/* Style Directions Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{
              gap: "var(--space-4)",
            }}
          >
            {styleData.directions.map((direction, index) => (
              <StyleDirectionCard 
                key={index} 
                direction={direction} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Inspiration Sources */}
      {inspirationData && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6,
          }}
        >
          <div
            style={{
              paddingBottom: "var(--space-3)",
              marginBottom: "var(--space-6)",
              borderBottom: "var(--border-width) solid var(--border-color)",
            }}
          >
            <h6
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-h6)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Design Principles
            </h6>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{
              gap: "var(--space-8)",
            }}
          >
            {/* Inspiration Sources */}
            <div>
              <h6
                style={{
                  fontFamily: "var(--font-family-roboto-mono)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--text-primary)",
                  margin: 0,
                  marginBottom: "var(--space-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Inspiration Sources
              </h6>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {inspirationData.sources.map((source, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-light)",
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-2)",
                      paddingLeft: "var(--space-3)",
                      position: "relative",
                      lineHeight: "1.5",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        fontWeight: "var(--font-weight-normal)",
                      }}
                    >
                      •
                    </span>
                    {source}
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Principles */}
            <div>
              <h6
                style={{
                  fontFamily: "var(--font-family-roboto-mono)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--text-primary)",
                  margin: 0,
                  marginBottom: "var(--space-3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Core Principles
              </h6>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {inspirationData.principles.map((principle, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-light)",
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-2)",
                      paddingLeft: "var(--space-3)",
                      position: "relative",
                      lineHeight: "1.5",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        fontWeight: "var(--font-weight-normal)",
                      }}
                    >
                      •
                    </span>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}