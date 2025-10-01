import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, FileCheck, DollarSign, HelpCircle, Car } from 'lucide-react';
import VerticalTabs from '@/components/VerticalTabs';

const Vehiculos = () => {
  const tabs = [
    {
      id: 'proceso',
      title: 'Nuestro Proceso',
      subtitle: 'El Proceso para Dar Validez Legal a tu Contrato Vehicular',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Nuestro proceso está diseñado para ser tu filtro de seguridad y garantizar que todo se haga correctamente.
          </p>
          
          <div className="space-y-8">
            {/* Paso 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paso 1: Recepción y Verificación de Documentos</h3>
                <p className="text-gray-600">
                  Revisamos que la documentación personal y del vehículo (matrícula, pagos) esté completa y en orden. Este es el primer paso para un traspaso sin contratiempos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paso 2: Revisión y Formalización del Contrato</h3>
                <p className="text-gray-600">
                  Ustedes nos presentan su acuerdo o la minuta del contrato de compraventa. Nosotros nos encargamos de revisarlo para asegurar que las cláusulas sean legales, claras y protejan los derechos de ambas partes. Le damos la forma de instrumento público para que tenga plena validez.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paso 3: Reconocimiento de Firmas</h3>
                <p className="text-gray-600">
                  Con el contrato ya revisado y formalizado, damos fe pública del acuerdo. Las partes firman en nuestra presencia, un paso indispensable para que el contrato sea legalmente vinculante y nadie pueda negar su participación.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">4</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paso 4: Entrega y Respaldo Legal</h3>
                <p className="text-gray-600">
                  Al finalizar, cada parte recibe su copia del contrato notariado, el documento definitivo que certifica la legalidad de la transacción realizada aquí, en Loja.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'requisitos',
      title: 'Requisitos',
      subtitle: 'Documentación Necesaria para el Traspaso de tu Vehículo',
      icon: <FileCheck className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Para que tu visita a la notaría en Loja sea 100% productiva y podamos agilizar tu trámite, asegúrate de traer lo siguiente:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Documentos del Vendedor */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Del Vendedor:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cédula de identidad y certificado de votación originales y vigentes.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Matrícula original del vehículo a vender.</span>
                </li>
              </ul>
            </div>

            {/* Documentos del Comprador */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Del Comprador:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cédula de identidad y certificado de votación originales y vigentes.</span>
                </li>
              </ul>
            </div>

            {/* Documentos del Vehículo */}
            <div className="bg-yellow-50 p-6 rounded-lg md:col-span-2">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">Del Vehículo:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pago del Impuesto al Rodaje del año en curso.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificado de no tener multas o gravámenes pendientes (se puede consultar en el sistema de la ANT).</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Revisión Técnica Vehicular vigente (si aplica según la normativa de Loja).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'costos',
      title: 'Costos',
      subtitle: '¿Cuál es el Costo del Trámite de Compraventa Vehicular en Loja?',
      icon: <DollarSign className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-6">
              La transparencia es fundamental en nuestra notaría. El costo para legalizar la venta de tu coche en Loja se rige estrictamente por las tarifas oficiales establecidas por el Consejo de la Judicatura de Ecuador.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              El valor final depende del precio de venta que se haya acordado para el vehículo. Para obtener una cotización precisa y sin ningún compromiso, el siguiente paso es contactarnos.
            </p>
            
            <div className="mt-8 text-center">
              <a 
                href="https://wa.me/593987654321?text=Hola,%20quisiera%20solicitar%20una%20proforma%20para%20el%20trámite%20vehicular"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382l-.002-.001h-.016c-1.3-.1-2.605-.26-3.9-.452-.96-.142-1.661-.247-1.752-1.7a9.997 9.997 0 01-.1-1.52c0-.2.02-.4.04-.6.02-.2.04-.4.04-.6 0-.8-.14-1.6-.42-2.38-.1-.3-.2-.7-.14-.9.18-.4.62-.6 1.12-.5.2 0 .4.1.5.2.3.24.6.53.8.88.3.5.5 1.03.6 1.58v.6c.1.8.4 1.56.9 2.22.1.2.3.4.4.6.2.1.4.2.6.2.1 0 .2 0 .3-.1.4-.1.7-.3.9-.6.2-.2.3-.5.3-.8v-.1c0-.1 0-.1-.1-.2-.1-.3-.3-.7-.5-1-.1-.2-.2-.3-.3-.5-.1-.1-.1-.2-.1-.3v-.1c0-.1 0-.2.1-.3.1-.1.2-.2.3-.2.1 0 .2 0 .3.1.3.1.6.3.8.5.2.2.5.5.7.7.3.3.5.6.7 1 .1.2.3.5.4.7 0 .1.1.2.1.3v.1c-.1.4-.3.7-.6 1-.1.1-.2.2-.3.2-.1 0-.2 0-.3-.1-.1-.1-.2-.1-.3-.2-.2-.1-.4-.3-.6-.4-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3.1-.1 0-.2.1-.3.2-.1.1-.1.2-.1.3v2.6c0 .3-.1.5-.3.7-.1.1-.3.2-.5.2z"></path>
                  <path d="M12 22.8c-5.9 0-10.8-4.8-10.8-10.8S6.1 1.2 12 1.2 22.8 6 22.8 12c0 1.4-.3 2.8-.8 4.1-.1.3-.1.6.1.8l-1.6 4.7-4.9-1.6c-.2-.1-.5 0-.8.1-1.2.5-2.6.8-4 .8zm-9.3-10.8c0 5.1 4.2 9.3 9.3 9.3 1.2 0 2.4-.2 3.5-.7l4.3 1.4 1.4-4.3c.4-1 .6-2.1.6-3.3 0-5.1-4.2-9.3-9.3-9.3-5.1 0-9.3 4.2-9.3 9.3z"></path>
                </svg>
                Solicitar Proforma Exacta
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'preguntas',
      title: 'Preguntas Frecuentes',
      subtitle: 'Dudas Comunes sobre el Traspaso de Vehículos en Loja',
      icon: <HelpCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Es válido un contrato que descargué de internet?</h3>
            <p className="text-gray-700">
              Un contrato privado no ofrece seguridad. Un contrato notariado en nuestra notaría en Loja para vehículos te da fecha cierta, prueba legal irrefutable y la certeza de que las firmas son auténticas, protegiéndote ante cualquier reclamo futuro.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué hago si el vehículo todavía tiene una deuda o prenda?</h3>
            <p className="text-gray-700">
              Es fundamental resolverlo antes de la venta. Nosotros te asesoramos sobre cómo realizar la cancelación de la prenda para que el traspaso de dominio en Loja se haga sobre un vehículo "limpio", evitando problemas para el comprador.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Estoy en Loja, pero el comprador está en otra ciudad. ¿Se puede hacer el trámite?</h3>
            <p className="text-gray-700">
              Sí. La solución es un poder especial. El comprador puede otorgar un poder a una persona de confianza en Loja para que firme el contrato en su nombre. Es un trámite seguro que también gestionamos en la notaría.
            </p>
          </div>
        </div>
      )
    }
  ];

  // Actualizar el título y meta tags para SEO
  useEffect(() => {
    // Actualizar el título
    document.title = 'Trámites Vehiculares en Loja | Notaría 8';
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = '¿Necesitas realizar un traspaso vehicular o legalizar la compraventa de tu auto en Loja? Te guiamos en el proceso para darle validez legal a tu contrato. Trámite rápido y seguro.';
    
    // Actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'traspaso vehicular Loja, compraventa de autos Loja, contrato de compraventa vehicular, legalizar venta de auto, trámites notariales vehículos Loja, requisitos traspaso vehicular';
    
    // Actualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Trámites Vehiculares en Loja | Notaría 8';
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = '¿Necesitas realizar un traspaso vehicular o legalizar la compraventa de tu auto en Loja? Te guiamos en el proceso para darle validez legal a tu contrato.';
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = 'website';
    
    // Limpiar al desmontar el componente
    return () => {
      document.title = 'Notaría de Loja';
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with Dark Overlay */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/portada.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-1"></div>
        
        {/* Content */}
        <div className="container-max text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trámites Vehiculares
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Seguridad jurídica en la compraventa y traspaso de vehículos en Loja
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Parallax Background Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/portada1.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
      </div>

      {/* Sección de Trámites */}
      <section className="py-16 bg-gray-50">
        <div className="container-max px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Vehiculares</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ofrecemos servicios profesionales para dar validez legal a tus trámites vehiculares
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <VerticalTabs tabs={tabs} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vehiculos;
