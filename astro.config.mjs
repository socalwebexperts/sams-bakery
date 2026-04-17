// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  /** Legacy `/items` → `/menu`. Per-item URLs → `/menu` via `public/_redirects` on Cloudflare Pages. */
  redirects: {
    "/items": "/menu",
  },
});
