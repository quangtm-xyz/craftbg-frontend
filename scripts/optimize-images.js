const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
    const publicDir = path.join(__dirname, '../public');

    // Optimize image_uploadzone.webp
    const inputPath = path.join(publicDir, 'image_uploadzone.webp');
    const outputPath = path.join(publicDir, 'image_uploadzone_optimized.webp');

    try {
        await sharp(inputPath)
            .resize(800, null, { // Max width 800px
                withoutEnlargement: true,
                fit: 'inside'
            })
            .webp({ quality: 75 }) // Reduce quality to 75%
            .toFile(outputPath);

        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

        console.log(`✅ Optimized image_uploadzone.webp:`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(2)} KB`);
        console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(2)} KB`);
        console.log(`   Savings: ${savings}%`);
        console.log(`\n📝 Next steps:`);
        console.log(`   1. Review the optimized image: public/image_uploadzone_optimized.webp`);
        console.log(`   2. If satisfied, replace the original:`);
        console.log(`      mv public/image_uploadzone_optimized.webp public/image_uploadzone.webp`);
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('\n💡 Tip: Install sharp first: npm install --save-dev sharp');
    }
}

optimizeImages();
