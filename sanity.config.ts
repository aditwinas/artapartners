import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';

const projectId = process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  throw new Error('Isi SANITY_PROJECT_ID atau NEXT_PUBLIC_SANITY_PROJECT_ID sebelum menjalankan CMS. Lihat CMS_SETUP.md.');
}

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
