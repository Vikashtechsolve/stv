import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,     // Forces the dev server to run on port 3000
    open: true,     // Optional: auto-opens browser
    host: true      // Optional: allows external access (useful in LAN/mobile testing)
  },
})
