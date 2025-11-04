export interface StrategicInsight {
  title: string;
  insight: string;
}

export interface DocumentLink {
  title: string;
  url: string;
  type?: "PDF" | "Google Doc" | "Notion" | "Figma" | "Other";
  description?: string;
}

export interface Project {
  id: string;
  year: string;
  name: string;
  category: string;
  description: string;
  image: string;
  caseStudy?: CaseStudy;
  documents?: DocumentLink[];
}

export interface CompetitorProfile {
  name: string;
  toneOfVoice: string;
  mission: string;
  positioning: string;
  visualStyle: string;
  contentOffering: string;
  strengths: string[];
  limitations: string[];
}

export interface CompetitorAnalysis {
  overview: string;
  competitors: CompetitorProfile[];
  documents?: DocumentLink[];
}

export interface ResearchSection {
  competitorAnalysis?: CompetitorAnalysis;
  audienceResearchLink?: string;
  keyFindings?: string;
  designImplications?: string;
  strategicInsights?: StrategicInsight[]; // ✅ updated to use objects instead of strings
  additionalDocs?: DocumentLink[];
}

export interface Deliverable {
  name: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface DeliverableLink {
  name: string;
  url: string;
}

export interface DeliverablesSection {
  items: Deliverable[];
  links?: DeliverableLink[];
  summary?: string[];
}

export interface IdeationDirection {
  name: string;
  description: string;
  images?: string[];
}

export interface CaseStudy {
  overview: {
    context: string;
    tools: string[];
    deliverables?: (string | { name: string; link?: string })[];
  };
  research?: ResearchSection;
  ideation?: {
    directions?: IdeationDirection[];
  };
  deliverables?: DeliverablesSection;
  reflection?: {
    learnings?: string;
    collaboration?: string;
    constraints?: string;
    finalOutcome?: string;
  };
}






// --- Export your optimizedProjects array ---
export const optimizedProjects: Project[] = [
  // === PROJECT 01 — ASHE MAGAZINE === //
  {
    id: "ashe-magazine",
    year: "2025",
    name: "Ashe Magazine",
    category: "Editorial Design / Web Design",
    description:
      "A creative platform and publication empowering emerging artists and designers through storytelling, opportunity, and community.",
    image:
      "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760298162/site_mockup_an0bsf.jpg",

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
        competitorAnalysis: {
          overview: "This competitor analysis compares Ashe Magazine with Bricks, Guap, Dazed, and Hunger, focusing on tone of voice, mission, positioning, visual style, content offering, strengths, and limitations.",
          competitors: [
            {
              name: "Bricks",
              toneOfVoice: "Semi-formal but expressive and friendly",
              mission: "A platform exploring socio-political issues within fashion, music, arts and culture while amplifying activist voices (BLM, Climate change, trans rights).",
              positioning: "Independent, queer-led, activist-minded platform bridging fashion, art, and culture with progressive politics. Audience: young creatives, queer/LGBTQ+ community.",
              visualStyle: "Bold, neon, high-contrast colours, stretched sans serif typography, cyber-influenced Y2K aesthetics, sleek yet retro-futurist, clean structured layout.",
              contentOffering: "Print and digital journalism/editorial. Focus: Fashion, art, music, activism. Bi-annual.",
              strengths: [
                "Skews toward young, progressive, activist-minded creatives",
                "Integrates popular aesthetics (Y2K, cyber, drag influences)",
                "Authentically connected to cultural communities"
              ],
              limitations: [
                "Header hover interaction briefly reduces contrast",
                "Potential over-reliance on neon colours",
                "Highly niche focus may alienate general audience"
              ]
            },
            {
              name: "Guap",
              toneOfVoice: "Informal, conversational and enthusiastic",
              mission: "Tells unseen and authentic stories that inspire, entertain, and have long-lasting impact on pop culture.",
              positioning: "Targeting young, aspiring creatives. Leading UK youth culture platform connecting emerging creatives across music, fashion, business, lifestyle.",
              visualStyle: "Minimal black-and-white palette, semi-bold sans serif typography, polished, micro-interactions, controlled spacing.",
              contentOffering: "Digital editorial, print, events, brand collaborations. Bi-annual.",
              strengths: [
                "High visual polish and professionalism",
                "Balances polish with conversational tone",
                "Credible and forward-thinking"
              ],
              limitations: [
                "Tone can sometimes feel too informal for serious topics",
                "Limited coverage on activist/social issues compared to peers",
                "Print presence is small, may limit reach"
              ]
            },
            {
              name: "Dazed",
              toneOfVoice: "Semi-formal with a polished but conversational tone",
              mission: "Champion radical fashion and youth culture; defining the times alongside next-generation creators.",
              positioning: "Gen Z and younger Millennials (16–30), politically aware, aesthetically experimental. Platform for alternative and underground creators.",
              visualStyle: "Bold eclecticism, black-and-white foundations with bursts of saturated tones, experimental typography, non-uniform layout.",
              contentOffering: "Print, digital editorial, events. Bi-annual.",
              strengths: [
                "Strong appeal to fashion-forward, visually attuned audience",
                "Disruptive, avant-garde content",
                "Distinctive typographic hierarchy"
              ],
              limitations: [
                "Eclectic design may feel chaotic for new readers",
                "Content sometimes prioritizes style over accessibility",
                "Not as strong in digital-only audience engagement"
              ]
            },
            {
              name: "Hunger",
              toneOfVoice: "Informal, heavy use of humour and colloquialisms",
              mission: "Platform for those hungry for alternative perspectives and creative inspiration.",
              positioning: "Gen-Z creatives, especially visual creatives; prioritizes long-form photography and glossy editorials over rapid news.",
              visualStyle: "Restrained colour scheme (dark grey/off-white), strong contrast typography, mix of modern headings and classic serif body, vintage-meets-modern feel.",
              contentOffering: "Print, digital editorial, events. Bi-annual.",
              strengths: [
                "Sophisticated and restrained aesthetic",
                "Timeless visual character",
                "Appeals to visual creatives"
              ],
              limitations: [
                "Limited topical coverage; focuses more on visual/artistic content than social issues",
                "Tone and humour can feel inconsistent across pieces",
                "Smaller editorial team may limit frequency of updates"
              ]
            }
          ],
          documents: [
            {
              title: "Competitor Analysis Spreadsheet",
              url: "https://docs.google.com/spreadsheets/d/1wxDWTxxMAIh-7Ql3FfQHsDjWPIeInSY2pGoaSPlCM5M/edit?usp=sharing",
              type: "Google Doc"
            }
          ]
      },
      audienceResearchLink: "https://drive.google.com/file/d/14UjojnnXCpFsZBF-yCnvcit9uB0j8cxT/preview",
      strategicInsights: [
        {
          title: "Visual Differentiation Beyond Color",
          insight:
            "Editorial brands tend to use a muted or monochrome color palette (with one accent color in some cases) to accommodate for a wide breadth of imagery whilst remaining stylistically recognizable. Similarly, other image-led brands such as Pinterest and Instagram take a similar approach — thus differentiation through other elements of visual language is key.",
        },
        {
          title: "Clarity and Readability Drive Engagement",
          insight:
            "Many competitor publications overload pages with dense blocks of text or inconsistent typography, which can overwhelm readers and reduce engagement. Prioritizing clear hierarchy, using imagery or iconography to break up content, and maintaining ample white space ensures information is digestible while preserving a premium, professional feel.",
        },
        {
          title: "Conversational Professionalism Builds Accessibility",
          insight:
            "Guap, as an industry leader, demonstrates how to adopt a conversational, informal tone while maintaining professionalism. This makes complex business, financial, and economic concepts more approachable. Competitors often rely on formal or semi-formal language, which can alienate creatives unfamiliar with industry jargon.",
        },
      ],
    },

      ideation: {
        directions: [
          {
            name: "Modern x Baroque",
            description:
              "Fuses historical portraiture with modern celebrity culture. Off-white backgrounds, serif typography, and celestial motifs suggest sophistication and creative legacy.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1B_sziuz8.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214049/Ashe_1A_nrhzw7.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1C_pmwiwj.jpg",
            ],
          },
          {
            name: "Handwritten Flourishes and Texture",
            description:
              "Balances professionalism and personality with handwritten flourishes and clean sans-serif typography. Warm tones and texture evoke intimacy and authenticity.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214054/Ashe_2A_rcmxgw.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214047/Ashe_2B_w5kygr.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214048/Ashe_2C_mbtcik.jpg",
            ],
          },
          {
            name: "Geometric Realism",
            description:
              "Reflects Ashe’s focus on creativity and systems through geometric illustration, balancing artistry and structure.",
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
              "Uses precise grids, tonal contrast, and editorial type to echo Ashe’s ethos: creativity elevated through structure.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215486/Magazine_spread_2_xszgsa.jpg",
            tags: ["Editorial", "Print"],
          },
          {
            name: "Interview Spread",
            description:
              "Dynamic grids and clear structure balance rigidity with flow, reflecting Ashe’s philosophy that creativity thrives through intentional systems.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215479/Magazine_spread_1_jgmvla.jpg",
            tags: ["Editorial", "Typography"],
          },
          {
            name: "Feature Article Spread",
            description:
              "Interplay between structured typography and bold color symbolizes balance between art and intention.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760215485/Magazine_spread_3_a3awsd.jpg",
            tags: ["Editorial", "Layout"],
          },
          {
            name: "Cover Variant 01",
            description:
              "Unconventional layout with bottom masthead like a Polaroid — framing creatives as subjects of focus over brand hierarchy.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214049/Ashe_1A_nrhzw7.jpg",
            tags: ["Cover", "Typography"],
          },
          {
            name: "Cover Variant 02",
            description:
              "Refined balance between traditional editorial design and modern minimalism. Gridlines extend into imagery.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214052/Ashe_1B_sziuz8.jpg",
            tags: ["Cover", "Photography"],
          },
          {
            name: "Cover Variant 03",
            description:
              "Full-bleed image and vertical text frame create visual focus and contemporary impact.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760214056/Ashe_1C_pmwiwj.jpg",
            tags: ["Concept", "Photography"],
          },
          {
            name: "Social Post Template — 9:16",
            description:
              "Cinematic and structured layout ideal for reels and TikToks, merging warmth with editorial precision.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760217476/social_mockup_9_16_qzfgqr.jpg",
            tags: ["Social Media", "Branding"],
          },
          {
            name: "Social Post Template — 4:5",
            description:
              "Adapts Ashe’s aesthetic to static posts with refined serif typography and dynamic diagonals.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760217478/Social_mockup_4_3_iryztq.jpg",
            tags: ["Social Media", "Template"],
          },
          {
            name: "Logo Suite",
            description:
              "Elegant serif wordmark and star motif represent creativity, structure, and ambition. Flexible across contexts.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1762198851/Logo_Suite_qrmybi.jpg",
            tags: ["Brand", "Guidelines"],
          },
          {
            name: "Typography Guidelines",
            description:
              "Scotch Display Italic and Roboto Light balance elegance with clarity, mirroring Ashe’s tone.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350471/Typography_Design_oux2ly.jpg",
            tags: ["Brand", "Typography"],
          },
          {
            name: "Photography Guidelines",
            description:
              "Cinematic composition, storytelling focus, and emotional resonance establish cohesive visual tone.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760350472/Photography_Guide_jbbj4e.jpg",
            tags: ["Brand", "Layout"],
          },
          {
            name: "Website Snapshot — Featured Article Page",
            description:
              "Structured, refined layout balancing expressive type with negative space for an elegant reading experience.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353058/desktop_q2vpgd.jpg",
            tags: ["Web", "UI"],
          },
          {
            name: "Website Snapshot — Featured Article Page (Tablet)",
            description:
              "Translates desktop sophistication into touch-optimized format with clear hierarchy and depth.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353083/Tablet_ljcuaw.jpg",
            tags: ["Web", "Responsive"],
          },
          {
            name: "Website Snapshot — Film Articles Page (Mobile)",
            description:
              "Minimal, vertical layout optimized for mobile readability and editorial credibility.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1760353070/mobile_rqkhzc.jpg",
            tags: ["Web", "Mobile"],
          },
        ],
        links: [
          { name: "View Full Website", url: "https://ashemagazine.netlify.app/" },
        ],
        summary: [
          "Final direction: Modern-Baroque — associating creativity with sophistication and cultural value.",
          "Balanced minimalism and elegance for strong brand differentiation.",
          "Alternative concepts lacked either scalability or alignment with Ashe’s cultural tone.",
          "Delivered brand guidelines, print and social mockups, and responsive website ensuring cohesion.",
        ],
      },

      reflection: {
        learnings:
          "Merging emotional storytelling with structural clarity — sophistication can feel alive.",
        collaboration:
          "Worked with local photographers and writers to unify brand voice.",
        constraints:
          "Limited time and resources required disciplined design restraint.",
        finalOutcome:
          "Delivered a cohesive editorial identity and digital experience that embodies creativity grounded in purpose.",
      },
    },
  },

  // === PROJECT 02 — INCOMPLEX === //
  {
    id: "incomplex",
    year: "2025",
    name: "Incomplex",
    category: "Brand Identity / Web Design / UI Design",
    description:
      "A startup agency and contractor network that integrates into organizations to fill technical gaps, offering web and app development, maintenance, UI/UX, and AI integration services.",
    image:
      "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761691159/Main_image_hzbe9q.jpg",

    caseStudy: {
      overview: {
        context:
          "Incomplex is a startup and flexible contractor network designed to embed within organizations, providing technical expertise. The brand required a distinct identity and responsive site communicating clarity and integration.",
        tools: ["Figma", "React", "TypeScript", "Illustrator", "Framer Motion"],
        deliverables: [
          "Brand Identity",
          "Typography Guide",
          "Logo & Brand Marks",
          "Business Card Design",
          "Flyer Mockups",
          "Responsive UI (Mobile, Tablet, Desktop)",
        ],
      },

      research: {
        competitorAnalysis: {
          overview: "",
          competitors: [
            {
              name: "Co-Lab",
              toneOfVoice: "Friendly, collaborative, and transparent — focuses on human connection and trust.",
              mission: "To deliver agency-level quality without the overheads by connecting independent creatives and developers under one collaborative collective.",
              positioning: "Small, UK-based digital collective targeting start-ups and SMEs seeking affordable yet professional creative and web solutions.",
              visualStyle: "Clean and minimal, muted colour palette, strong grid-based layout, sans-serif typography conveying accessibility and simplicity.",
              contentOffering: "Branding, web design and development, app design, SEO, and digital marketing strategy.",
              strengths: [
                "Flexible, collaborative model with a strong community ethos.",
                "Approachable and transparent communication style.",
                "Good balance between design and digital service capabilities."
              ],
              limitations: [
                "Limited emphasis on advanced engineering and AI integration.",
                "Small scale may restrict large enterprise engagements.",
                "Focus on affordability may undermine perception of technical depth."
              ]
            },
            {
              name: "Selbey Anderson",
              toneOfVoice: "Authoritative, strategic, and insight-driven — uses corporate language and polished presentation.",
              mission: "To help ambitious brands solve complex business and marketing challenges through strategy, creativity, and innovation.",
              positioning: "Multi-agency marketing and creative communications group serving enterprise and global clients seeking integrated brand transformation.",
              visualStyle: "High-end corporate aesthetic — dark mode palette, serif and sans-serif combinations, structured typography, strong visual hierarchy.",
              contentOffering: "Brand strategy, communications, digital marketing, creative campaigns, research, and innovation consulting.",
              strengths: [
                "Deep strategic expertise and research-driven approach.",
                "Strong reputation and credibility across the creative and marketing sector.",
                "Extensive resources through a multi-agency group model."
              ],
              limitations: [
                "Less focus on technical execution or product engineering.",
                "Less agile — slower to adapt to project-specific integration.",
                "High cost structure limits appeal for mid-sized or smaller clients."
              ]
            },
            {
              name: "Stringo Media",
              toneOfVoice: "Direct, performance-focused, and results-oriented — emphasizes efficiency and measurable outcomes.",
              mission: "To empower businesses with data-driven digital marketing and web solutions that generate measurable growth and ROI.",
              positioning: "Digital performance and media agency focusing on marketing automation, analytics, and content strategy for SMEs and mid-size clients.",
              visualStyle: "Corporate yet approachable — bold accent colours (orange/blue), clean typography, and structured layout optimized for clarity and conversion.",
              contentOffering: "Digital strategy, paid advertising, SEO, web design, social media, and analytics.",
              strengths: [
                "Strong focus on measurable business results and conversion optimization.",
                "Combines creative and analytical disciplines effectively.",
                "Streamlined site experience built for clarity and client reassurance."
              ],
              limitations: [
                "Limited creative or brand identity work.",
                "No visible emphasis on team integration or embedded collaboration.",
                "Minimal technical or engineering capability beyond standard web and CMS builds."
              ]
            },
            {
              name: "Dina",
              toneOfVoice: "Professional, technical, and consultancy-focused — prioritizes clarity and trust over emotion.",
              mission: "To deliver integrated IT, cloud, and security solutions that empower digital transformation for modern enterprises.", 
              positioning: "Established Swiss IT consultancy specializing in infrastructure, security, and enterprise technology transformation.",
              visualStyle: "Clean and minimal corporate aesthetic — blue and white palette, geometric grid, modular interface reflecting engineering precision.",
              contentOffering: "Cloud architecture, IT governance, cybersecurity, SAP integration, consulting, and infrastructure solutions.",
              strengths: [
                "High technical credibility and large-scale enterprise capability.",
                "Strong focus on cloud, security, and infrastructure consulting.",
                "Well-established reputation and experienced technical staff."
              ],
              limitations: [
                "Lacks creative/UX focus or design-driven positioning.",
                "Not oriented toward agile or embedded team models.",
                "Service offering can feel rigid compared to dynamic startups."
              ]
            }
        ],
        },
        additionalDocs: [
          {
            title: "Client Brief",
            url: "https://drive.google.com/file/d/1dFFKOx07hApV-W9ht1q03RmpP1607EDd/preview",
            type: "PDF",
            description: "Outlines Ashe Magazine’s goals, target audience, and project requirements.",
          },
        ],
        strategicInsights: [
          {
            title: "Opportunity for Human-Centric Branding",
            insight: "Competitors like Co-Lab emphasize community and collaboration, showing a gap for brands that can combine strong creative design with a personable, trust-driven client experience."
          },
          {
            title: "High-End Strategy Differentiation",
            insight: "Selbey Anderson demonstrates that authoritative, insight-driven strategy is valued by enterprise clients. There is an opportunity to differentiate by combining strategic rigor with creative execution for mid-market clients."
          },
          {
            title: "Technical Depth as a Market Gap",
            insight: "Dina shows strong technical credibility but lacks UX/design focus. There’s an opportunity to offer seamless integration of technical solutions with user-centered design for clients seeking both reliability and experience-driven solutions."
          },
          {
            title: "Brand Positioning Clarity",
            insight: "Visual styles and tone of voice vary widely, from friendly and approachable to corporate and authoritative. Clear, consistent brand positioning that communicates both trust and capability can differentiate the offering in a crowded market."
          }
        ]

      },

      ideation: {
        directions: [
          {
            name: "Direction 01 — Humanised Exploration",
            description: 
              "This direction takes an illustrative and creative approach to humanise a highly technical and metrics-driven industry. Using a forest motif, it metaphorically represents Incomplex guiding clients out of the confusion and complexity of their current workflows and into clarity and actionable solutions. The visual style is rich in detail and texture, creating an emotional connection with the audience, while the high-contrast colour palette of saturated oranges, cooler blues, and dark teals establishes energy and trust. Hero mockups for both mobile and desktop explore varied compositions and perspectives to reinforce approachability, warmth, and the idea of personal guidance, emphasizing that Incomplex bridges gaps in capability while remaining empathetic and relatable.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761652654/Desktop_hero_1_h08vrv.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761652654/Mobile_hero_1_axilxr.jpg"
            ],
          },
          {
            name: "Direction 02 — Bridging the Gap",
            description: 
              "This direction takes a more literal and architectural approach, illustrating Incomplex as a bridge between client vision and desired reality. The motif features a large hand placing a cornerstone, symbolically connecting a small town to a large city — an aspirational visual metaphor for growth, scalability, and progress. The design is modern and structured, leveraging grid-based layouts, clean lines, and a high-contrast palette of saturated oranges and cooler blues to reinforce technical competence and forward-thinking ideals. Hero mockups for desktop and mobile explore spatial hierarchy and visual clarity, ensuring the narrative communicates precision, professionalism, and strategic impact. This direction positions the brand as authoritative and capable while remaining visually engaging and inspiring confidence in complex problem-solving.",
            images: [
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761652655/Desktop_hero_2_yqlmdt.jpg",
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761652654/Mobile_hero_2_pi8xwz.jpg"
            ],
          }
        ]
      },  

      deliverables: {
        items: [
          {
            name: "Typography Guide",
            description:
              "Roboto Condensed and Roboto Light express technical precision and clarity.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761754103/typography_guide_sa9wgm.png",
            tags: ["Brand", "Typography"],
          },
          {
            name: "Logo & Brand Marks",
            description:
              "Clean geometry and minimal forms are versatile. This logo suite allows for a wide variety of usages and expresses adaptability and InComplex's technical ethos.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761754099/logo_suite_lvqqrl.png",
            tags: ["Brand", "Identity"],
          },
          {
            name: "Responsive UI — Mobile",
            description:
              "Compact layout prioritizing navigation ease and clarity for small screens.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761754601/Screenshot_2025-10-29_at_16.16.24_kqg37c.png",
            tags: ["Web", "UI"],
          },
          {
            name: "Responsive UI — Tablet",
            description:
              "Optimized for touch while preserving desktop hierarchy and balance.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761754758/Screenshot_2025-10-29_at_16.18.41_pqgfzz.png",
            tags: ["Web", "Responsive"],
          },
          {
            name: "Responsive UI — Desktop",
            description:
              "Illustrated full-bleed hero section with smooth motion transitions to convey sophistication and structure.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761754467/Screenshot_2025-10-29_at_16.13.27_fnfp1j.png",
            tags: ["Web", "UI"],
          },
          {
            name: "Illustrated Graphics + Icons",
            description:
              "Playful graphics in a clean, minimal and cel-shaded style; to create a sense of warmth whilst maintaining the brand's modern aesthetic.",
            image:
              "https://res.cloudinary.com/dfsmaylfo/image/upload/v1761753116/Icons_and_graphics_cwctrm.png",
            tags: ["Web", "UI"],
          },
        ],
        links: [
          {
            name: "High Fidelity Prototype",
            url: "https://1ncomplex.netlify.app/"
          }
        ],
        summary: [
          " Whilst both potential directions utilise illustration to humanise the brand and add an opproachaple and playful feel; We decided to pursue the more modern approach with the buildings and bridging the gap motif. In an era of AI and rapid change in the industry, being seen as forward thinking and adaptable is particularly important. This direction is far more in alignment with that messaging",
          "I personally designed the user interface of the site (see the high fidelity prototype with partial functionality below). Designing it fully in Figma, then using AI to enhance with complex scroll animations and practical code to be used as reference for incomplex's development team. I also developed a logo suite, typography system and personally hand drew all of the icons and illustrations throughout the site using photoshop and adobe Illustrator.",
        ],
      },  

      reflection: {
        learnings:
          "Reinforced the value of designing systems that express both clarity and accessibility.",
        collaboration:
          "Worked closely with the founder to align visual tone with messaging.",
        constraints:
          "Limited startup resources required lean, scalable design execution.",
        finalOutcome:
          "Delivered a comprehensive identity and website positioning Incomplex as a modern, trustworthy technical partner.",
      },
    },
  },
];

// --- Default export --- //
export default optimizedProjects;

// --- API Utility --- //
export const OptimizedProjectsAPI = {
  getAllProjects: async (): Promise<Project[]> =>
    new Promise((resolve) => setTimeout(() => resolve(optimizedProjects), 500)),

  getProjectById: async (id: string): Promise<Project | null> =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(optimizedProjects.find((p) => p.id === id) ?? null),
        500
      )
    ),

  searchProjects: async (query: string): Promise<Project[]> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            optimizedProjects.filter((p) =>
              p.name.toLowerCase().includes(query.toLowerCase())
            )
          ),
        500
      )
    ),

  getProjectsByCategory: async (category: string): Promise<Project[]> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            optimizedProjects.filter((p) =>
              p.category.toLowerCase().includes(category.toLowerCase())
            )
          ),
        500
      )
    ),

  getProjectsByYear: async (year: string): Promise<Project[]> =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(optimizedProjects.filter((p) => p.year === year)),
        500
      )
    ),
};
