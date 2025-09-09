import { defineConfig } from "astro/config";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://sen-trie.github.io/portfolio",
  base: "portfolio",
  publicDir: "static",
  integrations: [
    purgecss({
      keyframes: false,
      safelist: {
        greedy: [
          /*astro*/
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  image: {
    responsiveStyles: true,
  },
});
