const sharp = require('sharp');
const fs = require('fs');

// Create a 512x512 blue square with white BT text using SVG
// Using site's default primary color #1982c4 (same as header)
const svg = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#1982c4" rx="32"/>
  <text x="256" y="320" font-family="Arial, sans-serif" font-size="280" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">BT</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('app/icon.png')
  .then(() => {
    console.log('✓ BT favicon created successfully');
    
    // Generate all sizes
    const sizes = [16, 32, 180, 192, 512];
    Promise.all(
      sizes.map(size =>
        sharp('app/icon.png')
          .resize(size, size)
          .toFile(`public/favicon-${size}x${size}.png`)
      )
    ).then(() => {
      // Copy 32x32 as favicon.ico
      fs.copyFileSync('public/favicon-32x32.png', 'public/favicon.ico');
      console.log('✓ All favicon sizes generated');
    });
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });

