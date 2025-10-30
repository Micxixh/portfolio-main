import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface DeliverableItem {
  name: string;
  image: string;
  description?: string;
}

interface BentoGridProps {
  items: DeliverableItem[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* 🧊 Masonry Bento Grid */}
      <motion.div
        layout
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)", // full bleed
          columnCount: 4,
          columnGap: "var(--space-4)",
          padding: "var(--space-4)",
          boxSizing: "border-box",
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            layout
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(item)}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "var(--radius-lg)",
              border: "var(--border-width) solid var(--border-color)",
              cursor: "pointer",
              marginBottom: "var(--space-4)",
              breakInside: "avoid", // ensures proper masonry flow
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                transition: "transform 0.4s ease", 
                borderRadius: "0.5rem",
              }}
            />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-md)",
                textAlign: "center",
                padding: "var(--space-2)",
              }}
            >
              {item.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>


      {/* 🪟 Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop:"var(--space-10)",
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "var(--space-6)",
              boxSizing: "border-box",
              overflowY: "auto",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: "var(--background-primary)",
                borderRadius: "1rem",
                border: "var(--border-width) solid var(--border-color)",
                width: "min(80vw, 900px)",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                color: "var(--text-primary)",
                boxShadow: "0 0 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Image */}
              <div
                style={{
                  flexShrink: 0,
                  backgroundColor: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "var(--space-4)",
                  maxHeight: "65vh",
                }}
              >
                <img
                  src={selected.image}
                  alt={selected.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    borderRadius: "var(--radius-md)",
                  }}
                />
              </div>

              {/* Info Section */}
              <div
                style={{
                  padding: "var(--space-4)",
                  borderTop: "var(--border-width) solid var(--border-color)",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  color: "white",
                  overflowY: "auto",
                }}
              >
                {/* Name */}
                <h3
                  style={{
                    marginBottom: "var(--space-2)",
                    fontFamily: "var(--font-family-roboto-mono)",
                    fontSize: "var(--text-lg)",
                  }}
                >
                  {selected.name}
                </h3>

                {/* Description */}
                {selected.description && (
                  <p
                    style={{
                      opacity: 0.85,
                      fontFamily: "var(--font-family-inter)",
                      lineHeight: 1.6,
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {selected.description}
                  </p>
                )}

                {/* Tags */}
                {selected.tags && selected.tags.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-2)",
                    }}
                  >
                    {selected.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderRadius: "9999px",
                          padding: "4px 10px",
                          fontSize: "var(--text-sm)",
                          fontFamily: "var(--font-family-roboto-mono)",
                          color: "white",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



    </>
  );
}
