import React from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const authors = [
    "Abad García Jahir Armando",
    "Alvarado Alvarado Ginger Solange",
    "Alvarado Correa Jonathan Miguel",
    "Delgado Reyes Kerly Nallely",
    "Fuentes Briones Cristofer Joel",
    "Lasso Loor Gissela Alejandra",
    "León Quijije José Antonio",
    "Mosquera Sarco Dave Andrés",
    "Sánchez Aguilar Jhandry José",
    "Veliz Espinoza Allyson Geamyllete"
  ];

  return (
    <footer id="creditos" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Institution Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Institución
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">Facultad de Ciencias e Ingeniería</p>
              <p>Carrera de Tecnología de la Información</p>
              <p>Asignatura: Apreciación Del Arte y Cultura</p>
              <p>Docente: Ing. Sandra Elizabeth Campuzano Vera</p>
              <p>Ubicación: Milagro, Ecuador</p>
            </div>
          </div>

          {/* Authors */}
          <div>
            <h3 className="text-2xl font-bold text-[#0052A5] mb-6 flex items-center gap-2">
              <Users className="h-6 w-6" />
              Autores del Proyecto
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
              {authors.map((author, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E8112D] rounded-full"></span>
                  {author}
                </li>
              ))}
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="text-2xl font-bold text-[#E8112D] mb-6 flex items-center gap-2">
              <BookOpenIcon className="h-6 w-6" />
              Referencias Bibliográficas
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <p className="font-semibold">Jaramillo Alvarado, P. (1954)</p>
                <p className="italic">El indio ecuatoriano.</p>
                <p>Quito, Ecuador: Casa de la Cultura Ecuatoriana.</p>
              </li>
              <li>
                <p className="font-semibold">Carbonell, E., et al. (2022)</p>
                <p className="italic">Voces de carnaval. Ritualidad festiva, resignificación cultural y mercantilismo.</p>
                <p>Editorial Abya-Yala.</p>
              </li>
              <li>
                <p className="font-semibold">Perez Ortiz, D. A. (2021)</p>
                <p className="italic">Rodeo montubio como evento programado para el desarrollo del turismo cultural.</p>
                <p>BABAHOYO: UTB.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Calendar className="h-4 w-4" />
            <span>Período académico: agosto 2025 a diciembre 2026</span>
          </div>
          <p>&copy; 2025 Trayectoria Cultural del Ecuador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export default Footer;
