import React, { useState } from 'react';
import { Map, Gamepad2, Share2, Trophy, ExternalLink, BookOpen, X } from 'lucide-react';
import fiestasMap from '../assets/fiestas_de_ecuador.png'; // Asegúrate de que el archivo se llame así

const DigitalProposal: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <section id="propuesta" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#E8112D] font-bold tracking-wider uppercase text-sm">Innovación Cultural</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Ecua-Evento Cultural</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Una plataforma digital integral para documentar, dinamizar y promocionar nuestras festividades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Mapa de Festividades */}
          <div className="bg-white p-4 rounded-2xl shadow-lg border-t-4 border-[#FFD700] hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                src={fiestasMap} 
                alt="Mapa de Festividades del Ecuador" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setIsMapOpen(true)}
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">Mapa de Festividades</h3>
              <Map className="h-5 w-5 text-[#FFD700]" />
            </div>
            <p className="text-gray-600 text-sm flex-grow">
              Encuentra eventos cercanos, fechas exactas y rutas para llegar a las celebraciones en todo el país.
            </p>
            <button 
              onClick={() => setIsMapOpen(true)}
              className="mt-4 w-full bg-[#FFD700] text-gray-900 py-2 px-4 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              <Map className="h-4 w-4" />
              Ver Mapa
            </button>
          </div>

          {/* Feature 2: Gamificación */}
          <div className="bg-white p-4 rounded-2xl shadow-lg border-t-4 border-[#0052A5] hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                src="https://pixabay.com/get/g26bb8fc74afcb4c09f032c0795513308618cdcaaa51dab62d461abccdf4994ca8d10f9014b5acf14ed57905e2f77b9a83b7be1acd4033bb099f50a16f350f15a_1280.jpg" 
                alt="Gamificación y Aprendizaje" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">Gamificación</h3>
              <Gamepad2 className="h-5 w-5 text-[#0052A5]" />
            </div>
            <p className="text-gray-600 text-sm flex-grow">
              Aprende jugando. Trivias sobre costumbres, puzles musicales y desafíos culturales para ganar insignias y premios virtuales.
            </p>
            <a 
              href="https://view.genially.com/691f4a07f28c5e144ad07a09/interactive-content-trivia-cultural-del-ecuador-trayectoria-cultural-y-patrimonio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 w-full bg-[#0052A5] text-white py-2 px-4 rounded-lg font-bold text-sm hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              <Gamepad2 className="h-4 w-4" />
              Jugar Ahora
            </a>
          </div>

          {/* Feature 3: Comunidad Social */}
          <div className="bg-white p-4 rounded-2xl shadow-lg border-t-4 border-[#E8112D] hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
               <img 
                src="https://pixabay.com/get/g037a86e5ac62a0ffbb4257aeac343f5506ed240aa1d6a2b8035216df9e46b393dd0ee739313c2590a25ac527c51fd1a74419907d0d20865652b32bb26fb5f0dd_1280.png" 
                alt="Comunidad Social" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">Comunidad Social</h3>
              <Share2 className="h-5 w-5 text-[#E8112D]" />
            </div>
            
            <div className="flex-grow">
              <h4 className="font-bold text-gray-700 text-sm mb-1">Importancia de la Identidad Cultural</h4>
              <p className="text-gray-600 text-xs line-clamp-3">
                La identidad cultural es vital para el sentido de pertenencia y la cohesión social. Trabajar en ella fortalece a nuestras comunidades y evita el abandono de los pueblos.
              </p>
            </div>

            <a 
              href="https://almanatura.com/2018/05/por-que-importante-trabajar-identidad-cultural-cada-pueblo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 w-full bg-[#E8112D] text-white py-2 px-4 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Leer más
            </a>
          </div>
        </div>

        <div className="mt-16 bg-[#0052A5] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <Trophy className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Beneficios de la Plataforma</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] font-bold text-xl">✓</span>
                <p className="text-sm text-blue-100">Fomento del turismo cultural sostenible.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] font-bold text-xl">✓</span>
                <p className="text-sm text-blue-100">Archivo digital para futuras generaciones.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFD700] font-bold text-xl">✓</span>
                <p className="text-sm text-blue-100">Conexión innovadora con nuestras raíces.</p>
              </div>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
      </div>

      {/* Map Modal */}
      {isMapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsMapOpen(false)}>
          <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white text-gray-800 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-2 h-full flex items-center justify-center bg-gray-100">
               <img 
                src={fiestasMap} 
                alt="Mapa de Festividades del Ecuador - Vista Completa" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>
            <div className="bg-white p-4 text-center border-t border-gray-200">
              <h3 className="font-bold text-lg text-gray-800">Mapa de Festividades del Ecuador</h3>
              <p className="text-sm text-gray-500">Explora la ubicación de las principales celebraciones culturales.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalProposal;
