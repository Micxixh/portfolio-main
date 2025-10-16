import { Building } from "lucide-react";

export interface Deliverable {
  name: string;
  description: string;
  image: string;
  tags: string[]; // e.g. ["UI", "Web", "Social Media"]
  link?: string;
}

export interface DeliverableLink {
  name: string; // Display name for the link
  url: string;  // Actual URL
}

export interface DeliverablesSection {
  items: Deliverable[];           // flattened deliverables
  links?: DeliverableLink[];      // links relevant to the whole section
  summary?: string[];           // final decisions/rationale for this section
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  caseStudy?: {
    overview: {
      context: string;
      tools: string[];
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
    deliverables?: DeliverablesSection;
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
          "ASHE is a contemporary digital magazine and learning platform dedicated to empowering creatives with the knowledge and insight to build sustainable, impactful careers. Positioned at the intersection of culture, business, and artistry, ASHE highlights the strategies, stories, and systems behind creative success across disciplines like art, film, design, fashion, and music.",
        tools: ["Figma", "Next.js", "Framer Motion", "Photoshop", "Illustrator"],
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
          "Editorial brands tend to use a muted or monochrome color palette (with one accent color in some cases) to accommodate for a wide breadth of imagery whilst remaining stylistically recognizable similarly other brands that prioritize images such as Pinterest and Instagram take a similar approach, thus differentiation through other elements of visual language are key.",
          "Many competitor publications overload pages with dense blocks of text or inconsistent typography, which can overwhelm readers and reduce content engagement. Prioritizing clear hierarchy, usage of imagery/iconography to 'break up' content, and ample white space ensures information is digestible while maintaining a premium, professional feel.",
          "Guap being an industry leader in the editorial space, demonstrates how to successfully adopt a conversational, informal tone, whilst maintaining a professional demeanor. Makes complex business, financial, and economic concepts more approachable. Competitors often use formal or semi-formal language, which can act as a barrier for creatives who are less familiar with industry jargon.",
        ],
      },

      ideation: {
        directions: [
          {
            name: "Modern x Baroque",
            description: "This direction fuses historical portraiture with modern celebrity culture. Contained images, grainy textures, and baroque-inspired lighting present figures like Gabriel Moses as subjects of old master paintings. Off-white backgrounds, serif typefaces, and vintage filters evoke heritage and “old money” prestige, while clean sans-serif text adds a modern edge. Celestial elements—stars and cosmic motifs—suggest aspiration and wonder, reflecting Ashe’s mission to elevate emerging creatives. The result is a look of sophistication, timelessness, and creative legacy.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1B_sziuz8.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214049/Ashe_1A_nrhzw7.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1C_pmwiwj.jpg",
            ],
          },
          {
            name: "Handwritten flourishes and texture",
            description: "This direction highlights the tactile, human side of creativity. Handwritten flourishes paired with clean sans-serif typography create a balance between professionalism and personality. Warm, earthy tones and soft lighting evoke intimacy and authenticity. The logo exploration—mixing serif, sans-serif, and monospace typefaces inspired by Hunger magazine—emphasizes creative range. Grayscale imagery accented by Gabriel Moses’s vibrant red signature adds a bold, avant-garde edge.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214054/Ashe_2A_rcmxgw.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214047/Ashe_2B_w5kygr.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214048/Ashe_2C_mbtcik.jpg",
            ],
          },
          {
            name: "Geometric Realism",
            description:"Ashe Magazine explores the balance between creativity and systems, and this direction reflects that through a faceted, geometric illustration style. Sharp planes and angular rendering give the cover a contemporary, architectural feel—positioning design as both art and structure. By moving away from photorealism to emphasize form and construction, this approach presents creativity as something that can be understood both artistically and systematically.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214054/Ashe_3A_pwpac9.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214053/Ashe_3B_pgjpqo.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214056/Ashe_3C_aid2cj.jpg",
            ],
          },
        ],
      },

      deliverables: {
        items: [
          {
            name: "Contents Page",
            description:
              "the design uses precise grids, tonal contrast, and editorial type to echo Ashe’s ethos: creativity elevated through structure.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215486/Magazine_spread_2_xszgsa.jpg",
            tags: ["Editorial", "Print"],
          },
          {
            name: "Interview Spread",
            description:
              "Here the grids and shapes create a dynamic visual rhythm and clear structure, while a rounded banner offsets the sense of rigidity, highlighting Ashe’s belief that creativity thrives through balance between creativity and intentional systems.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215479/Magazine_spread_1_jgmvla.jpg",
            tags: ["Editorial", "Typography"],
          },
          {
            name: "Feature Article Spread",
            description:
              "The vertical “REFRAIN” acts as a visual divider, and the interplay between structured typography and bold color reflects Ashe’s belief that creativity thrives within balance.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215485/Magazine_spread_3_a3awsd.jpg",
            tags: ["Editorial", "Layout"],
          },
          {
            name: "Cover variant 01",
            description:
              "First cover variant for Ashe Magazine, featuring Gabriel Moses. This design takes an unconventional approach by positioning the masthead at the bottom, evoking the layout of a Polaroid photograph. The choice reinforces Ashe’s philosophy of placing the creative above the brand, framing Moses as the central subject rather than a contributor to the publication. The grainy texture and subdued tones add a vintage warmth, balancing nostalgia with modern minimalism. The composition and tactile aesthetic capture Ashe’s core identity: a publication that celebrates creativity with both emotional depth and structural intent.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214049/Ashe_1A_nrhzw7.jpg",
            tags: ["Cover", "Typography"],
          },
          {
            name: "Cover variant 02",
            description:
              "This is a more conventional layout than the first variant, placing the masthead at the top and the image is full bleed. It more heavily utilises the gridline/blueprint motif, with the gridlines extending into the image itself. The serif typeface adds a touch of classic sophistication, while the off-white background and muted tones maintain a modern, minimalist aesthetic. Overall, this cover balances traditional editorial design elements with contemporary style, reflecting Ashe’s mission to elevate emerging creatives through thoughtful, intentional design.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1B_sziuz8.jpg",
            tags: ["Cover", "Photography"],
          },
          {
            name: "Cover variant 03",
            description:
              "This is the most conventional layout with the image taking up the full cover and the masthead at the top. Though here it stands out as the type is used as a framing device for the image, with the vertical text used to create a strong visual focal point.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214056/Ashe_1C_pmwiwj.jpg",
            tags: ["Concept", "Photography"],
          },
          {
            name: "Social Post template - 9:16",
            description:
              "Social template for Ashe Magazine featuring Damson Idris. Designed in a 9:16 format with structured grid borders and a central serif caption, the layout blends cinematic warmth with editorial precision. Dramatic lighting, grain, and the top-aligned logo create a cohesive visual language that connects Ashe’s print and digital identity and applies it to a format that is ideal for reels and tiktoks, leaving ample space for the image caption and UI over the video/image.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760217476/social_mockup_9_16_qzfgqr.jpg",
            tags: ["Social Media", "Branding"],
          },
          {
            name: "Social Post template - 4:5",
            description:
              "Designed for feed-based platforms like Instagram and Pinterest, this format translates Ashe’s editorial aesthetic into a static, simplified social post. Diagonal gridlines and star motifs introduce movement within structure, while the warm, grainy portrait and refined serif typography maintain the brand’s balance between creativity and systems.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760217478/Social_mockup_4_3_iryztq.jpg",
            tags: ["Social Media", "Template"],
          },
          {
            name: "Logo Suite",
            description:
              "The ASHE Magazine logo suite captures the balance between business principles and creativity, embodying the brand’s mission to empower creatives through strategic insight. The elegant serif wordmark evokes sophistication, professionalism, and legacy, while the star motif symbolizes creativity, illumination, and ambition. Each logo variation; from the commanding primary mark to the refined monogram — ensures flexibility across editorial, digital, and social contexts. The palette of warm neutrals conveys stability and intellect, contrasted by a vivid red that injects energy, urgency, and empowerment. Together, the suite communicates ASHE’s dual identity: refined yet visionary, strategic yet creative.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350469/Logo_Suite_gw04fi.jpg",
            tags: ["Brand", "Guidelines"],
          },
          {
            name: "Typography Guidelines",
            description:
              "The ASHE Magazine typography system unites classic sophistication with modern clarity to mirror the brand’s blend of artistry and strategy. Scotch Display Light Italic serves as the expressive core; elegant, high-contrast, and evocative of editorial tradition. It captures ASHE’s refined, aspirational tone. Complementing this, Roboto Light provides a clean, versatile foundation that ensures legibility and approachability across print and digital formats.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350471/Typography_Design_oux2ly.jpg",
            tags: ["Brand", "Typography"],
          },
          {
            name: "Photography Guidelines",
            description:
              "The ASHE Magazine photography guidelines establish the visual language for imagery across all platforms. They emphasize the importance of composition, lighting, and subject matter in creating impactful visuals. The guidelines encourage a cinematic approach, with a focus on storytelling and emotional resonance. By providing clear direction on image selection and treatment, these guidelines ensure a cohesive and compelling visual identity for the brand.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350472/Photography_Guide_jbbj4e.jpg",
            tags: ["Brand", "Layout"],
          },
          {
            name: "Website Snapshot — Featured Article Page",
            description:
              "The ASHE Magazine featured articles page showcases the brand’s editorial sophistication and digital clarity. Designed with a clean, structured layout, it balances expressive typography with ample negative space to create a refined reading experience. The use of Scotch Display for headlines evokes elegance and authority, while the neutral color palette and minimal interface keep focus on the content and imagery. High-quality, cinematic photography enhances storytelling, pairing visual depth with thoughtful editorial design.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353058/desktop_q2vpgd.jpg",
            tags: ["Web", "UI"],
          },
          {
            name: "Website Snapshot — Featured Article Page (Tablet)",
            description:
              "This layout translates the desktop’s sophistication into a touch-friendly, mobile-responsive interface. The visual hierarchy is clear, the article imagery is the primary focal point. The use of transparency and layered composition adds depth and cinematic quality, aligning with ASHE’s brand tone of artistry and professionalism. The typography preserves the brand’s editorial feel, with elegant serif headlines and clean sans-serif details, ensuring legibility on mid-sized screens. The navigation is minimal and intuitive, reflecting a luxury digital publication aesthetic; polished, immersive, and user-focused.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353083/Tablet_ljcuaw.jpg",
            tags: ["Web", "Responsive"],
          },
          {
            name: "Website Snapshot — Film Articles Page (Mobile)",
            description:
              "The art/design section of the ASHE Magazine site presents its content in a minimal, vertically structured format optimized for mobile. Each article is showcased with a striking portrait-style image, accompanied by a refined typographic layout beneath. The page highlights the article — “JR’s Street Art to Museum: Monetizing Public Art Without Selling Out” — using generous spacing, soft cream tones, and high-contrast black accents. Metadata such as date, reading time, and author are clearly listed, maintaining editorial credibility and clarity.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353070/mobile_rqkhzc.jpg",
            tags: ["Web", "Mobile"],
          },
        ],
        links: [
          { name: "View Full Website", url: "https://ashemag.netlify.app/" },
        ],
        summary: [
          "For the final execution, I chose to develop the Modern-Baroque direction (Concept 1). This aesthetic felt most aligned with Ashé’s mission; to honour the dignity and sophistication of creative work while challenging the perception that successful artistic careers are unserious. The use of classical visual cues, refined typography, structured layouts, and ornamental details—associates creativity with respectability, flourishing, and cultural value.",
          "Visually, this direction also stands apart from competitors such as GUAP, New Wave, Dazed, and Hunger. While it shares key design principles like minimal colour palettes and clean composition to allow imagery to shine, it maintains a distinctly elegant and timeless tone that feels premium and intellectual.",
          "The second direction, with its hand-drawn flourishes, offered a tactile and expressive quality but lacked the scalability to function as a cohesive brand system across multiple touchpoints. The third direction leaned too heavily into futuristic and sci-fi visual language, distancing it from the grounded cultural richness central to Ashé’s identity.",
          "Building on the Modern-Baroque foundation, I developed comprehensive brand guidelines, print and social media mockups, and a responsive website, ensuring that Ashé maintains visual consistency, emotional resonance, and a strong market distinction across every platform."
        ],
      },
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