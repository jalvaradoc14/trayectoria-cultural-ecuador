import React from 'react';
import { Book, Sparkles, PenTool, ExternalLink } from 'lucide-react';

const Legends: React.FC = () => {
  return (
    <section id="leyendas" className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#E8112D] rounded-full blur-[100px] opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1663480250346-b0401e0b5fd9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxTYW4lMjBGcmFuY2lzY28lMjBjaHVyY2glMjBRdWl0b3xlbnwwfHx8fDE3NjM2ODg1ODh8MA&ixlib=rb-4.1.0&q=85" 
              alt="Iglesia de San Francisco" 
              className="relative z-10 rounded-lg shadow-2xl border-4 border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-lg shadow-xl z-20 border border-gray-700">
              <p className="text-[#FFD700] font-serif italic">"¡Ni una piedra más!"</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-200">
                Leyendas Ecuatorianas
              </h2>
              <h3 className="text-2xl font-semibold text-gray-400">La Leyenda de Cantuña</h3>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                <strong className="text-white">El Pacto:</strong> En la época colonial, el indígena Cantuña pactó con el diablo para terminar el atrio de la Iglesia de San Francisco a tiempo y salvar su honor.
              </p>
              <p>
                <strong className="text-white">La Astucia:</strong> A cambio de su alma, los diablillos trabajaron toda la noche. Pero Cantuña escondió una piedra bajo su poncho. Al amanecer, la obra estaba incompleta por esa única piedra, salvando así su alma.
              </p>
              <p>
                <strong className="text-white">Significado:</strong> Símbolo de la inteligencia, resistencia e ingenio popular frente a la adversidad y el poder.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#FFD700]/50 transition-colors">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#FFD700]">
                <Sparkles className="h-5 w-5" />
                Experiencia Interactiva
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="https://www.youtube.com/watch?v=abk2-LkjrTA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <Book className="h-5 w-5 text-[#E8112D] mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="font-bold text-white flex items-center gap-2">
                      App Narrativa <ExternalLink className="h-3 w-3 opacity-50" />
                    </h5>
                    <p className="text-xs text-gray-400">Relatos audiovisuales con ilustraciones tradicionales.</p>
                  </div>
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=lwdl0AQgi1A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <PenTool className="h-5 w-5 text-[#0052A5] mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="font-bold text-white flex items-center gap-2">
                      Co-Creación <ExternalLink className="h-3 w-3 opacity-50" />
                    </h5>
                    <p className="text-xs text-gray-400">Espacio para que usuarios creen sus propias versiones.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Legends;
