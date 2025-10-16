import React, { useState, useRef, useEffect } from "react";
import { color, motion, transform, vw } from "framer-motion";
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
            className="w-full border border-neutral-200 rounded-xl bg-white overflow-hidden"
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
  const [slideWidth, setSlideWidth] = useState(0);
  const [ratios, setRatios] = useState([]);
  const trackRef = useRef(null);

  const total = images.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // measure slide width
useEffect(() => {
  const updateWidth = () => {
    if (!trackRef.current) return;
    const firstSlide = trackRef.current.querySelector(".slide") as HTMLElement;
    if (firstSlide) {
      const width = firstSlide.offsetWidth;
      setSlideWidth(width);
    }
  };

  updateWidth();
  window.addEventListener("resize", updateWidth);
  return () => window.removeEventListener("resize", updateWidth);
}, [images]);


  // load ratios
  useEffect(() => {
    const loadRatios = async () => {
      const promises = images.map(
        (src) =>
          new Promise<number>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img.width / img.height);
            img.onerror = () => resolve(1);
            img.src = src;
          })
      );
      const results = await Promise.all(promises);
      setRatios(results);
    };
    loadRatios();
  }, [images]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden border"
      style={{
        backgroundColor: "#000",
        borderColor: "var(--border-color)",
        position: "relative",
      }}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-[2px]"
        animate={slideWidth ? { x: -current * slideWidth + slideWidth } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ gap: "0.5rem", padding: "1rem 0" }}
      >

        {images.map((image, i) => {
          const ratio = ratios[i];
          const isLandscape = ratio && ratio > 1;
          return (
            <div
              key={i}
              className={`slide flex-shrink-0 transition-all duration-700 ${
                i === current ? "scale-100 opacity-100" : "scale-95 opacity-70"
              }`}
              style={{
                width: "70vw",
                maxWidth: "900px",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  backgroundColor: "#111",
                  ...(isLandscape
                    ? { width: "100%", height: "auto", maxWidth: "900px" }
                    : { width: "auto", height: "100%", maxHeight: "80vh" }),
                }}
              />
            </div>
          );
        })}
      </motion.div>

      {/* navigation buttons */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 top-0 h-full flex items-center justify-center border-r
                   bg-black/60 hover:bg-black/80 transition-all w-12 sm:w-16"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", width: "4rem" }}
      >
        <ChevronLeft className="w-8 h-8 text-white" style={{ color: "white" }} />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 top-0 h-full flex items-center justify-center border-l
                   bg-black/60 hover:bg-black/80 transition-all w-12 sm:w-16"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", width: "4rem" }}
      >
        <ChevronRight className="w-8 h-8 text-white" style={{ color: "white" }} />
      </button>
    </div>
  );
}

  function MobileCarousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth; // use container width (viewport equivalent)
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className="w-full flex flex-col items-center bg-black"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={scrollRef}
      >
        <div
          className="flex snap-x snap-mandatory"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            width: "300vw",
            transform: "translateX(100vw)",
            overflow: "visible",
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-full snap-start flex justify-center items-center"
              style={{ width: "100vw" }} // ensure each image takes full viewport width
            >
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                style={{
                  width: "100vw",
                  height: "auto",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  backgroundColor: "#111",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", width: "100vw" }}>
        <div onClick={() => handleScroll("left")}>
          <ChevronLeft
            className="w-full h-8 text-white cursor-pointer"
            style={{
              width: "50vw",
              backgroundColor: "black",
              color: "white",
              borderRight: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
        <div onClick={() => handleScroll("right")}>
          <ChevronRight
            className="w-full h-8 text-white cursor-pointer"
            style={{
              width: "50vw",
              backgroundColor: "black",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
