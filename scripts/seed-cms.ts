import { getCliClient } from 'sanity/cli';

import { buildSeedDocument, getSeedOperation } from '../src/lib/sanity-seed';

const client = getCliClient();
const document = buildSeedDocument();
const operation = getSeedOperation(process.env);

if (operation === 'createOrReplace') {
  await client.createOrReplace(document);
  console.log('Konten ARTA di-reset ke konten bawaan.');
} else {
  const result = await client.createIfNotExists(document);
  console.log(result._createdAt === result._updatedAt
    ? 'Konten awal ARTA berhasil dimasukkan ke Sanity CMS.'
    : 'Dokumen CMS sudah ada; konten editan tidak ditimpa.');
}
