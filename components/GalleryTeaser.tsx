"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/lib/constants";
import Lightbox from "./Lightbox";

export default function GalleryTeaser() {
  const featured = GALLERY_ITEMS.slice(0, 3);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setLightboxIndex(null), []);
  const onPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + featured.length) % featured.length : null
      ),
    [featured.length]
  );
  const onNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % featured.length : null
      ),
    [featured.length]
  );

  return (
    <section className="bg-warm-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
              Our Work
            </span>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              See the Difference
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-navy"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {featured.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => setLightboxIndex(i)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-card text-left transition-all duration-300 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Before and after: ${item.label}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <span className="text-sm font-semibold text-navy">
                  {item.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={featured}
        currentIndex={lightboxIndex}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </section>
  );
}
