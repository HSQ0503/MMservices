import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="MM Services & Cleaning"
              width={140}
              height={48}
              className="mb-5 h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/50">
              {COMPANY.tagline}
            </p>
            {/* Social */}
            <div className="mt-6">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex rounded-xl bg-white/[0.06] p-2.5 text-white/50 transition-all duration-200 hover:bg-cyan/10 hover:text-cyan"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider text-white/70">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors duration-200 hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider text-white/70">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-sm text-white/40 transition-colors duration-200 hover:text-cyan"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider text-white/70">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 text-sm text-white/40 transition-colors duration-200 hover:text-cyan"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan/60" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-white/40 transition-colors duration-200 hover:text-cyan"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan/60" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan/60" />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan/60" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <p className="text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} MM Services &amp; Cleaning. All
            rights reserved. Website by Brightlaunch
          </p>
        </div>
      </div>
    </footer>
  );
}
