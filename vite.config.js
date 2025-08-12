import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "serdeco.com.ve",
    port: 5173,
    allowedHosts: ["serdeco.com.ve"],
  },
  build: {
    outDir: "dist", // Carpeta que Express servirá
    emptyOutDir: true, // Limpia antes de construir
  },
});
