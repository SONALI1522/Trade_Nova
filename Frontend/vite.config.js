import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // so we can use test(), expect()
    environment: "jsdom",   // browser-like environment
    setupFiles: "./src/setupTests.js",
  },
});
