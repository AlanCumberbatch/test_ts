import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { repositoryName } from './src/env'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/test_ts/'  // 替换为你的仓库名称
  base: `/${repositoryName}/`  // 替换为你的仓库名称
})
