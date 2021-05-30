import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  reactRefresh(),
	  VitePWA({
			manifest: {
				short_name: "foton-test",
				name: "Foton Technical Test",
				icons: [
				  {
					"src": "favicon.ico",
					"sizes": "64x64 32x32 24x24 16x16",
					"type": "image/x-icon"
				  },
				  {
					"src": "logo192.png",
					"type": "image/png",
					"sizes": "192x192"
				  },
				  {
					"src": "logo512.png",
					"type": "image/png",
					"sizes": "512x512"
				  }
				],
				start_url: ".",
				display: "standalone",
				theme_color: "#FF6978",
				background_color: "#fefbf7"
			}
		})
	]
});
