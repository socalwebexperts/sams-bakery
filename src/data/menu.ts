import { getCollection, type CollectionEntry } from "astro:content";

/** Display order of sections on /menu */
export const MENU_CATEGORY_ORDER = [
  "Frozen food",
  "Pastry",
  "Boreks",
  "Hot food",
  "Drinks",
] as const;

export type MenuCategory = (typeof MENU_CATEGORY_ORDER)[number];

export type MenuItemData = CollectionEntry<"menu">["data"];

export interface MenuItemView {
  slug: string;
  title: string;
  description?: string;
  price: string;
  category: MenuCategory;
  sortOrder: number;
  featured: boolean;
  featuredOrder?: number;
  image?: string;
}

function fileSlug(entry: CollectionEntry<"menu">): string {
  const segment = entry.id.split("/").pop() ?? entry.id;
  return segment.replace(/\.md$/i, "");
}

/** Validates filename matches `slug` in front matter (helps catch CMS mistakes). */
function toView(entry: CollectionEntry<"menu">): MenuItemView {
  const slug = fileSlug(entry);
  if (slug !== entry.data.slug) {
    console.warn(
      `[menu] Slug mismatch for "${entry.id}": filename "${slug}" !== frontmatter slug "${entry.data.slug}"`,
    );
  }
  return {
    slug,
    title: entry.data.title,
    description: entry.data.description,
    price: entry.data.price,
    category: entry.data.category,
    sortOrder: entry.data.sortOrder,
    featured: entry.data.featured,
    featuredOrder: entry.data.featuredOrder,
    image: entry.data.image,
  };
}

export async function getMenuGroupedByCategory(): Promise<
  { name: MenuCategory; items: MenuItemView[] }[]
> {
  const entries = await getCollection("menu");
  const views = entries.map(toView);

  const byCategory = new Map<MenuCategory, MenuItemView[]>();
  for (const name of MENU_CATEGORY_ORDER) {
    byCategory.set(name, []);
  }

  for (const item of views) {
    const list = byCategory.get(item.category);
    if (list) list.push(item);
  }

  for (const name of MENU_CATEGORY_ORDER) {
    const list = byCategory.get(name)!;
    list.sort((a, b) => {
      if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
      return a.title.localeCompare(b.title);
    });
  }

  return MENU_CATEGORY_ORDER.map((name) => ({
    name,
    items: byCategory.get(name) ?? [],
  })).filter((section) => section.items.length > 0);
}

export async function getFeaturedMenuItems(): Promise<MenuItemView[]> {
  const entries = await getCollection("menu");
  return entries
    .map(toView)
    .filter((item) => item.featured)
    .sort((a, b) => {
      const ao = a.featuredOrder ?? 999;
      const bo = b.featuredOrder ?? 999;
      if (ao !== bo) return ao - bo;
      return a.title.localeCompare(b.title);
    });
}

/** All CMS menu entries, A–Z (e.g. simple indexes or search). */
export async function getAllMenuItemsAlphabetically(): Promise<MenuItemView[]> {
  const entries = await getCollection("menu");
  return entries.map(toView).sort((a, b) => a.title.localeCompare(b.title));
}

export async function getMenuItemViewBySlug(slug: string): Promise<MenuItemView | undefined> {
  const all = await getAllMenuItemsAlphabetically();
  return all.find((item) => item.slug === slug);
}
