import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of home services: pressure washing, house cleaning, painting, handyman repairs, HVAC duct cleaning, and exterior maintenance in Orlando, FL.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
              Our Services
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Everything Your Home Needs
            </h1>
            <p className="mt-4 text-lg text-white/50">
              From deep cleaning to full exterior maintenance — we handle it
              all with 15+ years of expertise.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                index={i}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
