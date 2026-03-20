"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/Hero.jpg"
        alt="MM Services handyman at work"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pt-20">
          {/* Trust badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-white/10 px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-white/90">
              Trusted by Orlando homeowners for 15+ years
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Orlando&apos;s Premier{" "}
            <span className="text-gradient">Home Services</span>{" "}
            &amp; Cleaning
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            Pressure washing, painting, handyman repairs, deep cleaning &amp;
            more — licensed, insured, and committed to transforming your
            property.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan px-8 py-4 text-base font-semibold text-navy shadow-lg shadow-cyan/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan/30"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+14077575307"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              (407) 757-5307
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="mt-14 flex gap-8 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "2k+", label: "Projects Done" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-cyan sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-white/30" />
      </motion.div>
    </section>
  );
}
