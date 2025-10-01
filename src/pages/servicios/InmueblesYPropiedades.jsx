import { motion, AnimatePresence } from 'framer-motion'
import { Home, FileText, Key, Scale, FileCheck, FileSignature, Handshake, Phone, MessageCircle, ChevronRight, Shield } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

const InmueblesYPropiedades = () => {
  const [activeTab, setActiveTab] = useState('compraventa');
  
  const tabs = [
    {
      id: 'compraventa',
      title: 'Compraventa',
      icon: <FileText className="h-5 w-5 mr-2" />,
      subtitle: 'Compraventa de Bienes Inmuebles',
      description: 'Tu Guía para una Transacción Segura en Loja',
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Compraventa de Bienes Inmuebles: Tu Guía para una Transacción Segura en Loja</h3>
          <p className="text-gray-700">
            Este es el trámite más importante para asegurar tu patrimonio. La escritura pública de compraventa es el único documento que te acredita como propietario legítimo de una casa, terreno o departamento. En la Notaría, garantizamos un proceso transparente que protege tanto al comprador como al vendedor.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Beneficios de realizar la compraventa en notaría:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>Seguridad Jurídica:</strong> Te brinda la certeza de que la propiedad está libre de problemas legales.</li>
              <li><strong>Prevención de Fraudes:</strong> Verificamos la identidad de las partes y la legalidad de los documentos.</li>
              <li><strong>Validez Absoluta:</strong> La escritura pública es el requisito indispensable para inscribir la propiedad a tu nombre en el Registro de la Propiedad de Loja.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Indispensables:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Del Vendedor:</strong> Cédula y certificado de votación, escritura anterior de la propiedad, pago del impuesto predial del año en curso.</li>
              <li><strong>Del Comprador:</strong> Cédula y certificado de votación.</li>
              <li><strong>Del Inmueble:</strong> Certificado de Gravámenes actualizado del Registro de la Propiedad.</li>
            </ul>
          </div>

          <button className="mt-6 bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-2 px-6 rounded transition duration-300">
            Iniciar Trámite de Compraventa
          </button>
        </div>
      )
    },
    {
      id: 'hipotecas',
      title: 'Hipotecas',
      icon: <Scale className="h-5 w-5 mr-2" />,
      subtitle: 'Constitución y Cancelación de Hipotecas',
      description: 'Te acompañamos en los dos momentos clave de una hipoteca',
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Constitución y Cancelación de Hipotecas en Loja</h3>
          <p className="text-gray-700">
            Te acompañamos en los dos momentos clave de una hipoteca: al solicitarla y al liberarte de ella.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Constitución de Hipoteca</h4>
            <p className="text-gray-700">
              Cuando solicitas un crédito y pones tu propiedad como garantía, el banco te pedirá formalizar una constitución de hipoteca. Nosotros nos encargamos de revisar la minuta del banco y elaborar la escritura para que puedas acceder a tu financiamiento.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Cancelación de Hipoteca</h4>
            <p className="text-gray-700">
              ¡El mejor momento! Una vez que has pagado la totalidad de tu deuda, es fundamental realizar la cancelación de la hipoteca. Este trámite libera legalmente tu propiedad del gravamen, dejándola saneada para futuras ventas o simplemente para tu total tranquilidad.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Comunes:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédula y certificado de votación.</li>
              <li>Para constituir: Borrador de la minuta o documento del banco.</li>
              <li>Para cancelar: Certificado de cancelación de la deuda emitido por la entidad financiera.</li>
            </ul>
          </div>

          <button className="mt-6 bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-2 px-6 rounded transition duration-300">
            Gestionar mi Trámite de Hipoteca
          </button>
        </div>
      )
    },
    {
      id: 'particion',
      title: 'Partición',
      icon: <FileCheck className="h-5 w-5 mr-2" />,
      subtitle: 'Partición y Adjudicación de Bienes',
      description: 'Divide legalmente propiedades entre copropietarios',
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Partición y Adjudicación de Bienes</h3>
          <p className="text-gray-700">
            Cuando una propiedad pertenece a varias personas (por herencia, divorcio o una sociedad) y desean dividirla, el trámite de partición y adjudicación es la solución. Este acto notarial permite asignar a cada copropietario la parte que le corresponde de forma legal y definitiva.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">¿Cuándo es necesaria?</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Para dividir los bienes tras una disolución de la sociedad conyugal en Loja.</li>
              <li>Para que los herederos puedan adjudicarse formalmente una propiedad.</li>
              <li>Para poner fin a una copropiedad entre socios o hermanos.</li>
            </ul>
          </div>

          <p className="text-gray-700">
            Este trámite evita conflictos futuros y otorga certeza jurídica a cada uno de los dueños sobre su parte.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Clave:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédulas de todos los copropietarios.</li>
              <li>Documento que acredite la propiedad (escritura o posesión efectiva).</li>
              <li>Acuerdo sobre cómo se realizará la división.</li>
            </ul>
          </div>

          <button className="mt-6 bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-2 px-6 rounded transition duration-300">
            Asesoría para Partición de Bienes
          </button>
        </div>
      )
    },
    {
      id: 'promesa',
      title: 'Promesa de Compraventa',
      icon: <FileSignature className="h-5 w-5 mr-2" />,
      subtitle: 'Seguridad en tus Acuerdos',
      description: 'Asegura tu futuro negocio inmobiliario',
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Promesa de Compraventa: Asegura tu Futuro Negocio Inmobiliario</h3>
          <p className="text-gray-700">
            ¿Encontraste la casa ideal en Loja pero necesitas tiempo para gestionar el crédito? ¿Eres vendedor y quieres asegurar que el comprador mantenga su oferta? La promesa de compraventa notariada es un pre-contrato que obliga a ambas partes a realizar la compraventa en el futuro, respetando el precio y las condiciones pactadas.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Beneficios de una Promesa de Compraventa:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>"Congela" el precio y las condiciones del negocio.</li>
              <li>Da tiempo al comprador para buscar financiamiento.</li>
              <li>Genera una obligación legal para ambas partes, evitando que se retracten sin consecuencias.</li>
              <li>Es el paso previo más seguro para una escritura de casa en Loja.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédulas de promitente vendedor y promitente comprador.</li>
              <li>Identificación clara de la propiedad.</li>
              <li>Precio, forma de pago, plazo y cualquier otra condición acordada.</li>
            </ul>
          </div>

          <button className="mt-6 bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-2 px-6 rounded transition duration-300">
            Formalizar una Promesa de Compraventa
          </button>
        </div>
      )
    },
    {
      id: 'arrendamiento',
      title: 'Arrendamiento',
      icon: <Key className="h-5 w-5 mr-2" />,
      subtitle: 'Inscripción de Contratos de Arrendamiento',
      description: 'Protege tus derechos en alquileres',
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Inscripción de Contratos de Arrendamiento</h3>
          <p className="text-gray-700">
            Para proteger los derechos tanto del arrendador (dueño) como del arrendatario (inquilino), inscribir un contrato de arriendo en una notaría de Loja es una decisión inteligente y estratégica. Este acto le otorga fecha cierta al contrato y lo hace oponible ante terceros, brindando una capa de seguridad legal crucial.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">¿Por qué inscribir tu contrato?</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Protege al inquilino de un desalojo injustificado.</li>
              <li>Protege al dueño en caso de incumplimiento de pago.</li>
              <li>Es altamente recomendado para alquileres comerciales o de largo plazo.</li>
              <li>Sirve como prueba legal sólida en cualquier disputa.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Presentar el contrato de arrendamiento por triplicado.</li>
              <li>Cédulas de identidad del arrendador y del arrendatario.</li>
            </ul>
          </div>

          <button className="mt-6 bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium py-2 px-6 rounded transition duration-300">
            Detalles sobre Inscripción de Arriendos
          </button>
        </div>
      )
    }
  ];
  
  return (
    <div className="pt-16">
      <Helmet>
        <title>Inmuebles y Propiedades | Notaría de Loja</title>
        <meta 
          name="description" 
          content="Trámites notariales para bienes raíces en Loja: compraventas, hipotecas, partición de bienes, promesas de compraventa y contratos de arrendamiento." 
        />
        <meta 
          name="keywords" 
          content="notaría Loja, compraventa inmuebles, hipoteca, escritura pública, partición de bienes, promesa de compraventa, contrato de arrendamiento, bienes raíces" 
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
            <Key className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu Guía Notarial para Inmuebles y Propiedades en Loja
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprar, vender o hipotecar una propiedad es una de las decisiones financieras más importantes de tu vida.
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
              Un error o una omisión en el proceso pueden costar caro. En la Notaría de Loja, nos especializamos en todos los trámites de inmuebles para garantizar que tu inversión esté segura y tu patrimonio, protegido.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Te acompañamos en cada paso, desde el acuerdo inicial hasta la inscripción final, asegurando que cada documento tenga total validez y te brinde la tranquilidad que mereces.
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
                                ? 'bg-[#0056b3] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex items-center">
                            {tab.icon}
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
            className="max-w-3xl mx-auto"
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas asesoramiento sobre inmuebles?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Nuestro equipo especializado está listo para guiarte en todos los aspectos 
              legales de tu propiedad. Contáctanos para una consulta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/59372570406?text=Hola,%20necesito%20información%20sobre%20servicios%20de%20inmuebles%20y%20propiedades."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consultar por WhatsApp
              </a>
              <a 
                href="tel:+59372570406"
                className="btn-secondary"
              >
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InmueblesYPropiedades

