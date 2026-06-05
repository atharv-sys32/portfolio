const fs = require('fs');
let content = fs.readFileSync('/home/atharv/Desktop/Projects/portfolio/src/app/page.tsx', 'utf8');

// 1. Remove old SiPayoneer import
content = content.replace('SiPayoneer', '');
content = content.replace(',  from', ' from');

// 2. Change falling icons opacity and count
content = content.replace(/length: 25/, 'length: 40');
content = content.replace(/opacity: \[0, 0.15, 0\]/g, 'opacity: [0, 0.4, 0]');

// 3. Fix Hero spacing (remove gap-6 from parent section)
content = content.replace('className="flex flex-col items-center text-center gap-6 mb-32 mt-10"', 'className="flex flex-col items-center text-center mb-32 mt-10"');

// 4. Update Profile Picture sizing and centering
content = content.replace('relative w-44 h-44 md:w-52 md:h-52 rounded-full p-1', 'relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1');
content = content.replace('object-[50%_15%] scale-[1.5] origin-[50%_20%]', 'object-center');

// 5. Intro Text stretching
content = content.replace('max-w-2xl', 'w-full max-w-full');
content = content.replace('mt-2 min-h-[1.2em]', 'mt-1 min-h-[1.2em] mb-4');

// 6. Fix Resume Link
content = content.replace('href="#"', 'href="https://drive.google.com/drive/folders/1kUKwIOUtmzGiYza5mpIwciRVQ9pjOMJX?usp=sharing" target="_blank" rel="noreferrer"');
content = content.replace('<Download size={18} /> Download Resume', '<ExternalLink size={18} /> View Resume');

fs.writeFileSync('/home/atharv/Desktop/Projects/portfolio/src/app/page.tsx', content);
