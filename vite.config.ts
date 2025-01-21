/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "vite"
import postcss from "./postcss.config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [react()],
  base: "/enoch-portfolio/",
})
