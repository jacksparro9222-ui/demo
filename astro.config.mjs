import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Canonical and Open Graph host for the public preview.
// Override with SITE_URL when building for a different domain.
const site = process.env.SITE_URL || "https://dempo-concept.onrender.com";

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
