import { defaultSiteContent } from './site-content';

const key = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export type SeedOperation = 'createIfNotExists' | 'createOrReplace';

export function getSeedOperation(env: Record<string, string | undefined>): SeedOperation {
  return env.SANITY_SEED_FORCE === '1' ? 'createOrReplace' : 'createIfNotExists';
}

export function buildSeedDocument() {
  return {
    _id: 'siteSettings',
    _type: 'siteSettings' as const,
    ...defaultSiteContent,
    stats: defaultSiteContent.stats.map((item) => ({ _key: key(item.label), _type: 'stat' as const, ...item })),
    workflow: {
      ...defaultSiteContent.workflow,
      steps: defaultSiteContent.workflow.steps.map((item) => ({ _key: key(item.title), _type: 'step' as const, ...item })),
    },
    solutions: {
      ...defaultSiteContent.solutions,
      items: defaultSiteContent.solutions.items.map((item) => ({ _key: key(item.name), _type: 'solution' as const, ...item })),
    },
    brands: defaultSiteContent.brands.map((item) => ({ _key: key(item.name), _type: 'brand' as const, ...item })),
  };
}
