import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';
import ffmpegStatic from 'ffmpeg-static';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths
const inputVideoPath = join(__dirname, 'public', 'blackhole.mp4');
const outputVideoPath = join(__dirname, 'public', 'blackhole-compressed.mp4');
const posterPath = join(__dirname, 'public', 'blackhole-poster.jpg');

console.log('Compressing video...');

// Simpler compression command with more compatible options
try {
  execSync(`${ffmpegStatic} -i "${inputVideoPath}" -c:v libx264 -crf 30 -preset fast -vf scale=640:-2 -an "${outputVideoPath}"`, {
    stdio: 'inherit'
  });
  console.log(`Video compressed successfully to ${outputVideoPath}`);
} catch (error) {
  console.error('Error compressing video:', error);
}

console.log('Extracting poster frame...');

// Simpler poster extraction
try {
  execSync(`${ffmpegStatic} -i "${inputVideoPath}" -ss 0 -frames:v 1 -q:v 5 "${posterPath}"`, {
    stdio: 'inherit'
  });
  console.log(`Poster frame extracted to ${posterPath}`);
} catch (error) {
  console.error('Error extracting poster frame:', error);
}

console.log('Optimization complete!'); 