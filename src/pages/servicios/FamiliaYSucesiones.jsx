import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Users, FileText, Home, Scale, Gift, Handshake, FileCheck, CheckCircle, MessageCircle, Phone, ChevronRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const FamiliaYSucesiones = () => {
  const [activeTab, setActiveTab] = useState('divorcio');
  
  const tabs = [
    {
      id: 'divorcio',
      title: 'Divorcio',
      icon: <FileText className="h-5 w-5 mr-2" />,
      subtitle: 'Divorcio por Mutuo Consentimiento',
      description: 'Cuando una pareja toma la decisión de separarse de forma amistosa, el divorcio en notaría en Loja es la vía más rápida, discreta y menos conflictiva.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900">Solución Ágil y Respetuosa</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            Este trámite está diseñado para disolver el vínculo matrimonial cuando ambas partes están de acuerdo, evitando largos procesos judiciales.
          </p>
          
          <p className="text-gray-700 mb-6">
            Te ayudamos a formalizar este paso de manera respetuosa y eficiente.
          </p>
          
          <a 
            href="/servicios/divorcio-mutuo-consentimiento" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BFF] hover:bg-[#0056b3] transition-colors duration-200"
          >
            Información sobre el Divorcio Notarial
            <FileText className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'testamentos',
      title: 'Testamentos',
      icon: <Scale className="h-5 w-5 mr-2" />,
      subtitle: 'Protege tu Voluntad a Futuro',
      description: 'Redactar un testamento es un acto de responsabilidad y amor. Es la herramienta legal que te permite decidir cómo se distribuirá tu patrimonio.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900">Tu legado en buenas manos</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            Te asesoramos para que puedas hacer un testamento en Loja, ya sea abierto o cerrado, garantizando que tus deseos queden plasmados con total validez legal.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center mr-3 mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-gray-700">Asegura el bienestar de tus seres queridos</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center mr-3 mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-gray-700">Evita conflictos familiares futuros</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center mr-3 mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-gray-700">Tramitación ágil y segura</span>
            </li>
          </ul>
          
          <a 
            href="/servicios/testamentos" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BFF] hover:bg-[#0056b3] transition-colors duration-200"
          >
            Cómo Hacer un Testamento en Loja
            <FileText className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'posesion',
      title: 'Posesión Efectiva',
      icon: <Home className="h-5 w-5 mr-2" />,
      subtitle: 'Formaliza una Herencia',
      description: 'Tras el fallecimiento de un ser querido, el primer paso legal para que los herederos puedan administrar o disponer de los bienes es esencial.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900">Regularización de Herencias</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            En nuestra notaría en Loja para sucesiones, te guiamos en el proceso de posesión efectiva necesario para formalizar la herencia de manera ordenada y conforme a la ley.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Importante: La posesión efectiva es obligatoria para transferir propiedades, vehículos y otros bienes a nombre de los herederos.
                </p>
              </div>
            </div>
          </div>
          
          <a 
            href="/servicios/posesion-efectiva" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BFF] hover:bg-[#0056b3] transition-colors duration-200"
          >
            Conoce sobre la Posesión Efectiva
            <FileText className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'union',
      title: 'Unión de Hecho',
      icon: <Users className="h-5 w-5 mr-2" />,
      subtitle: 'Reconocimiento Legal para tu Convivencia',
      description: 'Si convives con tu pareja de forma estable y monógama, pueden formalizar su relación a través de una unión de hecho.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center font-bold">4</div>
            <h3 className="text-xl font-bold text-gray-900">Protección Legal para tu Relación</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            Este acto les otorga derechos y obligaciones similares a los del matrimonio, protegiendo a ambos y al patrimonio que construyan juntos.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center mr-3 mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-gray-700">Reconocimiento legal de tu relación</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center mr-3 mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-gray-700">Protección del patrimonio familiar</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center mr-3 mt-0.5">
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-gray-700">Derechos hereditarios y de seguridad social</span>
            </li>
          </ul>
          
          <a 
            href="/servicios/union-de-hecho" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BFF] hover:bg-[#0056b3] transition-colors duration-200"
          >
            Detalles sobre la Unión de Hecho
            <Users className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    },
    {
      id: 'donaciones',
      title: 'Donaciones',
      icon: <Gift className="h-5 w-5 mr-2" />,
      subtitle: 'Transfiere un Bien en Vida',
      description: 'Una donación es un contrato mediante el cual transfieres gratuitamente la propiedad de un bien a un ser querido.',
      content: (
        <>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#007BFF] flex items-center justify-center font-bold">5</div>
            <h3 className="text-xl font-bold text-gray-900">Planificación Patrimonial</h3>
          </div>
          
          <p className="text-gray-700 mb-6">
            Para que una donación de inmueble en Loja o de otro bien de valor sea legalmente válida y no pueda ser disputada en el futuro, debe realizarse a través de una escritura pública.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <FileCheck className="h-5 w-5 text-[#007BFF] mr-2" />
                Ventajas
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transferir bienes en vida</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ayudar económicamente a un familiar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Planificación sucesoria</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Scale className="h-5 w-5 text-[#007BFF] mr-2" />
                Requisitos
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Documentos de propiedad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Avalúo de bienes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Asesoría notarial</span>
                </li>
              </ul>
            </div>
          </div>
          
          <a 
            href="/servicios/donaciones" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BFF] hover:bg-[#0056b3] transition-colors duration-200"
          >
            Cómo Realizar una Donación
            <Gift className="ml-2 h-5 w-5" />
          </a>
        </>
      )
    }
  ];
  return (
    <div className="pt-16">
      <Helmet>
        <title>Familia y Sucesiones | Notaría de Loja</title>
        <meta 
          name="description" 
          content="Asesoría notarial especializada en asuntos de familia y sucesiones. Testamentos, divorcios, uniones de hecho, posesión efectiva y donaciones en Loja." 
        />
        <meta 
          name="keywords" 
          content="notaría Loja, familia, sucesiones, testamento, divorcio notarial, unión de hecho, posesión efectiva, donación, herencia" 
        />
      </Helmet>
      
      {/* Hero Section */}
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
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Familia y Sucesiones en Loja
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Protegiendo lo más valioso: tu familia y su futuro
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

      {/* Sección de Introducción */}
      <section className="py-16 bg-white">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Los asuntos familiares y sucesorios son momentos delicados que requieren sensibilidad, experiencia y un enfoque personalizado. En la Notaría de Loja, entendemos la importancia de estos procesos en la vida de las personas y familias.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro equipo de profesionales está comprometido en brindarte la asesoría legal necesaria para que tomes decisiones informadas y protejas los intereses de tus seres queridos, con la seguridad de que todo se realizará conforme a la ley y con el mayor respeto a tu situación personal.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios con Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container-max px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Tabs laterales */}
                <div className="md:w-1/3 bg-gray-50 border-r border-gray-200">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
                    <nav className="space-y-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                            activeTab === tab.id
                              ? 'bg-[#007BFF] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex items-center">
                            {tab.icon}
                            {tab.title}
                          </span>
                          <ChevronRight 
                            className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                              activeTab === tab.id ? 'rotate-90 text-white' : 'text-gray-400'
                            }`} 
                          />
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Contenido del tab activo */}
                <div className="md:w-2/3">
                  <AnimatePresence mode="wait">
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.id && (
                          <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="p-8 h-full"
                          >
                            <div className="flex items-center mb-6">
                              <div className="p-3 rounded-full bg-blue-100 text-[#007BFF] mr-4">
                                {tab.icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900">{tab.subtitle}</h3>
                                <p className="text-gray-600">{tab.description}</p>
                              </div>
                            </div>
                            <div className="prose max-w-none">
                              {tab.content}
                            </div>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* CTA Final */}
      <section className="py-20 bg-[#007BFF]">
        <div className="container-max text-center text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
              <Handshake className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu Situación Familiar Requiere Asesoría Personalizada?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Cada familia es única y cada caso merece ser escuchado con atención y respeto. Si tienes dudas o te enfrentas a una situación compleja, no estás solo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/593987654321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-[#007BFF] bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
              <a 
                href="tel:+593987654321" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llámanos ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FamiliaYSucesiones
