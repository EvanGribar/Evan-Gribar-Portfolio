import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite builds for GitHub Pages need the repo name as base so assets resolve correctly.
  // Dev server ignores base, so keeping it static avoids white screens from missing bundles in production.
  base: '/Evan-Gribar-Portfolio/',
})
