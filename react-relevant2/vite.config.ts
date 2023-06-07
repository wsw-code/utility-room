import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import myPlugin from './myPlugins/refresh'
import TestPlugin from './myPlugins/myTestPlugin'
import myRefresh from './myPlugins/myRefresh'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Inspect(),
    // TestPlugin()
    myPlugin()
  ],
})
