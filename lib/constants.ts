export const COMPANY = {
  name: "MM Services & Cleaning",
  phone: "(407) 757-5307",
  phoneHref: "tel:+14077575307",
  email: "info@mmservicesandcleaning.com",
  address: "8965 Lee Vista Blvd, Orlando, FL 32829",
  hours: "Always Open",
  facebook: "https://www.facebook.com/mmservicesandcleaning/",
  tagline: "Professional cleaning & home services in Orlando, FL",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Pressure Washing",
    description:
      "Restore your driveways, sidewalks, patios, and building exteriors to like-new condition with our professional pressure washing.",
    icon: "Droplets" as const,
    image: "/services/pressurewaching.jpg",
  },
  {
    title: "House Cleaning",
    description:
      "Thorough residential cleaning services tailored to your home — from routine upkeep to deep cleaning that makes every room sparkle.",
    icon: "Sparkles" as const,
    image: "/services/clean.jpg",
  },
  {
    title: "Painting Services",
    description:
      "Interior and exterior painting with precision and care. We help you choose the right colors and deliver flawless results.",
    icon: "PaintRoller" as const,
    image: "/services/painting.jpg",
  },
  {
    title: "Handyman & Repairs",
    description:
      "From minor fixes to bigger projects — drywall, fixtures, shelving, and more. No job is too small for our skilled team.",
    icon: "Hammer" as const,
    image: "/services/Handyman.jpg",
  },
  {
    title: "HVAC & Dryer Duct Cleaning",
    description:
      "Improve air quality and efficiency with professional duct cleaning. Reduce allergens and lower your energy bills.",
    icon: "Wind" as const,
    image: "/services/hvac.jpg",
  },
  {
    title: "Exterior Maintenance",
    description:
      "Keep your property looking its best year-round with gutter cleaning, soffit repair, and general exterior upkeep.",
    icon: "ShieldCheck" as const,
    image: "/services/exterior.jpg",
  },
] as const;

export const SERVICE_AREAS = [
  "Orlando",
  "Lake Mary",
  "Saint Cloud",
  "Clermont",
  "Davenport",
  "Kissimmee",
  "Winter Garden",
  "Windermere",
  "Apopka",
] as const;

// PLACEHOLDER: Replace these with real client testimonials
export const TESTIMONIALS = [
  {
    name: "Maria G.",
    location: "Orlando, FL",
    rating: 5,
    text: "MM Services did an incredible job pressure washing our driveway and patio. It looks brand new! They were on time, professional, and the price was very fair. Highly recommend.",
  },
  {
    name: "James T.",
    location: "Kissimmee, FL",
    rating: 5,
    text: "We've used MM for house cleaning and handyman repairs for over a year now. Consistently great work, friendly team, and they always go the extra mile. Wouldn't trust anyone else.",
  },
  {
    name: "Sarah K.",
    location: "Winter Garden, FL",
    rating: 5,
    text: "Had our HVAC ducts cleaned and the difference in air quality is night and day. The crew was thorough, respectful of our home, and finished faster than expected. Five stars!",
  },
] as const;

// Gallery images — each photo is a single combined before/after image.
export const GALLERY_ITEMS = [
  { src: "/gallery/1.jpg", label: "Carpet to Hardwood Flooring" },
  { src: "/gallery/2.jpg", label: "Garage Floor Epoxy Coating" },
  { src: "/gallery/3.jpg", label: "Staircase Carpet Removal & Refinish" },
  { src: "/gallery/4.jpg", label: "Kitchen Renovation" },
  { src: "/gallery/5.jpg", label: "Pool Cleaning & Restoration" },
  { src: "/gallery/6.jpg", label: "Driveway Pressure Washing" },
  { src: "/gallery/7.jpg", label: "Sidewalk Pressure Washing" },
  { src: "/gallery/8.jpg", label: "Pool & Deck Cleaning" },
  { src: "/gallery/9.jpg", label: "Carpet to Hardwood Conversion" },
  { src: "/gallery/10.jpg", label: "Air Duct Cleaning" },
  { src: "/gallery/11.jpg", label: "Driveway & Sidewalk Pressure Wash" },
  { src: "/gallery/12.jpg", label: "Interior Painting" },
] as const;

export const TRUST_SIGNALS = [
  {
    title: "15+ Years Experience",
    description: "Over a decade and a half of trusted service in Central Florida.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Eco-Friendly Solutions",
    description: "We use safe, environmentally responsible cleaning products.",
    icon: "Leaf" as const,
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind.",
    icon: "CircleCheckBig" as const,
  },
  {
    title: "100% Satisfaction",
    description: "We stand behind every job with a satisfaction guarantee.",
    icon: "Star" as const,
  },
] as const;
