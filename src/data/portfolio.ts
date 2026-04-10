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

function splitList(raw: string | string[] | undefined): string[] {
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
    title: entry.data.title,
    category: entry.data.category as PortfolioItem["category"],
    portfolioGroup: entry.data.portfolioGroup as PortfolioGroup,
    location: entry.data.location,
    year: entry.data.year,
    status: entry.data.status as PortfolioItem["status"],
    order: entry.data.order,
    heroImage,
    thumbnail: entry.data.thumbnail ?? heroImage,
    description: entry.data.description,
    details: entry.data.details ?? "",
    scope: splitList(entry.data.scope),
    gallery: splitList(entry.data.gallery),
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

/** Tab labels — shared by portfolio page and listing component. */
export const PORTFOLIO_TAB_ORDER: { group: PortfolioGroup; label: string }[] = [
  { group: "residential", label: "Residential Projects" },
  { group: "adu", label: "ADU Projects" },
  { group: "commercial", label: "Commercial Projects" },
];

export function formatCategoryLabel(cat: string) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export type PortfolioListingVariant = "unlimited" | "limited";

export type PortfolioListingSection =
  | { variant: "unlimited"; group: PortfolioGroup; projects: PortfolioItem[] }
  | {
      variant: "limited";
      filterKey: "all" | PortfolioGroup;
      projects: PortfolioItem[];
    };

/** Builds tab content for the portfolio listing. Pass `maxItems` to cap how many projects appear per tab (home); omit for full lists (portfolio page). */
export function buildPortfolioListingSections(
  items: PortfolioItem[],
  maxItems?: number,
): { variant: PortfolioListingVariant; sections: PortfolioListingSection[] } {
  if (maxItems == null) {
    return {
      variant: "unlimited",
      sections: PORTFOLIO_TAB_ORDER.map(({ group }) => ({
        variant: "unlimited" as const,
        group,
        projects: items.filter((p) => p.portfolioGroup === group),
      })),
    };
  }

  const n = maxItems;
  return {
    variant: "limited",
    sections: [
      {
        variant: "limited" as const,
        filterKey: "all",
        projects: items.slice(0, n),
      },
      ...(["residential", "adu", "commercial"] as const).map((group) => ({
        variant: "limited" as const,
        filterKey: group,
        projects: items.filter((p) => p.portfolioGroup === group).slice(0, n),
      })),
    ],
  };
}
