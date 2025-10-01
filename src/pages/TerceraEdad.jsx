import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Shield, Users, FileText, CheckCircle, Clock, Phone, Calendar } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const TerceraEdad = () => {
  const beneficios = [
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: 'Seguridad Jurídica',
      description: 'Tu paz mental es nuestra meta. Cada documento emitido cuenta con un análisis riguroso para proteger tus derechos y prevenir conflictos futuros.',
      color: 'bg-red-50',
      borderColor: 'border-red-100',
      textColor: 'text-gray-800'
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: 'Trato Preferencial',
      description: 'Atención personalizada, paciencia y claridad en cada explicación. Nos tomamos todo el tiempo que necesites.',
      color: 'bg-white',
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
      shadow: 'shadow-sm hover:shadow-md'
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: 'Horarios Flexibles',
      description: 'Te ofrecemos citas en horarios que se adapten a tus necesidades y comodidad.',
      color: 'bg-white',
      borderColor: 'border-gray-100',
      textColor: 'text-gray-800',
      shadow: 'shadow-sm hover:shadow-md'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-red-600" />,
      title: 'Asesoría sin Costo',
      description: 'Orientación inicial gratuita para resolver tus dudas sobre cualquier trámite notarial.',
      color: 'bg-red-50',
      borderColor: 'border-red-100',
      textColor: 'text-gray-800'
    }
  ]

  const tramites = [
    {
      title: 'Testamentos',
      description: 'Para planificar con calma y asegurar que su voluntad se respete, protegiendo el futuro de su familia. Es un acto de profunda responsabilidad que le guiamos a realizar con total claridad.'
    },
    {
      title: 'Poderes Especiales',
      description: 'Delegue con seguridad gestiones específicas. Es muy común para el cobro de la pensión de jubilación o del montepío, permitiendo que una persona de su máxima confianza lo haga en su nombre.'
    },
    {
      title: 'Declaración de Supervivencia',
      description: 'Un trámite sencillo pero vital que realizamos de forma ágil para que pueda continuar recibiendo su pensión y otros beneficios del IESS sin interrupciones.'
    },
    {
      title: 'Posesión Efectiva',
      description: 'Le acompañamos en el proceso para formalizar herencias tras el fallecimiento de un cónyuge o familiar, de manera ordenada y respetuosa.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/portada.jpeg" 
            alt="Adultos mayores recibiendo atención preferencial en Notaría"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container-max relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Atención y Beneficios para la Tercera Edad en Loja
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              La experiencia y la sabiduría merecen nuestro máximo respeto y la mayor de las facilidades. En la Notaría, entendemos que los adultos mayores en Loja no solo tienen derechos especiales garantizados por la ley, sino que también merecen una atención preferencial, paciente y totalmente clara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección Parallax */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/portada1.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Compromiso de Respeto y Servicio */}
      <section className="py-16 bg-white">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Un Compromiso de Respeto y Servicio
            </motion.h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro compromiso con los jubilados y personas de la tercera edad en Loja va más allá de la obligación legal. Es nuestra convicción. Nos enorgullece ser una notaría que ofrece un entorno seguro y comprensivo, donde cada pregunta es válida y cada trámite se explica con la paciencia y el detalle que se requiere.
            </p>
          </div>

          {/* Beneficios en Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-lg p-6 transition-all duration-300 border ${item.borderColor} ${item.color} ${item.shadow || ''}`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-white shadow-sm mr-5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index % 2 === 0 && (
                  <div className="absolute right-0 top-0 w-24 h-24 bg-red-100 rounded-full -mr-12 -mt-12 opacity-30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exoneración de Tarifas */}
      <section className="py-16 bg-gray-50">
        <div className="container-max px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-red-700 p-8 md:p-12 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 mr-3" />
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Exoneración de Tarifas Notariales
                    </h2>
                  </div>
                  <p className="text-lg mb-6 text-red-100">
                    Uno de los beneficios más importantes que le otorga la Ley del Adulto Mayor de Ecuador es la exoneración en el pago de diversas tarifas notariales.
                  </p>
                  <div className="mt-auto space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-red-50">Aplicación Directa: En la Notaría, aplicamos rigurosamente estos descuentos y exoneraciones en todos los trámites que corresponde.</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-red-50">Transparencia Total: Antes de iniciar cualquier gestión, le informaremos con claridad sobre los costos y los beneficios aplicables a su caso.</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-red-50">Sin Complicaciones: Nos encargamos de gestionar el beneficio directamente para que usted no tenga que preocuparse por procesos adicionales.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Más que un Trámite, un Trato Preferencial
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Sabemos que la confianza se construye con hechos. Por eso, nuestro servicio para usted incluye:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Paciencia y Claridad: Nos tomamos todo el tiempo necesario para explicarle cada cláusula y cada documento. Aquí no hay apuros.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Citas Flexibles: Ofrecemos horarios preferenciales para su comodidad.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Asesoría sin Costo: Si tiene una duda inicial, no dude en llamarnos. Orientarle es parte de nuestro servicio.</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <a 
                      href="tel:+59372570406" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Llamar para una Consulta Telefónica
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trámites Frecuentes */}
      <section className="py-16 bg-white">
        <div className="container-max px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trámites Frecuentes para Nuestros Adultos Mayores en Loja
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Entendemos cuáles son las gestiones más comunes y necesarias en esta etapa de la vida. Estamos preparados para asesorarle de forma especializada en:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tramites.map((tramite, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-red-200 group"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-red-100 transition-colors">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tramite.title}
                    </h3>
                    <p className="text-gray-600">
                      {tramite.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tiene una Duda? Permítanos Orientarle con Respeto
              </h2>
              <p className="text-lg text-red-100 mb-6 leading-relaxed">
                Usted o un familiar pueden acercarse a nuestra notaría con total confianza. Una consulta a tiempo puede ahorrarle muchas preocupaciones.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-red-100">Atención Preferencial sin esperas</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-red-100">Asesoría personalizada sin costo</p>
                </div>
                
                <div className="pt-2">
                  <a 
                    href="https://wa.me/59372570406?text=Hola,%20soy%20adulto%20mayor%20y%20me%20gustaría%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.2 16.8c.2.3.2.7 0 1-.1.1-.2.2-.3.2h-.2c-.2 0-.4-.1-.6-.2-1.6-1.2-3.5-1.8-5.4-1.9-3.7-.3-7.2 1.2-9.7 3.9v-3.4c-2.4-1.4-4-4-4-6.9C7 5.4 11 1.6 16 1.6s9 3.8 9 8.5c0 1.8-.6 3.5-1.8 4.9v.1c0 .1-.1.2-.1.3v3.4z"/>
                    </svg>
                    Consulta por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-6"
            >
              <ContactForm 
                title="Solicite su Cita Preferencial" 
                description="Complete el formulario y nos pondremos en contacto con usted a la brevedad." 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TerceraEdad

