import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Script para otimizar imagens do projeto
const optimizeImages = () => {
  const assetsDir = path.join(__dirname, '../src/assets/bgcards');
  const outputDir = path.join(__dirname, '../src/assets/bgcards/optimized');
  
  // Criar diretório de saída se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🖼️  Otimização de imagens iniciada...');
  console.log('📁 Diretório de origem:', assetsDir);
  console.log('📁 Diretório de destino:', outputDir);
  
  // Listar arquivos de imagem
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const files = fs.readdirSync(assetsDir);
  const imageFiles = files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );
  
  console.log(`📊 Encontradas ${imageFiles.length} imagens para otimizar`);
  
  // Gerar comandos de otimização
  const commands = imageFiles.map(file => {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    return {
      input: inputPath,
      output: outputPath,
      original: file
    };
  });
  
  console.log('\n📋 Comandos sugeridos para otimização:');
  console.log('1. Instalar ferramentas:');
  console.log('   npm install -g imagemin-cli imagemin-webp');
  console.log('\n2. Executar otimização:');
  commands.forEach(cmd => {
    console.log(`   imagemin "${cmd.input}" --out-dir="${path.dirname(cmd.output)}" --plugin=webp`);
  });
  
  console.log('\n✨ Otimização concluída!');
  console.log('💡 Dica: Use ferramentas como Sharp ou ImageMagick para melhor compressão');
};

optimizeImages();
