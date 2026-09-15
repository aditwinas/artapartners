import { createImageUrlBuilder } from '@sanity/image-url';

type RecordValue = Record<string, unknown>;
const record = (value: unknown): value is RecordValue => Boolean(value && typeof value === 'object' && !Array.isArray(value));

export function resolveWebsiteImages(incoming: unknown, projectId: string, dataset: string): unknown {
  if (!record(incoming)) return incoming;
  const builder = createImageUrlBuilder({ projectId, dataset });
  const uploaded = (photo: unknown, width: number, height: number): string => {
    if (!record(photo) || !record(photo.asset) || typeof photo.asset._ref !== 'string') return '';
    try { return builder.image(photo).width(width).height(height).fit('crop').auto('format').quality(85).url(); }
    catch { return ''; }
  };
  const items = (value: unknown, width: number, height: number) => !Array.isArray(value) ? value : value.map(item => {
    if (!record(item) || !Object.hasOwn(item, 'photo')) return item;
    return { ...item, image: uploaded(item.photo, width, height), imageAlt: record(item.photo) && typeof item.photo.alt === 'string' ? item.photo.alt : item.imageAlt };
  });
  return {
    ...incoming,
    brands: items(incoming.brands, 1200, 1200),
    team: items(incoming.team, 800, 1000),
    ...(Object.hasOwn(incoming, 'officePhoto') ? { officeImage: uploaded(incoming.officePhoto, 1200, 900) } : {}),
  };
}
