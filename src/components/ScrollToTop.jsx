import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const fullPath = pathname + search;
  const hasScrolledRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Solo guardar la posición si no es el montaje inicial
    if (!isInitialMount.current) {
      // Función para guardar la posición del scroll
      const saveScrollPosition = () => {
        sessionStorage.setItem(`scrollPosition_${fullPath}`, window.scrollY);
      };

      // Manejar el evento beforeunload para guardar la posición actual
      window.addEventListener('beforeunload', saveScrollPosition);
      
      return () => {
        window.removeEventListener('beforeunload', saveScrollPosition);
      };
    }
  }, [fullPath]);

  useEffect(() => {
    // Función para manejar el scroll con debounce
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        sessionStorage.setItem(`scrollPosition_${fullPath}`, window.scrollY);
      }, 100);
    };

    // Agregar el event listener de scroll con opción passive para mejor rendimiento
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Restaurar la posición de desplazamiento si existe
    const restoreScrollPosition = () => {
      // Esperar a que el DOM esté completamente cargado
      requestAnimationFrame(() => {
        const savedPosition = sessionStorage.getItem(`scrollPosition_${fullPath}`);
        
        // Solo restaurar si tenemos una posición guardada y no hemos restaurado ya
        if (savedPosition !== null && !hasScrolledRef.current) {
          // Usar requestAnimationFrame para asegurar que el DOM esté listo
          requestAnimationFrame(() => {
            window.scrollTo(0, parseInt(savedPosition, 10));
            hasScrolledRef.current = true;
          });
        } else if (!hash) {
          // Solo ir al inicio si no hay hash y no hay posición guardada
          window.scrollTo(0, 0);
        }
      });
    };

    // Manejar el evento de carga
    if (document.readyState === 'complete') {
      restoreScrollPosition();
    } else {
      window.addEventListener('load', restoreScrollPosition, { once: true });
    }

    // Manejar el hash si existe
    if (hash) {
      const id = hash.replace('#', '');
      // Pequeño retraso para asegurar que el elemento esté en el DOM
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    // Limpiar cuando el componente se desmonte o cambie la ruta
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', restoreScrollPosition);
      hasScrolledRef.current = false;
    };
  }, [pathname, search, hash, fullPath]);

  // Marcar que ya no es el montaje inicial
  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  return null;
};

export default ScrollToTop;
