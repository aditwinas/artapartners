import assert from 'node:assert/strict';
import test from 'node:test';

import { createSanityClient, sanityClientConfig, siteContentQuery } from './sanity';

test('queries only the canonical singleton document', () => {
  assert.match(siteContentQuery, /_id == "siteSettings"/);
});

test('returns no client for invalid deployment configuration', () => {
  assert.equal(createSanityClient({ ...sanityClientConfig, projectId: 'INVALID PROJECT ID' }), null);
});

test('uses the live Sanity API so static builds never publish stale CMS content', () => {
  assert.equal(sanityClientConfig.useCdn, false);
});
