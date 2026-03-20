import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MM Services & Cleaning. Call (407) 757-5307 or fill out our form for a free quote on cleaning, painting, and handyman services in Orlando, FL.",
};

export default function ContactPage() {
  return (
    <section className="bg-warm-gray pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-cyan">
            Contact Us
          </span>
          <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-navy/50">
            Ready for a free quote? Fill out the form or contact us directly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
              <h2 className="mb-6 font-heading text-xl font-semibold text-navy">
                Contact Information
              </h2>
              <ul className="space-y-5">
                <li>
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-start gap-3 text-navy/60 transition-colors duration-200 hover:text-cyan"
                  >
                    <div className="rounded-lg bg-cyan/10 p-2">
                      <Phone className="h-4 w-4 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">Phone</p>
                      <p>{COMPANY.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-3 text-navy/60 transition-colors duration-200 hover:text-cyan"
                  >
                    <div className="rounded-lg bg-cyan/10 p-2">
                      <Mail className="h-4 w-4 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">Email</p>
                      <p>{COMPANY.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-navy/60">
                  <div className="rounded-lg bg-cyan/10 p-2">
                    <MapPin className="h-4 w-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Address</p>
                    <p>{COMPANY.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-navy/60">
                  <div className="rounded-lg bg-cyan/10 p-2">
                    <Clock className="h-4 w-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Hours</p>
                    <p>{COMPANY.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="MM Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5!2d-81.308!3d28.458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s8965+Lee+Vista+Blvd%2C+Orlando%2C+FL+32829!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
