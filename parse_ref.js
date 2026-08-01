const fs = require('fs');
const path = require('path');

const contentPath = 'C:/Users/HP/.gemini/antigravity-cli/brain/153012af-7849-45e9-8647-371de62c4f73/.system_generated/steps/7/content.md';

if (fs.existsSync(contentPath)) {
  const content = fs.readFileSync(contentPath, 'utf8');
  console.log('Total Content Length:', content.length);

  // Extract all section tags
  const sections = content.match(/<section[\s\S]*?<\/section>/gi) || [];
  console.log(`Found ${sections.length} sections:`);

  sections.forEach((sec, idx) => {
    const idMatch = sec.match(/id="([^"]+)"/);
    const id = idMatch ? idMatch[1] : `section-${idx}`;
    console.log(`\n--- Section [${id}] ---`);
    console.log(sec.substring(0, 300) + '...\n');
  });

  // Extract images
  const imgs = content.match(/<img[^>]+>/gi) || [];
  console.log(`Found ${imgs.length} images:`);
  imgs.forEach((img) => console.log('IMG:', img));

  // Extract audio
  const audios = content.match(/<audio[^>]+>/gi) || [];
  console.log(`Found ${audios.length} audio tags:`);
  audios.forEach((aud) => console.log('AUDIO:', aud));
} else {
  console.log('Content file not found');
}
