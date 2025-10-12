"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface IdeationData {
  concepts?: Array<{
    title: string;
    description: string;
    rationale: string;
  }>;
  sketches?: {
    title: string;
    description: string;
    imageUrl: string;
  };
  informationArchitecture?: {
    approach: string;
    keyDecisions: string[];
    structure: Array<{
      section: string;
      content: string;
    }>;
  };
  userFlows?: {
    title: string;
    description: string;
    imageUrl: string;
    keyFlows: string[];
  };
  designPrinciples?: Array<{
    principle: string;
    description: string;
    application: string;
  }>;
}

interface IdeationSectionProps {
  data?: IdeationData;
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

// Memoized concept card component
const ConceptCard = memo(({ 
  concept, 
  index 
}: { 
  concept: IdeationData['concepts'][0]; 
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
        marginBottom: "var(--space-3)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {concept.title}
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
      {concept.description}
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
        {concept.rationale}
      </p>
    </div>
  </motion.div>
));

ConceptCard.displayName = "ConceptCard";

// Memoized design principle card component
const DesignPrincipleCard = memo(({ 
  principle, 
  index 
}: { 
  principle: IdeationData['designPrinciples'][0]; 
  index: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6 + (index * 0.1),
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
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-normal)",
        color: "var(--text-primary)",
        margin: 0,
        marginBottom: "var(--space-2)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {principle.principle}
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
      {principle.description}
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
        Application
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
        {principle.application}
      </p>
    </div>
  </motion.div>
));

DesignPrincipleCard.displayName = "DesignPrincipleCard";

export default function IdeationSection({
  data,
  className = "",
}: IdeationSectionProps) {
  // Default data structure if none provided
  const defaultData: IdeationData = {
    concepts: [
      {
        title: "Content-First Architecture",
        description: "Prioritizing content hierarchy and readability through systematic information organization and clear visual pathways.",
        rationale: "Users need to quickly understand and navigate complex information without cognitive overload, especially in professional contexts.",
      },
      {
        title: "Progressive Disclosure",
        description: "Revealing information in manageable layers that guide users through increasingly detailed content based on their needs.",
        rationale: "Reduces interface complexity while maintaining access to comprehensive functionality for power users.",
      },
      {
        title: "Contextual Flexibility",
        description: "Adapting interface behavior and presentation based on user context, device capabilities, and task requirements.",
        rationale: "Modern users interact across multiple touchpoints and expect consistent yet optimized experiences for each context.",
      },
    ],
    sketches: {
      title: "Initial Concepts & Wireframes",
      description: "Early explorations focused on information hierarchy, user flow optimization, and interface structure. These sketches established the foundation for component relationships and interaction patterns.",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&h=600&fit=crop",
    },
    informationArchitecture: {
      approach: "Structured around user mental models and task-oriented content grouping, emphasizing discoverability and logical progression through complex information.",
      keyDecisions: [
        "Primary navigation based on user goals rather than internal organization",
        "Secondary navigation contextual to current task or section",
        "Content chunking aligned with scanning patterns and cognitive load",
        "Search and filtering integrated at appropriate decision points",
      ],
      structure: [
        {
          section: "Entry Points",
          content: "Multiple pathways designed for different user types and intentions, reducing friction for diverse use cases.",
        },
        {
          section: "Core Workflows",
          content: "Streamlined paths for primary tasks with minimal steps and clear progress indicators.",
        },
        {
          section: "Detail Views",
          content: "Comprehensive information presentation with progressive disclosure and contextual actions.",
        },
        {
          section: "Support Systems",
          content: "Help, search, and navigation aids positioned based on user behavior research and usability testing.",
        },
      ],
    },
    userFlows: {
      title: "Key User Journeys",
      description: "Mapping critical paths through the interface, identifying decision points, potential friction areas, and opportunities for optimization. Focus on reducing cognitive load while maintaining functionality depth.",
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
      keyFlows: [
        "New user onboarding and first-time discovery",
        "Power user task completion and efficiency optimization",
        "Content exploration and comparative analysis",
        "Multi-step process completion with save states",
        "Cross-device continuation and synchronization",
      ],
    },
    designPrinciples: [
      {
        principle: "Clarity Over Cleverness",
        description: "Interface decisions prioritize user understanding and task completion over visual novelty or technical sophistication.",
        application: "Clear labeling, predictable interactions, and familiar patterns take precedence over unique but potentially confusing approaches.",
      },
      {
        principle: "Contextual Relevance",
        description: "Every interface element and interaction should directly support the user's current goal or provide clear value.",
        application: "Information hierarchy, action placement, and content organization align with user intent and natural task flow.",
      },
      {
        principle: "Graceful Complexity",
        description: "Advanced functionality remains accessible without overwhelming users who need simpler interactions.",
        application: "Progressive disclosure, adaptive interfaces, and layered navigation reveal complexity only when needed.",
      },
    ],
  };

  const ideationData = data || defaultData;

  return (
    <section
      className={className}
      style={{
        width: "100%",
        marginBottom: "var(--space-12)",
      }}
    >
      <SectionTitle title="Ideation & Concept Development" />

      {/* Initial Concepts */}
      {ideationData.concepts && ideationData.concepts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
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
              }}
            >
              Core Concepts
            </h6>
          </div>

          {/* Concepts Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{
              gap: "var(--space-4)",
            }}
          >
            {ideationData.concepts.map((concept, index) => (
              <ConceptCard 
                key={index} 
                concept={concept} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Sketches & Wireframes */}
      {ideationData.sketches && (
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
              {ideationData.sketches.title}
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
              {ideationData.sketches.description}
            </p>
          </div>

          {/* Sketches Image */}
          <div
            style={{
              width: "100%",
              height: "50vh",
              border: "var(--border-width) solid var(--border-color)",
              overflow: "hidden",
            }}
          >
            <ImageWithFallback
              src={ideationData.sketches.imageUrl}
              alt={ideationData.sketches.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Information Architecture */}
      {ideationData.informationArchitecture && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
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
              Information Architecture
            </h6>
            <p
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-light)",
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: "1.6",
                marginBottom: "var(--space-4)",
              }}
            >
              {ideationData.informationArchitecture.approach}
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{
              gap: "var(--space-8)",
            }}
          >
            {/* Key Decisions */}
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
                Key Decisions
              </h6>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {ideationData.informationArchitecture.keyDecisions.map((decision, index) => (
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
                    {decision}
                  </li>
                ))}
              </ul>
            </div>

            {/* Structure */}
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
                Content Structure
              </h6>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                }}
              >
                {ideationData.informationArchitecture.structure.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      border: "var(--border-width) solid var(--border-color)",
                      padding: "var(--space-3)",
                    }}
                  >
                    <h6
                      style={{
                        fontFamily: "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-normal)",
                        color: "var(--text-primary)",
                        margin: 0,
                        marginBottom: "var(--space-1)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.section}
                    </h6>
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
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* User Flows */}
      {ideationData.userFlows && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
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
              {ideationData.userFlows.title}
            </h6>
            <p
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-light)",
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: "1.6",
                marginBottom: "var(--space-4)",
              }}
            >
              {ideationData.userFlows.description}
            </p>
          </div>

          {/* User Flows Image */}
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
              src={ideationData.userFlows.imageUrl}
              alt={ideationData.userFlows.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Key Flows */}
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
              Primary Flows
            </h6>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {ideationData.userFlows.keyFlows.map((flow, index) => (
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
                  {flow}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Design Principles */}
      {ideationData.designPrinciples && ideationData.designPrinciples.length > 0 && (
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

          {/* Principles Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{
              gap: "var(--space-4)",
            }}
          >
            {ideationData.designPrinciples.map((principle, index) => (
              <DesignPrincipleCard 
                key={index} 
                principle={principle} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}