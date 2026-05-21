// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { applySitemapPriority, shouldIncludeInSitemap } from "./src/config/sitemap-priorities.js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hausfit.nrw",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.5,
      filter: (page) => shouldIncludeInSitemap(page),
      serialize(item) {
        return applySitemapPriority(item);
      },
    }),
  ],
});
