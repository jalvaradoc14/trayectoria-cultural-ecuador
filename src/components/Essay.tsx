import React from 'react';
import { Quote } from 'lucide-react';

const Essay: React.FC = () => {
  return (
    <section id="ensayo" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">La Trayectoria Cultural Ecuatoriana</h2>
          <p className="text-gray-500 italic">Ensayo Crítico / Reflexión Cultural</p>
        </div>

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FFD700] mb-8">
            <p className="italic text-gray-600 m-0">
              "La trayectoria cultural del Ecuador es reflejo de una historia marcada por la diversidad y el mestizaje. Entre múltiples expresiones, la gastronomía, la música tradicional y las leyendas destacan como pilares de identidad."
            </p>
          </div>

          <h3 className="text-xl font-bold text-[#0052A5] mt-8 mb-4">Desarrollo</h3>
          <p className="mb-6">
            La <strong>gastronomía</strong> surge de la herencia ancestral de pueblos originarios que domesticaron el maíz y la papa, fusionándose luego con ingredientes europeos. Platos como la fanesca o el hornado son identificativos, pero enfrentan el desafío de la influencia de cadenas de comida rápida que debilitan la transmisión de saberes.
          </p>
          <p className="mb-6">
            La <strong>música tradicional</strong> (Sanjuanito, Marimba, Pasillo) refleja nuestra diversidad étnica. Son símbolos de memoria y resistencia. Sin embargo, la hegemonía de géneros globalizados en plataformas digitales amenaza con reducirlos a meros contextos folclóricos o académicos.
          </p>
          <p className="mb-6">
            Los <strong>cuentos y leyendas</strong> como La Tunda o Cantuña no solo entretienen, sino que transmiten valores. Lamentablemente, la oralidad se debilita por el escaso interés juvenil y su falta de incorporación efectiva en el sistema educativo formal.
          </p>

          <h3 className="text-xl font-bold text-[#E8112D] mt-8 mb-4">Análisis Crítico</h3>
          <p className="mb-6">
            El mayor desafío no es la globalización en sí, sino la <strong>falta de estrategias creativas</strong> para proyectar tradiciones en la era digital. Las TIC ofrecen oportunidades invaluables: recetarios digitales, festivales en línea y videojuegos basados en leyendas pueden conectar la memoria cultural con el lenguaje de las nuevas generaciones.
          </p>

          <div className="mt-10 p-8 bg-[#0052A5] text-white rounded-2xl relative overflow-hidden">
            <Quote className="absolute top-4 left-4 h-12 w-12 text-white/20" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Conclusión</h3>
            <p className="relative z-10 font-light text-lg">
              La trayectoria cultural ecuatoriana demuestra que la tradición NO está reñida con la modernidad. Al contrario, la CLAVE está en articular historia, técnica y tecnología para preservar nuestra riqueza cultural y proyectarla hacia el futuro como parte esencial de nuestra identidad nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essay;
