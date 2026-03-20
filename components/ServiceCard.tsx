"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  PaintRoller,
  Hammer,
  Wind,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  Droplets,
  Sparkles,
  PaintRoller,
  Hammer,
  Wind,
  ShieldCheck,
} as const;

type ServiceCardProps = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string | null;
  index: number;
  variant?: "light" | "dark";
};

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  index,
  variant = "light",
}: ServiceCardProps) {
  const Icon = iconMap[icon];
  const isDark = variant === "dark";

  return (
    <motion.div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
        isDark
          ? "border border-white/[0.06] bg-white/[0.03] hover:border-cyan/20 hover:bg-white/[0.06]"
          : "bg-white shadow-card hover:shadow-card-hover"
      }`}
      style={{ willChange: "transform" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      {/* Accent line top */}
      <div className="absolute top-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-cyan via-purple to-magenta opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay gradient so icon badge is visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <div
              className={`inline-flex rounded-lg p-2 backdrop-blur-sm ${
                isDark ? "bg-white/15" : "bg-white/90 shadow-sm"
              }`}
            >
              <Icon className="h-5 w-5 text-cyan" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex aspect-[16/10] items-center justify-center ${
            isDark
              ? "bg-gradient-to-br from-white/[0.04] to-white/[0.01]"
              : "bg-gradient-to-br from-cyan/5 to-purple/5"
          }`}
        >
          <Icon className={`h-12 w-12 ${isDark ? "text-cyan/40" : "text-cyan/30"}`} />
        </div>
      )}

      {/* Text content */}
      <div className="p-5 sm:p-6">
        <h3
          className={`mb-2 font-heading text-lg font-semibold ${
            isDark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-white/50" : "text-navy/60"
          }`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
