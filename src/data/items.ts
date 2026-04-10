import { getCollection } from "astro:content";

export interface ContentItem {
  slug: string;
  title: string;
}

function slugFromEntryId(id: string): string {
  const segment = id.split("/").pop() ?? id;
  return segment.replace(/\.md$/i, "");
}

export async function getItems(): Promise<ContentItem[]> {
  const entries = await getCollection("items");
  return entries.map((entry) => ({
    slug: slugFromEntryId(entry.id),
    title: entry.data.title,
  }));
}

export async function getItemBySlug(slug: string) {
  const all = await getItems();
  return all.find((item) => item.slug === slug);
}
