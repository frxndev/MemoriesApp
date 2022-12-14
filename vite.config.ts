import * as path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest,
			includeAssets: ['vite.svg', 'robots.txt'],
			// devOptions: {
			// 	enabled: false,
			// },
			workbox: {
				globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
			},
		}),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
		],
	},
	define: {
		'process.env': {},
	},
})
