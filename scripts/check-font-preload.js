#!/usr/bin/env node

/**
 * Font preload check (runs as npm postbuild)
 * app/[locale]/layout.tsx preloads next/font's emitted file by its path. That path is
 * content-hashed, so it changes if the font file or Next's naming does; fail the build then,
 * rather than ship a preload that 404s and a heading that shifts again.
 *
 * Usage: node scripts/check-font-preload.js (after next build)
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const layout = fs.readFileSync(path.join(root, 'app/[locale]/layout.tsx'), 'utf8');
const paths = [...new Set(layout.match(/\/_next\/static\/media\/[^'"`\s]+/g) || [])];

const missing = paths.filter((p) => !fs.existsSync(path.join(root, '.next', p.replace('/_next/', ''))));
if (missing.length) {
  console.error(`Font preload: not in the build output: ${missing.join(', ')}`);
  console.error('Update the path in app/[locale]/layout.tsx to the file in .next/static/media.');
  process.exit(1);
}
console.log(`Font preload: ${paths.length} path(s) found in the build output`);
