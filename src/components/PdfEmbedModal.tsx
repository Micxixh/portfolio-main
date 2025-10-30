"use client";

import { useEffect, useRef, useState, React } from "react";
import { X } from "lucide-react";

interface Props {
  url: string;
  onClose: () => void;
}

export default function PdfEmbedModal({ url, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Handle Escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    // Fade in after mount
    setTimeout(() => setVisible(true), 10);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close with animation
  const handleClose = () => {
    setExiting(true);
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // matches the CSS transition duration
  };

  // Handle outside click
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(4px)",
        zIndex: 50,
        padding: "var(--space-4)",
        transition: "opacity 0.3s ease",
        opacity: visible && !exiting ? 1 : 0,
      }}
    >
      <div
        ref={modalRef}
        style={{
          marginTop:"var(--space-10)",
          backgroundColor: "rgba(255,255,255,0.95)",
          border: "var(--border-width) solid var(--border-color)",
          borderRadius: "1rem",
          width: "90vw",
          maxWidth: "1080px",
          maxHeight: "720px",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          transform: visible && !exiting ? "scale(1)" : "scale(0.95)",
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "var(--space-4)",
            right: "var(--space-4)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close Modal"
        >
          <X size={24} color="var(--text-primary)" />
        </button>

        {/* PDF Embed */}
        <iframe
          src={url}
          title="PDF Embed"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "1rem",
          }}
        />
      </div>
    </div>
  );
}
