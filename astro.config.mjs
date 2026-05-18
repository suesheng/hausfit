// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { applySitemapPriority } from "./src/config/sitemap-priorities.js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hausfit.nrw",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.5,
      serialize(item) {
        return applySitemapPriority(item);
      },
    }),
  ],
});
