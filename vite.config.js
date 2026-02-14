
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:"/Create_Food_Recipes-Webpage/",
  server: {
    host: true
  }
})

