"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
            Service Areas
          </span>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Proudly Serving Central Florida
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          {SERVICE_AREAS.map((area, i) => (
            <motion.span
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy/[0.04] px-5 py-2.5 text-sm font-medium text-navy transition-all duration-200 hover:bg-cyan/10 hover:text-cyan"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * i, ease: "easeOut" }}
            >
              <MapPin className="h-3.5 w-3.5 text-cyan" />
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-center text-sm text-navy/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          And surrounding communities — contact us to confirm availability in
          your area.
        </motion.p>
      </div>
    </section>
  );
}
