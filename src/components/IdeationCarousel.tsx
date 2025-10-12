import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  if (!directions || directions.length === 0) return null;

  return (
    <section className="mt-16 flex flex-col gap-24">
      {directions.map((direction, dirIndex) => (
       <div
        key={dirIndex}
        className="flex flex-col md:flex-row lg:flex-row items-center justify-between bg-neutral-50 rounded-3xl shadow-lg border border-neutral-200 p-6 sm:p-10 gap-10 lg:gap-20"
        >
          {/* Carousel (Left Side) */}
          {direction.images && direction.images.length > 0 && (
            <div className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh]">
              <DirectionCarousel images={direction.images} />
            </div>
          )}

          {/* Text (Right Side) */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold tracking-tight">{direction.name}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {direction.description}
            </p>
          </div>
        </div>

      ))}
    </section>
  );
}

function DirectionCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-md bg-neutral-100 border border-neutral-300">
      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="object-cover w-full h-full rounded-2xl"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-20 p-3 rounded-full shadow-lg backdrop-blur-md"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-20 p-3 rounded-full shadow-lg backdrop-blur-md"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
