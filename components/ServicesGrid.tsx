"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dots" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
            What We Do
          </span>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Complete Home Services
            <br />
            <span className="text-navy/40">Under One Roof</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              index={i}
              variant="light"
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-navy"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
