import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, FileText, Scale, Users, AlertCircle, CheckCircle, FileSignature } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TestamentosEcuador = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Todo lo que Necesitas Saber sobre Testamentos en Ecuador | Notaría 8 Loja</title>
        <meta 
          name="description" 
          content="Guía completa sobre testamentos en Ecuador: tipos, requisitos, trámites y cómo proteger el futuro de tus seres queridos con un testamento válido." 
        />
        <meta 
          name="keywords" 
          content="testamento Ecuador, herencia, sucesión, testamento abierto, testamento cerrado, legítima, Notaría 8 Loja" 
        />
        <meta property="og:title" content="Todo lo que Necesitas Saber sobre Testamentos en Ecuador" />
        <meta property="og:description" content="Aprende sobre los tipos de testamento, requisitos legales y cómo proteger el futuro de tu familia con la asesoría de Notaría 8 Loja." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/blog/testamento.jpg)',
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Users className="w-3 h-3 mr-1" /> Familia
              </span>
              <span className="inline-flex items-center text-sm text-white/80">
                <Calendar className="w-4 h-4 mr-1" /> 1 de Agosto, 2024
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Todo lo que Necesitas Saber sobre Testamentos en Ecuador
            </h1>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Por Dra. Patricia Quiñones</span>
              </div>
              <span>•</span>
              <span>8 min de lectura</span>
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
                El testamento es el instrumento legal que permite disponer de tus bienes y derechos para después de tu fallecimiento, asegurando que tu voluntad sea respetada y que tus seres queridos queden protegidos. En Ecuador, existen varios tipos de testamentos, cada uno con sus propias características y requisitos legales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">¿Por qué hacer un testamento?</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Importante:</strong> Sin testamento, la ley determina quiénes heredan tus bienes según el orden de sucesión establecido en el Código Civil Ecuatoriano, lo que podría no coincidir con tus deseos.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                Hacer un testamento te permite:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Designar herederos y legatarios según tu voluntad</li>
                <li>Proteger a tu familia y seres queridos</li>
                <li>Evitar conflictos entre herederos</li>
                <li>Asegurar que personas fuera de la familia hereden si así lo deseas</li>
                <li>Reducir trámites y costos en la sucesión</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tipos de Testamentos en Ecuador</h2>
              
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">1. Testamento Abierto</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Se otorga ante notario y testigos. Es el más común en Ecuador.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">2. Testamento Cerrado</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        El testador presenta su voluntad en un sobre cerrado ante notario y testigos.
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">3. Testamento Militar</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Para personal militar en servicio activo durante tiempos de guerra.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">4. Testamento Marítimo</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Realizado durante un viaje por mar, ante el capitán del barco.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Requisitos para hacer un testamento en Ecuador</h3>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Documentación necesaria:</strong> Cédula de identidad y datos completos de los herederos y bienes a heredar.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-4">Para otorgar testamento en Ecuador, debes cumplir con los siguientes requisitos:</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Ser mayor de 18 años</li>
                <li>Estar en pleno uso de tus facultades mentales</li>
                <li>Presentar cédula de identidad</li>
                <li>No estar inhabilitado por ley para testar</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">¿Qué puedes incluir en tu testamento?</h3>
              
              <p className="mb-4">En tu testamento puedes disponer de tus bienes libremente, con algunas limitaciones establecidas por la ley:</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Legítima:</strong> Porción de la herencia que por ley corresponde a ciertos herederos forzosos (hijos, cónyuge, padres). No puede ser desheredada salvo en casos excepcionales.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Proceso para hacer un testamento en Notaría 8 Loja</h2>
              
              <ol className="list-decimal pl-5 space-y-4 mb-6">
                <li>
                  <span className="font-medium">Asesoría inicial:</span> Nuestros notarios evaluarán tu caso particular y te explicarán las mejores opciones.
                </li>
                <li>
                  <span className="font-medium">Elaboración del documento:</span> Redactaremos tu testamento de acuerdo a tus deseos y dentro del marco legal.
                </li>
                <li>
                  <span className="font-medium">Revisión y firma:</span> Te explicaremos el contenido del documento para que lo revises y firmes ante notario.
                </li>
                <li>
                  <span className="font-medium">Registro:</span> El testamento quedará registrado en nuestro archivo notarial y en el Registro de Actos de Última Voluntad.
                </li>
              </ol>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FileSignature className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-purple-700">
                      <strong>¿Puedo modificar mi testamento?</strong> Sí, puedes modificar tu testamento cuantas veces lo desees. El último testamento válido es el que tendrá validez legal.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Costos de un testamento en Ecuador</h2>
              
              <p className="mb-4">
                El costo de un testamento varía según la complejidad del caso y el valor de los bienes. En Notaría 8 Loja ofrecemos precios competitivos y planes de pago flexibles. Contáctanos para una cotización personalizada.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">¿Listo para proteger el futuro de tu familia?</h3>
                <p className="mb-4">
                  Agenda una cita con nuestros especialistas en derecho sucesorio. Te guiaremos en el proceso de hacer tu testamento de manera segura y sencilla.
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
                        src="/images/blog/herencia.jpg" 
                        alt="Proceso de herencia en Ecuador" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                        Sucesiones
                      </span>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link to="/blog/proceso-herencia-ecuador">
                          Guía del Proceso de Herencia en Ecuador: Pasos y Requisitos
                        </Link>
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Conoce los pasos legales para tramitar una herencia en Ecuador, con o sin testamento.
                      </p>
                    </div>
                  </div>

                  {/* Artículo relacionado 2 */}
                  <div className="group">
                    <div className="h-48 overflow-hidden rounded-lg">
                      <img 
                        src="/images/blog/legitima.jpg" 
                        alt="Legítima hereditaria" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                        Derecho Familiar
                      </span>
                      <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link to="/blog/legitima-hereditaria-ecuador">
                          ¿Qué es la Legítima Hereditaria y Cómo se Calcula en Ecuador?
                        </Link>
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        Entiende este importante concepto legal que protege a ciertos herederos en las sucesiones.
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

export default TestamentosEcuador;
