import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Pages CMS sometimes writes image fields as markdown links `[label](url)`. */
function unwrapMarkdownLink(val: unknown): unknown {
  if (typeof val !== "string") return val;
  const m = val.trim().match(/^\[([^\]]*)\]\(([^)]+)\)$/);
  return m ? m[2] : val;
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

const stringField = z.preprocess(unwrapMarkdownLink, z.string());

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    /** Drives filename in Pages CMS; slug on the site comes from the `.md` file name. */
    urlName: z.string().optional(),
    title: stringField,
    category: z.enum(["commercial", "residential"]),
    portfolioGroup: z.enum(["residential", "adu", "commercial"]),
    location: stringField,
    year: stringField,
    status: z.enum(["Completed", "In Progress"]),
    /** Legacy sort key; omitted on new CMS entries so they sort after numbered projects. */
    order: z.number().optional(),
    heroImage: stringField,
    /** Deprecated; listing uses heroImage when missing. */
    thumbnail: stringField.optional(),
    description: stringField,
    details: z.preprocess(unwrapMarkdownLink, z.string().optional().default("")),
    scope: z.preprocess(unwrapMarkdownLink, z.string().optional().default("")),
    gallery: z.preprocess(normalizeGalleryInput, z.array(z.string()).default([])),
  }),
});

export const collections = { portfolio };
