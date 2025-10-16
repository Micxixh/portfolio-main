'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  return (
    <div 
      className="flex h-full w-full mobile-about-page-container"
      style={{ 
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-primary)',
        overflow: 'hidden'
      }}
    >
      {/* Content Area - Right Half (Static + Scrollable) */}
      <motion.div 
        className="mobile-about-content-area"
        style={{ 
          width: '100%', 
          height: '100vh',
          overflowY: 'auto',
          padding: 'var(--space-8)',
          borderLeft: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)'
        }}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        {/* Title Block */}
        <motion.div 
          style={{ 
            borderBottom: 'var(--border-width) solid var(--border-color)', 
            paddingBottom: 'var(--space-4)'
          }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        >
          <h1 style={{ color: 'var(--text-primary)', textAlign: 'left' }}>
            ABOUT ME
          </h1>
        </motion.div>

        {/* Section 1 */}
        <section style={{border:"1px solid black", padding:"var(--space-4", borderRadius:"0.5rem"}}>
          <h3 style={{ marginBottom: 'var(--space-2)' }}>Who I Am</h3>
          <p>
            I’m a designer and illustrator based in the UK, passionate about merging visual storytelling
            with human-centered design. My work often explores the intersection between culture,
            technology, and community—especially within the Black creative space.
          </p>
        </section>

        {/* Section 2 */}
        <section style={{border:"1px solid black", padding:"var(--space-4", borderRadius:"0.5rem"}}>
          <h3 style={{ marginBottom: 'var(--space-2)' }}>My Approach</h3>
          <p>
            With a background in visual arts and branding, I bring a strong aesthetic sensibility
            to UX and digital design. I believe great design should feel intentional, emotional, 
            and grounded in real stories.
          </p>
        </section>

        {/* Section 3 */}
        <section style={{border:"1px solid black", padding:"var(--space-4", borderRadius:"0.5rem"}}>
          <h3 style={{ marginBottom: 'var(--space-2)' }}>Inspiration</h3>
          <p>
            Outside of work, I’m inspired by animation, hip-hop, and conversations around creative identity.
            I’m always exploring new ways to connect these passions into meaningful design experiences.
          </p>
        </section>

      </motion.div>
    </div>
  );
}
