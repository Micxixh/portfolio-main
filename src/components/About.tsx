'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AboutAccordion from './AboutAccordion';
import image_f03962ec6305114f006afd3614a7c6607cd018e8 from "figma:asset/f03962ec6305114f006afd3614a7c6607cd018e8.png";

export default function About() {
  return (
    <div className="flex h-full w-full mobile-about-page-container" style={{ paddingTop: 'var(--header-padding-top)' }}>
      {/* Portrait Area - Left 1/2 - Continues from Home transition */}
      <motion.div 
        className="relative"
        style={{ width: '50%', height: '100vh' }}
        initial={{ 
          x: '16.666vw', // Starts from Home's exit position
          width: '33.333%' // Starts with Home's exit width
        }}
        animate={{ 
          x: 0, // Moves to final left position
          width: '50%' // Expands to final width
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ImageWithFallback 
          src={image_f03962ec6305114f006afd3614a7c6607cd018e8}
          alt="Micaiah Douglas Portrait"
          className="w-full h-full object-cover"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
        />
      </motion.div>
      
      {/* Content Area - Right 1/2 - Slides in from right */}
      <motion.div 
        className="mobile-about-content-area"
        style={{ 
          width: '50%', 
          height: '100%',
          padding: `var(--space-6) var(--content-padding-x) var(--content-padding-y)`
        }}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        {/* Title Block */}
        <motion.div 
          style={{ 
            borderBottom: 'var(--border-width) solid var(--border-color)', 
            paddingBottom: 'var(--space-6)',
            marginBottom: 'var(--space-6)'
          }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        >
          <h1 
            style={{
              color: 'var(--text-primary)',
              textAlign: 'left'
            }}
          >
            ABOUT ME
          </h1>
        </motion.div>
        
        {/* Accordion */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
        >
          <AboutAccordion />
        </motion.div>
      </motion.div>
    </div>
  );
}