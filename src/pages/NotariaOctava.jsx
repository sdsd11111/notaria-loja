import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const NotariaOctava = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/portada1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container-max px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notaría: Más de 20 Años Brindando Seguridad Jurídica en Loja
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sección de la Notaria Titular */}
      <section className="py-20 bg-white">
        <div className="container-max px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Liderazgo y Experiencia: Dra. Lupe Patricia Quiñonez Rojas</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  El alma de la Notaría es su titular, la Dra. Lupe Patricia Quiñonez Rojas, una profesional con más de 20 años de trayectoria en el ejercicio notarial en Loja. Su nombre es sinónimo de integridad, claridad jurídica y compromiso con la comunidad.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  La Dra. Quiñonez supervisa personalmente cada trámite, asegurando que todos los actos y contratos —desde una compraventa inmobiliaria hasta una compleja sucesión familiar— se lleven a cabo con máxima precisión y estricto apego a la ley. Su misión no es solo dar fe pública, sino acompañarte con asesoría clara, honesta y humana que te permita tomar decisiones seguras y bien informadas.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipo de la Notaría</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Más allá del liderazgo de la Dra. Quiñonez, contamos con un equipo comprometido, preparado y empático. Cada integrante trabaja con el mismo propósito: brindarte un servicio notarial profesional, accesible y confiable.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/images/banner1.png" 
                  alt="Dra. Lupe Patricia Quiñonez Rojas"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valores y Compromiso */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/images/equipo_notaria.png" 
                  alt="Equipo de la Notaría"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">
                  Nuestro Compromiso con Loja
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  En la Notaría, actuamos guiados por valores firmes que garantizan tu tranquilidad en cada gestión:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-3">🔒 Seguridad Jurídica</h4>
                    <p className="text-gray-600">
                      Tu paz mental es nuestra meta. Cada documento emitido cuenta con un análisis riguroso para proteger tus derechos y prevenir conflictos futuros.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-3">💬 Transparencia Absoluta</h4>
                    <p className="text-gray-600">
                      Creemos en la información clara. Te explicamos cada paso, cada costo (basado en tarifas oficiales), y cada implicación de tu trámite. Sin letras pequeñas. Sin sorpresas.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-3">⚡ Eficiencia Probada</h4>
                    <p className="text-gray-600">
                      Respetamos tu tiempo. Por eso optimizamos cada proceso para que avances con rapidez y sin contratiempos.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-red-600 mb-3">🤝 Trato Humano</h4>
                    <p className="text-gray-600">
                      Detrás de cada trámite hay una historia personal. Te atendemos con cercanía, empatía y total confidencialidad.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamada a la Acción */}
      <section className="py-20 bg-white">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Visítanos y Siente la Diferencia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Te invitamos a conocer nuestras oficinas en el corazón de Loja. Descubre por qué tantos ciudadanos confían en la Notaría para sus gestiones más importantes.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a
                  href="/servicios"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                >
                  Ver Nuestros Servicios Notariales
                </a>
                <a
                  href="https://wa.me/59372570406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-red-600 text-base font-medium rounded-full text-red-600 bg-white hover:bg-red-50 transition-colors duration-200"
                >
                  Agendar una Cita con Nuestro Equipo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="container-max px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tarjeta de Misión */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="bg-red-600 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Misión
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Brindar servicios notariales de la más alta calidad, con transparencia, eficiencia 
                    y calidez humana, contribuyendo a la seguridad jurídica de nuestros clientes y al 
                    desarrollo de la comunidad lojana.
                  </p>
                </div>
              </motion.div>

              {/* Tarjeta de Visión */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="bg-red-600 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Visión
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Ser reconocidos como la notaría líder en Loja por nuestra excelencia profesional, 
                    innovación en procesos y compromiso con el servicio al cliente, estableciendo el 
                    estándar de calidad en servicios notariales.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NotariaOctava
