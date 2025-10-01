import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * Componente de pestañas verticales reutilizable
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.tabs - Array de objetos con la configuración de las pestañas
 * @param {string} props.activeTab - ID de la pestaña activa (opcional)
 * @param {function} props.onTabChange - Función que se ejecuta al cambiar de pestaña (opcional)
 * @param {string} props.title - Título de la sección de pestañas (opcional)
 * @param {string} props.className - Clases CSS adicionales para el contenedor principal (opcional)
 * @returns {JSX.Element} Componente de pestañas verticales
 */
const VerticalTabs = ({
  tabs = [],
  activeTab: externalActiveTab,
  onTabChange,
  title = 'Nuestros Servicios',
  className = ''
}) => {
  // Estado interno para manejar la pestaña activa si no se proporciona una externamente
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');
  
  // Usar la pestaña controlada externamente si se proporciona, de lo contrario usar el estado interno
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  
  // Manejar el cambio de pestaña
  const handleTabChange = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };
  
  // Encontrar la pestaña activa actual
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <div className="md:flex">
        {/* Tabs laterales */}
        <div className="md:w-1/3 bg-gray-50 border-r border-gray-200">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-red-700 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  <span className="flex items-center">
                    {tab.icon && <span className="mr-2">{tab.icon}</span>}
                    {tab.title}
                  </span>
                  <ChevronRight 
                    className={`ml-auto h-5 w-5 transform transition-transform duration-200 ${
                      activeTab === tab.id ? 'rotate-90 text-white' : 'text-gray-400'
                    }`} 
                    aria-hidden="true"
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Contenido del tab activo */}
        <div className="md:w-2/3">
          <AnimatePresence mode="wait">
            {currentTab && (
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 h-full"
                role="tabpanel"
                aria-labelledby={`tab-${currentTab.id}`}
              >
                {currentTab.header || (
                  <div className="flex items-center mb-6">
                    {currentTab.icon && (
                      <div className="p-3 rounded-full bg-red-100 text-red-700 mr-4">
                        {currentTab.icon}
                      </div>
                    )}
                    <div>
                      {currentTab.subtitle && (
                        <h3 className="text-2xl font-bold text-gray-900">
                          {currentTab.subtitle}
                        </h3>
                      )}
                      {currentTab.description && (
                        <p className="text-gray-600">{currentTab.description}</p>
                      )}
                    </div>
                  </div>
                )}
                <div className="prose max-w-none">
                  {currentTab.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
