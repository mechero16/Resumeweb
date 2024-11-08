// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/mechero16/Resumeweb", // Replace 'your-repo-name' with your GitHub repository name
});
