import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Star, MapPin, Phone, ExternalLink, ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonio, setCurrentTestimonio] = useState(0)
  const [currentBannerSlide, setCurrentBannerSlide] = useState(0)
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqData = [
    {
      id: 1,
      pregunta: "Tengo poco tiempo. ¿Tengo que hacer largas filas para un trámite notarial?",
      respuesta: "No en la Notaría. Valoramos tu tiempo tanto como tú. Por eso implementamos un sistema de citas agendadas que te garantiza atención inmediata y sin esperas innecesarias. En lugar de perder tu mañana, recibirás una atención eficiente y enfocada, resolviendo lo necesario en una sola visita.",
      cta: "Agenda tu cita y ahorra tiempo"
    },
    {
      id: 2,
      pregunta: "¿Cuánto me costará el trámite? Me preocupa que haya gastos ocultos.",
      respuesta: "La transparencia es nuestra política. Odiamos las sorpresas tanto como tú. Nuestros precios siguen las tarifas oficiales. Para darte una cifra exacta, agendamos una consulta inicial gratuita, donde analizamos tu caso. En esa cita te damos una proforma clara y detallada, explicando cada valor. Así sabrás exactamente cuánto cuesta tu trámite antes de comenzar.",
      cta: "Solicita tu proforma sin compromiso"
    },
    {
      id: 3,
      pregunta: "No estoy seguro de los requisitos. ¿Y si me falta un papel y debo volver otro día?",
      respuesta: "Esa frustración la conocemos bien, y la hemos eliminado. El primer paso con nosotros es una asesoría de requisitos personalizada. Te entregamos una checklist completa y adaptada a tu trámite, para que llegues con todo listo y evites viajes innecesarios.",
      cta: "Obtén tu checklist de requisitos aquí"
    },
    {
      id: 4,
      pregunta: "Necesito una gestión, pero no entiendo el lenguaje legal. ¿Necesito contratar un abogado antes?",
      respuesta: "No necesariamente. Nuestra labor también es ser tu traductor y guía. La Dra. Patricia Quiñones se especializa en explicar procesos legales complejos en palabras claras y simples. Nos cuentas tu necesidad en tus propias palabras y nosotros la convertimos en una solución jurídica segura y comprensible.",
      cta: "Habla directamente con un experto"
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const bannersPorQueConfiar = [
    {
      image: '/images/banner1.png',
      title: 'Atención cercana y personalizada',
      description: 'Aquí no eres un número. La Dra. Patricia Quiñones y su equipo te escuchan con atención, te explican todo con claridad y están para ayudarte en cada paso.',
      cta: 'Te escuchamos'
    },
    {
      image: '/images/banner2.png',
      title: 'Procesos ágiles y transparentes',
      description: 'Sabemos que tu tiempo vale. Por eso simplificamos cada proceso y te informamos desde el inicio sobre los requisitos y costos, sin sorpresas.',
      cta: 'Sin esperas'
    },
    {
      image: '/images/banner3.png',
      title: 'Asesoría profesional garantizada',
      description: 'Nada se queda sin explicación. Te guiamos con lenguaje claro para que tomes decisiones seguras en cada firma.',
      cta: 'Firmas con confianza'
    }
  ]

  const banners = [
    {
      image: '/images/banner1.png',
      title: 'Experiencia y Profesionalismo',
      description: 'Con más de 15 años de servicio en Loja, nuestro equipo de notarios públicos garantiza que cada documento sea manejado con la máxima precisión y cuidado profesional.',
      buttonText: 'Contáctenos'
    },
    {
      image: '/images/banner2.png',
      title: 'Atención Personalizada',
      description: 'Entendemos que cada caso es único. Por eso, ofrecemos asesoramiento personalizado para encontrar la mejor solución a tus necesidades notariales.',
      buttonText: 'Solicitar Asesoría'
    },
    {
      image: '/images/banner3.png',
      title: 'Compromiso con la Comunidad',
      description: 'Como parte de la comunidad lojana, estamos comprometidos con ofrecer servicios accesibles y de calidad para todos nuestros clientes.',
      buttonText: 'Conocer Más'
    }
  ]

  const servicios = [
    {
      title: 'Inmuebles y Propiedades',
      description: 'Asegura tu patrimonio con confianza. Te guiamos en compraventas, hipotecas y transferencias de dominio, desde el primer paso hasta la firma final.',
      path: '/servicios/inmuebles-y-propiedades',
      image: '/images/Inmuebles_y_Propiedades.png',
      buttonText: 'Ver servicios'
    },
    {
      title: 'Familia y Sucesiones',
      description: 'Protege el bienestar de tu familia. Te asesoramos en testamentos, divorcios de mutuo acuerdo, uniones de hecho y posesiones efectivas.',
      path: '/servicios/familia-y-sucesiones',
      image: '/images/Familia y Sucesiones.png',
      buttonText: 'Ver servicios'
    },
    {
      title: 'Poderes y Autorizaciones',
      description: 'Delega con tranquilidad. Tramitamos poderes especiales o generales y autorizaciones de salida del país con respaldo legal inmediato.',
      path: '/servicios/poderes-y-autorizaciones',
      image: '/images/Poderes y Autorizaciones.png',
      buttonText: 'Ver servicios'
    },
    {
      title: 'Vehículos',
      description: 'Compra o vende tu vehículo de forma segura. Redactamos contratos claros que protegen a ambas partes.',
      path: '/servicios/vehiculos',
      image: '/images/compra y venta de vehículos.png',
      buttonText: 'Ver servicios'
    },
    {
      title: 'Declaraciones y Otros Trámites',
      description: 'Da validez legal a tus documentos importantes. Gestionamos declaraciones juramentadas y protocolizaciones con la seriedad que merecen.',
      path: '/servicios/declaraciones-y-otros',
      image: '/images/Declaraciones y Otros Trámites.png',
      buttonText: 'Ver servicios'
    }
  ]

  const testimonios = [
    {
      id: 1,
      name: 'Cisne Aguilar',
      role: 'Cliente satisfecha',
      content: 'Muy amables, me ayudaron rápidamente con mi trámite. La atención fue personalizada y profesional en todo momento.',
      image: '/images/CisneAguilar.png',
      rating: 5
    },
    {
      id: 2,
      name: 'Kirill Astudillo',
      role: 'Cliente frecuente',
      content: 'Buena atención, altamente profesionales. Siempre resuelven mis dudas de manera clara y oportuna.',
      image: '/images/KirilAstudillo.png',
      rating: 5
    },
    {
      id: 3,
      name: 'Leonardo Morales',
      role: 'Cliente',
      content: 'Muy buena atención. El personal es muy amable y los trámites se realizan con mucha eficiencia.',
      image: '/images/LeonardoMorales.png',
      rating: 5
    },
    {
      id: 4,
      name: 'Lorena Silva',
      role: 'Nueva cliente',
      content: 'Excelente servicio. Me asesoraron en todo momento y el trámite fue más sencillo de lo que imaginé.',
      image: '/images/LorenaSilva.png',
      rating: 5
    },
    {
      id: 5,
      name: 'Ismael Acuña',
      role: 'Cliente',
      content: 'Excelente servicio y atención profesional. Los recomiendo ampliamente por su seriedad y compromiso.',
      image: '/images/ismaelAcuñaCastañed.png',
      rating: 5
    }
  ];
  
  // Duplicate testimonios to create infinite loop effect
  const duplicatedTestimonios = [...testimonios, ...testimonios, ...testimonios];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Responsive number of cards to show
  const [cardsToShow, setCardsToShow] = useState(3);
  
  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    // Set initial value
    updateCardsToShow();
    
    // Add event listener
    window.addEventListener('resize', updateCardsToShow);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);
  
  const CARD_WIDTH = 100 / cardsToShow;
  
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % (testimonios.length + 1));
  }, [testimonios.length]);
  
  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + testimonios.length) % testimonios.length);
  }, [testimonios.length]);
  
  // Handle auto-slide and infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000); // Set to 15 seconds (15000ms)
    
    return () => clearInterval(interval);
  }, [handleNext]);
  
  // Reset transition when reaching the end
  useEffect(() => {
    if (currentIndex >= testimonios.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        // Force reflow
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonios.length]);
  
  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  // State for services slider with infinite loop
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isServiceTransitioning, setIsServiceTransitioning] = useState(true);
  const [touchStartServices, setTouchStartServices] = useState(0);
  const [touchEndServices, setTouchEndServices] = useState(0);
  const [servicesToShow, setServicesToShow] = useState(3);
  
  // Update number of services to show based on screen size
  useEffect(() => {
    const updateServicesToShow = () => {
      if (window.innerWidth < 768) {
        setServicesToShow(1);
      } else if (window.innerWidth < 1024) {
        setServicesToShow(2);
      } else {
        setServicesToShow(3);
      }
    };
    
    // Set initial value
    updateServicesToShow();
    
    // Add event listener
    window.addEventListener('resize', updateServicesToShow);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateServicesToShow);
  }, []);
  
  const serviceCardWidth = 100 / servicesToShow;
  
  // Duplicate services for infinite loop effect
  const duplicatedServices = [...servicios, ...servicios, ...servicios];
  
  const handleNextService = useCallback(() => {
    setCurrentServiceIndex(prev => (prev + 1) % (servicios.length + 1));
  }, [servicios.length]);
  
  // Handle auto-slide and infinite loop for services
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextService();
    }, 15000); // Set to 15 seconds (15000ms)
    
    return () => clearInterval(interval);
  }, [handleNextService]);
  
  // Reset transition when reaching the end for services
  useEffect(() => {
    if (currentServiceIndex >= servicios.length) {
      const timer = setTimeout(() => {
        setIsServiceTransitioning(false);
        setCurrentServiceIndex(0);
        // Force reflow
        setTimeout(() => setIsServiceTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentServiceIndex, servicios.length]);
  
  const handleNextService = () => {
    setCurrentServiceIndex(prev => (prev + 1) % (servicios.length + 1));
  };
  
  const handlePrevService = () => {
    setCurrentServiceIndex(prev => (prev - 1 + servicios.length) % servicios.length);
  };
  
  // Touch event handlers for mobile swipe
  const handleTouchStartServices = (e) => {
    setTouchStartServices(e.targetTouches[0].clientX);
  };
  
  const handleTouchMoveServices = (e) => {
    setTouchEndServices(e.targetTouches[0].clientX);
  };
  
  const handleTouchEndServices = () => {
    if (touchStartServices - touchEndServices > 50) {
      handleNextService();
    }
    
    if (touchStartServices - touchEndServices < -50) {
      handlePrevService();
    }
  };

  // Auto-slide para banners principales
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  // Auto-slide para banners "Por qué confiar"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerSlide((prev) => (prev + 1) % bannersPorQueConfiar.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [bannersPorQueConfiar.length])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/portada.jpeg')` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            Notaría Loja
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed text-shadow"
          >
            Olvídate de trámites complicados, a pocas cuadras del parque central en la Notaría 
            te explicamos cada paso con claridad y te acompañamos con un trato cercano y profesional. 
            Aquí encuentras soluciones, no más dudas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://wa.me/59372570406?text=Hola,%20vi%20su%20página%20web%20y%20me%20gustaría%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              Agendar una Cita
            </a>
            <a 
              href="tel:+59372570406"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Llamar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      {/* Servicios Section - Cards Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Encuentra el servicio notarial que necesitas en Loja
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Realiza tus trámites notariales sin complicaciones. Hemos organizado todos nuestros servicios 
              en categorías claras para que encuentres justo lo que necesitas, de forma rápida y sencilla. 
              Estamos a pocas cuadras del parque central de Loja, listos para ayudarte.
            </p>
          </motion.div>

          {/* Services Slider */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStartServices}
            onTouchMove={handleTouchMoveServices}
            onTouchEnd={handleTouchEndServices}
          >
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6 py-2"
              style={{
                transform: `translateX(-${currentServiceIndex * serviceCardWidth}%)`,
                transition: isServiceTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {duplicatedServices.map((servicio, index) => (
                <div 
                  key={`${servicio.title}-${index}`}
                  className="flex-shrink-0 px-2 sm:px-3 w-full sm:w-1/2 lg:w-1/3"
                  style={{ width: `${serviceCardWidth}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden group h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                      {/* Imagen */}
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={servicio.image} 
                          alt={servicio.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {servicio.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                          {servicio.description}
                        </p>
                        <div className="mt-auto text-right">
                          <Link
                            to={servicio.path}
                            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
                          >
                            {servicio.buttonText}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform -translate-x-2 hover:scale-110"
              aria-label="Servicio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform translate-x-2 hover:scale-110"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {servicios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentServiceIndex === index ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir al servicio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner Servicio Notarial Telemático */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8 md:p-12 shadow-lg border border-red-100 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-300/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Servicio Notarial Telemático
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ponemos a su disposición el servicio notarial telemático que facilita a los usuarios la celebración de diferentes actos y contratos desde cualquier parte del mundo con la condición de que al menos una de las partes se encuentre en la circunscripción territorial donde el notario ejerce su competencia, en este caso, Loja. El otorgamiento del respectivo acto o contrato se realiza en una reunión previamente planificada a través de videoconferencia o cualquier otro medio telemático.
                </p>
                <button className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  MÁS INFORMACIÓN
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              
              {/* Visual Element */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl transform rotate-3 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">Telemático</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Por qué confiar - Slider de Banners */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué confiar en la Notaría de Loja?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              En cada trámite, nuestra prioridad es que te sientas acompañado, informado y seguro. 
              Estos son los pilares que hacen diferente a la Notaría.
            </p>
          </motion.div>
        </div>
        
        <div className="relative h-[70vh] overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentBannerSlide * 100}%)` }}
          >
            {bannersPorQueConfiar.map((banner, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 relative"
              >
                {/* Imagen de fondo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${banner.image})` }}
                />
                
                {/* Overlay con opacidad del 50% */}
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Contenido */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center px-6 max-w-4xl mx-auto text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        {banner.title}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                        {banner.description}
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center">
                        {banner.cta}
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de puntos */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {bannersPorQueConfiar.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBannerSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={() => setCurrentBannerSlide(currentBannerSlide === 0 ? bannersPorQueConfiar.length - 1 : currentBannerSlide - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentBannerSlide(currentBannerSlide === bannersPorQueConfiar.length - 1 ? 0 : currentBannerSlide + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Visítanos en el corazón del centro de Loja
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestra notaría está ubicada en una zona estratégica, a orillas del río Zamora y muy cerca del Parque Central. 
              Ya sea que vengas caminando o en vehículo, llegar te resultará rápido y sencillo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Detalles de ubicación
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Dirección:</p>
                    <p className="text-muted-foreground">Av. Emiliano Ortega & Quito, Loja – Ecuador</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      A pocos pasos del Parque de la Catedral y junto al río Zamora.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Teléfono y WhatsApp:</p>
                    <a 
                      href="tel:+59372570406" 
                      className="text-primary hover:text-accent transition-colors"
                    >
                      +593 7 257 0406
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Horario de Atención:</p>
                    <p className="text-muted-foreground">Lunes a Viernes, de 8:00 AM a 5:00 PM</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/o4vYc36Xqc5fryoWA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary mt-6"
              >
                Cómo llegar con Google Maps
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8174445!2d-79.2047!3d-4.0003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4a0c0c0c0c0c%3A0x0!2sAv.%20Emiliano%20Ortega%20%26%20Quito%2C%20Loja%2C%20Ecuador!5e0!3m2!1sen!2sec!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
              <div className="p-6 bg-card">
                <div className="flex items-center justify-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-foreground mb-1">Ubicación Estratégica</h4>
                    <p className="text-muted-foreground text-sm">
                      En el corazón de Loja, fácil acceso peatonal y vehicular
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La confianza de nuestros clientes habla por sí sola. Aquí te compartimos algunas opiniones reales 
              de quienes ya vivieron una experiencia positiva en la Notaría de Loja.
            </p>
          </motion.div>

          {/* Testimonios Slider */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * CARD_WIDTH}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {duplicatedTestimonios.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 px-2 md:px-4 w-full md:w-1/2 lg:w-1/3"
                  style={{ width: `${CARD_WIDTH}%` }}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      
                      {/* Testimonial Content */}
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Author */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                          />
                          <div className="ml-4">
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                          <button className="ml-auto text-gray-400 hover:text-red-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M18 8a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform -translate-x-2 hover:scale-110"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform translate-x-2 hover:scale-110"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a 
              href="https://www.google.com/search?q=Notaría+Octava+Loja+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-secondary"
            >
              Lee más opiniones en Google
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Acordeón */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tus dudas, resueltas. Tu trámite, simplificado.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sabemos que los trámites notariales pueden generar incertidumbre. Por eso, respondemos de forma directa 
              a las dudas más comunes y convertimos cada objeción en una oportunidad para ayudarte mejor. Desde el primer 
              clic, queremos darte la tranquilidad de estar en buenas manos.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.pregunta}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === faq.id ? 'auto' : 0,
                    opacity: openFAQ === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {faq.respuesta}
                    </p>
                    <button className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                      {faq.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-900">
                  ¿Necesitas ayuda con algún trámite notarial?
                </h2>
                <p className="text-xl text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad para asesorarte sobre el trámite que necesitas.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Respuesta en menos de 24 horas hábiles
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Asesoramiento personalizado y sin compromiso
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Te guiaremos en cada paso del proceso
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactForm 
                  title="Contáctanos" 
                  description="Déjanos tus datos y nos pondremos en contacto contigo a la brevedad." 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

