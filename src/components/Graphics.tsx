"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

interface GraphicsProps {
  onBackToProjects: () => void;
}

interface GraphicItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  client?: string;
  tools: string[];
  size: "small" | "medium" | "large";
  collection?: {
    images: string[];
    descriptions?: string[];
  };
}

export default function Graphics({
  onBackToProjects,
}: GraphicsProps) {
  const [selectedItem, setSelectedItem] =
    useState<GraphicItem | null>(null);
  const [carouselMode, setCarouselMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock graphic design data
  const graphicItems: GraphicItem[] = [
    {
      id: "1",
      title: "Brand Identity System",
      category: "Branding",
      description:
        "Complete visual identity including logo, color palette, and brand guidelines for a sustainable fashion startup.",
      imageUrl:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1200&fit=crop",
      year: "2024",
      client: "EcoStyle Co.",
      tools: ["Adobe Illustrator", "Figma", "Adobe InDesign"],
      size: "large",
    },
    {
      id: "2",
      title: "Concert Poster Series",
      category: "Print Design",
      description:
        "Dynamic poster series for indie music venue featuring bold typography and experimental layouts.",
      imageUrl:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
      year: "2024",
      client: "The Basement",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      size: "medium",
      collection: {
        images: [
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1569792103839-b3a1d7c1e3d0?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop"
        ],
        descriptions: [
          "Jazz Night - Experimental typography with flowing forms",
          "Electronic Showcase - Geometric patterns and neon aesthetic", 
          "Indie Rock Series - Hand-drawn elements and distressed textures",
          "Acoustic Sessions - Minimal layouts with organic typography"
        ]
      },
    },
    {
      id: "3",
      title: "Logo Collection",
      category: "Logo Design",
      description:
        "Various logo marks created for diverse clients ranging from tech startups to local businesses.",
      imageUrl:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
      year: "2023-2024",
      tools: ["Adobe Illustrator", "Sketch"],
      size: "small",
      collection: {
        images: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop"
        ],
        descriptions: [
          "Tech Startup - Geometric wordmark with custom typography",
          "Organic Skincare - Natural forms with earth tones",
          "Fintech App - Clean iconography with mathematical precision",
          "Typography Studio - Experimental letterforms and texture",
          "Lifestyle Brand - Minimalist mark with flexible applications",
          "Design Conference - Bold symbol with architectural influence"
        ]
      },
    },
    {
      id: "4",
      title: "Magazine Layout",
      category: "Editorial",
      description:
        "Editorial design for quarterly design magazine featuring clean typography and innovative grid systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=900&fit=crop",
      year: "2024",
      client: "Design Quarterly",
      tools: ["Adobe InDesign", "Adobe Photoshop"],
      size: "medium",
    },
    {
      id: "5",
      title: "Package Design System",
      category: "Packaging",
      description:
        "Sustainable packaging design for organic skincare line with minimalist aesthetic and eco-friendly materials.",
      imageUrl:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=1000&fit=crop",
      year: "2024",
      client: "Pure Elements",
      tools: ["Adobe Illustrator", "Adobe Dimension", "Figma"],
      size: "large",
    },
    {
      id: "6",
      title: "Typography Experiments",
      category: "Typography",
      description:
        "Experimental typographic compositions exploring the relationship between form and meaning.",
      imageUrl:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=800&fit=crop",
      year: "2023",
      tools: ["Adobe Illustrator", "Adobe After Effects"],
      size: "medium",
    },
    {
      id: "7",
      title: "Social Media Templates",
      category: "Digital",
      description:
        "Cohesive social media template system for lifestyle brand with flexible grid and color variations.",
      imageUrl:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=600&fit=crop",
      year: "2024",
      client: "Mindful Living",
      tools: ["Figma", "Adobe Photoshop"],
      size: "small",
      collection: {
        images: [
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
        ],
        descriptions: [
          "Instagram Post Template - Grid-based layout with branded elements",
          "Story Template Collection - Vertical formats with consistent typography",
          "Feed Layout System - Cohesive visual identity across all touchpoints"
        ]
      },
    },
    {
      id: "8",
      title: "Event Branding",
      category: "Branding",
      description:
        "Complete event identity for annual design conference including signage, merchandise, and digital assets.",
      imageUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop",
      year: "2023",
      client: "Design Forward",
      tools: ["Adobe Illustrator", "Adobe InDesign", "Figma"],
      size: "large",
    },
    {
      id: "9",
      title: "Icon System",
      category: "Icon Design",
      description:
        "Comprehensive icon library for fintech app featuring consistent stroke weight and geometric forms.",
      imageUrl:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=600&fit=crop",
      year: "2024",
      client: "FinFlow",
      tools: ["Figma", "Adobe Illustrator"],
      size: "small",
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "small":
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case "large":
        return "h-80 md:h-96";
      case "medium":
        return "h-64 md:h-80";
      case "small":
      default:
        return "h-48 md:h-64";
    }
  };

  const handleImageClick = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setCarouselMode(true);
  };

  const handleCarouselClose = () => {
    setCarouselMode(false);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedItem?.collection) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.collection!.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedItem?.collection) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.collection!.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCarouselMode(false);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <div
        className="w-full h-full overflow-y-auto projects-page-mobile hide-scrollbar"
        style={{
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div
          className="mx-auto"
          style={{
            paddingLeft: "var(--content-padding-x)",
            paddingRight: "var(--content-padding-x)",
            paddingBottom: "var(--content-padding-y)",
          }}
        >
          {/* Back Button */}
          <motion.div
            style={{
              marginBottom: "var(--space-6)",
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
          >
            <button
              onClick={onBackToProjects}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "var(--space-2) var(--space-3)",
                border:
                  "var(--border-width) solid var(--border-color)",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                fontFamily: "var(--font-family-inter)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-medium)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="hover:bg-black hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </button>
          </motion.div>

          {/* Header Section */}
          <motion.div
            style={{
              borderBottom:
                "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-4)",
              marginBottom: "var(--space-8)",
              textAlign: "center",
            }}
            className="projects-page-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          >
            <h2
              style={{
                marginBottom: "var(--space-4)",
                fontFamily: "var(--font-family-inter)",
                fontSize: "var(--text-h2)",
                fontWeight: "var(--font-weight-medium)",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                lineHeight: "1.5",
              }}
            >
              Graphic Design
            </h2>
            <p
              style={{
                fontFamily: "var(--font-family-roboto-mono)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--text-body-light)",
                color: "var(--text-primary)",
                lineHeight: "1.6",
                fontStyle: "italic",
              }}
            >
              Visual identity, print design, and digital
              graphics
              <br />
              bringing concepts to life through thoughtful
              design.
            </p>
          </motion.div>

          {/* Graphics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-max">
            {graphicItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`group cursor-pointer ${getSizeClasses(item.size)}`}
                style={{
                  border:
                    "var(--border-width) solid var(--border-color)",
                  backgroundColor: "var(--bg-primary)",
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + index * 0.1,
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Container */}
                <div
                  className={`w-full ${getImageHeight(item.size)} overflow-hidden relative`}
                  style={{
                    borderBottom:
                      "var(--border-width) solid var(--border-color)",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Collection indicator - Always visible */}
                  {item.collection && (
                    <div
                      className="absolute top-3 left-3"
                      style={{
                        backgroundColor: "var(--text-primary)",
                        color: "var(--text-inverse)",
                        padding: "var(--space-1) var(--space-2)",
                        border: "var(--border-width) solid var(--border-color)",
                        fontSize: "10px",
                        fontFamily: "var(--font-family-roboto-mono)",
                        fontWeight: "var(--font-weight-normal)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.collection.images.length} works
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-inverse)",
                        fontFamily: "var(--font-family-inter)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-medium)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.collection ? `View ${item.collection.images.length} Works` : "View Details"}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div
                  style={{
                    padding: "var(--space-4)",
                  }}
                >
                  {/* Category and Year */}
                  <div
                    className="flex justify-between items-center"
                    style={{
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-family-inter)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      style={{
                        fontFamily:
                          "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--text-body-light)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-family-inter)",
                      fontSize: "var(--text-h4)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--text-primary)",
                      textTransform: "uppercase",
                      lineHeight: "1.3",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Client */}
                  {item.client && (
                    <p
                      style={{
                        fontFamily:
                          "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--text-body-light)",
                        color: "var(--text-primary)",
                        fontStyle: "italic",
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      for {item.client}
                    </p>
                  )}

                  {/* Description */}
                  <p
                    style={{
                      fontFamily:
                        "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--text-body-light)",
                      color: "var(--text-primary)",
                      lineHeight: "1.5",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        style={{
                          fontFamily:
                            "var(--font-family-roboto-mono)",
                          fontSize: "10px",
                          fontWeight:
                            "var(--font-weight-normal)",
                          color: "var(--text-primary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          border:
                            "var(--border-width) solid var(--border-color)",
                          padding: "2px 6px",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full mx-4 overflow-y-auto hide-scrollbar"
              style={{
                backgroundColor: "var(--bg-primary)",
                border:
                  "var(--border-width) solid var(--border-color)",
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "var(--space-6)",
                  right: "var(--space-3)",
                  zIndex: 10,
                  padding: "var(--space-2)",
                  border:
                    "var(--border-width) solid var(--border-color)",
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                className="hover:bg-black hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div
                style={{
                  padding: "var(--space-6)",
                  borderBottom:
                    "var(--border-width) solid var(--border-color)",
                }}
              >
                <div
                  className="flex items-start"
                  style={{
                    marginBottom: "var(--space-3)",
                    gap: "var(--space-2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-family-inter)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {selectedItem.category}
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "var(--text-body-light)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {selectedItem.year}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-family-inter)",
                    fontSize: "var(--text-h3)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                    textTransform: "uppercase",
                    lineHeight: "1.3",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {selectedItem.title}
                </h2>

                {selectedItem.client && (
                  <p
                    style={{
                      fontFamily:
                        "var(--font-family-roboto-mono)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--text-body-light)",
                      color: "var(--text-primary)",
                      fontStyle: "italic",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    for {selectedItem.client}
                  </p>
                )}

                <p
                  style={{
                    fontFamily:
                      "var(--font-family-roboto-mono)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--text-body-light)",
                    color: "var(--text-primary)",
                    lineHeight: "1.6",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {selectedItem.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      style={{
                        fontFamily:
                          "var(--font-family-roboto-mono)",
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-normal)",
                        color: "var(--text-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        border:
                          "var(--border-width) solid var(--border-color)",
                        padding:
                          "var(--space-1) var(--space-2)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Images - Collection, Carousel, or Single */}
              <div
                style={{
                  padding: "var(--space-6)",
                }}
              >
                <AnimatePresence mode="wait">
                  {carouselMode && selectedItem.collection ? (
                    /* Carousel View */
                    <motion.div
                      key="carousel"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Carousel Header */}
                      <div
                        className="flex justify-between items-center"
                        style={{
                          marginBottom: "var(--space-4)",
                          paddingBottom: "var(--space-3)",
                          borderBottom: "var(--border-width) solid var(--border-color)",
                        }}
                      >
                        <button
                          onClick={handleCarouselClose}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-2)",
                            padding: "var(--space-2) var(--space-3)",
                            border: "var(--border-width) solid var(--border-color)",
                            backgroundColor: "transparent",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-family-inter)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--font-weight-medium)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          className="hover:bg-black hover:text-white"
                        >
                          <ArrowLeft size={16} />
                          Back to Grid
                        </button>
                        
                        <span
                          style={{
                            fontFamily: "var(--font-family-roboto-mono)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--text-body-light)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {currentImageIndex + 1} of {selectedItem.collection.images.length}
                        </span>
                      </div>

                      {/* Carousel Content */}
                      <div className="relative">
                        {/* Main Image */}
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <img
                            src={selectedItem.collection.images[currentImageIndex]}
                            alt={`${selectedItem.title} - ${currentImageIndex + 1}`}
                            style={{
                              width: "100%",
                              height: "70vh",
                              objectFit: "contain",
                              border: "var(--border-width) solid var(--border-color)",
                            }}
                          />
                        </motion.div>

                        {/* Navigation Arrows */}
                        <button
                          onClick={handlePrevImage}
                          style={{
                            position: "absolute",
                            left: "var(--space-4)",
                            top: "50%",
                            transform: "translateY(-50%)",
                            padding: "var(--space-3)",
                            border: "var(--border-width) solid var(--border-color)",
                            backgroundColor: "var(--bg-primary)",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          className="hover:bg-black hover:text-white"
                        >
                          <ChevronLeft size={20} />
                        </button>

                        <button
                          onClick={handleNextImage}
                          style={{
                            position: "absolute",
                            right: "var(--space-4)",
                            top: "50%",
                            transform: "translateY(-50%)",
                            padding: "var(--space-3)",
                            border: "var(--border-width) solid var(--border-color)",
                            backgroundColor: "var(--bg-primary)",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          className="hover:bg-black hover:text-white"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      {/* Image Description */}
                      {selectedItem.collection.descriptions && selectedItem.collection.descriptions[currentImageIndex] && (
                        <motion.div
                          key={`desc-${currentImageIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          style={{
                            marginTop: "var(--space-4)",
                            paddingTop: "var(--space-4)",
                            borderTop: "var(--border-width) solid var(--border-color)",
                            textAlign: "center",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-family-roboto-mono)",
                              fontSize: "var(--text-base)",
                              fontWeight: "var(--text-body-light)",
                              color: "var(--text-primary)",
                              lineHeight: "1.6",
                              fontStyle: "italic",
                            }}
                          >
                            {selectedItem.collection.descriptions[currentImageIndex]}
                          </p>
                        </motion.div>
                      )}

                      {/* Thumbnail Navigation */}
                      <div
                        className="flex justify-center"
                        style={{
                          marginTop: "var(--space-6)",
                          gap: "var(--space-2)",
                        }}
                      >
                        {selectedItem.collection.images.map((imageUrl, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            style={{
                              width: "60px",
                              height: "60px",
                              border: `${index === currentImageIndex ? '2px' : '1px'} solid var(--border-color)`,
                              backgroundColor: index === currentImageIndex ? "var(--text-primary)" : "transparent",
                              padding: index === currentImageIndex ? "2px" : "0",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <img
                              src={imageUrl}
                              alt={`Thumbnail ${index + 1}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: index === currentImageIndex ? "invert(1)" : "none",
                              }}
                            />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : selectedItem.collection ? (
                    /* Collection Grid Layout */
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="grid gap-6"
                        style={{
                          gridTemplateColumns: selectedItem.collection.images.length <= 2 
                            ? "repeat(1, 1fr)"
                            : selectedItem.collection.images.length <= 4
                            ? "repeat(2, 1fr)" 
                            : "repeat(3, 1fr)",
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        {selectedItem.collection.images.map((imageUrl, index) => (
                          <div key={index} className="group">
                            <div className="relative">
                              <img
                                src={imageUrl}
                                alt={`${selectedItem.title} - ${index + 1}`}
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  objectFit: "cover",
                                  border: "var(--border-width) solid var(--border-color)",
                                  transition: "transform 0.3s ease",
                                  cursor: "pointer",
                                }}
                                className="group-hover:scale-105"
                                onClick={() => handleImageClick(index)}
                              />
                              
                              {/* Click overlay - only covers image */}
                              <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleImageClick(index)}
                              >
                                <span
                                  style={{
                                    color: "var(--text-inverse)",
                                    fontFamily: "var(--font-family-inter)",
                                    fontSize: "var(--text-sm)",
                                    fontWeight: "var(--font-weight-medium)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                  }}
                                >
                                  Expand
                                </span>
                              </div>
                            </div>

                            {selectedItem.collection.descriptions && selectedItem.collection.descriptions[index] && (
                              <p
                                style={{
                                  fontFamily: "var(--font-family-roboto-mono)",
                                  fontSize: "var(--text-sm)",
                                  fontWeight: "var(--text-body-light)",
                                  color: "var(--text-primary)",
                                  lineHeight: "1.5",
                                  marginTop: "var(--space-2)",
                                  fontStyle: "italic",
                                }}
                              >
                                {selectedItem.collection.descriptions[index]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Collection Summary */}
                      <div
                        style={{
                          borderTop: "var(--border-width) solid var(--border-color)",
                          paddingTop: "var(--space-4)",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-family-roboto-mono)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--text-body-light)",
                            color: "var(--text-primary)",
                            lineHeight: "1.6",
                          }}
                        >
                          Collection of {selectedItem.collection.images.length} related works • Click any image to expand
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    /* Single Image Layout */
                    <motion.div
                      key="single"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={selectedItem.imageUrl}
                        alt={selectedItem.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "60vh",
                          objectFit: "contain",
                          border: "var(--border-width) solid var(--border-color)",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}