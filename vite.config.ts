import { defineConfig } from 'vite'

const plugin = () => {
  return {
    name: "plugin",
    moduleParsed: function(modInfo) {
      console.log("Parsed: ", modInfo.id, modInfo.importedIds)
    },
    generateBundle: function(options, bundle) {
      console.log();
      for (const [file, info] of Object.entries(bundle)) {
        console.log("File: ", file)
        console.log("Modules", info.modules || info)
      }
    },
  }
}

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        first: 'src/first.js',
        second: 'src/second.js',
      },
    }
  },
  plugins: [plugin()]
})
