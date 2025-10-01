import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, User, Tag, ArrowRight, Home, FileText, FileSignature, Car, Users, BookOpen, Search as SearchIcon } from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(/images/portada.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
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
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Blog Notaría Loja
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full px-6 py-4 pl-14 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            

          </motion.div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Área de Contenido Principal */}
            <div className="lg:col-span-3">
              {/* Formulario de Suscripción */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 bg-primary/5 border border-primary/20 rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Recibe Asesoría Directa en tu Correo
                </h2>
                <p className="text-muted-foreground mb-6">
                  Únete a nuestra comunidad y recibe guías prácticas, alertas sobre cambios en la ley y consejos exclusivos para que tus trámites en Loja sean siempre más sencillos. Sin spam, solo valor.
                </p>
                <form className="space-y-4 max-w-2xl">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Tu correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="ejemplo@email.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Tu nombre (opcional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
                  >
                    ¡QUIERO LOS CONSEJOS!
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </motion.div>

              {/* Artículos Destacados */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Artículos Recientes
                </h2>

                <div className="space-y-8">
                  {/* Artículo 1 */}
                  <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <div className="h-full w-full bg-gray-200">
                          <img 
                            src="/images/blog/compra-casa.jpg" 
                            alt="Compra de casa" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Inmuebles
                          </span>
                          <span>15 de Julio, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          5 Errores Comunes al Comprar una Casa en Loja (y Cómo Evitarlos)
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Antes de firmar la escritura de tu nuevo hogar, asegúrate de no cometer estas equivocaciones que pueden costarte tiempo y dinero. Te guiamos para una compra segura y sin sobresaltos.
                        </p>
                        <a 
                          to="/blog/errores-comprar-casa" 
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Leer Artículo Completo
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>

                  {/* Artículo 2 */}
                  <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <div className="h-full w-full bg-gray-200">
                          <img 
                            src="/images/blog/testamento.jpg" 
                            alt="Testamento" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Familia
                          </span>
                          <span>1 de Agosto, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          Todo lo que Necesitas Saber sobre Testamentos en Ecuador
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Protege el futuro de tus seres queridos con un testamento bien estructurado. Te explicamos los tipos de testamento, requisitos legales y mitos comunes que debes conocer.
                        </p>
                        <a 
                          to="/blog/errores-comprar-casa" 
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Leer Artículo Completo
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Categorías */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Explora por Categoría
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ayuda a tus lectores a encontrar lo que buscan rápidamente.
                  </p>
                  <div className="space-y-3">
                    <a href="/servicios/inmuebles-y-propiedades" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <Home className="w-4 h-4 mr-2 flex-shrink-0" />
                      Inmuebles y Propiedades
                    </a>
                    <a href="/servicios/familia-y-sucesiones" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                      Familia y Sucesiones
                    </a>
                    <a href="/servicios/poderes-y-autorizaciones" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <FileSignature className="w-4 h-4 mr-2 flex-shrink-0" />
                      Poderes y Autorizaciones
                    </a>
                    <a href="/servicios/vehiculos" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <Car className="w-4 h-4 mr-2 flex-shrink-0" />
                      Vehículos
                    </a>
                    <a href="/tercera-edad" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                      Consejos para la Tercera Edad
                    </a>
                  </div>
                </div>

                {/* Artículo Destacado */}
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Artículo Destacado
                  </h3>
                  <div className="space-y-3">
                    <div className="aspect-w-16 aspect-h-9 mb-3 rounded-lg overflow-hidden">
                      <img 
                        src="/images/blog/derechos-adultos-mayores.jpg" 
                        alt="Derechos de adultos mayores" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-foreground">
                      <Link to="/blog/derechos-adultos-mayores" className="hover:text-primary transition-colors">
                        Derechos y Beneficios para Adultos Mayores en Ecuador
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Descubre los beneficios legales y descuentos a los que tienes derecho como adulto mayor en Ecuador.
                    </p>
                    <Link to="/blog/derechos-adultos-mayores" className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium">
                      Leer más
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Etiquetas */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Etiquetas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Testamentos
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Compraventa
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Poderes
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Herencias
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

