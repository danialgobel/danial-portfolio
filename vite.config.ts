import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom', 'three']
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@react-three/rapier')) {
            return 'rapier-physics';
          }
          if (id.includes('three') || id.includes('@react-three/fiber') || id.includes('@react-three/drei') || id.includes('meshline')) {
            return 'three-bundle';
          }
          if (id.includes('motion')) {
            return 'motion-vendor';
          }
          if (id.includes('lucide-react')) {
            return 'lucide-vendor';
          }
        }
      }
    }
  }
})

