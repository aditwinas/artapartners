import assert from 'node:assert/strict';
import test from 'node:test';

import { defaultSiteContent, mergeSiteContent } from './site-content';

test('returns the complete default content when CMS has no document', () => {
  assert.deepEqual(mergeSiteContent(null), defaultSiteContent);
});

test('keeps defaults for missing fields while applying CMS changes', () => {
  const result = mergeSiteContent({
    announcement: 'Pengumuman terbaru dari CMS',
    hero: { title: 'Judul baru dari CMS' },
  });

  assert.equal(result.announcement, 'Pengumuman terbaru dari CMS');
  assert.equal(result.hero.title, 'Judul baru dari CMS');
  assert.equal(result.hero.description, defaultSiteContent.hero.description);
  assert.deepEqual(result.brands, defaultSiteContent.brands);
});

test('uses CMS arrays as complete ordered replacements', () => {
  const brands = [
    { name: 'Brand Baru', category: 'Technology', description: 'Brand dari CMS.' },
  ];

  const result = mergeSiteContent({ brands });

  assert.deepEqual(result.brands, brands);
});

test('rejects an incomplete CMS array instead of exposing invalid content', () => {
  const result = mergeSiteContent({
    workflow: {
      steps: [{ title: 'Incomplete step', icon: 'invalid-icon' as never }],
    },
  });

  assert.deepEqual(result.workflow.steps, defaultSiteContent.workflow.steps);
});

test('rejects malformed CMS container types instead of breaking rendering', () => {
  const result = mergeSiteContent({
    announcement: { invalid: true } as never,
    hero: 'invalid' as never,
    investment: { focusPoints: 'invalid' as never },
  });

  assert.equal(result.announcement, defaultSiteContent.announcement);
  assert.deepEqual(result.hero, defaultSiteContent.hero);
  assert.deepEqual(result.investment.focusPoints, defaultSiteContent.investment.focusPoints);
});

test('keeps required default collections when CMS publishes an empty array', () => {
  const result = mergeSiteContent({ brands: [], workflow: { steps: [] } });

  assert.deepEqual(result.brands, defaultSiteContent.brands);
  assert.deepEqual(result.workflow.steps, defaultSiteContent.workflow.steps);
});

test('ignores empty CMS values so published blanks do not erase the website', () => {
  const result = mergeSiteContent({
    announcement: '   ',
    contact: { email: '', location: 'Jakarta, Indonesia' },
  });

  assert.equal(result.announcement, defaultSiteContent.announcement);
  assert.equal(result.contact.email, defaultSiteContent.contact.email);
  assert.equal(result.contact.location, 'Jakarta, Indonesia');
});
