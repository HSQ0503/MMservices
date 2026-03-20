import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/lib/constants";
import CTABanner from "@/components/CTABanner";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse before & after photos from MM Services & Cleaning projects across Orlando, FL — pressure washing, painting, cleaning, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-warm-gray pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
              Portfolio
            </span>
            <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-navy/50">
              Before &amp; after results that speak for themselves.
            </p>
          </div>

          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
