import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// config custom "@"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/ts_react',
  plugins: [react()],
  resolve: {
    alias:[{find:"@", replacement: path.resolve(__dirname,"src")}]
  },
})
