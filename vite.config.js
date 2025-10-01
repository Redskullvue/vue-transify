// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// devtools only useful in dev
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command }) => {
  const alias = {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  }

  if (command !== 'build') {
    // DEV MODE -> run playground app
    return {
      plugins: [vue(), vueDevTools()],
      root: fileURLToPath(new URL('./playground', import.meta.url)),
      resolve: { alias },
      server: {
        port: 5173,
        open: true,
      },
    }
  }

  // BUILD MODE -> build library
  return {
    plugins: [vue()],
    resolve: { alias },
    build: {
      lib: {
        entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
        name: 'VueSmoothTransitions',
        fileName: (format) => `vue-smooth-transitions.${format}.js`,
      },
      rollupOptions: {
        // Don't bundle Vue into your lib, let the app use its own Vue
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }
})
