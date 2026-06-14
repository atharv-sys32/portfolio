const fs = require('fs');
let content = fs.readFileSync('/home/atharv/Desktop/Projects/portfolio/src/app/page.tsx', 'utf8');

// Remove useAnimation
content = content.replace(/useAnimation, /g, '');

// Remove Activity, ArrowRight, Gauge
content = content.replace(/Activity, /g, '');
content = content.replace(/ArrowRight, /g, '');
content = content.replace(/Gauge, /g, '');

fs.writeFileSync('/home/atharv/Desktop/Projects/portfolio/src/app/page.tsx', content);
