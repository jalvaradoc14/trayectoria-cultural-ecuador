import React from 'react';
import { Music, Smartphone, Info, PlayCircle } from 'lucide-react';

const Dances: React.FC = () => {
  return (
    <section id="danzas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Danzas y Celebraciones Tradicionales</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Diablada de Píllaro */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1646874964082-24f3a0a25099?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxEaWFibGFkYSUyMFBpbGxhcm8lMjBtYXNrfGVufDB8fHx8MTc2MzY4ODU4OXww&ixlib=rb-4.1.0&q=85" 
                alt="Diablada de Píllaro" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-[#E8112D] text-white px-4 py-1 rounded-full text-sm font-bold">
                Patrimonio Cultural
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0052A5] mb-4">Diablada de Píllaro</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#FFD700]" /> Contexto Histórico
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Celebrada cada 1 y 2 de noviembre, con raíces prehispánicas y sincretismo colonial. Simboliza el enfrentamiento entre el bien y el mal con disfraces elaborados artesanalmente.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Music className="h-4 w-4 text-[#FFD700]" /> Relación Temática
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Vinculada con música y juegos rituales, reafirma tradiciones a través del ritmo y la interacción entre diablos y público.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#0052A5]">
                  <h4 className="font-bold text-[#0052A5] flex items-center gap-2 mb-2">
                    <Smartphone className="h-4 w-4" /> Aplicación Tecnológica
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    App móvil con realidad aumentada para experimentar la danza y visualizar detalles de los disfraces.
                  </p>
                  <a 
                    href="https://youtu.be/li-9jyAPGSo?si=nd_sDgmpSPgSXcyW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0052A5] px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <PlayCircle className="h-3 w-3" /> Ver Concepto en Video
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fiesta de la Mama Negra */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1746637192409-9a43a6e5b381?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwzfHxNYW1hJTIwTmVncmElMjBMYXRhY3VuZ2F8ZW58MHx8fHwxNzYzNjg4NTg4fDA&ixlib=rb-4.1.0&q=85" 
                alt="Fiesta de la Mama Negra" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-[#E8112D] text-white px-4 py-1 rounded-full text-sm font-bold">
                Latacunga
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0052A5] mb-4">Fiesta de la Mama Negra</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#FFD700]" /> Contexto Histórico
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Producto del mestizaje (indígena, español, africano). Se celebra en honor a la Virgen de la Merced. La Mama Negra representa fertilidad y protección.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Music className="h-4 w-4 text-[#FFD700]" /> Relación Temática
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Integra música, danza y rituales que refuerzan la cohesión social y la memoria histórica comunitaria.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#0052A5]">
                  <h4 className="font-bold text-[#0052A5] flex items-center gap-2 mb-2">
                    <Smartphone className="h-4 w-4" /> Aplicación Tecnológica
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Tour virtual 360° de la fiesta para acceso mundial y aprendizaje sobre sus orígenes.
                  </p>
                  <a 
                    href="https://youtu.be/nVLKkBYl_fk?si=0UnuNBzJGqE5V0Wn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0052A5] px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <PlayCircle className="h-3 w-3" /> Ver Tour Virtual
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dances;
