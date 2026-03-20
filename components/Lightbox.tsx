"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: readonly { src: string; label: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (currentIndex === null) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  const item = currentIndex !== null ? images[currentIndex] : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-xl bg-white/10 p-2.5 text-white transition-colors duration-200 hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 rounded-xl bg-white/10 px-3 py-1.5 text-sm font-medium text-white/70">
            {currentIndex! + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 z-10 rounded-xl bg-white/10 p-3 text-white transition-colors duration-200 hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-10 rounded-xl bg-white/10 p-3 text-white transition-colors duration-200 hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image */}
          <motion.div
            key={item.src}
            className="relative max-h-[85vh] w-full max-w-5xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] md:aspect-square">
              <Image
                src={item.src}
                alt={`Before and after: ${item.label}`}
                fill
                className="rounded-xl object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-4 text-center font-heading text-sm font-semibold text-white/80">
              {item.label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
