import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isMouseOverMenu, setIsMouseOverMenu] = useState(false);
  let menuTimer;

  const serviciosMenu = [
    { name: 'Declaraciones y Otros Trámites', path: '/servicios/declaraciones-y-otros' },
    { name: 'Vehículos', path: '/servicios/vehiculos' },
    { name: 'Poderes y Autorizaciones', path: '/servicios/poderes-y-autorizaciones' },
    { name: 'Familia y Sucesiones', path: '/servicios/familia-y-sucesiones' },
    { name: 'Inmuebles y Propiedades', path: '/servicios/inmuebles-y-propiedades' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/100 backdrop-blur-sm border-b border-border">
      <nav className="container-max flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/images/logo_rectangular.png" 
            alt="Notaría Loja" 
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
          >
            Inicio
          </Link>
          
          {/* Servicios Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => {
              clearTimeout(menuTimer);
              setIsServiciosOpen(true);
            }}
            onMouseLeave={() => {
              menuTimer = setTimeout(() => {
                if (!isMouseOverMenu) {
                  setIsServiciosOpen(false);
                }
              }, 300);
            }}
          >
            <button 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 uppercase tracking-wide text-sm font-medium ${
                isServiciosOpen || isMouseOverMenu 
                  ? 'bg-primary text-white' 
                  : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setIsServiciosOpen(!isServiciosOpen)}
            >
              <span>Servicios</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                isServiciosOpen ? 'transform rotate-180' : ''
              } ${isServiciosOpen || isMouseOverMenu ? 'text-white' : 'text-foreground/60'}`} />
            </button>
            
            {(isServiciosOpen || isMouseOverMenu) && (
              <div 
                className="absolute top-full left-0 mt-1 w-80 bg-card border border-border rounded-lg shadow-xl py-2 z-50 transition-all duration-200 opacity-100"
                onMouseEnter={() => {
                  clearTimeout(menuTimer);
                  setIsMouseOverMenu(true);
                  setIsServiciosOpen(true);
                }}
                onMouseLeave={() => {
                  setIsMouseOverMenu(false);
                  menuTimer = setTimeout(() => {
                    if (!isMouseOverMenu) {
                      setIsServiciosOpen(false);
                    }
                  }, 300);
                }}
              >
                {serviciosMenu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="relative block px-4 py-3 text-sm text-foreground/80 transition-all duration-200 rounded mx-2 hover:bg-primary hover:text-white"
                    onClick={() => setIsServiciosOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/notaria-octava" 
            className="text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
          >
            Notaría Octava
          </Link>
          
          <Link 
            to="/tercera-edad" 
            className="text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
          >
            Tercera Edad
          </Link>
          
          <Link 
            to="/blog" 
            className="text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border fixed left-0 right-0 top-20 h-[calc(100vh-5rem)] overflow-y-auto z-40">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            
            <div className="space-y-2">
              <div className="text-foreground/80 uppercase tracking-wide text-sm font-medium">Servicios</div>
              {serviciosMenu.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block pl-4 text-sm text-foreground/60 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/notaria-octava" 
              className="block text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Notaría Octava
            </Link>
            
            <Link 
              to="/tercera-edad" 
              className="block text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tercera Edad
            </Link>
            
            <Link 
              to="/blog" 
              className="block text-foreground/80 hover:text-primary transition-colors duration-300 uppercase tracking-wide text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

