import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
// @ts-check
import { defineConfig } from "astro/config";

const GITHUB_REPO = "ZADDY-vibes";

export default defineConfig({
  site: "https://bkornpob.github.io",
  base: `/${GITHUB_REPO}/`,
  output: "static",
  integrations: [tailwind(), mdx()],
  trailingSlash: "always",
  build: {
    assets: "assets",
  },
});
