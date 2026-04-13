import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menuCategory = z.enum(["Frozen food", "Pastry", "Boreks", "Hot food", "Drinks"]);

const menu = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.string(),
    category: menuCategory,
    /** One optional photo per item (`/media/uploads/...` or https). */
    image: z.string().optional(),
  }),
});

export const collections = { menu };
