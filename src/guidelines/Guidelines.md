# Micaiah Douglas Portfolio Design System

## Overview
This is a sophisticated portfolio website with a monochromatic design system, premium typography, and complex Motion-based animations. The system emphasizes clarity, precision, and emotional impact through minimalist aesthetics.

## Color System

### Primary Colors
- **Background**: `#FAFAFA` (Off-white) - Primary background for all pages
- **Foreground**: `#000000` (Pure black) - Primary text and accents
- **Dark Surfaces**: `#131313` - Secondary dark backgrounds (accordions, cards)

### Usage Rules
- Always use pure black (`#000000`) for text, borders, and accents
- Off-white background (`#FAFAFA`) must be used as the primary canvas
- Dark surfaces (`#131313`) only for contrast areas like accordion content
- White text (`#FFFFFF`) only on dark backgrounds for legibility

## Typography System

### Font Families
- **Inter**: Headers and interactive elements (Bold/Medium weights)
- **Roboto Mono**: Body text, captions, and code-style elements

### Type Scale
```css
h1: 48px Inter Bold (Uppercase)
h2: 48px Inter Medium (Uppercase)  
h3: 36px Inter Medium (Uppercase)
h4: 24px Inter Semibold (Uppercase)
h5: 28px Roboto Mono Medium (No transform)
h6: 20px Roboto Mono Regular (No transform)
p: 16px Roboto Mono Light
span: 16px Roboto Mono Light
```

### Usage Rules
- **Headers (h1-h4)**: Always uppercase, always Inter font family
- **Body text (p, span)**: Always Roboto Mono Light, normal case
- **Captions (h5-h6)**: Always Roboto Mono, no text transform
- Line height: 1.5 for all elements
- Never override font sizes with Tailwind classes unless explicitly requested

## Spacing System

### Base Scale (8px system)
```css
--space-0: 0px
--space-1: 8px    (xs)
--space-2: 16px   (sm) 
--space-3: 24px   (md)
--space-4: 32px   (lg)
--space-5: 40px
--space-6: 48px   (xl)
--space-8: 64px   (2xl)
--space-10: 80px
--space-12: 96px
--space-15: 120px
--space-20: 160px
```

### Layout-Specific Spacing
```css
--header-height: 86px
--header-padding-top: 120px
--content-padding-x: 48px  (Desktop)
--content-padding-y: 64px  (Desktop) 
--section-gap: 24px
--element-gap: 16px
```

### Usage Rules
- **Always use CSS variables** for spacing: `var(--space-3)` instead of hardcoded `24px`
- **Section spacing**: Use `var(--section-gap)` (24px) between major sections
- **Element spacing**: Use `var(--element-gap)` (16px) between related elements
- **Page margins**: Use `var(--content-padding-x)` and `var(--content-padding-y)`
- **Consistent multiples**: All spacing should be multiples of 8px

## Border System

### Standards
- **Width**: Always `1px` (`var(--border-width)`)
- **Color**: Always `#000000` (`var(--border-color)`)
- **Style**: Always solid
- **Usage**: Dividers, component boundaries, accordion headers

### Rules
- Never use rounded corners (`--radius: 0px`)
- All borders must be pure black
- Use borders to create clear hierarchical separation

## Layout System

### Grid Structure
- **Home**: 2/3 content area + 1/3 portrait
- **About**: 1/2 content area + 1/2 portrait  
- **Projects**: Full-width content area
- **Contact**: Full-width content area
- **Header**: Fixed positioning with 86px height when visible

### Responsive Behavior
- Desktop-first approach
- Maintain proportional relationships on smaller screens
- Portrait positioning adjusts based on screen size and view state

## Animation System

### Motion Framework
- Using `motion/react` (formerly Framer Motion)
- **No opacity fades** - all transitions use position/transform only
- **Horizontal flow** - content slides left/right, never fades

### Easing Functions
```css
/* Standard ease */
ease: [0.25, 0.46, 0.45, 0.94]

/* Smooth ease */  
ease: [0.16, 1, 0.3, 1]

/* Quick ease */
ease: "easeInOut"
```

### Timing Patterns
- **Page transitions**: 0.9s duration
- **Element animations**: 0.6-0.7s duration
- **Micro-interactions**: 0.3s duration
- **Staggered delays**: 0.15s increments

### Rules
- **Movement only**: Never animate opacity for page transitions
- **Staggered timing**: Use deliberate delays for choreographed feel
- **Off-screen positioning**: Use viewport units (`100vw`, `200vw`) for complete exits
- **Z-index management**: Active content at z-10, transitioning at z-5

## Component Guidelines

### Accordion
- Header height: `72px` (`var(--space-9)`)
- Header padding: `0 24px` (`var(--space-3)`)
- Content padding: `16px 20px` (`var(--space-2) var(--space-2.5)`)
- Alternating row backgrounds: `#000000` and `#131313`
- Smooth height animations with `height: auto`
- **Initial state**: All panels start closed by default
- **Closed states**: Background collapsed, chevron pointing right, content hidden

#### Hover Interactions (Inactive Headers Only)
- **Button Transform**: Subtle upward movement (`y: -1px`) in 0.15s
- **Background Expand**: Scale from left (`scaleX: 1`) in 0.25s with smooth easing
- **Title Shift**: Slight rightward movement (`x: 2px`) in 0.15s
- **Chevron Animation**: Rotate to 45° and scale to 1.1x in 0.2s
- **Border Enhancement**: Bottom border expands from left with 0.05s delay
- **Easing**: Uses design system curves `[0.16, 1, 0.3, 1]` and `easeOut`

### Contact Page
- **Layout**: Full-width content area with hidden portrait, side-by-side sections
- **Two-Column Structure**: Contact form (left) + Contact details (right) with center divider
- **Contact Info**: Structured list format with hover interactions
- **Form Elements**: Borderless inputs with bottom borders only
- **Typography**: Inter for labels (uppercase, medium), Roboto Mono Light for inputs
- **Animations**: Staggered entrance animations with 0.1s increments
- **Form Fields**: Name, Email, Message with consistent styling
- **Button**: Primary black background with white expanding hover effect

#### Contact Form Section
- **Section Width**: 50% of available width with 48px right padding
- **Vertical Divider**: 1px black border separating form from contact details
- **Form Styling**: Consistent with design system typography and spacing
- **Animation Timing**: Form appears first with 0.3s delay, faster entrance for primary action

#### Contact Information Display
- **Row Height**: `72px` (`var(--space-9)`) matching accordion pattern
- **Layout**: 1/3 label, 2/3 value with consistent padding
- **Links**: Subtle hover animation (4px rightward movement)
- **Borders**: Bottom borders for visual separation
- **Section Width**: 50% of available width with 48px left padding
- **Animation Timing**: Contact details appear after form with 0.5s delay

### Navigation
- Nav items: Fixed width `128px`
- Nav height: `40px` (`var(--space-5)`)
- Active state: Black background, white text
- Hover: Expanding background with blend-mode effects

### Buttons
- Padding: `12px 24px` (`var(--space-1.5) var(--space-3)`)
- Background: `#000000` with white text
- Hover: White expanding background with blend-mode inversion
- Font: Inter Medium, uppercase

## Blend Mode System

### Usage
- **Headers on backgrounds**: Use `mix-blend-mode: difference` 
- **Interactive elements**: Apply `.blend-difference` class
- **Fallbacks**: Provide color fallbacks for unsupported browsers

### Rules
- Only use on elements over varying backgrounds
- Ensure sufficient contrast in fallback states
- Test across browsers for consistent behavior

### Project Detail Page
- **Full-Page Layout**: UI Designer case study format following visual design best practices
- **Page Header**: White background (#FFFFFF) for main header navigation when viewing project details
- **Clean Title Section**: Project title, action links, and next project button with standard off-white background
- **Eight-Section Structure**: Complete visual design case study with professional storytelling
- **Content Organization**: Clear hierarchy from brief through reflection, focused on visual process
- **Typography Hierarchy**: Systematic use of H2 for sections, H6 for subsections
- **Visual Simplicity**: Generous white space with strategic information grouping
- **Responsive Design**: Adapts from 3-column to 2-column to single-column layouts
- **Project Navigation**: Next project buttons at top (title section) and bottom of page for seamless browsing

#### UI Designer Case Study Sections
1. **Project Overview**: Title & role, context, duration & tools, deliverables (no additional image)
2. **Hero Image**: 60vh showcase image with proper aspect ratio (project main image)
3. **The Brief**: What was the ask, goals, requirements set by stakeholders (no additional image)
4. **Research & Inspiration**: Moodboards, style exploration, competitor benchmarks (50vh moodboard image)
5. **Design Exploration**: Style direction, options tested (50vh wireframe/mockup sketches image)
6. **High-Fidelity UI**: Final screens, key flows, microinteractions (50vh UI interface examples image)
7. **Design System & Components**: Reusable patterns, responsive considerations (50vh design system components image)
8. **Final Outcome**: Hero visuals, mockups in context (50vh mockup presentation image) + expandable prototype/video
9. **Reflection**: Learnings, collaboration, constraints (no additional image)

#### Content Structure & Data (UI Focus)
- **Project Interface**: Extended with UI Designer-specific `caseStudy` object structure
- **Visual Design Focus**: Emphasis on style exploration, visual decisions, and design system creation
- **Realistic UI Data**: Each project includes comprehensive visual design process information
- **Tools & Deliverables**: Focus on design tools (Figma, Photoshop, After Effects) and visual outputs

#### Visual Design Process Elements
- **Style Direction Details**: Colors, typography, grid systems, iconography, branding rationale
- **Design Exploration**: Multiple visual approaches tested with rationale for final direction
- **Component Documentation**: Reusable patterns, responsive behavior, accessibility features
- **Final Presentation**: Hero visuals, contextual mockups, interactive prototypes

#### Visual & Interactive Design
- **Section Spacing**: 96px (`var(--space-12)`) between major sections
- **Animation Choreography**: Staggered entrance with 0.1s incremental delays per section
- **Typography Consistency**: H2 for major sections, H6 for subsections, body text for content
- **Border Separators**: 1px black bottom borders for section headers
- **Interactive Elements**: Disabled state styling for project links (Live Project, Prototype), hover effects on navigation
- **Grid Layouts**: Responsive grids adapt from 3-column to 2-column to single-column
- **Content Grouping**: Tool tags, deliverable lists, and option cards with bordered containers

#### Page Header Styling (Project Detail)
- **Outer Container Background**: Opaque off-white (#FAFAFA) background matching page background when viewing project details
- **Inner Content Area**: Always transparent to maintain proper blend mode functionality and visual hierarchy
- **Context-Aware Styling**: Header outer container changes from transparent to opaque off-white specifically for project detail pages
- **Top-to-Divider Coverage**: Background extends from top of viewport down to and including the divider border for complete visual coverage
- **Blend Mode Preservation**: Inner content remains transparent to ensure proper blend mode effects for navigation interactions
- **Seamless Integration**: Header background perfectly matches page background eliminating any visual separation
- **Design System Integration**: Maintains consistent border treatments and typography hierarchy
- **Visual Cohesion**: Creates unified appearance between header and page content for professional case study presentation

#### Project Navigation Elements
- **Top Next Button**: Positioned in header section, minimal styling with border and right arrow hover animation
- **Bottom Next Button**: Centered at page end with prominent black background, white text, and subtle scale hover effect
- **Button Styling**: Top button uses transparent background with border, bottom button uses solid black with inverse text
- **Hover Interactions**: Top button slides right 4px, bottom button scales to 1.02x for distinct feedback
- **Navigation Logic**: Automatically cycles to first project when reaching the end of the project list
- **Project Names**: Displays "Next: [PROJECT NAME]" in top button, "Next Project: [PROJECT NAME]" in bottom button

#### Visual Content Integration
- **Section Images**: 50vh height for process images (moodboard, wireframes, UI examples, design system, mockups)
- **Hero Image**: 60vh height for main project showcase
- **Image Styling**: 1px black border, object-cover for proper aspect ratio, overflow hidden
- **Image Placement**: Positioned after section header, before content text for optimal visual flow
- **Image Context**: Each image directly relates to section content (moodboard for research, wireframes for exploration, etc.)

#### Expandable Content Features
- **Interactive Prototype**: Click to expand fullscreen overlay with close button and centered content
- **Demo Video**: Click to expand fullscreen overlay with close button and centered content  
- **Overlay Styling**: Fixed position covering full viewport, off-white background matching site aesthetic
- **Animation**: Fade in/out with 0.3s duration using AnimatePresence for smooth transitions
- **Close Functionality**: X button in top-right corner with proper styling and hover states
- **Content Layout**: Centered content with maximum width constraints and proper padding

#### Professional UI Case Study Standards
- **Visual Process Documentation**: Clear progression from inspiration through final execution
- **Style Exploration Transparency**: Multiple approaches considered with rationale for decisions
- **Design System Thinking**: Component-based approach with scalability and consistency focus
- **Technical Considerations**: Responsive design, accessibility, and implementation constraints
- **Collaboration Context**: How visual designs supported UX and development team needs
- **Honest Constraints**: Technical, brand, and timeline limitations that influenced design decisions
- **Portfolio Presentation**: Professional mockups and contextual presentations of final work

## Development Rules

### CSS Variables
- **Always use CSS variables** instead of hardcoded values
- **Semantic naming**: Use `--space-3` not `--spacing-24px`
- **Override with specificity**: Use `!important` only when necessary for blend modes

### File Structure
- **Component isolation**: Each component in separate file
- **Shared styles**: Use globals.css for system tokens
- **Import organization**: Group by functionality (UI, layout, animations)

### Performance
- **Preload fonts**: Google Fonts with `&display=swap`
- **Optimize animations**: Use `transform` over layout properties
- **Z-index management**: Clear stacking contexts for smooth transitions

## Accessibility

### Color Contrast
- Pure black on off-white exceeds WCAG AAA standards
- White text on `#131313` backgrounds meets AA standards
- Blend modes maintain sufficient contrast ratios

### Motion
- Respect `prefers-reduced-motion` for users sensitive to animations
- Provide clear visual hierarchy without relying solely on motion
- Ensure content remains accessible when animations are disabled

## Browser Support

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Progressive Enhancement
- Blend mode fallbacks for older browsers
- CSS Grid with Flexbox fallbacks
- CSS custom properties with reasonable defaults