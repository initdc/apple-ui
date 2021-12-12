const path = require("path");

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "./website/public",
  resolve: {
    alias: [
      {find: "/@", replacement: path.resolve(__dirname, "./")},
      {find: "@apui", replacement: path.resolve(__dirname, "./packages")},
      {find: "/static", replacement: path.resolve(__dirname, "./website/static")}
    ],
  },
  plugins: [vue()],
});
