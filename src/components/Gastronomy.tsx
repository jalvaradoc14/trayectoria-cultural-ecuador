import React from 'react';
import { Utensils, Map, Video, PlayCircle } from 'lucide-react';

const Gastronomy: React.FC = () => {
  return (
    <section id="gastronomia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1569072412439-e8cd5d6f22df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxIb3JuYWRvJTIwZWN1YWRvciUyMGZvb2R8ZW58MHx8fHwxNzYzNjg4NTg4fDA&ixlib=rb-4.1.0&q=85" 
                alt="El Hornado Ecuatoriano" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-3xl font-bold text-white">El Hornado</h3>
                <p className="text-yellow-400 font-medium">Sabor de la Sierra Ecuatoriana</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Utensils className="h-8 w-8 text-[#E8112D]" />
              <h2 className="text-4xl font-bold text-gray-800">Gastronomía Tradicional</h2>
            </div>
            <div className="w-20 h-1 bg-[#E8112D]"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Originario de la Sierra (Tungurahua y Cotopaxi), el Hornado es un símbolo de identidad nacional. Combina técnicas coloniales con ingredientes prehispánicos como el maíz y hierbas andinas, cocinado en hornos de leña tradicionales.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2">Ingredientes Clave</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Carne de cerdo</li>
                  <li>Maíz (mote)</li>
                  <li>Hierbas andinas</li>
                  <li>Papas / Llapingachos</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                <h4 className="font-bold text-yellow-800 mb-2">Valor Cultural</h4>
                <p className="text-sm text-gray-700">
                  Refleja prácticas de sociabilidad y transmisión de saberes culinarios generacionales.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl mt-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Video className="h-5 w-5 text-[#0052A5]" />
                Propuesta Digital
              </h4>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#0052A5] font-bold">✓</span>
                  Plataforma digital con recetas tradicionales
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052A5] font-bold">✓</span>
                  Videos de procesos de preparación
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0052A5] font-bold">✓</span>
                  <span className="flex items-center gap-1">Mapas con ubicación de huecas <Map className="h-3 w-3" /></span>
                </li>
              </ul>
              <a 
                href="https://youtu.be/G-BVfbHNWMI?si=0RjP26slPLtNv7y8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#E8112D] px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <PlayCircle className="h-4 w-4" /> Ver Preparación en Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
