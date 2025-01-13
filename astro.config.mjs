// // astro.config.mjs
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

import netlify from '@astrojs/netlify';

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
	loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
	site: 'https://chimaamadi.cv',
	sitemap: true,

	integrations: [
		sanity({
			projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
			dataset: PUBLIC_SANITY_STUDIO_DATASET,
			useCdn: false, // See note on using the CDN
			apiVersion:
				process.env.VITE_APP_SANITY_API_VERSION ||
				new Date().toISOString().split('T')[0],
			studioBasePath: '/admin',
		}),
		react(),
		tailwind(),
		mdx(),
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
