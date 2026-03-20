"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MM Services & Cleaning"
              width={160}
              height={56}
              className="h-11 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-cyan"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-cyan px-6 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-cyan/25 transition-all duration-200 hover:bg-white hover:shadow-white/25 lg:flex"
            >
              <Phone className="h-4 w-4" />
              Call Now — {COMPANY.phone}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center rounded-full bg-cyan p-2.5 text-navy shadow-lg shadow-cyan/25 lg:hidden"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="space-y-1 bg-navy/95 px-4 pb-6 pt-2 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "bg-cyan/10 text-cyan"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={COMPANY.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-cyan py-3 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" />
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
