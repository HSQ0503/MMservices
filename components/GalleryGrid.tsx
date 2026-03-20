"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

type GalleryGridProps = {
  items: readonly { src: string; label: string }[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setLightboxIndex(null), []);
  const onPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + items.length) % items.length : null
      ),
    [items.length]
  );
  const onNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % items.length : null
      ),
    [items.length]
  );

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            onClick={() => setLightboxIndex(i)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white text-left shadow-card transition-all duration-300 hover:shadow-card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.src}
                alt={`Before and after: ${item.label}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading text-sm font-semibold text-navy">
                {item.label}
              </h3>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={items}
        currentIndex={lightboxIndex}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}
