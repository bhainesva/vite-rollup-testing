import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite'

const myplugin = () => {
  return {
    name: "vite-plugin-myplugin",
    config: function() {
      return {
        build: {
          rollupOptions: {
            input: {
              entry: `virtual:myplugin-entry`
            }
          }
        }
      }
    },
    resolveId: function(id) {
      if (id === 'virtual:myplugin-entry') return `\0${id}`
    },
    load: function(id) {
      if (id !== `\0virtual:myplugin-entry`) return

      return `import Component from "./src/component.jsx";
import React from "react";
import ReactDOM from "react-dom";
console.log("side effect to tell when this is running in the browser");
ReactDOM.hydrate(React.createElement(Component, null), document.getElementById("react-root"));`;
    },
  }
}

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    myplugin(),
  ]
})
