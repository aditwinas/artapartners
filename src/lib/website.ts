import { resolveWebsiteImages } from './website-images';
import { cache } from 'react';
import { createSanityClient, isSanityConfigured, sanityClientConfig } from './sanity';
import { defaultWebsiteContent, mergeWebsiteContent } from './website-content';

// Separate document prevents the old one-page CMS copy overriding this redesign.
export const websiteQuery = '*[_id == "websitePages"][0]';
export const getWebsiteContent = cache(async () => {
  if (!isSanityConfigured) return defaultWebsiteContent;
  try {
    const client = createSanityClient(sanityClientConfig);
    const document = await client?.fetch(websiteQuery);
    return mergeWebsiteContent(resolveWebsiteImages(document, sanityClientConfig.projectId, sanityClientConfig.dataset));
  } catch {
    console.warn('Website CMS unavailable; using approved website copy.');
    return defaultWebsiteContent;
  }
});
