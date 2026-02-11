/**
 * Image Optimization Script for Eagle Waste Solutions
 * 
 * This script identifies large images that should be optimized.
 * Run: node scripts/optimize-images.js
 * 
 * For actual optimization, you'll need to:
 * 1. Install sharp: npm install sharp --save-dev
 * 2. Uncomment the optimization code below
 * 
 * Or use online tools like:
 * - squoosh.app (free, browser-based)
 * - tinypng.com
 * - imageoptim.com (Mac app)
 */

import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const SIZE_THRESHOLD = 500 * 1024; // 500KB - files larger than this should be optimized

function getFileSizeInMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

function scanDirectory(dir, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and hidden directories
      if (!file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath, results);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.heic', '.heif'];
      
      if (imageExtensions.includes(ext) && stat.size > SIZE_THRESHOLD) {
        results.push({
          path: filePath,
          size: stat.size,
          sizeMB: getFileSizeInMB(stat.size),
          extension: ext
        });
      }
    }
  }
  
  return results;
}

console.log('🔍 Scanning for large images (>500KB)...\n');

const largeImages = scanDirectory(PUBLIC_DIR);

if (largeImages.length === 0) {
  console.log('✅ No large images found! All images are optimized.');
} else {
  console.log(`⚠️  Found ${largeImages.length} large images that should be optimized:\n`);
  
  // Sort by size descending
  largeImages.sort((a, b) => b.size - a.size);
  
  let totalSize = 0;
  for (const img of largeImages) {
    console.log(`  📁 ${img.path}`);
    console.log(`     Size: ${img.sizeMB} MB`);
    console.log(`     Recommendation: Convert to WebP, target <200KB\n`);
    totalSize += img.size;
  }
  
  console.log(`\n📊 Total size of large images: ${getFileSizeInMB(totalSize)} MB`);
  console.log('\n💡 Optimization Tips:');
  console.log('   1. Convert PNG/JPG to WebP format (50-80% smaller)');
  console.log('   2. Resize images to max display size (e.g., 1920px width)');
  console.log('   3. Use squoosh.app for quick browser-based optimization');
  console.log('   4. Target file sizes: Hero images <300KB, thumbnails <50KB');
}
