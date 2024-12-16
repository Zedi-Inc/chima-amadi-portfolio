/// <reference types="vite/client" />
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
	projectId: "zlb6sz0u",
	dataset: "production",
	plugins: [structureTool()],
	schema,
});
