// src/api/optimizedProjectsApi.ts

// --- Define and export the Project interface ---
export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  caseStudy?: {
    overview: {
      context: string;
      role: string;
      tools: string[];
      targetAudience?: string;
      deliverables?: (string | { name: string })[];
    };
    research?: {
      competitorAnalysisLink?: string;
      audienceResearchLink?: string;
      keyFindings?: string;
      designImplications?: string;
      strategicInsights?: string[];
    };
    ideation?: {
      directions?: {
        name: string;
        description: string;
        images?: string[];
      }[];
    };
    deliverables?: {
      category: string;
      description: string;
      items: {
        name: string;
        image: string;
      }[];
    }[];
    reflection?: {
      learnings?: string;
      collaboration?: string;
      constraints?: string;
      finalOutcome?: string;
    };
  };
}

// --- Export your optimizedProjects array ---
export const optimizedProjects: Project[] = [
  {
    id: "ashe-magazine",
    name: "Ashe Magazine",
    category: "Editorial Design / Web Design",
    description:
      "A creative platform and publication empowering emerging artists and designers through storytelling, opportunity, and community.",
    image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760213476/Artboard_1_pggrig.jpg",

    caseStudy: {
      overview: {
        context:
          "Ashe Magazine was created as a space where creatives could share their stories, explore creative identity, and access opportunities that bridge art and livelihood.",
        role: "Creative Director, UX/UI Designer, Web Developer",
        tools: ["Figma", "Next.js", "Framer Motion", "Photoshop", "Illustrator"],
        targetAudience:
          "Early-career creatives, multidisciplinary artists, and small creative businesses seeking visibility and education.",
        deliverables: [
          "Editorial Design",
          "Web Experience",
          "Brand Identity",
          "Social Templates",
          "Art Direction",
        ],
      },

      research: {
        competitorAnalysisLink:
          "https://docs.google.com/spreadsheets/d/1wxDWTxxMAIh-7Ql3FfQHsDjWPIeInSY2pGoaSPlCM5M/edit?usp=sharing",
        audienceResearchLink:
          "https://drive.google.com/file/d/1Nahmz1jRkhHcNWs5_lKx6J_0AwboweTX/view?usp=sharing",
        keyFindings:
          "Many creatives felt unseen or undervalued in mainstream design spaces. They sought practical guidance and emotional affirmation.",
        designImplications:
          "Design needed to balance sophistication and warmth — business and art — through typography, tone, and imagery.",
        strategicInsights: [
          "Editorial brands tend to use a muted or monochrome color palette (with one accent color in some cases) to accommodate for a wide breadth of imagery whilst remaining stylistically recognizable similarly other brands that prioritize images such as Pinterest and Instagram take a similar approach, thus differentiation through other elements of visual language are key eg.",
          "Many competitor publications overload pages with dense blocks of text or inconsistent typography, which can overwhelm readers and reduce content engagement. Prioritizing clear hierarchy, usage of imagery/iconography to 'break up' content, and ample white space ensures information is digestible while maintaining a premium, professional feel.",
          "Guap being an industry leader in the editorial space, demonstrates how to successfully adopt a conversational, informal tone, whilst maintaining a professional demeanor. Makes complex business, financial, and economic concepts more approachable. Competitors often use formal or semi-formal language, which can act as a barrier for creatives who are less familiar with industry jargon.",
        ],
      },

      ideation: {
        directions: [
          {
            name: "Modern Baroque (Script + Sans-Serif)",
            description:
              "This direction blends the aesthetics of historical portraiture with contemporary celebrity culture. By using contained images (instead of full-bleed covers), grainy textures, and baroque-inspired lighting, modern figures like Tyler, the Creator or Doechii are framed as if they were subjects of old master paintings. The off-white backgrounds, script accents, and vintage filters create a sense of heritage and prestige (“old money”), while the clean sans-serif typography pulls it into the modern era.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1B_sziuz8.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214049/Ashe_1A_nrhzw7.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1C_pmwiwj.jpg",
            ],
          },
          {
            name: "Handwritten flourishes and texture",
            description:
              "This direction emphasizes the raw, experimental energy of creative work. It uses handwritten annotations, textures, and layered compositions that feel personal and in-progress, contrasting with structured typography to reflect the tension between free expression and business clarity. The aesthetic borrows from sketchbooks, mood boards, and zines, presenting Ashe as an editorial space that is both professional and human.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214054/Ashe_2A_rcmxgw.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214047/Ashe_2B_w5kygr.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214048/Ashe_2C_mbtcik.jpg",
            ],
          },
          {
            name: "Community Focus",
            description:
              "Human warmth expressed through photography, organic shapes, and poetic microcopy.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214054/Ashe_3A_pwpac9.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214053/Ashe_3B_pgjpqo.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214056/Ashe_3C_aid2cj.jpg",
            ],
          },
        ],
      },

      deliverables: [
        {
          category: "Magazine Spreads",
          description:
            "Editorial layouts combining rich typography, cinematic imagery, and rhythm between white space and storytelling.",
          items: [
            {
              name: "Contents Page",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215486/Magazine_spread_2_xszgsa.jpg",
            },
            {
              name: "Interview Spread",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215479/Magazine_spread_1_jgmvla.jpg",
            },
            {
              name: "Feature Article Spread",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215485/Magazine_spread_3_a3awsd.jpg",
            },
          ],
        },
        {
          category: "Magazine Covers",
          description:
            "A series of cover explorations blending modern serif typography with emotional portraiture and grain textures.",
          items: [
            {
              name: "Cover Issue 01 — Becoming",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214049/Ashe_1A_nrhzw7.jpg",
            },
            {
              name: "Cover Issue 02 — Legacy",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1B_sziuz8.jpg",
            },
            {
              name: "Cover Concept — The Creator’s Burden",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214056/Ashe_1C_pmwiwj.jpg",
            },
          ],
        },
        {
          category: "Social Media Templates",
          description:
            "Branded layouts for social storytelling — balancing consistency, aesthetic richness, and scalability.",
          items: [
            {
              name: "Instagram Post — Feature Artist",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760217476/social_mockup_9_16_qzfgqr.jpg",
            },
            {
              name: "Quote Template — Ashe Values",
              image: "/images/ashe/deliverables/social-2.webp",
            },
            {
              name: "Carousel — Editorial Launch",
              image: "/images/ashe/deliverables/social-3.webp",
            },
          ],
        },
        {
          category: "Brand Guidelines",
          description:
            "Visual system defining typography, color palette, iconography, and editorial tone across digital and print applications.",
          items: [
            {
              name: "Typography System",
              image: "/images/ashe/deliverables/guidelines-1.webp",
            },
            {
              name: "Color & Motif Guidelines",
              image: "/images/ashe/deliverables/guidelines-2.webp",
            },
            {
              name: "Layout Principles",
              image: "/images/ashe/deliverables/guidelines-3.webp",
            },
          ],
        },
        {
          category: "Website Snapshots",
          description:
            "A vertically scrolling carousel experience showcasing featured articles, cinematic imagery, and layered motion.",
          items: [
            {
              name: "Home Page — Vertical Carousel",
              image: "/images/ashe/deliverables/web-1.webp",
            },
            {
              name: "Article Page — Immersive Reading",
              image: "/images/ashe/deliverables/web-2.webp",
            },
            {
              name: "Opportunities Section — Creative Callouts",
              image: "/images/ashe/deliverables/web-3.webp",
            },
          ],
        },
      ],

      reflection: {
        learnings:
          "Ashe taught me the art of merging emotional storytelling with structural clarity. Sophistication doesn’t have to mean sterility — it can feel alive.",
        collaboration:
          "Worked with local photographers and writers to develop a unified narrative voice.",
        constraints:
          "Limited resources and time demanded intentional design restraint — everything had to serve the message.",
        finalOutcome:
          "Delivered a cohesive editorial identity and digital experience that embodies creativity grounded in purpose.",
      },
    },
  },
];

// --- Default export for convenience ---
export default optimizedProjects;

export const OptimizedProjectsAPI = {
  getAllProjects: async (): Promise<Project[]> => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(optimizedProjects), 500)
    );
  },

  getProjectById: async (id: string): Promise<Project | null> => {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(optimizedProjects.find((p) => p.id === id) ?? null),
        500
      )
    );
  },

  searchProjects: async (query: string): Promise<Project[]> => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            optimizedProjects.filter((p) =>
              p.name.toLowerCase().includes(query.toLowerCase())
            )
          ),
        500
      )
    );
  },

  getProjectsByCategory: async (category: string): Promise<Project[]> => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            optimizedProjects.filter((p) =>
              p.category.toLowerCase().includes(category.toLowerCase())
            )
          ),
        500
      )
    );
  },

  getProjectsByYear: async (year: string): Promise<Project[]> => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            optimizedProjects.filter((p) =>
              p.description.includes(year)
            )
          ),
        500
      )
    );
  },
};