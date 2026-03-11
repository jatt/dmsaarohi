import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:5050"
<<<<<<< HEAD
    },
    port: 5174,
    host: true
=======
    }
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
  }
});
