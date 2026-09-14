import {getCliClient} from 'sanity/cli';
import {writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {defaultWebsiteContent} from '../src/lib/website-content';
const client=getCliClient().withConfig({apiVersion:'2026-01-01',useCdn:false,perspective:'raw'});
const ids=['websitePages','drafts.websitePages'];
const before=await client.fetch('*[_id in $ids]',{ids});
writeFileSync('../website-content-before-sync.json',JSON.stringify(before,null,2));
// This migration is intentionally create-only: never overwrite later editor changes.
assert.equal(before.length,0,'Website content now exists; inspect editor changes before syncing.');
const fields=Object.fromEntries(Object.entries(defaultWebsiteContent).map(([key,value])=>[key,Array.isArray(value)?value.map((item,i)=>typeof item==='object'?{...item,_key:`${key}-${i}`,_type:`${key}Item`}:item):value]));
await client.create({_id:'websitePages',_type:'websitePages',...fields});
const saved=await client.getDocument('websitePages');
for(const [key,value] of Object.entries(fields)) assert.deepEqual(saved?.[key],value,`Readback mismatch: ${key}`);
writeFileSync('../website-content-after-sync.json',JSON.stringify(saved,null,2));
console.log(JSON.stringify({id:saved?._id,updatedAt:saved?._updatedAt,verifiedFields:Object.keys(fields).length,brands:saved?.brands.length,values:saved?.values.length,hero:saved?.heroTitle}));
