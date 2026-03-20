"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-magenta/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform
            <br />
            <span className="text-gradient">Your Property?</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Call us today or request a free quote online.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan px-8 py-4 text-base font-semibold text-navy shadow-lg shadow-cyan/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan/30"
          >
            <Phone className="h-4 w-4" />
            Call {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
