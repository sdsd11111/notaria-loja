import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Heart, Award, Shield, Percent, Bus, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DerechosAdultosMayores = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Derechos y Beneficios para Adultos Mayores en Ecuador | Notaría 8 Loja</title>
        <meta 
          name="description" 
          content="Conoce los derechos, beneficios y descuentos legales disponibles para adultos mayores en Ecuador. Aprende cómo acceder a pensiones, salud, transporte y más." 
        />
        <meta 
          name="keywords" 
          content="derechos adultos mayores Ecuador, beneficios tercera edad, descuentos adultos mayores, pensión jubilación, Notaría 8 Loja" 
        />
        <meta property="og:title" content="Derechos y Beneficios para Adultos Mayores en Ecuador" />
        <meta property="og:description" content="Guía completa de derechos, beneficios y descuentos para adultos mayores en Ecuador. Conoce cómo acceder a estos beneficios legales." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/blog/adultos-mayores.jpg)',
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
                <Heart className="w-3 h-3 mr-1" /> Tercera Edad
              </span>
              <span className="inline-flex items-center text-sm text-white/80">
                <Calendar className="w-4 h-4 mr-1" /> 10 de Agosto, 2024
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Derechos y Beneficios para Adultos Mayores en Ecuador
            </h1>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Por Dra. Patricia Quiñones</span>
              </div>
              <span>•</span>
              <span>6 min de lectura</span>
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
                En Ecuador, las personas de la tercera edad cuentan con una serie de derechos y beneficios establecidos por ley, diseñados para garantizar su bienestar, protección y calidad de vida. Como notaría comprometida con el bienestar de todos los ciudadanos, en Notaría 8 Loja te explicamos todo lo que necesitas saber sobre estos beneficios y cómo acceder a ellos.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">¿A qué edad se considera adulto mayor en Ecuador?</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Reconocimiento legal:</strong> Según la Ley Orgánica de las Personas Adultas Mayores, se considera adulta mayor a toda persona que haya cumplido 65 años de edad.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Beneficios y Derechos Principales</h2>
              
              <div className="space-y-6 mb-8">
                {/* Beneficio 1 */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex items-start">
                    <div className="flex-shrink-0 bg-red-100 p-3 rounded-full mr-4">
                      <Percent className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Descuentos en Transporte</h3>
                      <div className="mt-2 max-w-2xl text-sm text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>50% de descuento en transporte público interprovincial</li>
                          <li>30% de descuento en transporte aéreo nacional</li>
                          <li>Exoneración del pago en transporte urbano en algunos municipios</li>
                        </ul>
                        <p className="mt-2 text-sm">
                          <strong>Requisito:</strong> Presentar cédula de identidad y carné del adulto mayor (emitido por el MIES).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beneficio 2 */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Atención en Salud</h3>
                      <div className="mt-2 max-w-2xl text-sm text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Atención médica prioritaria en establecimientos de salud públicos</li>
                          <li>Medicamentos gratuitos en farmacias del Ministerio de Salud Pública</li>
                          <li>Exámenes médicos y procedimientos con descuento en centros de salud privados</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beneficio 3 */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full mr-4">
                      <Bus className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Beneficios Tributarios</h3>
                      <div className="mt-2 max-w-2xl text-sm text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Exoneración del pago del impuesto predial en algunos municipios</li>
                          <li>Descuentos en el pago de servicios básicos (agua, luz, teléfono)</li>
                          <li>Exoneración del pago de impuestos a la renta para pensiones hasta cierto monto</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Documentos Necesarios para Acceder a los Beneficios</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FileText className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Importante:</strong> Los documentos pueden variar según la institución y el beneficio solicitado. Te recomendamos verificar los requisitos específicos en cada caso.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Cédula de identidad original y copia</li>
                <li>Carné del adulto mayor (expedido por el MIES)</li>
                <li>Certificado de votación (en algunos casos)</li>
                <li>Últimos recibos de pago de servicios (para descuentos)</li>
                <li>Certificado médico (para algunos beneficios de salud)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pensión para Adultos Mayores</h2>
              
              <p className="mb-4">
                El gobierno ecuatoriano brinda apoyo económico a través de la Pensión para Adultos Mayores, dirigida a personas en situación de pobreza o extrema pobreza.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Requisitos:</strong> Tener 65 años o más, estar en situación de pobreza o extrema pobreza, y no recibir otra pensión del Estado.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Aspectos Legales Importantes</h2>
              
              <p className="mb-4">
                Como adulto mayor, tienes derechos específicos protegidos por la Ley Orgánica de las Personas Adultas Mayores:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Derecho a recibir un trato digno y respetuoso</li>
                <li>Derecho a la protección contra el maltrato y la discriminación</li>
                <li>Derecho a la participación social y política</li>
                <li>Derecho a la atención preferente en trámites y servicios</li>
                <li>Derecho a la vivienda adecuada</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-xl mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">¿Necesitas asesoría legal sobre tus derechos?</h3>
                <p className="mb-4">
                  En Notaría 8 Loja ofrecemos asesoría legal especializada en derechos de los adultos mayores. Agenda una cita con nuestros especialistas.
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
                        src="/images/blog/herencia-ley.jpg" 
                        alt="Herencia sin testamento" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                        Sucesiones
                      </span>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link to="/blog/herencia-sin-testamento">
                          ¿Qué Pasa si una Persona Fallece sin Dejar Testamento en Ecuador?
                        </Link>
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Conoce cómo se distribuye la herencia cuando no existe un testamento y qué derechos tienen los herederos legales.
                      </p>
                    </div>
                  </div>

                  {/* Artículo relacionado 2 */}
                  <div className="group">
                    <div className="h-48 overflow-hidden rounded-lg">
                      <img 
                        src="/images/blog/ahorro-jubilacion.jpg" 
                        alt="Ahorro para la jubilación" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                        Finanzas Personales
                      </span>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link to="/blog/ahorro-jubilacion-ecuador">
                          Planificación Financiera para el Retiro en Ecuador: Guía Práctica
                        </Link>
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Estrategias y consejos para asegurar una jubilación tranquila y sin preocupaciones económicas.
                      </p>
                    </div>
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

export default DerechosAdultosMayores;
