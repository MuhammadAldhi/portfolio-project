import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// JANGAN mengimport komponen React (App/Portfolio) di sini
// Karena Vite build memerlukan file fisik .html sebagai pintu masuk

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],

  build: {
    rollupOptions: {
      input: {
        // Arahkan ke file index.html Anda
        main: resolve(__dirname, "index.html"),
        // Jika Anda memiliki portfolio.html fisik di root:
        portfolio: resolve(__dirname, "portfolio.html"), 
      },
    },
  },
});
