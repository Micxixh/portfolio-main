import React, { useState, useRef, useEffect,useLayoutEffect } from "react";
import {motion, useMotionValue, useTransform, useAnimationFrame} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Direction {
  name: string;
  description: string;
  images?: string[];
}

interface IdeationCarouselProps {
  directions?: Direction[];
}

export default function IdeationCarousel({ directions }: IdeationCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);

  // 🧠 Detect mobile viewport
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!directions || directions.length === 0) return null;

  return (
    <section className="w-full flex flex-col items-center mt-16 space-y-20">
      {directions.map((direction, index) =>
        isMobile ? (
          // 📱 --- MOBILE LAYOUT ---
          <div
            key={index}
            className="w-full border border-neutral-200 rounded-xl bg-white"
            style={{ marginBottom: "1.5rem" }}
          >
            {direction.images && direction.images.length > 0 && (
              <MobileCarousel images={direction.images} />
            )}

            <div className="p-6 flex flex-col space-y-3" style={{ padding: "1.5rem", gap: "1rem", textAlign: "left" }}>
              <p className="text-xs text-neutral-500 tracking-widest uppercase">
                Direction {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-semibold leading-snug">{direction.name}</h3>
              <p className="text-neutral-600 text-base leading-relaxed">
                {direction.description}
              </p>
            </div>
          </div>
        ) : (


          // 💻 --- DESKTOP LAYOUT ---
          <div key={index} className="w-full border" style={{ marginBottom: "1.5rem" }}>
            {direction.images && direction.images.length > 0 && (
              <div className="relative w-full overflow-visible bg-neutral-50">
                <DirectionCarousel images={direction.images} />
              </div>
            )}

            <div
              className="max-w-[1080px] w-full mx-auto flex mt-10 px-6"
              style={{ width: "90%", maxWidth: "1080px" }}
            >
              <div
                className="w-full pr-6"
                style={{
                  borderRight: "2px solid",
                  padding: "1.5rem",
                  marginRight: "1.5rem",
                }}
              >
                <p
                  className="text-sm text-neutral-500 tracking-widest mb-2 text-right"
                  style={{ letterSpacing: "0.1em", textAlign: "right" }}
                >
                  Potential Direction {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  className="w-full text-3xl font-semibold align-right text-right tracking-tight leading-snug border-r"
                  style={{ textAlign: "right" }}
                >
                  {direction.name}
                </h3>
              </div>

              <p
                className="w-full text-muted-foreground text-lg leading-relaxed"
                style={{ padding: "1.5rem", textAlign: "left" }}
              >
                {direction.description}
              </p>
            </div>
          </div>
        )
      )}
    </section>
  );
}

function DirectionCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [paddingX, setPaddingX] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // track hover state

  const total = images.length;
  const gap = 80;

  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  // Measure layout sizes
  useLayoutEffect(() => {
    const measure = () => {
      if (!wrapperRef.current || !trackRef.current) return;
      const firstSlide = trackRef.current.querySelector(".slide") as HTMLElement | null;
      if (!firstSlide) return;

      const sWidth = firstSlide.offsetWidth;
      const cWidth = wrapperRef.current.offsetWidth;
      setSlideWidth(sWidth);
      setContainerWidth(cWidth);
      setPaddingX(cWidth / 2 - sWidth / 2);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [images]);

  // Arrow key navigation for desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return; // only respond if hovered
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered]);

  const getTranslateX = () => {
    if (!slideWidth || !containerWidth) return 0;
    const step = slideWidth + gap;
    return -(current * step);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-start w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#000", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🌌 Background */}
      <motion.div
        key={current}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(30px) brightness(0.4)",
          transform: "scale(1.05)",
        }}
      />

      {/* 🖼️ Track */}
      <motion.div
        ref={trackRef}
        className="flex items-center z-10"
        animate={{ x: getTranslateX() }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.35, 1] }}
        style={{
          gap: `${gap}px`,
          alignItems: "center",
          willChange: "transform",
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
        }}
      >
      {images.map((src, i) => (
          <div
            key={i}
            className={`slide flex-shrink-0 transition-transform duration-500 ${
              i === current ? "scale-100 opacity-100" : "scale-95 opacity-70"
            }`}
            style={{
              width: "min(55vw, 950px)",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer", // indicate clickable
            }}
            onClick={() => setCurrent(i)} // ⬅️ jump to clicked slide
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "0.75rem",
              }}
            />
          </div>
        ))}

      </motion.div>

      {/* ⬅️ Prev */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 top-0 h-full flex items-center justify-center bg-black/60 hover:bg-black/80 transition-all"
        style={{
          width: 64,
          zIndex: 50,
          borderRadius: "0.75rem",
          backgroundColor: "#000000ff",
          color: "white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      {/* ➡️ Next */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 top-0 h-full flex items-center justify-center bg-black/60 hover:bg-black/80 transition-all"
        style={{
          width: 64,
          zIndex: 50,
          borderRadius: "0.75rem",
          backgroundColor: "#000000ff",
          color: "white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}







function MobileCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);

  // Measure drag range
  useEffect(() => {
    const measure = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        const max = Math.max(trackWidth - containerWidth, 0);
        setMaxDrag(max);
      }
    };
    // Delay measurement to allow layout to render
    const timeout = setTimeout(measure, 50);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", measure);
    };
  }, [images]);

  // Update background based on drag progress
  useAnimationFrame(() => {
    if (maxDrag > 0) {
      const progress = Math.abs(x.get()) / maxDrag;
      const index = Math.min(images.length - 1, Math.floor(progress * images.length));
      setCurrent(index);
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        height: "70vh",
        backgroundColor: "#000",
        position: "relative",
        touchAction: "pan-y",
      }}
    >
      {/* 🌫 Blurred background */}
      <motion.div
        key={current}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(25px) brightness(0.5)",
          transform: "scale(1.05)",
        }}
      />

      {/* 🖼️ Image Track */}
      <motion.div
        ref={trackRef}
        className="flex gap-4 z-10"
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        dragElastic={0.1}
        style={{
          x,
          overflowX:"visible",
          cursor: "grab",
          alignItems: "center",
          padding: "5vw",
          zIndex: 10,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 flex justify-center items-center"
            style={{
              width: "80vw",
              height: "60vh",
              borderRadius: "1rem",
              overflow: "hidden",
              flex: "0 0 auto",
              position: "relative",
              zIndex: 10,
            }}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="object-contain w-full h-full"
              style={{
                borderRadius: "0.75rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}



