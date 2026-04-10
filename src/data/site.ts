export const SITE = {
  name: "Site Name",
  tagline: "Site Tagline",
  description: "Site description goes here.",
  logoUrl: "",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
] as const;

export const CONTACT_INFO = {
  email: "hello@example.com",
  phone: "+1 (555) 000-0000",
  phoneHref: "tel:+15550000000",
  location: "City, State",
} as const;
