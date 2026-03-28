import { getCollection } from "astro:content";

export type PortfolioGroup = "residential" | "adu" | "commercial";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: "commercial" | "residential";
  portfolioGroup: PortfolioGroup;
  location: string;
  year: string;
  status: "Completed" | "In Progress";
  order: number;
  heroImage: string;
  thumbnail: string;
  description: string;
  details: string;
  scope: string[];
  gallery: string[];
}

function normalizeGallery(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function normalizeScope(raw: string | string[] | undefined): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const entries = await getCollection("portfolio");
  return entries
    .map((entry) => ({
      slug: entry.data.slug,
      title: entry.data.title,
      category: entry.data.category,
      portfolioGroup: entry.data.portfolioGroup,
      location: entry.data.location,
      year: entry.data.year,
      status: entry.data.status,
      order: entry.data.order ?? 99,
      heroImage: entry.data.heroImage,
      thumbnail: entry.data.thumbnail,
      description: entry.data.description,
      details: entry.data.details ?? "",
      scope: normalizeScope(entry.data.scope),
      gallery: normalizeGallery(entry.data.gallery),
    }))
    .sort((a, b) => a.order - b.order);
}

export async function getPortfolioByCategory(
  category: "commercial" | "residential",
) {
  const items = await getPortfolioItems();
  return items.filter((item) => item.category === category);
}

export async function getPortfolioBySlug(slug: string) {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug);
}
