import type { Metadata } from "next";
import { ShieldCheck, Heart, Users } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MM Services & Cleaning — over 15 years of trusted home services in Orlando, FL. Licensed, insured, and dedicated to your satisfaction.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Experience You Can Trust",
    description:
      "With over 15 years in the industry, we've seen and solved it all. Our team brings deep expertise to every project, whether it's a simple cleaning or a complex repair.",
    color: "from-cyan/10 to-cyan/5 text-cyan",
  },
  {
    icon: Heart,
    title: "Passion for Quality",
    description:
      "We treat every home like it's our own. We use eco-friendly products, take care with your belongings, and never cut corners. Your satisfaction is our #1 priority.",
    color: "from-purple/10 to-purple/5 text-purple",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We're proud to serve Orlando and the surrounding communities. Many of our clients have been with us for years, and we consider them part of the MM family.",
    color: "from-magenta/10 to-magenta/5 text-magenta",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
            About Us
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            About MM Services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            For over 15 years, MM Services &amp; Cleaning has been the go-to
            home services partner for families and property managers across
            Central Florida. What started as a small, family-run cleaning
            operation has grown into a full-service home maintenance company —
            but our commitment to quality, honesty, and personal attention has
            never changed.
          </p>
        </div>
      </section>

      <section className="relative bg-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-dots" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-warm-gray p-8 transition-all duration-300 hover:shadow-card"
                >
                  <div
                    className={`mb-5 inline-flex rounded-xl bg-gradient-to-br p-3 ${item.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
