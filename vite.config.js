import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from 'path'
import { resolve } from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, "./src") ,
      
       // eslint-disable-next-line no-undef
       "@pages": resolve(__dirname, "src/pages"),
       // eslint-disable-next-line no-undef
       "@Components": resolve(__dirname, "Components"),
       // eslint-disable-next-line no-undef
       "@assets": resolve(__dirname, "src/assets"),
      
    }
  }

  
})
