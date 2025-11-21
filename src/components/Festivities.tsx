import React from 'react';
import { Users, Heart, Flame, PlayCircle } from 'lucide-react';

const Festivities: React.FC = () => {
  return (
    <section id="festividades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Festividades Regionales</h2>
          <div className="w-24 h-1 bg-[#0052A5] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Rodeo Montuvio */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1731323043951-7c8f5adc6cc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxyb2RlbyUyMGhvcnNlJTIwZWN1YWRvciUyMGNvc3RhfGVufDB8fHx8MTc2MzY4ODU4OXww&ixlib=rb-4.1.0&q=85" 
                alt="Rodeo Montuvio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <a 
                href="https://www.youtube.com/watch?v=IFEIN28BUHI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
              </a>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#E8112D]">Rodeo Montuvio</h3>
                <a 
                  href="https://www.youtube.com/watch?v=IFEIN28BUHI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0052A5] hover:underline flex items-center gap-1"
                >
                  Ver Video <PlayCircle className="h-3 w-3" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">Fiesta tradicional campesina de la Costa.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>Celebra costumbres rurales y ganadería.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>Demostración de destrezas a caballo.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>Música de bandas y cantores locales.</li>
              </ul>
            </div>
          </div>

          {/* Carnaval de Guaranda */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1659895152475-b75e6cbde852?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxjYXJuaXZhbCUyMGNvbG9yZnVsJTIwcGFyYWRlfGVufDB8fHx8MTc2MzY4ODU4OXww&ixlib=rb-4.1.0&q=85" 
                alt="Carnaval de Guaranda" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <a 
                href="https://www.youtube.com/watch?v=H1zSmr61V4s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
              </a>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-[#0052A5]">Carnaval de Guaranda</h3>
                <a 
                  href="https://www.youtube.com/watch?v=H1zSmr61V4s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E8112D] hover:underline flex items-center gap-1"
                >
                  Ver Video <PlayCircle className="h-3 w-3" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">La fiesta mayor de la Sierra central.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>Fusión indígena, mestiza y afroecuatoriana.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>Honor a la Pachamama y tradiciones cristianas.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>Música andina, coplas y comparsas.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Análisis de Funciones Sociales</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left text-gray-600 font-bold rounded-tl-lg">Función Social</th>
                <th className="p-4 text-left text-[#E8112D] font-bold">Rodeo Montuvio</th>
                <th className="p-4 text-left text-[#0052A5] font-bold rounded-tr-lg">Carnaval de Guaranda</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-700 flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" /> Cohesión Comunitaria
                </td>
                <td className="p-4 text-sm text-gray-600">Punto de encuentro rural, interacción intergeneracional.</td>
                <td className="p-4 text-sm text-gray-600">Identidad colectiva sin distinción étnica, participación masiva.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-700 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-gray-400" /> Identidad Regional
                </td>
                <td className="p-4 text-sm text-gray-600">Orgullo costero, vínculo tierra-animales.</td>
                <td className="p-4 text-sm text-gray-600">Manifestación andina, convivencia intercultural.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold text-gray-700 flex items-center gap-2">
                  <Flame className="h-5 w-5 text-gray-400" /> Ritualidad
                </td>
                <td className="p-4 text-sm text-gray-600">Ciclo de vida rural, relación hombre-naturaleza.</td>
                <td className="p-4 text-sm text-gray-600">Sagrado y profano, renovación de la tierra.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Festivities;
