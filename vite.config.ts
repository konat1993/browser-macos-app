import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-pdf")) return "react-pdf";
          if (id.includes("node_modules/gsap")) return "gsap";
          if (
            id.includes("node_modules/react-markdown") ||
            id.includes("node_modules/remark-") ||
            id.includes("node_modules/micromark")
          )
            return "markdown";
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/"))
            return "react-vendor";
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      "#components": resolve(dirname(fileURLToPath(import.meta.url)), "src/components"),
      "#constants": resolve(dirname(fileURLToPath(import.meta.url)), "src/constants"),
      "#store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
      "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
      "#windows": resolve(dirname(fileURLToPath(import.meta.url)), "src/windows"),
    },
  },
});
