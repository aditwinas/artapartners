import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function filesIn(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesIn(path) : [path];
  });
}

const bundle = filesIn('dist')
  .filter((path) => path.endsWith('.js'))
  .map((path) => readFileSync(path, 'utf8'))
  .join('\n');

assert.match(bundle, /4yqg1ptd/, 'Sanity Studio bundle must contain the ARTA project ID');
assert.doesNotMatch(bundle, /Isi SANITY_PROJECT_ID/, 'Sanity Studio bundle must not contain the missing-config crash');
console.log('Sanity Studio bundle configuration: PASS');
