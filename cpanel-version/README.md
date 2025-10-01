# Instrucciones para subir a CPANEL

¡Felicidades! Has generado con éxito la versión estática del sitio web de la Notaría Loja. Sigue estas instrucciones para subir el sitio a CPANEL.

## Contenido de la carpeta

- `index.html` - Página principal de la aplicación
- `.htaccess` - Archivo de configuración del servidor Apache
- `css/` - Contiene los estilos CSS
- `js/` - Contiene los archivos JavaScript
- `images/` - Contiene las imágenes del sitio
- `favicon.png` - Ícono del sitio

## Instrucciones para subir a CPANEL

1. **Inicia sesión en tu cuenta de CPANEL**
   - Accede a tu panel de control de alojamiento web (generalmente en `https://tudominio.com/cpanel`)
   - Inicia sesión con tus credenciales

2. **Abre el Administrador de Archivos**
   - Busca y haz clic en el ícono "Administrador de Archivos"
   - Navega hasta la carpeta pública de tu sitio (generalmente `public_html` o una subcarpeta dentro de ella)

3. **Sube los archivos**
   - Haz clic en el botón "Subir" en la parte superior
   - Selecciona todos los archivos y carpetas de la carpeta `cpanel-version`
   - Espera a que se complete la carga

4. **Configura el dominio (si es necesario)**
   - Si estás usando un subdominio o dominio personalizado, asegúrate de que esté correctamente configurado en CPANEL

5. **Verifica el sitio**
   - Abre tu navegador y visita tu dominio
   - Asegúrate de que todo se vea y funcione correctamente

## Notas importantes

- El archivo `.htaccess` ya está configurado para manejar el enrutamiento de la aplicación React.
- Se han implementado reglas de caché y compresión para mejorar el rendimiento del sitio.
- Si necesitas hacer cambios en el contenido, deberás modificar el código fuente y volver a generar la versión estática.

## Solución de problemas

- **Las rutas no funcionan**: Asegúrate de que el archivo `.htaccess` se haya subido correctamente y que el servidor tenga habilitado el módulo `mod_rewrite`.
- **Error 500**: Verifica los permisos de los archivos (deben ser 644 para archivos y 755 para carpetas).
- **Faltan estilos o scripts**: Asegúrate de que todas las carpetas (`css/`, `js/`, `images/`) se hayan subido correctamente.

## Soporte

Si tienes alguna pregunta o necesitas ayuda, por favor contacta al equipo de desarrollo.
