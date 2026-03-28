import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(["commercial", "residential"]),
    portfolioGroup: z.enum(["residential", "adu", "commercial"]),
    location: z.string(),
    year: z.string(),
    status: z.enum(["Completed", "In Progress"]),
    order: z.number().optional().default(99),
    heroImage: z.string(),
    thumbnail: z.string(),
    description: z.string(),
    details: z.string().optional().default(""),
    scope: z.string().optional().default(""),
    gallery: z.union([z.array(z.string()), z.string()]).optional().default([]),
  }),
});

export const collections = { portfolio };
