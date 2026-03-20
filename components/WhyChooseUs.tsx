"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, CircleCheckBig, Star } from "lucide-react";
import { TRUST_SIGNALS } from "@/lib/constants";

const iconMap = { ShieldCheck, Leaf, CircleCheckBig, Star } as const;

const accentColors = [
  "from-cyan/20 to-cyan/5 text-cyan",
  "from-green-400/20 to-green-400/5 text-green-500",
  "from-purple/20 to-purple/5 text-purple",
  "from-magenta/20 to-magenta/5 text-magenta",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
      {/* Decorative gradient orb */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
            Why Us
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Orlando Trusts
            <br />
            <span className="text-white/40">MM Services</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_SIGNALS.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:border-cyan/20 hover:bg-white/[0.06] sm:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`mx-auto mb-5 inline-flex rounded-2xl bg-gradient-to-br p-4 ${accentColors[i]}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
