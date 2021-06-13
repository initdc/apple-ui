const path = require("path");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "/@", replacement: path.resolve(__dirname, "./") }],
  },
  plugins: [vue()],
});
