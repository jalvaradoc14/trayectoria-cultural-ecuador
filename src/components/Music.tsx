import React from 'react';
import { Music2, Mic2, Database, ExternalLink } from 'lucide-react';

const MusicSection: React.FC = () => {
  return (
    <section id="musica" className="py-20 bg-[#0052A5] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Música Ancestral</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Sonidos que conectan con la Pachamama y mantienen viva nuestra identidad
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#E8112D] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://images.unsplash.com/photo-1681975204627-949122a95a61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxwYW4lMjBmbHV0ZSUyMGFuZGVhbnxlbnwwfHx8fDE3NjM2ODg1ODh8MA&ixlib=rb-4.1.0&q=85" 
                  alt="El Rondador" 
                  className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFD700] rounded-full text-[#0052A5]">
                  <Music2 className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">El Rondador</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#FFD700] mb-2">Contexto Histórico</h4>
                  <p className="text-blue-50 text-sm leading-relaxed">
                    Flauta doble andina de tiempos precolombinos, hecha generalmente de caña. Utilizada en ceremonias y rituales agrícolas, su sonido evoca la conexión espiritual con la naturaleza y la cosmovisión andina.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FFD700] mb-2">Significado</h4>
                  <p className="text-blue-50 text-sm leading-relaxed">
                    Vehículo para la transmisión oral de historias y valores. Mantiene viva la identidad cultural de los pueblos de las montañas ecuatorianas.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-[#FFD700]" />
                  Solución Tecnológica Propuesta
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <a 
                    href="https://www.youtube.com/watch?v=SCFftef1cvA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black/20 p-4 rounded-xl text-center hover:bg-black/30 transition-colors group"
                  >
                    <Mic2 className="h-6 w-6 mx-auto mb-2 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span className="text-sm block mb-1">Base de datos</span>
                    <span className="text-xs text-blue-200 flex items-center justify-center gap-1">Escuchar <ExternalLink className="h-3 w-3" /></span>
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=Nl32TU5NiVM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black/20 p-4 rounded-xl text-center hover:bg-black/30 transition-colors group"
                  >
                    <Music2 className="h-6 w-6 mx-auto mb-2 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span className="text-sm block mb-1">Partituras</span>
                    <span className="text-xs text-blue-200 flex items-center justify-center gap-1">Ver <ExternalLink className="h-3 w-3" /></span>
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=dLojTx3NVH4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black/20 p-4 rounded-xl text-center hover:bg-black/30 transition-colors group"
                  >
                    <VideoIcon className="h-6 w-6 mx-auto mb-2 text-[#FFD700] group-hover:scale-110 transition-transform" />
                    <span className="text-sm block mb-1">Guías didácticas</span>
                    <span className="text-xs text-blue-200 flex items-center justify-center gap-1">Aprender <ExternalLink className="h-3 w-3" /></span>
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

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

export default MusicSection;
