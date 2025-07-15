#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '../images');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath);
  const baseName = path.basename(inputPath, ext);
  const outputPath = path.join(IMAGES_DIR, `${baseName}.webp`);

  if (fs.existsSync(outputPath)) {
    console.log(`スキップ: ${baseName}.webp は既に存在します`);
    return;
  }

  try {
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    const webpStats = fs.statSync(outputPath);
    const webpSize = webpStats.size;
    const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`変換完了: ${path.basename(inputPath)} → ${baseName}.webp (${reduction}% 削減)`);

  } catch (error) {
    console.error(`変換エラー: ${path.basename(inputPath)} - ${error.message}`);
  }
}

async function optimizeImages() {
  console.log('画像をWebPに変換中...');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('images ディレクトリが見つかりません');
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file =>
    SUPPORTED_FORMATS.includes(path.extname(file).toLowerCase()) &&
    fs.statSync(path.join(IMAGES_DIR, file)).isFile()
  );

  if (imageFiles.length === 0) {
    console.log('変換対象の画像ファイルが見つかりません');
    return;
  }

  console.log(`${imageFiles.length}個の画像ファイルを処理します\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    await convertToWebP(inputPath);
  }

  console.log('\n画像変換が完了しました！');
}

if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages };
