import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import compression from "vite-plugin-compression";
import UnoCSS from "unocss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), svgr(), react(), compression()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@utils": resolve(__dirname, "src/utils"),
      "@contracts": resolve(__dirname, "src/contracts"),
      "@modules": resolve(__dirname, "src/modules"),
      "@pages": resolve(__dirname, "src/pages"),
      "@router": resolve(__dirname, "src/router"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@components": resolve(__dirname, "src/components"),
      "@service": resolve(__dirname, "src/service"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
