import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // disable source maps in build
  },
  server: {
    sourcemapIgnoreList: () => true, // optional, to suppress warnings
  },
  esbuild: {
    // disable eval in dev mode
    legalComments: "none",
  },
});
