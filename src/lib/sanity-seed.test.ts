import assert from 'node:assert/strict';
import test from 'node:test';

import { buildSeedDocument, getSeedOperation } from './sanity-seed';

test('uses non-destructive seeding unless reset is explicitly requested', () => {
  assert.equal(getSeedOperation({}), 'createIfNotExists');
  assert.equal(getSeedOperation({ SANITY_SEED_FORCE: '1' }), 'createOrReplace');
});

test('adds Sanity type discriminators to seeded object arrays', () => {
  const document = buildSeedDocument();

  assert.equal(document._type, 'siteSettings');
  assert.equal(document.stats[0]._type, 'stat');
  assert.equal(document.workflow.steps[0]._type, 'step');
  assert.equal(document.solutions.items[0]._type, 'solution');
  assert.equal(document.brands[0]._type, 'brand');
});
