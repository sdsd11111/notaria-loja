import React, { useEffect } from 'react';
import { FileText, FileCheck, Plane, FileX, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import VerticalTabs from '@/components/VerticalTabs';
import { motion } from 'framer-motion';

const PoderesYAutorizaciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    {
      id: 'poderes',
      title: 'Poderes Notariales',
      icon: <FileText className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Poderes Notariales: Delega con Confianza y Precisión</h3>
          <p className="text-gray-700">
            Un poder notarial es el instrumento legal que te permite designar a una persona de tu absoluta confianza (llamada apoderado) para que actúe en tu nombre. Es la herramienta perfecta cuando no puedes estar presente para realizar una gestión importante. En la Notaría de Loja, te asesoramos para que elijas el tipo de poder exacto que necesitas.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Poder Especial</h4>
            <p className="text-gray-700 mb-4">
              Es la opción más segura y recomendada para una tarea específica. Le otorga a tu apoderado facultades para un solo acto, claro y delimitado.
            </p>
            <p className="text-gray-700 font-medium mb-2">Ideal para:</p>
            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
              <li>Vender o comprar una propiedad específica en Loja</li>
              <li>Realizar un trámite bancario concreto</li>
              <li>Matricular un vehículo</li>
              <li>Representarte en un divorcio</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Poder General</h4>
            <p className="text-gray-700">
              Este poder es mucho más amplio y otorga a tu apoderado facultades para administrar todos o gran parte de tus bienes y negocios.
            </p>
            <p className="text-gray-700 font-medium mt-3 mb-2">Ideal para:</p>
            <p className="text-gray-700">
              Situaciones que requieren una gestión continua, como la administración general de tus asuntos mientras te encuentras en el extranjero. Requiere un nivel de confianza muy elevado.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Generales:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédula de identidad y certificado de votación vigentes de quien otorga el poder (poderdante).</li>
              <li>Nombres, apellidos completos y número de cédula de la persona que recibirá el poder (apoderado).</li>
              <li>Una descripción clara del acto o las facultades que deseas delegar.</li>
            </ul>
          </div>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Agendar Cita para Asesoría de Poder
          </button>
        </div>
      )
    },
    {
      id: 'autorizaciones',
      title: 'Autorizaciones',
      icon: <FileCheck className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Procuración Judicial y Otras Autorizaciones</h3>
          <p className="text-gray-700">
            Además de los poderes generales, existen autorizaciones específicas para contextos muy concretos, principalmente en el ámbito legal.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Procuración Judicial</h4>
            <p className="text-gray-700">
              Este es un tipo de poder especial diseñado exclusivamente para el ámbito de la justicia. Con él, autorizas formalmente a un abogado en Loja para que te represente en un proceso o juicio. Es un requisito indispensable para que tu defensor pueda actuar legalmente en tu nombre, presentar escritos y asistir a audiencias.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos para la Procuración Judicial:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédula de identidad y certificado de votación vigentes.</li>
              <li>Nombre completo y número de matrícula del abogado que te representará.</li>
              <li>Detalles del proceso judicial para el cual se otorga la procuración.</li>
            </ul>
          </div>

          <p className="text-gray-700 mt-6">
            ¿Necesitas otro tipo de autorización específica? Consúltanos. Estamos para orientarte.
          </p>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Consultar sobre Representación Legal
          </button>
        </div>
      )
    },
    {
      id: 'salida-pais',
      title: 'Salida del País',
      icon: <Plane className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Autorización de Salida del País para Menores</h3>
          <p className="text-gray-700">
            La seguridad de tus hijos es la prioridad. La ley ecuatoriana exige una autorización de salida del país notariada (también conocido como permiso de viaje) siempre que un niño, niña o adolescente vaya a viajar fuera de Ecuador en una de las siguientes situaciones:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Viajando completamente solo.</li>
            <li>Viajando con solo uno de sus padres.</li>
            <li>Viajando con un tercero (abuelos, tíos, etc.).</li>
          </ul>
          
          <p className="text-gray-700">
            Este documento es obligatorio y será solicitado en el control de Migración. En nuestra notaría en Loja, gestionamos este permiso de forma ágil para asegurar un viaje sin contratiempos.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Requisitos Indispensables:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cédulas de identidad y certificados de votación vigentes de ambos padres.</li>
              <li>Partida de nacimiento o cédula de identidad del menor.</li>
              <li>Detalles del viaje: destino, fechas aproximadas y, si viaja con un tercero, los datos completos de esa persona.</li>
            </ul>
          </div>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Gestionar Permiso de Viaje Ahora
          </button>
        </div>
      )
    },
    {
      id: 'revocatoria',
      title: 'Revocatoria de Poder',
      icon: <FileX className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Revocatoria de Poder: Anula un Mandato de Forma Segura</h3>
          <p className="text-gray-700">
            Así como otorgar un poder es un acto de confianza, revocarlo es un acto de seguridad. Las circunstancias cambian, las relaciones terminan o simplemente la representación ya no es necesaria. La revocatoria es el trámite legal que anula de forma definitiva un poder que habías otorgado previamente.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 font-medium mb-2">Este paso es fundamental para:</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Evitar que un poder siga siendo utilizado indebidamente.</li>
              <li>Recuperar el pleno control sobre tus asuntos.</li>
              <li>Proteger tu patrimonio y tus decisiones a futuro.</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            Para revocar un poder en Loja, solo necesitas tu identificación y, si es posible, una copia del poder que deseas anular.
          </p>

          <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded transition duration-300">
            Asegura tu Control y Revoca un Poder
          </button>
        </div>
      )
    }
  ];



  return (
    <div className="pt-16">
      <Helmet>
        <title>Poderes y Autorizaciones | Notaría de Loja</title>
        <meta name="description" content="Poderes notariales, autorizaciones y trámites de salida del país. Realiza tus trámites legales con seguridad y respaldo profesional en Loja." />
        <link rel="canonical" href="https://notaria-octava-loja.vercel.app/servicios/poderes-y-autorizaciones" />
      </Helmet>

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
              Poderes Notariales y Autorizaciones
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Delega responsabilidades con total confianza y seguridad jurídica
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Parallax Background Section - Same as Vehiculos.jsx */}
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

      {/* Vertical Tabs Section */}
      <div id="tabs" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VerticalTabs tabs={tabs} />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Listo para realizar tu trámite?</span>
            <span className="block text-red-700">Contáctanos hoy mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-colors duration-200"
              >
                Contáctanos
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="tel:072570000"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoderesYAutorizaciones;
