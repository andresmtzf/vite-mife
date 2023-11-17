import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env)
  return {
    plugins: [
      react(),
      federation({
        name: 'App',
        remotes: {
          /* remoteComponent: 'http://localhost:6001/assets/remoteEntry.js', */
          remoteComponent: `${env.REMOTE}assets/remoteEntry.js`,
        },
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  }
})
