import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menuCategory = z.enum(["Frozen food", "Pastry", "Boreks", "Hot food", "Drinks"]);

const menu = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    price: z.string(),
    category: menuCategory,
    /** Order within the category on the menu page (lower first). */
    sortOrder: z.number().int().default(0),
    /** When true, shown in “Highlights” on the menu page and “What Our Customers LOVE!” on the home page. */
    featured: z.boolean().default(false),
    /** Order in those featured sections (lower first). Independent of sortOrder within a category. */
    featuredOrder: z.number().int().optional(),
    /** Featured card image: absolute site path under `public/` (e.g. /media/uploads/photo.webp) or https URL. */
    image: z.string().optional(),
  }),
});

export const collections = { menu };
