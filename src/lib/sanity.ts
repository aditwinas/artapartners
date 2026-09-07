import { createClient } from '@sanity/client';

import { defaultSiteContent, mergeSiteContent, type DeepPartial, type SiteContent } from './site-content';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01';

export const sanityClientConfig = {
  projectId: projectId || 'unconfigured',
  dataset,
  apiVersion,
  useCdn: false,
};

export const isSanityConfigured = Boolean(projectId);

export function createSanityClient(config: Parameters<typeof createClient>[0]) {
  try {
    return createClient(config);
  } catch {
    return null;
  }
}

export const siteContentQuery = `*[_id == "siteSettings"][0]{
  announcement,
  hero,
  stats[]{value, label},
  dashboard,
  about,
  workflow{eyebrow, title, description, steps[]{title, subtitle, description, icon}},
  solutions{eyebrow, title, description, items[]{name, type, description, icon}},
  ecosystem,
  brands[]{name, category, description},
  investment,
  culture,
  contact,
  footerText
}`;

export async function getSiteContent(): Promise<SiteContent> {
  try {
    if (!isSanityConfigured) return defaultSiteContent;
    const client = createSanityClient(sanityClientConfig);
    if (!client) return defaultSiteContent;

    const content = await client.fetch<DeepPartial<SiteContent> | null>(siteContentQuery);
    return mergeSiteContent(content);
  } catch (error) {
    console.warn('Sanity content could not be loaded; using bundled ARTA content.', error);
    return defaultSiteContent;
  }
}
