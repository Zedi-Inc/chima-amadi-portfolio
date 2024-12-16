/// <reference types="vite/client" />
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
	plugins: [structureTool()],
	schema,
});
