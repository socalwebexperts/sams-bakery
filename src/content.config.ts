import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const items = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/items" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { items };
