import { getCollection, type CollectionEntry } from "astro:content";

export type PortfolioGroup = "residential" | "adu" | "commercial";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: "commercial" | "residential";
  portfolioGroup: PortfolioGroup;
  location: string;
  year: string;
  status: "Completed" | "In Progress";
  /** Lower = earlier; omitted in CMS → sorts last among peers. */
  order?: number;
  heroImage: string;
  thumbnail: string;
  description: string;
  details: string;
  scope: string[];
  gallery: string[];
}

const SORT_LAST = Number.MAX_SAFE_INTEGER;

function slugFromEntryId(id: string): string {
  const segment = id.split("/").pop() ?? id;
  return segment.replace(/\.md$/i, "");
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

function mapEntry(entry: CollectionEntry<"portfolio">): PortfolioItem {
  const slug = slugFromEntryId(entry.id);
  const heroImage = entry.data.heroImage;
  return {
    slug,
    title: entry.data.title.toLocaleUpperCase("en-US"),
    category: entry.data.category,
    portfolioGroup: entry.data.portfolioGroup,
    location: entry.data.location.toLocaleUpperCase("en-US"),
    year: entry.data.year,
    status: entry.data.status,
    order: entry.data.order,
    heroImage,
    thumbnail: entry.data.thumbnail ?? heroImage,
    description: entry.data.description,
    details: entry.data.details ?? "",
    scope: normalizeScope(entry.data.scope),
    gallery: normalizeGallery(entry.data.gallery),
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const entries = await getCollection("portfolio");
  return entries
    .map(mapEntry)
    .sort((a, b) => {
      const ar = a.order ?? SORT_LAST;
      const br = b.order ?? SORT_LAST;
      if (ar !== br) return ar - br;
      return a.slug.localeCompare(b.slug);
    });
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
