import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import lit from '@astrojs/lit';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify';

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
	loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
	site: 'https://odyssey-theme.sapling.supply/', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
	sitemap: true, // Generate sitemap (set to "false" to disable)
	integrations: [
		sitemap(),
		mdx(),
		lit(),
		icon(),
		tailwind(),
		sanity({
			projectId: 'zlb6sz0u',
			dataset: 'production',
			studioBasePath: '/admin',
			useCdn: false,
		}),
	], // Add renderers to the config
	vite: {
		ssr: {
			noExternal: ['react-icons'],
		},
	},
	output: 'static',
	adapter: netlify(),
});
