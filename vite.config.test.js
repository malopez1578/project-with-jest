import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTestPlugin from 'vite-plugin-test'

export default defineConfig({
    plugins: [
        react(),
        viteTestPlugin({
            dir: 'src',
            loaders: {
                '.spec.js': 'jsx',
                '.spec.jsx': 'jsx',
            },
        }),
    ],
})
