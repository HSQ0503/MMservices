"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: connect to form handler (Formspree, EmailJS, or API route)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
        <h3 className="font-heading text-xl font-bold text-navy">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-navy/60">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-navy/10 bg-warm-gray px-4 py-3.5 text-sm text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-cyan focus:bg-white focus:ring-2 focus:ring-cyan/20"
          placeholder="Your full name"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-navy/10 bg-warm-gray px-4 py-3.5 text-sm text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-cyan focus:bg-white focus:ring-2 focus:ring-cyan/20"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-navy/10 bg-warm-gray px-4 py-3.5 text-sm text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-cyan focus:bg-white focus:ring-2 focus:ring-cyan/20"
            placeholder="(407) 555-0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-navy/10 bg-warm-gray px-4 py-3.5 text-sm text-navy outline-none transition-all duration-200 focus:border-cyan focus:bg-white focus:ring-2 focus:ring-cyan/20"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-navy/10 bg-warm-gray px-4 py-3.5 text-sm text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-cyan focus:bg-white focus:ring-2 focus:ring-cyan/20"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-8 py-4 text-base font-semibold text-navy shadow-lg shadow-cyan/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan/30"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
