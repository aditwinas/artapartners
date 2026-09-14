import assert from 'node:assert/strict';
import test from 'node:test';
import { defaultWebsiteContent, mergeWebsiteContent, safeWebUrl } from './website-content';

test('missing or legacy CMS document preserves approved four-page copy', () => {
  for (const incoming of [null, undefined, {hero: {title: 'Legacy dashboard'}}, {heroTitle: ' ', missions: [null]}]) {
    const c = mergeWebsiteContent(incoming);
    assert.equal(c.heroTitle, defaultWebsiteContent.heroTitle);
    assert.deepEqual(c.missions, defaultWebsiteContent.missions);
  }
});
test('valid CMS overrides and optional media work without requiring unknown facts', () => {
  const c = mergeWebsiteContent({ heroTitle: 'Updated', team: [{ name: 'Test member', role: 'Test role', image: 'https://example.com/photo.jpg' }], brands: [{...defaultWebsiteContent.brands[0], url: 'https://example.com'}] });
  assert.equal(c.heroTitle, 'Updated'); assert.equal(c.team.length, 1); assert.equal(c.brands.length, 1); assert.equal(c.brands[0].image, '');
  assert.deepEqual(mergeWebsiteContent({team: [null, {name:'Incomplete'}]}).team, []);
});
test('untrusted links and malformed contact never become actionable URLs', () => {
  for (const bad of ['javascript:alert(1)', 'data:text/html,test', '//example.com', 'http://example.com', 'invalid']) assert.equal(safeWebUrl(bad), '');
  const c = mergeWebsiteContent({ email: 'bad\naddress', officeMap: 'javascript:alert(1)', brands: [{ ...defaultWebsiteContent.brands[0], slug: 'bad id', image: 'javascript:x', url: 'javascript:y' }] });
  assert.equal(c.email, defaultWebsiteContent.email); assert.equal(c.officeMap, ''); assert.equal(c.brands[0].slug, 'brand-0'); assert.equal(c.brands[0].image, '');
});

test('brand overrides preserve all five brands and never inherit optional facts', () => {
  assert.deepEqual(mergeWebsiteContent({brands: defaultWebsiteContent.brands}).brands, defaultWebsiteContent.brands);
  const c = mergeWebsiteContent({brands: [{slug: 'new-brand', name: 'New brand', category: 'Test', headline: 'Test headline', description: 'Test description'}]});
  assert.equal(c.brands.length, 1);
  assert.equal(c.brands[0].city, '');
  assert.equal(c.brands[0].founded, '');
});
