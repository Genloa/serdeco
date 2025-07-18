import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

/*export default defineConfig({
  server: {
    host: "serdeco.local", // Nombre de dominio local
    port: 5173,
    allowedHosts: ["serdeco.local"], // Agregamos el dominio permitido
  },
  plugins: [react()],
});*/
