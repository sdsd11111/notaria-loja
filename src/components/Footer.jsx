import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'
import EmailLink from './EmailLink'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img 
              src="/images/logo_letras_rojas.png" 
              alt="Notaría Loja" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Servicios notariales profesionales en el corazón de Loja. 
              Trámites ágiles y seguros con más de 15 años de experiencia.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold uppercase tracking-wide text-sm">
              Enlaces Rápidos
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/notaria-loja" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Notaría Loja
              </Link>
              <Link to="/tercera-edad" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Tercera Edad
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold uppercase tracking-wide text-sm">
              Servicios
            </h3>
            <div className="space-y-2">
              <Link to="/servicios/declaraciones-y-otros" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Declaraciones y Otros
              </Link>
              <Link to="/servicios/vehiculos" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Vehículos
              </Link>
              <Link to="/servicios/poderes-y-autorizaciones" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Poderes y Autorizaciones
              </Link>
              <Link to="/servicios/familia-y-sucesiones" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Familia y Sucesiones
              </Link>
              <Link to="/servicios/inmuebles-y-propiedades" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Inmuebles y Propiedades
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold uppercase tracking-wide text-sm">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Av. 24 de Mayo 10-51 y 10 de Agosto, Edificio Plaza Real, Local 1, Loja
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+593999999999" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +593 99 999 9999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Lun - Vie: 8:00 AM - 5:00 PM
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 flex-shrink-0"></div>
                <EmailLink email="servicio.notariales@notarialoja.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border mt-8">
        <div className="container-max py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Notaría Loja. Todos los derechos reservados.{' '}
              <a 
                href="https://cesarreyesjaramillo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @cesarreyesjaramillo.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

