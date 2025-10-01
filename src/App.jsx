import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotariaLoja from './pages/NotariaLoja'
import TerceraEdad from './pages/TerceraEdad'
import Blog from './pages/Blog'
import InmueblesYPropiedades from './pages/servicios/InmueblesYPropiedades'
import FamiliaYSucesiones from './pages/servicios/FamiliaYSucesiones'
import PoderesYAutorizaciones from './pages/servicios/PoderesYAutorizaciones'
import Vehiculos from './pages/servicios/Vehiculos'
import DeclaracionesYOtros from './pages/servicios/DeclaracionesYOtros'

function App() {
  // Determinar el basename basado en el entorno
  const basename = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notaria-loja" element={<NotariaLoja />} />
            <Route path="/tercera-edad" element={<TerceraEdad />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/servicios/inmuebles-y-propiedades" element={<InmueblesYPropiedades />} />
            <Route path="/servicios/familia-y-sucesiones" element={<FamiliaYSucesiones />} />
            <Route path="/servicios/poderes-y-autorizaciones" element={<PoderesYAutorizaciones />} />
            <Route path="/servicios/vehiculos" element={<Vehiculos />} />
            <Route path="/servicios/declaraciones-y-otros" element={<DeclaracionesYOtros />} />
            <Route path="/servicios" element={<Navigate to="/servicios/inmuebles-y-propiedades" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

