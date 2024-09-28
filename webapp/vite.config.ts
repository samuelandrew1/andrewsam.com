import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: 'src/assets', // Use './' for relative paths or specify the subdirectory if needed
})
