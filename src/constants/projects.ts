import exampleImage from "figma:asset/c92a18dc5b8001821491adede7a4a0855a7cc3c9.png";

export interface Project {
  id: number;
  name: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy?: {
    overview: {
      role: string;
      context: string;
      duration: string;
      tools: string[];
      deliverables: string[];
    };
    brief: {
      ask: string;
      goals: string[];
      requirements: string[];
    };
    research: {
      moodboards: string;
      styleExploration: string;
      competitorBenchmarks: string[];
      visualDirections: string[];
      accessibility: string;
    };
    exploration: {
      wireframes?: string;
      styleDirection: {
        colors: string;
        typography: string;
        grid: string;
        iconography: string;
        branding: string;
      };
      optionsTested: Array<{
        title: string;
        description: string;
      }>;
    };
    highFidelityUI: {
      finalScreens: string[];
      keyFlows: string[];
      microinteractions: string;
      beforeAfter?: string;
    };
    designSystem: {
      components: string[];
      responsiveConsiderations: string;
      accessibilityFeatures: string;
      scalingApproach: string;
    };
    finalOutcome: {
      heroVisuals: string;
      mockupsInContext: string;
      prototypeLink?: string;
      demoVideo?: string;
    };
    reflection: {
      learnings: string;
      collaboration: string;
      constraints: string;
    };
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    name: "DIGITAL WELLNESS APP",
    title: "Mindful Technology",
    category: "Mobile Application",
    year: "2024",
    description:
      "A comprehensive mobile application designed to help users maintain healthy relationships with technology. Features mindful usage tracking, customizable break reminders, and progressive goal setting to promote digital wellbeing without sacrificing productivity.",
    image: exampleImage,
    tags: ["UX Design", "Mobile", "Health Tech", "Behavioral Design"],
    caseStudy: {
      overview: {
        role: "UI Designer",
        context: "Personal Project",
        duration: "4 months",
        tools: ["Figma", "Photoshop", "After Effects", "Principle"],
        deliverables: ["High-fidelity mobile UI", "Interactive prototype", "Design system", "Icon set", "Marketing visuals"]
      },
      brief: {
        ask: "Design a calming, non-judgmental mobile app interface that helps users develop healthier digital habits without creating anxiety or shame around screen time usage.",
        goals: ["Create visually calming interface", "Establish clear visual hierarchy", "Design inclusive and accessible UI", "Develop cohesive design system"],
        requirements: ["WCAG 2.1 AA compliance", "iOS and Android compatibility", "Dark/light mode support", "Scalable component system"]
      },
      research: {
        moodboards: "Gathered inspiration from mindfulness apps, nature photography, and minimal Scandinavian design focusing on calm colors, generous white space, and gentle typography.",
        styleExploration: "Explored three visual directions: Medical/Clinical (stark whites and blues), Nature-Inspired (greens and earth tones), and Minimal/Contemporary (soft grays and muted accents).",
        competitorBenchmarks: ["Apple Screen Time (too clinical)", "Forest (gamified but overwhelming)", "Headspace (calming but not data-focused)", "RescueTime (too analytical)"],
        visualDirections: ["Warm minimalism with soft greens", "Monochromatic with blue accents", "Nature-inspired with organic shapes"],
        accessibility: "Researched color contrast ratios for anxiety-prone users, font readability for various ages, and iconography clarity for cognitive accessibility."
      },
      exploration: {
        styleDirection: {
          colors: "Soft sage green primary (#7FB069), warm gray neutrals, and calming off-whites to create a non-clinical, supportive atmosphere",
          typography: "Inter for headings (clear hierarchy) and SF Pro for body text (iOS native feel) with generous line spacing for readability",
          grid: "8px baseline grid with generous 24px margins, ensuring breathable layouts that don't feel cramped or overwhelming",
          iconography: "Custom icon set with rounded corners and consistent 2px stroke weight, focusing on friendly, approachable symbols",
          branding: "Gentle, encouraging tone with organic shapes and soft gradients to contrast the harsh edges typically found in productivity apps"
        },
        optionsTested: [
          {
            title: "Data-Heavy Dashboard",
            description: "Complex charts and detailed analytics - rejected for being too overwhelming and potentially anxiety-inducing"
          },
          {
            title: "Gamified Progress",
            description: "Achievement badges and streak counters - refined to be more subtle and focused on intrinsic motivation rather than competition"
          },
          {
            title: "Minimal Awareness",
            description: "Simple, gentle nudges with essential information only - selected as the primary approach for its calming effect"
          }
        ]
      },
      highFidelityUI: {
        finalScreens: ["Home dashboard", "Usage insights", "Break reminders", "Goal setting", "Profile & settings", "Onboarding flow"],
        keyFlows: ["First-time setup", "Daily check-in", "Custom break creation", "Progress review"],
        microinteractions: "Gentle haptic feedback on interactions, smooth spring animations for state changes, and progressive disclosure with fade-in effects to maintain calm user experience.",
        beforeAfter: "Transformed typical 'screen time shame' interfaces into supportive, awareness-building experiences through color psychology and thoughtful information hierarchy."
      },
      designSystem: {
        components: ["Custom buttons with soft shadows", "Progress indicators with organic shapes", "Input fields with subtle borders", "Cards with gentle gradients", "Navigation with smooth transitions"],
        responsiveConsiderations: "Designed mobile-first with touch targets meeting 44px minimum, scalable typography system, and flexible grid that adapts gracefully to various screen sizes.",
        accessibilityFeatures: "4.5:1 contrast ratios minimum, focus indicators, screen reader support, and reduced motion options for users with vestibular disorders.",
        scalingApproach: "Token-based design system with semantic color naming, consistent spacing scale, and modular components that work across iOS and Android platforms."
      },
      finalOutcome: {
        heroVisuals: "Clean, aspirational mockups showing the app in real-world contexts - morning routine, work breaks, evening wind-down - emphasizing lifestyle integration over pure functionality.",
        mockupsInContext: "iPhone mockups in lifestyle settings, Apple Watch integration visuals, and desktop companion app concepts showing cross-platform ecosystem.",
        prototypeLink: "Interactive Figma prototype demonstrating key user flows",
        demoVideo: "60-second motion graphics video showcasing the app's calming aesthetic and core interactions"
      },
      reflection: {
        learnings: "Learned to balance data visualization with emotional well-being - discovered that how you present information is as important as the information itself. Also developed expertise in designing for mental health considerations.",
        collaboration: "Worked closely with a behavioral psychologist to ensure visual choices supported positive habit formation rather than creating shame or anxiety around usage patterns.",
        constraints: "Limited to mobile-first design due to timeline constraints - would have loved to explore tablet and desktop experiences. Also had to balance feature requests with the core principle of simplicity."
      }
    }
  },
  {
    id: 2,
    name: "SUSTAINABLE FASHION PLATFORM",
    title: "Ethical Commerce",
    category: "E-commerce Platform",
    year: "2024",
    description:
      "An e-commerce platform connecting conscious consumers with ethical fashion brands. Built with transparency in mind, featuring supply chain tracking, sustainability scores, and community-driven reviews to make responsible fashion choices easier.",
    image: exampleImage,
    tags: ["Web Design", "E-commerce", "Sustainability", "UI/UX"],
  },
  {
    id: 3,
    name: "LOCAL FOOD NETWORK",
    title: "Community Connection",
    category: "Web Application",
    year: "2023",
    description:
      "A web application bridging the gap between local farmers and community members. Enables direct-to-consumer sales, seasonal produce planning, and community-supported agriculture programs to strengthen local food systems.",
    image: exampleImage,
    tags: ["Product Design", "Community", "Agriculture", "Local Economy"],
  },
  {
    id: 4,
    name: "CREATIVE COLLABORATION HUB",
    title: "Remote Teamwork",
    category: "Digital Platform",
    year: "2023",
    description:
      "A digital workspace designed for distributed creative teams. Features real-time collaboration tools, version control for creative assets, and integrated feedback systems to streamline the creative process from concept to completion.",
    image: exampleImage,
    tags: ["Collaboration Tools", "Creative Workflow", "Team Management", "Digital Assets"],
  },
];

export const ANIMATION_CONFIG = {
  PAGE_TRANSITION: {
    DURATION: 0.9,
    EASING: [0.25, 0.46, 0.45, 0.94] as const,
  },
  CARD_TRANSITION: {
    DURATION: 0.7,
    EASING: [0.16, 1, 0.3, 1] as const,
  },
  STAGGER_DELAY: 0.15,
  HOVER_DURATION: 0.3,
};

export const LAYOUT_CONFIG = {
  GRID: {
    COLUMNS: 2,
    GAP: "var(--space-8)",
    CARD_ASPECT_RATIO: "3/2",
  },
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1440,
  },
};