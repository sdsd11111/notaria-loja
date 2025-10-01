const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

// Promisify exec para usar async/await
const execPromise = promisify(exec);

// Directorios
const distPath = path.join(__dirname, '../dist');
const cpanelPath = path.join(__dirname, '../cpanel-version');

// Función para copiar directorios de forma recursiva
function copyDirSync(src, dest) {
  // Crear el directorio de destino si no existe
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Leer el contenido del directorio fuente
  const entries = fs.readdirSync(src, { withFileTypes: true });

  // Procesar cada entrada
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Si es un directorio, copiarlo recursivamente
      copyDirSync(srcPath, destPath);
    } else {
      // Si es un archivo, copiarlo
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copiar archivos de la carpeta dist a cpanel-version
console.log('Copiando archivos a la carpeta cpanel-version...');
if (fs.existsSync(distPath)) {
  // Eliminar la carpeta de destino si existe
  if (fs.existsSync(cpanelPath)) {
    console.log('Eliminando carpeta cpanel-version existente...');
    fs.rmSync(cpanelPath, { recursive: true, force: true });
  }
  
  // Crear la carpeta de destino
  fs.mkdirSync(cpanelPath, { recursive: true });
  
  // Copiar los archivos
  copyDirSync(distPath, cpanelPath);
} else {
  console.error('Error: No se encontró la carpeta dist. Ejecuta primero "npm run build"');
  process.exit(1);
}

// Crear archivo .htaccess
const htaccessContent = `# Habilitar el motor de reescritura
RewriteEngine On

# Si la ruta solicitada no es un archivo existente
RewriteCond %{REQUEST_FILENAME} !-f
# Si la ruta solicitada no es un directorio existente
RewriteCond %{REQUEST_FILENAME} !-d
# Redirigir todas las solicitudes a index.html
RewriteRule ^(.*)$ /index.html [L]

# Comprimir archivos para mejorar el rendimiento
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  AddOutputFilterByType DEFLATE font/opentype font/ttf font/eot font/otf
</IfModule>

# Configuración de caché para mejorar el rendimiento
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/x-javascript "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 7 days"
</IfModule>`;

// Escribir el archivo .htaccess
fs.writeFileSync(path.join(cpanelPath, '.htaccess'), htaccessContent, 'utf8');

console.log('Versión para CPANEL preparada correctamente en la carpeta cpanel-version');
console.log('Sube el contenido de la carpeta cpanel-version a la raíz de tu hosting en CPANEL.');
