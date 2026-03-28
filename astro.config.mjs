import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

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
});