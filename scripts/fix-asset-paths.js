const fs = require('fs');
const path = require('path');

// Directorios donde buscar archivos HTML
const distPath = path.join(__dirname, '../dist');

// Función para procesar archivos HTML
function processHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Si es un directorio, procesar recursivamente
      processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      // Si es un archivo HTML, procesarlo
      console.log(`Procesando: ${filePath}`);
      
      // Leer el contenido del archivo
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Reemplazar rutas absolutas por relativas
      content = content.replace(/(href|src)="\/([^"\/])/g, '$1="./$2');
      content = content.replace(/url\(\s*'?\/\//g, 'url(/');
      content = content.replace(/url\(\s*"?\//g, 'url(./');
      
      // Escribir el contenido actualizado
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

// Procesar archivos HTML en el directorio de distribución
console.log('Iniciando corrección de rutas de assets...');
processHtmlFiles(distPath);
console.log('Proceso completado.');
