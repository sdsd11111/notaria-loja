# Script para preparar la versión estática para CPANEL
# Asegúrate de ejecutar este script después de haber construido el proyecto con 'npm run build'

# Configuración
$sourceDir = "./dist"
$destDir = "./cpanel-version"
$assetsSource = "./public"

# Asegurarse de que los directorios de destino existan
$directories = @(
    "$destDir",
    "$destDir/assets",
    "$destDir/css",
    "$destDir/js",
    "$destDir/images"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }
}

# Función para copiar archivos con manejo de caracteres especiales
function Copy-FilesWithEncoding {
    param (
        [string]$source,
        [string]$destination,
        [string]$filter = "*.*"
    )
    
    $files = Get-ChildItem -Path $source -Filter $filter -Recurse -File
    
    foreach ($file in $files) {
        $relativePath = $file.FullName.Substring($source.Length).TrimStart('\\', '/')
        $destPath = Join-Path -Path $destination -ChildPath $relativePath
        
        # Crear directorio de destino si no existe
        $destDir = [System.IO.Path]::GetDirectoryName($destPath)
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Force -Path $destDir | Out-Null
        }
        
        # Copiar el archivo con codificación UTF-8
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        [System.IO.File]::WriteAllText($destPath, $content, [System.Text.Encoding]::UTF8)
    }
}

# 1. Copiar archivos HTML
Write-Host "Copiando archivos HTML..." -ForegroundColor Cyan
Copy-Item -Path "$sourceDir/*.html" -Destination $destDir -Force

# 2. Copiar archivos CSS
Write-Host "Copiando archivos CSS..." -ForegroundColor Cyan
$cssFiles = Get-ChildItem -Path "$sourceDir/assets" -Filter "*.css" -Recurse -File
foreach ($file in $cssFiles) {
    $destPath = Join-Path -Path "$destDir/css" -ChildPath $file.Name
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText($destPath, $content, [System.Text.Encoding]::UTF8)
    
    # Actualizar referencias en el archivo HTML
    $htmlFile = Get-Content -Path "$destDir/index.html" -Raw -Encoding UTF8
    $htmlFile = $htmlFile -replace [regex]::Escape($file.Name), ("css/" + $file.Name)
    [System.IO.File]::WriteAllText("$destDir/index.html", $htmlFile, [System.Text.Encoding]::UTF8)
}

# 3. Copiar archivos JS
Write-Host "Copiando archivos JavaScript..." -ForegroundColor Cyan
$jsFiles = Get-ChildItem -Path "$sourceDir/assets" -Filter "*.js" -Recurse -File
foreach ($file in $jsFiles) {
    $destPath = Join-Path -Path "$destDir/js" -ChildPath $file.Name
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText($destPath, $content, [System.Text.Encoding]::UTF8)
    
    # Actualizar referencias en el archivo HTML
    $htmlFile = Get-Content -Path "$destDir/index.html" -Raw -Encoding UTF8
    $htmlFile = $htmlFile -replace [regex]::Escape($file.Name), ("js/" + $file.Name)
    [System.IO.File]::WriteAllText("$destDir/index.html", $htmlFile, [System.Text.Encoding]::UTF8)
}

# 4. Copiar imágenes y otros activos estáticos
Write-Host "Copiando imágenes y activos estáticos..." -ForegroundColor Cyan
Copy-Item -Path "$sourceDir/images/*" -Destination "$destDir/images" -Recurse -Force

# 5. Copiar favicon y otros archivos raíz
Write-Host "Copiando archivos raíz..." -ForegroundColor Cyan
Copy-Item -Path "$sourceDir/favicon.*" -Destination $destDir -Force -ErrorAction SilentlyContinue

# 6. Actualizar rutas en el archivo HTML
Write-Host "Actualizando rutas en el archivo HTML..." -ForegroundColor Cyan
$htmlPath = "$destDir/index.html"
if (Test-Path $htmlPath) {
    $htmlContent = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)
    
    # Actualizar rutas de assets
    $htmlContent = $htmlContent -replace '/assets/', 'assets/'
    $htmlContent = $htmlContent -replace '"/_', '"'
    
    # Guardar el archivo con codificación UTF-8
    [System.IO.File]::WriteAllText($htmlPath, $htmlContent, [System.Text.Encoding]::UTF8)
}

Write-Host "`n¡Preparación para CPANEL completada con éxito!`n" -ForegroundColor Green
Write-Host "Los archivos están listos en: $((Resolve-Path $destDir).Path)" -ForegroundColor Yellow
Write-Host "Puedes subir el contenido de esta carpeta a tu servidor CPANEL.`n" -ForegroundColor Yellow
