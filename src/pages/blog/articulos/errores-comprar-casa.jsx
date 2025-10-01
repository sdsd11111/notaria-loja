import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Home, AlertTriangle, FileText, HandCoins, Scale, Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErroresComprarCasa = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>5 Errores Comunes al Comprar una Casa en Loja (y Cómo Evitarlos) | Notaría 8 Loja</title>
        <meta 
          name="description" 
          content="Evita estos 5 errores comunes al comprar una casa en Loja. Aprende cómo proteger tu inversión y realizar una compra segura con la asesoría de Notaría 8 Loja." 
        />
        <meta 
          name="keywords" 
          content="comprar casa Loja, errores compra vivienda, compra de inmuebles Loja, asesoría notarial compra, Notaría 8 Loja" 
        />
        <meta property="og:title" content="5 Errores Comunes al Comprar una Casa en Loja (y Cómo Evitarlos)" />
        <meta property="og:description" content="Aprende a evitar los errores más comunes al comprar una casa en Loja con la asesoría de Notaría 8 Loja." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/blog/compra-casa.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-1"></div>
        
        <div className="container-max relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Volver al blog
            </Link>
            <div className="flex justify-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <Home className="w-3 h-3 mr-1" /> Inmuebles
              </span>
              <span className="inline-flex items-center text-sm text-white/80">
                <Calendar className="w-4 h-4 mr-1" /> 15 de Julio, 2024
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              5 Errores Comunes al Comprar una Casa en Loja (y Cómo Evitarlos)
            </h1>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Por Dra. Patricia Quiñones</span>
              </div>
              <span>•</span>
              <span>7 min de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del Artículo */}
      <article className="py-12 bg-white">
        <div className="container-max px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Comprar una casa es una de las decisiones financieras más importantes que tomarás en tu vida. En Loja, donde el mercado inmobiliario tiene sus propias particularidades, es crucial evitar errores que podrían costarte tiempo, dinero y tranquilidad. Como notaría con amplia experiencia en el sector, hemos identificado los 5 errores más comunes que cometen los compradores y cómo puedes evitarlos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. No Verificar el Estado Legal del Inmueble</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Peligro:</strong> Podrías estar comprando una propiedad con gravámenes, embargos o problemas de titularidad que te impedirán disponer libremente de ella.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                <strong>Solución:</strong> Antes de realizar cualquier pago, solicita en el Registro de la Propiedad un certificado de gravámenes y tradición. En Notaría 8 Loja ofrecemos asesoría para verificar que la propiedad esté libre de cargas y que el vendedor sea el legítimo propietario.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. No Revisar las Obligaciones Tributarias</h2>
              
              <p className="mb-4">
                Muchos compradores desconocen que adquieren las deudas tributarias de la propiedad al comprarla.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Documentos a verificar:</strong> Certificado de no adeudo de predios, impuestos municipales y cualquier otro gravamen.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                <strong>Recomendación:</strong> Solicita los certificados de no adeudo de impuestos municipales y verifica que no existan multas o sanciones pendientes de pago.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. No Presupuestar los Costos Adicionales</h2>
              
              <p className="mb-4">
                El precio de compra no es el único gasto que debes considerar. Muchos compradores subestiman los costos adicionales involucrados en la transacción.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Costos a considerar:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Honorarios notariales (aproximadamente 1% del valor de la propiedad)</li>
                  <li>Impuesto de alcabala (1% del valor de la propiedad)</li>
                  <li>Registro de la propiedad (aproximadamente 0.3%)</li>
                  <li>Valoración bancaria (si aplica para crédito hipotecario)</li>
                  <li>Gastos de escrituración</li>
                </ul>
              </div>

              <p className="mb-6">
                <strong>Consejo:</strong> Presupuesta entre un 3% y 5% adicional al valor de la propiedad para cubrir estos gastos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. No Revisar el Estado Físico de la Propiedad</h2>
              
              <p className="mb-4">
                Las apariencias engañan. Una casa que parece estar en buen estado podría ocultar problemas estructurales o de instalaciones que requerirán inversiones considerables.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Search className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Inspección profesional recomendada:</strong> Contrata a un ingeniero civil o arquitecto para evaluar el estado de la propiedad antes de comprometerte con la compra.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. No Contar con Asesoría Legal Especializada</h2>
              
              <p className="mb-4">
                Intentar ahorrar en honorarios profesionales puede resultar en costosos errores legales. Cada transacción inmobiliaria es única y requiere un análisis personalizado.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Scale className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-purple-700">
                      <strong>Beneficios de la asesoría notarial:</strong> Garantiza que todos los documentos estén en orden, los pagos se realicen de forma segura y tus intereses estén protegidos en todo momento.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusión</h2>
              
              <p className="mb-6">
                Comprar una casa en Loja puede ser un proceso seguro y emocionante si se toman las precauciones adecuadas. En Notaría 8 Loja estamos comprometidos en guiarte en cada paso del proceso, asegurando que tu inversión esté protegida y que la transacción se realice de manera legal y transparente.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">¿Necesitas asesoría para comprar tu casa en Loja?</h3>
                <p className="mb-4">
                  Agenda una cita con nuestros especialistas en derecho inmobiliario. Te ayudaremos a realizar una compra segura y sin contratiempos.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="https://wa.me/59372570406" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.498 14.382v-.002c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.176.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.297-.345.446-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.273.3-1.046 1.02-1.046 2.475s1.07 2.865 1.219 3.075c.149.195 2.104 3.195 5.1 4.485.714.3 1.27.489 1.704.625.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.87 9.87 0 01-5.031-1.38l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.74 1.466h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.176-1.24-6.165-3.495-8.411"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+59372570406" 
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Artículos relacionados</h3>
                <Link to="/blog" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Ver todos
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Artículo relacionado 1 */}
                <div className="group">
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img 
                      src="/images/blog/hipoteca.jpg" 
                      alt="Guía de hipotecas en Ecuador" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                      Financiamiento
                    </span>
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      <Link to="/blog/guia-hipotecas-ecuador">
                        Guía Completa para Obtener una Hipoteca en Ecuador
                      </Link>
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Conoce los requisitos, tasas de interés y pasos para acceder a un crédito hipotecario en el país.
                    </p>
                  </div>
                </div>

                {/* Artículo relacionado 2 */}
                <div className="group">
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img 
                      src="/images/blog/escrituras.jpg" 
                      alt="Tramite de escrituras" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                      Trámites
                    </span>
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      <Link to="/blog/tramite-escrituras-ecuador">
                        ¿Cómo Realizar el Trámite de Escrituras en Ecuador?
                      </Link>
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Todo lo que necesitas saber sobre el proceso de escrituración de una propiedad paso a paso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ErroresComprarCasa;
