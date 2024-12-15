// astro.config.mjs
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	site: 'https://odyssey-theme.sapling.supply/',
	sitemap: true,

	integrations: [
		sanity({
			projectId: 'zlb6sz0u',
			dataset: 'production',
			useCdn: false, // See note on using the CDN
			apiVersion: '2024-07-24', // insert the current date to access the latest version of the API
			studioBasePath: '/admin',
		}),
		react(),
		tailwind(),
		icon(),
	],

	vite: {
		ssr: {
			noExternal: ['react-icons'],
		},
	},

	output: 'server',
	adapter: netlify(),
});
