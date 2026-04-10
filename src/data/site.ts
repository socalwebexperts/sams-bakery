export const SITE = {
  name: "Sam's Armenian Bakery",
  tagline: "Authentic Armenian Pastries & Breads",
  description:
    "Sam's Armenian Bakery in Glendale specializes in authentic Armenian pastries and breads, crafted with high-quality ingredients and traditional recipes since day one.",
  logoUrl: "",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT_INFO = {
  email: "hello@samsbakery.com",
  phone: "+1 (818) 247-6281",
  phoneHref: "tel:+18182476281",
  location: "400 Raleigh St, Glendale, CA 91205",
} as const;
