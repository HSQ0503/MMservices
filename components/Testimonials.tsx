"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-soft-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* PLACEHOLDER: Replace testimonials with real client reviews */}
        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-cyan/20" />

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-navy/70">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-navy/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy">
                    {t.name}
                  </p>
                  <p className="text-xs text-navy/40">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
