// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

const GITHUB_REPO = 'ZADDY-vibes'

export default defineConfig({
  site: 'https://bkornpob.github.io',
  base: `/${GITHUB_REPO}/`,
  output: 'static',
  integrations: [tailwind(), mdx()],
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
})