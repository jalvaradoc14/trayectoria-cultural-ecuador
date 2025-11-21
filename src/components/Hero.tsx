import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611460415343-523ee381bbff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxFY3VhZG9yJTIwbGFuZHNjYXBlJTIwY3VsdHVyZXxlbnwwfHx8fDE3NjM2ODg1ODl8MA&ixlib=rb-4.1.0&q=85" 
          alt="Ecuador Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/80 via-[#0052A5]/70 to-[#E8112D]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Trayectoria Cultural del Ecuador
          </h1>
          <p className="text-xl md:text-3xl font-light mb-8 drop-shadow-md">
            Un viaje por nuestras tradiciones, gastronomía y leyendas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 mb-12"
        >
          <p className="text-lg mb-4">
            Este sitio web está dedicado a preservar, documentar y difundir las riquezas culturales del Ecuador. Desde las danzas tradicionales de los Andes hasta las festividades costeras, pasando por nuestra gastronomía ancestral y las leyendas transmitidas de generación en generación.
          </p>
          <p className="font-semibold text-[#FFD700]">
            Objetivo: Conectar la tradición con la modernidad, utilizando la tecnología para que las nuevas generaciones conozcan y valoren nuestro patrimonio cultural.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="#danzas" className="inline-flex items-center gap-2 bg-[#E8112D] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
            Explorar Cultura
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
