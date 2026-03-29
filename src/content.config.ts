import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function unwrapMarkdownLink(val: unknown): unknown {
  if (typeof val !== "string") return val;
  const m = val.trim().match(/^\[([^\]]*)\]\(([^)]+)\)$/);
  return m ? m[2] : val;
}

function trimString(val: unknown): unknown {
  const v = unwrapMarkdownLink(val);
  return typeof v === "string" ? v.trim() : v;
}

function toUpper(val: unknown): unknown {
  const v = trimString(val);
  return typeof v === "string" ? v.toUpperCase() : v;
}

function coerceYear(val: unknown): unknown {
  if (typeof val === "number") return String(val);
  return trimString(val);
}

function flexEnum<T extends string>(values: readonly [T, ...T[]]) {
  const lookup = new Map(values.map((v) => [v.toLowerCase(), v]));
  return z.preprocess((val) => {
    if (typeof val !== "string") return val;
    return lookup.get(val.trim().toLowerCase()) ?? val.trim();
  }, z.enum(values as unknown as [string, ...string[]]));
}

function normalizeGalleryInput(val: unknown): unknown {
  if (val == null || val === "") return [];
  if (Array.isArray(val)) return val.map((item) => unwrapMarkdownLink(item));
  if (typeof val === "string") {
    const one = unwrapMarkdownLink(val);
    return typeof one === "string" ? [one] : [];
  }
  return val;
}

function coerceScope(val: unknown): unknown {
  if (Array.isArray(val)) return val.join(", ");
  return unwrapMarkdownLink(val);
}

const trimmed = z.preprocess(trimString, z.string());
const upper = z.preprocess(toUpper, z.string());
const optionalTrimmed = z.preprocess(trimString, z.string().optional().default(""));

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    urlName: z.preprocess(trimString, z.string().optional()),
    title: upper,
    category: flexEnum(["commercial", "residential"] as const),
    portfolioGroup: flexEnum(["residential", "adu", "commercial"] as const),
    location: upper,
    year: z.preprocess(coerceYear, z.string()),
    status: flexEnum(["Completed", "In Progress"] as const),
    order: z.number().optional(),
    heroImage: trimmed,
    thumbnail: z.preprocess(trimString, z.string().optional()),
    description: trimmed,
    details: optionalTrimmed,
    scope: z.preprocess(coerceScope, z.string().optional().default("")),
    gallery: z.preprocess(
      normalizeGalleryInput,
      z.array(z.string()).default([]),
    ),
  }),
});

export const collections = { portfolio };
