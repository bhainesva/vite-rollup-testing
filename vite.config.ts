import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    treeShaking: false
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      treeshake: false,
      input: {
        main: 'src/main.js',
      },
			output: {
				entryFileNames: 'vite-bundle.js'
			}
    }
  },
  plugins: []
})
