import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const server = {
  host: true, // to make local project available in mobile via same wifi network
  open: true, // to open browser from vs code
  port: 3000, // custom port
};

const build = {
  outDir: "build", // custom name for build folder
  assetsDir: "static", // Will place static assets inside a static folder
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server,
  build,
  preview: { port: 3000 },
});
