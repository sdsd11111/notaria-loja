import { motion } from 'framer-motion'
import { FileCheck, Stamp, Shield, CheckCircle, FileText, ChevronRight, FileText as FileTextIcon, FileArchive, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import VerticalTabs from '@/components/VerticalTabs'

const DeclaracionesYOtros = () => {
  // Actualizar el título y meta tags para SEO
  useEffect(() => {
    // Actualizar el título
    document.title = 'Declaración Juramentada y Protocolización en Loja | Notaría 8';
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = '¿Necesitas una declaración juramentada o protocolizar un documento en Loja? Te guiamos en el proceso para darle validez legal. Trámite rápido y seguro.';
    
    // Actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'declaración juramentada Loja, protocolizar documento Loja, notaría para declaraciones Loja, declaración jurada costo Loja, para qué sirve una declaración juramentada, protocolizar contrato privado, dar fe pública a un documento';
    
    // Actualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Declaración Juramentada y Protocolización en Loja | Notaría 8';
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = '¿Necesitas una declaración juramentada o protocolizar un documento en Loja? Te guiamos en el proceso para darle validez legal. Trámite rápido y seguro.';
    
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
              Declaración Juramentada y Protocolización de Documentos
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Validez legal y seguridad jurídica para tus documentos más importantes
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

{/* Sección con Pestañas Verticales */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios de Documentación Legal</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ofrecemos servicios profesionales para dar validez legal a tus documentos más importantes
              </p>
            </div>
            
            <VerticalTabs 
              tabs={[
                {
                  id: 'declaracion-juramentada',
                  title: 'Declaración Juramentada',
                  icon: <FileTextIcon className="h-5 w-5" />,
                  subtitle: 'Usos Principales',
                  description: 'Tu palabra con validez legal ante cualquier institución',
                  content: (
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Trámites Migratorios</h4>
                          <p className="text-gray-600">Visas, dependencia económica y lazos familiares</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Asuntos Financieros</h4>
                          <p className="text-gray-600">Procedencia de fondos y justificación de gastos</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Asuntos Personales</h4>
                          <p className="text-gray-600">Estado civil, convivencia y declaración de bienes</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Trámites IESS</h4>
                          <p className="text-gray-600">Pensiones, montepío y afiliaciones</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-3">2</span>
                          Requisitos Necesarios
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">Documentos Personales</h4>
                            <p className="text-gray-600">Cédula de identidad y certificado de votación vigentes en buen estado.</p>
                          </div>
                          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">Contenido Claro</h4>
                            <p className="text-gray-600">Tener claro el contenido a declarar. Nuestro equipo te asesora para que sea preciso y legalmente correcto.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'protocolizacion',
                  title: 'Protocolización de Documentos',
                  icon: <FileArchive className="h-5 w-5" />,
                  subtitle: 'Beneficios Clave',
                  description: 'Asegura tus acuerdos y contratos con validez legal',
                  content: (
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Fecha Cierta</h4>
                          <p className="text-gray-600">Establece una fecha oficial e indiscutible para tu documento</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Conservación</h4>
                          <p className="text-gray-600">Protección y almacenamiento seguro a largo plazo</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Validez Legal</h4>
                          <p className="text-gray-600">Mayor respaldo jurídico para tus documentos</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-semibold text-lg text-gray-900 mb-3">Seguridad</h4>
                          <p className="text-gray-600">Protección contra alteraciones o pérdidas</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">2</span>
                          Documentos que puedes protocolizar
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">Contratos Privados</h4>
                            <p className="text-gray-600">Arrendamiento, promesas de compraventa, préstamos entre particulares o acuerdos comerciales.</p>
                          </div>
                          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">Actas y Finiquitos</h4>
                            <p className="text-gray-600">Finiquito laboral, acuerdos de mediación o actas de reuniones importantes.</p>
                          </div>
                          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">Documentos Técnicos</h4>
                            <p className="text-gray-600">Planos arquitectónicos, informes periciales o cualquier documento que necesite una fecha de creación verificable.</p>
                          </div>
                          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-semibold text-gray-900 mb-2">Testamentos Ológrafos</h4>
                            <p className="text-gray-600">Para asegurar la conservación de un testamento escrito a mano.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ]}
              title="Nuestros Servicios"
              className="shadow-lg"
            />
            
            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20más%20información%20sobre%20los%20servicios%20de%20documentación%20legal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar más información
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Tarifas */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Tarifas Claras para tu Gestión
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              En la Notaría de Loja, la transparencia es un pilar fundamental. Los costos de estos servicios están regulados por el Consejo de la Judicatura, garantizando un precio justo y sin sorpresas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Declaración Juramentada
                </h3>
                <p className="text-muted-foreground">
                  La tarifa varía si es para una persona natural o jurídica, conforme al Art. 95 de la resolución de tarifas notariales.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Protocolización de Documentos
                </h3>
                <p className="text-muted-foreground">
                  El valor se calcula por cada foja (cara) del documento que se va a incorporar al protocolo, según lo estipula el Art. 73 de la misma resolución.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mt-8">
              Para una cotización exacta y sin compromiso, no dudes en contactarnos con los detalles de tu caso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container-max text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Listo para Darle Seguridad a tus Documentos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ya sea que necesites que tu palabra tenga fuerza de ley o quieras proteger un contrato importante, estamos aquí para ayudarte. Nuestro equipo en Loja te guiará para que tu trámite sea rápido, seguro y sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20información%20sobre%20declaraciones%20juramentadas%20y%20protocolización."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Agendar una Cita Ahora</span>
              </a>
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20información%20sobre%20declaraciones%20juramentadas%20y%20protocolización."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default DeclaracionesYOtros
