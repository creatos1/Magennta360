import fs from 'fs';
import path from 'path';

// Step 1: Read the built assets to find the correct filenames
const assetsDir = path.join(process.cwd(), 'dist', 'client', 'assets');
const files = fs.readdirSync(assetsDir);

// Find the main JS and CSS files
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const stylesCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

// Step 2: Generate the index.html with correct asset paths
const indexHtmlContent = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Magennta 360 — Marketing Digital e Inteligencia Artificial</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    ${stylesCss ? `<link rel="stylesheet" href="/assets/${stylesCss}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${mainJs ? `<script type="module" src="/assets/${mainJs}"></script>` : ''}
  </body>
</html>`;

// Step 3: Write the index.html to dist/client
const distClientDir = path.join(process.cwd(), 'dist', 'client');
if (!fs.existsSync(distClientDir)) {
  fs.mkdirSync(distClientDir, { recursive: true });
}

const outputPath = path.join(distClientDir, 'index.html');
fs.writeFileSync(outputPath, indexHtmlContent, 'utf8');

console.log('✓ Generated index.html in dist/client with correct asset paths');
