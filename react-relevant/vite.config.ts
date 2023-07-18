import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(),react({ babel: { plugins: [jotaiReactRefresh] } })],
  define: {
    'process.platform': null // you may set this to anything
  }
})
