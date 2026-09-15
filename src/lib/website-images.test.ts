import assert from 'node:assert/strict';
import test from 'node:test';
import { resolveWebsiteImages } from './website-images';
import { mergeWebsiteContent } from './website-content';
const photo = {asset:{_ref:'image-0123456789abcdef0123456789abcdef01234567-1600x1200-jpg'},crop:{top:0.1,bottom:0.1,left:0.1,right:0.1},hotspot:{x:0.7,y:0.5,width:0.2,height:0.5},alt:'Foto brand'};
test('uploaded photos produce cropped CDN URLs for all three placements',()=>{
 const result=resolveWebsiteImages({brands:[{photo}],team:[{name:'Test',role:'Test',photo}],officePhoto:photo},'4yqg1ptd','production') as any;
 for(const url of [result.brands[0].image,result.team[0].image,result.officeImage]){
  const u=new URL(url);assert.equal(u.host,'cdn.sanity.io');assert.ok(u.searchParams.has('rect'));assert.equal(u.searchParams.get('auto'),'format');
 }
 assert.equal(new URL(result.team[0].image).searchParams.get('h'),'1000');
 assert.equal(result.brands[0].imageAlt,'Foto brand');
 assert.ok(mergeWebsiteContent(result).team[0].image.startsWith('https://cdn.sanity.io/'));
});
test('existing URL content remains usable, while invalid or cleared uploads stay empty',()=>{
 const result=resolveWebsiteImages({brands:[{image:'https://example.com/old.jpg'},{image:'https://example.com/old.jpg',photo:{}},{photo:{asset:{_ref:'bad'}}}],officeImage:'https://example.com/office.jpg'},'4yqg1ptd','production') as any;
 assert.equal(result.brands[0].image,'https://example.com/old.jpg');assert.equal(result.brands[1].image,'');assert.equal(result.brands[2].image,'');assert.equal(result.officeImage,'https://example.com/office.jpg');
});
