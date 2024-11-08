import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/mechero16/Resumeweb.git", // Replace 'your-repo-name' with your actual GitHub repository name
});
