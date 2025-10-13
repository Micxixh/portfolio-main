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
      deliverables?: (string | { name: string; link?: string })[];
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
      links?: { name: string; url: string }[]; // <-- display name + URL
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
    image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760298162/site_mockup_an0bsf.jpg",

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
            name: "Geometric Realism",
            description:"This direction explores a faceted, geometric illustration style that mirrors the complexity and structure of creative work itself. The sharp planes and angular rendering give the cover a contemporary, almost architectural feel speaking to design as both art and system. By stripping away photorealism and instead highlighting form, shape, and construction, this approach frames creativity as something built, intentional, and enduring.",
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
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760217478/Social_mockup_4_3_iryztq.jpg",
            },
            {
              name: "Carousel — Editorial Launch",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760349775/Social_mockup_1_1_gzo5xv.jpg",
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
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350469/Logo_Suite_gw04fi.jpg",
            },
            {
              name: "Color & Motif Guidelines",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350471/Typography_Design_oux2ly.jpg",
            },
            {
              name: "Layout Principles",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350472/Photography_Guide_jbbj4e.jpg",
            },
          ],
        },
        {
          category: "Website Snapshots",
          description:
            "A vertically scrolling carousel experience showcasing featured articles, cinematic imagery, and layered motion.",
          links: [
            { name: "Full-site", url: "https://ashemag.netlify.app/" }
          ],
          items: [
            {
              name: "Home Page — Vertical Carousel",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353115/site_mockup_mwqdla.jpg",
            },
            {
              name: "Article Page — Immersive Reading",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353058/desktop_q2vpgd.jpg",
            },
            {
              name: "Opportunities Section — Creative Callouts",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353083/Tablet_ljcuaw.jpg",
            },
            {
              name: "Opportunities Section — Creative Callouts",
              image: "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353070/mobile_rqkhzc.jpg",
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