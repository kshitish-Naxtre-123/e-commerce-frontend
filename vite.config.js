import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     "/api/":"https://e-commerce-backend-3wiz.onrender.com/",
  //     "/uploads/":"https://e-commerce-backend-3wiz.onrender.com/"
  //   }
  // }
})
