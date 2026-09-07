import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '4yqg1ptd';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'arta-partners',
  title: 'ARTA Partners CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) => S.list()
        .title('ARTA Partners CMS')
        .items([
          S.listItem()
            .id('siteSettings')
            .title('Konten Website ARTA')
            .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
        ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
