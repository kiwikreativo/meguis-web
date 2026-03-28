import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['inoculable-multilaterally-almeda.ngrok-free.dev']
    }
  },

  server: {
    host: true,
  },

  adapter: netlify(),
});