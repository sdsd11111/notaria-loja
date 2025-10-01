// Configuración del servidor de correo
export const emailConfig = {
  host: 'correo.notariaoctavaloja.com',
  port: 465, // Puerto seguro para SMTP
  secure: true, // true para 465, false para otros puertos
  auth: {
    user: 'serviciosnotariales@notariaoctavaloja.com',
    pass: '@*h)u#l@o3~U' // En producción, considera usar variables de entorno
  },
  tls: {
    // No fallar en certificados inválidos (para desarrollo)
    rejectUnauthorized: false
  }
};

// Configuración del correo
export const mailOptions = {
  from: '"Notaría de Loja" <serviciosnotariales@notariaoctavaloja.com>',
  to: 'serviciosnotariales@notariaoctavaloja.com', // Correo de destino
  subject: 'Nuevo mensaje del formulario de contacto',
  // El HTML se generará dinámicamente
};

// Configuración del servidor
export const serverConfig = {
  port: 3001, // Puerto para el servidor
  corsOptions: {
    origin: 'http://localhost:3000', // URL del frontend en desarrollo
    optionsSuccessStatus: 200
  }
};
