// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/resumeher/', // ← 替換成你的 GitHub 倉庫名稱
})