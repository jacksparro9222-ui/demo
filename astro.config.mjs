import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Placeholder host for canonical and Open Graph URLs.
// Replace SITE_URL when a public preview domain is chosen.
const site = process.env.SITE_URL || "https://dempo-concept.galactis.ai";

export default defineConfig({
  site,
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
