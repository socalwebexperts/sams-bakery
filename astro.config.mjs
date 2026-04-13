// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  /** `/items/*` → `/menu/*` is handled in `public/_redirects` (Cloudflare Pages). */
  redirects: {
    "/items": "/menu",
  },
});
