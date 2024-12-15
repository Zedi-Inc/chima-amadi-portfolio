
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'chima-amadi-portfolio',

  projectId: 'zlb6sz0u',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      {
        type: "document",
        name: "post",
        title: "Post",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
        ],
      },
    ],
  },
})


